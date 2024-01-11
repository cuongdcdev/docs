"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8246],{90156:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>v,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=r(85893),a=r(11151),l=r(74866),i=r(85162);const s={id:"oracles",title:"Decentralized Oracles"},o=void 0,c={id:"develop/relevant-contracts/oracles",title:"Decentralized Oracles",description:"Oracles are smart contracts that enable you to query the current price of an asset. Since smart contracts cannot connect to internet and pull information, Oracles rely on having someone constantly updating their prices. Because of that, be mindful when using an oracle that there might be a delay between the market's latest information and the Oracles data.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.develop/relevant-contracts/oracles.md",sourceDirName:"2.develop/relevant-contracts",slug:"/develop/relevant-contracts/oracles",permalink:"/zh-CN/develop/relevant-contracts/oracles",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/relevant-contracts/oracles.md",tags:[],version:"current",frontMatter:{id:"oracles",title:"Decentralized Oracles"},sidebar:"contracts",previous:{title:"Non Fungible Tokens (NFT)",permalink:"/zh-CN/develop/relevant-contracts/nft"},next:{title:"Autonomous Organizations (DAO)",permalink:"/zh-CN/develop/relevant-contracts/dao"}},u={},d=[{value:"Price Oracles",id:"price-oracles",level:2},{value:"Native Oracle",id:"native-oracle",level:3},{value:"Query Assets",id:"query-assets",level:4},{value:"Get Assets Price",id:"get-assets-price",level:4}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Oracles are smart contracts that enable you to query the current price of an asset. Since smart contracts cannot connect to internet and pull information, Oracles rely on having someone constantly updating their prices. Because of that, be mindful when using an oracle that there might be a delay between the market's latest information and the Oracles data."}),"\n",(0,n.jsxs)(t.p,{children:["In contrast with ",(0,n.jsx)(t.a,{href:"/zh-CN/develop/relevant-contracts/ft",children:"FT"})," and ",(0,n.jsx)(t.a,{href:"/zh-CN/develop/relevant-contracts/nft",children:"NFT"}),", Oracle contract's are not standardized. We will here list different providers and how to use their Oracle as they are built."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"price-oracles",children:"Price Oracles"}),"\n",(0,n.jsx)(t.h3,{id:"native-oracle",children:"Native Oracle"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Account: ",(0,n.jsx)(t.strong,{children:"priceoracle.near"})," | ",(0,n.jsx)(t.strong,{children:"priceoracle.testnet"})]}),"\n",(0,n.jsxs)(t.li,{children:["Creator: ",(0,n.jsx)(t.a,{href:"https://github.com/NearDeFi",children:"NearDefi"})]}),"\n",(0,n.jsxs)(t.li,{children:["Smart contract: ",(0,n.jsx)(t.a,{href:"https://github.com/NearDeFi/price-oracle",children:"https://github.com/NearDeFi/price-oracle"})]}),"\n",(0,n.jsxs)(t.li,{children:["Bot to fill contract: ",(0,n.jsx)(t.a,{href:"https://github.com/NearDeFi/near-price-oracle-bot",children:"https://github.com/NearDeFi/near-price-oracle-bot"})]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"query-assets",children:"Query Assets"}),"\n",(0,n.jsx)(l.Z,{children:(0,n.jsx)(i.Z,{value:"cli",label:"CLI",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"NEAR_ENV=mainnet near view priceoracle.near get_assets\n"})})})}),"\n",(0,n.jsx)(t.h4,{id:"get-assets-price",children:"Get Assets Price"}),"\n",(0,n.jsx)(l.Z,{children:(0,n.jsx)(i.Z,{value:"cli",label:"CLI",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"NEAR_ENV=mainnet near view priceoracle.near get_price_data\n"})})})}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.mdxAdmonitionTitle,{children:["Divide the returned ",(0,n.jsx)(t.code,{children:"multiplier"})," by ",(0,n.jsx)(t.code,{children:"10000"})," to obtain the price in USD. :::"]})})]})}function v(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},85162:(e,t,r)=>{r.d(t,{Z:()=>i});r(67294);var n=r(36905);const a={tabItem:"tabItem_Ymn6"};var l=r(85893);function i(e){var t=e.children,r=e.hidden,i=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,i),hidden:r,children:t})}},74866:(e,t,r)=>{r.d(t,{Z:()=>N});var n=r(67294),a=r(36905),l=r(12466),i=r(16550),s=r(20469),o=r(91980),c=r(67392),u=r(50012);function d(e){var t,r;return null!=(t=null==(r=n.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,n.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}function h(e){var t=e.values,r=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(r);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function v(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,r=void 0!==t&&t,a=e.groupId,l=(0,i.k6)(),s=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:a});return[(0,o._X)(s),(0,n.useCallback)((function(e){if(s){var t=new URLSearchParams(l.location.search);t.set(s,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[s,l])]}function f(e){var t,r,a,l,i=e.defaultValue,o=e.queryString,c=void 0!==o&&o,d=e.groupId,f=h(e),m=(0,n.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!v({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:f})})),b=m[0],g=m[1],x=p({queryString:c,groupId:d}),j=x[0],y=x[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),r=(0,u.Nk)(t),a=r[0],l=r[1],[a,(0,n.useCallback)((function(e){t&&l.set(e)}),[t,l])]),w=N[0],O=N[1],k=function(){var e=null!=j?j:w;return v({value:e,tabValues:f})?e:null}();return(0,s.Z)((function(){k&&g(k)}),[k]),{selectedValue:b,selectValue:(0,n.useCallback)((function(e){if(!v({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),O(e)}),[y,O,f]),tabValues:f}}var m=r(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(85893);function x(e){var t=e.className,r=e.block,n=e.selectedValue,i=e.selectValue,s=e.tabValues,o=[],c=(0,l.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,r=o.indexOf(t),a=s[r].value;a!==n&&(c(t),i(a))},d=function(e){var t,r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var n,a=o.indexOf(e.currentTarget)+1;r=null!=(n=o[a])?n:o[0];break;case"ArrowLeft":var l,i=o.indexOf(e.currentTarget)-1;r=null!=(l=o[i])?l:o[o.length-1]}null==(t=r)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:s.map((function(e){var t=e.value,r=e.label,l=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:function(e){return o.push(e)},onKeyDown:d,onClick:u},l,{className:(0,a.Z)("tabs__item",b.tabItem,null==l?void 0:l.className,{"tabs__item--active":n===t}),children:null!=r?r:t}),t)}))})}function j(e){var t=e.lazy,r=e.children,a=e.selectedValue,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var i=l.find((function(e){return e.props.value===a}));return i?(0,n.cloneElement)(i,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function y(e){var t=f(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(x,Object.assign({},e,t)),(0,g.jsx)(j,Object.assign({},e,t))]})}function N(e){var t=(0,m.Z)();return(0,g.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},11151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>i});var n=r(67294);const a={},l=n.createContext(a);function i(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);