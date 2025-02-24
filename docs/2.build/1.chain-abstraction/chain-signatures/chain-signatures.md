---
id: chain-signatures
title: Implementing Chain Signatures
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {CodeTabs, Language, Github} from "@site/src/components/codetabs"

Chain signatures enable NEAR accounts, including smart contracts, to sign and execute transactions across many blockchain protocols.

This unlocks the next level of blockchain interoperability by giving ownership of diverse assets, cross-chain accounts, and data to a single NEAR account.

:::info

This guide will take you through a step by step process for creating a Chain Signature.

⭐️ For complete examples of a NEAR account performing transactions in other chains:

- [CLI script](https://github.com/mattlockyer/mpc-script)
- [web-app example](https://github.com/near-examples/near-multichain)
- [component example](https://test.near.social/bot.testnet/widget/chainsig-sign-eth-tx)

:::

---

## Create a Chain Signature

There are five steps to create a Chain Signature:

1. [Deriving the Foreign Address](#1-deriving-the-foreign-address) - Construct the address that will be controlled on the target blockchain
2. [Creating a Transaction](#2-creating-the-transaction) - Create the transaction or message to be signed
3. [Requesting a Signature](#3-requesting-the-signature) - Call the NEAR `v1.signer` contract requesting it to sign the transaction
4. [Reconstructing the Signature](#4-reconstructing-the-signature) - Reconstruct the signature from the MPC service's response
5. [Relaying the Signed Transaction](#5-relaying-the-signature) - Send the signed transaction to the destination chain for execution

![chain-signatures](/docs/assets/welcome-pages/chain-signatures-overview.png)
_Diagram of a chain signature in NEAR_

:::info MPC Contracts

If you want to try things out, these are the smart contracts available on `testnet`:

- `v1.signer-prod.testnet`: [MPC signer](https://github.com/near/mpc/tree/v0.2.0/contract) contract, latest release, made up of 8 MPC nodes

:::

:::info MPC mainnet contracts

- `v1.signer`: [MPC signer](https://github.com/near/mpc/tree/v0.2.0/contract) contract, latest release, made up of 8 MPC nodes
:::

---

## 1. Deriving the Foreign Address

Chain Signatures use [`derivation paths`](/concepts/abstraction/chain-signatures#derivation-paths-one-account-multiple-chains) to represent accounts on the target blockchain. The external address to be controlled can be deterministically derived from:

- The NEAR address (e.g., `example.near`, `example.testnet`, etc.)
- A derivation path (a string such as `ethereum-1`, `ethereum-2`, etc.)
- The MPC service's public key (see the tip below for the MPC service public keys)

We provide code to derive the address, as it's a complex process that involves multiple steps of hashing and encoding:

<Tabs groupId="code-tabs">
  <TabItem value="Ξ Ethereum">
    <Github language="js"
      url="https://github.com/near-examples/near-multichain/blob/main/src/services/ethereum.js" start="18" end="21" />

</TabItem>

<TabItem value="₿ Bitcoin">
    <Github language="js"
      url="https://github.com/near-examples/near-multichain/blob/main/src/services/bitcoin.js" start="17" end="25" />

</TabItem>

</Tabs>

:::tip

We recommend hardcoding the derivation paths in your application to ensure the signature request is made to the correct account

- **v1.signer-prod.testnet** (testnet): `secp256k1:4NfTiv3UsGahebgTaHyD9vF8KYKMBnfd6kh94mK6xv8fGBiJB8TBtFMP5WWXz6B89Ac1fbpzPwAvoyQebemHFwx3`

- **v1.signer** (mainnet): `secp256k1:3tFRbMqmoa6AAALMrEFAYCEoHcqKxeW38YptwowBVBtXK1vo36HDbUWuR6EZmoK4JcH6HDkNMGGqP1ouV7VZUWya`

:::

:::info

The same NEAR account and path will always produce the same address on the target blockchain.

- `example.near` + `ethereum-1` = `0x1b48b83a308ea4beb845db088180dc3389f8aa3b`
- `example.near` + `ethereum-2` = `0x99c5d3025dc736541f2d97c3ef3c90de4d221315`

:::

---

## 2. Creating the Transaction

Constructing the transaction to be signed (transaction, message, data, etc.) varies depending on the target blockchain, but generally it's the hash of the message or transaction to be signed.

<Tabs groupId="code-tabs">
  <TabItem value="Ξ Ethereum">
    <Github language="js"
      url="https://github.com/near-examples/near-multichain/blob/main/src/services/ethereum.js"
      start="47" end="73" />

In Ethereum, constructing the transaction is simple since you only need to specify the address of the receiver and how much you want to send.

</TabItem>

<TabItem value="₿ Bitcoin">
    <Github language="js"
      url="https://github.com/near-examples/near-multichain/blob/main/src/services/bitcoin.js"
      start="41" end="53" />

In bitcoin, you construct a new transaction by using all the Unspent Transaction Outputs (UTXOs) of the account as input, and then specify the output address and amount you want to send.

</TabItem>

</Tabs>

---

## 3. Requesting the Signature

Once the transaction is created and ready to be signed, a signature request is made by calling `sign` on the [MPC smart contract](https://github.com/near/mpc-recovery/blob/f31e39f710f2fb76706e7bb638a13cf1fa1dbf26/contract/src/lib.rs#L298).

The method requires two parameters:

  1. The `transaction` to be signed for the target blockchain
  2. The derivation `path` for the account we want to use to sign the transaction

<Tabs groupId="code-tabs">
  <TabItem value="Ξ Ethereum">
    <Github language="js"
      url="https://github.com/near-examples/near-multichain/blob/main/src/services/ethereum.js"
      start="75" end="87" />

</TabItem>

  <TabItem value="₿ Bitcoin">
    <Github language="js"
      url="https://github.com/near-examples/near-multichain/blob/main/src/services/bitcoin.js"
      start="55" end="118" />

For bitcoin, all UTXOs are signed independently and then combined into a single transaction.

</TabItem>

</Tabs>

<details>

  <summary> Deposit amount </summary>

  In this example, we attach a deposit of 0.05 $NEAR for the signature request. The transaction may fail if the network is congested since the deposit required by the MPC service scales linearly with the number of pending requests, from 1 yoctoNEAR to a maximum of 0.65 $NEAR. Any unused deposit will be refunded and if the signature fails, the user will be refunded the full deposit.

  The MPC contract does implement a method to check the current deposit required, however, it cannot be used reliably since the amount will likely change between the time of the check and the time of the request.

</details>

:::info

The contract will take some time to respond, as the `sign` method [yields execution](/blog/yield-resume), waiting for the MPC service to sign the transaction.

:::

---

## 4. Reconstructing the Signature

The MPC contract will not return the signature of the transaction itself, but the elements needed to reconstruct the signature.

This allows the contract to generalize the signing process for multiple blockchains.

<Tabs groupId="code-tabs">
  <TabItem value="Ξ Ethereum">
    <Github language="js"
      url="https://github.com/near-examples/near-multichain/blob/main/src/services/ethereum.js"
      start="89" end="100" />

In Ethereum, the signature is reconstructed by concatenating the `r`, `s`, and `v` values returned by the contract.

</TabItem>
<!-- https://github.com/near-examples/near-multichain/blob/1c07d9a3de7f1f2ee93206b77832838f2892144b/src/services/bitcoin.js -->
<TabItem value="₿ Bitcoin">
    <Github language="js"
      url="https://github.com/near-examples/near-multichain/blob/main/src/services/bitcoin.js"
      start="86" end="99" />

In Bitcoin, the signature is reconstructed by concatenating the `r` and `s` values returned by the contract.

</TabItem>

</Tabs>

---

## 5. Relaying the Signature

Once we have reconstructed the signature, we can relay it to the corresponding network. This will once again vary depending on the target blockchain.

<Tabs groupId="code-tabs">
  <TabItem value="Ξ Ethereum">
    <Github language="js"
      url="https://github.com/near-examples/near-multichain/blob/main/src/services/ethereum.js"
      start="109" end="115" />

</TabItem>
<!-- https://github.com/near-examples/near-multichain/blob/1c07d9a3de7f1f2ee93206b77832838f2892144b/src/services/bitcoin.js -->
<TabItem value="₿ Bitcoin">
    <Github language="js"
      url="https://github.com/near-examples/near-multichain/blob/main/src/services/bitcoin.js"
      start="120" end="133" />

</TabItem>

</Tabs>

:::info
⭐️ For a deep dive into the concepts of Chain Signatures see [What are Chain Signatures?](/concepts/abstraction/chain-signatures)

⭐️ For complete examples of a NEAR account performing Eth transactions:

- [web-app example](https://github.com/near-examples/near-multichain)
- [component example](https://test.near.social/bot.testnet/widget/chainsig-sign-eth-tx)

:::
