"use strict";(self.webpackChunksignal_utils_nx=self.webpackChunksignal_utils_nx||[]).push([[3302],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3455:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7366),a=r(4529),o=(r(9496),r(9613)),l=["components"],i={sidebar_position:6},s="delay",c={unversionedId:"operators/delay",id:"operators/delay",title:"delay",description:"delay operator introduces a specified delay between the emission of signals from the source. It delays the emission of each value by a defined duration, allowing you to control the timing of when values are processed downstream.",source:"@site/docs/operators/delay.md",sourceDirName:"operators",slug:"/operators/delay",permalink:"/signal-utils/docs/operators/delay",draft:!1,editUrl:"https://github.com/ngbox/signal-utils/tree/main/apps/docs/docs/operators/delay.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"debounceTime",permalink:"/signal-utils/docs/operators/debounce-time"},next:{title:"filter",permalink:"/signal-utils/docs/operators/filter"}},u={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Calculate the square of the source",id:"calculate-the-square-of-the-source",level:3}],d={toc:p},f="wrapper";function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"delay"},"delay"),(0,o.kt)("code",null,"delay")," operator introduces a specified delay between the emission of signals from the source. It delays the emission of each value by a defined duration, allowing you to control the timing of when values are processed downstream.",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"delay<T>(delayDuration: number, options: SignalDelayOptions<T> = {}): T\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"delayDuration")),(0,o.kt)("td",null,"The duration (in milliseconds) by which to delay the emissions")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"options")),(0,o.kt)("td",null,"Optional. The combination of",(0,o.kt)("a",{target:"_blank",href:"https://angular.io/api/core/CreateEffectOptions"}," CreateEffectOptions ")," and",(0,o.kt)("a",{target:"_blank",href:"https://angular.io/api/core/CreateSignalOptions"}," CreateSignalOptions "),"(excluding the ",(0,o.kt)("code",null,"allowSignalWrites")," property)")))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("h3",{id:"calculate-the-square-of-the-source"},"Calculate the square of the source"),(0,o.kt)("p",null,"Display the delayed progress after a 2000 millisecond delay."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"progress = signal(0);\ndelayedProgress = pipeSignal(source, delay(2000));\n")))}m.isMDXComponent=!0}}]);