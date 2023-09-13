"use strict";(self.webpackChunksignal_utils_nx=self.webpackChunksignal_utils_nx||[]).push([[2506],{4494:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),l=["components"],i={sidebar_position:6},s="map",p={unversionedId:"operators/map",id:"operators/map",title:"map",description:"map is an operator that let you transform the values emitted by the source signal. It takes each value, applies a provided function to it, and emits the result as a new value in the target signal.",source:"@site/docs/operators/map.md",sourceDirName:"operators",slug:"/operators/map",permalink:"/docs/operators/map",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/operators/map.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"filter",permalink:"/docs/operators/filter"},next:{title:"throttleTime",permalink:"/docs/operators/throttle-time"}},u={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Calculate the square of the source",id:"calculate-the-square-of-the-source",level:3}],m={toc:c},d="wrapper";function f(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)(d,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"map"},"map"),(0,o.kt)("code",null,"map")," is an operator that let you transform the values emitted by the source signal. It takes each value, applies a provided function to it, and emits the result as a new value in the target signal.",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"map<T, K>(mapFn: (value: T) => K, options: SignalMapOptions<K> = {}): K\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"mapFn")),(0,o.kt)("td",null,"The callback to transform the emitted values from the source signal.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"options")),(0,o.kt)("td",null,"Optional. The combination of",(0,o.kt)("a",{target:"_blank",href:"https://angular.io/api/core/CreateEffectOptions"}," CreateEffectOptions ")," and",(0,o.kt)("a",{target:"_blank",href:"https://angular.io/api/core/CreateSignalOptions"}," CreateSignalOptions "),"(excluding the ",(0,o.kt)("code",null,"allowSignalWrites")," property)")))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("h3",{id:"calculate-the-square-of-the-source"},"Calculate the square of the source"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"source = signal(10);\nsquare = pipeSignal(source, map(val) => val * val); // 100\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"map")," doesn't track the changes of any signals used in the given callback function.")))}f.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return r?a.createElement(f,l(l({ref:t},u),{},{components:r})):a.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);