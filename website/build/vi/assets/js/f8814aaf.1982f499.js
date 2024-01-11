"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3991],{72531:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=a(85893),r=a(11151);a(74866),a(85162);const s={id:"near-cli",title:"NEAR CLI",hide_table_of_contents:!1},i=void 0,l={id:"primitives/ft/interacting/near-cli",title:"NEAR CLI",description:"This section shows how to interact with FTs from your shell using near-cli.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/7.primitives/ft/interacting/near-cli.md",sourceDirName:"7.primitives/ft/interacting",slug:"/primitives/ft/interacting/near-cli",permalink:"/vi/primitives/ft/interacting/near-cli",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/ft/interacting/near-cli.md",tags:[],version:"current",frontMatter:{id:"near-cli",title:"NEAR CLI",hide_table_of_contents:!1},sidebar:"primitives",previous:{title:"Smart Contract",permalink:"/vi/primitives/ft/interacting/smart-contract"},next:{title:"Additional Resources",permalink:"/vi/primitives/ft/additional-resources"}},o={},c=[{value:"Get token metadata",id:"get-token-metadata",level:2},{value:"Check token balance",id:"check-token-balance",level:2},{value:"Send tokens",id:"send-tokens",level:2},{value:"Register user",id:"register-user",level:3},{value:"Attaching FTs to a Call",id:"attaching-fts-to-a-call",level:2},{value:"Creating FT",id:"creating-ft",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Details:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["This section shows how to interact with FTs from your shell using ",(0,t.jsx)(n.a,{href:"/vi/tools/near-cli",children:(0,t.jsx)(n.code,{children:"near-cli"})}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"get-token-metadata",children:"Get token metadata"}),"\n",(0,t.jsx)(n.p,{children:"This snippet will allow you to query FT metadata."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"near view token.v2.ref-finance.near ft_metadata\n"})}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:"Example response"}),(0,t.jsx)("p",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"{\n  spec: \"ft-1.0.0\",\n  name: \"Ref Finance Token\",\n  symbol: \"REF\",\n  icon: \"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='16 24 248 248' style='background: %23000'%3E%3Cpath d='M164,164v52h52Zm-45-45,20.4,20.4,20.6-20.6V81H119Zm0,18.39V216h41V137.19l-20.6,20.6ZM166.5,81H164v33.81l26.16-26.17A40.29,40.29,0,0,0,166.5,81ZM72,153.19V216h43V133.4l-11.6-11.61Zm0-18.38,31.4-31.4L115,115V81H72ZM207,121.5h0a40.29,40.29,0,0,0-7.64-23.66L164,133.19V162h2.5A40.5,40.5,0,0,0,207,121.5Z' fill='%23fff'/%3E%3Cpath d='M189 72l27 27V72h-27z' fill='%2300c08b'/%3E%3C/svg%3E%0A\",\n  reference: null,\n  reference_hash: null,\n  decimals: 18\n}\n"})})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"check-token-balance",children:"Check token balance"}),"\n",(0,t.jsx)(n.p,{children:"This snippet will allow you to get the FT balance of an user."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'near view token.v2.ref-finance.near ft_balance_of \'{"account_id": "bob.near"}\'\n'})}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:"Example response"}),(0,t.jsx)("p",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"'376224322825327177426'\n"})})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"send-tokens",children:"Send tokens"}),"\n",(0,t.jsx)(n.p,{children:"This snippet will enable you to transfer FT tokens."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'near call token.v2.ref-finance.near ft_transfer \'{"receiver_id": "alice.near", "amount": "100000000000000000"}\' --depositYocto 1 --accountId bob.near\n'})}),"\n",(0,t.jsx)("hr",{class:"subsection"}),"\n",(0,t.jsx)(n.h3,{id:"register-user",children:"Register user"}),"\n",(0,t.jsx)(n.p,{children:"In order to transfer FTs to another account, the receiver account have to be registered in the token contract and make storage deposit. User can register their account or another account can do it for them."}),"\n",(0,t.jsx)(n.p,{children:"How to check storage balance:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'near view token.v2.ref-finance.near storage_balance_of \'{"account_id": "alice.near"}\'\n'})}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:"Example response"}),(0,t.jsxs)("p",{children:[(0,t.jsxs)(n.p,{children:["It returns ",(0,t.jsx)(n.code,{children:"null"})," if account is not registered."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"{\n  available: '0',\n  total: '1250000000000000000000'\n}\n"})})]})]}),"\n",(0,t.jsx)(n.p,{children:"How to register another account:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'near call token.v2.ref-finance.near storage_deposit \'{"account_id": "alice.near"}\' --depositYocto 1250000000000000000000 --accountId bob.near\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If you need to register your own account just pass ",(0,t.jsx)(n.code,{children:"{}"})," as arguments to call."]}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:"Example response"}),(0,t.jsx)("p",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"{\n  available: '0',\n  total: '1250000000000000000000'\n}\n"})})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"attaching-fts-to-a-call",children:"Attaching FTs to a Call"}),"\n",(0,t.jsx)(n.p,{children:"This snippet will enable you to attach FT to a call."}),"\n",(0,t.jsx)(n.p,{children:"Natively, only NEAR tokens (\u24c3) can be attached to a method calls. However, the FT standard enables to attach fungible tokens in a call by using the FT-contract as intermediary. This means that, instead of you attaching tokens directly to the call, you ask the FT-contract to do both a transfer and a method call in your name."}),"\n",(0,t.jsx)(n.p,{children:"Let's assume that you need to deposit FTs on Ref Finance."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'near call token.v2.ref-finance.near ft_transfer_call \'{"receiver_id": "v2.ref-finance.near", "amount": "100000000000000000", "msg": ""}\' --gas 300000000000000 --depositYocto 1 --accountId bob.near\n'})}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:"Example response"}),(0,t.jsx)("p",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"'100000000000000000'\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"How it works:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"You call ft_transfer_call in the FT contract passing: the receiver, a message, and the amount."}),"\n",(0,t.jsx)(n.li,{children:"The FT contract transfers the amount to the receiver."}),"\n",(0,t.jsx)(n.li,{children:"The FT contract calls receiver.ft_on_transfer(sender, msg, amount)"}),"\n",(0,t.jsx)(n.li,{children:"The FT contract handles errors in the ft_resolve_transfer callback."}),"\n",(0,t.jsx)(n.li,{children:"The FT contract returns you how much of the attached amount was actually used."}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"creating-ft",children:"Creating FT"}),"\n",(0,t.jsx)(n.p,{children:"This snippet will enable your users to create their own FT."}),"\n",(0,t.jsxs)(n.p,{children:["For creating our own FT we will use ",(0,t.jsx)(n.a,{href:"https://tkn.farm/",children:"Token Farm"}),". You can use it from GUI in your browser, but we will look at how to use its smart contracts to create a token."]}),"\n",(0,t.jsx)(n.p,{children:"First of all, you need to calculate how much creating a token will cost you."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'near view tkn.near get_required_deposit \'{"args":{"owner_id": "bob.near","total_supply": "1000000000","metadata":{"spec": "ft-1.0.0","name": "Test Token","symbol": "TTTEST","icon": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7","decimals": 18}},"account_id": "bob.near"}\' \n'})}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:"Example response"}),(0,t.jsx)("p",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"'2234830000000000000000000'\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"And then you can create a token."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'near call tkn.near create_token \'{"args":{"owner_id": "bob.near","total_supply": "1000000000","metadata":{"spec": "ft-1.0.0","name": "Test Token","symbol": "TTTEST","icon": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7","decimals": 18}},"account_id": "bob.near"}\' --gas 300000000000000 --depositYocto 2234830000000000000000000 --accountId bob.near\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Contract of your token will have an address which looks like ",(0,t.jsx)(n.code,{children:"<your_token_ticker>.tkn.near"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["After creating a token you can ",(0,t.jsx)(n.a,{href:"#send-tokens",children:"send it"})," to anyone."]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},85162:(e,n,a)=>{a.d(n,{Z:()=>i});a(67294);var t=a(36905);const r={tabItem:"tabItem_Ymn6"};var s=a(85893);function i(e){var n=e.children,a=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,i),hidden:a,children:n})}},74866:(e,n,a)=>{a.d(n,{Z:()=>k});var t=a(67294),r=a(36905),s=a(12466),i=a(16550),l=a(20469),o=a(91980),c=a(67392),u=a(50012);function d(e){var n,a;return null!=(n=null==(a=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?n:[]}function h(e){var n=e.values,a=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(a);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,a])}function f(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,a=void 0!==n&&n,r=e.groupId,s=(0,i.k6)(),l=function(e){var n=e.queryString,a=void 0!==n&&n,t=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:a,groupId:r});return[(0,o._X)(l),(0,t.useCallback)((function(e){if(l){var n=new URLSearchParams(s.location.search);n.set(l,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[l,s])]}function m(e){var n,a,r,s,i=e.defaultValue,o=e.queryString,c=void 0!==o&&o,d=e.groupId,m=h(e),b=(0,t.useState)((function(){return function(e){var n,a=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!f({value:a,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:m})})),v=b[0],g=b[1],x=p({queryString:c,groupId:d}),j=x[0],A=x[1],k=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),a=(0,u.Nk)(n),r=a[0],s=a[1],[r,(0,t.useCallback)((function(e){n&&s.set(e)}),[n,s])]),y=k[0],w=k[1],T=function(){var e=null!=j?j:y;return f({value:e,tabValues:m})?e:null}();return(0,l.Z)((function(){T&&g(T)}),[T]),{selectedValue:v,selectValue:(0,t.useCallback)((function(e){if(!f({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);g(e),A(e),w(e)}),[A,w,m]),tabValues:m}}var b=a(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(85893);function x(e){var n=e.className,a=e.block,t=e.selectedValue,i=e.selectValue,l=e.tabValues,o=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,a=o.indexOf(n),r=l[a].value;r!==t&&(c(n),i(r))},d=function(e){var n,a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var t,r=o.indexOf(e.currentTarget)+1;a=null!=(t=o[r])?t:o[0];break;case"ArrowLeft":var s,i=o.indexOf(e.currentTarget)-1;a=null!=(s=o[i])?s:o[o.length-1]}null==(n=a)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n),children:l.map((function(e){var n=e.value,a=e.label,s=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return o.push(e)},onKeyDown:d,onClick:u},s,{className:(0,r.Z)("tabs__item",v.tabItem,null==s?void 0:s.className,{"tabs__item--active":t===n}),children:null!=a?a:n}),n)}))})}function j(e){var n=e.lazy,a=e.children,r=e.selectedValue,s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){var i=s.find((function(e){return e.props.value===r}));return i?(0,t.cloneElement)(i,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function A(e){var n=m(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(x,Object.assign({},e,n)),(0,g.jsx)(j,Object.assign({},e,n))]})}function k(e){var n=(0,b.Z)();return(0,g.jsx)(A,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>i});var t=a(67294);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);