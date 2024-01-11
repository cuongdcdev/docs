"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1156],{35555:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(85893),s=n(11151);const i={id:"introduction",title:"Fungible Tokens Zero to Hero",sidebar_label:"Gi\u1edbi thi\u1ec7u"},o=void 0,c={id:"tutorials/fts/introduction",title:"Fungible Tokens Zero to Hero",description:"In this Zero to Hero series, you'll find a set of tutorials covering every aspect of a fungible token (FT) smart contract. You'll start by interacting with a pre-deployed contract and by the end you'll have built a fully-fledged FT smart contract that supports every extension of the standards.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/3.tutorials/fts/0-intro.md",sourceDirName:"3.tutorials/fts",slug:"/tutorials/fts/introduction",permalink:"/vi/tutorials/fts/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/fts/0-intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"introduction",title:"Fungible Tokens Zero to Hero",sidebar_label:"Gi\u1edbi thi\u1ec7u"},sidebar:"contracts",previous:{title:"Lazy Minting, Collections, and More!",permalink:"/vi/tutorials/nfts/series"},next:{title:"Contract \u0111\xe3 \u0111\u01b0\u1ee3c deploy s\u1eb5n",permalink:"/vi/tutorials/fts/predeployed-contract"}},a={},l=[{value:"\u0110i\u1ec1u ki\u1ec7n c\u1ea7n",id:"\u0111i\u1ec1u-ki\u1ec7n-c\u1ea7n",level:2},{value:"T\xf4\u0309ng quan",id:"t\xf4\u0309ng-quan",level:2},{value:"B\u01b0\u1edbc ti\u1ebfp theo",id:"b\u01b0\u1edbc-ti\u1ebfp-theo",level:2}];function d(t){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["In this ",(0,r.jsx)(e.em,{children:"Zero to Hero"})," series, you'll find a set of tutorials covering every aspect of a fungible token (FT) smart contract. You'll start by interacting with a pre-deployed contract and by the end you'll have built a fully-fledged FT smart contract that supports every extension of the standards."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"\u0111i\u1ec1u-ki\u1ec7n-c\u1ea7n",children:"\u0110i\u1ec1u ki\u1ec7n c\u1ea7n"}),"\n",(0,r.jsx)(e.p,{children:"\u0110\u1ec3 ho\xe0n th\xe0nh t\u1ed1t c\xe1c h\u01b0\u1edbng d\u1eabn n\xe0y, b\u1ea1n s\u1ebd c\u1ea7n:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"/develop/prerequisites",children:"Rust"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"/concepts/basics/accounts/creating-accounts",children:"A NEAR TestNet account"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"/tools/near-cli#setup",children:"NEAR-CLI"})}),"\n"]}),"\n",(0,r.jsx)(e.admonition,{title:"New to Rust?",type:"info",children:(0,r.jsxs)(e.p,{children:["If you are new to Rust and want to dive into smart contract development, our ",(0,r.jsx)(e.a,{href:"/develop/quickstart-guide",children:"Quick-start guide"})," is a great place to start."]})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"t\xf4\u0309ng-quan",children:"T\xf4\u0309ng quan"}),"\n",(0,r.jsxs)(e.p,{children:["Ch\u1ec9 v\xe0i b\u01b0\u1edbc b\u1ea1n s\u1ebd t\u1eeb ",(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.em,{children:"Zero"})})," tr\u1edf th\xe0nh ",(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.em,{children:"Hero"})})," trong m\u1ed9t th\u1eddi gian ng\u1eafn! \ud83d\udcaa"]}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"B\u01b0\u1edbc"}),(0,r.jsx)(e.th,{children:"T\xean"}),(0,r.jsx)(e.th,{children:"M\xf4 t\u1ea3"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/tutorials/fts/predeployed-contract",children:"Contract \u0111\xe3 \u0111\u01b0\u1ee3c deploy s\u1eb5n"})}),(0,r.jsx)(e.td,{children:"Receive FTs without the need to code, create, or deploy a smart contract."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"2"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/tutorials/fts/skeleton",children:"Ki\u1ebfn tr\xfac c\u1ee7a contract"})}),(0,r.jsx)(e.td,{children:"Learn the basic architecture of the FT smart contract and compile the code."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"3"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/tutorials/fts/defining-a-token",children:"Defining a Token"})}),(0,r.jsx)(e.td,{children:"Flesh out what it means to have a FT and how you can customize your own"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"4"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/tutorials/fts/circulating-supply",children:"Circulating Supply"})}),(0,r.jsx)(e.td,{children:"Learn how to create an initial supply and have the token show up in your wallet."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"5"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/tutorials/fts/registering-accounts",children:"Registering Accounts"})}),(0,r.jsx)(e.td,{children:"Explore how you can implement and understand the storage management standard to avoid malicious users from draining your funds."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"6"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/tutorials/fts/transfers",children:"Transferring FTs"})}),(0,r.jsx)(e.td,{children:"Learn how to transfer FTs and discover some of the true powers that the core standard brings"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"7"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/tutorials/fts/marketplace",children:"Marketplace"})}),(0,r.jsx)(e.td,{children:"Learn about how common marketplaces operate on NEAR and dive into some of the code that allows buying and selling NFTs by using Fungible Tokens"})]})]})]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"b\u01b0\u1edbc-ti\u1ebfp-theo",children:"B\u01b0\u1edbc ti\u1ebfp theo"}),"\n",(0,r.jsxs)(e.p,{children:["S\u1eb5n s\xe0ng \u0111\u1ec3 b\u1eaft \u0111\u1ea7u? H\xe3y \u0111\u1ebfn ngay h\u01b0\u1edbng d\u1eabn ",(0,r.jsx)(e.a,{href:"/tutorials/fts/predeployed-contract",children:"Contract \u0111\xe3 \u0111\u01b0\u1ee3c deploy s\u1eb5n"})," v\xe0 b\u1eaft \u0111\u1ea7u chuy\u1ebfn h\xe0nh tr\xecnh c\u1ee7a b\u1ea1n!"]}),"\n",(0,r.jsx)(e.p,{children:"If you already know about fungible tokens and smart contracts, feel free to skip and jump directly to the tutorial of your interest. C\xe1c b\xe0i h\u01b0\u1edbng d\u1eabn \u0111\xe3 \u0111\u01b0\u1ee3c thi\u1ebft k\u1ebf \u0111\u1ec3 b\u1ea1n c\xf3 th\u1ec3 b\u1eaft \u0111\u1ea7u t\u1eeb b\u1ea5t c\u1ee9 n\u1ec1n t\u1ea3ng ki\u1ebfn th\u1ee9c n\xe0o!"}),"\n",(0,r.jsxs)(e.admonition,{title:"Questions?",type:"info",children:[(0,r.jsxs)(e.p,{children:["\ud83d\udc49 Join us on ",(0,r.jsx)(e.a,{href:"https://near.chat/",children:"Discord"})," and let us know in the ",(0,r.jsx)(e.code,{children:"#development"})," channels. \ud83d\udc48"]}),(0,r.jsxs)(e.p,{children:["We also host daily ",(0,r.jsx)(e.a,{href:"https://pages.near.org/developers/get-help/office-hours/",children:"Office Hours"})," live where the DevRel team will answer any questions you may have. \ud83e\udd14"]}),(0,r.jsx)(e.p,{children:"Th\u1ee9 Hai \u2013 Th\u1ee9 S\xe1u 11AM \u2013 12PM Pacific (6PM \u2013 7PM UTC)"})]})]})}function h(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>c,a:()=>o});var r=n(67294);const s={},i=r.createContext(s);function o(t){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:o(t.components),r.createElement(i.Provider,{value:e},t.children)}}}]);