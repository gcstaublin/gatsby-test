webpackJsonp([7156432439544],{23:function(e,a,t){var l,n;!function(){"use strict";function t(){for(var e=[],a=0;a<arguments.length;a++){var l=arguments[a];if(l){var n=typeof l;if("string"===n||"number"===n)e.push(l);else if(Array.isArray(l))e.push(t.apply(null,l));else if("object"===n)for(var u in l)r.call(l,u)&&l[u]&&e.push(u)}}return e.join(" ")}var r={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=t:(l=[],n=function(){return t}.apply(a,l),!(void 0!==n&&(e.exports=n)))}()},38:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}a.__esModule=!0;var n=t(2),r=l(n),u=t(5),o=(l(u),t(23)),i=(l(o),t(44)),d=l(i),s=function(e){var a=e.children,t=e.pageModified,l=e.pageTitle;return r.default.createElement("div",null,r.default.createElement("p",{className:"unidocs-update"},r.default.createElement("span",{className:"unidocs-update__intro"},"Last Modified:"),t),r.default.createElement("h2",{className:"uni-headline--1 uni-margin--half--btm uni-margin--one-and-half--top"},l),r.default.createElement("div",{className:d.default.paragraph},a))};a.default=s,e.exports=a.default},44:function(e,a){e.exports={paragraph:"src-components-example-page-header----style-module---paragraph---Ji6J-"}},191:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}a.__esModule=!0,a.query=void 0;var n=t(2),r=l(n),u=t(45),o=(l(u),t(38)),i=l(o);a.default=function(e){var a=e.data;return r.default.createElement("div",null,r.default.createElement(i.default,{pageModified:"January 1, 1999",pageTitle:"Color Tokens, yo"},r.default.createElement("p",null,"Variables are a foundational building block of Uniform. Using uniform-ui-css (uniCSS) variables within your project ensures values are updated as they are updated or tweaked in accordance with Uniform’s guidelines. Keeping the uniCSS NPM package that lives within your project updated to the latest version helps ensure your interface stays compliant, reducing the amount of work you need to do."),r.default.createElement("p",null,"The v0.11.0 release of uniCSS made some wholesale changes to the naming convention for variables. All deprecated variables are outlined here. In most cases, we’ve also provided a reference to the new appropriate companion variable. However, there are some places where direct mapping does not exist, which will likely force you to make a difficult design decision or two.")),a.allColorsYaml.edges.map(function(e,a){var t=e.node;return r.default.createElement("article",{className:"unidocs-example__container color-block__section",key:a,id:t.name},r.default.createElement("h2",{className:"uni-headline--2 unidocs-example__hdr"},r.default.createElement("a",{className:"unidocs-example__hdr-link",href:"#"+t.name},"#"),t.name),r.default.createElement("div",{className:"unidocs-example__section unidocs-example__table"},r.default.createElement("table",{className:"unidocs-example__table--color--3"},r.default.createElement("thead",null,r.default.createElement("tr",null,r.default.createElement("th",null),r.default.createElement("th",null,"Variable Name"),r.default.createElement("th",null,"RGBa"))),r.default.createElement("tbody",null,t.colors.map(function(e,a){return r.default.createElement("tr",null,r.default.createElement("td",null,r.default.createElement("div",{style:{backgroundColor:"rgba("+e.value+")"}}," ")),r.default.createElement("td",null,e.sassVar),r.default.createElement("td",null,"rgba("+e.value+")"))})))))}))};a.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-tokens-color-jsx-c2525f652d60f12dcd6c.js.map