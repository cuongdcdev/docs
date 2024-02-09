"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9822],{33455:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=t(85893),i=t(11151);const s={sidebar_label:"Python\uc6a9 NFT \uc778\ub371\uc11c"},a="Python\uc6a9 NFT \uc778\ub371\uc11c \uad6c\ucd95",o={id:"tutorials/indexer/python-nft-indexer",title:"Python\uc6a9 NFT \uc778\ub371\uc11c \uad6c\ucd95",description:"frolvanya/near-lake-nft-indexer: source code for this tutorial",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/3.tutorials/indexer/python-nft-indexer.md",sourceDirName:"3.tutorials/indexer",slug:"/tutorials/indexer/python-nft-indexer",permalink:"/ko/tutorials/indexer/python-nft-indexer",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/indexer/python-nft-indexer.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\ub144 1\uc6d4 11\uc77c",frontMatter:{sidebar_label:"Python\uc6a9 NFT \uc778\ub371\uc11c"},sidebar:"tutorials",previous:{title:"NFT Indexer",permalink:"/ko/tutorials/indexer/nft-indexer"},next:{title:"Running Lake Indexer",permalink:"/ko/tutorials/indexer/run-lake-indexer"}},c={},d=[{value:"\ubaa9\ud45c",id:"\ubaa9\ud45c",level:2},{value:"\ub3d9\uae30",id:"\ub3d9\uae30",level:2},{value:"\uc900\ube44",id:"\uc900\ube44",level:2},{value:"NEAR Lake \ud504\ub808\uc784\uc6cc\ud06c \uc124\uc815",id:"near-lake-\ud504\ub808\uc784\uc6cc\ud06c-\uc124\uc815",level:2},{value:"\uc774\ubca4\ud2b8\uc640 \uc774\ub97c \uac10\uc9c0\ud560 \uc218 \uc788\ub294 \uacf3",id:"\uc774\ubca4\ud2b8\uc640-\uc774\ub97c-\uac10\uc9c0\ud560-\uc218-\uc788\ub294-\uacf3",level:2},{value:"\ud544\uc694\ud55c \ub370\uc774\ud130\ub9cc \ud3ec\ucc29",id:"\ud544\uc694\ud55c-\ub370\uc774\ud130\ub9cc-\ud3ec\ucc29",level:2},{value:"\uac70\uc758 \uc644\ub8cc",id:"\uac70\uc758-\uc644\ub8cc",level:2},{value:"Paras\uc640 Mintbase\uc5d0\uc11c \ubc1c\ud589\ub41c NFT \ub9c1\ud06c \uc81c\uc791",id:"paras\uc640-mintbase\uc5d0\uc11c-\ubc1c\ud589\ub41c-nft-\ub9c1\ud06c-\uc81c\uc791",level:2},{value:"Paras \ud1a0\ud070 URL",id:"paras-\ud1a0\ud070-url",level:3},{value:"Mintbase \ud1a0\ud070 URL",id:"mintbase-\ud1a0\ud070-url",level:3},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"python\uc6a9-nft-\uc778\ub371\uc11c-\uad6c\ucd95",children:"Python\uc6a9 NFT \uc778\ub371\uc11c \uad6c\ucd95"}),"\n",(0,r.jsx)(n.admonition,{title:"Source code for the tutorial",type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/frolvanya/near-lake-nft-indexer",children:(0,r.jsx)(n.code,{children:"frolvanya/near-lake-nft-indexer"})}),": source code for this tutorial"]})}),"\n",(0,r.jsx)(n.h2,{id:"\ubaa9\ud45c",children:"\ubaa9\ud45c"}),"\n",(0,r.jsxs)(n.p,{children:["This tutorial ends with a working NFT indexer built on top ",(0,r.jsx)(n.a,{href:"https://near-indexers.io/docs/projects/near-lake-framework",children:"NEAR Lake Framework for Python"}),". The indexer is watching for ",(0,r.jsx)(n.code,{children:"nft_mint"})," ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/EventsFormat",children:"Events"})," and prints some relevant data:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\ubbfc\ud305\uc774 \ubc1c\uc0dd\ud55c ",(0,r.jsx)(n.a,{href:"https://near-indexers.io/docs/data-flow-and-structures/structures/receipt",children:"Receipt"})]}),"\n",(0,r.jsx)(n.li,{children:"\ub9c8\ucf13\ud50c\ub808\uc774\uc2a4"}),"\n",(0,r.jsx)(n.li,{children:"NFT \uc18c\uc720\uc790 \uacc4\uc815 \uc774\ub984"}),"\n",(0,r.jsx)(n.li,{children:"\ub9c8\ucf13\ud50c\ub808\uc774\uc2a4 \ub0b4 NFT\ub85c\uc758 \ub9c1\ud06c"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The final source code is available on the GitHub ",(0,r.jsx)(n.a,{href:"https://github.com/frolvanya/near-lake-nft-indexer",children:(0,r.jsx)(n.code,{children:"frolvanya/near-lake-nft-indexer"})})]}),"\n",(0,r.jsx)(n.h2,{id:"\ub3d9\uae30",children:"\ub3d9\uae30"}),"\n",(0,r.jsxs)(n.p,{children:["NEAR Protocol had introduced a nice feature ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/EventsFormat",children:"Events"}),". The Events allow a contract developer to add standardized logs to the ",(0,r.jsx)(n.a,{href:"https://near-indexers.io/docs/data-flow-and-structures/structures/execution_outcome",children:(0,r.jsx)(n.code,{children:"ExecutionOutcomes"})})," thus allowing themselves or other developers to read those logs in more convenient manner via API or indexers."]}),"\n",(0,r.jsxs)(n.p,{children:["The Events have a field ",(0,r.jsx)(n.code,{children:"standard"})," which aligns with NEPs. In this tutorial we'll be talking about ",(0,r.jsx)(n.a,{href:"https://github.com/near/NEPs/discussions/171",children:"NEP-171 Non-Fungible Token standard"}),"."]}),"\n",(0,r.jsx)(n.p,{children:'In this tutorial our goal is to show you how you can "listen" to the Events contracts emit and how you can benefit from them.'}),"\n",(0,r.jsxs)(n.p,{children:["As the example we will be building an indexer that watches all the NFTs minted following the ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Event",children:"NEP-171 Events"})," standard, assuming we're collectors who don't want to miss a thing. Our indexer should notice every single NFT minted and give us a basic set of data like: in what Receipt it was minted, and show us the link to a marketplace (we'll cover ",(0,r.jsx)(n.a,{href:"https://paras.id",children:"Paras"})," and ",(0,r.jsx)(n.a,{href:"https://mintbase.io",children:"Mintbase"})," in our example)."]}),"\n",(0,r.jsxs)(n.p,{children:["We will use Python version of ",(0,r.jsx)(n.a,{href:"https://near-indexers.io/docs/projects/near-lake-framework",children:"NEAR Lake Framework"})," in this tutorial. Though the concept is the same for Rust, but we want to show more people that it's not that complex to build your own indexer."]}),"\n",(0,r.jsx)(n.h2,{id:"\uc900\ube44",children:"\uc900\ube44"}),"\n",(0,r.jsx)(n.admonition,{title:"Credentials",type:"danger",children:(0,r.jsxs)(n.p,{children:["Please, ensure you've the credentials set up as described on the ",(0,r.jsx)(n.a,{href:"/ko/tutorials/indexer/credentials",children:"Credentials"})," page. Otherwise you won't be able to get the code working."]})}),"\n",(0,r.jsx)(n.p,{children:"Let's create our project folder"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir lake-nft-indexer && cd lake-nft-indexer\ntouch main.py\n"})}),"\n",(0,r.jsx)(n.h2,{id:"near-lake-\ud504\ub808\uc784\uc6cc\ud06c-\uc124\uc815",children:"NEAR Lake \ud504\ub808\uc784\uc6cc\ud06c \uc124\uc815"}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"main.py"})," let's import ",(0,r.jsx)(n.code,{children:"stream"})," function and ",(0,r.jsx)(n.code,{children:"near_primitives"})," from ",(0,r.jsx)(n.code,{children:"near-lake-framework"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:"from near_lake_framework import near_primitives, LakeConfig, streamer\n"})}),"\n",(0,r.jsx)(n.p,{children:"Add the main function"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:'async def main():\n    print("Starting NFT indexer")\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Add the instantiation of ",(0,r.jsx)(n.code,{children:"LakeConfig"})," below:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:'config = LakeConfig.mainnet()\nconfig.start_block_height = 69030747\nconfig.aws_access_key_id = os.getenv("AWS_ACCESS_KEY_ID")\nconfig.aws_secret_key = os.getenv("AWS_SECRET_ACCESS_KEY")\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Just a few words on the config, function ",(0,r.jsx)(n.code,{children:"mainnet()"})," has set ",(0,r.jsx)(n.code,{children:"s3_bucket_name"}),", ",(0,r.jsx)(n.code,{children:"s3_region_name"})," for mainnet. You can go to ",(0,r.jsx)(n.a,{href:"https://nearblocks.io",children:"NEAR Explorer"})," and get ",(0,r.jsx)(n.strong,{children:"the most recent"})," block height to set ",(0,r.jsx)(n.code,{children:"config.start_block_height"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Let's call ",(0,r.jsx)(n.code,{children:"streamer"})," function with the ",(0,r.jsx)(n.code,{children:"config"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:"stream_handle, streamer_messages_queue = streamer(config)\nwhile True:\n    streamer_message = await streamer_messages_queue.get()\n"})}),"\n",(0,r.jsxs)(n.p,{children:["And an actual start of our indexer in the end of the ",(0,r.jsx)(n.code,{children:"main.py"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:"loop = asyncio.get_event_loop()\nloop.run_until_complete(main())\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The final ",(0,r.jsx)(n.code,{children:"main.py"})," at this moment should look like the following:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:'from near_lake_framework import LakeConfig, streamer, near_primitives\nasync def main():\n    print("Starting NFT indexer")\n\n    config = LakeConfig.mainnet()\n    config.start_block_height = 69030747\n    config.aws_access_key_id = os.getenv("AWS_ACCESS_KEY_ID")\n    config.aws_secret_key = os.getenv("AWS_SECRET_ACCESS_KEY")\n\n    stream_handle, streamer_messages_queue = streamer(config)\n    while True:\n        streamer_message = await streamer_messages_queue.get()\n\nloop = asyncio.get_event_loop()\nloop.run_until_complete(main())\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Now we need to create a callback function that we'll be called to handle ",(0,r.jsx)(n.a,{href:"https://near-indexers.io/docs/data-flow-and-structures/structures/toc",children:(0,r.jsx)(n.code,{children:"StreamerMessage"})})," our indexer receives."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:"async def handle_streamer_message(streamer_message: near_primitives.StreamerMessage):\n    pass\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\uc774\ubca4\ud2b8\uc640-\uc774\ub97c-\uac10\uc9c0\ud560-\uc218-\uc788\ub294-\uacf3",children:"\uc774\ubca4\ud2b8\uc640 \uc774\ub97c \uac10\uc9c0\ud560 \uc218 \uc788\ub294 \uacf3"}),"\n",(0,r.jsxs)(n.p,{children:["First of all let's find out where we can catch the Events. We hope you are familiar with how the ",(0,r.jsx)(n.a,{href:"https://near-indexers.io/docs/data-flow-and-structures/flow/near-data-flow",children:"Data Flow in NEAR Blockchain"}),", but let's revise our knowledge:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"NFT \ubc1c\ud589\uc740 NFT \ucee8\ud2b8\ub799\ud2b8 \ub0b4\uc758 action\uc785\ub2c8\ub2e4(\uc5b4\ub5a4 \ucee8\ud2b8\ub799\ud2b8\ub358 \uac04\uc5d0)."}),"\n",(0,r.jsxs)(n.li,{children:["\uc791\uc5c5\uc740 ",(0,r.jsx)(n.a,{href:"https://near-indexers.io/docs/data-flow-and-structures/structures/receipt",children:"Receipt"})," \ub0b4 \uc704\uce58\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:["Receipt \uc2e4\ud589 \uacb0\uacfc\ub294 ",(0,r.jsx)(n.a,{href:"https://near-indexers.io/docs/data-flow-and-structures/structures/execution_outcome",children:"ExecutionOutcome"}),"\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ExecutionOutcome"}),'\ub294 \ub530\ub77c\uc11c, \ucc28\ub840\ub85c \ucee8\ud2b8\ub799\ud2b8\uac00 "\ucd9c\ub825"\ud558\ub294 \ub85c\uadf8\ub97c \uc7a1\uc2b5\ub2c8\ub2e4.']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/EventsFormat",children:"Events"}),"\ub294 \ub85c\uadf8 \ub0b4\uc5d0 \uc874\uc7ac\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["This leads us to the realization that we can watch only for ExecutionOutcomes and ignore everything else ",(0,r.jsx)(n.code,{children:"StreamerMessage"})," brings us."]}),"\n",(0,r.jsx)(n.h2,{id:"\ud544\uc694\ud55c-\ub370\uc774\ud130\ub9cc-\ud3ec\ucc29",children:"\ud544\uc694\ud55c \ub370\uc774\ud130\ub9cc \ud3ec\ucc29"}),"\n",(0,r.jsxs)(n.p,{children:["Inside the callback function ",(0,r.jsx)(n.code,{children:"handle_streamer_message"})," we've prepared in the ",(0,r.jsx)(n.a,{href:"#preparation",children:"Preparation"})," section let's start filtering the data we need:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:"async def handle_streamer_message(streamer_message: near_primitives.StreamerMessage):\n    for shard in streamer_message.shards:\n        for receipt_execution_outcome in shard.receipt_execution_outcomes:\n            for log in receipt_execution_outcome.execution_outcome.outcome.logs:\n                pass\n"})}),"\n",(0,r.jsxs)(n.p,{children:["We have iterated through the logs of all ExecutionOutcomes of ",(0,r.jsx)(n.a,{href:"https://near-indexers.io/docs/data-flow-and-structures/structures/shard",children:"Shards"})," (in our case we don't care on which Shard did the mint happen)"]}),"\n",(0,r.jsxs)(n.p,{children:["Now we want to deal only with those ExecutionOutcomes that contain logs of Events format. Such logs start with ",(0,r.jsx)(n.code,{children:"EVENT_JSON:"})," according to the ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/EventsFormat#events",children:"Events docs"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:'async def handle_streamer_message(streamer_message: near_primitives.StreamerMessage):\n    for shard in streamer_message.shards:\n        for receipt_execution_outcome in shard.receipt_execution_outcomes:\n            for log in receipt_execution_outcome.execution_outcome.outcome.logs:\n                if not log.startswith("EVENT_JSON:"):\n                    continue\n                try:\n                    parsed_log = json.loads(log[len("EVENT_JSON:") :])\n                except json.JSONDecodeError:\n                    print(\n                        f"Receipt ID: `{receipt_execution_outcome.receipt.receipt_id}`\\nError during parsing logs from JSON string to dict"\n                    )\n                    continue\n'})}),"\n",(0,r.jsx)(n.p,{children:"Let us explain what we are doing here:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"ExecutionOutcomes \ub0b4 \ub85c\uadf8\ub97c \ud655\uc778 \uc911\uc785\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\uc774\ubca4\ud2b8 \ud615\uc2dd\uc758 \ub85c\uadf8\ub97c \ud3ec\ud568\ud558\ub294 ExecutionOutcomes\ub97c \ud544\ud130\ub9c1\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.li,{children:["\uc774\ubca4\ud2b8\ub97c \uc218\uc9d1\ud558\uae30 \uc704\ud574, ",(0,r.jsx)(n.code,{children:"json.loads"}),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc774\ubca4\ud2b8\ub97c \ud30c\uc2f1\ud558\ub824\ub294 ExecutionOutcome\uc758 \ub85c\uadf8\ub97c \ubc18\ubcf5\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The goal for our indexer is to return the useful data about a minted NFT that follows NEP-171 standard. We need to drop irrelevant standard Events:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:'    if (\n        parsed_log.get("standard") != "nep171"\n        or parsed_log.get("event") != "nft_mint"\n    ):\n        continue\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\uac70\uc758-\uc644\ub8cc",children:"\uac70\uc758 \uc644\ub8cc"}),"\n",(0,r.jsx)(n.p,{children:"So far we have collected everything we need corresponding to our requirements."}),"\n",(0,r.jsxs)(n.p,{children:["The final look of the ",(0,r.jsx)(n.code,{children:"handle_streamer_message"})," function:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:'async def handle_streamer_message(streamer_message: near_primitives.StreamerMessage):\n    for shard in streamer_message.shards:\n        for receipt_execution_outcome in shard.receipt_execution_outcomes:\n            for log in receipt_execution_outcome.execution_outcome.outcome.logs:\n                if not log.startswith("EVENT_JSON:"):\n                    continue\n                try:\n                    parsed_log = json.loads(log[len("EVENT_JSON:") :])\n                except json.JSONDecodeError:\n                    print(\n                        f"Receipt ID: `{receipt_execution_outcome.receipt.receipt_id}`\\nError during parsing logs from JSON string to dict"\n                    )\n                    continue\n\n                if (\n                    parsed_log.get("standard") != "nep171"\n                    or parsed_log.get("event") != "nft_mint"\n                ):\n                    continue\n\n                print(parsed_log)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Now let's call ",(0,r.jsx)(n.code,{children:"handle_streamer_message"})," inside the loop in ",(0,r.jsx)(n.code,{children:"main"})," function"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:"await handle_streamer_message(streamer_message)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["And if we run our indexer we will be catching ",(0,r.jsx)(n.code,{children:"nft_mint"})," event and print logs in the terminal."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python3 main.py\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Having troubles running the indexer? Please, check you haven't skipped the ",(0,r.jsx)(n.a,{href:"/ko/tutorials/indexer/credentials",children:"Credentials"})," part :)"]})}),"\n",(0,r.jsxs)(n.p,{children:["Not so fast! Remember we were talking about having the links to the marketplaces to see the minted tokens? We're gonna extend our data with links whenever possible. At least we're gonna show you how to deal with the NFTs minted on ",(0,r.jsx)(n.a,{href:"https://paras.id",children:"Paras"})," and ",(0,r.jsx)(n.a,{href:"https://mintbase.io",children:"Mintbase"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"paras\uc640-mintbase\uc5d0\uc11c-\ubc1c\ud589\ub41c-nft-\ub9c1\ud06c-\uc81c\uc791",children:"Paras\uc640 Mintbase\uc5d0\uc11c \ubc1c\ud589\ub41c NFT \ub9c1\ud06c \uc81c\uc791"}),"\n",(0,r.jsx)(n.p,{children:"At this moment we have an access to logs that follows NEP-171 standard. We definitely know that all the data we have at this moment are relevant for us, and we want to extend it with the links to that minted NFTs at least for those marketplaces we know."}),"\n",(0,r.jsx)(n.p,{children:"We know and love Paras and Mintbase."}),"\n",(0,r.jsx)(n.h3,{id:"paras-\ud1a0\ud070-url",children:"Paras \ud1a0\ud070 URL"}),"\n",(0,r.jsx)(n.p,{children:"We did the research for you and here's how the URL to token on Paras is crafting:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"https://paras.id/token/[1]::[2]/[3]\n"})}),"\n",(0,r.jsx)(n.p,{children:"Where:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[1] - Paras \ucee8\ud2b8\ub799\ud2b8 \uc8fc\uc18c (",(0,r.jsx)(n.code,{children:"x.paras.near"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["[2] - ",(0,r.jsx)(n.code,{children:"token_id"}),"\uc758 \uccab \ubc88\uc9f8 \ubd80\ubd84 (Paras\uc758 ",(0,r.jsx)(n.code,{children:"EventLogData.data"}),"\ub294 ",(0,r.jsx)(n.code,{children:"token_ids"})," \ud0a4\uac00 \uc788\ub294 \uac1d\uccb4 \ubc30\uc5f4\uc785\ub2c8\ub2e4. \ud574\ub2f9 ID\ub294 \uc0ac\uc774\uc5d0 ",(0,r.jsx)(n.code,{children:":"})," \uc5f4\uc774 \uc788\ub294 \uc22b\uc790\ub4e4\ub85c \ud45c\ud604\ub429\ub2c8\ub2e4.)"]}),"\n",(0,r.jsxs)(n.li,{children:["[3] - ",(0,r.jsx)(n.code,{children:"token_id"})," \uc790\uccb4"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"https://paras.id/token/x.paras.near::387427/387427:373\n"})}),"\n",(0,r.jsx)(n.h3,{id:"mintbase-\ud1a0\ud070-url",children:"Mintbase \ud1a0\ud070 URL"}),"\n",(0,r.jsx)(n.p,{children:"And again we did the research for you:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"https://www.mintbase.io/thing/[1]:[2]\n"})}),"\n",(0,r.jsx)(n.p,{children:"Where:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[1] - ",(0,r.jsx)(n.code,{children:"meta_id"})," ( Mintbase\uc758 ",(0,r.jsx)(n.code,{children:"EventLogData.data"}),"\ub294 ",(0,r.jsx)(n.code,{children:"meta_id"}),"\ub97c \ud3ec\ud568\ud558\ub294 \ubb38\uc790\uc5f4\ud654\ub41c JSON \ubc30\uc5f4\uc785\ub2c8\ub2e4.)"]}),"\n",(0,r.jsx)(n.li,{children:"[2] - \ucee8\ud2b8\ub799\ud2b8 \uacc4\uc815 \uc8fc\uc18c \uc800\uc7a5(\uae30\ubcf8\uc801\uc73c\ub85c Receipt\uc758 \uc218\uc2e0\uc790 ID)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"https://www.mintbase.io/thing/70eES-icwSw9iPIkUluMHOV055pKTTgQgTiXtwy3Xus:vnartistsdao.mintbase1.near\n"})}),"\n",(0,r.jsx)(n.p,{children:"Let's start crafting the links:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:'def format_paras_nfts(data, receipt_execution_outcome):\n    links = []\n\n    for data_element in data:\n        for token_id in data_element.get("token_ids", []):\n            first_part_of_token_id = token_id.split(":")[0]\n            links.append(\n                f"https://paras.id/token/{receipt_execution_outcome.receipt.receiver_id}::{first_part_of_token_id}/{token_id}"\n            )\n\n    return {"owner": data[0].get("owner_id"), "links": links}\n\ndef format_mintbase_nfts(data, receipt_execution_outcome):\n    links = []\n    for data_block in data:\n        try:\n            memo = json.loads(data_block.get("memo"))\n        except json.JSONDecodeError:\n            print(\n                f"Receipt ID: `{receipt_execution_outcome.receipt.receipt_id}`\\nMemo: `{memo}`\\nError during parsing Mintbase memo from JSON string to dict"\n            )\n            return\n\n        meta_id = memo.get("meta_id")\n        links.append(\n            f"https://www.mintbase.io/thing/{meta_id}:{receipt_execution_outcome.receipt.receiver_id}"\n        )\n\n    return {"owner": data[0].get("owner_id"), "links": links}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["We're going to print the receipt_id, so you would be able to search for it on ",(0,r.jsx)(n.a,{href:"https://nearblocks.io",children:"NEAR Explorer"}),", marketplace name and the list of links to the NFTs along with the owner account name."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:'if receipt_execution_outcome.receipt.receiver_id.endswith(\n    ".paras.near"\n):\n    output = {\n        "receipt_id": receipt_execution_outcome.receipt.receipt_id,\n        "marketplace": "Paras",\n        "nfts": format_paras_nfts(\n            parsed_log["data"], receipt_execution_outcome\n        ),\n    }\n'})}),"\n",(0,r.jsxs)(n.p,{children:["A few words about what is going on here. If the Receipt's receiver account name ends with ",(0,r.jsx)(n.code,{children:".paras.near"})," (e.g. ",(0,r.jsx)(n.code,{children:"x.paras.near"}),") we assume it's from Paras marketplace, so we are changing the corresponding variable."]}),"\n",(0,r.jsxs)(n.p,{children:["Mintbase turn, we hope ",(0,r.jsx)(n.a,{href:"https://twitter.com/nategeier",children:"Nate"})," and his team have ",(0,r.jsx)(n.a,{href:"/ko/tutorials/indexer/migrating-to-near-lake-framework",children:"migrated to NEAR Lake Framework"}),' already, saying "Hi!" and crafting the link:']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:'    elif re.search(\n        ".mintbase\\d+.near", receipt_execution_outcome.receipt.receiver_id\n    ):\n        output = {\n            "receipt_id": receipt_execution_outcome.receipt.receipt_id,\n            "marketplace": "Mintbase",\n            "nfts": format_mintbase_nfts(\n                parsed_log["data"], receipt_execution_outcome\n            ),\n        }\n    else:\n        continue\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Almost the same story as with Paras, but a little bit more complex. The nature of Mintbase marketplace is that it's not a single marketplace! Every Mintbase user has their own store and a separate contract. And it looks like those contract addresses follow the same principle they end with ",(0,r.jsx)(n.code,{children:".mintbaseN.near"})," where ",(0,r.jsx)(n.code,{children:"N"})," is number (e.g. ",(0,r.jsx)(n.code,{children:"nate.mintbase1.near"}),")."]}),"\n",(0,r.jsx)(n.p,{children:"After we have defined that the ExecutionOutcome receiver is from Mintbase we are doing the same stuff as with Paras:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"marketplace"})," \ubcc0\uc218 \ubcc0\uacbd"]}),"\n",(0,r.jsx)(n.li,{children:"\uc18c\uc720\uc790 \ubc0f \uc81c\uc791\ub41c \ub9c1\ud06c\uac00 \ud3ec\ud568\ub41c NFT \ubaa9\ub85d \uc218\uc9d1"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"And make it print the output to the terminal:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:"print(json.dumps(output, indent=4))\n"})}),"\n",(0,r.jsx)(n.p,{children:"All together:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:'def format_paras_nfts(data, receipt_execution_outcome):\n    links = []\n\n    for data_element in data:\n        for token_id in data_element.get("token_ids", []):\n            first_part_of_token_id = token_id.split(":")[0]\n            links.append(\n                f"https://paras.id/token/{receipt_execution_outcome.receipt.receiver_id}::{first_part_of_token_id}/{token_id}"\n            )\n\n    return {"owner": data[0].get("owner_id"), "links": links}\n\n\ndef format_mintbase_nfts(data, receipt_execution_outcome):\n    links = []\n    for data_block in data:\n        try:\n            memo = json.loads(data_block.get("memo"))\n        except json.JSONDecodeError:\n            print(\n                f"Receipt ID: `{receipt_execution_outcome.receipt.receipt_id}`\\nMemo: `{memo}`\\nError during parsing Mintbase memo from JSON string to dict"\n            )\n            return\n\n        meta_id = memo.get("meta_id")\n        links.append(\n            f"https://www.mintbase.io/thing/{meta_id}:{receipt_execution_outcome.receipt.receiver_id}"\n        )\n\n    return {"owner": data[0].get("owner_id"), "links": links}\n\n\nasync def handle_streamer_message(streamer_message: near_primitives.StreamerMessage):\n    for shard in streamer_message.shards:\n        for receipt_execution_outcome in shard.receipt_execution_outcomes:\n            for log in receipt_execution_outcome.execution_outcome.outcome.logs:\n                if not log.startswith("EVENT_JSON:"):\n                    continue\n                try:\n                    parsed_log = json.loads(log[len("EVENT_JSON:") :])\n                except json.JSONDecodeError:\n                    print(\n                        f"Receipt ID: `{receipt_execution_outcome.receipt.receipt_id}`\\nError during parsing logs from JSON string to dict"\n                    )\n                    continue\n\n                if (\n                    parsed_log.get("standard") != "nep171"\n                    or parsed_log.get("event") != "nft_mint"\n                ):\n                    continue\n\n                if receipt_execution_outcome.receipt.receiver_id.endswith(\n                    ".paras.near"\n                ):\n                    output = {\n                        "receipt_id": receipt_execution_outcome.receipt.receipt_id,\n                        "marketplace": "Paras",\n                        "nfts": format_paras_nfts(\n                            parsed_log["data"], receipt_execution_outcome\n                        ),\n                    }\n                elif re.search(\n                    ".mintbase\\d+.near", receipt_execution_outcome.receipt.receiver_id\n                ):\n                    output = {\n                        "receipt_id": receipt_execution_outcome.receipt.receipt_id,\n                        "marketplace": "Mintbase",\n                        "nfts": format_mintbase_nfts(\n                            parsed_log["data"], receipt_execution_outcome\n                        ),\n                    }\n                else:\n                    continue\n\n                print(json.dumps(output, indent=4))\n'})}),"\n",(0,r.jsx)(n.p,{children:"And not that's it. Run the indexer to watch for NFT minting and never miss a thing."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python3 main.py\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Having troubles running the indexer? Please, check you haven't skipped the ",(0,r.jsx)(n.a,{href:"/ko/tutorials/indexer/credentials",children:"Credentials"})," part :)"]})}),"\n",(0,r.jsx)(n.p,{children:"Example output:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n    "receipt_id": "8rMK8rxb3WmFcSfM3ahFoeeoBF92pad3tpsqKoSWurr2",\n    "marketplace": "Mintbase",\n    "nfts": {\n        "owner": "vn-artists-dao.near",\n        "links": [\n            "https://www.mintbase.io/thing/aqdCBHB9_2XZY7pwXRRu5rGDeLQl7Q8KgNud1wKgnGo:vnartistsdao.mintbase1.near"\n        ]\n    }\n}\n{\n    "receipt_id": "ArRh94Fe1LKF9yPrAdzrMozWoxMVQbEW2Z2Zf4fsSsce",\n    "marketplace": "Paras",\n    "nfts": {\n        "owner": "eeaeb516e0945893ac01eaf547f499abdbd344831c5fcbefa1a5c0a9f303cc5c",\n        "links": [\n            "https://paras.id/token/x.paras.near::432714/432714:1"\n        ]\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\uacb0\ub860",children:"\uacb0\ub860"}),"\n",(0,r.jsx)(n.p,{children:"What a ride, yeah? Let's sum up what we have done:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/EventsFormat",children:"\uc774\ubca4\ud2b8"}),"\uc5d0 \ub300\ud574 \ubc30\uc6e0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.li,{children:"\uc774\uc81c \uc774\ubca4\ud2b8\ub97c \ud314\ub85c\uc6b0\ud558\ub294 \ubc29\ubc95\uc744 \uc774\ud574\ud588\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\ucee8\ud2b8\ub799\ud2b8 \uac1c\ubc1c\uc790\ub85c\uc11c \uc774\ubca4\ud2b8\ub97c \uc0ac\uc6a9\ud558\uace0 \uc790\uc2e0\uc758 \uc774\ubca4\ud2b8\ub97c \ub0b4\ubcf4\ub0bc \uc218 \uc788\ub2e4\ub294 \uc0ac\uc2e4\uc744 \uc54c\uc558\uc73c\ubbc0\ub85c, \uc774\uc81c \ud574\ub2f9 \uc774\ubca4\ud2b8\ub97c \ucd94\uc801\ud558\ub294 \uc778\ub371\uc11c\ub97c \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.li,{children:["NFT \ubbfc\ud305 \ud504\ub85c\uc138\uc2a4\ub97c \uc790\uc138\ud788 \uc0b4\ud3b4\ubcf4\uc558\uc73c\uba70, \ucd94\uac00 \uc2e4\ud5d8\uc744 \ud1b5\ud574 ",(0,r.jsx)(n.code,{children:"nft_transfer"})," \uc774\ubca4\ud2b8\ub97c \ucd94\uc801\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The material from this tutorial can be extrapolated for literally any event that follows the ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/EventsFormat",children:"Events format"})]}),"\n",(0,r.jsx)(n.p,{children:"Not mentioning you have a dedicated indexer to find out about the newest NFTs minted out there and to be the earliest bird to collect them."}),"\n",(0,r.jsx)(n.p,{children:"Let's go hunt doo, doo, doo \ud83e\udd88"}),"\n",(0,r.jsx)(n.admonition,{title:"Source code for the tutorial",type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/near-examples/near-lake-nft-indexer",children:(0,r.jsx)(n.code,{children:"near-examples/near-lake-nft-indexer"})}),": source code for this tutorial"]})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var r=t(67294);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);