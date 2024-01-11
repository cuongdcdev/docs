"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8641],{83519:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>j,frontMatter:()=>d,metadata:()=>i,toc:()=>h});var t=s(85893),r=s(11151);const d={id:"skeleton",title:"\ubf08\ub300 \ubc0f JavaScript \uc544\ud0a4\ud14d\ucc98",sidebar_label:"\ucee8\ud2b8\ub799\ud2b8 \uc544\ud0a4\ud14d\ucc98"},l=void 0,i={id:"tutorials/nfts/js/skeleton",title:"\ubf08\ub300 \ubc0f JavaScript \uc544\ud0a4\ud14d\ucc98",description:'\uc774 \uae00\uc5d0\uc11c\ub294 \uc774 "Zero to Hero" \uc2dc\ub9ac\uc988\ub97c \uc9c4\ud589\ud558\uba74\uc11c \uac1c\ubc1c\ud558\uac8c \ub420 NFT \ucee8\ud2b8\ub799\ud2b8\uc758 \uae30\ubcf8 \uc544\ud0a4\ud14d\ucc98\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4. \ucee8\ud2b8\ub799\ud2b8\uc758 \ub808\uc774\uc544\uc6c3\uc744 \ubc1c\uacac\ud558\uace0 \uc644\uc804\ud55c \uae30\ub2a5\uc744 \uac16\ucd98 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uad6c\ucd95\ud558\uae30 \uc704\ud574 JavaScript \ud30c\uc77c\uc774 \uc5b4\ub5bb\uac8c \uad6c\uc131\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.',source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/3.tutorials/nfts/js/1-skeleton.md",sourceDirName:"3.tutorials/nfts/js",slug:"/tutorials/nfts/js/skeleton",permalink:"/ko/tutorials/nfts/js/skeleton",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/js/1-skeleton.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"skeleton",title:"\ubf08\ub300 \ubc0f JavaScript \uc544\ud0a4\ud14d\ucc98",sidebar_label:"\ucee8\ud2b8\ub799\ud2b8 \uc544\ud0a4\ud14d\ucc98"},sidebar:"contracts",previous:{title:"\uc0ac\uc804 \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8",permalink:"/ko/tutorials/nfts/js/predeployed-contract"},next:{title:"\ubc1c\ud589",permalink:"/ko/tutorials/nfts/js/minting"}},c={},h=[{value:"\uc18c\uac1c",id:"\uc18c\uac1c",level:2},{value:"\ud30c\uc77c \uad6c\uc870",id:"\ud30c\uc77c-\uad6c\uc870",level:2},{value:"\uc18c\uc2a4 \ud30c\uc77c",id:"\uc18c\uc2a4-\ud30c\uc77c",level:3},{value:"<code>approval.ts</code>",id:"approvalts",level:2},{value:"<code>enumeration.ts</code>",id:"enumerationts",level:2},{value:"<code>metadata.ts</code>",id:"metadatats",level:2},{value:"<code>mint.ts</code>",id:"mintts",level:2},{value:"<code>nft_core.ts</code>",id:"nft_corets",level:2},{value:"<code>royalty.ts</code>",id:"royaltyts",level:2},{value:"<code>index.ts</code>",id:"indexts",level:2},{value:"\ubf08\ub300 \uad6c\ucd95",id:"\ubf08\ub300-\uad6c\ucd95",level:2},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}];function o(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\uc774 \uae00\uc5d0\uc11c\ub294 \uc774 ",(0,t.jsx)(n.em,{children:'"Zero to Hero"'})," \uc2dc\ub9ac\uc988\ub97c \uc9c4\ud589\ud558\uba74\uc11c \uac1c\ubc1c\ud558\uac8c \ub420 NFT \ucee8\ud2b8\ub799\ud2b8\uc758 \uae30\ubcf8 \uc544\ud0a4\ud14d\ucc98\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4. \ucee8\ud2b8\ub799\ud2b8\uc758 \ub808\uc774\uc544\uc6c3\uc744 \ubc1c\uacac\ud558\uace0 \uc644\uc804\ud55c \uae30\ub2a5\uc744 \uac16\ucd98 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uad6c\ucd95\ud558\uae30 \uc704\ud574 JavaScript \ud30c\uc77c\uc774 \uc5b4\ub5bb\uac8c \uad6c\uc131\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["JS-SDK\ub294 \ud604\uc7ac ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://github.com/near/near-sdk-js/releases/",children:(0,t.jsx)(n.code,{children:"Alpha"})})})," \ubc84\uc804\uc785\ub2c8\ub2e4."]})}),"\n",(0,t.jsx)(n.h2,{id:"\uc18c\uac1c",children:"\uc18c\uac1c"}),"\n",(0,t.jsx)(n.p,{children:"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc740 NFT \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \ucf54\ub4dc \ubf08\ub300\uc640 \ud30c\uc77c \uad6c\uc870\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \ubaa8\ub4e0 \uae30\ub2a5\uc774 \ubc30\uce58\ub41c \ubc29\ubc95\uacfc \ucc44\uc6cc\uc57c \ud558\ub294 \ub204\ub77d\ub41c JS \ucf54\ub4dc\ub97c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubaa8\ub4e0 \ud30c\uc77c\uacfc \uae30\ub2a5\uc774 \ub2e4\ub8e8\uc5b4\uc9c0\uba74, \ubaa8\ud615 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud558\ub294 \ud504\ub85c\uc138\uc2a4\ub97c \uac70\uccd0\uc11c \ud655\uc778\ud569\ub2c8\ub2e4. \ubaa8\ub4e0 \uac83\uc774 \uc62c\ubc14\ub974\uac8c \uc791\ub3d9\ud560 \uac83\uc785\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.h2,{id:"\ud30c\uc77c-\uad6c\uc870",children:"\ud30c\uc77c \uad6c\uc870"}),"\n",(0,t.jsxs)(n.p,{children:["\uc77c\ubc18 ",(0,t.jsx)(n.a,{href:"https://www.javascript.com/",children:"JavaScript"})," \ud504\ub85c\uc81d\ud2b8\uc5d0 \ub530\ub77c \uc774 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \ud30c\uc77c \uad6c\uc870\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"package.json"})," : \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \ud328\ud0a4\uc9c0 \ubc0f \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc815\uc758\ud558\ub294 \ud30c\uc77c\uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"src"})," : \ubaa8\ub4e0 JavaScript \uc18c\uc2a4 \ud30c\uc77c\uc774 \uc800\uc7a5\ub418\ub294 \ud3f4\ub354\uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"build"})," : \ucef4\ud30c\uc77c\ub41c ",(0,t.jsx)(n.code,{children:"wasm"})," \ud30c\uc77c\uc774 \ucd9c\ub825\ub420 \ud3f4\ub354\uc785\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\uc18c\uc2a4-\ud30c\uc77c",children:"\uc18c\uc2a4 \ud30c\uc77c"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\ud30c\uc77c"}),(0,t.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#approvalts",children:"approval.ts"})}),(0,t.jsx)(n.td,{children:"\ub300\uccb4 \ubd88\uac00\ub2a5 \ud1a0\ud070(NFT)\uc758 \uc561\uc138\uc2a4 \ubc0f \uc804\uc1a1\uc744 \uc81c\uc5b4\ud558\ub294 \u200b\u200b\ub0b4\ubd80 \ud568\uc218\ub4e4\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#enumerationts",children:"enumeration.ts"})}),(0,t.jsx)(n.td,{children:"NFT \ud1a0\ud070 \ubc0f \ud574\ub2f9 \uc18c\uc720\uc790\ub97c \ucffc\ub9ac\ud558\ub294 \ub0b4\ubd80 \uba54\uc11c\ub4dc\ub97c \ud3ec\ud568\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#indexts",children:"index.ts"})}),(0,t.jsx)(n.td,{children:"\uacf5\uac1c\ub41c \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ud568\uc218\ub4e4\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#metadatats",children:"metadata.ts"})}),(0,t.jsx)(n.td,{children:"\ud1a0\ud070 \ubc0f \uba54\ud0c0\ub370\uc774\ud130 \uad6c\uc870\ub97c \uc815\uc758\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#mintts",children:"mint.ts"})}),(0,t.jsx)(n.td,{children:"\ub0b4\ubd80 \ud1a0\ud070 \ubc1c\ud589 \ub85c\uc9c1\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#nft_corets",children:"nft_core.ts"})}),(0,t.jsx)(n.td,{children:"\uc0ac\uc6a9\uc790 \uac04\uc5d0 NFT\ub97c \uc804\uc1a1\ud560 \uc218 \uc788\ub294 \ub0b4\ubd80 \ud575\uc2ec \ub85c\uc9c1\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#royaltyts",children:"royalty.ts"})}),(0,t.jsx)(n.td,{children:"\ub0b4\ubd80 \uc9c0\ubd88 \uad00\ub828 \ud568\uc218\ub97c \ud3ec\ud568\ud569\ub2c8\ub2e4."})]})]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"nft-tutorial-js\n\u2514\u2500\u2500 src\n    market-contract\n    nft-contract\n    \u251c\u2500\u2500 approval.ts\n    \u251c\u2500\u2500 enumeration.ts\n    \u251c\u2500\u2500 index.ts\n    \u251c\u2500\u2500 metadata.ts\n    \u251c\u2500\u2500 mint.ts\n    \u251c\u2500\u2500 nft_core.ts\n    \u2514\u2500\u2500 royalty.ts\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.mdxAdmonitionTitle,{children:[(0,t.jsx)(n.a,{href:"https://github.com/near-examples/nft-tutorial-js/tree/1.skeleton",children:"GitHub \ub808\ud37c\uc9c0\ud1a0\ub9ac"}),"\uc5d0\uc11c \ucf54\ub4dc\ub97c \uc0b4\ud3b4\ubcf4\uc138\uc694. :::"]}),(0,t.jsx)(n.hr,{}),(0,t.jsx)(n.h2,{id:"approvalts",children:(0,t.jsx)(n.code,{children:"approval.ts"})}),(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\uc774\ub97c \ud1b5\ud574 \uc0ac\ub78c\ub4e4\uc740 \ub2e4\ub978 \uacc4\uc815\uc744 NFT\ub97c \ub300\uc2e0 \uc804\uc1a1\ud560 \uc218 \uc788\uac8c\ub054 \uc2b9\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n"]}),(0,t.jsxs)(n.p,{children:["\uc774 \ud30c\uc77c\uc5d0\ub294 \ud45c\uc900\uc758 ",(0,t.jsx)(n.a,{href:"https://nomicon.io/Standards/NonFungibleToken/ApprovalManagement.html",children:"\uc2b9\uc778 \uad00\ub9ac"})," \ud655\uc7a5\uc744 \uc900\uc218\ud558\ub294 \ub0b4\ubd80 \ub85c\uc9c1\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c\uc740 \uba54\uc11c\ub4dc \ubc0f \uae30\ub2a5\uc5d0 \ub300\ud55c \ubd84\uc11d\uc785\ub2c8\ub2e4."]}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\uba54\uc11c\ub4dc"}),(0,t.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"internalNftApprove"})}),(0,t.jsxs)(n.td,{children:["\uc0ac\uc6a9\uc790\ub97c \ub300\uc2e0\ud558\uc5ec \ud1a0\ud070\uc744 \uc804\uc1a1\ud560 \uacc4\uc815 ID\ub97c \uc2b9\uc778\ud569\ub2c8\ub2e4. ",(0,t.jsx)(n.strong,{children:"nft_approve"})," \uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"internalNftIsApproved"})}),(0,t.jsxs)(n.td,{children:["\uc785\ub825 \uacc4\uc815\uc5d0 \ud1a0\ud070 ID\ub97c \uc2b9\uc778\ud560 \uc218 \uc788\ub294 \uc561\uc138\uc2a4 \uad8c\ud55c\uc774 \uc788\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4. ",(0,t.jsx)(n.strong,{children:"nft_is_approved"}),"\uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"internalNftRevoke"})}),(0,t.jsxs)(n.td,{children:["\uc0ac\uc6a9\uc790\ub97c \ub300\uc2e0\ud558\uc5ec \ud1a0\ud070\uc744 \uc804\uc1a1\ud558\ub294 \ud2b9\uc815 \uacc4\uc815\uc744 \ucde8\uc18c\ud569\ub2c8\ub2e4. ",(0,t.jsx)(n.strong,{children:"nft_revoke"}),"\uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"internalNftRevokeAll"})}),(0,t.jsxs)(n.td,{children:["\uc0ac\uc6a9\uc790\ub97c \ub300\uc2e0\ud558\uc5ec \ud1a0\ud070\uc744 \uc804\uc1a1\ud558\ub294 \ubaa8\ub4e0 \uacc4\uc815\uc744 \ucde8\uc18c\ud569\ub2c8\ub2e4. ",(0,t.jsx)(n.strong,{children:"nft_revoke_all"}),"\uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4."]})]})]})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/approval.ts#L9-L69\n"})}),(0,t.jsxs)(n.p,{children:["Zero to Hero \uc2dc\ub9ac\uc988\uc758 ",(0,t.jsx)(n.a,{href:"/tutorials/nfts/js/approvals",children:"\uc2b9\uc778 \uc139\uc158"}),"\uc5d0\uc11c \uc774\ub7ec\ud55c \ud568\uc218\ub4e4\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,t.jsx)(n.hr,{}),(0,t.jsx)(n.h2,{id:"enumerationts",children:(0,t.jsx)(n.code,{children:"enumeration.ts"})}),(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\uc774 \ud30c\uc77c\uc740 NFT\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ubcf4\ub294 \ub370 \ud544\uc694\ud55c \ub0b4\ubd80 \ud568\uc218\ub4e4\uc744 \uc81c\uacf5\ud558\uba70 \ud45c\uc900\uc758 ",(0,t.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"\uc5f4\uac70(Enumeration)"})," \ud655\uc7a5\uc790\ub97c \ub530\ub985\ub2c8\ub2e4."]}),"\n"]}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\uba54\uc11c\ub4dc"}),(0,t.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"internalNftTotalSupply"})}),(0,t.jsxs)(n.td,{children:["\ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc800\uc7a5\ub41c NFT\uc758 \ucd1d\ub7c9\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. ",(0,t.jsx)(n.strong,{children:"nft_total_supply"}),"\uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"internalNftTokens"})}),(0,t.jsxs)(n.td,{children:["\uc18c\uc720\uc790\uc640 \uad00\uacc4\uc5c6\uc774 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc800\uc7a5\ub41c \ud398\uc774\uc9c0\uac00 \ub9e4\uaca8\uc9c4 NFT \ubaa9\ub85d\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. ",(0,t.jsx)(n.strong,{children:"nft_tokens"}),"\uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"internalNftSupplyForOwner"})}),(0,t.jsxs)(n.td,{children:["\uc8fc\uc5b4\uc9c4 \uc0ac\uc6a9\uc790\uac00 \uc18c\uc720\ud55c \ucd1d NFT \uc218\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,t.jsx)(n.strong,{children:"nft_supply_for_owner"}),"\uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"internalNftTokensForOwner"})}),(0,t.jsxs)(n.td,{children:["\uc9c0\uc815\ub41c \uc0ac\uc6a9\uc790\uac00 \uc18c\uc720\ud55c NFT \ubaa9\ub85d\uc744 \ud398\uc774\uc9c0 \ud615\ud0dc\ub85c \ubc18\ud658\ud569\ub2c8\ub2e4. ",(0,t.jsx)(n.strong,{children:"nft_tokens_for_owner"}),"\uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4."]})]})]})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/enumeration.ts#L8-L62\n"})}),(0,t.jsxs)(n.p,{children:["\ud29c\ud1a0\ub9ac\uc5bc \uc2dc\ub9ac\uc988\uc758 ",(0,t.jsx)(n.a,{href:"/tutorials/nfts/js/enumeration",children:"\uc5f4\uac70 \uc139\uc158"}),"\uc5d0\uc11c \uc774\ub7ec\ud55c \ud568\uc218\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,t.jsx)(n.hr,{}),(0,t.jsx)(n.h2,{id:"metadatats",children:(0,t.jsx)(n.code,{children:"metadata.ts"})}),(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\uc774 \ud30c\uc77c\uc740 \ud1a0\ud070 \ubc0f \uba54\ud0c0\ub370\uc774\ud130\uc5d0 \ub300\ud574 \uc800\uc7a5\ud560 \uc815\ubcf4\ub97c \ucd94\uc801\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ub610\ud55c \uc774\ub97c \ud1b5\ud574 \ud45c\uc900 \uba54\ud0c0\ub370\uc774\ud130 \ud655\uc7a5\uc758 \uc77c\ubd80\uc778 \ucee8\ud2b8\ub799\ud2b8\uc758 ",(0,t.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Metadata",children:"\uba54\ud0c0\ub370\uc774\ud130"}),"\ub97c \ubcf4\ub294 \ud568\uc218\ub97c \uc815\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\uc774\ub984"}),(0,t.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"TokenMetadata"})}),(0,t.jsx)(n.td,{children:"\uc774 \uad6c\uc870\ub294 \uac01 \ud1a0\ud070\uc5d0 \ub300\ud574 \uc800\uc7a5\ud560 \uc218 \uc788\ub294 \uba54\ud0c0\ub370\uc774\ud130\ub97c \uc815\uc758\ud569\ub2c8\ub2e4. (\uc81c\ubaa9, \uc124\uba85, \ubbf8\ub514\uc5b4 \ub4f1)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Token"})}),(0,t.jsx)(n.td,{children:"\uc774 \uad6c\uc870\ub294 \uac01 \ud1a0\ud070\uc5d0 \ub300\ud55c \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc5b4\ub5a4 \uc815\ubcf4\uac00 \uc800\uc7a5\ub420 \uac83\uc778\uc9c0\ub97c \uc124\uba85\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"JsonToken"})}),(0,t.jsx)(n.td,{children:"View \ud638\ucd9c\uc744 \ud1b5\ud574 NFT\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \uc870\ud68c\ud560 \ub54c, \ubc18\ud658\ub41c \uc815\ubcf4\ub294 \uc774 JSON \ud1a0\ud070\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"internalNftMetadata"})}),(0,t.jsxs)(n.td,{children:["\uc774 \ud568\uc218\ub97c \ud1b5\ud574 \uc0ac\uc6a9\uc790\ub294 \ucee8\ud2b8\ub799\ud2b8\uc758 \ub0b4\ubd80 \uba54\ud0c0\ub370\uc774\ud130\ub97c \ucffc\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,t.jsx)(n.strong,{children:"nft_metadata"}),"\uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4."]})]})]})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/metadata.ts#L12-L46\n"})}),(0,t.jsxs)(n.p,{children:["\ud29c\ud1a0\ub9ac\uc5bc \uc2dc\ub9ac\uc988\uc758 ",(0,t.jsx)(n.a,{href:"/tutorials/nfts/js/minting",children:"\ubc1c\ud589 \uc139\uc158"}),"\uc5d0\uc11c \uc774\ub7ec\ud55c \uae30\ub2a5\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uac83\uc785\ub2c8\ub2e4."]}),(0,t.jsx)(n.hr,{}),(0,t.jsx)(n.h2,{id:"mintts",children:(0,t.jsx)(n.code,{children:"mint.ts"})}),(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\ub0b4\ubd80 \ud1a0\ud070 \ubc1c\ud589 \ub85c\uc9c1\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4."}),"\n"]}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\uba54\uc11c\ub4dc"}),(0,t.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"internalNftMint"})}),(0,t.jsxs)(n.td,{children:["\uc774 \ud568\uc218\ub294 \ub300\uccb4 \ubd88\uac00\ub2a5 \ud1a0\ud070\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. ",(0,t.jsx)(n.strong,{children:"nft_mint"}),"\uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4."]})]})})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/mint.ts#L7-L23\n"})}),(0,t.jsx)(n.hr,{}),(0,t.jsx)(n.h2,{id:"nft_corets",children:(0,t.jsx)(n.code,{children:"nft_core.ts"})}),(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\uc0ac\uc6a9\uc790 \uac04\uc5d0 NFT\ub97c \uc804\uc1a1\ud560 \uc218 \uc788\ub294 \ud575\uc2ec \ub85c\uc9c1\uc785\ub2c8\ub2e4."}),"\n"]}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\uba54\uc11c\ub4dc"}),(0,t.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"internalNftTransfer"})}),(0,t.jsxs)(n.td,{children:["NFT\ub97c \uc218\uc2e0\uc790 ID\ub85c \uc804\uc1a1\ud569\ub2c8\ub2e4. ",(0,t.jsx)(n.strong,{children:"nft_transfer"}),"\uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"internalNftTransferCall"})}),(0,t.jsxs)(n.td,{children:["NFT\ub97c \uc218\uc2e0\uc790\uc5d0\uac8c \uc804\uc1a1\ud558\uace0 \uc218\uc2e0\uc790 ID \ucee8\ud2b8\ub799\ud2b8\uc758 \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4. \ubcf4\ub0b8 \uc0ac\ub78c\uc758 \uacc4\uc815\uc5d0\uc11c \ud1a0\ud070\uc774 \uc804\uc1a1\ub41c \uacbd\uc6b0 \ud568\uc218\ub294 ",(0,t.jsx)(n.code,{children:"true"}),"\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. ",(0,t.jsx)(n.strong,{children:"nft_transfer_call"}),"\uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"internalNftToken"})}),(0,t.jsxs)(n.td,{children:["\uc0ac\uc6a9\uc790\uac00 \ud2b9\uc815 NFT\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ucffc\ub9ac\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4. ",(0,t.jsx)(n.strong,{children:"nft_token"}),"\uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"internalNftResolveTransfer"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"nft_transfer_call"}),"\uc744 \uc2dc\uc791\ud558\uace0 NFT\ub97c \uc804\uc1a1\ud560 \ub54c\uc758 \ud45c\uc900\uc5d0 \ub530\ub974\uba74, \uc218\uc2e0\uc790\uc758 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc788\ub294 \uba54\uc11c\ub4dc\ub3c4 \ud638\ucd9c\ud574\uc57c \ud569\ub2c8\ub2e4. \uc218\uc2e0\uc790\uac00 \ubc1c\uc2e0\uc790\uc5d0\uac8c NFT\ub97c \ubc18\ud658\ud574\uc57c \ud558\ub294 \uacbd\uc6b0(",(0,t.jsx)(n.code,{children:"nft_on_transfer"})," \uba54\uc11c\ub4dc\uc758 \ubc18\ud658 \uac12\uc5d0 \ub530\ub77c) \uc774 \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uba74 \ud574\ub2f9 \ub85c\uc9c1\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,t.jsx)(n.strong,{children:"nft_resolve_transfer"}),"\uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4."]})]})]})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/nft_core.ts#L10-L85\n"})}),(0,t.jsxs)(n.p,{children:["\ud29c\ud1a0\ub9ac\uc5bc \uc2dc\ub9ac\uc988\uc758 ",(0,t.jsx)(n.a,{href:"/tutorials/nfts/js/minting",children:"\ubc1c\ud589 \uc139\uc158"}),"\uc5d0\uc11c \uc774\ub7ec\ud55c \ud568\uc218\ub4e4\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uac83\uc785\ub2c8\ub2e4."]}),(0,t.jsx)(n.hr,{}),(0,t.jsx)(n.h2,{id:"royaltyts",children:(0,t.jsx)(n.code,{children:"royalty.ts"})}),(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\ub0b4\ubd80 \uc9c0\ubd88 \uad00\ub828 \uae30\ub2a5\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4."}),"\n"]}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\uba54\uc11c\ub4dc"}),(0,t.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"internalNftPayout"})}),(0,t.jsxs)(n.td,{children:["\uc774 \ub0b4\ubd80 \uba54\uc11c\ub4dc\ub294 \uc8fc\uc5b4\uc9c4 \ud1a0\ud070\uc5d0 \ub300\ud55c \uc9c0\ubd88\uae08\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4. ",(0,t.jsx)(n.strong,{children:"nft_payout"}),"\uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"internalNftTransferPayout"})}),(0,t.jsxs)(n.td,{children:["\ud1a0\ud070\uc744 \uc218\uc2e0\uc790 ID\ub85c \uc804\uc1a1\ud558\uace0 \uc8fc\uc5b4\uc9c4 \uc794\uace0\uc5d0 \ub300\ud574 \uc9c0\ubd88\ud574\uc57c \ud558\ub294 \uc9c0\ubd88 \uac1d\uccb4\ub97c \ubc18\ud658\ud558\ub294 \ub0b4\ubd80 \uba54\uc11c\ub4dc\uc785\ub2c8\ub2e4. ",(0,t.jsx)(n.strong,{children:"nft_transfer_payout"}),"\uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4."]})]})]})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/royalty.ts#L7-L45\n"})}),(0,t.jsxs)(n.p,{children:["\ud29c\ud1a0\ub9ac\uc5bc \uc2dc\ub9ac\uc988\uc758 ",(0,t.jsx)(n.a,{href:"/tutorials/nfts/js/royalty",children:"\ub85c\uc5f4\ud2f0 \uc139\uc158"}),"\uc5d0\uc11c \uc774\ub7ec\ud55c \ud568\uc218\ub4e4\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,t.jsx)(n.hr,{}),(0,t.jsx)(n.h2,{id:"indexts",children:(0,t.jsx)(n.code,{children:"index.ts"})}),(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\uc774 \ud30c\uc77c\uc740 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ud074\ub798\uc2a4\uc640 \ud574\ub2f9 \ucee8\ud2b8\ub799\ud2b8\uac00 \uc800\uc7a5\ud558\uace0 \ucd94\uc801\ud558\ub294 \uc815\ubcf4\uc758 \uac1c\uc694\ub97c \uc124\uba85\ud569\ub2c8\ub2e4. \ub610\ud55c \uc0ac\uc6a9\uc790\uac00 \ud638\ucd9c\ud560 \uc218 \uc788\ub294 \ubaa8\ub4e0 \uacf5\uc6a9 \uba54\uc11c\ub4dc\ub97c \uacf5\uac1c\ud569\ub2c8\ub2e4."}),"\n"]}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\uba54\uc11c\ub4dc"}),(0,t.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"init"})}),(0,t.jsx)(n.td,{children:"\uc77c\ubd80 \uba54\ud0c0\ub370\uc774\ud130 \ubc0f \uae30\ubcf8 \uc0c1\ud0dc\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \ucd08\uae30\ud654\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \uc0dd\uc131\uc790 \ud568\uc218\uc785\ub2c8\ub2e4."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"nft_mint"})}),(0,t.jsx)(n.td,{children:"NFT\ub97c \ubc1c\ud589\ud558\uae30 \uc704\ud574 \ub0b4\ubd80 \ubc1c\ud589 \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"nft_token"})}),(0,t.jsx)(n.td,{children:"\ud2b9\uc815 NFT\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ucffc\ub9ac\ud558\uae30 \uc704\ud574 \ub0b4\ubd80 \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"nft_transfer"})}),(0,t.jsx)(n.td,{children:"\ub0b4\ubd80 \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec NFT\ub97c \uc804\uc1a1\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"nft_transfer_call"})}),(0,t.jsxs)(n.td,{children:["\ub0b4\ubd80 \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec NFT\ub97c \uc804\uc1a1\ud558\uace0 \uc218\uc2e0\uc790\uc758 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c ",(0,t.jsx)(n.code,{children:"nft_on_transfer"}),"\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"nft_resolve_transfer"})}),(0,t.jsx)(n.td,{children:"\uc804\uc1a1 \ud638\ucd9c \uc57d\uc18d\uc744 \ud574\uacb0\ud558\uae30 \uc704\ud574 \ub0b4\ubd80 \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"nft_is_approved"})}),(0,t.jsx)(n.td,{children:"\ub204\uad70\uac00 NFT\ub97c \uc2b9\uc778\ud588\ub294\uc9c0 \uc5ec\ubd80\ub97c \ud655\uc778\ud558\uae30 \uc704\ud574 \ub0b4\ubd80 \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"nft_approve"})}),(0,t.jsx)(n.td,{children:"\ub0b4\ubd80 \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec \ub204\uad70\uac00 NFT\ub97c \uc804\uc1a1\ud558\ub3c4\ub85d \uc2b9\uc778\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"nft_payout"})}),(0,t.jsx)(n.td,{children:"NFT\uc5d0 \ub300\ud55c \uc9c0\ubd88 \uac1d\uccb4\ub97c \ucffc\ub9ac\ud558\uae30 \uc704\ud574 \ub0b4\ubd80 \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"nft_transfer_payout"})}),(0,t.jsx)(n.td,{children:"\ub0b4\ubd80 \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec NFT\ub97c \uc804\uc1a1\ud558\uace0 \uc9c0\ubd88 \uac1d\uccb4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"nft_revoke"})}),(0,t.jsx)(n.td,{children:"NFT\ub97c \uc804\uc1a1\ud558\uae30 \uc704\ud574 \ub204\uad70\uac00\uc758 \uc561\uc138\uc2a4 \uad8c\ud55c\uc744 \ucde8\uc18c\ud558\ub294 \ub0b4\ubd80 \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"nft_revoke_all"})}),(0,t.jsx)(n.td,{children:"NFT\ub97c \uc804\uc1a1\ud558\uae30 \uc704\ud574 \ubaa8\ub4e0 \uc0ac\ub78c\uc758 \uc561\uc138\uc2a4 \uad8c\ud55c\uc744 \ucde8\uc18c\ud558\ub294 \ub0b4\ubd80 \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"nft_total_supply"})}),(0,t.jsx)(n.td,{children:"\ub0b4\ubd80 \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c NFT\uc758 \ucd1d \uacf5\uae09\ub7c9\uc744 \ucffc\ub9ac\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"nft_tokens"})}),(0,t.jsx)(n.td,{children:"\ucee8\ud2b8\ub799\ud2b8 \ub0b4 NFT\ub97c \ud398\uc774\uc9c0\ub85c \ub9e4\uae30\uae30 \uc704\ud574 \ub0b4\ubd80 \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"nft_tokens_for_owner"})}),(0,t.jsx)(n.td,{children:"\uc8fc\uc5b4\uc9c4 \uc18c\uc720\uc790\uac00 \uac00\uc9c4 NFT\ub97c \ud398\uc774\uc9c0\ub85c \ub9e4\uae30\ub294 \ub0b4\ubd80 \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"nft_supply_for_owner"})}),(0,t.jsx)(n.td,{children:"\ub204\uad70\uac00\uac00 \uc18c\uc720\ud55c \ucd1d NFT \uc218\ub97c \ucffc\ub9ac\ud558\uae30 \uc704\ud574 \ub0b4\ubd80 \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"nft_metadata"})}),(0,t.jsx)(n.td,{children:"\ucee8\ud2b8\ub799\ud2b8\uc758 \uba54\ud0c0\ub370\uc774\ud130\ub97c \ucffc\ub9ac\ud558\uae30 \uc704\ud574 \ub0b4\ubd80 \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4."})]})]})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/index.ts#L16-L157\n"})}),(0,t.jsxs)(n.p,{children:["\ud29c\ud1a0\ub9ac\uc5bc \uc2dc\ub9ac\uc988\uc758 ",(0,t.jsx)(n.a,{href:"/tutorials/nfts/js/minting",children:"\ubc1c\ud589 \uc139\uc158"}),"\uc5d0\uc11c \uc774\ub7ec\ud55c \uae30\ub2a5\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uac83\uc785\ub2c8\ub2e4."]}),(0,t.jsx)(n.hr,{}),(0,t.jsx)(n.h2,{id:"\ubf08\ub300-\uad6c\ucd95",children:"\ubf08\ub300 \uad6c\ucd95"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\uc544\uc9c1 \uae30\ubcf8 \ub808\ud37c\uc9c0\ud1a0\ub9ac\ub97c \ubcf5\uc81c\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0 \ud130\ubbf8\ub110\uc744 \uc5f4\uace0 \ub2e4\uc74c\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/near-examples/nft-tutorial-js/\n"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\uadf8\ub7f0 \ub2e4\uc74c ",(0,t.jsx)(n.code,{children:"1.skeleton"})," \ube0c\ub79c\uce58\ub85c \uc804\ud658\ud558\uc138\uc694."]}),"\n",(0,t.jsxs)(n.li,{children:["\uc758\uc874\uc131\uc744 \uc124\uce58\ud569\ub2c8\ub2e4(JS SDK \ud3ec\ud568): ",(0,t.jsx)(n.code,{children:"yarn"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"yarn build"}),"\ub97c \ud1b5\ud574 \ucee8\ud2b8\ub799\ud2b8\ub97c \uad6c\ucd95\ud569\ub2c8\ub2e4."]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/near-examples/nft-tutorial-js/\ncd nft-tutorial-js\ngit checkout 1.skeleton\nyarn && yarn build\n"})}),(0,t.jsxs)(n.p,{children:["\uc774 \uc791\uc5c5\uc774 \uc644\ub8cc\ub418\uba74, ",(0,t.jsx)(n.code,{children:"nft-tutorial-js/build"})," \ub514\ub809\ud1a0\ub9ac\uc5d0 ",(0,t.jsx)(n.code,{children:"nft.wasm"})," \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uac00 \ud3ec\ud568\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4!"]}),(0,t.jsx)(n.p,{children:"\ubf08\ub300 \uad6c\ucd95\uc740 \ubaa8\ub4e0 \uac83\uc774 \uc81c\ub300\ub85c \uc791\ub3d9\ud558\ub294\uc9c0 \ud655\uc778\ud558\uace0 \ub2e4\uc74c \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c \uc774 NFT \ucee8\ud2b8\ub799\ud2b8\uc758 \uac1c\uc120 \ubc84\uc804\uc744 \ucef4\ud30c\uc77c\ud560 \uc218 \uc788\ub294\uc9c0 \ud655\uc778\ud558\ub294 \ub370 \uc720\uc6a9\ud569\ub2c8\ub2e4."}),(0,t.jsx)(n.hr,{}),(0,t.jsx)(n.h2,{id:"\uacb0\ub860",children:"\uacb0\ub860"}),(0,t.jsxs)(n.p,{children:["\uc774 NFT \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \ub808\uc774\uc544\uc6c3\uacfc \ub2e4\uc591\ud55c \uc18c\uc2a4 \ud30c\uc77c\uc5d0 \ubaa8\ub4e0 \ud568\uc218\uac00 \uc5b4\ub5bb\uac8c \ubc30\uce58\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud588\uc2b5\ub2c8\ub2e4. ",(0,t.jsx)(n.code,{children:"yarn"}),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8\ub97c \ucef4\ud30c\uc77c\ud560 \uc218 \uc788\uc5c8\uace0, \ub2e4\uc74c ",(0,t.jsx)(n.a,{href:"/tutorials/nfts/js/minting",children:"\ubc1c\ud589 \ud29c\ud1a0\ub9ac\uc5bc"}),"\uc5d0\uc11c \uc774 \ubf08\ub300\ub97c \uad6c\uccb4\ud654\ud558\uae30 \uc2dc\uc791\ud560 \uac83\uc785\ub2c8\ub2e4."]}),(0,t.jsx)(n.admonition,{title:"\ubb38\uc11c \ubc84\uc804 \uad00\ub9ac \uc774 \uae00\uc744 \uc4f0\ub294 \uc2dc\uc810\uc5d0\uc11c, \uc774 \uc608\uc81c\ub294 \ub2e4\uc74c \ubc84\uc804\uc5d0\uc11c \uc791\ub3d9\ud569\ub2c8\ub2e4.",type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["near-sdk-js: ",(0,t.jsx)(n.code,{children:"0.4.0-5"})]}),"\n",(0,t.jsxs)(n.li,{children:["NFT \ud45c\uc900: ",(0,t.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", ",(0,t.jsx)(n.code,{children:"1.0.0"})," \ubc84\uc804"]}),"\n"]})})]})]})}function j(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>l});var t=s(67294);const r={},d=t.createContext(r);function l(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);