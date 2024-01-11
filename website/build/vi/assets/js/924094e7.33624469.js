"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2333],{44243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=n(85893),r=n(11151),i=(n(74866),n(85162),n(77229));const s={id:"blockvote-js",sidebar_label:"BlockVote JS"},o="BlockVote JS Edition",l={id:"tutorials/examples/blockvote-js",title:"BlockVote JS Edition",description:"BlockVote JS Edition is a blockchain-based voting application built using JavaScript on the Near Protocol blockchain. The application allows users to securely cast their votes in an election and have them recorded on the blockchain, ensuring that the results are transparent and cannot be altered.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/3.tutorials/examples/blockvote-js-edition.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/blockvote-js",permalink:"/vi/tutorials/examples/blockvote-js",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/blockvote-js-edition.md",tags:[],version:"current",frontMatter:{id:"blockvote-js",sidebar_label:"BlockVote JS"}},c={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Smart Contract",id:"smart-contract",level:2},{value:"View Methods",id:"view-methods",level:3},{value:"Call Methods",id:"call-methods",level:3},{value:"Testing",id:"testing",level:2},{value:"Unit Tests",id:"unit-tests",level:3},{value:"Integration Tests",id:"integration-tests",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"blockvote-js-edition",children:"BlockVote JS Edition"}),"\n",(0,a.jsx)(t.p,{children:"BlockVote JS Edition is a blockchain-based voting application built using JavaScript on the Near Protocol blockchain. The application allows users to securely cast their votes in an election and have them recorded on the blockchain, ensuring that the results are transparent and cannot be altered."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"image",src:n(4062).Z+"",width:"1998",height:"1934"})}),"\n",(0,a.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(t.p,{children:"To install BlockVote JS Edition, follow these steps please:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Clone the repository to your local machine using the following command:"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/doriancrutcher/BlockVote-JS-Edition-Tutorial.git\n"})}),"\n",(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsx)(t.li,{children:"Navigate to the project directory:"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cd BlockVote-JS-Edition-Tutorial\n"})}),"\n",(0,a.jsxs)(t.ol,{start:"3",children:["\n",(0,a.jsx)(t.li,{children:"Install the required dependencies using the following command:"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"yarn install-deps\n"})}),"\n",(0,a.jsxs)(t.ol,{start:"4",children:["\n",(0,a.jsx)(t.li,{children:"Start the application:"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"yarn start\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["If you don't have ",(0,a.jsx)(t.code,{children:"yarn"})," installed, you can install it by running ",(0,a.jsx)(t.code,{children:"npm install -g yarn"}),"."]})}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.p,{children:"This application allows users to create a poll with two candidates, and each user can only vote in a poll once. Results are shown after the vote is cast."}),"\n",(0,a.jsx)(t.p,{children:"To create a poll, follow these steps:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Enter the names and URL links for the two candidates in the input fields."}),"\n",(0,a.jsx)(t.li,{children:'Click on the "Create Poll" button to create the poll.'}),"\n",(0,a.jsx)(t.li,{children:"Share the poll link with others to allow them to vote."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"To vote in a poll, follow these steps:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Click on the name of the candidate you want to vote for."}),"\n",(0,a.jsx)(t.li,{children:"You will only be able to vote once in each poll."}),"\n",(0,a.jsx)(t.li,{children:"After you vote, the poll results will be displayed on the screen."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["That's it! If you have any questions or issues while using the BlockVote JS Edition, feel free to open an issue on the ",(0,a.jsx)(t.a,{href:"https://github.com/doriancrutcher/BlockVote-JS-Edition-Tutorial",children:"project's GitHub page"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"smart-contract",children:"Smart Contract"}),"\n",(0,a.jsx)(t.p,{children:"The contract contains several view and call methods that allow users to interact with the contract, including:"}),"\n",(0,a.jsx)(t.h3,{id:"view-methods",children:"View Methods"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"getUrl"}),": retrieves the URL link for a specific candidate based on the candidate's name and prompt."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"didParticipate"}),": checks whether a specific user has participated in a given prompt."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"participateArray"}),": retrieves the list of users who have participated in a given prompt."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"getAllPrompts"}),": retrieves a list of all prompts currently available in the contract."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"getVotes"}),": retrieves the vote tallies for a specific prompt."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"getCandidatePair"}),": retrieves the names of the two candidates for a specific prompt."]}),"\n"]}),"\n",(0,a.jsx)(i.O2,{children:(0,a.jsx)(i.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,a.jsx)(i.Ey,{fname:"contract.ts",url:"https://github.com/doriancrutcher/BlockVote-JS-Edition-Tutorial/blob/main/contract/src/contract.ts",start:"20",end:"60"})})}),"\n",(0,a.jsx)(t.h3,{id:"call-methods",children:"Call Methods"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"addCandidatePair"}),": adds a candidate pair for a specific prompt to the contract's unordered map of candidate pairs."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"initializeVotes"}),": initializes the vote tallies for a specific prompt"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"addToPromptArray"}),": adds a prompt to the contract's unordered set of prompts"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"clearPromptArray"}),": clears all prompts and associated data from the contract (candidate pairs, vote tallies, and user participation)"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"addVote"}),": casts a vote for a specific candidate in a prompt by updating the vote tally for that candidate in the contract's unordered map of vote tallies. The method takes in the prompt and the index of the candidate"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"recordUser"}),": records the participation of a user in a specific prompt by adding the user's account ID to an array in the contract's unordered map of user participation"]}),"\n"]}),"\n",(0,a.jsx)(i.O2,{children:(0,a.jsx)(i.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,a.jsx)(i.Ey,{fname:"contract.ts",url:"https://github.com/doriancrutcher/BlockVote-JS-Edition-Tutorial/blob/main/contract/src/contract.ts",start:"61",end:"110"})})}),"\n",(0,a.jsx)(t.h2,{id:"testing",children:"Testing"}),"\n",(0,a.jsxs)(t.p,{children:["When writing smart contracts, it is very important to test all methods exhaustively. In this project, you have two types of tests: unit tests and integration tests. Before digging into them, it's important to run the tests present in the dApp through the command ",(0,a.jsx)(t.code,{children:"yarn test"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"unit-tests",children:"Unit Tests"}),"\n",(0,a.jsx)(t.p,{children:"Unit tests are designed to test individual functions and methods in the smart contract. These tests are run in isolation, meaning that they do not interact with other components of the system. The purpose of unit tests is to ensure that each individual function or method behaves as expected."}),"\n",(0,a.jsxs)(t.p,{children:["In this project, you can run the unit tests by executing the command ",(0,a.jsx)(t.code,{children:"yarn test:unit"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"integration-tests",children:"Integration Tests"}),"\n",(0,a.jsx)(t.p,{children:"These tests are run to ensure that the different components of the system work together as expected. In the context of a smart contract, integration tests are used to test the interactions between the contract and the blockchain."}),"\n",(0,a.jsxs)(t.p,{children:["In this project, you can run the integration tests by executing the command ",(0,a.jsx)(t.code,{children:"yarn test"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["These tests use a combination of ",(0,a.jsx)(t.code,{children:"ava"})," and ",(0,a.jsx)(t.code,{children:"near-workspaces"})]}),"\n",(0,a.jsx)(i.O2,{children:(0,a.jsx)(i.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,a.jsx)(i.Ey,{fname:"contract.ts",url:"https://github.com/doriancrutcher/BlockVote-JS-Edition-Tutorial/blob/main/integration-tests/src/main.ava.ts",start:"6",end:"92"})})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var i=n(85893);function s(e){var t=e.children,n=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(67294),r=n(36905),i=n(12466),s=n(16550),o=n(20469),l=n(91980),c=n(67392),d=n(50012);function u(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return u(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,i=(0,s.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,l._X)(o),(0,a.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function v(e){var t,n,r,i,s=e.defaultValue,l=e.queryString,c=void 0!==l&&l,u=e.groupId,v=h(e),f=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:v})})),j=f[0],b=f[1],x=m({queryString:c,groupId:u}),g=x[0],y=x[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,d.Nk)(t),r=n[0],i=n[1],[r,(0,a.useCallback)((function(e){t&&i.set(e)}),[t,i])]),k=w[0],T=w[1],S=function(){var e=null!=g?g:k;return p({value:e,tabValues:v})?e:null}();return(0,o.Z)((function(){S&&b(S)}),[S]),{selectedValue:j,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:v}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),T(e)}),[y,T,v]),tabValues:v}}var f=n(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function x(e){var t=e.className,n=e.block,a=e.selectedValue,s=e.selectValue,o=e.tabValues,l=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==a&&(c(t),s(r))},u=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=l.indexOf(e.currentTarget)+1;n=null!=(a=l[r])?a:l[0];break;case"ArrowLeft":var i,s=l.indexOf(e.currentTarget)-1;n=null!=(i=l[s])?i:l[l.length-1]}null==(t=n)||t.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:o.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return l.push(e)},onKeyDown:u,onClick:d},i,{className:(0,r.Z)("tabs__item",j.tabItem,null==i?void 0:i.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function g(e){var t=e.lazy,n=e.children,r=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var s=i.find((function(e){return e.props.value===r}));return s?(0,a.cloneElement)(s,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function y(e){var t=v(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",j.tabList),children:[(0,b.jsx)(x,Object.assign({},e,t)),(0,b.jsx)(g,Object.assign({},e,t))]})}function w(e){var t=(0,f.Z)();return(0,b.jsx)(y,Object.assign({},e,{children:u(e.children)}),String(t))}},77229:(e,t,n)=>{n.d(t,{Ey:()=>d,O2:()=>l,SQ:()=>c});n(67294);var a=n(74866),r=n(85162),i=n(95665),s=n.n(i),o=n(85893);function l(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,o.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,o.jsx)(r.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function c(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,a=(n.children,n.url),r=n.start,i=n.end,s=n.fname;if(e.type===d)return d({url:a,start:r,end:i,language:t,fname:s});return e}(e,n)})),1==t.length?(0,o.jsx)(r.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,o.jsx)(a.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,o.jsx)(r.Z,{value:t,label:e.props.fname,children:e})}))})}function d(e){var t=e.url,n=e.start,a=e.end,r=e.language,i=e.fname,l=t+"#";return n&&a&&(l+="L"+n+"-L"+a+"#"),(0,o.jsx)(s(),{language:r,fname:i,children:l})}},4062:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blockvote-dd99de73711fd33f72b9274319860cd0.png"}}]);