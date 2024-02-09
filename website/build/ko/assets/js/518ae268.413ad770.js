"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9480],{14048:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=t(85893),r=t(11151),l=t(74866),i=t(85162);const s={id:"deploy",title:"NEAR CLI - \uae30\ucd08",sidebar_label:"\ubc30\ud3ec \ubc0f \uc0ac\uc6a9"},o=void 0,c={id:"develop/deploy",title:"NEAR CLI - \uae30\ucd08",description:"\ucee8\ud2b8\ub799\ud2b8\uac00 \uc900\ube44\ub418\uba74, \ubaa8\ub4e0 \uc0ac\ub78c\uc774 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d NEAR \ub124\ud2b8\uc6cc\ud06c\uc5d0 \ubc30\ud3ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.develop/deploy.md",sourceDirName:"2.develop",slug:"/develop/deploy",permalink:"/ko/develop/deploy",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/deploy.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\ub144 1\uc6d4 11\uc77c",frontMatter:{id:"deploy",title:"NEAR CLI - \uae30\ucd08",sidebar_label:"\ubc30\ud3ec \ubc0f \uc0ac\uc6a9"},sidebar:"build",previous:{title:"\ub85c\uceec \uac1c\ubc1c \ud658\uacbd",permalink:"/ko/develop/testing/kurtosis-localnet"},next:{title:"\ucee8\ud2b8\ub799\ud2b8 \uc5c5\ub370\uc774\ud2b8",permalink:"/ko/develop/upgrade"}},u={},d=[{value:"\ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec",id:"\ucee8\ud2b8\ub799\ud2b8-\ubc30\ud3ec",level:2},{value:"\uacc4\uc815 \uc0dd\uc131 \ubc0f \ubc30\ud3ec",id:"\uacc4\uc815-\uc0dd\uc131-\ubc0f-\ubc30\ud3ec",level:4},{value:"\uae30\uc874 \uacc4\uc815\uc5d0 \ubc30\ud3ec",id:"\uae30\uc874-\uacc4\uc815\uc5d0-\ubc30\ud3ec",level:4},{value:"\ucee8\ud2b8\ub799\ud2b8 \ucd08\uae30\ud654",id:"\ucee8\ud2b8\ub799\ud2b8-\ucd08\uae30\ud654",level:2},{value:"\ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c",id:"\ucee8\ud2b8\ub799\ud2b8-\ud638\ucd9c",level:2},{value:"View \uba54\uc11c\ub4dc",id:"view-\uba54\uc11c\ub4dc",level:3},{value:"\uba54\uc11c\ub4dc \ubcc0\uacbd",id:"\uba54\uc11c\ub4dc-\ubcc0\uacbd",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"\ucee8\ud2b8\ub799\ud2b8\uac00 \uc900\ube44\ub418\uba74, \ubaa8\ub4e0 \uc0ac\ub78c\uc774 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d NEAR \ub124\ud2b8\uc6cc\ud06c\uc5d0 \ubc30\ud3ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/ko/tools/near-cli",children:"NEAR CLI"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\uace0, \ucee8\ud2b8\ub799\ud2b8 \ub0b4 \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\ub294 \ubc29\ubc95\uc744 \uc548\ub0b4\ud574 \ub4dc\ub9bd\ub2c8\ub2e4."]}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.mdxAdmonitionTitle,{children:["\uc774 \ud398\uc774\uc9c0\uc5d0\uc11c\ub294 NEAR CLI\uc758 \uae30\ubcf8 \uc0ac\ud56d\ub9cc \ub2e4\ub8f9\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,a.jsx)(n.a,{href:"/ko/tools/near-cli",children:"NEAR CLI \uc124\uba85\uc11c \ud398\uc774\uc9c0"}),"\ub97c \ucc38\uc870\ud558\uc138\uc694. :::"]}),(0,a.jsx)(n.hr,{}),(0,a.jsx)(n.h2,{id:"\ucee8\ud2b8\ub799\ud2b8-\ubc30\ud3ec",children:"\ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec"}),(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"NEAR CLI"})," \ub355\ubd84\uc5d0 \ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \uac04\ub2e8\ud558\uac8c \uc218\ud589\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\ucee8\ud2b8\ub799\ud2b8\ub97c wasm\uc73c\ub85c \ucef4\ud30c\uc77c\ud569\ub2c8\ub2e4(\ud15c\ud50c\ub9bf \ub0b4 ",(0,a.jsx)(n.code,{children:"yarn build"}),"\ub97c \ud1b5\ud574 \uc790\ub3d9\uc73c\ub85c \uc218\ud589\ub428)."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/ko/tools/near-cli#near-deploy",children:"NEAR CLI"}),"\ub97c \uc0ac\uc6a9\ud574 \uc6d0\ud558\ub294 \uacc4\uc815\uc5d0 \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud569\ub2c8\ub2e4."]}),"\n"]}),(0,a.jsx)(n.h4,{id:"\uacc4\uc815-\uc0dd\uc131-\ubc0f-\ubc30\ud3ec",children:"\uacc4\uc815 \uc0dd\uc131 \ubc0f \ubc30\ud3ec"}),(0,a.jsxs)(l.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"near-cli",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Automatically deploy the wasm in a new account\nnear dev-deploy <route_to_wasm>\n\n# Get the account name\ncat ./neardev/dev-account\n"})})}),(0,a.jsx)(i.Z,{value:"near-cli-rs",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Automatically deploy the wasm in a new account\nnear account create-account sponsor-by-faucet-service <my-new-dev-account>.testnet autogenerate-new-keypair save-to-keychain network-config testnet create\n\nnear contract deploy <my-new-dev-account>.testnet use-file <route_to_wasm> without-init-call network-config testnet sign-with-keychain\n"})})})]}),(0,a.jsx)(n.h4,{id:"\uae30\uc874-\uacc4\uc815\uc5d0-\ubc30\ud3ec",children:"\uae30\uc874 \uacc4\uc815\uc5d0 \ubc30\ud3ec"}),(0,a.jsxs)(l.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"near-cli",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# login into your account\nnear login\n\n# deploy the contract\nnear deploy <accountId> <route_to_wasm>\n"})})}),(0,a.jsx)(i.Z,{value:"near-cli-rs",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# login into your account\nnear account import-account using-web-wallet network-config testnet\n\n# deploy the contract\nnear contract deploy <accountId> use-file <route_to_wasm> without-init-call network-config testnet sign-with-keychain send\n"})})})]}),(0,a.jsx)(n.admonition,{title:"\ucee8\ud2b8\ub799\ud2b8\ub97c \ub36e\uc5b4\uc4f8 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uacbd\uc6b0 \uacc4\uc815\uc758 \ub85c\uc9c1\uc774 \ubcc0\uacbd\ub418\uc9c0\ub9cc, \uc0c1\ud0dc\ub294 \uc720\uc9c0\ub429\ub2c8\ub2e4. :::",type:"tip",children:(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.mdxAdmonitionTitle,{children:["\uae30\ubcf8\uc801\uc73c\ub85c ",(0,a.jsx)(n.code,{children:"near-cli"}),"\ub294 ",(0,a.jsx)(n.code,{children:"testnet"})," \ub124\ud2b8\uc6cc\ud06c\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. ",(0,a.jsx)(n.code,{children:"mainnet"}),"\uc5d0 \ubc30\ud3ec\ud558\ub824\uba74, ",(0,a.jsx)(n.code,{children:"NEAR_ENV=mainnet"}),"\ub97c \uc815\uc758\ud558\uc138\uc694. :::"]}),(0,a.jsxs)(n.admonition,{title:"\uacf5\uac1c \uba54\uc11c\ub4dc\uc5d0 \ub300\ud55c \uba85\uba85 \uaddc\uce59 \ucee8\ud2b8\ub799\ud2b8\uac00 \ub124\ud2b8\uc6cc\ud06c\uc5d0 \ubc30\ud3ec\ub418\uba74, \ub204\uad6c\ub098 \ub2e4\ub978 \ucee8\ud2b8\ub799\ud2b8(\uc608: NEAR\uc758 \ub2e4\ub978 \uacc4\uc815)\uac00 \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638 \uc791\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c \ucee8\ud2b8\ub799\ud2b8\uc640 \uad00\ub828\ub41c \ubaa8\ub4e0 \ud2b8\ub79c\uc7ad\uc158\ub3c4 \ub124\ud2b8\uc6cc\ud06c\uc758 \ub370\uc774\ud130 \uc2a4\ud2b8\ub9bc\uc5d0 \ud3ec\ud568\ub418\ubbc0\ub85c, \ud2b9\uc815 \uc774\ubca4\ud2b8\ub97c \uc218\uc2e0\ud558\ub294 \ubaa8\ub4e0 \uc0ac\ub78c\uc774 \ud574\ub2f9 \ud65c\ub3d9\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",type:"info",children:[(0,a.jsxs)(n.p,{children:["\uc774\ub97c \uace0\ub824\ud558\uc5ec, \ub300\ubd80\ubd84 Rust \ucee8\ud2b8\ub799\ud2b8\ub85c \uad6c\uc131\ub41c \ub098\uba38\uc9c0 NEAR \uc0dd\ud0dc\uacc4\uc640 \ud638\ud658\ub418\ub3c4\ub85d \ubaa8\ub4e0 SDK\uc5d0\uc11c ",(0,a.jsx)(n.code,{children:"snake_case"}),"\ub97c \uc0ac\uc6a9\ud574 \uba54\uc11c\ub4dc\uc758 \uc774\ub984\uc744 \uc815\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. :::"]}),(0,a.jsx)(n.hr,{}),(0,a.jsx)(n.h2,{id:"\ucee8\ud2b8\ub799\ud2b8-\ucd08\uae30\ud654",children:"\ucee8\ud2b8\ub799\ud2b8 \ucd08\uae30\ud654"}),(0,a.jsxs)(n.p,{children:["\ucee8\ud2b8\ub799\ud2b8\uc5d0 ",(0,a.jsx)(n.a,{href:"/ko/develop/contracts/anatomy#initialization-functions",children:"\ucd08\uae30\ud654 \uba54\uc11c\ub4dc"}),"\uac00 \uc788\ub294 \uacbd\uc6b0, \uc774\ub97c \ud638\ucd9c\ud558\uc5ec \uc0c1\ud0dc\ub97c \ucd08\uae30\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucee8\ud2b8\ub799\ud2b8\uac00 \uc0c1\ud0dc\uc5d0 \ub300\ud55c ",(0,a.jsx)(n.code,{children:"default"})," \uac12\uc744 \uad6c\ud604\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 \ud544\uc694\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."]}),(0,a.jsxs)(l.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"near-cli",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Call the initialization method (`init` in our examples)\nnear call <contractId> <initMethod> [<args>] --accountId <accountId>\n"})})}),(0,a.jsx)(i.Z,{value:"near-cli-rs",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Call the initialization method (`init` in our examples)\nnear contract call-function as-transaction <contractId> <initMethod> json-args [<args>] prepaid-gas '30 TeraGas' attached-deposit '0 NEAR' sign-as <accountId> network-config testnet sign-with-keychain send\n"})})})]}),(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.mdxAdmonitionTitle,{children:[(0,a.jsx)(n.code,{children:"--initFunction"})," \ubc0f ",(0,a.jsx)(n.code,{children:"--initArgs"})," \uc778\uc790\ub97c \uc0ac\uc6a9\ud574\uc11c ",(0,a.jsx)(n.a,{href:"#%EC%BB%A8%ED%8A%B8%EB%9E%99%ED%8A%B8-%EB%B0%B0%ED%8F%AC",children:"\ubc30\ud3ec \uc911\uc5d0"})," \ucee8\ud2b8\ub799\ud2b8\ub97c \ucd08\uae30\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. :::"]}),(0,a.jsx)(n.hr,{}),(0,a.jsx)(n.h2,{id:"\ucee8\ud2b8\ub799\ud2b8-\ud638\ucd9c",children:"\ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c"}),(0,a.jsxs)(n.p,{children:["\ucee8\ud2b8\ub799\ud2b8\uac00 \ubc30\ud3ec\ub418\uace0 \ub098\uba74, ",(0,a.jsx)(n.a,{href:"/ko/tools/near-cli",children:"NEAR CLI"}),"\ub97c \ud1b5\ud574 \ubc14\ub85c \ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638 \uc791\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,a.jsx)("hr",{class:"subsection"}),(0,a.jsx)(n.h3,{id:"view-\uba54\uc11c\ub4dc",children:"View \uba54\uc11c\ub4dc"}),(0,a.jsxs)(n.p,{children:["View \uba54\uc11c\ub4dc\ub294 ",(0,a.jsx)(n.strong,{children:"\uc77d\uae30 \uc804\uc6a9"})," \uc791\uc5c5\uc744 \uc218\ud589\ud558\ub294 \uba54\uc11c\ub4dc\uc785\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\ub294 \uac83\uc740 \ubb34\ub8cc\uc774\uba70, \ud638\ucd9c\uc5d0 \uc0ac\uc6a9\ub418\ub294 \uacc4\uc815\uc744 \uc9c0\uc815\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."]}),(0,a.jsxs)(l.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"near-cli",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"near view <contractId> <methodName>\n"})})}),(0,a.jsx)(i.Z,{value:"near-cli-rs",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"near contract call-function as-read-only <contractId> <methodName> text-args '' network-config testnet now\n"})})})]}),(0,a.jsxs)(n.admonition,{title:"View \uba54\uc11c\ub4dc\ub294 \uc2e4\ud589\uc5d0 \uae30\ubcf8\uc801\uc73c\ub85c 200 TGAS\ub97c \uc18c\ubaa8\ud569\ub2c8\ub2e4. :::",type:"tip",children:[(0,a.jsx)("hr",{class:"subsection"}),(0,a.jsx)(n.h3,{id:"\uba54\uc11c\ub4dc-\ubcc0\uacbd",children:"\uba54\uc11c\ub4dc \ubcc0\uacbd"}),(0,a.jsx)(n.p,{children:"\ubcc0\uacbd \ubc29\ubc95\uc740 \uc77d\uae30 \ubc0f \uc4f0\uae30 \uc791\uc5c5\uc744 \ubaa8\ub450 \uc218\ud589\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ubc29\ubc95\uc758 \uacbd\uc6b0, \ud638\ucd9c\uc5d0 \uc0ac\uc6a9\ub418\ub294 \uacc4\uc815\uc744 \uc9c0\uc815\ud574\uc57c \ud569\ub2c8\ub2e4. \ud574\ub2f9 \uacc4\uc815\uc740 \ud638\ucd9c\uc744 \uc704\ud574 \uac00\uc2a4\ub97c \uc18c\ube44\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."}),(0,a.jsxs)(l.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"near-cli",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"near call <contractId> <methodName> <jsonArgs> --accountId <yourAccount> [--deposit <amount>] [--gas <GAS>]\n"})})}),(0,a.jsx)(i.Z,{value:"near-cli-rs",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"near contract call-function as-transaction <AccountId> <MethodName> json-args <JsonArgs> prepaid-gas <PrepaidGas> attached-deposit <AttachedDeposit> sign-as <AccountId>  network-config testnet sign-with-keychain send\n"})})})]})]})]})]})]})})]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var a=t(36905);const r={tabItem:"tabItem_Ymn6"};var l=t(85893);function i(e){var n=e.children,t=e.hidden,i=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(67294),r=t(36905),l=t(12466),i=t(16550),s=t(20469),o=t(91980),c=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,l=(0,i.k6)(),s=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:r});return[(0,o._X)(s),(0,a.useCallback)((function(e){if(s){var n=new URLSearchParams(l.location.search);n.set(s,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}}),[s,l])]}function v(e){var n,t,r,l,i=e.defaultValue,o=e.queryString,c=void 0!==o&&o,d=e.groupId,v=h(e),f=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:v})})),x=f[0],g=f[1],j=m({queryString:c,groupId:d}),b=j[0],y=j[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Nk)(n),r=t[0],l=t[1],[r,(0,a.useCallback)((function(e){n&&l.set(e)}),[n,l])]),N=w[0],I=w[1],k=function(){var e=null!=b?b:N;return p({value:e,tabValues:v})?e:null}();return(0,s.Z)((function(){k&&g(k)}),[k]),{selectedValue:x,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:v}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),I(e)}),[y,I,v]),tabValues:v}}var f=t(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function j(e){var n=e.className,t=e.block,a=e.selectedValue,i=e.selectValue,s=e.tabValues,o=[],c=(0,l.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=o.indexOf(n),r=s[t].value;r!==a&&(c(n),i(r))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,r=o.indexOf(e.currentTarget)+1;t=null!=(a=o[r])?a:o[0];break;case"ArrowLeft":var l,i=o.indexOf(e.currentTarget)-1;t=null!=(l=o[i])?l:o[o.length-1]}null==(n=t)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:s.map((function(e){var n=e.value,t=e.label,l=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return o.push(e)},onKeyDown:d,onClick:u},l,{className:(0,r.Z)("tabs__item",x.tabItem,null==l?void 0:l.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function b(e){var n=e.lazy,t=e.children,r=e.selectedValue,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var i=l.find((function(e){return e.props.value===r}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function y(e){var n=v(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,g.jsx)(j,Object.assign({},e,n)),(0,g.jsx)(b,Object.assign({},e,n))]})}function w(e){var n=(0,f.Z)();return(0,g.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var a=t(67294);const r={},l=a.createContext(r);function i(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);