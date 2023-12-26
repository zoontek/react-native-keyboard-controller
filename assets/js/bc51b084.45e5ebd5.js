"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7750],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),s=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),y=n,m=u["".concat(d,".").concat(y)]||u[y]||p[y]||o;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8048:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:3,keywords:["react-native-keyboard-controller","interactive keyboard","dismiss keyboard via gesture","control keyboard position"]},i="Interactive Keyboard",l={unversionedId:"guides/interactive-keyboard",id:"version-1.10.0/guides/interactive-keyboard",title:"Interactive Keyboard",description:"This guide focuses on adding an ability to dismiss keyboard interactively. Below you can see a step by step guide which will explain how different pieces of the code work together.",source:"@site/versioned_docs/version-1.10.0/guides/interactive-keyboard.md",sourceDirName:"guides",slug:"/guides/interactive-keyboard",permalink:"/react-native-keyboard-controller/docs/guides/interactive-keyboard",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/versioned_docs/version-1.10.0/guides/interactive-keyboard.md",tags:[],version:"1.10.0",sidebarPosition:3,frontMatter:{sidebar_position:3,keywords:["react-native-keyboard-controller","interactive keyboard","dismiss keyboard via gesture","control keyboard position"]},sidebar:"tutorialSidebar",previous:{title:"Building own hook",permalink:"/react-native-keyboard-controller/docs/guides/building-own-hook"},next:{title:"Compatibility",permalink:"/react-native-keyboard-controller/docs/guides/compatibility"}},d={},s=[{value:"Android",id:"android",level:2},{value:"Start point",id:"start-point",level:3},{value:"Adding <code>KeyboardGestureArea</code>",id:"adding-keyboardgesturearea",level:3},{value:"Reacting on keyboard movement",id:"reacting-on-keyboard-movement",level:3},{value:"iOS",id:"ios",level:2},{value:"Full examples",id:"full-examples",level:2}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"interactive-keyboard"},"Interactive Keyboard"),(0,n.kt)("p",null,"This guide focuses on adding an ability to dismiss keyboard interactively. Below you can see a step by step guide which will explain how different pieces of the code work together."),(0,n.kt)("h2",{id:"android"},"Android"),(0,n.kt)("h3",{id:"start-point"},"Start point"),(0,n.kt)("p",null,"First of all let's consider a simple example and layout for typical chat application. Of course in real-application layout will be much more complex, but since it's a guide we will consider an over-simplified example to get a main idea."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"<ScrollView>\n  <Messages />\n</ScrollView>\n")),(0,n.kt)("h3",{id:"adding-keyboardgesturearea"},"Adding ",(0,n.kt)("inlineCode",{parentName:"h3"},"KeyboardGestureArea")),(0,n.kt)("p",null,"To make interactive dismissing work on Android we need to add ",(0,n.kt)("inlineCode",{parentName:"p"},"KeyboardGestureArea")," view. This view will track all gestures and will control the keyboard positioning. To customize the way how the keyboard will be dismissed you can specify ",(0,n.kt)("inlineCode",{parentName:"p"},"interpolator")," ",(0,n.kt)("a",{parentName:"p",href:"/react-native-keyboard-controller/docs/api/keyboard-gesture-area#interpolator"},"prop"),"."),(0,n.kt)("p",null,"In order to recognize all gestures on a ",(0,n.kt)("inlineCode",{parentName:"p"},"ScrollView")," we need to wrap a ",(0,n.kt)("inlineCode",{parentName:"p"},"ScrollView")," within ",(0,n.kt)("inlineCode",{parentName:"p"},"KeyboardGestureArea"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'// add-new-code\n<KeyboardGestureArea interpolator="ios">\n  <ScrollView>\n    <Messages />\n  </ScrollView>\n// add-new-code\n</KeyboardGestureArea>\n')),(0,n.kt)("h3",{id:"reacting-on-keyboard-movement"},"Reacting on keyboard movement"),(0,n.kt)("p",null,"Basically ",(0,n.kt)("inlineCode",{parentName:"p"},"useKeyboardAnimation"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"useReanimatedKeyboardAnimation")," will update animated values as keyboard moves. But if you want to differ plain keyboard movements (when it shows/hides because of ",(0,n.kt)("inlineCode",{parentName:"p"},"TextInput")," gets focused/unfocused) and interactive keyboard movement, then you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"useKeyboardHandler")," hook and specify ",(0,n.kt)("a",{parentName:"p",href:"/react-native-keyboard-controller/docs/api/hooks/keyboard/use-keyboard-handler/#oninteractive"},(0,n.kt)("inlineCode",{parentName:"a"},"onInteractive"))," handler as shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"useKeyboardHandler(\n  {\n    onInteractive: (e) => {\n      'worklet';\n      // your handler for interactive keyboard movement\n    }\n  },\n  []\n);\n")),(0,n.kt)("h2",{id:"ios"},"iOS"),(0,n.kt)("p",null,"The interactive keyboard dismissing works well out-of-box in ",(0,n.kt)("inlineCode",{parentName:"p"},"react-native")," using ",(0,n.kt)("inlineCode",{parentName:"p"},"InputAccessoryView"),". However if you are not satisfied with the usage of ",(0,n.kt)("inlineCode",{parentName:"p"},"InputAccessoryView")," - you can try to utilize the functionality of this library."),(0,n.kt)("p",null,"For that you'll need to follow a pattern from above and add ",(0,n.kt)("a",{parentName:"p",href:"/react-native-keyboard-controller/docs/api/hooks/keyboard/use-keyboard-handler/#oninteractive"},(0,n.kt)("inlineCode",{parentName:"a"},"onInteractive"))," handler if you are using ",(0,n.kt)("inlineCode",{parentName:"p"},"useKeyboardHandler")," hook. If you are using ",(0,n.kt)("inlineCode",{parentName:"p"},"useKeyboardAnimation")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"useReanimatedKeyboardAnimation")," hooks then no extra actions are required - these hooks will update its values automatically, when keyboard gets moved because of interactive dismissal."),(0,n.kt)("h2",{id:"full-examples"},"Full examples"),(0,n.kt)("p",null,"To see full examples of interactive keyboard handling you may have a look on corresponding ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kirillzyusko/react-native-keyboard-controller/blob/main/example/src/screens/Examples/InteractiveKeyboard/index.tsx"},"android")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kirillzyusko/react-native-keyboard-controller/blob/main/example/src/screens/Examples/InteractiveKeyboardIOS/index.tsx"},"ios")," example apps."))}p.isMDXComponent=!0}}]);