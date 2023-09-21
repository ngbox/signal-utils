"use strict";(self.webpackChunksignal_utils_nx=self.webpackChunksignal_utils_nx||[]).push([[817],{4145:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7462),r=a(7294),i=a(6010),l=a(8015),s=a(9054),c=a(8407),o=a(8746),m=a(1402),d=a(1614);function u(e){return r.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const v={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function h(e){var t=e.children,a=e.href,n="breadcrumbs__link";return e.isLast?r.createElement("span",{className:n,itemProp:"name"},t):a?r.createElement(o.Z,{className:n,href:a,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:n},t)}function b(e){var t=e.children,a=e.active,l=e.index,s=e.addMicrodata;return r.createElement("li",(0,n.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,i.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,r.createElement("meta",{itemProp:"position",content:String(l+1)}))}function g(){var e=(0,m.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(o.Z,{"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,i.Z)("breadcrumbs__link",v.breadcrumbsItemLink),href:e},r.createElement(u,{className:v.breadcrumbHomeIcon})))}function p(){var e=(0,s.s1)(),t=(0,c.Ns)();return e?r.createElement("nav",{className:(0,i.Z)(l.k.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(g,null),e.map((function(t,a){var n=a===e.length-1;return r.createElement(b,{key:a,active:n,index:a,addMicrodata:!!t.href},r.createElement(h,{href:t.href,isLast:n},t.label))})))):null}},9242:(e,t,a)=>{a.r(t),a.d(t,{default:()=>I});var n=a(7294),r=a(6742),i=a(9054),l=a(1402),s=a(6010),c=a(8746),o=a(1699),m=a(1614);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){var t=e.href,a=e.children;return n.createElement(c.Z,{href:t,className:(0,s.Z)("card padding--lg",d.cardContainer)},a)}function v(e){var t=e.href,a=e.icon,r=e.title,i=e.description;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,s.Z)("text--truncate",d.cardTitle),title:r},a," ",r),i&&n.createElement("p",{className:(0,s.Z)("text--truncate",d.cardDescription),title:i},i))}function h(e){var t=e.item,a=(0,i.Wl)(t);return a?n.createElement(v,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,m.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function b(e){var t,a=e.item,r=(0,o.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.xz)(null!=(t=a.docId)?t:void 0);return n.createElement(v,{href:a.href,icon:r,title:a.label,description:null==l?void 0:l.description})}function g(e){var t=e.item;switch(t.type){case"link":return n.createElement(b,{item:t});case"category":return n.createElement(h,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function p(e){var t=e.className,a=(0,i.jA)();return n.createElement(E,{items:a.items,className:t})}function E(e){var t=e.items,a=e.className;if(!t)return n.createElement(p,e);var r=(0,i.MN)(t);return n.createElement("section",{className:(0,s.Z)("row",a)},r.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e}))})))}var f=a(6724),N=a(8554),Z=a(2826),k=a(4145),_=a(4055);const L={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};function T(e){var t=e.categoryGeneratedIndex;return n.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,l.Z)(t.image)})}function x(e){var t=e.categoryGeneratedIndex,a=(0,i.jA)();return n.createElement("div",{className:L.generatedIndexPage},n.createElement(N.Z,null),n.createElement(k.Z,null),n.createElement(Z.Z,null),n.createElement("header",null,n.createElement(_.Z,{as:"h1",className:L.title},t.title),t.description&&n.createElement("p",null,t.description)),n.createElement("article",{className:"margin-top--lg"},n.createElement(E,{items:a.items,className:L.list})),n.createElement("footer",{className:"margin-top--lg"},n.createElement(f.Z,{previous:t.navigation.previous,next:t.navigation.next})))}function I(e){return n.createElement(n.Fragment,null,n.createElement(T,e),n.createElement(x,e))}},6724:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7462),r=a(7294),i=a(1614),l=a(6010),s=a(8746);function c(e){var t=e.permalink,a=e.title,n=e.subLabel,i=e.isNext;return r.createElement(s.Z,{className:(0,l.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},n&&r.createElement("div",{className:"pagination-nav__sublabel"},n),r.createElement("div",{className:"pagination-nav__label"},a))}function o(e){var t=e.previous,a=e.next;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&r.createElement(c,(0,n.Z)({},t,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&r.createElement(c,(0,n.Z)({},a,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},2826:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),r=a(6010),i=a(1614),l=a(8015),s=a(6141);function c(e){var t=e.className,a=(0,s.E)();return a.badge?n.createElement("span",{className:(0,r.Z)(t,l.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},8554:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(7294),r=a(6010),i=a(6832),l=a(8746),s=a(1614),c=a(4452),o=a(8015),m=a(4049),d=a(6141);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(l.Z,{to:a,onClick:r},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function b(e){var t,a=e.className,l=e.versionMetadata,s=(0,i.Z)().siteConfig.title,d=(0,c.gA)({failfast:!0}).pluginId,u=(0,m.J)(d).savePreferredVersionName,b=(0,c.Jo)(d),g=b.latestDocSuggestion,p=b.latestVersionSuggestion,E=null!=g?g:(t=p).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,r.Z)(a,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:s,versionMetadata:l})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:p.label,to:E.path,onClick:function(){return u(p.name)}})))}function g(e){var t=e.className,a=(0,d.E)();return a.banner?n.createElement(b,{className:t,versionMetadata:a}):null}},4055:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),r=a(3366),i=a(7294),l=a(6010),s=a(1614),c=a(6793);const o={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};var m=["as","id"];function d(e){var t=e.as,a=e.id,d=(0,r.Z)(e,m),u=(0,c.L)().navbar.hideOnScroll;return"h1"!==t&&a?i.createElement(t,(0,n.Z)({},d,{className:(0,l.Z)("anchor",u?o.anchorWithHideOnScrollNavbar:o.anchorWithStickyNavbar),id:a}),d.children,i.createElement("a",{className:"hash-link",href:"#"+a,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(t,(0,n.Z)({},d,{id:void 0}))}}}]);