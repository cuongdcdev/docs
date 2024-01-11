"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7713],{48007:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(85893),i=n(11151),a=n(77229);const s={id:"push-notifications",title:"Push Notifications"},o=void 0,l={id:"bos/tutorial/push-notifications",title:"Push Notifications",description:"Push messages enable your gateway to send notifications on desktop and mobile devices even when the users are not active.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/bos/tutorial/push-notifications.md",sourceDirName:"bos/tutorial",slug:"/bos/tutorial/push-notifications",permalink:"/ko/bos/tutorial/push-notifications",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/tutorial/push-notifications.md",tags:[],version:"current",frontMatter:{id:"push-notifications",title:"Push Notifications"},sidebar:"integrate",previous:{title:"Gateways",permalink:"/ko/bos/tutorial/bos-gateway"},next:{title:"WebSockets & QueryAPI",permalink:"/ko/bos/tutorial/queryapi-websockets"}},u={},c=[{value:"Create the Service Worker",id:"create-the-service-worker",level:2},{value:"Subscribe to our Notifications",id:"subscribe-to-our-notifications",level:2},{value:"Create a Stream in our Server",id:"create-a-stream-in-our-server",level:2},{value:"Handle Notifications",id:"handle-notifications",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Push messages enable your gateway to send notifications on desktop and mobile devices even when the users are not active."}),"\n",(0,r.jsx)(t.p,{children:"To implement push notifications, you need to:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Create a Service Worker"}),"\n",(0,r.jsx)(t.li,{children:"Ask the user for permission to send push notifications"}),"\n",(0,r.jsxs)(t.li,{children:["Send the ",(0,r.jsx)(t.code,{children:"client identifier"})," information to our notification server"]}),"\n",(0,r.jsx)(t.li,{children:"Add logic to display the notifications"}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{title:"Example",type:"tip",children:(0,r.jsxs)(t.p,{children:["Check our working example at ",(0,r.jsx)(t.a,{href:"https://github.com/near-examples/BOS-notifications",children:"https://github.com/near-examples/BOS-notifications"})]})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"create-the-service-worker",children:"Create the Service Worker"}),"\n",(0,r.jsxs)(t.p,{children:["Push notifications work by having a ",(0,r.jsx)(t.a,{href:"https://codelabs.developers.google.com/codelabs/push-notifications#2",children:"service worker"})," on the client side that listens for messages from the NEAR notifications server."]}),"\n",(0,r.jsx)(a.O2,{children:(0,r.jsx)(a.Ey,{fname:"main.js",language:"js",value:"Create",url:"https://github.com/near-examples/BOS-notifications/blob/main/app/scripts/main.js",start:"16",end:"22"})}),"\n",(0,r.jsx)(t.p,{children:"Browsers readily provide native support for service workers, so you can easily check if a service worker exists, and create one if not."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"subscribe-to-our-notifications",children:"Subscribe to our Notifications"}),"\n",(0,r.jsxs)(t.p,{children:["In order to have the ",(0,r.jsx)(t.code,{children:"service worker"})," display notifications, you need to subscribe it to a notifications server."]}),"\n",(0,r.jsxs)(t.p,{children:["A notification server is identified by its ",(0,r.jsx)(t.code,{children:"public key"}),", constraining that only the server holding the ",(0,r.jsx)(t.code,{children:"private"})," counterpart can push notifications to the user."]}),"\n",(0,r.jsx)(a.O2,{children:(0,r.jsx)(a.Ey,{fname:"main.js",language:"js",value:"Subscribe",url:"https://github.com/near-examples/BOS-notifications/blob/main/app/scripts/main.js",start:"44",end:"50"})}),"\n",(0,r.jsx)(t.admonition,{title:"Permission",type:"tip",children:(0,r.jsx)(t.p,{children:"When you subscribe to the service, the user will be asked for permission to be sent notifications."})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"create-a-stream-in-our-server",children:"Create a Stream in our Server"}),"\n",(0,r.jsx)(t.p,{children:"After you subscribe the user to a notifications server, share it with us so we can start sending you notifications!"}),"\n",(0,r.jsxs)(t.p,{children:["For this, make a ",(0,r.jsx)(t.code,{children:"post"})," request to our server, add which account you want to be notified for, and a URL identifying your gateway."]}),"\n",(0,r.jsx)(a.O2,{children:(0,r.jsx)(a.Ey,{fname:"main.js",language:"js",value:"Stream",url:"https://github.com/near-examples/BOS-notifications/blob/main/app/scripts/main.js",start:"52",end:"64"})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"gateway"})," parameter is there just to help us keep track of who receives notifications."]})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"handle-notifications",children:"Handle Notifications"}),"\n",(0,r.jsxs)(t.p,{children:["When the user receives a notification, the ",(0,r.jsx)(t.code,{children:"service worker"})," will be triggered, and you can add logic to display the notification."]}),"\n",(0,r.jsx)(a.O2,{children:(0,r.jsx)(a.Ey,{fname:"sw.js",language:"js",value:"Notifications",url:"https://github.com/near-examples/BOS-notifications/blob/main/app/scripts/sw.js",start:"20",end:"37"})}),"\n",(0,r.jsx)(t.p,{children:"Feel free to personalize the notification as you wish, and to add logic on what to do once the notification is clicked. In our example, we just open the Post page."}),"\n",(0,r.jsx)(a.O2,{children:(0,r.jsx)(a.Ey,{fname:"sw.js",language:"js",value:"Notifications",url:"https://github.com/near-examples/BOS-notifications/blob/main/app/scripts/sw.js",start:"39",end:"51"})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var r=n(36905);const i={tabItem:"tabItem_Ymn6"};var a=n(85893);function s(e){var t=e.children,n=e.hidden,s=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),i=n(36905),a=n(12466),s=n(16550),o=n(20469),l=n(91980),u=n(67392),c=n(50012);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,n=void 0!==t&&t,i=e.groupId,a=(0,s.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:i});return[(0,l._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(a.location.search);t.set(o,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}}),[o,a])]}function v(e){var t,n,i,a,s=e.defaultValue,l=e.queryString,u=void 0!==l&&l,d=e.groupId,v=h(e),b=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var i=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:s,tabValues:v})})),m=b[0],g=b[1],j=p({queryString:u,groupId:d}),x=j[0],y=j[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,c.Nk)(t),i=n[0],a=n[1],[i,(0,r.useCallback)((function(e){t&&a.set(e)}),[t,a])]),k=w[0],S=w[1],N=function(){var e=null!=x?x:k;return f({value:e,tabValues:v})?e:null}();return(0,o.Z)((function(){N&&g(N)}),[N]),{selectedValue:m,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:v}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),S(e)}),[y,S,v]),tabValues:v}}var b=n(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function j(e){var t=e.className,n=e.block,r=e.selectedValue,s=e.selectValue,o=e.tabValues,l=[],u=(0,a.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=l.indexOf(t),i=o[n].value;i!==r&&(u(t),s(i))},d=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,i=l.indexOf(e.currentTarget)+1;n=null!=(r=l[i])?r:l[0];break;case"ArrowLeft":var a,s=l.indexOf(e.currentTarget)-1;n=null!=(a=l[s])?a:l[l.length-1]}null==(t=n)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:o.map((function(e){var t=e.value,n=e.label,a=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:c},a,{className:(0,i.Z)("tabs__item",m.tabItem,null==a?void 0:a.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function x(e){var t=e.lazy,n=e.children,i=e.selectedValue,a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var s=a.find((function(e){return e.props.value===i}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})}))})}function y(e){var t=v(e);return(0,g.jsxs)("div",{className:(0,i.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(j,Object.assign({},e,t)),(0,g.jsx)(x,Object.assign({},e,t))]})}function w(e){var t=(0,b.Z)();return(0,g.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},77229:(e,t,n)=>{n.d(t,{Ey:()=>c,O2:()=>l,SQ:()=>u});n(67294);var r=n(74866),i=n(85162),a=n(95665),s=n.n(a),o=n(85893);function l(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,o.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,o.jsx)(i.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function u(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),i=n.start,a=n.end,s=n.fname;if(e.type===c)return c({url:r,start:i,end:a,language:t,fname:s});return e}(e,n)})),1==t.length?(0,o.jsx)(i.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,o.jsx)(r.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,o.jsx)(i.Z,{value:t,label:e.props.fname,children:e})}))})}function c(e){var t=e.url,n=e.start,r=e.end,i=e.language,a=e.fname,l=t+"#";return n&&r&&(l+="L"+n+"-L"+r+"#"),(0,o.jsx)(s(),{language:i,fname:a,children:l})}}}]);