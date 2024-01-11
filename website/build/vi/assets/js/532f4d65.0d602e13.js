"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8575],{16107:(e,t,A)=>{A.r(t),A.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=A(85893),a=A(11151);const s={sidebar_label:"NEAR Data Flow"},r="NEAR Data Flow",o={id:"concepts/data-flow/near-data-flow",title:"NEAR Data Flow",description:"<iframe",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/1.concepts/data-flow/near-data-flow.md",sourceDirName:"1.concepts/data-flow",slug:"/concepts/data-flow/near-data-flow",permalink:"/vi/concepts/data-flow/near-data-flow",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/data-flow/near-data-flow.md",tags:[],version:"current",frontMatter:{sidebar_label:"NEAR Data Flow"},sidebar:"concepts",previous:{title:"Gas - Advanced",permalink:"/vi/concepts/basics/transactions/gas-advanced"},next:{title:"Token Transfer",permalink:"/vi/concepts/data-flow/token-transfer-flow"}},i={},c=[{value:"Summary",id:"summary",level:2}];function d(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"near-data-flow",children:"NEAR Data Flow"}),"\n",(0,n.jsx)("iframe",{width:"100%",height:"500",src:"https://www.youtube.com/embed/VSBJ-A69Km4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,n.jsx)(t.admonition,{title:"Data flow",type:"info",children:(0,n.jsx)(t.p,{children:"In this video we give a quick overview on the main concept of how the data flows across the NEAR Protocol blockchain."})}),"\n",(0,n.jsx)(t.p,{children:"NEAR Protocol blockchain data flow might be a bit tricky at a glance. But it is pretty straightforward and follows well-defined rules. In this article, we are going to have a closer look at how the data flows in NEAR Protocol blockchain."}),"\n",(0,n.jsx)(t.p,{children:"In fact, any blockchain flow can be represented as an infinity timeline that has a start but has no end."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Blocks Timeline",src:A(97494).Z+"",width:"1305",height:"102"})}),"\n",(0,n.jsxs)(t.p,{children:["And a block appears on that timeline with some interval. Each of these blocks holds the information about the previous one, thus, creating a ",(0,n.jsx)(t.em,{children:"chain of blocks"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["NEAR Protocol has a sharded nature, meaning that more than one parallel network, called a ",(0,n.jsx)(t.a,{href:"https://near-indexers.io/docs/data-flow-and-structures/structures/shard",children:"Shard"}),", can be live at any moment. And each Shard produces a chunk of a block at a given interval. A Block in NEAR Blockchain is a collection of the block chunks from all shards. Block chunk is shortened to ",(0,n.jsx)(t.a,{href:"https://near-indexers.io/docs/data-flow-and-structures/structures/chunk",children:"Chunk"})," in NEAR Protocol documentation."]}),"\n",(0,n.jsx)(t.p,{children:"Returning to the data flow itself. The best we can do is to imagine tracks like we could see in audio/video editing apps. Each Shard has its own set of tracks. The top track is for Chunks. They appear no matter what at a given interval, for NEAR Blockchain the interval is about one second. Chunks are being produced even if nothing is happening on the blockchain."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Timeline as tracks",src:A(29476).Z+"",width:"1449",height:"700"})}),"\n",(0,n.jsxs)(t.p,{children:["But what do we mean by saying something is happening? We mean that something has triggered some changes in the blockchain. And the most well known method to trigger any changes is to send a ",(0,n.jsx)(t.a,{href:"https://near-indexers.io/docs/data-flow-and-structures/structures/transaction",children:"Transaction"})," to the blockchain with instructions of what we want to change and who has requested those changes."]}),"\n",(0,n.jsxs)(t.p,{children:["A transaction needs to be constructed, signed and sent to the blockchain. Once it is executed we expect to have a result - ",(0,n.jsx)(t.a,{href:"https://near-indexers.io/docs/data-flow-and-structures/structures/execution_outcome",children:"ExecutionOutcome"}),". Oh, that is simple. But it\u2019s not really accurate for NEAR Blockchain."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Transaction execution",src:A(20123).Z+"",width:"1449",height:"700"})}),"\n",(0,n.jsxs)(t.p,{children:["In the beginning there is a ",(0,n.jsx)(t.a,{href:"https://near-indexers.io/docs/data-flow-and-structures/structures/transaction",children:"Transaction"}),", it contains instructions we want to be executed on the blockchain. Transaction is sent to NEAR Blockchain."]}),"\n",(0,n.jsxs)(t.p,{children:["And yes, it is executed there immediately BUT the immediate result of the transaction execution is always just ",(0,n.jsx)(t.em,{children:"an acknowledgement that it will be executed on the chain;"})," this internal execution request is known as ",(0,n.jsx)(t.a,{href:"https://near-indexers.io/docs/data-flow-and-structures/structures/receipt",children:"Receipt"}),". You can think of the ",(0,n.jsx)(t.a,{href:"https://near-indexers.io/docs/data-flow-and-structures/structures/receipt",children:"Receipt"})," as an internal transaction that exists to pass information across shards."]}),"\n",(0,n.jsx)(t.p,{children:"Let\u2019s get back to the tracks to look at the example."}),"\n",(0,n.jsxs)(t.p,{children:["Assuming we have two accounts living on different ",(0,n.jsx)(t.a,{href:"https://near-indexers.io/docs/data-flow-and-structures/structures/shard",children:"Shards"})," ",(0,n.jsx)(t.strong,{children:"alice.near"})," and ",(0,n.jsx)(t.strong,{children:"bob.near"}),". ",(0,n.jsx)(t.strong,{children:"alice.near"})," creates a ",(0,n.jsx)(t.a,{href:"https://near-indexers.io/docs/data-flow-and-structures/structures/transaction",children:"Transaction"})," to send a few tokens to ",(0,n.jsx)(t.strong,{children:"bob.near"}),". The ",(0,n.jsx)(t.a,{href:"https://near-indexers.io/docs/data-flow-and-structures/structures/transaction",children:"Transaction"})," is immediately executed and the ",(0,n.jsx)(t.a,{href:"https://near-indexers.io/docs/data-flow-and-structures/structures/execution_outcome",children:"ExecutionOutcome"})," for the ",(0,n.jsx)(t.a,{href:"https://near-indexers.io/docs/data-flow-and-structures/structures/transaction",children:"Transaction"})," is always a ",(0,n.jsx)(t.a,{href:"https://near-indexers.io/docs/data-flow-and-structures/structures/receipt",children:"Receipt"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["But this ",(0,n.jsx)(t.a,{href:"https://near-indexers.io/docs/data-flow-and-structures/structures/receipt",children:"Receipt"})," cannot be executed here, because ",(0,n.jsx)(t.strong,{children:"bob.near"})," doesn\u2019t live on the same Shard as ",(0,n.jsx)(t.strong,{children:"alice.near"}),", so ",(0,n.jsx)(t.strong,{children:"the Receipt must be executed on the receiver\u2019s Shard"}),". So the Receipt is moving to the Shard where ",(0,n.jsx)(t.strong,{children:"bob.near"})," belongs to."]}),"\n",(0,n.jsx)(t.p,{children:"On the destination Shard the Receipt is executed and the process is considered as done."}),"\n",(0,n.jsx)(t.admonition,{title:"The explanation here is simplified",type:"info",children:(0,n.jsxs)(t.p,{children:["Please refer to the ",(0,n.jsx)(t.a,{href:"/vi/concepts/data-flow/token-transfer-flow",children:"Token transfer"})," flow article"]})}),"\n",(0,n.jsx)(t.p,{children:"So the final scheme will look like:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Complete scheme of sending tokens from an account from one Shard to an account on another",src:A(30938).Z+"",width:"1449",height:"700"})}),"\n",(0,n.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsxs)(t.p,{children:["We have learnt the main principles of how data is flowing in NEAR Protocol. We have found out that ",(0,n.jsx)(t.a,{href:"https://near-indexers.io/docs/data-flow-and-structures/structures/transaction",children:"Transactions"})," execute and the ",(0,n.jsx)(t.a,{href:"https://near-indexers.io/docs/data-flow-and-structures/structures/execution_outcome",children:"ExecutionOutcome"})," of the Transaction is always a ",(0,n.jsx)(t.a,{href:"https://near-indexers.io/docs/data-flow-and-structures/structures/receipt",children:"Receipt"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Now we know that ",(0,n.jsx)(t.a,{href:"https://near-indexers.io/docs/data-flow-and-structures/structures/receipt",children:"Receipt"})," is a main internal asset for NEAR Protocol blockchain and it has a power of traveling between ",(0,n.jsx)(t.a,{href:"https://near-indexers.io/docs/data-flow-and-structures/structures/shard",children:"Shards"}),". We learnt the NEAR Data flow on a simple example. Of course in real life with more complex transactions, that involve cross-contract calls, there will be more Receipts and ExecutionOutcomes."]}),"\n",(0,n.jsx)(t.p,{children:"We hope this article is useful and you will be able to build your dApps and indexers easily with the knowledge of how data if flowing in NEAR Protocol."})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},97494:(e,t,A)=>{A.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABRkAAABmCAYAAABPypY1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVcSURBVHgB7d3RTSpbGIbhNWYXQAdKB5agFUgHYAXQAVgBdIBWQgmWgCXYAcdFYnKinjk7/iPM/D5PsrMTLrz7bt6staY5vCkAAAAAAN90UQAAAAAAAkRGAAAAACBEZAQAAAAAQkRGAAAAACBEZAQAAAAAQkRGAAAAACBEZAQAAAAAQkRGAAAAACBEZAQAAAAAQkRGAAAAACBEZAQAAAAAQkRGAAAAACBEZAQAAAAAQkRGAAAAACBEZAQAAAAAQkRGAAAAACBEZAQAAAAAQkRGAAAAACBEZAQAAAAAQkRGAAAAACBEZAQAAAAAQkRGAAAAACBEZAQAAAAAQkRGAAAAACBEZAQAAAAAQkRGAAAAACDkTwlomubTb4fDoQB52DnkZ+eQn51DfnYOnJuTjAAAAABAiMgIAAAAAISIjAAAAABAiMgIAAAAAISIjAAAAABAiMgIAAAAAD3w8vJShkpkBAAAAIAeuL29LQ8PD2WImsOb8k1N03z6LfDngB6yc8jPziE/O4f87BxyeN/y1dVVWa1WZTqdlqFwkhEAAAAAeqRem57NZuX+/n4wV6hFRgAAAADoocfHxzIejwcRG0VGAAAAAOixGhvre41PT0+lr7zJCLSyc8jPziE/O4f87Bxy+GrLH9X3GjebTbm7uyt94iQjAAAAAAxEvTY9mUx6d4XaSUaglZ1DfnYO+dk55GfnkMPfnGT8qH6Fej6fl9FoVM5JZARa2TnkZ+eQn51DfnYOOXwnMlb1CnWNjdPptJyLyAi0snPIz84hPzuH/OwccvhuZHxXY+Nutzv+f2reZAQAAACABOobjePx+CzvNTrJCLSyc8jPziE/O4f87BxyiJ5k/Lf6RuNisSjL5bKcgsgItLJzyM/OIT87h/zsHHLoMjK+O9V7jSIj0MrOIT87h/zsHPKzc8jhJyLju5ubm7Ldbn/svcbOIyMAAAAA0E+z2ex4hbrr2CgyAgAAAMAvUgNjfa9xPp+XroiMAAAAAPALdfle40UBAAAAAH6ly8vL0gWREQAAAAB+kdFodHyXcb/fHz8I04U/BQAAAAD4Feo7jPWKdA2NXeo8MgaeeAR66Ku3V+0ccrFzyM/OIT87hxx+8vsn9cRiPb3Y1cnFj5xkBAAAAICk6sdd1ut1mUwm5SeJjAAAAACQTL0OXa9GLxaLzq9Gf0VkBAAAAIBEZrPZ8Wp0PcV4KiIjAAAAACTw0+8uthEZAQAAAGDA6nXozWZTptNpOReREQAAAAAG6NTvLrYRGQEAAABgYOqV6O12e9J3F9tcFAAAAABgEK6vr8tutzv+60tgrERGAAAAAOi5eh16vV6X5+fns3zY5f+4Lg0AAAAAPVbfXVytVmd/d7GNyAgAAAAAPdS3dxfbiIwAAAAA0CM1Kta42Mdr0f/Fm4wAAAAA0AP1OvRyuSz7/X5QgbFqDm/KNzVN8+m3wJ8DesjOIT87h/zsHPKzc8jh9fW11+8uthEZgVZ2DvnZOeRn55CfnQPn5ro0AAAAABAiMgIAAAAAISIjAAAAABAiMgIAAAAAIaEPvwAAAAAAOMkIAAAAAISIjAAAAABAiMgIAAAAAISIjAAAAABAiMgIAAAAAISIjAAAAABAiMgIAAAAAISIjAAAAABAiMgIAAAAAISIjAAAAABAiMgIAAAAAISIjAAAAABAiMgIAAAAAISIjAAAAABAiMgIAAAAAISIjAAAAABAiMgIAAAAAISIjAAAAABAiMgIAAAAAISIjAAAAABAiMgIAAAAAISIjAAAAABAiMgIAAAAAISIjAAAAABAiMgIAAAAAISIjAAAAABAiMgIAAAAAIT8AyjHcnpE9QN/AAAAAElFTkSuQmCC"},29476:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/02-tracks-77291d208a9024d169bd768131af3bee.png"},20123:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/03-tx-outcome-receipt-0fcb113623aa8f546f29cd413b47a7db.png"},30938:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/04-send-nears-flow-cf058d744907ef8dee67e22c03249add.png"},11151:(e,t,A)=>{A.d(t,{Z:()=>o,a:()=>r});var n=A(67294);const a={},s=n.createContext(a);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);