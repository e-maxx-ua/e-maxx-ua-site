(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[35,514],{4608:function(e,t,n){"use strict";n.r(t);var a=n(7294),r=n(8115),c=n(4973);t.default=function(){return a.createElement(r.Z,{title:(0,c.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(c.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(c.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(c.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},6979:function(e,t,n){"use strict";var a=n(7294),r=n(4184),c=n.n(r),o=n(5977),i=n(2263);t.Z=function(e){var t=(0,a.useRef)(!1),r=(0,a.useRef)(null),l=(0,o.k6)(),s=(0,i.Z)().siteConfig,h=(void 0===s?{}:s).baseUrl,u=function(){t.current||(Promise.all([fetch(h+"search-doc.json").then((function(e){return e.json()})),fetch(h+"lunr-index.json").then((function(e){return e.json()})),Promise.all([n.e(432),n.e(452)]).then(n.bind(n,7780)),Promise.all([n.e(532),n.e(343)]).then(n.bind(n,3343))]).then((function(e){!function(e,t,n){new n({searchDocs:e,searchIndex:t,inputSelector:"#search_input_react",handleSelected:function(e,t,n){var a=h+n.url;document.createElement("a").href=a,l.push(a)}})}(e[0],e[1],e[2].default)})),t.current=!0)},d=(0,a.useCallback)((function(t){r.current.contains(t.target)||r.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return a.createElement("div",{className:"navbar__search",key:"search-box"},a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:d,onKeyDown:d,tabIndex:0}),a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:u,onMouseOver:u,onFocus:d,onBlur:d,ref:r}))}}}]);