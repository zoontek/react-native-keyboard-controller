"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4545],{43577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=n(74848),a=n(28453),o=n(11470),i=n(19365);const l={sidebar_position:1,description:"Guide dedicated to installation process",keywords:["react-native-keyboard-controller","react-native keyboard","installation","setup","keyboard handling","keyboard animation","keyboard movement","troubleshooting"]},s="Installation",d={id:"installation",title:"Installation",description:"Guide dedicated to installation process",source:"@site/versioned_docs/version-1.14.0/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/react-native-keyboard-controller/docs/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/versioned_docs/version-1.14.0/installation.mdx",tags:[],version:"1.14.0",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Guide dedicated to installation process",keywords:["react-native-keyboard-controller","react-native keyboard","installation","setup","keyboard handling","keyboard animation","keyboard movement","troubleshooting"]},sidebar:"tutorialSidebar",next:{title:"Guides",permalink:"/react-native-keyboard-controller/docs/category/guides"}},c={},u=[{value:"Adding a library to the project",id:"adding-a-library-to-the-project",level:2},{value:"Linking",id:"linking",level:3},{value:"Expo",id:"expo",level:3},{value:"Adding provider",id:"adding-provider",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.h2,{id:"adding-a-library-to-the-project",children:"Adding a library to the project"}),"\n",(0,r.jsxs)(t.p,{children:["Install the ",(0,r.jsx)(t.code,{children:"react-native-keyboard-controller"})," package in your React Native project."]}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(i.A,{value:"yarn",label:"YARN",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"yarn add react-native-keyboard-controller\n"})})}),(0,r.jsx)(i.A,{value:"npm",label:"NPM",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"npm install react-native-keyboard-controller --save\n"})})})]}),"\n",(0,r.jsxs)(t.admonition,{type:"warning",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["Mandatory ",(0,r.jsx)(t.code,{children:"react-native-reanimated"})," dependency"]}),(0,r.jsxs)(t.p,{children:["This library requires ",(0,r.jsx)(t.code,{children:"react-native-reanimated"})," to work properly. If you don't have it in your project, you need to follow ",(0,r.jsx)(t.a,{href:"https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/#installation",children:"installation guide"})," and install it in your project before using this library."]})]}),"\n",(0,r.jsx)(t.h3,{id:"linking",children:"Linking"}),"\n",(0,r.jsxs)(t.p,{children:["This package supports ",(0,r.jsx)(t.a,{href:"https://github.com/react-native-community/cli/blob/master/docs/autolinking.md",children:"autolinking"}),"."]}),"\n",(0,r.jsx)(t.admonition,{title:"Pods update",type:"tip",children:(0,r.jsxs)(t.p,{children:["Don't forget to re-install ",(0,r.jsx)(t.code,{children:"pods"})," after adding the package and don't forget to re-assemble ",(0,r.jsx)(t.code,{children:"android"})," and ",(0,r.jsx)(t.code,{children:"ios"})," applications, since this library contains native code."]})}),"\n",(0,r.jsx)(t.h3,{id:"expo",children:"Expo"}),"\n",(0,r.jsxs)(t.p,{children:["This library has native code, so it does not work with ",(0,r.jsx)(t.em,{children:"Expo Go"})," but you can easily install it using a ",(0,r.jsx)(t.a,{href:"https://docs.expo.dev/development/getting-started/",children:"custom dev client"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"adding-provider",children:"Adding provider"}),"\n",(0,r.jsxs)(t.p,{children:["In order to use it you'll need to wrap your app with ",(0,r.jsx)(t.code,{children:"KeyboardProvider"})," component."]}),"\n",(0,r.jsx)(t.admonition,{title:"Why it's needed?",type:"info",children:(0,r.jsxs)(t.p,{children:["If you are bothered why it's needed, you can read more about it in ",(0,r.jsx)(t.a,{href:"/react-native-keyboard-controller/docs/recipes/platform-differences",children:"architecture"})," deep dive to understand all aspects of how this library works."]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { KeyboardProvider } from "react-native-keyboard-controller";\n\nexport default function App() {\n  return (\n    <KeyboardProvider>\n      {/* your main application code goes here */}\n    </KeyboardProvider>\n  );\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Congratulations! \ud83c\udf89 You've just finished installation process. Go to the ",(0,r.jsx)(t.a,{href:"/react-native-keyboard-controller/docs/guides/first-animation",children:"next section"})," to get more insights of what you can do using this library. \ud83d\ude0e"]}),"\n",(0,r.jsx)(t.admonition,{title:"Troubleshooting guide",type:"danger",children:(0,r.jsxs)(t.p,{children:["If you encounter some issues make sure to read the ",(0,r.jsx)(t.a,{href:"/react-native-keyboard-controller/docs/troubleshooting",children:"Troubleshooting"})," section."]})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var o=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(96540),a=n(34164),o=n(23104),i=n(56347),l=n(205),s=n(57485),d=n(31682),c=n(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[d,u]=b({queryString:n,groupId:a}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),v=(()=>{const e=d??m;return p({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{v&&s(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var f=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(74848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),c=e=>{const t=e.currentTarget,n=s.indexOf(t),a=l[n].value;a!==r&&(d(t),i(a))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>s.push(e),onKeyDown:u,onClick:c,...o,className:(0,a.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=m(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,y.jsx)(g,{...t,...e}),(0,y.jsx)(x,{...t,...e})]})}function k(e){const t=(0,f.A)();return(0,y.jsx)(j,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(96540);const a={},o=r.createContext(a);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);