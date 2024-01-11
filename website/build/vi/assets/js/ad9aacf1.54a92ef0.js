"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3471],{66261:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>t});var i=s(85893),l=s(11151);const r={title:"JS SDK CLI"},c=void 0,d={id:"sdk/js/cli/cli",title:"JS SDK CLI",description:"The SDK Command Line Interface (CLI) is a tool that enables to act on different parts of the build process as well as generate validations and an ABI. Among other things, the SDK CLI enables you to:",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/sdk/js/cli/cli.md",sourceDirName:"sdk/js/cli",slug:"/sdk/js/cli/",permalink:"/vi/sdk/js/cli/",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/js/cli/cli.md",tags:[],version:"current",frontMatter:{title:"JS SDK CLI"},sidebar:"tools",previous:{title:"Reproducible Builds",permalink:"/vi/sdk/js/building/reproducible-builds"},next:{title:"Integration Tests",permalink:"/vi/sdk/js/testing/integration-tests"}},a={},t=[{value:"Overview",id:"overview",level:2},{value:"Setup",id:"setup",level:2},{value:"Installation",id:"installation",level:3},{value:"Mac and Linux",id:"mac-and-linux",level:4},{value:"Windows",id:"windows",level:4},{value:"Commands",id:"commands",level:2},{value:"<code>near-sdk-js build</code>",id:"build",level:3},{value:"<code>near-sdk-js validateContract</code>",id:"validate-contract",level:3},{value:"<code>near-sdk-js checkTypescript</code>",id:"check-ts",level:3},{value:"<code>near-sdk-js createJsFileWithRollup</code>",id:"create-js-file",level:3},{value:"<code>near-sdk-js transpileJsAndBuildWasm</code>",id:"transpile-js-to-wasm",level:3}];function o(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The SDK ",(0,i.jsx)(n.a,{href:"https://github.com/near/near-sdk-js/blob/develop/packages/near-sdk-js/src/cli/cli.ts",children:"Command Line Interface"})," (CLI) is a tool that enables to act on different parts of the build process as well as generate validations and an ",(0,i.jsx)(n.a,{href:"https://github.com/near/abi",children:"ABI"}),". Among other things, the SDK CLI enables you to:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Control the different parts of the build process"}),"\n",(0,i.jsx)(n.li,{children:"Validate your contract and TypeScript code"}),"\n",(0,i.jsx)(n.li,{children:"Create an ABI JSON file"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Click on a command for more information and examples."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Commands"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Command"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#build",children:(0,i.jsx)(n.code,{children:"near-sdk-js build"})})}),(0,i.jsx)(n.td,{children:"Build a NEAR JS Smart-contract"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#validate-contract",children:(0,i.jsx)(n.code,{children:"near-sdk-js validateContract"})})}),(0,i.jsx)(n.td,{children:"Validate a NEAR JS Smart-contract"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#check-ts",children:(0,i.jsx)(n.code,{children:"near-sdk-js checkTypescript"})})}),(0,i.jsx)(n.td,{children:"Run TSC with some CLI flags"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#create-js-file",children:(0,i.jsx)(n.code,{children:"near-sdk-js createJsFileWithRollup"})})}),(0,i.jsx)(n.td,{children:"Create an intermediate JavaScript file for later processing with QJSC"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#transpile-js-to-wasm",children:(0,i.jsx)(n.code,{children:"near-sdk-js transpileJsAndBuildWasm"})})}),(0,i.jsx)(n.td,{children:"Transpiles the target javascript file into .c and .h using QJSC then compiles that into wasm using clang"})]})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Make sure you have a current version of ",(0,i.jsx)(n.code,{children:"npm"})," and ",(0,i.jsx)(n.code,{children:"NodeJS"})," installed."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"mac-and-linux",children:"Mac and Linux"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Install ",(0,i.jsx)(n.code,{children:"npm"})," and ",(0,i.jsx)(n.code,{children:"node"})," using a ",(0,i.jsx)(n.a,{href:"https://nodejs.org/en/download/package-manager/",children:"package manager"})," like ",(0,i.jsx)(n.code,{children:"nvm"})," as sometimes there are issues using Ledger due to how macOS handles node packages related to USB devices."]}),"\n",(0,i.jsx)(n.li,{children:"Ensure you have installed Node version 12 or above."}),"\n",(0,i.jsxs)(n.li,{children:["Install ",(0,i.jsx)(n.code,{children:"near-cli"})," globally by running:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install -g near-cli\n"})}),"\n",(0,i.jsx)(n.h4,{id:"windows",children:"Windows"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["For Windows users, we recommend using Windows Subsystem for Linux (",(0,i.jsx)(n.code,{children:"WSL"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Install ",(0,i.jsx)(n.code,{children:"WSL"})," ",(0,i.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/windows/wsl/install-manual#downloading-distros",children:"[click here]"})]}),"\n",(0,i.jsxs)(n.li,{children:["Install ",(0,i.jsx)(n.code,{children:"npm"})," ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/get-npm",children:"[click here]"})]}),"\n",(0,i.jsxs)(n.li,{children:["Install ",(0,i.jsx)(n.code,{children:"Node.js"})," ",(0,i.jsx)(n.a,{href:"https://nodejs.org/en/download/package-manager/",children:" [ click here ]"})]}),"\n",(0,i.jsxs)(n.li,{children:["Change ",(0,i.jsx)(n.code,{children:"npm"})," default directory ",(0,i.jsx)(n.a,{href:"https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally#manually-change-npms-default-directory",children:" [ click here ] "}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["This is to avoid any permission issues with ",(0,i.jsx)(n.code,{children:"WSL"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Open ",(0,i.jsx)(n.code,{children:"WSL"})," and install ",(0,i.jsx)(n.code,{children:"near-cli"})," globally by running:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install -g near-cli\n"})}),"\n",(0,i.jsxs)(n.admonition,{title:"heads up",type:"info",children:[(0,i.jsxs)(n.p,{children:["Copy/pasting can be a bit odd using ",(0,i.jsx)(n.code,{children:"WSL"}),"."]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'"Quick Edit Mode" will allow right-click pasting.'}),"\n",(0,i.jsxs)(n.li,{children:["Depending on your version there may be another checkbox allowing ",(0,i.jsx)(n.code,{children:"Ctrl"})," + ",(0,i.jsx)(n.code,{children:"V"})," pasting as well."]}),"\n"]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Windows option called Quick Edit allow right-click pasting in WSL",src:s(63459).Z+"",width:"608",height:"531"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"commands",children:"Commands"}),"\n",(0,i.jsx)(n.h3,{id:"build",children:(0,i.jsx)(n.code,{children:"near-sdk-js build"})}),"\n",(0,i.jsxs)(n.p,{children:["Build a NEAR JS Smart-contract, specifying the source, target, ",(0,i.jsx)(n.code,{children:"package.json"}),", and ",(0,i.jsx)(n.code,{children:"tsconfig.json"})," files. If none are specified, the default values are used. The argument default values are:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["source: ",(0,i.jsx)(n.code,{children:"src/index.js"})]}),"\n",(0,i.jsxs)(n.li,{children:["target: ",(0,i.jsx)(n.code,{children:"build/contract.wasm"})]}),"\n",(0,i.jsxs)(n.li,{children:["packageJson: ",(0,i.jsx)(n.code,{children:"package.json"})]}),"\n",(0,i.jsxs)(n.li,{children:["tsConfig: ",(0,i.jsx)(n.code,{children:"tsconfig.json"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Options default values are set to ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["arguments (optional): ",(0,i.jsx)(n.code,{children:"[source] [target] [packageJson] [tsConfig]"})]}),"\n",(0,i.jsxs)(n.li,{children:["options: ",(0,i.jsx)(n.code,{children:"--verbose --generateABI"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"near-sdk-js build src/main.ts out/main.wasm package.json tsconfig.json --verbose true --generateABI true\n"})}),"\n",(0,i.jsx)(n.h3,{id:"validate-contract",children:(0,i.jsx)(n.code,{children:"near-sdk-js validateContract"})}),"\n",(0,i.jsx)(n.p,{children:"Validate a NEAR JS Smart-contract. Validates the contract by checking that all parameters are initialized in the constructor. Works only for TypeScript."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["arguments: ",(0,i.jsx)(n.code,{children:"[source]"})]}),"\n",(0,i.jsxs)(n.li,{children:["options: ",(0,i.jsx)(n.code,{children:"--verbose"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"near-sdk-js validateContract src/main.ts --verbose true\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Response:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npx near-sdk-js validateContract src/index.ts\n[validate] \u203a \u2026  awaiting  Validating src/index.ts contract...\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"check-ts",children:(0,i.jsx)(n.code,{children:"near-sdk-js checkTypescript"})}),"\n",(0,i.jsx)(n.p,{children:"Run TSC with some CLI flags."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.mdxAdmonitionTitle,{children:["warning This command ignores ",(0,i.jsx)(n.code,{children:"tsconfig.json"}),"."]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["arguments: ",(0,i.jsx)(n.code,{children:"[source]"})]}),"\n",(0,i.jsxs)(n.li,{children:["options: ",(0,i.jsx)(n.code,{children:"--verbose"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"near-sdk-js checkTypescript src/main.ts --verbose true\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Response:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npx near-sdk-js checkTypescript src/index.ts\n[checkTypescript] \u203a \u2026  awaiting  Typechecking src/index.ts with tsc...\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"create-js-file",children:(0,i.jsx)(n.code,{children:"near-sdk-js createJsFileWithRollup"})}),"\n",(0,i.jsx)(n.p,{children:"Create an intermediate JavaScript file for later processing with QJSC."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["arguments: ",(0,i.jsx)(n.code,{children:"[source]"})," ",(0,i.jsx)(n.code,{children:"[target]"})]}),"\n",(0,i.jsxs)(n.li,{children:["options: ",(0,i.jsx)(n.code,{children:"--verbose"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"near-sdk-js createJsFileWithRollup src/main.ts out/main.js --verbose true\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Response:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npx near-sdk-js createJsFileWithRollup src/index.ts\n[createJsFileWithRollup] \u203a \u2026  awaiting  Creating src/index.ts file with Rollup...\n"})}),"\n",(0,i.jsx)(n.h3,{id:"transpile-js-to-wasm",children:(0,i.jsx)(n.code,{children:"near-sdk-js transpileJsAndBuildWasm"})}),"\n",(0,i.jsx)(n.p,{children:"Create an intermediate JavaScript file for later processing with QJSC."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["arguments: ",(0,i.jsx)(n.code,{children:"[source]"})," ",(0,i.jsx)(n.code,{children:"[target]"})]}),"\n",(0,i.jsxs)(n.li,{children:["options: ",(0,i.jsx)(n.code,{children:"--verbose"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"near-sdk-js transpileJsAndBuildWasm src/main.js out/main.wasm --verbose true\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Response:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npx near-sdk-js transpileJsAndBuildWasm\n[transpileJsAndBuildWasm] \u203a \u2714  success   Generated build/contract.wasm contract successfully!\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},63459:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/windows-quickedit-mode-e412732b3a729c9ff17225591ab7bc6e.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>c});var i=s(67294);const l={},r=i.createContext(l);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);