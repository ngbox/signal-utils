"use strict";(self.webpackChunksignal_utils_nx=self.webpackChunksignal_utils_nx||[]).push([[7921],{9613:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(9496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=l(t),b=o,d=f["".concat(s,".").concat(b)]||f[b]||p[b]||a;return t?n.createElement(d,i(i({ref:r},c),{},{components:t})):n.createElement(d,i({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=b;var u={};for(var s in r)hasOwnProperty.call(r,s)&&(u[s]=r[s]);u.originalType=e,u[f]="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},1017:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>u,metadata:()=>l,toc:()=>f});var n=t(7366),o=t(4529),a=(t(9496),t(9613)),i=["components"],u={sidebar_position:6},s="bufferCount",l={unversionedId:"operators/buffer-count",id:"operators/buffer-count",title:"bufferCount",description:"bufferCount operator collects a specified number of consecutive values from the source signal and emits them as an array. This can be particularly useful when you want to group signal emits into fixed-size arrays for processing or presentation.",source:"@site/docs/operators/buffer-count.md",sourceDirName:"operators",slug:"/operators/buffer-count",permalink:"/signal-utils/docs/operators/buffer-count",draft:!1,editUrl:"https://github.com/ngbox/signal-utils/tree/main/apps/docs/docs/operators/buffer-count.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Operators",permalink:"/signal-utils/docs/category/operators"},next:{title:"debounceTime",permalink:"/signal-utils/docs/operators/debounce-time"}},c={},f=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Buffered stock price history",id:"buffered-stock-price-history",level:3}],p={toc:f},b="wrapper";function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)(b,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"buffercount"},"bufferCount"),(0,a.kt)("code",null,"bufferCount")," operator collects a specified number of consecutive values from the source signal and emits them as an array. This can be particularly useful when you want to group signal emits into fixed-size arrays for processing or presentation.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"bufferCount<T>(bufferSize: number, options: SignalBufferCountOptions<T> = {}): T[]\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"bufferSize")),(0,a.kt)("td",null," The number of consecutive values to collect before emitting a buffered array")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("h3",{id:"buffered-stock-price-history"},"Buffered stock price history"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"stockPrice: Signal<number> = signal(10);\nbufferedStockPriceHistory: Signal<number[]> = pipeSignal(\n  source,\n  bufferCount(3)\n); // Analyze or visualize the buffered stock price history\n")))}d.isMDXComponent=!0}}]);