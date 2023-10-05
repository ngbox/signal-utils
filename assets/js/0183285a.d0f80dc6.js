"use strict";(self.webpackChunksignal_utils_nx=self.webpackChunksignal_utils_nx||[]).push([[396],{5274:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=["components"],i={sidebar_position:6},s="filter",p={unversionedId:"operators/filter",id:"operators/filter",title:"filter",description:"filter operator filters values emitted by the source based on a provided predicate function.",source:"@site/docs/operators/filter.md",sourceDirName:"operators",slug:"/operators/filter",permalink:"/signal-utils/operators/filter",draft:!1,editUrl:"https://github.com/ngbox/signal-utils/tree/main/apps/docs/docs/operators/filter.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"delay",permalink:"/signal-utils/operators/delay"},next:{title:"map",permalink:"/signal-utils/operators/map"}},u={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Even Numbers",id:"even-numbers",level:3}],f={toc:c},d="wrapper";function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)(d,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"filter"},"filter"),(0,l.kt)("code",null,"filter")," operator filters values emitted by the source based on a provided predicate function.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"filter<T>(filterFn: (value: T) => boolean, options: SignalFilterOptions<T> = {}): T | null\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"predicate")),(0,l.kt)("td",null,"A predicate function that determines whether a signal should be emitted ",(0,l.kt)("code",null,"true")," or filtered out ",(0,l.kt)("code",null,"false"),".")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"options")),(0,l.kt)("td",null,"Optional. The combination of",(0,l.kt)("a",{target:"_blank",href:"https://angular.io/api/core/CreateEffectOptions"}," CreateEffectOptions ")," and",(0,l.kt)("a",{target:"_blank",href:"https://angular.io/api/core/CreateSignalOptions"}," CreateSignalOptions "),"(excluding the ",(0,l.kt)("code",null,"allowSignalWrites")," property)")))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("h3",{id:"even-numbers"},"Even Numbers"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"@Component({\n  template: `\n    <p>Interval: {{ intervalRef.interval() }} </p>\n    <p>Is even: {{ isEven() }} </p>\n  `\n})\nexport class IntervalComponent {\n  intervalRef = createInterval(0, 1000);\n  private isEven = this.signalPipe(this.intervalRef.interval(), filter((count) => count % 2 === 0);\n}\n\n")))}m.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,m=c["".concat(s,".").concat(d)]||c[d]||f[d]||l;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);