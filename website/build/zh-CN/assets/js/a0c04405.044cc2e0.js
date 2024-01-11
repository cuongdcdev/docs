"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4504],{40578:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>_,toc:()=>d});var t=r(85893),s=r(11151),o=r(74866),a=r(85162);const i={id:"protocol",title:"Protocol"},c=void 0,_={id:"api/rpc/protocol",title:"Protocol",description:"The RPC API enables you to retrieve the current genesis and protocol configuration.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/5.api/rpc/protocol.md",sourceDirName:"5.api/rpc",slug:"/api/rpc/protocol",permalink:"/zh-CN/api/rpc/protocol",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/5.api/rpc/protocol.md",tags:[],version:"current",frontMatter:{id:"protocol",title:"Protocol"},sidebar:"api",previous:{title:"Gas",permalink:"/zh-CN/api/rpc/gas"},next:{title:"Network",permalink:"/zh-CN/api/rpc/network"}},l={},d=[{value:"Genesis Config",id:"genesis-config",level:2},{value:"What could go wrong?",id:"what-could-go-wrong",level:4},{value:"Protocol Config",id:"protocol-config",level:2},{value:"What could go wrong?",id:"what-could-go-wrong-1",level:4}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The RPC API enables you to retrieve the current genesis and protocol configuration."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"genesis-config",children:"Genesis Config"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Returns current genesis configuration."}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["method: ",(0,t.jsx)(n.code,{children:"EXPERIMENTAL_genesis_config"})]}),"\n",(0,t.jsxs)(n.li,{children:["params: ",(0,t.jsx)(n.em,{children:"none"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(a.Z,{value:"json",label:"JSON",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "EXPERIMENTAL_genesis_config"\n}\n'})})}),(0,t.jsx)(a.Z,{value:"\ud83c\udf10 JavaScript",label:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const response = await near.connection.provider.experimental_genesisConfig();\n"})})}),(0,t.jsx)(a.Z,{value:"http",label:"HTTPie",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=EXPERIMENTAL_genesis_config\n"})})})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Example response: "}),(0,t.jsx)("p",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "result": {\n    "protocol_version": 29,\n    "genesis_time": "2020-07-31T03:39:42.911378Z",\n    "chain_id": "testnet",\n    "genesis_height": 10885359,\n    "num_block_producer_seats": 100,\n    "num_block_producer_seats_per_shard": [100],\n    "avg_hidden_validator_seats_per_shard": [0],\n    "dynamic_resharding": false,\n    "protocol_upgrade_stake_threshold": [4, 5],\n    "protocol_upgrade_num_epochs": 2,\n    "epoch_length": 43200,\n    "gas_limit": 1000000000000000,\n    "min_gas_price": "5000",\n    "max_gas_price": "10000000000000000000000",\n    "block_producer_kickout_threshold": 80,\n    "chunk_producer_kickout_threshold": 90,\n    "online_min_threshold": [90, 100],\n    "online_max_threshold": [99, 100],\n    "gas_price_adjustment_rate": [1, 100],\n    "runtime_config": {\n      "storage_amount_per_byte": "90949470177292823791",\n      "transaction_costs": {\n        "action_receipt_creation_config": {\n          "send_sir": 108059500000,\n          "send_not_sir": 108059500000,\n          "execution": 108059500000\n        },\n        "data_receipt_creation_config": {\n          "base_cost": {\n            "send_sir": 4697339419375,\n            "send_not_sir": 4697339419375,\n            "execution": 4697339419375\n          },\n          "cost_per_byte": {\n            "send_sir": 59357464,\n            "send_not_sir": 59357464,\n            "execution": 59357464\n          }\n        },\n        "action_creation_config": {\n          "create_account_cost": {\n            "send_sir": 99607375000,\n            "send_not_sir": 99607375000,\n            "execution": 99607375000\n          },\n          "deploy_contract_cost": {\n            "send_sir": 184765750000,\n            "send_not_sir": 184765750000,\n            "execution": 184765750000\n          },\n          "deploy_contract_cost_per_byte": {\n            "send_sir": 6812999,\n            "send_not_sir": 6812999,\n            "execution": 6812999\n          },\n          "function_call_cost": {\n            "send_sir": 2319861500000,\n            "send_not_sir": 2319861500000,\n            "execution": 2319861500000\n          },\n          "function_call_cost_per_byte": {\n            "send_sir": 2235934,\n            "send_not_sir": 2235934,\n            "execution": 2235934\n          },\n          "transfer_cost": {\n            "send_sir": 115123062500,\n            "send_not_sir": 115123062500,\n            "execution": 115123062500\n          },\n          "stake_cost": {\n            "send_sir": 141715687500,\n            "send_not_sir": 141715687500,\n            "execution": 102217625000\n          },\n          "add_key_cost": {\n            "full_access_cost": {\n              "send_sir": 101765125000,\n              "send_not_sir": 101765125000,\n              "execution": 101765125000\n            },\n            "function_call_cost": {\n              "send_sir": 102217625000,\n              "send_not_sir": 102217625000,\n              "execution": 102217625000\n            },\n            "function_call_cost_per_byte": {\n              "send_sir": 1925331,\n              "send_not_sir": 1925331,\n              "execution": 1925331\n            }\n          },\n          "delete_key_cost": {\n            "send_sir": 94946625000,\n            "send_not_sir": 94946625000,\n            "execution": 94946625000\n          },\n          "delete_account_cost": {\n            "send_sir": 147489000000,\n            "send_not_sir": 147489000000,\n            "execution": 147489000000\n          }\n        },\n        "storage_usage_config": {\n          "num_bytes_account": 100,\n          "num_extra_bytes_record": 40\n        },\n        "burnt_gas_reward": [3, 10],\n        "pessimistic_gas_price_inflation_ratio": [103, 100]\n      },\n      "wasm_config": {\n        "ext_costs": {\n          "base": 264768111,\n          "contract_compile_base": 35445963,\n          "contract_compile_bytes": 216750,\n          "read_memory_base": 2609863200,\n          "read_memory_byte": 3801333,\n          "write_memory_base": 2803794861,\n          "write_memory_byte": 2723772,\n          "read_register_base": 2517165186,\n          "read_register_byte": 98562,\n          "write_register_base": 2865522486,\n          "write_register_byte": 3801564,\n          "utf8_decoding_base": 3111779061,\n          "utf8_decoding_byte": 291580479,\n          "utf16_decoding_base": 3543313050,\n          "utf16_decoding_byte": 163577493,\n          "sha256_base": 4540970250,\n          "sha256_byte": 24117351,\n          "keccak256_base": 5879491275,\n          "keccak256_byte": 21471105,\n          "keccak512_base": 5811388236,\n          "keccak512_byte": 36649701,\n          "log_base": 3543313050,\n          "log_byte": 13198791,\n          "storage_write_base": 64196736000,\n          "storage_write_key_byte": 70482867,\n          "storage_write_value_byte": 31018539,\n          "storage_write_evicted_byte": 32117307,\n          "storage_read_base": 56356845750,\n          "storage_read_key_byte": 30952533,\n          "storage_read_value_byte": 5611005,\n          "storage_remove_base": 53473030500,\n          "storage_remove_key_byte": 38220384,\n          "storage_remove_ret_value_byte": 11531556,\n          "storage_has_key_base": 54039896625,\n          "storage_has_key_byte": 30790845,\n          "storage_iter_create_prefix_base": 0,\n          "storage_iter_create_prefix_byte": 0,\n          "storage_iter_create_range_base": 0,\n          "storage_iter_create_from_byte": 0,\n          "storage_iter_create_to_byte": 0,\n          "storage_iter_next_base": 0,\n          "storage_iter_next_key_byte": 0,\n          "storage_iter_next_value_byte": 0,\n          "touching_trie_node": 16101955926,\n          "promise_and_base": 1465013400,\n          "promise_and_per_promise": 5452176,\n          "promise_return": 560152386,\n          "validator_stake_base": 911834726400,\n          "validator_total_stake_base": 911834726400\n        },\n        "grow_mem_cost": 1,\n        "regular_op_cost": 3856371,\n        "limit_config": {\n          "max_gas_burnt": 200000000000000,\n          "max_gas_burnt_view": 200000000000000,\n          "max_stack_height": 16384,\n          "initial_memory_pages": 1024,\n          "max_memory_pages": 2048,\n          "registers_memory_limit": 1073741824,\n          "max_register_size": 104857600,\n          "max_number_registers": 100,\n          "max_number_logs": 100,\n          "max_total_log_length": 16384,\n          "max_total_prepaid_gas": 300000000000000,\n          "max_actions_per_receipt": 100,\n          "max_number_bytes_method_names": 2000,\n          "max_length_method_name": 256,\n          "max_arguments_length": 4194304,\n          "max_length_returned_data": 4194304,\n          "max_contract_size": 4194304,\n          "max_length_storage_key": 4194304,\n          "max_length_storage_value": 4194304,\n          "max_promises_per_function_call_action": 1024,\n          "max_number_input_data_dependencies": 128\n        }\n      },\n      "account_creation_config": {\n        "min_allowed_top_level_account_length": 0,\n        "registrar_account_id": "registrar"\n      }\n    },\n    "validators": [\n      {\n        "account_id": "node0",\n        "public_key": "ed25519:7PGseFbWxvYVgZ89K1uTJKYoKetWs7BJtbyXDzfbAcqX",\n        "amount": "1000000000000000000000000000000"\n      },\n      {\n        "account_id": "node1",\n        "public_key": "ed25519:6DSjZ8mvsRZDvFqFxo8tCKePG96omXW7eVYVSySmDk8e",\n        "amount": "1000000000000000000000000000000"\n      },\n      {\n        "account_id": "node2",\n        "public_key": "ed25519:GkDv7nSMS3xcqA45cpMvFmfV1o4fRF6zYo1JRR6mNqg5",\n        "amount": "1000000000000000000000000000000"\n      },\n      {\n        "account_id": "node3",\n        "public_key": "ed25519:ydgzeXHJ5Xyt7M1gXLxqLBW1Ejx6scNV5Nx2pxFM8su",\n        "amount": "1000000000000000000000000000000"\n      }\n    ],\n    "transaction_validity_period": 86400,\n    "protocol_reward_rate": [1, 10],\n    "max_inflation_rate": [1, 20],\n    "total_supply": "1031467299046044096035532756810080",\n    "num_blocks_per_year": 31536000,\n    "protocol_treasury_account": "near",\n    "fishermen_threshold": "10000000000000000000",\n    "minimum_stake_divisor": 10\n  },\n  "id": "dontcare"\n}\n'})})})]}),"\n",(0,t.jsx)(n.h4,{id:"what-could-go-wrong",children:"What could go wrong?"}),"\n",(0,t.jsxs)(n.p,{children:["When API request fails, RPC server returns a structured error response with a limited number of well-defined error variants, so client code can exhaustively handle all the possible error cases. Our JSON-RPC errors follow ",(0,t.jsx)(n.a,{href:"https://github.com/joyent/node-verror",children:"verror"})," convention for structuring the error response:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "error": {\n        "name": <ERROR_TYPE>,\n        "cause": {\n            "info": {..},\n            "name": <ERROR_CAUSE>\n        },\n        "code": -32000,\n        "data": String,\n        "message": "Server error",\n    },\n    "id": "dontcare",\n    "jsonrpc": "2.0"\n}\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Heads up"})}),"\n",(0,t.jsxs)(n.p,{children:["The fields ",(0,t.jsx)(n.code,{children:"code"}),", ",(0,t.jsx)(n.code,{children:"data"}),", and ",(0,t.jsx)(n.code,{children:"message"})," in the structure above are considered legacy ones and might be deprecated in the future. Please, don't rely on them."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Here is the exhaustive list of the error variants that can be returned by ",(0,t.jsx)(n.code,{children:"EXPERIMENTAL_genesis_config"})," method:"]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsxs)(n.p,{children:["ERROR_TYPE",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("code",{children:"error.name"})]})}),(0,t.jsxs)("th",{children:["ERROR_CAUSE",(0,t.jsx)("br",{}),(0,t.jsx)("code",{children:"error.cause.name"})]}),(0,t.jsx)("th",{children:"Reason"}),(0,t.jsx)("th",{children:"Solution"})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"INTERNAL_ERROR"}),(0,t.jsx)("td",{children:"INTERNAL_ERROR"}),(0,t.jsx)("td",{children:"Something went wrong with the node itself or overloaded"}),(0,t.jsx)("td",{children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Try again later"}),(0,t.jsx)("li",{children:"Send a request to a different node"}),(0,t.jsxs)("li",{children:["Check ",(0,t.jsx)("code",{children:"error.cause.info"})," for more details"]})]})})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"protocol-config",children:"Protocol Config"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Returns most recent protocol configuration or a specific queried block. Useful for finding current storage and transaction costs."}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["method: ",(0,t.jsx)(n.code,{children:"EXPERIMENTAL_protocol_config"})]}),"\n",(0,t.jsxs)(n.li,{children:["params:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/api/rpc/setup#using-finality-param",children:(0,t.jsx)(n.code,{children:"finality"})})," ",(0,t.jsx)(n.em,{children:"OR"})," ",(0,t.jsx)(n.a,{href:"/api/rpc/setup#using-block_id-param",children:(0,t.jsx)(n.code,{children:"block_id"})})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(a.Z,{value:"json",label:"JSON",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "EXPERIMENTAL_protocol_config",\n  "params": {\n    "finality": "final"\n  }\n}\n'})})}),(0,t.jsx)(a.Z,{value:"http",label:"HTTPie",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=EXPERIMENTAL_protocol_config \\\n  params:=\'{\n    "finality": "final"\n  }\'\n'})})})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Example response: "}),(0,t.jsx)("p",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "result": {\n    "protocol_version": 45,\n    "genesis_time": "2020-07-31T03:39:42.911378Z",\n    "chain_id": "testnet",\n    "genesis_height": 42376888,\n    "num_block_producer_seats": 200,\n    "num_block_producer_seats_per_shard": [200],\n    "avg_hidden_validator_seats_per_shard": [0],\n    "dynamic_resharding": false,\n    "protocol_upgrade_stake_threshold": [4, 5],\n    "epoch_length": 43200,\n    "gas_limit": 1000000000000000,\n    "min_gas_price": "5000",\n    "max_gas_price": "10000000000000000000000",\n    "block_producer_kickout_threshold": 80,\n    "chunk_producer_kickout_threshold": 90,\n    "online_min_threshold": [90, 100],\n    "online_max_threshold": [99, 100],\n    "gas_price_adjustment_rate": [1, 100],\n    "runtime_config": {\n      "storage_amount_per_byte": "10000000000000000000",\n      "transaction_costs": {\n        "action_receipt_creation_config": {\n          "send_sir": 108059500000,\n          "send_not_sir": 108059500000,\n          "execution": 108059500000\n        },\n        "data_receipt_creation_config": {\n          "base_cost": {\n            "send_sir": 4697339419375,\n            "send_not_sir": 4697339419375,\n            "execution": 4697339419375\n          },\n          "cost_per_byte": {\n            "send_sir": 59357464,\n            "send_not_sir": 59357464,\n            "execution": 59357464\n          }\n        },\n        "action_creation_config": {\n          "create_account_cost": {\n            "send_sir": 99607375000,\n            "send_not_sir": 99607375000,\n            "execution": 99607375000\n          },\n          "deploy_contract_cost": {\n            "send_sir": 184765750000,\n            "send_not_sir": 184765750000,\n            "execution": 184765750000\n          },\n          "deploy_contract_cost_per_byte": {\n            "send_sir": 6812999,\n            "send_not_sir": 6812999,\n            "execution": 6812999\n          },\n          "function_call_cost": {\n            "send_sir": 2319861500000,\n            "send_not_sir": 2319861500000,\n            "execution": 2319861500000\n          },\n          "function_call_cost_per_byte": {\n            "send_sir": 2235934,\n            "send_not_sir": 2235934,\n            "execution": 2235934\n          },\n          "transfer_cost": {\n            "send_sir": 115123062500,\n            "send_not_sir": 115123062500,\n            "execution": 115123062500\n          },\n          "stake_cost": {\n            "send_sir": 141715687500,\n            "send_not_sir": 141715687500,\n            "execution": 102217625000\n          },\n          "add_key_cost": {\n            "full_access_cost": {\n              "send_sir": 101765125000,\n              "send_not_sir": 101765125000,\n              "execution": 101765125000\n            },\n            "function_call_cost": {\n              "send_sir": 102217625000,\n              "send_not_sir": 102217625000,\n              "execution": 102217625000\n            },\n            "function_call_cost_per_byte": {\n              "send_sir": 1925331,\n              "send_not_sir": 1925331,\n              "execution": 1925331\n            }\n          },\n          "delete_key_cost": {\n            "send_sir": 94946625000,\n            "send_not_sir": 94946625000,\n            "execution": 94946625000\n          },\n          "delete_account_cost": {\n            "send_sir": 147489000000,\n            "send_not_sir": 147489000000,\n            "execution": 147489000000\n          }\n        },\n        "storage_usage_config": {\n          "num_bytes_account": 100,\n          "num_extra_bytes_record": 40\n        },\n        "burnt_gas_reward": [3, 10],\n        "pessimistic_gas_price_inflation_ratio": [103, 100]\n      },\n      "wasm_config": {\n        "ext_costs": {\n          "base": 264768111,\n          "contract_compile_base": 35445963,\n          "contract_compile_bytes": 216750,\n          "read_memory_base": 2609863200,\n          "read_memory_byte": 3801333,\n          "write_memory_base": 2803794861,\n          "write_memory_byte": 2723772,\n          "read_register_base": 2517165186,\n          "read_register_byte": 98562,\n          "write_register_base": 2865522486,\n          "write_register_byte": 3801564,\n          "utf8_decoding_base": 3111779061,\n          "utf8_decoding_byte": 291580479,\n          "utf16_decoding_base": 3543313050,\n          "utf16_decoding_byte": 163577493,\n          "sha256_base": 4540970250,\n          "sha256_byte": 24117351,\n          "keccak256_base": 5879491275,\n          "keccak256_byte": 21471105,\n          "keccak512_base": 5811388236,\n          "keccak512_byte": 36649701,\n          "log_base": 3543313050,\n          "log_byte": 13198791,\n          "storage_write_base": 64196736000,\n          "storage_write_key_byte": 70482867,\n          "storage_write_value_byte": 31018539,\n          "storage_write_evicted_byte": 32117307,\n          "storage_read_base": 56356845750,\n          "storage_read_key_byte": 30952533,\n          "storage_read_value_byte": 5611005,\n          "storage_remove_base": 53473030500,\n          "storage_remove_key_byte": 38220384,\n          "storage_remove_ret_value_byte": 11531556,\n          "storage_has_key_base": 54039896625,\n          "storage_has_key_byte": 30790845,\n          "storage_iter_create_prefix_base": 0,\n          "storage_iter_create_prefix_byte": 0,\n          "storage_iter_create_range_base": 0,\n          "storage_iter_create_from_byte": 0,\n          "storage_iter_create_to_byte": 0,\n          "storage_iter_next_base": 0,\n          "storage_iter_next_key_byte": 0,\n          "storage_iter_next_value_byte": 0,\n          "touching_trie_node": 16101955926,\n          "promise_and_base": 1465013400,\n          "promise_and_per_promise": 5452176,\n          "promise_return": 560152386,\n          "validator_stake_base": 911834726400,\n          "validator_total_stake_base": 911834726400\n        },\n        "grow_mem_cost": 1,\n        "regular_op_cost": 3856371,\n        "limit_config": {\n          "max_gas_burnt": 200000000000000,\n          "max_gas_burnt_view": 200000000000000,\n          "max_stack_height": 16384,\n          "initial_memory_pages": 1024,\n          "max_memory_pages": 2048,\n          "registers_memory_limit": 1073741824,\n          "max_register_size": 104857600,\n          "max_number_registers": 100,\n          "max_number_logs": 100,\n          "max_total_log_length": 16384,\n          "max_total_prepaid_gas": 300000000000000,\n          "max_actions_per_receipt": 100,\n          "max_number_bytes_method_names": 2000,\n          "max_length_method_name": 256,\n          "max_arguments_length": 4194304,\n          "max_length_returned_data": 4194304,\n          "max_contract_size": 4194304,\n          "max_length_storage_key": 4194304,\n          "max_length_storage_value": 4194304,\n          "max_promises_per_function_call_action": 1024,\n          "max_number_input_data_dependencies": 128\n        }\n      },\n      "account_creation_config": {\n        "min_allowed_top_level_account_length": 0,\n        "registrar_account_id": "registrar"\n      }\n    },\n    "transaction_validity_period": 86400,\n    "protocol_reward_rate": [1, 10],\n    "max_inflation_rate": [1, 20],\n    "num_blocks_per_year": 31536000,\n    "protocol_treasury_account": "near",\n    "fishermen_threshold": "340282366920938463463374607431768211455",\n    "minimum_stake_divisor": 10\n  },\n  "id": "dontcare"\n}\n'})})})]}),"\n",(0,t.jsx)(n.h4,{id:"what-could-go-wrong-1",children:"What could go wrong?"}),"\n",(0,t.jsxs)(n.p,{children:["When API request fails, RPC server returns a structured error response with a limited number of well-defined error variants, so client code can exhaustively handle all the possible error cases. Our JSON-RPC errors follow ",(0,t.jsx)(n.a,{href:"https://github.com/joyent/node-verror",children:"verror"})," convention for structuring the error response:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "error": {\n        "name": <ERROR_TYPE>,\n        "cause": {\n            "info": {..},\n            "name": <ERROR_CAUSE>\n        },\n        "code": -32000,\n        "data": String,\n        "message": "Server error",\n    },\n    "id": "dontcare",\n    "jsonrpc": "2.0"\n}\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Heads up"})}),"\n",(0,t.jsxs)(n.p,{children:["The fields ",(0,t.jsx)(n.code,{children:"code"}),", ",(0,t.jsx)(n.code,{children:"data"}),", and ",(0,t.jsx)(n.code,{children:"message"})," in the structure above are considered legacy ones and might be deprecated in the future. Please, don't rely on them."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Here is the exhaustive list of the error variants that can be returned by ",(0,t.jsx)(n.code,{children:"EXPERIMENTAL_protocol_config"})," method:"]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsxs)(n.p,{children:["ERROR_TYPE",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("code",{children:"error.name"})]})}),(0,t.jsxs)("th",{children:["ERROR_CAUSE",(0,t.jsx)("br",{}),(0,t.jsx)("code",{children:"error.cause.name"})]}),(0,t.jsx)("th",{children:"Reason"}),(0,t.jsx)("th",{children:"Solution"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"HANDLER_ERROR"}),(0,t.jsx)("td",{children:"UNKNOWN_BLOCK"}),(0,t.jsx)("td",{children:"The requested block has not been produced yet or it has been garbage-collected (cleaned up to save space on the RPC node)"}),(0,t.jsx)("td",{children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Check that the requested block is legit"}),(0,t.jsxs)("li",{children:["If the block had been produced more than 5 epochs ago, try to send your request to ",(0,t.jsx)("a",{href:"https://near-nodes.io/intro/node-types#archival-node",children:"an archival node"})]})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"INTERNAL_ERROR"}),(0,t.jsx)("td",{children:"INTERNAL_ERROR"}),(0,t.jsx)("td",{children:"Something went wrong with the node itself or overloaded"}),(0,t.jsx)("td",{children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Try again later"}),(0,t.jsx)("li",{children:"Send a request to a different node"}),(0,t.jsxs)("li",{children:["Check ",(0,t.jsx)("code",{children:"error.cause.info"})," for more details"]})]})})]})]})]}),"\n",(0,t.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>a});r(67294);var t=r(36905);const s={tabItem:"tabItem_Ymn6"};var o=r(85893);function a(e){var n=e.children,r=e.hidden,a=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,a),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>v});var t=r(67294),s=r(36905),o=r(12466),a=r(16550),i=r(20469),c=r(91980),_=r(67392),l=r(50012);function d(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function u(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,_.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function g(e){var n=e.queryString,r=void 0!==n&&n,s=e.groupId,o=(0,a.k6)(),i=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:s});return[(0,c._X)(i),(0,t.useCallback)((function(e){if(i){var n=new URLSearchParams(o.location.search);n.set(i,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[i,o])]}function p(e){var n,r,s,o,a=e.defaultValue,c=e.queryString,_=void 0!==c&&c,d=e.groupId,p=u(e),m=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var s=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:a,tabValues:p})})),x=m[0],b=m[1],f=g({queryString:_,groupId:d}),j=f[0],y=f[1],v=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),r=(0,l.Nk)(n),s=r[0],o=r[1],[s,(0,t.useCallback)((function(e){n&&o.set(e)}),[n,o])]),k=v[0],w=v[1],E=function(){var e=null!=j?j:k;return h({value:e,tabValues:p})?e:null}();return(0,i.Z)((function(){E&&b(E)}),[E]),{selectedValue:x,selectValue:(0,t.useCallback)((function(e){if(!h({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),w(e)}),[y,w,p]),tabValues:p}}var m=r(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(85893);function f(e){var n=e.className,r=e.block,t=e.selectedValue,a=e.selectValue,i=e.tabValues,c=[],_=(0,o.o5)().blockElementScrollPositionUntilNextRender,l=function(e){var n=e.currentTarget,r=c.indexOf(n),s=i[r].value;s!==t&&(_(n),a(s))},d=function(e){var n,r=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":var t,s=c.indexOf(e.currentTarget)+1;r=null!=(t=c[s])?t:c[0];break;case"ArrowLeft":var o,a=c.indexOf(e.currentTarget)-1;r=null!=(o=c[a])?o:c[c.length-1]}null==(n=r)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:i.map((function(e){var n=e.value,r=e.label,o=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return c.push(e)},onKeyDown:d,onClick:l},o,{className:(0,s.Z)("tabs__item",x.tabItem,null==o?void 0:o.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function j(e){var n=e.lazy,r=e.children,s=e.selectedValue,o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var a=o.find((function(e){return e.props.value===s}));return a?(0,t.cloneElement)(a,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})}))})}function y(e){var n=p(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",x.tabList),children:[(0,b.jsx)(f,Object.assign({},e,n)),(0,b.jsx)(j,Object.assign({},e,n))]})}function v(e){var n=(0,m.Z)();return(0,b.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>a});var t=r(67294);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);