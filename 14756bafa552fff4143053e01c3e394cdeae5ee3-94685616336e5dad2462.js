(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"2Zix":function(e,t,r){var n=r("NC/Y");e.exports=/MSIE|Trident/.test(n)},"8+s/":function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var o=r("q1tI"),i=n(o),a=n(r("Gytx"));function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function f(){l=e(s.map((function(e){return e.props}))),T.canUseDOM?t(l):r&&(l=r(l))}var T=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var u=o.prototype;return u.shouldComponentUpdate=function(e){return!a(e,this.props)},u.componentWillMount=function(){s.push(this),f()},u.componentDidUpdate=function(){f()},u.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),f()},u.render=function(){return i.createElement(n,this.props)},o}(o.Component);return u(T,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),u(T,"canUseDOM",c),T}}},BNF5:function(e,t,r){var n=r("NC/Y").match(/firefox\/(\d+)/i);e.exports=!!n&&+n[1]},Gytx:function(e,t){e.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var l=i[c];if(!u(l))return!1;var s=e[l],f=t[l];if(!1===(o=r?r.call(n,s,f,l):void 0)||void 0===o&&s!==f)return!1}return!0}},JkAW:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),i=r("TJpk"),a=r("Wbzz"),u=r("obyI"),c=r.n(u),l=r("Rt21"),s=r.n(l);function f(e){var t=e.title,r=e.description,n=e.path,u=e.lang,l=e.keywords,f=e.contentType,T=e.imageUrl,p=e.translations,E=e.meta;return o.a.createElement(a.StaticQuery,{query:"4097791827",render:function(e){var a=l&&l.length>0?{name:"keywords",content:l.join(", ")}:[],d=s.a.resolvePageUrl(c.a.siteUrl,c.a.pathPrefix,n),A=s.a.resolveUrl(c.a.siteUrl,T||e.file.childImageSharp.fixed.src);return o.a.createElement(i.Helmet,{title:t,titleTemplate:"%s | "+c.a.siteTitle,meta:[{name:"description",content:r},{property:"og:title",content:t},{property:"og:type",content:f||"website"},{property:"og:url",content:d},{property:"og:description",content:r},{property:"og:image",content:A},{property:"og:image:alt",content:r},{property:"og:site_name",content:c.a.siteTitle},{property:"og:locale",content:u||"en_US"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:t},{name:"twitter:description",content:r},{name:"twitter:image",content:A},{name:"twitter:image:alt",content:r},{name:"twitter:site",content:c.a.author},{name:"twitter:creator",content:c.a.author}].concat(a).concat(E||[]),link:[{rel:"canonical",href:d}].concat(p?p.map((function(e){return{rel:"alternate",hreflang:e.hreflang,href:s.a.resolvePageUrl(c.a.siteUrl,c.a.pathPrefix,e.path)}})):[])})}})}f.defaultProps={lang:"en_US",contentType:"website",imageUrl:null,keywords:[],translations:[],meta:[]},t.a=f},Rt21:function(e,t,r){r("E9XD"),r("ToJy");var n=r("obyI"),o={resolveUrl:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce((function(e,t){var r=t.toString().trim();return r&&(e+=(""===e?"":"/")+r.replace(/^\/|\/$/g,"")),e="/"!==e[0]?"/"+e:e}),"")},resolvePageUrl:function(){var e=o.resolveUrl.apply(o,arguments);return e},getSuggestedPosts:function(e,t,r){var n=function(t){var r=0;return t.node.frontmatter.tags.forEach((function(t){r+=-1!==e.frontmatter.tags.indexOf(t)?1:0})),r};return t.edges.sort((function(e,t){return n(t)-n(e)})).slice(0,r)},getRelatedTranslations:function(e,t){return t.filter((function(t){return t.node.fileAbsolutePath.split("/").slice(-2,-1)[0]===e.fileAbsolutePath.split("/").slice(-2,-1)[0]})).map((function(e){var t=e.node,r=t.fileAbsolutePath.split(".").slice(-2,-1)[0];return{hreflang:"index"!==r.slice(-5)?r:n.defaultLanguage,path:o.resolvePageUrl(t.frontmatter.path)}}))},capitalize:function(e){return e[0].toUpperCase()+e.slice(1)}};e.exports=o},TJpk:function(e,t,r){t.__esModule=!0,t.Helmet=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=f(r("q1tI")),a=f(r("17x9")),u=f(r("8+s/")),c=f(r("bmMU")),l=r("v1p5"),s=r("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function T(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d,A,h,S=(0,u.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)((function(){return null})),y=(d=S,h=A=function(e){function t(){return p(this,t),E(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,o=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return n({},o,((t={})[r.type]=[].concat(o[r.type]||[],[n({},i,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,o=e.child,i=e.newProps,a=e.newChildProps,u=e.nestedChildren;switch(o.type){case s.TAG_NAMES.TITLE:return n({},i,((t={})[o.type]=u,t.titleAttributes=n({},a),t));case s.TAG_NAMES.BODY:return n({},i,{bodyAttributes:n({},a)});case s.TAG_NAMES.HTML:return n({},i,{htmlAttributes:n({},a)})}return n({},i,((r={})[o.type]=n({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach((function(t){var o;r=n({},r,((o={})[t]=e[t],o))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=T(o,["children"]),u=(0,l.convertReactPropstoHtmlAttributes)(a);switch(r.warnOnInvalidChildren(e,i),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:u,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=T(e,["children"]),o=n({},r);return t&&(o=this.mapChildrenToProps(t,o)),i.default.createElement(d,o)},o(t,null,[{key:"canUseDOM",set:function(e){d.canUseDOM=e}}]),t}(i.default.Component),A.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},A.defaultProps={defer:!0,encodeSpecialCharacters:!0},A.peek=d.peek,A.rewind=function(){var e=d.rewind();return e||(e=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},h);y.renderStatic=y.rewind,t.Helmet=y,t.default=y},ToJy:function(e,t,r){"use strict";var n=r("I+eb"),o=r("HAuM"),i=r("ewvW"),a=r("UMSQ"),u=r("0Dky"),c=r("rdv8"),l=r("pkCn"),s=r("BNF5"),f=r("2Zix"),T=r("LQDL"),p=r("USzg"),E=[],d=E.sort,A=u((function(){E.sort(void 0)})),h=u((function(){E.sort(null)})),S=l("sort"),y=!u((function(){if(T)return T<70;if(!(s&&s>3)){if(f)return!0;if(p)return p<603;var e,t,r,n,o="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(n=0;n<47;n++)E.push({k:t+n,v:r})}for(E.sort((function(e,t){return t.v-e.v})),n=0;n<E.length;n++)t=E[n].k.charAt(0),o.charAt(o.length-1)!==t&&(o+=t);return"DGBEFHACIJK"!==o}}));n({target:"Array",proto:!0,forced:A||!h||!S||!y},{sort:function(e){void 0!==e&&o(e);var t=i(this);if(y)return void 0===e?d.call(t):d.call(t,e);var r,n,u=[],l=a(t.length);for(n=0;n<l;n++)n in t&&u.push(t[n]);for(r=(u=c(u,function(e){return function(t,r){return void 0===r?-1:void 0===t?1:void 0!==e?+e(t,r)||0:String(t)>String(r)?1:-1}}(e))).length,n=0;n<r;)t[n]=u[n++];for(;n<l;)delete t[n++];return t}})},USzg:function(e,t,r){var n=r("NC/Y").match(/AppleWebKit\/(\d+)\./);e.exports=!!n&&+n[1]},bmMU:function(e,t,r){"use strict";var n=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var u,c,l,s=n(t),f=n(r);if(s&&f){if((c=t.length)!=r.length)return!1;for(u=c;0!=u--;)if(!e(t[u],r[u]))return!1;return!0}if(s!=f)return!1;var T=t instanceof Date,p=r instanceof Date;if(T!=p)return!1;if(T&&p)return t.getTime()==r.getTime();var E=t instanceof RegExp,d=r instanceof RegExp;if(E!=d)return!1;if(E&&d)return t.toString()==r.toString();var A=o(t);if((c=A.length)!==o(r).length)return!1;for(u=c;0!=u--;)if(!i.call(r,A[u]))return!1;if(a&&t instanceof Element&&r instanceof Element)return t===r;for(u=c;0!=u--;)if(!("_owner"===(l=A[u])&&t.$$typeof||e(t[l],r[l])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},"hFT/":function(e,t,r){r("E9XD"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},o=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(o).reduce((function(e,t){return e[o[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},rdv8:function(e,t){var r=Math.floor,n=function(e,t){var a=e.length,u=r(a/2);return a<8?o(e,t):i(n(e.slice(0,u),t),n(e.slice(u),t),t)},o=function(e,t){for(var r,n,o=e.length,i=1;i<o;){for(n=i,r=e[i];n&&t(e[n-1],r)>0;)e[n]=e[--n];n!==i++&&(e[n]=r)}return e},i=function(e,t,r){for(var n=e.length,o=t.length,i=0,a=0,u=[];i<n||a<o;)i<n&&a<o?u.push(r(e[i],t[a])<=0?e[i++]:t[a++]):u.push(i<n?e[i++]:t[a++]);return u};e.exports=n},v1p5:function(e,t,r){(function(e){r("E9XD"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=c(r("q1tI")),a=c(r("YVoz")),u=r("hFT/");function c(e){return e&&e.__esModule?e:{default:e}}var l,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=A(e,u.TAG_NAMES.TITLE),r=A(e,u.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,(function(){return t}));var n=A(e,u.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},T=function(e){return A(e,u.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},E=function(e,t){return t.filter((function(e){return void 0!==e[u.TAG_NAMES.BASE]})).map((function(e){return e[u.TAG_NAMES.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},d=function(e,t,r){var o={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var n={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();-1===t.indexOf(l)||r===u.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||l===u.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==u.TAG_PROPERTIES.INNER_HTML&&c!==u.TAG_PROPERTIES.CSS_TEXT&&c!==u.TAG_PROPERTIES.ITEM_PROP||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return o[r]||(o[r]={}),n[r]||(n[r]={}),!o[r][s]&&(n[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(n),c=0;c<i.length;c++){var l=i[c],s=(0,a.default)({},o[l],n[l]);o[l]=s}return e}),[]).reverse()},A=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},h=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){h(e)}),0)}),S=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,m="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||S:e.cancelAnimationFrame||S,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},_=null,g=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,T=e.title,p=e.titleAttributes;R(u.TAG_NAMES.BODY,n),R(u.TAG_NAMES.HTML,o),P(T,p);var E={baseTag:M(u.TAG_NAMES.BASE,r),linkTags:M(u.TAG_NAMES.LINK,i),metaTags:M(u.TAG_NAMES.META,a),noscriptTags:M(u.TAG_NAMES.NOSCRIPT,c),scriptTags:M(u.TAG_NAMES.SCRIPT,s),styleTags:M(u.TAG_NAMES.STYLE,f)},d={},A={};Object.keys(E).forEach((function(e){var t=E[e],r=t.newTags,n=t.oldTags;r.length&&(d[e]=r),n.length&&(A[e]=E[e].oldTags)})),t&&t(),l(e,d,A)},b=function(e){return Array.isArray(e)?e.join(""):e},P=function(e,t){void 0!==e&&document.title!==e&&(document.title=b(e)),R(u.TAG_NAMES.TITLE,t)},R=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(u.HELMET_ATTRIBUTE),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],s=t[l]||"";r.getAttribute(l)!==s&&r.setAttribute(l,s),-1===o.indexOf(l)&&o.push(l);var f=i.indexOf(l);-1!==f&&i.splice(f,1)}for(var T=i.length-1;T>=0;T--)r.removeAttribute(i[T]);o.length===i.length?r.removeAttribute(u.HELMET_ATTRIBUTE):r.getAttribute(u.HELMET_ATTRIBUTE)!==a.join(",")&&r.setAttribute(u.HELMET_ATTRIBUTE,a.join(","))}},M=function(e,t){var r=document.head||document.querySelector(u.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+u.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===u.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===u.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(u.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},O=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[u.REACT_TAG_MAP[r]||r]=e[r],t}),t)},I=function(e,t,r){switch(e){case u.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[u.HELMET_ATTRIBUTE]=!0,o=C(r,n),[i.default.createElement(u.TAG_NAMES.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=O(r),i=b(t);return o?"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+">"+s(i,n)+"</"+e+">":"<"+e+" "+u.HELMET_ATTRIBUTE+'="true">'+s(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case u.ATTRIBUTE_NAMES.BODY:case u.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return C(t)},toString:function(){return O(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[u.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach((function(e){var r=u.REACT_TAG_MAP[e]||e;if(r===u.TAG_PROPERTIES.INNER_HTML||r===u.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),i.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===u.TAG_PROPERTIES.INNER_HTML||e===u.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+s(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===u.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[u.HTML_TAG_MAP[r]||r]=e[r],t}),t)},t.handleClientStateChange=function(e){_&&m(_),e.defer?_=y((function(){g(e,(function(){_=null}))})):(g(e),_=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,f=e.title,T=void 0===f?"":f,p=e.titleAttributes;return{base:I(u.TAG_NAMES.BASE,t,n),bodyAttributes:I(u.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:I(u.ATTRIBUTE_NAMES.HTML,o,n),link:I(u.TAG_NAMES.LINK,i,n),meta:I(u.TAG_NAMES.META,a,n),noscript:I(u.TAG_NAMES.NOSCRIPT,c,n),script:I(u.TAG_NAMES.SCRIPT,l,n),style:I(u.TAG_NAMES.STYLE,s,n),title:I(u.TAG_NAMES.TITLE,{title:T,titleAttributes:p},n)}},t.reducePropsToState=function(e){return{baseTag:E([u.TAG_PROPERTIES.HREF],e),bodyAttributes:p(u.ATTRIBUTE_NAMES.BODY,e),defer:A(e,u.HELMET_PROPS.DEFER),encode:A(e,u.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(u.ATTRIBUTE_NAMES.HTML,e),linkTags:d(u.TAG_NAMES.LINK,[u.TAG_PROPERTIES.REL,u.TAG_PROPERTIES.HREF],e),metaTags:d(u.TAG_NAMES.META,[u.TAG_PROPERTIES.NAME,u.TAG_PROPERTIES.CHARSET,u.TAG_PROPERTIES.HTTPEQUIV,u.TAG_PROPERTIES.PROPERTY,u.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:d(u.TAG_NAMES.NOSCRIPT,[u.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:T(e),scriptTags:d(u.TAG_NAMES.SCRIPT,[u.TAG_PROPERTIES.SRC,u.TAG_PROPERTIES.INNER_HTML],e),styleTags:d(u.TAG_NAMES.STYLE,[u.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:p(u.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=v}).call(this,r("yLpj"))}}]);
//# sourceMappingURL=14756bafa552fff4143053e01c3e394cdeae5ee3-94685616336e5dad2462.js.map