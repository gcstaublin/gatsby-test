webpackJsonp([0xd2a57dc1d883],{66:function(e,n){"use strict";function t(e,n,t){var o=r.map(function(t){if(t.plugin[e]){var o=t.plugin[e](n,t.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:t?[t]:[]}function o(e,n,t){return r.reduce(function(t,o){return o.plugin[e]?t.then(function(){return o.plugin[e](n,o.options)}):t},Promise.resolve())}n.__esModule=!0,n.apiRunner=t,n.apiRunnerAsync=o;var r=[]},176:function(e,n,t){"use strict";var o;n.components={"component---src-pages-index-js":t(292),"component---src-pages-404-js":t(290),"component---src-pages-page-2-js":t(294),"component---src-pages-links-links-jsx":t(293),"component---src-pages-tokens-color-jsx":t(295),"component---src-pages-buttons-buttons-jsx":t(291)},n.json=(o={"layout-index.json":t(22),"index.json":t(299)},o["layout-index.json"]=t(22),o["404.json"]=t(296),o["layout-index.json"]=t(22),o["page-2.json"]=t(301),o["layout-index.json"]=t(22),o["404-html.json"]=t(297),o["layout-index.json"]=t(22),o["links-links.json"]=t(300),o["layout-index.json"]=t(22),o["tokens-color.json"]=t(302),o["layout-index.json"]=t(22),o["buttons-buttons.json"]=t(298),o),n.layouts={"component---src-layouts-index-js":t(289)}},177:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function u(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s=t(2),c=o(s),l=t(5),f=o(l),p=t(113),d=o(p),h=t(48),m=o(h),g=t(66),y=function(e){var n=e.children;return c.default.createElement("div",null,n())},v=function(e){function n(t){r(this,n);var o=u(this,e.call(this));return o.state={location:t.location,pageResources:d.default.getResourcesForPathname(t.location.pathname)},o}return a(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var t=d.default.getResourcesForPathname(e.location.pathname);t?this.setState({location:e.location,pageResources:t}):d.default.getResourcesForPathname(e.location.pathname,function(t){n.setState({location:e.location,pageResources:t})})}},n.prototype.componentDidMount=function(){var e=this;m.default.on("onPostLoadPageResources",function(n){n.page.path===d.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path))))},n.prototype.render=function(){var e=(0,g.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources})}),n=e[0];return this.props.page?this.state.pageResources?n||(0,s.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?n||(0,s.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:y,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(c.default.Component);v.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},n.default=v,e.exports=n.default},48:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(319),u=o(r),a=(0,u.default)();e.exports=a},178:function(e,n,t){"use strict";var o=t(65),r={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var u=decodeURIComponent(t),a=u.slice(n.length);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),r[a])return r[a];var i=void 0;return e.some(function(e){if(e.matchPath){if((0,o.matchPath)(a,{path:e.path})||(0,o.matchPath)(a,{path:e.matchPath}))return i=e,r[a]=e,!0}else{if((0,o.matchPath)(a,{path:e.path,exact:!0}))return i=e,r[a]=e,!0;if((0,o.matchPath)(a,{path:e.path+"index.html"}))return i=e,r[a]=e,!0}return!1}),i}}},179:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(90),u=o(r),a=t(66),i=(0,a.apiRunner)("replaceHistory"),s=i[0],c=s||(0,u.default)();e.exports=c},297:function(e,n,t){t(8),e.exports=function(e){return t.e(0xa2868bfb69fc,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(310)})})}},296:function(e,n,t){t(8),e.exports=function(e){return t.e(0xe70826b53c04,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(311)})})}},298:function(e,n,t){t(8),e.exports=function(e){return t.e(0x72e1b545acdf,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(312)})})}},299:function(e,n,t){t(8),e.exports=function(e){return t.e(0x81b8806e4260,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(313)})})}},22:function(e,n,t){t(8),e.exports=function(e){return t.e(60335399758886,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(92)})})}},300:function(e,n,t){t(8),e.exports=function(e){return t.e(0x734895462966,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(314)})})}},301:function(e,n,t){t(8),e.exports=function(e){return t.e(0x7b71d9db271c,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(315)})})}},302:function(e,n,t){t(8),e.exports=function(e){return t.e(90582511597721,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(316)})})}},289:function(e,n,t){t(8),e.exports=function(e){return t.e(0x67ef26645b2a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(180)})})}},113:function(e,n,t){(function(n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(2),u=(o(r),t(178)),a=o(u),i=t(48),s=o(i),c=void 0,l={},f={},p={},d={},h={},m=[],g=[],y={},v=[],R={},x=function(e){return e&&e.default||e},j=void 0,b=!0;j=t(181)({getNextQueuedResources:function(){return v.slice(-1)[0]},createResourceDownload:function(e){P(e,function(){v=v.filter(function(n){return n!==e}),j.onResourcedFinished(e)})}}),s.default.on("onPreLoadPageResources",function(e){j.onPreLoadPageResources(e)}),s.default.on("onPostLoadPageResources",function(e){j.onPostLoadPageResources(e)});var w=function(e,n){return R[e]>R[n]?1:R[e]<R[n]?-1:0},_=function(e,n){return y[e]>y[n]?1:y[e]<y[n]?-1:0},P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(d[e])n.nextTick(function(){t(null,d[e])});else{var o="component---"===e.slice(0,12)?f.components[e]||f.layouts[e]:f.json[e];o(function(n,o){d[e]=o,t(n,o)})}},k=function(e,t){h[e]?n.nextTick(function(){t(null,h[e])}):P(e,function(n,o){if(n)t(n);else{var r=x(o());h[e]=r,t(n,r)}})},C=1,N={empty:function(){g=[],y={},R={},v=[],m=[]},addPagesArray:function(e){m=e;var n="";n="/gatsby-test",c=(0,a.default)(e,n)},addDevRequires:function(e){l=e},addProdRequires:function(e){f=e},dequeue:function(e){return g.pop()},enqueue:function(e){if(!m.some(function(n){return n.path===e}))return!1;var n=1/C;C+=1,y[e]?y[e]+=1:y[e]=1,N.has(e)||g.unshift(e),g.sort(_);var t=c(e);return t.jsonName&&(R[t.jsonName]?R[t.jsonName]+=1+n:R[t.jsonName]=1+n,v.indexOf(t.jsonName)!==-1||d[t.jsonName]||v.unshift(t.jsonName)),t.componentChunkName&&(R[t.componentChunkName]?R[t.componentChunkName]+=1+n:R[t.componentChunkName]=1+n,v.indexOf(t.componentChunkName)!==-1||d[t.jsonName]||v.unshift(t.componentChunkName)),v.sort(w),j.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:v,resourcesCount:R}},getPages:function(){return{pathArray:g,pathCount:y}},getPage:function(e){return c(e)},has:function(e){return g.some(function(n){return n===e})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};b&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(c(e)||navigator.serviceWorker.getRegistrations().then(function(e){for(var n=e,t=Array.isArray(n),o=0,n=t?n:n[Symbol.iterator]();;){var r;if(t){if(o>=n.length)break;r=n[o++]}else{if(o=n.next(),o.done)break;r=o.value}var u=r;u.unregister()}window.location.reload()})),b=!1;var o=c(e);if(!o)return void console.log("A page wasn't found for \""+e+'"');if(e=o.path,p[e])return n.nextTick(function(){t(p[e]),s.default.emit("onPostLoadPageResources",{page:o,pageResources:p[e]})}),p[e];s.default.emit("onPreLoadPageResources",{path:e});var r=void 0,u=void 0,a=void 0,i=function(){if(r&&u&&(!o.layoutComponentChunkName||a)){p[e]={component:r,json:u,layout:a,page:o};var n={component:r,json:u,layout:a,page:o};t(n),s.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return k(o.componentChunkName,function(e,n){e&&console.log("Loading the component for "+o.path+" failed"),r=n,i()}),k(o.jsonName,function(e,n){e&&console.log("Loading the JSON for "+o.path+" failed"),u=n,i()}),void(o.layoutComponentChunkName&&k(o.layoutComponentChunkName,function(e,n){e&&console.log("Loading the Layout for "+o.path+" failed"),a=n,i()}))},peek:function(e){return g.slice(-1)[0]},length:function(){return g.length},indexOf:function(e){return g.length-g.indexOf(e)-1}};e.exports=N}).call(n,t(93))},317:function(e,n){e.exports=[{componentChunkName:"component---src-pages-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-page-2-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"page-2.json",path:"/page-2/"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"},{componentChunkName:"component---src-pages-links-links-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"links-links.json",path:"/links/links/"},{componentChunkName:"component---src-pages-tokens-color-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tokens-color.json",path:"/tokens/color/"},{componentChunkName:"component---src-pages-buttons-buttons-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"buttons-buttons.json",path:"/buttons/buttons/"}]},181:function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,t=e.createResourceDownload,o=[],r=[],u=function(){var e=n();e&&(r.push(e),t(e))},a=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&u()},0)};return{onResourcedFinished:function(e){a({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){a({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){a({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){a({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},u=t(66),a=t(2),i=o(a),s=t(145),c=o(s),l=t(65),f=t(306),p=t(272),d=o(p),h=t(179),m=o(h),g=t(48),y=o(g),v=t(317),R=o(v),x=t(318),j=o(x),b=t(177),w=o(b),_=t(176),P=o(_),k=t(113),C=o(k);t(262),window.___emitter=y.default,C.default.addPagesArray(R.default),C.default.addProdRequires(P.default),window.asyncRequires=P.default,window.___loader=C.default,window.matchPath=l.matchPath;var N=j.default.reduce(function(e,n){return e[n.fromPath]=n,e},{}),E=function(e){var n=N[e];return null!=n&&(m.default.replace(n.toPath),!0)};E(window.location.pathname),(0,u.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history||(window.___history=e,e.listen(function(e,n){E(e.pathname)||(0,u.apiRunner)("onRouteUpdate",{location:e,action:n})}))}function n(e,n){var t=n.location.pathname,o=(0,u.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:t});if(o.length>0)return o[0];if(e){var r=e.location.pathname;if(r===t)return!1}return!0}(0,u.apiRunner)("registerServiceWorker").length>0&&t(182);var o=function(e){function n(t){t.page.path===C.default.getPage(e).path&&(y.default.off("onPostLoadPageResources",n),clearTimeout(o),window.___history.push(e))}var t=N[e];if(t&&(e=t.toPath),window.location.pathname!==e){var o=setTimeout(function(){y.default.off("onPostLoadPageResources",n),y.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);C.default.getResourcesForPathname(e)?(clearTimeout(o),window.___history.push(e)):y.default.on("onPostLoadPageResources",n)}};window.___navigateTo=o,(0,u.apiRunner)("onRouteUpdate",{location:m.default.location,action:m.default.action});var s=(0,u.apiRunner)("replaceRouterComponent",{history:m.default})[0],p=function(e){var n=e.children;return i.default.createElement(l.Router,{history:m.default},n)},h=(0,l.withRouter)(w.default);C.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,a.createElement)(s?s:p,null,(0,a.createElement)(f.ScrollContext,{shouldUpdateScroll:n},(0,a.createElement)(h,{layout:!0,children:function(n){return(0,a.createElement)(l.Route,{render:function(t){e(t.history);var o=n?n:t;return C.default.getPage(o.location.pathname)?(0,a.createElement)(w.default,r({page:!0},o)):(0,a.createElement)(w.default,{location:{page:!0,pathname:"/404.html"}})}})}})))},o=(0,u.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,d.default)(function(){return c.default.render(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,u.apiRunner)("onInitialClientRender")})})})})},318:function(e,n){e.exports=[]},182:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(48),u=o(r),a="/";a="/gatsby-test/","serviceWorker"in navigator&&navigator.serviceWorker.register(a+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),u.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},272:function(e,n,t){!function(n,t){e.exports=t()}("domready",function(){var e,n=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",u=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return u||t.addEventListener(r,e=function(){for(t.removeEventListener(r,e),u=1;e=n.shift();)e()}),function(e){u?setTimeout(e,0):n.push(e)}})},8:function(e,n,t){"use strict";function o(){function e(e){var n=o.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,o=document.querySelector("head"),r=t.e,u=t.s;t.e=function(o,a){var i=!1,s=!0,c=function(e){a&&(a(t,e),a=null)};return!u&&n&&n[o]?void c(!0):(r(o,function(){i||(i=!0,s?setTimeout(function(){c()}):c())}),void(i||(s=!1,e(function(){i||(i=!0,u?u[o]=void 0:(n||(n={}),n[o]=!0),c(!0))}))))}}o()},319:function(e,n){function t(e){return e=e||Object.create(null),{on:function(n,t){(e[n]||(e[n]=[])).push(t)},off:function(n,t){e[n]&&e[n].splice(e[n].indexOf(t)>>>0,1)},emit:function(n,t){(e[n]||[]).map(function(e){e(t)}),(e["*"]||[]).map(function(e){e(n,t)})}}}e.exports=t},93:function(e,n){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(n){try{return l.call(null,e,0)}catch(n){return l.call(this,e,0)}}}function u(e){if(f===clearTimeout)return clearTimeout(e);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(n){try{return f.call(null,e)}catch(n){return f.call(this,e)}}}function a(){m&&d&&(m=!1,d.length?h=d.concat(h):g=-1,h.length&&i())}function i(){if(!m){var e=r(a);m=!0;for(var n=h.length;n;){for(d=h,h=[];++g<n;)d&&d[g].run();g=-1,n=h.length}d=null,m=!1,u(e)}}function s(e,n){this.fun=e,this.array=n}function c(){}var l,f,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(e){l=t}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(e){f=o}}();var d,h=[],m=!1,g=-1;p.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];h.push(new s(e,n)),1!==h.length||m||r(i)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},290:function(e,n,t){t(8),e.exports=function(e){return t.e(0x9427c64ab85d,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(187)})})}},291:function(e,n,t){t(8),e.exports=function(e){return t.e(0xc62b27733f16,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(188)})})}},292:function(e,n,t){t(8),e.exports=function(e){return t.e(35783957827783,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(189)})})}},293:function(e,n,t){t(8),e.exports=function(e){return t.e(0x8332304dde8c,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(190)})})}},294:function(e,n,t){t(8),e.exports=function(e){return t.e(0xc6c285f8fd10,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(191)})})}},295:function(e,n,t){t(8),e.exports=function(e){return t.e(7156432439544,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(192)})})}}});
//# sourceMappingURL=app-c4a6ac80e38a7b4da5a5.js.map