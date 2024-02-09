"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7737],{32377:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(85893),s=t(11151);const i={sidebar_label:"\uc2dc\uc791 \uc635\uc158"},o="\uc2dc\uc791 \uc635\uc158\uc73c\ub85c Lake \uc778\ub371\uc11c \ud655\uc7a5",a={id:"tutorials/indexer/lake-start-options",title:"\uc2dc\uc791 \uc635\uc158\uc73c\ub85c Lake \uc778\ub371\uc11c \ud655\uc7a5",description:"\ub05d",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/3.tutorials/indexer/lake-start-options.md",sourceDirName:"3.tutorials/indexer",slug:"/tutorials/indexer/lake-start-options",permalink:"/ko/tutorials/indexer/lake-start-options",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/indexer/lake-start-options.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\ub144 1\uc6d4 11\uc77c",frontMatter:{sidebar_label:"\uc2dc\uc791 \uc635\uc158"},sidebar:"tutorials",previous:{title:"Running Lake Indexer",permalink:"/ko/tutorials/indexer/run-lake-indexer"},next:{title:"\uc790\uaca9 \uc99d\uba85",permalink:"/ko/tutorials/indexer/credentials"}},l={},c=[{value:"\ub05d",id:"\ub05d",level:2},{value:"\ubaa9\ud45c",id:"\ubaa9\ud45c",level:2},{value:"\uc900\ube44",id:"\uc900\ube44",level:2},{value:"<code>StartOptions</code> \ub514\uc790\uc778",id:"startoptions-\ub514\uc790\uc778",level:2},{value:"<code>LakeConfig</code> \uc0dd\uc131",id:"lakeconfig-\uc0dd\uc131",level:2},{value:"\uc2dc\uc791 \uc635\uc158 \ub85c\uc9c1",id:"\uc2dc\uc791-\uc635\uc158-\ub85c\uc9c1",level:2},{value:"<code>FromBlock { height: u64 }</code>",id:"fromblock--height-u64-",level:3},{value:"<code>FromLatest</code>",id:"fromlatest",level:3},{value:"<code>FromLatest</code> \ud14c\uc2a4\ud2b8",id:"fromlatest-\ud14c\uc2a4\ud2b8",level:3},{value:"<code>FromInterruption</code>",id:"frominterruption",level:3},{value:"<code>FromInterruption</code> \ud14c\uc2a4\ud2b8",id:"frominterruption-\ud14c\uc2a4\ud2b8",level:3},{value:"\uc694\uc57d",id:"\uc694\uc57d",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\uc2dc\uc791-\uc635\uc158\uc73c\ub85c-lake-\uc778\ub371\uc11c-\ud655\uc7a5",children:"\uc2dc\uc791 \uc635\uc158\uc73c\ub85c Lake \uc778\ub371\uc11c \ud655\uc7a5"}),"\n",(0,r.jsx)(n.h2,{id:"\ub05d",children:"\ub05d"}),"\n",(0,r.jsxs)(n.p,{children:["This tutorial ends with the example code of the simple indexer built on top of ",(0,r.jsx)(n.a,{href:"https://near-indexers.io/docs/projects/near-lake-framework",children:"NEAR Lake Framework"})," that can start:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\uc9c0\uc815\ub41c \ube14\ub85d \ub192\uc774\uc5d0\uc11c(\uae30\ubcf8\uc801\uc73c\ub85c)","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./target/release/indexer mainnet from-block 65359506\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\ub124\ud2b8\uc6cc\ud06c\uc758 \ucd5c\uc2e0 \ucd5c\uc885 \ube14\ub85d\uc5d0\uc11c","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./target/release/indexer mainnet from-latest\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\uc911\ub2e8\ub418\uae30 \uc804\uc5d0 \ub9c8\uc9c0\ub9c9\uc73c\ub85c \uc778\ub371\uc2f1\ud55c \ube14\ub85d\uc5d0\uc11c","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./target/release/indexer mainnet from-interruption\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\ubaa9\ud45c",children:"\ubaa9\ud45c"}),"\n",(0,r.jsx)(n.p,{children:"To find out whether you need an indexer for you project and to create one means you're covering only one side of things - the development."}),"\n",(0,r.jsx)(n.p,{children:"There is another important side - the maintenance. This involves:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\uc778\ub371\uc11c\ub97c \ucd5c\uc2e0 \ubc84\uc804\uc758 \uc758\uc874\uc131(dependency)\uc73c\ub85c \uc5c5\uadf8\ub808\uc774\ub4dc\ud574\uc57c \ud568"}),"\n",(0,r.jsx)(n.li,{children:"\uc778\ub371\uc11c\ub97c \uc0ac\uc6a9\uc790\uac00 \ub9cc\ub4e0 \uc0c8 \uae30\ub2a5\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud574\uc57c \ud568"}),"\n",(0,r.jsx)(n.li,{children:"\uc0ac\uc6a9\ud558\ub294 \uc11c\ubc84\uc5d0 \uc57d\uac04\uc758 \uc720\uc9c0 \uad00\ub9ac\uac00 \ud544\uc694\ud568"}),"\n",(0,r.jsx)(n.li,{children:"\uc0ac\uac74\uc774 \ubc1c\uc0dd"}),"\n",(0,r.jsx)(n.li,{children:"\uae30\ud0c0 \ub4f1\ub4f1"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Almost in all of the above cases you might want to start or restart your indexer not only from the specific block you need to provide, but from the block it was stopped, or from the latest final block in the network."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://near-indexers.io/docs/projects/near-lake-framework",children:"NEAR Lake Framework"})," doesn't provide such options. Actually, we didn't empower the library with these options to start indexer intentionally."]}),"\n",(0,r.jsx)(n.admonition,{title:"Intent",type:"info",children:(0,r.jsxs)(n.p,{children:["We want to keep ",(0,r.jsx)(n.a,{href:"https://near-indexers.io/docs/projects/near-lake-framework",children:"NEAR Lake Framework"})," crate in the narrowest possible way. The goal for the library is to do a single job and allow it to be empowered with any features but outside of the crate itself"]})}),"\n",(0,r.jsx)(n.p,{children:"Though, the possibility to start indexer from the latest block or from the block after the one it has indexed the last, might be very useful."}),"\n",(0,r.jsxs)(n.p,{children:["Also, during ",(0,r.jsx)(n.a,{href:"https://near-indexers.io/blog/2022-05-11-community-meeting-record",children:"the April Data Platform Community Meeting"})," we had a question whether we plan to add this feature to the library. We've promised to create a tutorial showing how to do it by your own. So here it is."]}),"\n",(0,r.jsx)(n.h2,{id:"\uc900\ube44",children:"\uc900\ube44"}),"\n",(0,r.jsx)(n.p,{children:"In this tutorial we're not going to focus our attention on the indexer itself, but on the start options instead."}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["To simplify the code samples in the tutorial, we're writing entire application in a single file ",(0,r.jsx)(n.code,{children:"src/main.rs"}),"."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Please, do not take it as a design advice. We do it only for the simplicity"})})]}),"\n",(0,r.jsx)(n.p,{children:"Let's prepare a project with a base dependencies, so we can focus on the main goal of this tutorial."}),"\n",(0,r.jsx)(n.p,{children:"Create a new Rust project"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cargo new --bin indexer && cd indexer\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Replace the content of the ",(0,r.jsx)(n.code,{children:"Cargo.toml"})," file with this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",metastring:"title=Cargo.toml",children:'[package]\nname = "indexer"\nversion = "0.1.0"\nedition = "2021"\nrust-version = "1.60.0"\n\n[dependencies]\nclap = { version = "3.1.6", features = ["derive"] }\nfutures = "0.3.5"\nitertools = "0.9.0"\ntokio = { version = "1.1", features = ["sync", "time", "macros", "rt-multi-thread"] }\ntokio-stream = { version = "0.1" }\ntracing = "0.1.13"\ntracing-subscriber = "0.2.4"\nserde = { version = "1", features = ["derive"] }\nserde_json = "1.0.55"\n\nnear-lake-framework = "0.3.0"\n\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Replace the content of ",(0,r.jsx)(n.code,{children:"src/main.rs"})," with this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use clap::{Parser, Subcommand};\nuse futures::StreamExt;\nuse tracing_subscriber::EnvFilter;\n\n// TODO: StartOptions\n\n#[tokio::main]\nasync fn main() -> Result<(), tokio::io::Error> {\n    init_tracing();\n\n    let opts = Opts::parse();\n\n    // TODO: Config\n\n    let stream = near_lake_framework::streamer(config);\n\n    let mut handlers = tokio_stream::wrappers::ReceiverStream::new(stream)\n        .map(handle_streamer_message)\n        .buffer_unordered(1usize);\n\n    while let Some(_handle_message) = handlers.next().await {}\n\n    Ok(())\n}\n\nasync fn handle_streamer_message(\n    streamer_message: near_lake_framework::near_indexer_primitives::StreamerMessage,\n) {\n    eprintln!(\n        "{} / shards {}",\n        streamer_message.block.header.height,\n        streamer_message.shards.len()\n    );\n    std::fs::write("last_indexed_block", streamer_message.block.header.height.to_string().as_bytes()).unwrap();\n}\n\nfn init_tracing() {\n    let mut env_filter = EnvFilter::new("near_lake_framework=info");\n\n    if let Ok(rust_log) = std::env::var("RUST_LOG") {\n        if !rust_log.is_empty() {\n            for directive in rust_log.split(\',\').filter_map(|s| match s.parse() {\n                Ok(directive) => Some(directive),\n                Err(err) => {\n                    eprintln!("Ignoring directive `{}`: {}", s, err);\n                    None\n                }\n            }) {\n                env_filter = env_filter.add_directive(directive);\n            }\n        }\n    }\n\n    tracing_subscriber::fmt::Subscriber::builder()\n        .with_env_filter(env_filter)\n        .with_writer(std::io::stderr)\n        .init();\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"This code is not going to build yet. Meanwhile let's have a quick look of what we've copy/pasted for now:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\uc218\ub77d\ud560 \uba85\ub839\uc904 \uc778\uc790\ub97c \uc124\uc815\ud558\uae30 \uc704\ud574 ",(0,r.jsx)(n.a,{href:"https://docs.rs/clap/latest/clap/",children:(0,r.jsx)(n.code,{children:"clap"})}),"\uc744 \uac00\uc838\uc654\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:["\ub610\ud55c ",(0,r.jsx)(n.code,{children:"futures"}),"\uc640 ",(0,r.jsx)(n.code,{children:"tracing_subscriber"})," \uac19\uc740 \uc911\uc694\ud55c \ud544\uc218 \ud56d\ubaa9\uc774 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:["\ud30c\uc77c \ub05d\uc758 ",(0,r.jsx)(n.code,{children:"init_tracing"}),"\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 ",(0,r.jsx)(n.code,{children:"near-lake-framework"}),"\uc758 \ub85c\uadf8\uc5d0 \ub4f1\ub85d\ud558\ub294 \ud5ec\ud37c \ud568\uc218\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:["\uc778\ub371\uc11c \uc0c1\uc6a9\uad6c \ucf54\ub4dc\uac00 \uc788\ub294 \ube44\ub3d9\uae30 ",(0,r.jsx)(n.code,{children:"main"})," \ud568\uc218\ub294 ",(0,r.jsx)(n.code,{children:"LakeConfig"})," \uc0dd\uc131 \ud30c\ud2b8\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \uc774\ub294 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c \uace7 \ub2e4\ub8f0 \uc608\uc815\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:["\uc774 \ud29c\ud1a0\ub9ac\uc5bc \ucf54\ub4dc\ub97c \uc791\uc131\ud560 \uc704\uce58\ub97c \ucc3e\uc744 \uc218 \uc788\ub3c4\ub85d \ud45c\uc2dc\ub41c \uba87 \uac00\uc9c0 ",(0,r.jsx)(n.code,{children:"// TODO: ..."})," \uc139\uc158\uc744 \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"OK, all the preparations are done. Let's move on."}),"\n",(0,r.jsxs)(n.h2,{id:"startoptions-\ub514\uc790\uc778",children:[(0,r.jsx)(n.code,{children:"StartOptions"})," \ub514\uc790\uc778"]}),"\n",(0,r.jsxs)(n.p,{children:["So we want to be able to pass a command that defines the way our indexer should start. In this tutorial we'll be using ",(0,r.jsx)(n.code,{children:"clap"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"We need a structure that receives the chain id. This will allow us to use command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./target/release/indexer mainnet ...\n"})}),"\n",(0,r.jsx)(n.p,{children:"OR"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./target/release/indexer testnet ...\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Let's replace the ",(0,r.jsx)(n.code,{children:"// TODO: StartOptions"})," in the ",(0,r.jsx)(n.code,{children:"src/main.rs"})," with:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:"title=src/main.rs",children:'#[derive(Parser, Debug, Clone)]\n#[clap(version = "0.1", author = "Near Inc. <hello@nearprotocol.com>")]\nstruct Opts {\n    #[clap(subcommand)]\n    pub chain_id: ChainId,\n}\n\n#[derive(Subcommand, Debug, Clone)]\nenum ChainId {\n    #[clap(subcommand)]\n    Mainnet(StartOptions),\n    #[clap(subcommand)]\n    Testnet(StartOptions),\n}\n\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Now we want to create a ",(0,r.jsx)(n.code,{children:"StartOptions"})," structure that will allow us to tell our indexer where to start indexing from. The command should look like:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./target/release mainnet from-latest\n"})}),"\n",(0,r.jsx)(n.p,{children:"Our variants are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"from-block N"})," (",(0,r.jsx)(n.code,{children:"N"}),"\uc740 \uc2dc\uc791\ud560 \ube14\ub85d \ub192\uc774)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"from-latest"})," (\ub124\ud2b8\uc6cc\ud06c\uc758 \ucd5c\uc2e0 \ucd5c\uc885 \ube14\ub85d\uc5d0\uc11c \uc2dc\uc791)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"from-interruption"})," (\uc774\uc804\uc5d0 \uc911\ub2e8\ub41c \ube14\ub85d \uc778\ub371\uc11c\uc5d0\uc11c \uc2dc\uc791)"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Let's replace the comment ",(0,r.jsx)(n.code,{children:"// TODO: StartOptions"})," with the enum:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:"title=src/main.rs",children:"#[derive(Subcommand, Debug, Clone)]\npub(crate) enum StartOptions {\n    FromBlock { height: u64 },\n    FromLatest,\n    FromInterruption,\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Pretty simple and straightforward, agree?"}),"\n",(0,r.jsxs)(n.h2,{id:"lakeconfig-\uc0dd\uc131",children:[(0,r.jsx)(n.code,{children:"LakeConfig"})," \uc0dd\uc131"]}),"\n",(0,r.jsxs)(n.p,{children:["In order to create ",(0,r.jsx)(n.code,{children:"LakeConfig"})," we're going to use a config builder ",(0,r.jsx)(n.a,{href:"https://docs.rs/near-lake-framework/0.3.0/near_lake_framework/struct.LakeConfigBuilder.html",children:(0,r.jsx)(n.code,{children:"LakeConfigBuilder"})}),". Fotunately, we've imported it already."]}),"\n",(0,r.jsxs)(n.p,{children:["Let's instantiate a builder in place of ",(0,r.jsx)(n.code,{children:"// TODO: Config"})," comment:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:"title=src/main.src",children:"    let mut lake_config_builder = near_lake_framework::LakeConfigBuilder::default();\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Notice that ",(0,r.jsx)(n.code,{children:"lake_config_builder"})," is defined as mutable."]}),"\n",(0,r.jsxs)(n.p,{children:["Now we need to set the chain we are going to index by matching ",(0,r.jsx)(n.code,{children:"ChainId"})," provided:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:"title=src/main.src",children:"    let mut lake_config_builder = near_lake_framework::LakeConfigBuilder::default();\n\n    match &opts.chain_id {\n        ChainId::Mainnet(start_options) => {\n            lake_config_builder = lake_config_builder\n                .mainnet();\n        }\n        ChainId::Testnet(start_options) => {\n            lake_config_builder = lake_config_builder\n                .testnet();\n        }\n    }\n"})}),"\n",(0,r.jsxs)(n.p,{children:["As you can see, depending on the variant of the ",(0,r.jsx)(n.code,{children:"ChainId"})," enum we modify the ",(0,r.jsx)(n.code,{children:"lake_config_builder"})," with one of the shortcuts ",(0,r.jsx)(n.code,{children:"mainnet()"})," or ",(0,r.jsx)(n.code,{children:"testnet()"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The only parameter left to set is the most important for us in this tutorial ",(0,r.jsx)(n.code,{children:"start_block_height"})]}),"\n",(0,r.jsxs)(n.p,{children:["Normally, we just pass the block height number ",(0,r.jsx)(n.code,{children:"u64"})," but we're implementing the start options here."]}),"\n",(0,r.jsx)(n.h2,{id:"\uc2dc\uc791-\uc635\uc158-\ub85c\uc9c1",children:"\uc2dc\uc791 \uc635\uc158 \ub85c\uc9c1"}),"\n",(0,r.jsxs)(n.p,{children:["Let's create a separate function that will hold the logic of identification the ",(0,r.jsx)(n.code,{children:"start_block_height"})," and call it ",(0,r.jsx)(n.code,{children:"get_start_block_height"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Just read the code, don't copy, it's not final approach yet"})}),"\n",(0,r.jsx)(n.h3,{id:"fromblock--height-u64-",children:(0,r.jsx)(n.code,{children:"FromBlock { height: u64 }"})}),"\n",(0,r.jsxs)(n.p,{children:["Let's start from implementation ",(0,r.jsx)(n.code,{children:"from-block N"})," as the simplest one:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:"title=src/main.rs",children:"async fn get_start_block_height(start_options: &StartOptions) -> u64 {\n    match start_options {\n        StartOptions::FromBlock { height } => height,\n\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["OK, it's simple enough, what's about other match arms for ",(0,r.jsx)(n.code,{children:"StartOptions"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:"title=src/main.rs",children:"async fn get_start_block_height(start_options: &StartOptions) -> u64 {\n    match start_options {\n        StartOptions::FromBlock { height } => height,\n        StartOptions::FromLatest =>\n    }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Er, how should we get the latest block from the network? We should query the JSON RPC and get the final block, extract its height and call it a day."}),"\n",(0,r.jsx)(n.h3,{id:"fromlatest",children:(0,r.jsx)(n.code,{children:"FromLatest"})}),"\n",(0,r.jsxs)(n.p,{children:["In order to query the JSON RPC from within Rust code we need to use ",(0,r.jsxs)(n.a,{href:"https://github.com/near/near-jsonrpc-client-rs",children:[(0,r.jsx)(n.code,{children:"near-jsonrpc-client-rs"})," crate"]})]}),"\n",(0,r.jsxs)(n.p,{children:["You can find a ",(0,r.jsx)(n.a,{href:"https://github.com/near/near-jsonrpc-client-rs/tree/master/examples",children:"bunch of useful examples"})," in the corresponding folder of the project's repository on GitHub."]}),"\n",(0,r.jsxs)(n.p,{children:["Add it to ",(0,r.jsx)(n.code,{children:"Cargo.toml"})," in the end:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",metastring:"title=Cargo.toml",children:'near-jsonrpc-client = "0.3.0"\n'})}),"\n",(0,r.jsx)(n.p,{children:"The code for getting the final block height would look like the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use near_jsonrpc_client::{methods, JsonRpcClient};\nuse near_lake_framework::near_indexer_primitives::types::{BlockReference, Finality};\n\nasync fn final_block_height() -> u64 {\n    let client = JsonRpcClient::connect("https://rpc.mainnet.near.org");\n    let request = methods::block::RpcBlockRequest {\n        block_reference: BlockReference::Finality(Finality::Final),\n    };\n\n    let latest_block = client.call(request).await.unwrap();\n\n    latest_block.header.height\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Nice and easy. Though, a hardcoded value of ",(0,r.jsx)(n.code,{children:'"https://rpc.mainnet.near.org"'})," looks not so great. Especially when we want to support both networks."]}),"\n",(0,r.jsxs)(n.p,{children:["But we can handle it by passing the JSON RPC URL to the ",(0,r.jsx)(n.code,{children:"get_start_block_function"})," like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:"title=src/main.rs",children:'\nasync fn get_start_block_height(\n    start_options: &StartOptions,\n    rpc_url: &str,\n) -> u64 {\n    ...\n}\n\n    ...\n    match &opts.chain_id {\n        ChainId::Mainnet(start_options) => {\n            lake_config_builder = lake_config_builder\n                .mainnet()\n                .start_block_height(\n                    get_start_block_height(\n                        start_options,\n                        "https://rpc.mainnet.near.org",\n                    ).await\n                );\n        }\n        ChainId::Testnet(start_options) => {\n            lake_config_builder = lake_config_builder\n                .testnet()\n                .start_block_height(\n                    get_start_block_height(\n                        start_options,\n                        "https://rpc.testnet.near.org",\n                    ).await\n                )\n        }\n    }\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"Meh. It's ugly and why should we pass it everytime if it is required in only one case from three possible?"}),"\n",(0,r.jsxs)(n.p,{children:["Instead we can pass to the ",(0,r.jsx)(n.code,{children:"get_start_block_height"})," function the entire ",(0,r.jsx)(n.code,{children:"Opts"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:"title=src/main.rs",children:"async fn get_start_block_height(opts: &Opts) -> u64 {\n    match opts.chain_id {\n        ChainId::Mainnet(start_options) => {\n            match start_options {\n                StartOptions::FromBlock { height } => height,\n                StartOptions::FromLatest =>\n            }\n        }\n    }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"At least we have everything we need. Though, it still looks ugly and will definitely involve code duplication."}),"\n",(0,r.jsxs)(n.p,{children:["What we propose instead to is create ",(0,r.jsx)(n.code,{children:"impl Opts"})," with a few useful methods to get JSON RPC URL and to get ",(0,r.jsx)(n.code,{children:"StartOptions"})," instance."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Now you may proceed copying the code safely"})}),"\n",(0,r.jsxs)(n.p,{children:["Somewhere under the ",(0,r.jsx)(n.code,{children:"StartOptions"})," definition add the following:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:"title=src/main.rs",children:'impl Opts {\n    pub fn rpc_url(&self) -> &str {\n        match self.chain_id {\n            ChainId::Mainnet(_) => "https://rpc.mainnet.near.org",\n            ChainId::Testnet(_) => "https://rpc.testnet.near.org",\n        }\n    }\n\n    pub fn start_options(&self) -> &StartOptions {\n        match &self.chain_id {\n            ChainId::Mainnet(args) | ChainId::Testnet(args) => args\n        }\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["And now we can create our ",(0,r.jsx)(n.code,{children:"get_start_block_height"})," function with the helper function that will query the final block ",(0,r.jsx)(n.code,{children:"final_block_height"})," (we're going to reuse it, watch for the hands):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:"title=src/main.rs",children:"async fn get_start_block_height(opts: &Opts) -> u64 {\n    match opts.start_options() {\n        StartOptions::FromBlock { height } => *height,\n        StartOptions::FromLatest => final_block_height(opts.rpc_url()).await,\n        // a placeholder\n        StartOptions::FromInterruption => 0,\n    }\n}\n\nasync fn final_block_height(rpc_url: &str) -> u64 {\n    let client = JsonRpcClient::connect(rpc_url);\n    let request = methods::block::RpcBlockRequest {\n        block_reference: BlockReference::Finality(Finality::Final),\n    };\n\n    let latest_block = client.call(request).await.unwrap();\n\n    latest_block.header.height\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You may have noticed the ",(0,r.jsx)(n.code,{children:"FromInterruption"})," and a comment about the placeholder. The reason we've made is to be able to build the application right now to test out that ",(0,r.jsx)(n.code,{children:"FromLatest"})," works as expected."]}),"\n",(0,r.jsxs)(n.h3,{id:"fromlatest-\ud14c\uc2a4\ud2b8",children:[(0,r.jsx)(n.code,{children:"FromLatest"})," \ud14c\uc2a4\ud2b8"]}),"\n",(0,r.jsx)(n.admonition,{title:"Credentials",type:"danger",children:(0,r.jsxs)(n.p,{children:["Please, ensure you've the credentials set up as described on the ",(0,r.jsx)(n.a,{href:"/ko/tutorials/indexer/credentials",children:"Credentials"})," page. Otherwise you won't be able to get the code working."]})}),"\n",(0,r.jsx)(n.p,{children:"Let's try to build and run our code"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cargo build --release\n\n./target/release/indexer mainnet from-latest\n"})}),"\n",(0,r.jsx)(n.p,{children:"Once the code is built you should see something like that in your terminal:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"65364116 / shards 4\n65364117 / shards 4\n65364118 / shards 4\n65364119 / shards 4\n65364120 / shards 4\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can stop it by pressing ",(0,r.jsx)(n.code,{children:"CTRL+C"})]}),"\n",(0,r.jsxs)(n.p,{children:["And now we can move on to ",(0,r.jsx)(n.code,{children:"FromInterruption"})]}),"\n",(0,r.jsx)(n.h3,{id:"frominterruption",children:(0,r.jsx)(n.code,{children:"FromInterruption"})}),"\n",(0,r.jsxs)(n.p,{children:["In order to let an indexer know at what block it was interrupted, the indexer needs to store the block height somewhere. And it should do it in the and of the ",(0,r.jsx)(n.code,{children:"handle_message"})," function."]}),"\n",(0,r.jsx)(n.p,{children:"In the boilerplate code you've copy/pasted in the beginning of this tutorial you can notice a line of code:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'    std::fs::write("last_indexed_block", streamer_message.block.header.height.to_string().as_bytes()).unwrap();\n'})}),"\n",(0,r.jsxs)(n.p,{children:["It saves the last indexed block height into a file ",(0,r.jsx)(n.code,{children:"last_indexed_block"})," right near the indexer binary."]}),"\n",(0,r.jsx)(n.p,{children:"In the real world indexer you'd probably go with some other storage, depending on the toolset you're using."}),"\n",(0,r.jsx)(n.p,{children:"But to show you the concept, we've decided to go with the easiest approach by saving it to the file."}),"\n",(0,r.jsx)(n.p,{children:"Now we need to implement the reading the value from the file."}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["If it is a first start of your indexer and you ask it to start from interruption it wouldn't be able to find ",(0,r.jsx)(n.code,{children:"last_indexed_block"})," and would just fail."]}),(0,r.jsx)(n.p,{children:"It's not the behavior we expect. That's why we assume you want it to start from interruption (if possible) or from the latest."})]}),"\n",(0,r.jsxs)(n.p,{children:["Let's finish up our ",(0,r.jsx)(n.code,{children:"get_start_block_height"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:"title=src/main.rs",children:'async fn get_start_block_height(opts: &Opts) -> u64 {\n    match opts.start_options() {\n        StartOptions::FromBlock { height } => *height,\n        StartOptions::FromLatest => final_block_height(opts.rpc_url()).await,\n        // a placeholder\n        StartOptions::FromInterruption => {\n            match &std::fs::read("last_indexed_block") {\n                Ok(contents) => {\n                    String::from_utf8_lossy(contents).parse().unwrap()\n                }\n                Err(e) => {\n                    eprintln!("Cannot read last_indexed_block.\\n{}\\nStart indexer from latest final", e);\n                    latest_block_height(opts.rpc_url()).await\n                }\n            }\n        },\n    }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"What we are doing here:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"last_indexed_block"})," \ud30c\uc77c\uc744 \uc77d\uc73c\ub824\uace0 \ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Result"}),"\uac00 ",(0,r.jsx)(n.code,{children:"Ok"}),"\uc778 \uacbd\uc6b0, ",(0,r.jsx)(n.code,{children:"contents"}),"\ub97c \uc77d\uace0 \ud30c\uc2f1\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Result"}),"\uac00 ",(0,r.jsx)(n.code,{children:"Err"}),"\uc778 \uacbd\uc6b0, \uc624\ub958\uc5d0 \ub300\ud55c \uba54\uc2dc\uc9c0\ub97c \ucd9c\ub825\ud558\uace0 ",(0,r.jsx)(n.code,{children:"last_block_height"}),"\ub97c \ud638\ucd9c\ud558\uc5ec \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c \ucd5c\uc885 \ube14\ub85d\uc744 \uac00\uc838\uc635\ub2c8\ub2e4(\uc774\uc804\uc5d0 \uc774\uc57c\uae30\ud55c fallback)."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"frominterruption-\ud14c\uc2a4\ud2b8",children:[(0,r.jsx)(n.code,{children:"FromInterruption"})," \ud14c\uc2a4\ud2b8"]}),"\n",(0,r.jsx)(n.p,{children:"In order to ensure everything works as expected we will start index from the genesis to store the last indexed block. And then we will start it from interruption to ensure we're not starting from latest."}),"\n",(0,r.jsx)(n.p,{children:"Let's build and run from genesis."}),"\n",(0,r.jsx)(n.admonition,{title:"Genesis Trick",type:"info",children:(0,r.jsxs)(n.p,{children:["To start NEAR Lake Framework based indexer from the genesis block, you need to just specify the ",(0,r.jsx)(n.code,{children:"start_block_height"})," as ",(0,r.jsx)(n.code,{children:"0"}),"."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cargo build --release\n./target/release/indexer mainnet from-block 0\n"})}),"\n",(0,r.jsx)(n.p,{children:"You will see something like:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"9820210 / shards 1\n9820214 / shards 1\n9820216 / shards 1\n9820219 / shards 1\n9820221 / shards 1\n9820226 / shards 1\n9820228 / shards 1\n9820230 / shards 1\n9820231 / shards 1\n9820232 / shards 1\n9820233 / shards 1\n9820235 / shards 1\n9820236 / shards 1\n9820237 / shards 1\n9820238 / shards 1\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Stop it by pressing ",(0,r.jsx)(n.code,{children:"CTRL+C"})]}),"\n",(0,r.jsxs)(n.p,{children:["Memorize the last block height you see. In our example it is ",(0,r.jsx)(n.code,{children:"9820238"})]}),"\n",(0,r.jsx)(n.p,{children:"Restart the indexer from interruption"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./target/release/indexer mainnet from-interruption\n"})}),"\n",(0,r.jsx)(n.p,{children:"You should see the indexer logs beginning from the block you've memorized."}),"\n",(0,r.jsx)(n.p,{children:"Perfect! It's all done. Now you can adjust the code you got in the result to your needs and use it in your indexers."}),"\n",(0,r.jsx)(n.h2,{id:"\uc694\uc57d",children:"\uc694\uc57d"}),"\n",(0,r.jsx)(n.p,{children:"You've seen the way how you can empower your indexer with the starting options. As you can see there is nothing complex here."}),"\n",(0,r.jsxs)(n.p,{children:["You can find the source code in the ",(0,r.jsx)(n.a,{href:"https://github.com/near-examples/lake-indexer-start-options",children:(0,r.jsx)(n.code,{children:"near-examples/lake-indexer-start-options"})})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var r=t(67294);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);