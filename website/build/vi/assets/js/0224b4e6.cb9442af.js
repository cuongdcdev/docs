"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7480],{47609:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=r(85893),a=r(11151),i=r(74866),o=r(85162);const s={id:"maintenance-windows",title:"Maintenance Windows"},l=void 0,c={id:"api/rpc/maintenance-windows",title:"Maintenance Windows",description:"The RPC API enables you to query future maintenance windows for a specific validator in current epoch",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/5.api/rpc/maintenance-windows.md",sourceDirName:"5.api/rpc",slug:"/api/rpc/maintenance-windows",permalink:"/vi/api/rpc/maintenance-windows",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/5.api/rpc/maintenance-windows.md",tags:[],version:"current",frontMatter:{id:"maintenance-windows",title:"Maintenance Windows"}},u={},d=[{value:"Maintenance windows",id:"maintenance-windows",level:2},{value:"What Could Go Wrong??",id:"what-could-go-wrong",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The RPC API enables you to query future maintenance windows for a specific validator in current epoch"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"maintenance-windows",children:"Maintenance windows"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"The maintenance windows for a specific validator are future block height ranges in current epoch, in which the validator does not need produce block or chunk If the provided account is not a validator, then it will return the range from now to the end of the epoch."}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["method: ",(0,t.jsx)(n.code,{children:"EXPERIMENTAL_maintenance_windows"})]}),"\n",(0,t.jsxs)(n.li,{children:["params:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"account_id"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"example:"}),"\n",(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(o.Z,{value:"json",label:"JSON",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "EXPERIMENTAL_maintenance_windows",\n  "params": {\n    "account_id": "node0"\n  }\n}\n'})})}),(0,t.jsx)(o.Z,{value:"http",label:"HTTPie",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=EXPERIMENTAL_maintenance_windows \\\n  params:=\'{\n    "account_id": "node0"\n  }\'\n'})})})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Example response:"}),(0,t.jsxs)("p",{children:[(0,t.jsxs)(n.p,{children:["The result will be a list of future maintenance windows in current epoch.\nFor example a window ",(0,t.jsx)(n.code,{children:"[1028, 1031]"})," includes 1028, 1029 and 1030."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "jsonrpc": "2.0",\n    "result": [\n        [\n            1028,\n            1031\n        ],\n        [\n            1034,\n            1038\n        ],\n    ],\n    "id": "dontcare"\n}\n'})})]})]}),"\n",(0,t.jsx)(n.h4,{id:"what-could-go-wrong",children:"What Could Go Wrong??"}),"\n",(0,t.jsxs)(n.p,{children:["When API request fails, RPC server returns a structured error response with a limited number of well-defined error variants, so client code can exhaustively handle all the possible error cases. Our JSON-RPC errors follow ",(0,t.jsx)(n.a,{href:"https://github.com/joyent/node-verror",children:"verror"})," convention for structuring the error response:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "error": {\n        "name": <ERROR_TYPE>,\n        "cause": {\n            "info": {..},\n            "name": <ERROR_CAUSE>\n        },\n        "code": -32000,\n        "data": String,\n        "message": "Server error",\n    },\n    "id": "dontcare",\n    "jsonrpc": "2.0"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Here is the exhaustive list of the error variants that can be returned by ",(0,t.jsx)(n.code,{children:"maintenance_windows"})," method:"]}),"\n",(0,t.jsxs)("table",{class:"custom-stripe",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsxs)(n.p,{children:["ERROR_TYPE",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("code",{children:"error.name"})]})}),(0,t.jsxs)("th",{children:["ERROR_CAUSE",(0,t.jsx)("br",{}),(0,t.jsx)("code",{children:"error.cause.name"})]}),(0,t.jsx)("th",{children:"Reason"}),(0,t.jsx)("th",{children:"Solution"})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"INTERNAL_ERROR"}),(0,t.jsx)("td",{children:"INTERNAL_ERROR"}),(0,t.jsx)("td",{children:"Something went wrong with the node itself or overloaded"}),(0,t.jsx)("td",{children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Try again later"}),(0,t.jsx)("li",{children:"Send a request to a different node"}),(0,t.jsxs)("li",{children:["Check ",(0,t.jsx)("code",{children:"error.cause.info"})," for more details"]})]})})]})})]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>o});r(67294);var t=r(36905);const a={tabItem:"tabItem_Ymn6"};var i=r(85893);function o(e){var n=e.children,r=e.hidden,o=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,o),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>y});var t=r(67294),a=r(36905),i=r(12466),o=r(16550),s=r(20469),l=r(91980),c=r(67392),u=r(50012);function d(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function h(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,r=void 0!==n&&n,a=e.groupId,i=(0,o.k6)(),s=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:a});return[(0,l._X)(s),(0,t.useCallback)((function(e){if(s){var n=new URLSearchParams(i.location.search);n.set(s,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[s,i])]}function m(e){var n,r,a,i,o=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,m=h(e),v=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:m})})),b=v[0],j=v[1],x=f({queryString:c,groupId:d}),w=x[0],g=x[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),r=(0,u.Nk)(n),a=r[0],i=r[1],[a,(0,t.useCallback)((function(e){n&&i.set(e)}),[n,i])]),E=y[0],R=y[1],T=function(){var e=null!=w?w:E;return p({value:e,tabValues:m})?e:null}();return(0,s.Z)((function(){T&&j(T)}),[T]),{selectedValue:b,selectValue:(0,t.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);j(e),g(e),R(e)}),[g,R,m]),tabValues:m}}var v=r(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(85893);function x(e){var n=e.className,r=e.block,t=e.selectedValue,o=e.selectValue,s=e.tabValues,l=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,r=l.indexOf(n),a=s[r].value;a!==t&&(c(n),o(a))},d=function(e){var n,r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var t,a=l.indexOf(e.currentTarget)+1;r=null!=(t=l[a])?t:l[0];break;case"ArrowLeft":var i,o=l.indexOf(e.currentTarget)-1;r=null!=(i=l[o])?i:l[l.length-1]}null==(n=r)||n.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:s.map((function(e){var n=e.value,r=e.label,i=e.attributes;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},i,{className:(0,a.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function w(e){var n=e.lazy,r=e.children,a=e.selectedValue,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var o=i.find((function(e){return e.props.value===a}));return o?(0,t.cloneElement)(o,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function g(e){var n=m(e);return(0,j.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,j.jsx)(x,Object.assign({},e,n)),(0,j.jsx)(w,Object.assign({},e,n))]})}function y(e){var n=(0,v.Z)();return(0,j.jsx)(g,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>o});var t=r(67294);const a={},i=t.createContext(a);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);