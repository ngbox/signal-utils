"use strict";(self.webpackChunksignal_utils_nx=self.webpackChunksignal_utils_nx||[]).push([[146],{30:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),i=["components"],o={sidebar_position:2},s="createInterval",c={unversionedId:"signal-creators/create-interval",id:"signal-creators/create-interval",title:"createInterval",description:"createInterval function generates a read-only signal that emits values at a regular interval. This is useful for scenarios where you want to receive updates or triggers periodically.",source:"@site/docs/signal-creators/create-interval.md",sourceDirName:"signal-creators",slug:"/signal-creators/create-interval",permalink:"/signal-utils/signal-creators/create-interval",draft:!1,editUrl:"https://github.com/ngbox/signal-utils/tree/main/apps/docs/docs/signal-creators/create-interval.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"fromAsync",permalink:"/signal-utils/signal-creators/fromAsync"}},u={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns CreateIntervalResponse",id:"returns-createintervalresponse",level:2},{value:"Example",id:"example",level:2},{value:"Buffered stock price history",id:"buffered-stock-price-history",level:3}],d={toc:p},v="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)(v,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"createinterval"},"createInterval"),(0,l.kt)("code",null,"createInterval")," function generates a read-only signal that emits values at a regular interval. This is useful for scenarios where you want to receive updates or triggers periodically.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"createInterval(period = 0, initialValue = 0, options: SignalIntervalOptions = {}): CreateIntervalResponse\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"period")),(0,l.kt)("td",null," The time interval (in milliseconds) between each emitted value")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"initialValue")),(0,l.kt)("td",null,"The initial value to emit before starting the regular interval emissions. Optional. Default is ",(0,l.kt)("code",null,"0"))))),(0,l.kt)("h2",{id:"returns-createintervalresponse"},"Returns CreateIntervalResponse"),(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"interval: Signal<boolean>")),(0,l.kt)("td",null," A read-only signal that emits values at a regular interval.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"resetInterval: function")),(0,l.kt)("td",null,"A function that resets the interval whenever it is called.")))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("h3",{id:"buffered-stock-price-history"},"Buffered stock price history"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const { interval, resetInterval } = createInterval(0, 2500);\n\n// Access the current value of the interval\nconst currentValue = interval();\nconsole.log('Value:', interval());\n\neffect(() => {\n  const value = interval();\n  // do something...\n});\n\n// Restart the interval\nresetInterval();\n")))}f.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),v=a,f=p["".concat(s,".").concat(v)]||p[v]||d[v]||l;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=v;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"}}]);