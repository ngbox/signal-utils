"use strict";(self.webpackChunksignal_utils_nx=self.webpackChunksignal_utils_nx||[]).push([[7988],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9725:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(7366),o=r(4529),i=(r(9496),r(9613)),l=["components"],a={sidebar_position:6},s="throttleTime",c={unversionedId:"operators/throttle-time",id:"operators/throttle-time",title:"throttleTime",description:"throttleTime operator limits the emission of values from the source signal based on a time window. It emits the first value in the window and then ignores subsequent values until the window expires.",source:"@site/docs/operators/throttle-time.md",sourceDirName:"operators",slug:"/operators/throttle-time",permalink:"/signal-utils/docs/operators/throttle-time",draft:!1,editUrl:"https://github.com/ngbox/signal-utils/tree/main/apps/docs/docs/operators/throttle-time.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"map",permalink:"/signal-utils/docs/operators/map"},next:{title:"Signal Creators",permalink:"/signal-utils/docs/category/signal-creators"}},u={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Throttle click emissions",id:"throttle-click-emissions",level:3}],m={toc:p},d="wrapper";function h(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"throttletime"},"throttleTime"),(0,i.kt)("code",null,"throttleTime")," operator limits the emission of values from the source signal based on a time window. It emits the first value in the window and then ignores subsequent values until the window expires.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"throttleTime<T>(throttleDuration: number, options: SignalThrottleTimeOptions<T> = {}): T\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"throttleDuration")),(0,i.kt)("td",null," The duration (in milliseconds) of the time window in which only the values will be emitted")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"options")),(0,i.kt)("td",null,"Optional. The combination of",(0,i.kt)("a",{target:"_blank",href:"https://angular.io/api/core/CreateEffectOptions"}," CreateEffectOptions ")," and",(0,i.kt)("a",{target:"_blank",href:"https://angular.io/api/core/CreateSignalOptions"}," CreateSignalOptions "),"(excluding the ",(0,i.kt)("code",null,"allowSignalWrites")," property)")))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("h3",{id:"throttle-click-emissions"},"Throttle click emissions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"clickCount = signal(0);\nthrottledClickCount: Signal<number> = pipeSignal(\n  clickCount,\n  throttleTime(1000)\n); // to every 1000 milliseconds\n")))}h.isMDXComponent=!0}}]);