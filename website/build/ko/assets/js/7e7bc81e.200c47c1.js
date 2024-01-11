"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[229],{96743:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=t(85893),i=t(11151),r=t(42352);const o={id:"infinite-scroll",title:"InfiniteScroll",sidebar_label:"InfiniteScroll"},a=void 0,l={id:"bos/components/infinite-scroll",title:"InfiniteScroll",description:"\uadf8\ub9ac\ub4dc \ub610\ub294 \ud56d\ubaa9 \ubaa9\ub85d\uc744 \ubb34\ud55c\ub300\ub85c \ub85c\ub4dc\ud569\ub2c8\ub2e4. \uc774 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc0ac\uc6a9\ud558\uba74 \ucc3d\uacfc \uc2a4\ud06c\ub864 \uac00\ub2a5\ud55c \uc694\uc18c\ub97c \ubaa8\ub450 \uc9c0\uc6d0\ud558\uc5ec \uac04\ub2e8\ud558\uace0 \uac00\ubcbc\uc6b4 \ubb34\ud55c \uc2a4\ud06c\ub864 \ud398\uc774\uc9c0 \ub610\ub294 \uc694\uc18c\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/bos/components/infiniteScroll.md",sourceDirName:"bos/components",slug:"/bos/components/infinite-scroll",permalink:"/ko/bos/components/infinite-scroll",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/components/infiniteScroll.md",tags:[],version:"current",frontMatter:{id:"infinite-scroll",title:"InfiniteScroll",sidebar_label:"InfiniteScroll"},sidebar:"integrate",previous:{title:"OverlayTrigger",permalink:"/ko/bos/components/overlay-trigger"},next:{title:"TypeAhead",permalink:"/ko/bos/components/typeahead"}},c={},d=[{value:"\uc608\uc81c",id:"\uc608\uc81c",level:3},{value:"\uc608\uc81c: NEAR Social\uc5d0\uc11c \ubc08 \uac00\uc838\uc624\uae30",id:"\uc608\uc81c-near-social\uc5d0\uc11c-\ubc08-\uac00\uc838\uc624\uae30",level:3}];function m(e){const n={a:"a",code:"code",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\uadf8\ub9ac\ub4dc \ub610\ub294 \ud56d\ubaa9 \ubaa9\ub85d\uc744 \ubb34\ud55c\ub300\ub85c \ub85c\ub4dc\ud569\ub2c8\ub2e4. \uc774 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc0ac\uc6a9\ud558\uba74 \ucc3d\uacfc \uc2a4\ud06c\ub864 \uac00\ub2a5\ud55c \uc694\uc18c\ub97c \ubaa8\ub450 \uc9c0\uc6d0\ud558\uc5ec \uac04\ub2e8\ud558\uace0 \uac00\ubcbc\uc6b4 \ubb34\ud55c \uc2a4\ud06c\ub864 \ud398\uc774\uc9c0 \ub610\ub294 \uc694\uc18c\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/react-infinite-scroller",children:"react-infinite-scroller"})," \ud328\ud0a4\uc9c0\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uc138\uc694."]}),"\n",(0,s.jsx)("hr",{class:"subsection"}),"\n",(0,s.jsx)(n.h3,{id:"\uc608\uc81c",children:"\uc608\uc81c"}),"\n",(0,s.jsx)(r.W,{id:"1",height:"200px",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const allNumbers = Array.from(Array(100).keys())\n\nconst [displayNums, setDisplayNums] = useState([]);\nconst [lastNumber, setLastNumber] = useState(0);\n\nconst loadNumbers = (page) => {\n  setLastNumber(lastNumber + 10);\n  setDisplayNums(allNumbers.slice(0, lastNumber + 10).map(n => <p> {n} </p>));\n};\n\nreturn (\n  <div>\n    <InfiniteScroll\n      loadMore={loadNumbers}\n      hasMore={lastNumber < allNumbers.length}\n    >\n      <p>{displayNums}</p>\n    </InfiniteScroll>\n  </div>\n);\n"})})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"\uc608\uc81c-near-social\uc5d0\uc11c-\ubc08-\uac00\uc838\uc624\uae30",children:"\uc608\uc81c: NEAR Social\uc5d0\uc11c \ubc08 \uac00\uc838\uc624\uae30"}),"\n",(0,s.jsx)(r.W,{id:"2",height:"260px",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'const data = Social.keys(`*/post/meme`, "final", { return_type: "History" });\n\nif (!data) { return "Loading"; }\n\nconst processData = (data) => {\n  const accounts = Object.entries(data);\n\n  const allMemes = accounts\n    .map((account) => {\n      const accountId = account[0];\n      const blockHeights = account[1].post.meme;\n      return blockHeights.map((blockHeight) => ({\n        accountId,\n        blockHeight,\n      }));\n    })\n    .flat();\n\n  allMemes.sort((a, b) => b.blockHeight - a.blockHeight);\n  return allMemes;\n};\n\nconst memeToWidget = ({accountId, blockHeight}) => {\n  return <div style={{ minHeight: "200px" }}>\n    <a href={`#/mob.near/widget/Meme?accountId=${accountId}&blockHeight=${blockHeight}`}\n      class="text-decoration-none" >\n      <Widget src="mob.near/widget/Meme" props={{accountId, blockHeight}} />\n    </a>\n  </div>\n};\n\nState.init({\n  allMemes: processData(data),\n  widgets: [],\n});\n\nconst makeMoreMemes = () => {\n  const newMemes = state.allMemes\n    .slice(state.widgets.length, state.widgets.length + 10)\n    .map(memeToWidget);\n  newMemes.forEach((meme) => state.widgets.push(meme));\n  State.update();\n};\n\nreturn (\n  <div className="px-2 mx-auto" >\n    <InfiniteScroll\n      loadMore={makeMoreMemes}\n      hasMore={state.widgets.length < state.allMemes.length}\n    >\n      <div>{state.widgets}</div>\n    </InfiniteScroll>\n  </div>\n);\n'})})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},42352:(e,n,t)=>{t.d(n,{W:()=>a});var s=t(67294),i=t(16729),r=t(91262),o=t(85893);function a(e){var n=e.children,a=e.id,l=void 0===a?1:a,c=e.height,d=void 0===c?"160px":c;return(0,o.jsx)(r.Z,{fallback:(0,o.jsx)("div",{children:" Loading... "}),children:function(){var e="";try{e=n.props.children.props.children}catch(f){}var r=t(58613),a=r.Widget,c=r.useInitNear,m=t(2302).ZP,h=(0,s.useState)(e),u=h[0],p=h[1],g=c().initNear,b=(0,i.O)().selector;return(0,s.useEffect)((function(){g&&b&&g({networkId:"mainnet",selector:b})}),[g,b]),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{class:"monaco",children:(0,o.jsx)(m,{height:d,value:u,options:{minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,fontSize:"14px",renderLineHighlight:!1,hideMargin:!0,glyphMargin:!1,folding:!1,lineNumbers:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,scrollBars:!1},onChange:function(e,n){return p(e)}})}),(0,o.jsxs)("div",{class:"code_iframe",children:[(0,o.jsxs)("h4",{style:{fontWeight:0},children:[" Preview ",(0,o.jsx)("small",{children:" - Edit the code above! "})," "]}),(0,o.jsx)("hr",{class:"preview-border"}),(0,o.jsx)("div",{class:"bootstrap-scope",children:(0,o.jsx)("div",{class:"vm-widget",children:(0,o.jsx)(a,{code:u},l)})})]})]})}})}}}]);