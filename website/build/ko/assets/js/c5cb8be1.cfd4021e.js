"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5110],{73891:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var o=t(85893),i=t(11151);const s={id:"hype-indexer",title:"Hype \uc778\ub371\uc11c",sidebar_label:"Hype \uc778\ub371\uc11c"},c=void 0,r={id:"bos/tutorial/indexer-tutorials/hype-indexer",title:"Hype \uc778\ub371\uc11c",description:"NEAR QueryAPI is currently under development. Users who want to test-drive this solution need to be added to the allowlist before creating or forking QueryAPI indexers.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/bos/tutorial/indexer-tutorials/hype-indexer.md",sourceDirName:"bos/tutorial/indexer-tutorials",slug:"/bos/tutorial/indexer-tutorials/hype-indexer",permalink:"/ko/bos/tutorial/indexer-tutorials/hype-indexer",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/tutorial/indexer-tutorials/hype-indexer.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\ub144 1\uc6d4 11\uc77c",frontMatter:{id:"hype-indexer",title:"Hype \uc778\ub371\uc11c",sidebar_label:"Hype \uc778\ub371\uc11c"},sidebar:"tutorials",previous:{title:"Posts \uc778\ub371\uc11c",permalink:"/ko/bos/tutorial/indexer-tutorials/posts-indexer"},next:{title:"NFTs Indexer",permalink:"/ko/bos/tutorial/indexer-tutorials/nft-indexer"}},a={},d=[{value:"\uac1c\uc694",id:"\uac1c\uc694",level:2},{value:"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc2a4\ud0a4\ub9c8 \uc815\uc758",id:"\ub370\uc774\ud130\ubca0\uc774\uc2a4-\uc2a4\ud0a4\ub9c8-\uc815\uc758",level:2},{value:"Defining the indexing logic",id:"defining-the-indexing-logic",level:2},{value:"Filtering Blockchain transactions",id:"filtering-blockchain-transactions",level:3},{value:"Saving the data to the Database",id:"saving-the-data-to-the-database",level:3},{value:"<code>createPost</code>",id:"createpost",level:4},{value:"<code>createComment</code>",id:"createcomment",level:4},{value:"Querying data from the indexer",id:"querying-data-from-the-indexer",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.p,{children:"NEAR QueryAPI is currently under development. Users who want to test-drive this solution need to be added to the allowlist before creating or forking QueryAPI indexers."}),(0,o.jsxs)(n.p,{children:["You can request access through ",(0,o.jsx)(n.a,{href:"http://bit.ly/near-queryapi-beta",children:"this link"}),"."]})]}),"\n",(0,o.jsx)(n.h2,{id:"\uac1c\uc694",children:"\uac1c\uc694"}),"\n",(0,o.jsxs)(n.p,{children:['\uc774 \uc778\ub371\uc11c\ub294 \ucee8\ud150\uce20\uc5d0 "PEPE" \ub610\ub294 "DOGE"\uac00 \ud3ec\ud568\ub41c \ube14\ub85d\uccb4\uc778\uc5d0\uc11c \ubc1c\uacac\ub418\ub294 \ubaa8\ub4e0 \uc0c8 \uac8c\uc2dc\ubb3c \ub610\ub294 \ub313\uae00\uc5d0 \ub300\ud574 GraphQL \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0\uc11c \uc0ac\uc6a9\uc790\uac00 \uc0dd\uc131\ud55c \uc0ac\uc804 \uc815\uc758\ub41c ',(0,o.jsx)(n.code,{children:"posts"})," \ub610\ub294 ",(0,o.jsx)(n.code,{children:"comments"})," \ud14c\uc774\ube14\uc5d0 \uc0c8 \ud589\uc744 \ub9cc\ub4ed\ub2c8\ub2e4. \uc774\uac83\uc740 \ub450 \uac1c\uc758 \ud14c\uc774\ube14\uc744 \uc9c0\uc815\ud558\uace0, \ud2b9\uc815 \ud2b8\ub79c\uc7ad\uc158 \uc720\ud615\uacfc \ud574\ub2f9 \ub0b4\uc6a9\uc5d0 \ub300\ud55c \ube14\ub85d\uccb4\uc778 \ud2b8\ub79c\uc7ad\uc158 \ub370\uc774\ud130\ub97c \ud544\ud130\ub9c1\ud558\uace0, \ub370\uc774\ud130\ub97c \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc800\uc7a5\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc8fc\ub294 \uac04\ub2e8\ud55c \uc608\uc785\ub2c8\ub2e4."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["This indexer can be found by ",(0,o.jsx)(n.a,{href:"https://near.org/#/dataplatform.near/widget/QueryApi.App?selectedIndexerPath=bucanero.near/hype-indexer",children:"following this link"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"\ub370\uc774\ud130\ubca0\uc774\uc2a4-\uc2a4\ud0a4\ub9c8-\uc815\uc758",children:"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc2a4\ud0a4\ub9c8 \uc815\uc758"}),"\n",(0,o.jsxs)(n.p,{children:["\uc778\ub371\uc11c\ub97c \ub9cc\ub4dc\ub294 \uccab \ubc88\uc9f8 \ub2e8\uacc4\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc2a4\ud0a4\ub9c8\ub97c \uc815\uc758\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \uc774 \uc791\uc5c5\uc740 \ucf54\ub4dc \uc5d0\ub514\ud130\uc5d0\uc11c ",(0,o.jsx)(n.code,{children:"schema.sql"})," \ud30c\uc77c\uc744 \ud3b8\uc9d1\ud558\uc5ec \uc218\ud589\ud569\ub2c8\ub2e4. \uc774 \uc778\ub371\uc11c\uc758 \uc2a4\ud0a4\ub9c8\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE\n  "posts" (\n    "id" TEXT NOT NULL,\n    "account_id" VARCHAR NOT NULL,\n    "block_height" DECIMAL(58, 0) NOT NULL,\n    "block_timestamp" DECIMAL(20, 0) NOT NULL,\n    "receipt_id" VARCHAR NOT NULL,\n    "content" TEXT NOT NULL,\n    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")\n  );\n\nCREATE TABLE\n  "comments" (\n    "id" SERIAL NOT NULL,\n    "post_id" TEXT NOT NULL,\n    "account_id" VARCHAR NOT NULL,\n    "block_height" DECIMAL(58, 0) NOT NULL,\n    "block_timestamp" DECIMAL(20, 0) NOT NULL,\n    "receipt_id" VARCHAR NOT NULL,\n    "content" TEXT NOT NULL,\n    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")\n  );\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\uc774 \uc2a4\ud0a4\ub9c8\ub294 ",(0,o.jsx)(n.code,{children:"posts"}),"\uc640 ",(0,o.jsx)(n.code,{children:"comments"}),"\uc758 \ub450 \ud14c\uc774\ube14\uc744 \uc815\uc758\ud569\ub2c8\ub2e4. ",(0,o.jsx)(n.code,{children:"posts"})," \ud14c\uc774\ube14\uc5d0\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uc5f4\uc774 \uc788\uc2b5\ub2c8\ub2e4:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"id"}),": \ud14c\uc774\ube14\uc758 \uac01 \ud589\uc5d0 \ub300\ud55c \uace0\uc720 \uc2dd\ubcc4\uc790"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"account_id "}),": \uac8c\uc2dc\ubb3c\uc744 \ub9cc\ub4e0 \uc0ac\uc6a9\uc790\uc758 \uacc4\uc815 ID"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"block_height"}),": \uac8c\uc2dc\ubb3c\uc774 \uc0dd\uc131\ub41c \ube14\ub85d\uc758 \ub192\uc774"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"block_message"}),": \uac8c\uc2dc\ubb3c\uc774 \uc0dd\uc131\ub41c \ube14\ub85d\uc758 \ud0c0\uc784\uc2a4\ud0ec\ud504"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"recept_id "}),": \uac8c\uc2dc\ubb3c\uc744 \uc0dd\uc131\ud55c \ud2b8\ub79c\uc7ad\uc158\uc758 receipt ID"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"content"}),": \uac8c\uc2dc\ubb3c\uc758 \ub0b4\uc6a9"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"comments"})," \ud14c\uc774\ube14\uc5d0\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uc5f4\uc774 \uc788\uc2b5\ub2c8\ub2e4:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"id"}),": a unique identifier for each row in the table"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"post_id"}),": \ub313\uae00\uc774 \ub2ec\ub9b0 \uac8c\uc2dc\ubb3c\uc758 \uc544\uc774\ub514"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"account_id "}),": \ub313\uae00\uc744 \uc791\uc131\ud55c \uc0ac\uc6a9\uc790\uc758 \uacc4\uc815 ID"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"block_height"}),": \ub313\uae00\uc774 \uc0dd\uc131\ub41c \ube14\ub85d\uc758 \ub192\uc774"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"block_message"}),": \ub313\uae00\uc774 \uc0dd\uc131\ub41c \ube14\ub85d\uc758 \ud0c0\uc784\uc2a4\ud0ec\ud504"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"recept_id "}),": \ub313\uae00\uc744 \uc0dd\uc131\ud55c \ud2b8\ub79c\uc7ad\uc158\uc758 receipt ID"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"content"}),": \ub313\uae00\uc758 \ub0b4\uc6a9"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"defining-the-indexing-logic",children:"Defining the indexing logic"}),"\n",(0,o.jsxs)(n.p,{children:["\ub2e4\uc74c\uc740 \uc778\ub371\uc2f1 \ub85c\uc9c1\uc744 \uc815\uc758\ud560 \ucc28\ub840\uc785\ub2c8\ub2e4. \uc774 \uc791\uc5c5\uc740 \ucf54\ub4dc \uc5d0\ub514\ud130\uc5d0\uc11c ",(0,o.jsx)(n.code,{children:"indexingLogic.js"})," \ud30c\uc77c\uc744 \ud3b8\uc9d1\ud558\uc5ec \uc218\ud589\ud569\ub2c8\ub2e4. \uc774 \uc778\ub371\uc11c\uc758 \ub85c\uc9c1\uc740 \ub450 \ubd80\ubd84\uc73c\ub85c \ub098\ub20c \uc218 \uc788\uc2b5\ub2c8\ub2e4:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"\ud2b9\uc815 \ud2b8\ub79c\uc7ad\uc158 \uc720\ud615\uc5d0 \ub300\ud55c \ube14\ub85d\uccb4\uc778 \ud2b8\ub79c\uc7ad\uc158 \ud544\ud130\ub9c1"}),"\n",(0,o.jsx)(n.li,{children:"\ud544\ud130\ub9c1\ub41c \ud2b8\ub79c\uc7ad\uc158\uc758 \ub370\uc774\ud130\ub97c \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc800\uc7a5"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"filtering-blockchain-transactions",children:"Filtering Blockchain transactions"}),"\n",(0,o.jsxs)(n.p,{children:["\ub85c\uc9c1\uc758 \uccab \ubc88\uc9f8 \ubd80\ubd84\uc740 \ud2b9\uc815 \uc720\ud615\uc758 \ud2b8\ub79c\uc7ad\uc158\uc5d0 \ub300\ud55c \ube14\ub85d\uccb4\uc778 \ud2b8\ub79c\uc7ad\uc158\uc744 \ud544\ud130\ub9c1\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \uc774 \uc791\uc5c5\uc740 ",(0,o.jsx)(n.code,{children:"getBlock"})," \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc218\ud589\ub429\ub2c8\ub2e4. \uc774 \ud568\uc218\ub294 \ube14\ub85d\uacfc \ucee8\ud14d\uc2a4\ud2b8\ub97c \uc0ac\uc6a9\ud558\uc5ec Promise\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. \ube14\ub85d\uc740 Near \ud504\ub85c\ud1a0\ucf5c \ube14\ub85d\uc774\uace0, \ucee8\ud14d\uc2a4\ud2b8\ub294 \uc0c1\ud0dc\ub97c \uac80\uc0c9\ud558\uace0 \ucee4\ubc0b\ud558\ub294 \ud5ec\ud37c \uba54\uc11c\ub4dc \uc9d1\ud569\uc785\ub2c8\ub2e4. ",(0,o.jsx)(n.code,{children:"getBlock"})," \ud568\uc218\ub294 \ube14\ub85d\uccb4\uc778\uc758 \ubaa8\ub4e0 \ube14\ub85d\uc5d0 \ub300\ud574 \ud638\ucd9c\ub429\ub2c8\ub2e4."]}),"\n",(0,o.jsxs)(n.p,{children:["\uc774 \uc778\ub371\uc11c\uc758 ",(0,o.jsx)(n.code,{children:"getBlock"})," \ud568\uc218\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import { Block } from "@near-lake/primitives";\n\nasync function getBlock(block: Block, context) {\n  const SOCIAL_DB = "social.near";\n\n  function base64decode(encodedValue) {\n    let buff = Buffer.from(encodedValue, "base64");\n    return JSON.parse(buff.toString("utf-8"));\n  }\n\n  function get_near_social_posts_comments(\n    block_type = block,\n    DB = SOCIAL_DB,\n    decodeFunction = base64decode\n  ) {\n    const nearSocialPostsComments = block_type\n      .actions()\n      .filter((action) => action.receiverId === DB)\n      .flatMap((action) =>\n        action.operations\n          .map((operation) => operation["FunctionCall"])\n          .filter((operation) => operation?.methodName === "set")\n          .map((functionCallOperation) => ({\n            ...functionCallOperation,\n            args: decodeFunction(functionCallOperation.args),\n            receiptId: action.receiptId, // providing receiptId as we need it\n          }))\n          .filter((functionCall) => {\n            const accountId = Object.keys(functionCall.args.data)[0];\n            return (\n              Object.keys(functionCall.args.data[accountId]).includes("post") ||\n              Object.keys(functionCall.args.data[accountId]).includes("index")\n            );\n          })\n      );\n    return nearSocialPostsComments;\n  }\n\n  const nearSocialPostsComments = get_near_social_posts_comments();\n\n  ... // Further filtering for posts/comments that contain "PEPE" or "DOGE" in the contents and saving the data to the database is done in the next section\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\ub2e4\uc2dc, ",(0,o.jsx)(n.a,{href:"/ko/bos/tutorial/indexer-tutorials/posts-indexer",children:(0,o.jsx)(n.code,{children:"posts-indexer"})})," \ub610\ub294 ",(0,o.jsx)(n.a,{href:"/ko/bos/tutorial/indexer-tutorials/feed-indexer",children:(0,o.jsx)(n.code,{children:"feed-indexer"})}),"\uc640 \uac19\uc774, \uc774 \ud544\ud130\ub294 ",(0,o.jsx)(n.code,{children:"FunctionCall"})," \uc720\ud615\uc758 \ud2b8\ub79c\uc7ad\uc158\uc744 \ub124\ud2b8\uc6cc\ud06c \ub0b4 ",(0,o.jsx)(n.code,{children:"social.near"})," \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc788\ub294 ",(0,o.jsx)(n.code,{children:"set"})," \uba54\uc11c\ub4dc\ub85c \uc120\ud0dd\ud569\ub2c8\ub2e4. \ub610\ud55c \ud638\ucd9c\uc5d0 \ub300\ud55c \ub370\uc774\ud130\uc5d0\uc11c ",(0,o.jsx)(n.code,{children:"post"})," \ub610\ub294 ",(0,o.jsx)(n.code,{children:"index"})," \ubb38\uc790\uc5f4\uc744 \uac80\uc0c9\ud569\ub2c8\ub2e4."]}),"\n",(0,o.jsx)(n.h3,{id:"saving-the-data-to-the-database",children:"Saving the data to the Database"}),"\n",(0,o.jsx)(n.p,{children:'\ub85c\uc9c1\uc758 \ub450 \ubc88\uc9f8 \ubd80\ubd84\uc740 \ud544\ud130\ub9c1\ub41c \ud2b8\ub79c\uc7ad\uc158\uc758 \ub370\uc774\ud130\ub97c \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc800\uc7a5\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \ub610\ud55c \ub0b4\uc6a9\uc5d0 "PEPE" \ub610\ub294 "DOGE"\uac00 \ud3ec\ud568\ub41c \uac8c\uc2dc\ubb3c \ubc0f \ub313\uae00\uc5d0 \ub300\ud55c \ud2b8\ub79c\uc7ad\uc158 \ud544\ud130\ub9c1\uc744 \uc218\ud589\ud569\ub2c8\ub2e4.'}),"\n",(0,o.jsx)(n.p,{children:"\uc774\uc5d0 \ub300\ud55c \ub85c\uc9c1\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'  ... // Logic for filtering blockchain transactions is above\n\n  if (nearSocialPostsComments.length > 0) {\n    const blockHeight = block.blockHeight;\n    const blockTimestamp = Number(block.header().timestampNanosec);\n    await Promise.all(\n      nearSocialPostsComments.map(async (postAction) => {\n        const accountId = Object.keys(postAction.args.data)[0];\n        console.log(`ACCOUNT_ID: ${accountId}`);\n\n        const isPost =\n          postAction.args.data[accountId].post &&\n          Object.keys(postAction.args.data[accountId].post).includes("main");\n        const isComment =\n          postAction.args.data[accountId].post &&\n          Object.keys(postAction.args.data[accountId].post).includes("comment");\n\n        if (isPost) {\n          const isHypePost =\n            postAction.args.data[accountId].post.main.includes("PEPE") ||\n            postAction.args.data[accountId].post.main.includes("DOGE");\n          if (!isHypePost) {\n            return;\n          }\n          console.log("Creating a post...");\n          const postId = `${accountId}:${blockHeight}`;\n          await createPost(\n            postId,\n            accountId,\n            blockHeight,\n            blockTimestamp,\n            postAction.receiptId,\n            postAction.args.data[accountId].post.main\n          );\n        }\n        if (isComment) {\n          const commentString = JSON.parse(\n            postAction.args.data[accountId].post.comment\n          );\n          const isHypeComment =\n            commentString.includes("PEPE") || commentString.includes("DOGE");\n          if (!isHypeComment) {\n            return;\n          }\n          console.log("Creating a comment...");\n          const postBlockHeight =\n            postAction.args.data[accountId].post.blockHeight;\n          const postId = `${accountId}:${postBlockHeight}`;\n          await createComment(\n            accountId,\n            postId,\n            blockHeight,\n            blockTimestamp,\n            postAction.receiptId,\n            commentString\n          );\n        }\n      })\n    );\n  }\n\n  ... // Definitions for createPost and createComment are below\n'})}),"\n",(0,o.jsx)(n.h4,{id:"createpost",children:(0,o.jsx)(n.code,{children:"createPost"})}),"\n",(0,o.jsxs)(n.p,{children:["Creating a post is done by using the ",(0,o.jsx)(n.a,{href:"/ko/bos/queryapi/context-object#insert",children:(0,o.jsx)(n.code,{children:"context.db.Posts.insert()"})})," function:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'  async function createPost(\n    postId,\n    accountId,\n    blockHeight,\n    blockTimestamp,\n    receiptId,\n    postContent\n  ) {\n    try {\n      const postObject = {\n          id: postId,\n          account_id: accountId,\n          block_height: blockHeight,\n          block_timestamp: blockTimestamp,\n          receipt_id: receiptId,\n          content: postContent,\n      };\n      await context.db.Posts.insert(postObject);\n      console.log("Post created!");\n    } catch (error) {\n      console.error(error);\n    }\n  }\n'})}),"\n",(0,o.jsx)(n.h4,{id:"createcomment",children:(0,o.jsx)(n.code,{children:"createComment"})}),"\n",(0,o.jsxs)(n.p,{children:["Creating a comment is done by using the ",(0,o.jsx)(n.a,{href:"/ko/bos/queryapi/context-object#insert",children:(0,o.jsx)(n.code,{children:"context.db.Comments.insert()"})})," function:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'  async function createComment(\n    accountId,\n    postId,\n    blockHeight,\n    blockTimestamp,\n    receiptId,\n    commentContent\n  ) {\n    try {\n      const commentObject = {\n          account_id: accountId,\n          post_id: postId,\n          block_height: blockHeight,\n          block_timestamp: blockTimestamp,\n          receipt_id: receiptId,\n          content: commentContent,\n      };\n      await context.db.Comments.insert(commentObject);\n      console.log("Comment created!");\n    } catch (error) {\n      console.error(error);\n    }\n  }\n'})}),"\n",(0,o.jsx)(n.h2,{id:"querying-data-from-the-indexer",children:"Querying data from the indexer"}),"\n",(0,o.jsx)(n.p,{children:"The final step is querying the indexer using the public GraphQL API. This can be done by writing a GraphQL query using the GraphiQL tab in the code editor."}),"\n",(0,o.jsxs)(n.p,{children:["For example, here's a query that fetches ",(0,o.jsx)(n.code,{children:"posts"})," and ",(0,o.jsx)(n.code,{children:"comments"})," from the ",(0,o.jsx)(n.em,{children:"Hype Indexer"}),", ordered by ",(0,o.jsx)(n.code,{children:"block_height"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"query MyQuery {\n  <user-name>_near_hype_indexer_posts(order_by: {block_height: desc}) {\n    account_id\n    block_height\n    content\n  }\n  <user-name>_near_hype_indexer_comments(order_by: {block_height: desc}) {\n    account_id\n    block_height\n    content\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Once you have defined your query, you can use the GraphiQL Code Exporter to auto-generate a JavaScript or NEAR Widget code snippet. The exporter will create a helper method ",(0,o.jsx)(n.code,{children:"fetchGraphQL"})," which will allow you to fetch data from the indexer's GraphQL API. It takes three parameters:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"operationsDoc"}),": A string containing the queries you would like to execute."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"operationName"}),": The specific query you want to run."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"variables"}),": Any variables to pass in that your query supports, such as ",(0,o.jsx)(n.code,{children:"offset"})," and ",(0,o.jsx)(n.code,{children:"limit"})," for pagination."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Next, you can call the ",(0,o.jsx)(n.code,{children:"fetchGraphQL"})," function with the appropriate parameters and process the results."]}),"\n",(0,o.jsxs)(n.p,{children:["Here's the complete code snippet for a NEAR component using the ",(0,o.jsx)(n.em,{children:"Hype Indexer"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const QUERYAPI_ENDPOINT = `https://near-queryapi.api.pagoda.co/v1/graphql/`;\n\nState.init({\ndata: []\n});\n\nconst query = `query MyHypeQuery {\n    <user-name>_near_hype_indexer_posts(order_by: {block_height: desc}) {\n      account_id\n      block_height\n      content\n    }\n    <user-name>_near_hype_indexer_comments(order_by: {block_height: desc}) {\n      account_id\n      block_height\n      content\n    }\n  }`\n\nfunction fetchGraphQL(operationsDoc, operationName, variables) {\n      return asyncFetch(\n        QUERYAPI_ENDPOINT,\n        {\n          method: "POST",\n          headers: { "x-hasura-role": `<user-name>_near` },\n          body: JSON.stringify({\n            query: operationsDoc,\n            variables: variables,\n            operationName: operationName,\n          }),\n        }\n      );\n    }\n\nfetchGraphQL(query, "MyHypeQuery", {}).then((result) => {\n  if (result.status === 200) {\n    if (result.body.data) {\n      const data = result.body.data.<user-name>_near_hype_indexer_posts;\n      State.update({ data })\n      console.log(data);\n    }\n  }\n});\n\nconst renderData = (a) => {\n  return (\n    <div key={JSON.stringify(a)}>\n        {JSON.stringify(a)}\n    </div>\n  );\n};\n\nconst renderedData = state.data.map(renderData);\nreturn (\n  {renderedData}\n);\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["To view a more complex example, see this widget which fetches posts with proper pagination: ",(0,o.jsx)(n.a,{href:"https://near.org/edit/roshaan.near/widget/query-api-feed-infinite",children:"Posts Widget powered By QueryAPI"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>c});var o=t(67294);const i={},s=o.createContext(i);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);