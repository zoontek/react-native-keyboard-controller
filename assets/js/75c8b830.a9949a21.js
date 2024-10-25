"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7993],{17653:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=n(74848),r=n(28453);const i={sidebar_position:5,keywords:["react-native-keyboard-controller","KeyboardController","module","windowSoftInputMode","adjustResize","adjustPan"]},d="KeyboardController",s={id:"api/keyboard-controller",title:"KeyboardController",description:"KeyboardController is an object which has two functions:",source:"@site/versioned_docs/version-1.8.0/api/keyboard-controller.md",sourceDirName:"api",slug:"/api/keyboard-controller",permalink:"/react-native-keyboard-controller/docs/1.8.0/api/keyboard-controller",draft:!1,unlisted:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/versioned_docs/version-1.8.0/api/keyboard-controller.md",tags:[],version:"1.8.0",sidebarPosition:5,frontMatter:{sidebar_position:5,keywords:["react-native-keyboard-controller","KeyboardController","module","windowSoftInputMode","adjustResize","adjustPan"]},sidebar:"tutorialSidebar",previous:{title:"KeyboardGestureArea",permalink:"/react-native-keyboard-controller/docs/1.8.0/api/keyboard-gesture-area"},next:{title:"KeyboardEvents",permalink:"/react-native-keyboard-controller/docs/1.8.0/api/keyboard-events"}},a={},l=[{value:"Example",id:"example",level:2}];function c(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"keyboardcontroller",children:"KeyboardController"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"KeyboardController"})," is an object which has two functions:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"setInputMode"})," - used to change ",(0,t.jsx)(o.code,{children:"windowSoftInputMode"})," in runtime;"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"setDefaultMode"})," - used to restore default ",(0,t.jsx)(o.code,{children:"windowSoftInputMode"})," (which is declared in ",(0,t.jsx)(o.code,{children:"AndroidManifest.xml"}),");"]}),"\n"]}),"\n",(0,t.jsx)(o.admonition,{title:"Understanding how different modes works",type:"tip",children:(0,t.jsxs)(o.p,{children:["To understand the difference between ",(0,t.jsx)(o.code,{children:"adjustResize"}),"/",(0,t.jsx)(o.code,{children:"adjustPan"}),"/",(0,t.jsx)(o.code,{children:"adjustNothing"})," behavior you can look into this ",(0,t.jsx)(o.a,{href:"https://stackoverflow.com/a/71301500/9272042",children:"post"}),"."]})}),"\n",(0,t.jsx)(o.admonition,{type:"info",children:(0,t.jsxs)(o.p,{children:["A combination of ",(0,t.jsx)(o.code,{children:"adjustResize"})," + ",(0,t.jsx)(o.code,{children:"edge-to-edge"})," mode will result in behavior similar to ",(0,t.jsx)(o.code,{children:"adjustNothing"})," - in this case window is not resized automatically and content is not moved along with the keyboard position. And it becomes a responsibility of developer to handle keyboard appearance (thus it'll match iOS behavior)."]})}),"\n",(0,t.jsx)(o.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-ts",children:'import {\n  KeyboardController,\n  AndroidSoftInputModes,\n} from "react-native-keyboard-controller";\n\nexport const useResizeMode = () => {\n  useEffect(() => {\n    KeyboardController.setInputMode(\n      AndroidSoftInputModes.SOFT_INPUT_ADJUST_RESIZE,\n    );\n\n    return () => KeyboardController.setDefaultMode();\n  }, []);\n};\n'})})]})}function u(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>d,x:()=>s});var t=n(96540);const r={},i=t.createContext(r);function d(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);