"use strict";(self.webpackChunksignal_utils_nx=self.webpackChunksignal_utils_nx||[]).push([[7162],{9598:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],l={sidebar_position:1},s="Getting Started",u={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Welcome to the documentation for Signal Utils! This guide will help you get started with using the library to work with signals in your Angular applications.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Operators",permalink:"/docs/category/operators"}},c={},p=[{value:"Installation",id:"installation",level:2},{value:"Using Signal Operators",id:"using-signal-operators",level:2},{value:"Additional Resources",id:"additional-resources",level:2}],g={toc:p},d="wrapper";function f(t){var e=t.components,r=(0,i.Z)(t,o);return(0,a.kt)(d,(0,n.Z)({},g,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Welcome to the documentation for Signal Utils! This guide will help you get started with using the library to work with signals in your Angular applications."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"To start using Your Signal Library in your Angular project, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the library using npm or yarn:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"}," npm install ng-signal-utils\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"}," yarn add ng-signal-utils\n")),(0,a.kt)("h2",{id:"using-signal-operators"},"Using Signal Operators"),(0,a.kt)("p",null,"Signal Utils provides operators that allow you to transform, filter, debounce, and more, just like in RxJS. Here's an example using the ",(0,a.kt)("code",null,"filter")," operator."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"userActivity = signal(0);\nfilteredActivity = pipeSignal(userActivity, filter((activity) => activity !== 'Inactive');\n")),(0,a.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,a.kt)("a",{target:"_blank",href:"https://github.com/ngbox/signal-utils"}," Github ")," ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("a",{target:"_blank",href:"https://github.com/ngbox/signal-utils"}," Medium -link will be added- "))}f.isMDXComponent=!0},3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>f});var n=r(7294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var s=n.createContext({}),u=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},p="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,a=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),p=u(r),d=i,f=p["".concat(s,".").concat(d)]||p[d]||g[d]||a;return r?n.createElement(f,o(o({ref:e},c),{},{components:r})):n.createElement(f,o({ref:e},c))}));function f(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[p]="string"==typeof t?t:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);