"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81],{32759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var s=n(85893),r=n(11151);const o=n.p+"assets/images/near-and-react--dakila.near--rodolf_dtbbx-1fc086945b950cbd1704332896807a9c.png",i={sidebar_position:5,sidebar_label:"Add simple frontend",title:"Add a simple frontend to the crossword puzzle that checks the solution's hash"},a="Add a simple frontend",c={id:"tutorials/crosswords/basics/simple-frontend",title:"Add a simple frontend to the crossword puzzle that checks the solution's hash",description:"This will be the final section in this chapter, where we'll add a simple frontend using React and near-api-js to communicate with the smart contract.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/3.tutorials/crosswords/01-basics/04-simple-frontend.md",sourceDirName:"3.tutorials/crosswords/01-basics",slug:"/tutorials/crosswords/basics/simple-frontend",permalink:"/vi/tutorials/crosswords/basics/simple-frontend",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/01-basics/04-simple-frontend.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Add simple frontend",title:"Add a simple frontend to the crossword puzzle that checks the solution's hash"},sidebar:"contracts",previous:{title:"Hash the solution, unit tests, and an init method",permalink:"/vi/tutorials/crosswords/basics/hashing-and-unit-tests"},next:{title:"T\xf4\u0309ng quan",permalink:"/vi/tutorials/crosswords/beginner/overview"}},l={},h=[{value:"Entry point",id:"entry-point",level:2},{value:"React app",id:"react-app",level:2},{value:"Utility functions",id:"utility-functions",level:2},{value:"Run the React app",id:"run-the-react-app",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"add-a-simple-frontend",children:"Add a simple frontend"}),"\n",(0,s.jsxs)(t.p,{children:["This will be the final section in this chapter, where we'll add a simple frontend using React and ",(0,s.jsx)(t.a,{href:"https://docs.near.org/tools/near-api-js/quick-reference",children:(0,s.jsx)(t.code,{children:"near-api-js"})})," to communicate with the smart contract."]}),"\n",(0,s.jsxs)("figure",{children:[(0,s.jsx)("img",{src:o,alt:"Two characters hanging out, NEAR and React. Art created by dakila.near",width:"600"}),(0,s.jsxs)("figcaption",{children:["Dynamic duo of NEAR as the backend and React as a frontend.",(0,s.jsx)("br",{}),"Art by ",(0,s.jsx)("a",{href:"https://twitter.com/rodolf_dtbbx",target:"_blank",children:"dakila.near"})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.p,{children:"There will be three main files we'll be working with:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"src/index.js"})," will be the entry point, where NEAR network configuration will be set up, and the view-only call to ",(0,s.jsx)(t.code,{children:"get_solution"})," will happen."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"src/App.js"})," is then called and sets up the crossword table and checks to see if a solution has been found."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"src/utils.js"})," is used to make a view-only call to the blockchain to get the solution, and other helper functions."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"entry-point",children:"Entry point"}),"\n",(0,s.jsxs)(t.p,{children:["We'll go over a pattern that may look familiar to folks who have surveyed the ",(0,s.jsx)(t.a,{href:"https://github.com/near-examples",children:"NEAR examples site"}),". We'll start with an asynchronous JavaScript function that sets up desired logic, then pass that to the React app."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/crossword-tutorial-chapter-1/blob/3e497b4815600b8382614f76c7812520710f704d/src/index.js#L3-L22\n"})}),"\n",(0,s.jsx)(t.p,{children:"Let's talk through the code above, starting with the imports."}),"\n",(0,s.jsx)(t.p,{children:"We import from:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"config.js"})," which, at the moment, is a common pattern. This file contains details on the different networks. (Which RPC endpoint to hit, which NEAR Wallet site to redirect to, which NEAR Explorer as well\u2026)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"utils.js"})," for that view-only function call that will call ",(0,s.jsx)(t.code,{children:"get_solution"})," to retrieve the correct solution hash when a person has completed the crossword puzzle correctly."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"hardcoded-data.js"})," is a file containing info on the crossword puzzle clues. This chapter has covered the crossword puzzle where the solution is ",(0,s.jsx)(t.strong,{children:"near nomicon ref finance"}),", and according to the chapter overview we've committed to serving ",(0,s.jsx)(t.em,{children:"one"})," puzzle. We'll improve our smart contract later, allowing for multiple crossword puzzles, but for now it's hardcoded here."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Next, we define an asynchronous function called ",(0,s.jsx)(t.code,{children:"initCrossword"})," that will be called before passing data to the React app. It's often useful to set up a connection with the blockchain here, but in our case all we need to do is retrieve the crossword puzzle solution as a hash. Note that we're attempting to pass this environment variable ",(0,s.jsx)(t.code,{children:"NEAR_ENV"})," into our configuration file. ",(0,s.jsx)(t.code,{children:"NEAR_ENV"})," is used to designate the blockchain network (testnet, betanet, mainnet) and is also ",(0,s.jsx)(t.a,{href:"https://docs.near.org/develop/deploy",children:"used in NEAR CLI"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Lastly, we'll call ",(0,s.jsx)(t.code,{children:"initCrossword"})," and, when everything is complete, pass data to the React app contained in ",(0,s.jsx)(t.code,{children:"App.js"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"react-app",children:"React app"}),"\n",(0,s.jsxs)(t.p,{children:["Here's a large portion of the ",(0,s.jsx)(t.code,{children:"App.js"})," file, which will make use of a fork of a React crossword library by Jared Reisinger."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/crossword-tutorial-chapter-1/blob/3e497b4815600b8382614f76c7812520710f704d/src/App.js#L3-L54\n"})}),"\n",(0,s.jsx)(t.p,{children:"We'll discuss a few key points in the code above, but seeing as we're here to focus on a frontend connection to the blockchain, will brush over other parts that are library-specific."}),"\n",(0,s.jsx)(t.p,{children:"The two imports worth highlighting are:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"parseSolutionSeedPhrase"})," from the utility file we'll cover shortly. This will take the solution entered by the user and put it in the correct order according to the rules discussed in ",(0,s.jsx)(t.a,{href:"/vi/tutorials/crosswords/basics/overview#how-it-works",children:"the chapter overview"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"sha256"})," will take the ordered solution from above and hash it. Then we'll compare that hash with the one retrieved from the smart contract."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"const [solutionFound, setSolutionFound] = useState(false);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["We're using ",(0,s.jsx)(t.a,{href:"https://reactjs.org/docs/hooks-state.html",children:"React Hooks"})," here, setting up the variable ",(0,s.jsx)(t.code,{children:"solutionFound"})," that will be changed when the player of the crossword puzzle enters the final letter of the crossword puzzle, having entries for all the letters on the board."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"onCrosswordComplete"})," and ",(0,s.jsx)(t.code,{children:"checkSolution"})," blocks of code fire events to check the final solution entered by the user, hash it, and compare it to the ",(0,s.jsx)(t.code,{children:"solutionHash"})," that was passed in from the view-only call in ",(0,s.jsx)(t.code,{children:"index.js"})," earlier."]}),"\n",(0,s.jsxs)(t.p,{children:["Finally, we return the ",(0,s.jsx)(t.a,{href:"https://reactjs.org/docs/introducing-jsx.html",children:"JSX"})," for our app and render the crossword puzzle! In this basic case we'll change this heading to indicate when the user has completed the puzzle successfully:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:"<h3>Status: { solutionFound }</h3>\n"})}),"\n",(0,s.jsx)(t.h2,{id:"utility-functions",children:"Utility functions"}),"\n",(0,s.jsx)(t.p,{children:"We'll be using two utility functions here:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"parseSolutionSeedPhrase"})," which will take a completed crossword puzzle and place the answers in the proper order. (Ascending by number, across answers come before down ones.)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"viewMethodOnContract"})," makes the view-only call to the smart contract to retrieve the solution hash."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"We'll only focus on the second method:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/crossword-tutorial-chapter-1/blob/3e497b4815600b8382614f76c7812520710f704d/src/utils.js#L8-L12\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This API doesn't look warm and friendly yet. You caught us! We'd love some help to improve our API as ",(0,s.jsx)(t.a,{href:"https://github.com/near/near-api-js/issues/612",children:"detailed in this issue"}),", but for now, this is a concise way to get data from a view-only method."]}),"\n",(0,s.jsx)(t.p,{children:"We haven't had the frontend call a mutable method for our project yet. We'll get into that in the coming chapters when we'll want to have a prize sent to the first person to solve the puzzle."}),"\n",(0,s.jsx)(t.h2,{id:"run-the-react-app",children:"Run the React app"}),"\n",(0,s.jsxs)(t.p,{children:["Let's run our frontend on testnet! We won't add any new concepts at this point in the chapter, but note that the ",(0,s.jsx)(t.a,{href:"https://github.com/near-examples",children:"near examples"})," typically create an account for you automatically with a NodeJS command. We covered the important pattern of creating a subaccount and deploying the smart contract to it, so let's stick with that pattern as we start up our frontend."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# Go into the directory containing the Rust smart contract we've been working on\ncd contract\n\n# Build (for Windows it's build.bat)\n./build.sh\n\n# Create fresh account if you wish, which is good practice\nnear delete crossword.friend.testnet friend.testnet\nnear create-account crossword.friend.testnet --masterAccount friend.testnet\n\n# Deploy\nnear deploy crossword.friend.testnet --wasmFile res/my_crossword.wasm \\\n  --initFunction 'new' \\\n  --initArgs '{\"solution\": \"69c2feb084439956193f4c21936025f14a5a5a78979d67ae34762e18a7206a0f\"}'\n\n# Return to the project root and start the React app\ncd ..\nenv CONTRACT_NAME=crossword.friend.testnet npm run start\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The last line sends the environment variable ",(0,s.jsx)(t.code,{children:"CONTRACT_NAME"})," into the NodeJS script. This is picked up in the ",(0,s.jsx)(t.code,{children:"config.js"})," file that's used to set up the contract account and network configuration:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/crossword-tutorial-chapter-1/blob/3e497b4815600b8382614f76c7812520710f704d/src/config.js#L1\n"})}),"\n",(0,s.jsxs)(t.p,{children:["After running the last command to start the React app, you'll be given a link to a local website, like ",(0,s.jsx)(t.code,{children:"https://localhost:1234"}),". When you visit the site you'll see the simple frontend that interacts with our smart contract:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Crossword puzzle frontend showing a filled out puzzle with clues on the right sidebar",src:n(44540).Z+"",width:"775",height:"668"})}),"\n",(0,s.jsx)(t.p,{children:"Again, the full code for this chapter is available at:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/near-examples/crossword-tutorial-chapter-1",children:"https://github.com/near-examples/crossword-tutorial-chapter-1"})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},44540:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/basics-final-frontend-3d07b12eae7c931a52ba5d874537e810.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var s=n(67294);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);