"use strict";(self.webpackChunksignal_utils_nx=self.webpackChunksignal_utils_nx||[]).push([[7918],{8995:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(7366),l=a(9496),r=a(5924),i=a(1280),o=a(8315),s=a(1986),c=a(8253),d=a(9325),m=a(4409);function u(e){return l.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const v={breadcrumbsContainer:"breadcrumbsContainer_KG2A",breadcrumbHomeIcon:"breadcrumbHomeIcon_mmf6"};function b(e){var t=e.children,a=e.href,n="breadcrumbs__link";return e.isLast?l.createElement("span",{className:n,itemProp:"name"},t):a?l.createElement(c.Z,{className:n,href:a,itemProp:"item"},l.createElement("span",{itemProp:"name"},t)):l.createElement("span",{className:n},t)}function p(e){var t=e.children,a=e.active,i=e.index,o=e.addMicrodata;return l.createElement("li",(0,n.Z)({},o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,l.createElement("meta",{itemProp:"position",content:String(i+1)}))}function f(){var e=(0,d.Z)("/");return l.createElement("li",{className:"breadcrumbs__item"},l.createElement(c.Z,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,r.Z)("breadcrumbs__link",v.breadcrumbsItemLink),href:e},l.createElement(u,{className:v.breadcrumbHomeIcon})))}function g(){var e=(0,o.s1)(),t=(0,s.Ns)();return e?l.createElement("nav",{className:(0,r.Z)(i.k.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l.createElement(f,null),e.map((function(t,a){var n=a===e.length-1;return l.createElement(p,{key:a,active:n,index:a,addMicrodata:!!t.href},l.createElement(b,{href:t.href,isLast:n},t.label))})))):null}},2082:(e,t,a)=>{a.r(t),a.d(t,{default:()=>J});var n=a(9496),l=a(8794),r=a(9651),i=n.createContext(null);function o(e){var t=e.children,a=function(e){return(0,n.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return n.createElement(i.Provider,{value:a},t)}function s(){var e=(0,n.useContext)(i);if(null===e)throw new r.i6("DocProvider");return e}function c(){var e,t=s(),a=t.metadata,r=t.frontMatter,i=t.assets;return n.createElement(l.d,{title:a.title,description:a.description,keywords:r.keywords,image:null!=(e=i.image)?e:r.image})}var d=a(5924),m=a(7845),u=a(8137);function v(){var e=s().metadata;return n.createElement(u.Z,{previous:e.previous,next:e.next})}var b=a(3213),p=a(2503),f=a(1280),g=a(4409);function h(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(g.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function E(e){var t=e.lastUpdatedBy;return n.createElement(g.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function L(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:f.k.common.lastUpdated},n.createElement(g.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(h,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(E,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var N=a(81),Z=a(3049);const C={lastUpdated:"lastUpdated_jUnV"};function _(e){return n.createElement("div",{className:(0,d.Z)(f.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(Z.Z,e)))}function k(e){var t=e.editUrl,a=e.lastUpdatedAt,l=e.lastUpdatedBy,r=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,d.Z)(f.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(N.Z,{editUrl:t})),n.createElement("div",{className:(0,d.Z)("col",C.lastUpdated)},(a||l)&&n.createElement(L,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function x(){var e=s().metadata,t=e.editUrl,a=e.lastUpdatedAt,l=e.formattedLastUpdatedAt,r=e.lastUpdatedBy,i=e.tags,o=i.length>0,c=!!(t||a||r);return o||c?n.createElement("footer",{className:(0,d.Z)(f.k.docs.docFooter,"docusaurus-mt-lg")},o&&n.createElement(_,{tags:i}),c&&n.createElement(k,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var T=a(9411),H=a(201),U=a(7366),y=a(4529);const A={tocCollapsibleButton:"tocCollapsibleButton_P7Vh",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_M4Rp"};var M=["collapsed"];function w(e){var t=e.collapsed,a=(0,y.Z)(e,M);return n.createElement("button",(0,U.Z)({type:"button"},a,{className:(0,d.Z)("clean-btn",A.tocCollapsibleButton,!t&&A.tocCollapsibleButtonExpanded,a.className)}),n.createElement(g.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const I={tocCollapsible:"tocCollapsible_o4yw",tocCollapsibleContent:"tocCollapsibleContent_b_m7",tocCollapsibleExpanded:"tocCollapsibleExpanded_Dn5j"};function B(e){var t=e.toc,a=e.className,l=e.minHeadingLevel,r=e.maxHeadingLevel,i=(0,T.u)({initialState:!0}),o=i.collapsed,s=i.toggleCollapsed;return n.createElement("div",{className:(0,d.Z)(I.tocCollapsible,!o&&I.tocCollapsibleExpanded,a)},n.createElement(w,{collapsed:o,onClick:s}),n.createElement(T.z,{lazy:!0,className:I.tocCollapsibleContent,collapsed:o},n.createElement(H.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const O={tocMobile:"tocMobile_ryg6"};function S(){var e=s(),t=e.toc,a=e.frontMatter;return n.createElement(B,{toc:t,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level,className:(0,d.Z)(f.k.docs.docTocMobile,O.tocMobile)})}var R=a(3045);function P(){var e=s(),t=e.toc,a=e.frontMatter;return n.createElement(R.Z,{toc:t,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level,className:f.k.docs.docTocDesktop})}var V=a(6720),D=a(9955);function z(e){var t,a,l,r,i=e.children,o=(t=s(),a=t.metadata,l=t.frontMatter,r=t.contentTitle,l.hide_title||void 0!==r?null:a.title);return n.createElement("div",{className:(0,d.Z)(f.k.docs.docMarkdown,"markdown")},o&&n.createElement("header",null,n.createElement(V.Z,{as:"h1"},o)),n.createElement(D.Z,null,i))}var F=a(8995);const j={docItemContainer:"docItemContainer_RXee",docItemCol:"docItemCol_TGuM"};function q(e){var t,a,l,r,i,o,c=e.children,u=(t=s(),a=t.frontMatter,l=t.toc,r=(0,m.i)(),i=a.hide_table_of_contents,o=!i&&l.length>0,{hidden:i,mobile:o?n.createElement(S,null):void 0,desktop:!o||"desktop"!==r&&"ssr"!==r?void 0:n.createElement(P,null)});return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.Z)("col",!u.hidden&&j.docItemCol)},n.createElement(b.Z,null),n.createElement("div",{className:j.docItemContainer},n.createElement("article",null,n.createElement(F.Z,null),n.createElement(p.Z,null),u.mobile,n.createElement(z,null,c),n.createElement(x,null)),n.createElement(v,null))),u.desktop&&n.createElement("div",{className:"col col--3"},u.desktop))}function J(e){var t="docs-doc-id-"+e.content.metadata.unversionedId,a=e.content;return n.createElement(o,{content:e.content},n.createElement(l.FG,{className:t},n.createElement(c,null),n.createElement(q,null,n.createElement(a,null))))}},8137:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7366),l=a(9496),r=a(4409),i=a(3467);function o(e){var t=e.previous,a=e.next;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&l.createElement(i.Z,(0,n.Z)({},t,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&l.createElement(i.Z,(0,n.Z)({},a,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},2503:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(9496),l=a(5924),r=a(4409),i=a(1280),o=a(4116);function s(e){var t=e.className,a=(0,o.E)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,i.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},3213:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(9496),l=a(5924),r=a(4206),i=a(8253),o=a(4409),s=a(5526),c=a(1280),d=a(8111),m=a(4116);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function b(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(i.Z,{to:a,onClick:l},n.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){var t,a=e.className,i=e.versionMetadata,o=(0,r.Z)().siteConfig.title,m=(0,s.gA)({failfast:!0}).pluginId,u=(0,d.J)(m).savePreferredVersionName,p=(0,s.Jo)(m),f=p.latestDocSuggestion,g=p.latestVersionSuggestion,h=null!=f?f:(t=g).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(a,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:o,versionMetadata:i})),n.createElement("div",{className:"margin-top--md"},n.createElement(b,{versionLabel:g.label,to:h.path,onClick:function(){return u(g.name)}})))}function f(e){var t=e.className,a=(0,m.E)();return a.banner?n.createElement(p,{className:t,versionMetadata:a}):null}},81:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(9496),l=a(4409),r=a(1280),i=a(7366),o=a(4529),s=a(5924);const c={iconEdit:"iconEdit_mDC9"};var d=["className"];function m(e){var t=e.className,a=(0,o.Z)(e,d);return n.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(c.iconEdit,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},n.createElement(m,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},3467:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(9496),l=a(5924),r=a(8253);function i(e){var t=e.permalink,a=e.title,i=e.subLabel,o=e.isNext;return n.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&n.createElement("div",{className:"pagination-nav__sublabel"},i),n.createElement("div",{className:"pagination-nav__label"},a))}},3045:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(7366),l=a(4529),r=a(9496),i=a(5924),o=a(201);const s={tableOfContents:"tableOfContents_d0mB",docItemContainer:"docItemContainer_KQur"};var c=["className"],d="table-of-contents__link toc-highlight",m="table-of-contents__link--active";function u(e){var t=e.className,a=(0,l.Z)(e,c);return r.createElement("div",{className:(0,i.Z)(s.tableOfContents,"thin-scrollbar",t)},r.createElement(o.Z,(0,n.Z)({},a,{linkClassName:d,linkActiveClassName:m})))}},201:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(7366),l=a(4529),r=a(9496),i=a(1503),o=["parentIndex"];function s(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),a=Array(7).fill(-1);t.forEach((function(e,t){var n=a.slice(2,e.level);e.parentIndex=Math.max.apply(Math,n),a[e.level]=t}));var n=[];return t.forEach((function(e){var a=e.parentIndex,r=(0,l.Z)(e,o);a>=0?t[a].children.push(r):n.push(r)})),n}function c(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return t.flatMap((function(e){var t=c({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[Object.assign({},e,{children:t})]:t}))}function d(e){var t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function m(e,t){var a,n,l=t.anchorTopOffset,r=e.find((function(e){return d(e).top>=l}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(r))?r:null!=(n=e[e.indexOf(r)-1])?n:null:null!=(a=e[e.length-1])?a:null}function u(){var e=(0,r.useRef)(0),t=(0,i.L)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function v(e){var t=(0,r.useRef)(void 0),a=u();(0,r.useEffect)((function(){if(!e)return function(){};var n=e.linkClassName,l=e.linkActiveClassName,r=e.minHeadingLevel,i=e.maxHeadingLevel;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),o=function(e){for(var t=e.minHeadingLevel,a=e.maxHeadingLevel,n=[],l=t;l<=a;l+=1)n.push("h"+l+".anchor");return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),s=m(o,{anchorTopOffset:a.current}),c=e.find((function(e){return s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===c)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,a])}function b(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(b,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}const p=r.memo(b);var f=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function g(e){var t=e.toc,a=e.className,o=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,b=void 0===u?void 0:u,g=e.minHeadingLevel,h=e.maxHeadingLevel,E=(0,l.Z)(e,f),L=(0,i.L)(),N=null!=g?g:L.tableOfContents.minHeadingLevel,Z=null!=h?h:L.tableOfContents.maxHeadingLevel,C=function(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return(0,r.useMemo)((function(){return c({toc:s(t),minHeadingLevel:a,maxHeadingLevel:n})}),[t,a,n])}({toc:t,minHeadingLevel:N,maxHeadingLevel:Z});return v((0,r.useMemo)((function(){if(m&&b)return{linkClassName:m,linkActiveClassName:b,minHeadingLevel:N,maxHeadingLevel:Z}}),[m,b,N,Z])),r.createElement(p,(0,n.Z)({toc:C,className:o,linkClassName:m},E))}},2650:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(9496),l=a(5924),r=a(8253);const i={tag:"tag_SE4r",tagRegular:"tagRegular_Agta",tagWithCount:"tagWithCount_fcvP"};function o(e){var t=e.permalink,a=e.label,o=e.count;return n.createElement(r.Z,{href:t,className:(0,l.Z)(i.tag,o?i.tagWithCount:i.tagRegular)},a,o&&n.createElement("span",null,o))}},3049:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(9496),l=a(5924),r=a(4409),i=a(2650);const o={tags:"tags_HS5Q",tag:"tag_JXJA"};function s(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(o.tags,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:o.tag},n.createElement(i.Z,{label:t,permalink:a}))}))))}}}]);