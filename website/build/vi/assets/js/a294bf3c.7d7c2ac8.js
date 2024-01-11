"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5475],{68524:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(85893),s=t(11151);const i={sidebar_position:3},c="Private Methods",a={id:"sdk/rust/contract-interface/private-methods",title:"Private Methods",description:"When using callbacks",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/sdk/rust/contract-interface/private-methods.md",sourceDirName:"sdk/rust/contract-interface",slug:"/sdk/rust/contract-interface/private-methods",permalink:"/vi/sdk/rust/contract-interface/private-methods",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/contract-interface/private-methods.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tools",previous:{title:"Contract Mutability",permalink:"/vi/sdk/rust/contract-interface/contract-mutability"},next:{title:"Payable Methods",permalink:"/vi/sdk/rust/contract-interface/payable-methods"}},o={},l=[{value:"When using callbacks",id:"when-using-callbacks",level:2},{value:"Writing internal methods",id:"writing-internal-methods",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"private-methods",children:"Private Methods"}),"\n",(0,r.jsx)(n.h2,{id:"when-using-callbacks",children:"When using callbacks"}),"\n",(0,r.jsxs)(n.p,{children:["Usually, when a contract has to have a callback for a remote cross-contract call, this callback method should only be called by the contract itself. \u0110\xf3 l\xe0 \u0111\u1ec3 tr\xe1nh ng\u01b0\u1eddi kh\xe1c g\u1ecdi n\xf3 v\xe0 l\xe0m l\u1ed9n x\u1ed9n state. Pretty common pattern is to have an assertion that validates that the direct caller (predecessor account ID) matches to the contract's account (current account ID). Macro ",(0,r.jsx)(n.code,{children:"#[private]"})," \u0111\u01a1n gi\u1ea3n h\xf3a n\xf3, b\u1eb1ng c\xe1ch thay th\u1ebf n\xf3 th\xe0nh m\u1ed9t d\xf2ng macro v\xe0 c\u1ea3i thi\u1ec7n kh\u1ea3 n\u0103ng \u0111\u1ecdc."]}),"\n",(0,r.jsxs)(n.p,{children:["Use this annotation within the ",(0,r.jsxs)(n.a,{href:"/vi/sdk/rust/contract-structure/near-bindgen",children:[(0,r.jsx)(n.code,{children:"near_bindgen"})," macro"]})," as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"#[private]\npub fn my_method(&mut self) {\n    \u2026\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Which is equivalent to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'pub fn my_method(&mut self ) {\n    if near_sdk::env::current_account_id() != near_sdk::env::predecessor_account_id() {\n        near_sdk::env::panic_str("Method method is private");\n    }\n...\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Now with this annotation, only the account of the contract itself can call this method, either directly or through a promise."}),"\n",(0,r.jsx)(n.h2,{id:"writing-internal-methods",children:"Writing internal methods"}),"\n",(0,r.jsx)(n.p,{children:"Not all functions need to be exposed publicly. It may be beneficial to write private methods for helper or utility functions, for instance. There are three approaches to write internal methods:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Using ",(0,r.jsx)(n.code,{children:"fn"})," instead of ",(0,r.jsx)(n.code,{children:"pub fn"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"fn helper_method(a: u8, b: u8) {\n  \u2026\n}\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Using ",(0,r.jsx)(n.code,{children:"pub(crate) fn"}),". This may be helpful when an internal method is in a different module."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"// Function that can be called in another Rust file\npub(crate) fn get_first_name(account: Account) {\n  \u2026\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["More information from the ",(0,r.jsx)(n.a,{href:"https://doc.rust-lang.org/reference/visibility-and-privacy.html",children:"official Rust docs"})," regarding public/private methods."]}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["Separate ",(0,r.jsx)(n.code,{children:"impl"})," block"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Another way of not exporting methods is by having a separate ",(0,r.jsx)(n.code,{children:"impl Contract"})," section, that is not marked with ",(0,r.jsx)(n.code,{children:"#[near_bindgen]"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"#[near_bindgen]\nimpl Contract {\n    pub fn increment(&mut self) {\n        self.internal_increment();\n    }\n}\nimpl Contract {\n    /// This methods is still not exported.\n    pub fn internal_increment(&mut self) {\n        self.counter += 1;\n    }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>c});var r=t(67294);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);