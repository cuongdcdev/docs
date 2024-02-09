"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1389],{37719:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=t(85893),i=t(11151),r=t(74866),o=t(85162);const s={id:"deploy",title:"NEAR CLI - Basics",sidebar_label:"Deploying and Using"},l=void 0,c={id:"develop/deploy",title:"NEAR CLI - Basics",description:"After your contract is ready you can deploy it in the NEAR network for everyone to use it.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.develop/deploy.md",sourceDirName:"2.develop",slug:"/develop/deploy",permalink:"/zh-CN/develop/deploy",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/deploy.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\u5e741\u670811\u65e5",frontMatter:{id:"deploy",title:"NEAR CLI - Basics",sidebar_label:"Deploying and Using"},sidebar:"build",previous:{title:"Local Development",permalink:"/zh-CN/develop/testing/kurtosis-localnet"},next:{title:"Updating Contracts",permalink:"/zh-CN/develop/upgrade"}},d={},u=[{value:"Deploying the Contract",id:"deploying-the-contract",level:2},{value:"Create an Account and Deploy",id:"create-an-account-and-deploy",level:4},{value:"Deploy in an Existing Account",id:"deploy-in-an-existing-account",level:4},{value:"Initializing the Contract",id:"initializing-the-contract",level:2},{value:"Calling the Contract",id:"calling-the-contract",level:2},{value:"View methods",id:"view-methods",level:3},{value:"Change methods",id:"change-methods",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"After your contract is ready you can deploy it in the NEAR network for everyone to use it."}),"\n",(0,a.jsxs)(n.p,{children:["Let us guide you on how to use the ",(0,a.jsx)(n.a,{href:"/zh-CN/tools/near-cli",children:"NEAR CLI"})," to deploy your contract and call its methods."]}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.mdxAdmonitionTitle,{children:["On this page, we will only cover the basics of NEAR CLI. For more information visit the ",(0,a.jsx)(n.a,{href:"/zh-CN/tools/near-cli",children:"NEAR CLI documentation page"}),". :::"]}),(0,a.jsx)(n.hr,{}),(0,a.jsx)(n.h2,{id:"deploying-the-contract",children:"Deploying the Contract"}),(0,a.jsxs)(n.p,{children:["Thanks to the ",(0,a.jsx)(n.code,{children:"NEAR CLI"})," deploying a contract is as simple as:"]}),(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Compiling the contract to wasm (done automatically through ",(0,a.jsx)(n.code,{children:"yarn build"})," in our templates)."]}),"\n",(0,a.jsxs)(n.li,{children:["Deploy it into the desired account using the ",(0,a.jsx)(n.a,{href:"/zh-CN/tools/near-cli#near-deploy",children:"NEAR CLI"}),":"]}),"\n"]}),(0,a.jsx)(n.h4,{id:"create-an-account-and-deploy",children:"Create an Account and Deploy"}),(0,a.jsxs)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(o.Z,{value:"near-cli",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Automatically deploy the wasm in a new account\nnear dev-deploy <route_to_wasm>\n\n# Get the account name\ncat ./neardev/dev-account\n"})})}),(0,a.jsx)(o.Z,{value:"near-cli-rs",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Automatically deploy the wasm in a new account\nnear account create-account sponsor-by-faucet-service <my-new-dev-account>.testnet autogenerate-new-keypair save-to-keychain network-config testnet create\n\nnear contract deploy <my-new-dev-account>.testnet use-file <route_to_wasm> without-init-call network-config testnet sign-with-keychain\n"})})})]}),(0,a.jsx)(n.h4,{id:"deploy-in-an-existing-account",children:"Deploy in an Existing Account"}),(0,a.jsxs)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(o.Z,{value:"near-cli",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# login into your account\nnear login\n\n# deploy the contract\nnear deploy <accountId> <route_to_wasm>\n"})})}),(0,a.jsx)(o.Z,{value:"near-cli-rs",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# login into your account\nnear account import-account using-web-wallet network-config testnet\n\n# deploy the contract\nnear contract deploy <accountId> use-file <route_to_wasm> without-init-call network-config testnet sign-with-keychain send\n"})})})]}),(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"You can overwrite a contract by deploying another on top of it. In this case, the account's logic\nwill change, but the state will persist"})})]}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.mdxAdmonitionTitle,{children:["By default ",(0,a.jsx)(n.code,{children:"near-cli"})," uses the ",(0,a.jsx)(n.code,{children:"testnet"})," network. Define ",(0,a.jsx)(n.code,{children:"NEAR_ENV=mainnet"})," to deploy into ",(0,a.jsx)(n.code,{children:"mainnet"}),". :::"]}),(0,a.jsxs)(n.admonition,{title:"Naming Convention for Public-Facing Methods Once the contract is deployed to the network, anyone and any other contract (i.e., any other account on NEAR) can interact with it by calling its methods. Furthermore, any transactions involving the contract will also be included in the network's data stream, which means its activity can also be visible to any who listens to particular events.",type:"info",children:[(0,a.jsxs)(n.p,{children:["Considering this, we advise to name methods using ",(0,a.jsx)(n.code,{children:"snake_case"})," in all SDKs as this is compatible with the remainder of the NEAR ecosystem which is predominantly comprised of Rust contracts. :::"]}),(0,a.jsx)(n.hr,{}),(0,a.jsx)(n.h2,{id:"initializing-the-contract",children:"Initializing the Contract"}),(0,a.jsxs)(n.p,{children:["If your contract has an ",(0,a.jsx)(n.a,{href:"/zh-CN/develop/contracts/anatomy#initialization-functions",children:"initialization method"})," you can call it to initialize the state. This is not necessary if your contract implements ",(0,a.jsx)(n.code,{children:"default"})," values for the state."]}),(0,a.jsxs)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(o.Z,{value:"near-cli",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Call the initialization method (`init` in our examples)\nnear call <contractId> <initMethod> [<args>] --accountId <accountId>\n"})})}),(0,a.jsx)(o.Z,{value:"near-cli-rs",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Call the initialization method (`init` in our examples)\nnear contract call-function as-transaction <contractId> <initMethod> json-args [<args>] prepaid-gas '30 TeraGas' attached-deposit '0 NEAR' sign-as <accountId> network-config testnet sign-with-keychain send\n"})})})]}),(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.mdxAdmonitionTitle,{children:["You can initialize your contract ",(0,a.jsx)(n.a,{href:"#deploying-the-contract",children:"during deployment"})," using the ",(0,a.jsx)(n.code,{children:"--initFunction"})," & ",(0,a.jsx)(n.code,{children:"--initArgs"})," arguments. :::"]}),(0,a.jsx)(n.hr,{}),(0,a.jsx)(n.h2,{id:"calling-the-contract",children:"Calling the Contract"}),(0,a.jsxs)(n.p,{children:["Once your contract is deployed you can interact with it right away using ",(0,a.jsx)(n.a,{href:"/zh-CN/tools/near-cli",children:"NEAR CLI"}),"."]}),(0,a.jsx)("hr",{class:"subsection"}),(0,a.jsx)(n.h3,{id:"view-methods",children:"View methods"}),(0,a.jsxs)(n.p,{children:["View methods are those that perform ",(0,a.jsx)(n.strong,{children:"read-only"})," operations. Calling these methods is free, and do not require to specify which account is being used to make the call:"]}),(0,a.jsxs)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(o.Z,{value:"near-cli",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"near view <contractId> <methodName>\n"})})}),(0,a.jsx)(o.Z,{value:"near-cli-rs",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"near contract call-function as-read-only <contractId> <methodName> text-args '' network-config testnet now\n"})})})]}),(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"View methods have by default 200 TGAS for execution"})})]})]})]}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"change-methods",children:"Change methods"}),"\n",(0,a.jsx)(n.p,{children:"Change methods are those that perform both read and write operations. For these methods we do need to specify the account being used to make the call, since that account will expend GAS in the call."}),"\n",(0,a.jsxs)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(o.Z,{value:"near-cli",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"near call <contractId> <methodName> <jsonArgs> --accountId <yourAccount> [--deposit <amount>] [--gas <GAS>]\n"})})}),(0,a.jsx)(o.Z,{value:"near-cli-rs",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"near contract call-function as-transaction <AccountId> <MethodName> json-args <JsonArgs> prepaid-gas <PrepaidGas> attached-deposit <AttachedDeposit> sign-as <AccountId>  network-config testnet sign-with-keychain send\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var a=t(36905);const i={tabItem:"tabItem_Ymn6"};var r=t(85893);function o(e){var n=e.children,t=e.hidden,o=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(67294),i=t(36905),r=t(12466),o=t(16550),s=t(20469),l=t(91980),c=t(67392),d=t(50012);function u(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,i=e.groupId,r=(0,o.k6)(),s=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:i});return[(0,l._X)(s),(0,a.useCallback)((function(e){if(s){var n=new URLSearchParams(r.location.search);n.set(s,e),r.replace(Object.assign({},r.location,{search:n.toString()}))}}),[s,r])]}function g(e){var n,t,i,r,o=e.defaultValue,l=e.queryString,c=void 0!==l&&l,u=e.groupId,g=h(e),f=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var i=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:o,tabValues:g})})),v=f[0],y=f[1],x=m({queryString:c,groupId:u}),b=x[0],j=x[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,d.Nk)(n),i=t[0],r=t[1],[i,(0,a.useCallback)((function(e){n&&r.set(e)}),[n,r])]),N=w[0],C=w[1],I=function(){var e=null!=b?b:N;return p({value:e,tabValues:g})?e:null}();return(0,s.Z)((function(){I&&y(I)}),[I]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);y(e),j(e),C(e)}),[j,C,g]),tabValues:g}}var f=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(85893);function x(e){var n=e.className,t=e.block,a=e.selectedValue,o=e.selectValue,s=e.tabValues,l=[],c=(0,r.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=l.indexOf(n),i=s[t].value;i!==a&&(c(n),o(i))},u=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,i=l.indexOf(e.currentTarget)+1;t=null!=(a=l[i])?a:l[0];break;case"ArrowLeft":var r,o=l.indexOf(e.currentTarget)-1;t=null!=(r=l[o])?r:l[l.length-1]}null==(n=t)||n.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:s.map((function(e){var n=e.value,t=e.label,r=e.attributes;return(0,y.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return l.push(e)},onKeyDown:u,onClick:d},r,{className:(0,i.Z)("tabs__item",v.tabItem,null==r?void 0:r.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function b(e){var n=e.lazy,t=e.children,i=e.selectedValue,r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var o=r.find((function(e){return e.props.value===i}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:r.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})}))})}function j(e){var n=g(e);return(0,y.jsxs)("div",{className:(0,i.Z)("tabs-container",v.tabList),children:[(0,y.jsx)(x,Object.assign({},e,n)),(0,y.jsx)(b,Object.assign({},e,n))]})}function w(e){var n=(0,f.Z)();return(0,y.jsx)(j,Object.assign({},e,{children:u(e.children)}),String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var a=t(67294);const i={},r=a.createContext(i);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);