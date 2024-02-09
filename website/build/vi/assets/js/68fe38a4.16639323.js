"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9402],{30832:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(85893),s=t(11151),o=t(42352);const r={id:"builtin-components",title:"List of Native Components"},l=void 0,a={id:"bos/api/builtin-components",title:"List of Native Components",description:"A list of all the built-in components to be used on Near Components.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/bos/api/builtin-components.md",sourceDirName:"bos/api",slug:"/bos/api/builtin-components",permalink:"/vi/bos/api/builtin-components",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/api/builtin-components.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1705334457,formattedLastUpdatedAt:"15 thg 1, 2024",frontMatter:{id:"builtin-components",title:"List of Native Components"},sidebar:"build",previous:{title:"Web Browser Methods",permalink:"/vi/bos/api/web-methods"},next:{title:"Interacting with Near",permalink:"/vi/bos/api/near"}},d={},c=[{value:"Widget",id:"widget",level:2},{value:"IpfsImageUpload",id:"ipfsimageupload",level:2},{value:"Files",id:"files",level:2},{value:"Markdown",id:"markdown",level:2},{value:"OverlayTrigger",id:"overlaytrigger",level:2},{value:"InfiniteScroll",id:"infinitescroll",level:2},{value:"TypeAhead",id:"typeahead",level:2},{value:"Styled Components",id:"styled-components",level:2},{value:"Tooltip",id:"tooltip",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"A list of all the built-in components to be used on Near Components."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"widget",children:"Widget"}),"\n",(0,i.jsxs)(n.p,{children:["The predefined component ",(0,i.jsx)(n.code,{children:"Widget"})," allows you to include an existing component into your code, thus enabling to create complex applications by composing components."]}),"\n",(0,i.jsx)(o.W,{id:"1",height:"100px",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'const props = { name: "Anna", amount: 3 };\n\nreturn <Widget src="influencer.testnet/widget/Greeter" props={props} />;\n'})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"ipfsimageupload",children:"IpfsImageUpload"}),"\n",(0,i.jsx)(n.p,{children:"A built-in component that enables users to directly upload an image to the InterPlanetary File System (IPFS)."}),"\n",(0,i.jsx)(o.W,{id:"2",height:"200px",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"State.init({image: {}})\n\nreturn <>\n  <p> Raw State: {JSON.stringify(state.image)} </p>\n  <IpfsImageUpload image={state.image} />\n</>\n"})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"files",children:"Files"}),"\n",(0,i.jsxs)(n.p,{children:["A built-in component that enables to input files with drag and drop support. Read more about the ",(0,i.jsx)(n.code,{children:"Files"})," component ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/react-files",children:"here"}),"."]}),"\n",(0,i.jsx)(o.W,{id:"3",height:"220px",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'const [img, setImg] = useState(null);\nconst [msg, setMsg] = useState(\'Upload an Image\')\n\nconst uploadFile = (files) => {\n  setMsg(\'Uploading...\')\n\n  const file = fetch(\n    "https://ipfs.near.social/add",\n    {\n      method: "POST",\n      headers: { Accept: "application/json" },\n      body: files[0]\n    }\n  )\n\n  setImg(file.body.cid)\n  setMsg(\'Upload an Image\')\n}\n\nreturn <>\n  <Files\n    multiple={false}\n    accepts={["image/*"]}\n    clickable\n    className="btn btn-outline-primary"\n    onChange={uploadFile}\n  >\n    {msg}\n  </Files>\n  {img ? <div><img src={`https://ipfs.near.social/ipfs/${img}`} /></div> : \'\'}\n</>;\n'})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"markdown",children:"Markdown"}),"\n",(0,i.jsx)(n.p,{children:"A component that enables to render Markdown."}),"\n",(0,i.jsx)(o.W,{id:"4",height:"60px",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"const markdown = (`\n## A title\n\nThis is some example **markdown** content, with _styled_ text\n`)\n\nreturn <Markdown text={markdown} />;\n"})})}),"\n",(0,i.jsx)(n.admonition,{title:"Markdown Editor",type:"tip",children:(0,i.jsxs)(n.p,{children:["Checkout this ",(0,i.jsx)(n.a,{href:"https://near.social/#/mob.near/widget/MarkdownEditorIframeExample",children:"Markdown Editor"}),", and ",(0,i.jsx)(n.a,{href:"https://near.social/mob.near/widget/WidgetSource?src=mob.near/widget/MarkdownEditorIframeExample",children:"its source code"}),"."]})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"overlaytrigger",children:"OverlayTrigger"}),"\n",(0,i.jsx)(n.p,{children:"Used to display a message or icon when the mouse is over a DOM element."}),"\n",(0,i.jsx)(o.W,{id:"5",height:"200px",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const [show, setShow] = useState(false);\n\nconst overlay = (\n  <div className='border m-3 p-3'>\n    This is the overlay Message\n  </div>\n);\n\nreturn (\n  <OverlayTrigger\n    show={show}\n    delay={{ show: 250, hide: 300 }}\n    placement='auto'\n    overlay={overlay}\n  >\n    <button\n      className=\"btn btn-outline-primary\"\n      onMouseEnter={() => setShow(true)}\n      onMouseLeave={() => setShow(false)}\n    >\n      Place Mouse Over Me\n    </button>\n  </OverlayTrigger>\n);\n"})})}),"\n",(0,i.jsxs)(t,{markdown:"1",children:[(0,i.jsx)("summary",{children:" Component props "}),(0,i.jsx)(n.p,{children:"The OverlayTrigger component has several props that allow you to customize its behavior:"}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Prop"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"show"})}),(0,i.jsx)(n.td,{children:"A boolean value that determines whether the overlay is currently visible or not."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"trigger"})}),(0,i.jsxs)(n.td,{children:["An array of events that trigger the display of the overlay. In this example, the ",(0,i.jsx)(n.code,{children:"trigger"})," prop is set to ",(0,i.jsx)(n.code,{children:'["hover", "focus"]'}),", which means that the overlay will be displayed when the user hovers over or focuses on the element."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"delay"})}),(0,i.jsxs)(n.td,{children:["An object that specifies the delay before the overlay is displayed or hidden. In this example, the ",(0,i.jsx)(n.code,{children:"delay"})," prop is set to ",(0,i.jsx)(n.code,{children:"{ show: 250, hide: 300 }"}),", which means that the overlay will be displayed after a 250-millisecond delay and hidden after a 300-millisecond delay."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"placement"})}),(0,i.jsxs)(n.td,{children:["A string that specifies the position of the overlay relative to the trigger element. In this example, the ",(0,i.jsx)(n.code,{children:"placement"})," prop is set to ",(0,i.jsx)(n.code,{children:'"auto"'}),", which means that the position will be automatically determined based on available space."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"overlay"})}),(0,i.jsxs)(n.td,{children:["The content that will be displayed in the overlay. In this example, the ",(0,i.jsx)(n.code,{children:"overlay"})," prop is set to a ",(0,i.jsx)(n.code,{children:"<div>"}),' element containing the message "This is the overlay message.']})]})]})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"infinitescroll",children:"InfiniteScroll"}),"\n",(0,i.jsx)(n.p,{children:"Infinitely load a grid or list of items. This component allows you to create a simple, lightweight infinite scrolling page or element by supporting both window and scrollable elements."}),"\n",(0,i.jsxs)(n.p,{children:["Read more about the ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/react-infinite-scroller",children:"react-infinite-scroller"})," package."]}),"\n",(0,i.jsx)(o.W,{id:"6",height:"200px",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const allNumbers = Array.from(Array(100).keys())\nconst [lastNumber, setLastNumber] = useState(0);\nconst [display, setDisplay] = useState([]);\n\nconst loadNumbers = (page) => {\n  const toDisplay = allNumbers\n    .slice(0, lastNumber + page*10)\n    .map(n => <p>{n}</p>)\n\n  console.log(lastNumber + page*10)\n  setDisplay(toDisplay);\n  setLastNumber(lastNumber + page*10);\n};\n\nreturn (\n  <InfiniteScroll\n    loadMore={loadNumbers}\n    hasMore={lastNumber < allNumbers.length}\n    useWindow={false}\n  >\n    {display}\n  </InfiniteScroll>\n);\n"})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"typeahead",children:"TypeAhead"}),"\n",(0,i.jsxs)(n.p,{children:["Provides a type-ahead input field for selecting an option from a list of choices. More information about the component can be found ",(0,i.jsx)(n.a,{href:"https://github.com/ericgio/react-bootstrap-typeahead",children:"here"}),"."]}),"\n",(0,i.jsx)(o.W,{id:"7",height:"300px",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'const [selected, setSelected] = useState([]);\nconst options = ["Apple", "Banana", "Cherry", "Durian", "Elderberry"];\n\nreturn <>\n  <Typeahead\n    options={options}\n    multiple\n    onChange={v => setSelected(v)}\n    placeholder=\'Choose a fruit...\'\n  />\n  <hr />\n  <p> Selected: {selected.join(\', \')} </p>\n</>;\n'})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"styled-components",children:"Styled Components"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://styled-components.com/",children:"Styled Components"})," is a popular library for styling React components using CSS-in-JS."]}),"\n",(0,i.jsx)(o.W,{id:"8",height:"80px",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'const Button = styled.button`\n  /* Adapt the colors based on primary prop */\n  background: ${(props) => (props.primary ? "palevioletred" : "white")};\n  color: ${(props) => (props.primary ? "white" : "palevioletred")};\n\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid palevioletred;\n  border-radius: 10px;\n`;\n\nreturn (\n  <div>\n    <Button>Normal</Button>\n    <Button primary>Primary</Button>\n  </div>\n);\n'})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"tooltip",children:"Tooltip"}),"\n",(0,i.jsxs)(n.p,{children:["Displays a message once the mouse hovers over a particular item. This component was imported from ",(0,i.jsx)(n.a,{href:"https://react-bootstrap-v3.netlify.app/components/tooltips/",children:(0,i.jsx)(n.code,{children:"React-Bootstrap"})}),"."]}),"\n",(0,i.jsx)(o.W,{id:"9",height:"120px",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'const tooltip = (\n  <Tooltip id="tooltip">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Tooltip>\n);\n\nreturn <>\n  <OverlayTrigger placement="left" overlay={tooltip}>\n    <button>Holy guacamole!</button>\n  </OverlayTrigger>\n\n  <OverlayTrigger placement="top" overlay={tooltip}>\n    <button>Holy guacamole!</button>\n  </OverlayTrigger>\n\n  <OverlayTrigger placement="bottom" overlay={tooltip}>\n    <button>Holy guacamole!</button>\n  </OverlayTrigger>\n\n  <OverlayTrigger placement="right" overlay={tooltip}>\n    <button>Holy guacamole!</button>\n  </OverlayTrigger>\n</>\n'})})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},42352:(e,n,t)=>{t.d(n,{W:()=>l});var i=t(67294),s=t(93293),o=t(91262),r=t(85893);function l(e){var n=e.children,l=e.id,a=void 0===l?1:l,d=e.height,c=void 0===d?"160px":d;return(0,r.jsx)(o.Z,{fallback:(0,r.jsx)("div",{children:" Loading... "}),children:function(){var e="";try{e=n.props.children.props.children}catch(j){}var o=t(58613),l=o.Widget,d=o.useInitNear,h=t(2302).ZP,p=(0,i.useState)(e),m=p[0],u=p[1],g=d().initNear,x=(0,s.O)().selector;return(0,i.useEffect)((function(){g&&x&&g({networkId:"testnet",selector:x})}),[g,x]),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"monaco",children:(0,r.jsx)(h,{height:c,value:m,options:{minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,fontSize:"14px",renderLineHighlight:!1,hideMargin:!0,glyphMargin:!1,folding:!1,lineNumbers:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,scrollBars:!1},onChange:function(e,n){return u(e)}})}),(0,r.jsx)("div",{className:"code_iframe",children:(0,r.jsx)("div",{className:"bootstrap-scope",children:(0,r.jsx)("div",{className:"vm-widget",children:(0,r.jsx)(l,{code:m},a)})})})]})}})}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var i=t(67294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);