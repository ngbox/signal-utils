"use strict";(self.webpackChunksignal_utils_nx=self.webpackChunksignal_utils_nx||[]).push([[146],{30:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:2},s="createInterval",c={unversionedId:"signal-creators/create-interval",id:"signal-creators/create-interval",title:"createInterval",description:"createInterval function generates a read-only signal that emits values at a regular interval. This is useful for scenarios where you want to receive updates or triggers periodically.",source:"@site/docs/signal-creators/create-interval.md",sourceDirName:"signal-creators",slug:"/signal-creators/create-interval",permalink:"/signal-utils/signal-creators/create-interval",draft:!1,editUrl:"https://github.com/ngbox/signal-utils/tree/main/apps/docs/docs/signal-creators/create-interval.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"fromAsync",permalink:"/signal-utils/signal-creators/fromAsync"},next:{title:"Dealing with Injection Context",permalink:"/signal-utils/dealing-with-injection-context"}},u={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns CreateIntervalResponse",id:"returns-createintervalresponse",level:2},{value:"Example",id:"example",level:2},{value:"Basic Usage",id:"basic-usage",level:3},{value:"Usage at outside of Injection Context",id:"usage-at-outside-of-injection-context",level:3}],d={toc:p},v="wrapper";function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)(v,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"createinterval"},"createInterval"),(0,l.kt)("code",null,"createInterval")," function generates a read-only signal that emits values at a regular interval. This is useful for scenarios where you want to receive updates or triggers periodically.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"createInterval(period = 0, initialValue = 0, options: SignalIntervalOptions = {}): CreateIntervalResponse\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"period")),(0,l.kt)("td",null," The time interval (in milliseconds) between each emitted value")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"initialValue")),(0,l.kt)("td",null,"The initial value to emit before starting the regular interval emissions. Optional. Default is ",(0,l.kt)("code",null,"0"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"options")),(0,l.kt)("td",null,"Optional. The combination of",(0,l.kt)("a",{target:"_blank",href:"https://angular.io/api/core/CreateEffectOptions"}," CreateEffectOptions ")," and",(0,l.kt)("a",{target:"_blank",href:"https://angular.io/api/core/CreateSignalOptions"}," CreateSignalOptions "),"(excluding the ",(0,l.kt)("code",null,"allowSignalWrites")," and ",(0,l.kt)("code",null,"manualCleanup")," properties)")))),(0,l.kt)("h2",{id:"returns-createintervalresponse"},"Returns CreateIntervalResponse"),(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"interval: Signal<boolean>")),(0,l.kt)("td",null," A read-only signal that emits values at a regular interval.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"resetInterval: function")),(0,l.kt)("td",null,"A function that resets the interval whenever it is called.")))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("h3",{id:"basic-usage"},"Basic Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"\u0152Component({\n  template: 'Interval: {{ intervalRef.interval() }}'\n})\nexport class TodoExampleComponent {\n  readonly intervalRef = createInterval(0, 2500);\n\n  constructor()\xa0{\n    readonly value = this.intervalRef.interval();\n    console.log('Value:', value);\n\n    effect(() => {\n      const value = this.intervalRef.interval();\n      // do something when it ticks...\n    });\n  }\n\n  reset()\xa0{\n    this.intervalRef.resetInterval();\n  }\n}\n\n")),(0,l.kt)("h3",{id:"usage-at-outside-of-injection-context"},"Usage at outside of Injection Context"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"@Injetable()\nexport class TodoExampleComponent {\n  private readonly injector = inject(Injector);\n\n  create(): CreateIntervalResponse {\n    return createInterval(0, 2500, { injector: this.injector });\n  }\n}\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"createInterval")," automatically clears itself when the given injector instance is destroy.")))}g.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),v=a,g=p["".concat(s,".").concat(v)]||p[v]||d[v]||l;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=v;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"}}]);