"use strict";(self.webpackChunksignal_utils_nx=self.webpackChunksignal_utils_nx||[]).push([[9514,9694],{2551:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ce});var a=n(9496),r=n(5924),l=n(8794),o=n(1280),i=n(4674),c=n(8315),d=n(4116),s=n(9073),m=n(5896),u=n(4409),b=n(8247),p=n(3600);const h={backToTopButton:"backToTopButton_SwiI",backToTopButtonShow:"backToTopButtonShow_EGfi"};function v(){var e=function(e){var t=e.threshold,n=(0,a.useState)(!1),r=n[0],l=n[1],o=(0,a.useRef)(!1),i=(0,b.Ct)(),c=i.startScroll,d=i.cancelScroll;return(0,b.RF)((function(e,n){var a=e.scrollY,r=null==n?void 0:n.scrollY;r&&(o.current?o.current=!1:a>=r?(d(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((function(e){e.location.hash&&(o.current=!0,l(!1))})),{shown:r,scrollToTop:function(){return c(0)}}}({threshold:300}),t=e.shown,n=e.scrollToTop;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",o.k.common.backToTopButton,h.backToTopButton,t&&h.backToTopButtonShow),type:"button",onClick:n})}var E=n(3442),f=n(7845),g=n(1503),k=n(5503),_=n(7366);function C(e){return a.createElement("svg",(0,_.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const S={collapseSidebarButton:"collapseSidebarButton_OjQX",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_GtJL"};function I(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",S.collapseSidebarButton),onClick:t},a.createElement(C,{className:S.collapseSidebarButtonIcon}))}var N=n(8960),Z=n(4529),x=n(9651),T=Symbol("EmptyContext"),B=a.createContext(T);function y(e){var t=e.children,n=(0,a.useState)(null),r=n[0],l=n[1],o=(0,a.useMemo)((function(){return{expandedItem:r,setExpandedItem:l}}),[r]);return a.createElement(B.Provider,{value:o},t)}var w=n(9411),L=n(1986),A=n(8253),M=n(582),H=["item","onItemClick","activePath","level","index"];function P(e){var t=e.categoryLabel,n=e.onClick;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function F(e){var t=e.item,n=e.onItemClick,l=e.activePath,i=e.level,d=e.index,s=(0,Z.Z)(e,H),m=t.items,u=t.label,b=t.collapsible,p=t.className,h=t.href,v=(0,g.L)().docs.sidebar.autoCollapseCategories,E=function(e){var t=(0,M.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(t),f=(0,c._F)(t,l),k=(0,L.Mg)(h,l),C=(0,w.u)({initialState:function(){return!!b&&(!f&&t.collapsed)}}),S=C.collapsed,I=C.setCollapsed,N=function(){var e=(0,a.useContext)(B);if(e===T)throw new x.i6("DocSidebarItemsExpandedStateProvider");return e}(),y=N.expandedItem,F=N.setExpandedItem,W=function(e){void 0===e&&(e=!S),F(e?null:d),I(e)};return function(e){var t=e.isActive,n=e.collapsed,r=e.updateCollapsed,l=(0,x.D9)(t);(0,a.useEffect)((function(){t&&!l&&n&&r(!1)}),[t,l,n,r])}({isActive:f,collapsed:S,updateCollapsed:W}),(0,a.useEffect)((function(){b&&null!=y&&y!==d&&v&&I(!0)}),[b,y,d,I,v]),a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":S},p)},a.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k})},a.createElement(A.Z,(0,_.Z)({className:(0,r.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":f}),onClick:b?function(e){null==n||n(t),h?W(!1):(e.preventDefault(),W())}:function(){null==n||n(t)},"aria-current":k?"page":void 0,"aria-expanded":b?!S:void 0,href:b?null!=E?E:"#":E},s),u),h&&b&&a.createElement(P,{categoryLabel:u,onClick:function(e){e.preventDefault(),W()}})),a.createElement(w.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:S},a.createElement(J,{items:m,tabIndex:S?-1:0,onItemClick:n,activePath:l,level:i+1})))}var W=n(7855),R=n(3230);const D={menuExternalLink:"menuExternalLink_sXBY"};var z=["item","onItemClick","activePath","level","index"];function Y(e){var t=e.item,n=e.onItemClick,l=e.activePath,i=e.level,d=(e.index,(0,Z.Z)(e,z)),s=t.href,m=t.label,u=t.className,b=t.autoAddBaseUrl,p=(0,c._F)(t,l),h=(0,W.Z)(s);return a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",u),key:m},a.createElement(A.Z,(0,_.Z)({className:(0,r.Z)("menu__link",!h&&D.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:b,"aria-current":p?"page":void 0,to:s},h&&{onClick:n?function(){return n(t)}:void 0},d),m,!h&&a.createElement(R.Z,null)))}const q={menuHtmlItem:"menuHtmlItem_ovzb"};function G(e){var t=e.item,n=e.level,l=e.index,i=t.value,c=t.defaultStyle,d=t.className;return a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(n),c&&[q.menuHtmlItem,"menu__list-item"],d),key:l,dangerouslySetInnerHTML:{__html:i}})}var Q=["item"];function U(e){var t=e.item,n=(0,Z.Z)(e,Q);switch(t.type){case"category":return a.createElement(F,(0,_.Z)({item:t},n));case"html":return a.createElement(G,(0,_.Z)({item:t},n));default:return a.createElement(Y,(0,_.Z)({item:t},n))}}var V=["items"];function X(e){var t=e.items,n=(0,Z.Z)(e,V);return a.createElement(y,null,t.map((function(e,t){return a.createElement(U,(0,_.Z)({key:t,item:e,index:t},n))})))}const J=(0,a.memo)(X),K={menu:"menu_nHh4",menuWithAnnouncementBar:"menuWithAnnouncementBar_oaRJ"};function O(e){var t=e.path,n=e.sidebar,l=e.className,i=function(){var e=(0,N.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,b.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}();return a.createElement("nav",{className:(0,r.Z)("menu thin-scrollbar",K.menu,i&&K.menuWithAnnouncementBar,l)},a.createElement("ul",{className:(0,r.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(J,{items:n,activePath:t,level:1})))}const j="sidebar_x_M3",$="sidebarWithHideableNavbar_Bq0R",ee="sidebarHidden_AidI",te="sidebarLogo_cuM5";function ne(e){var t=e.path,n=e.sidebar,l=e.onCollapse,o=e.isHidden,i=(0,g.L)(),c=i.navbar.hideOnScroll,d=i.docs.sidebar.hideable;return a.createElement("div",{className:(0,r.Z)(j,c&&$,o&&ee)},c&&a.createElement(k.Z,{tabIndex:-1,className:te}),a.createElement(O,{path:t,sidebar:n}),d&&a.createElement(I,{onClick:l}))}const ae=a.memo(ne);var re=n(7647),le=n(2531),oe=function(e){var t=e.sidebar,n=e.path,l=(0,le.e)();return a.createElement("ul",{className:(0,r.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(J,{items:t,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function ie(e){return a.createElement(re.Zo,{component:oe,props:e})}const ce=a.memo(ie);function de(e){var t=(0,f.i)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(ae,e),r&&a.createElement(ce,e))}const se={expandButton:"expandButton_qin9",expandButtonIcon:"expandButtonIcon_yk51"};function me(e){var t=e.toggleSidebar;return a.createElement("div",{className:se.expandButton,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(C,{className:se.expandButtonIcon}))}const ue={docSidebarContainer:"docSidebarContainer_n1mR",docSidebarContainerHidden:"docSidebarContainerHidden_KwDQ"};function be(e){var t,n=e.children,r=(0,s.V)();return a.createElement(a.Fragment,{key:null!=(t=null==r?void 0:r.name)?t:"noSidebar"},n)}function pe(e){var t=e.sidebar,n=e.hiddenSidebarContainer,l=e.setHiddenSidebarContainer,i=(0,E.TH)().pathname,c=(0,a.useState)(!1),d=c[0],s=c[1],m=(0,a.useCallback)((function(){d&&s(!1),l((function(e){return!e}))}),[l,d]);return a.createElement("aside",{className:(0,r.Z)(o.k.docs.docSidebarContainer,ue.docSidebarContainer,n&&ue.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(ue.docSidebarContainer)&&n&&s(!0)}},a.createElement(be,null,a.createElement(de,{sidebar:t,path:i,onCollapse:m,isHidden:d})),d&&a.createElement(me,{toggleSidebar:m}))}const he={docMainContainer:"docMainContainer_TRfm",docMainContainerEnhanced:"docMainContainerEnhanced_wYdS",docItemWrapperEnhanced:"docItemWrapperEnhanced_nssv"};function ve(e){var t=e.hiddenSidebarContainer,n=e.children,l=(0,s.V)();return a.createElement("main",{className:(0,r.Z)(he.docMainContainer,(t||!l)&&he.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",he.docItemWrapper,t&&he.docItemWrapperEnhanced)},n))}const Ee={docPage:"docPage_X6Qn",docsWrapper:"docsWrapper_iTwe"};function fe(e){var t=e.children,n=(0,s.V)(),r=(0,a.useState)(!1),l=r[0],o=r[1];return a.createElement(m.Z,{wrapperClassName:Ee.docsWrapper},a.createElement(v,null),a.createElement("div",{className:Ee.docPage},n&&a.createElement(pe,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),a.createElement(ve,{hiddenSidebarContainer:l},t)))}var ge=n(9694),ke=n(2227);function _e(e){var t=e.versionMetadata;return a.createElement(a.Fragment,null,a.createElement(ke.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),a.createElement(l.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Ce(e){var t=e.versionMetadata,n=(0,c.hI)(e);if(!n)return a.createElement(ge.default,null);var i=n.docElement,m=n.sidebarName,u=n.sidebarItems;return a.createElement(a.Fragment,null,a.createElement(_e,e),a.createElement(l.FG,{className:(0,r.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(d.q,{version:t},a.createElement(s.b,{name:m,items:u},a.createElement(fe,null,i)))))}},9694:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(9496),r=n(4409),l=n(8794),o=n(5896);function i(){return a.createElement(a.Fragment,null,a.createElement(l.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(o.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);