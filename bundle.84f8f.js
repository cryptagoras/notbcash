!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(e,r,i){for(var a,u,c=0,s=[];c<e.length;c++)u=e[c],o[u]&&s.push(o[u][0]),o[u]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);for(n&&n(e,r,i);s.length;)s.shift()()};var r={},o={2:0};e.e=function(t){function n(){u.onerror=u.onload=null,clearTimeout(c);var e=o[t];0!==e&&(e&&e[1](new Error("Loading chunk "+t+" failed.")),o[t]=void 0)}var r=o[t];if(0===r)return new Promise(function(t){t()});if(r)return r[2];var i=new Promise(function(e,n){r=o[t]=[e,n]});r[2]=i;var a=document.getElementsByTagName("head")[0],u=document.createElement("script");u.type="text/javascript",u.charset="utf-8",u.async=!0,u.timeout=12e4,e.nc&&u.setAttribute("nonce",e.nc),u.src=e.p+""+({0:"route-miner",1:"route-home"}[t]||t)+".chunk."+{0:"6aa45",1:"1d70e"}[t]+".js";var c=setTimeout(n,12e4);return u.onerror=u.onload=n,a.appendChild(u),i},e.m=t,e.c=r,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e.oe=function(t){throw console.error(t),t},e(e.s="+lTZ")}({"+lTZ":function(t,e,n){"use strict";var r=n("KM04");"serviceWorker"in navigator&&"https:"===location.protocol&&navigator.serviceWorker.register(n.p+"sw.js");var o=function(t){return t&&t.default?t.default:t};if("function"==typeof o(n("JkW7"))){var i=document.body.firstElementChild,a=function(){var t=o(n("JkW7"));i=(0,r.render)((0,r.h)(t),document.body,i)};a()}},"/QC5":function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),a={};if(i&&i[1])for(var c=i[1].split("&"),s=0;s<c.length;s++){var l=c[s].split("=");a[decodeURIComponent(l[0])]=decodeURIComponent(l.slice(1).join("="))}t=u(t.replace(o,"")),e=u(e||"");for(var f=Math.max(t.length,e.length),p=0;p<f;p++)if(e[p]&&":"===e[p].charAt(0)){var h=e[p].replace(/(^\:|[+*?]+$)/g,""),d=(e[p].match(/[+*?]+$/)||C)[0]||"",v=~d.indexOf("+"),m=~d.indexOf("*"),_=t[p]||"";if(!_&&!m&&(d.indexOf("?")<0||v)){r=!1;break}if(a[h]=decodeURIComponent(_),v||m){a[h]=t.slice(p).map(decodeURIComponent).join("/");break}}else if(e[p]!==t[p]){r=!1;break}return(!0===n.default||!1!==r)&&a}function i(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function a(t,e){return t.index=e,t.rank=l(t),t.attributes}function u(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function c(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}function s(t){return u(t).map(c).join("")}function l(t){return t.attributes.default?0:s(t.attributes.path)}function f(t){return null!=t.__preactattr_||"undefined"!=typeof Symbol&&null!=t[Symbol.for("preactattr")]}function p(t,e){void 0===e&&(e="push"),x&&x[e]?x[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}function h(){var t;return t=x&&x.location?x.location:x&&x.getCurrentLocation?x.getCurrentLocation():"undefined"!=typeof location?location:L,""+(t.pathname||"")+(t.search||"")}function d(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),v(t)&&p(t,e?"replace":"push"),m(t)}function v(t){for(var e=k.length;e--;)if(k[e].canRoute(t))return!0;return!1}function m(t){for(var e=!1,n=0;n<k.length;n++)!0===k[n].routeTo(t)&&(e=!0);for(var r=j.length;r--;)j[r](t);return e}function _(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return d(e)}}function y(t){if(0==t.button)return _(t.currentTarget||t.target||this),b(t)}function b(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function g(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")&&f(e)){if(e.hasAttribute("native"))return;if(_(e))return b(t)}}while(e=e.parentNode)}}function w(){S||("function"==typeof addEventListener&&(x||addEventListener("popstate",function(){m(h())}),addEventListener("click",g)),S=!0)}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"subscribers",function(){return j}),n.d(e,"getCurrentUrl",function(){return h}),n.d(e,"route",function(){return d}),n.d(e,"Router",function(){return M}),n.d(e,"Route",function(){return E}),n.d(e,"Link",function(){return P});var O=n("KM04"),C=(n.n(O),{}),x=null,k=[],j=[],L={},S=!1,M=function(t){function e(e){t.call(this,e),e.history&&(x=e.history),this.state={url:e.url||h()},w()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){return this.getMatchingChildren(this.props.children,t,!1).length>0},e.prototype.routeTo=function(t){return this._didRoute=!1,this.setState({url:t}),this.updating?this.canRoute(t):(this.forceUpdate(),this._didRoute)},e.prototype.componentWillMount=function(){k.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;x&&(this.unlisten=x.listen(function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))})),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),k.splice(k.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(a).sort(i).map(function(t){var i=o(e,t.attributes.path,t.attributes);if(i){if(!1!==n){var a={url:e,matches:i};return r(a,i),delete a.ref,delete a.key,Object(O.cloneElement)(t,a)}return t}}).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,r=t.onChange,o=e.url,i=this.getMatchingChildren(n,o,!0),a=i[0]||null;this._didRoute=!!a;var u=this.previousUrl;return o!==u&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:u,active:i,current:a})),a},e}(O.Component),P=function(t){return Object(O.h)("a",r({onClick:y},t))},E=function(t){return Object(O.h)(t.component,t)};M.subscribers=j,M.getCurrentUrl=h,M.route=d,M.Router=M,M.Route=E,M.Link=P,e.default=M},"/Uqj":function(t,e,n){"use strict";e.__esModule=!0;var r=n("/sXU"),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(){var t=null,e=function(e){return(0,o.default)(null==t,"A history supports only one prompt at a time"),t=e,function(){t===e&&(t=null)}},n=function(e,n,r,i){if(null!=t){var a="function"==typeof t?t(e,n):t;"string"==typeof a?"function"==typeof r?r(a,i):((0,o.default)(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),i(!0)):i(!1!==a)}else i(!0)},r=[];return{setPrompt:e,confirmTransitionTo:n,appendListener:function(t){var e=!0,n=function(){e&&t.apply(void 0,arguments)};return r.push(n),function(){e=!1,r=r.filter(function(t){return t!==n})}},notifyListeners:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];r.forEach(function(t){return t.apply(void 0,e)})}}}},"/sXU":function(t){"use strict";var e=function(){};t.exports=e},"2gTp":function(t){"use strict";t.exports=function(t,e,n,r,o,i,a,u){if(!t){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,o,i,a,u],l=0;c=new Error(e.replace(/%s/g,function(){return s[l++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}},"4gcd":function(t,e){"use strict";e.__esModule=!0;var n=(e.addLeadingSlash=function(t){return"/"===t.charAt(0)?t:"/"+t},e.stripLeadingSlash=function(t){return"/"===t.charAt(0)?t.substr(1):t},e.hasBasename=function(t,e){return new RegExp("^"+e+"(\\/|\\?|#|$)","i").test(t)});e.stripBasename=function(t,e){return n(t,e)?t.substr(e.length):t},e.stripTrailingSlash=function(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t},e.parsePath=function(t){var e=t||"/",n="",r="",o=e.indexOf("#");-1!==o&&(r=e.substr(o),e=e.substr(0,o));var i=e.indexOf("?");return-1!==i&&(n=e.substr(i),e=e.substr(0,i)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r}},e.createPath=function(t){var e=t.pathname,n=t.search,r=t.hash,o=e||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}},"7YO4":function(t,e){"use strict";function n(t){return"/"===t.charAt(0)}function r(t,e){for(var n=e,r=n+1,o=t.length;r<o;n+=1,r+=1)t[n]=t[r];t.pop()}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=t&&t.split("/")||[],i=e&&e.split("/")||[],a=t&&n(t),u=e&&n(e),c=a||u;if(t&&n(t)?i=o:o.length&&(i.pop(),i=i.concat(o)),!i.length)return"/";var s=void 0;if(i.length){var l=i[i.length-1];s="."===l||".."===l||""===l}else s=!1;for(var f=0,p=i.length;p>=0;p--){var h=i[p];"."===h?r(i,p):".."===h?(r(i,p),f++):f&&(r(i,p),f--)}if(!c)for(;f--;f)i.unshift("..");!c||""===i[0]||i[0]&&n(i[0])||i.unshift("");var d=i.join("/");return s&&"/"!==d.substr(-1)&&(d+="/"),d}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},"7cLJ":function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){function e(){var e=this;r.Component.call(this);var n=void 0,o=void 0;this.componentWillMount=function(){n=e.base=e.nextBase||e.__b,t(function(t){e.setState({child:t.default||t})})},this.shouldComponentUpdate=function(t,e){return e=void 0===e.child,o=e&&void 0===o&&n?(0,r.h)(n.nodeName,{dangerouslySetInnerHTML:{__html:n.innerHTML}}):"",!e},this.render=function(t,e){return e.child?(0,r.h)(e.child,t):o}}return(e.prototype=new r.Component).constructor=e,e};var r=n("KM04")},JkW7:function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function i(t){n.e(1).then(function(){t(n("Rqy/"))}.bind(null,n)).catch(n.oe)}function a(t){n.e(0).then(function(){t(n("yhbQ"))}.bind(null,n)).catch(n.oe)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=(n("rq4c"),n("KM04")),f=n("/QC5"),p=n("wJDa"),h=n.n(p),d=n("sw5u"),v=n("u3et"),m=n.n(v),_=Object(l.h)(d.Link,{href:"/"},Object(l.h)("h1",null,"BitcoinCore.NotBcash.org")),y=Object(l.h)("input",{type:"submit",value:"Go"}),b=function(t){function e(e){var n=r(this,t.call(this,e));return n.handleSearchStats=n.handleSearchStats.bind(n),n}return o(e,t),e.prototype.handleSearchStats=function(t){Object(f.route)("/miner-stats?address="+this.input.value),t.preventDefault()},e.prototype.render=function(){var t=this;return Object(l.h)("div",null,Object(l.h)("header",{class:m.a.header},_,Object(l.h)("nav",null,Object(l.h)(d.Link,{activeClassName:m.a.active,href:"/"},"Home"))),Object(l.h)("div",{class:m.a.minerform},Object(l.h)("form",{onSubmit:this.handleSearchStats},Object(l.h)("label",null,"Miner stats: ",Object(l.h)("input",{type:"text",ref:function(e){return t.input=e},placeholder:"BTCC Address"})," ",y))))},e}(l.Component),g=n("7cLJ"),w=n.n(g),O=w()(i),C=w()(a),x=Object(l.h)(b,null),k=Object(l.h)(O,{path:"/"}),j=Object(l.h)(C,{path:"/miner-stats"}),L=function(t){function e(){var n,r,o;u(this,e);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return n=r=c(this,t.call.apply(t,[this].concat(a))),r.handleRoute=function(t){r.currentUrl=t.url},o=n,c(r,o)}return s(e,t),e.prototype.render=function(){return Object(l.h)("div",{id:"app",className:"site-wrapper"},x,Object(l.h)(f.Router,{history:h()(),onChange:this.handleRoute},k,j))},e}(l.Component);e.default=L},KM04:function(t){!function(){"use strict";function e(){}function n(t,n){var r,o,i,a,u=A;for(a=arguments.length;a-- >2;)U.push(arguments[a]);for(n&&null!=n.children&&(U.length||U.push(n.children),delete n.children);U.length;)if((o=U.pop())&&void 0!==o.pop)for(a=o.length;a--;)U.push(o[a]);else"boolean"==typeof o&&(o=null),(i="function"!=typeof t)&&(null==o?o="":"number"==typeof o?o+="":"string"!=typeof o&&(i=!1)),i&&r?u[u.length-1]+=o:u===A?u=[o]:u.push(o),r=i;var c=new e;return c.nodeName=t,c.children=u,c.attributes=null==n?void 0:n,c.key=null==n?void 0:n.key,void 0!==E.vnode&&E.vnode(c),c}function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e){return n(t.nodeName,r(r({},t.attributes),e),arguments.length>2?[].slice.call(arguments,2):t.children)}function i(t){!t.__d&&(t.__d=!0)&&1==R.push(t)&&(E.debounceRendering||T)(a)}function a(){var t,e=R;for(R=[];t=e.pop();)t.__d&&j(t)}function u(t,e,n){return"string"==typeof e||"number"==typeof e?void 0!==t.splitText:"string"==typeof e.nodeName?!t._componentConstructor&&c(t,e.nodeName):n||t._componentConstructor===e.nodeName}function c(t,e){return t.__n===e||t.nodeName.toLowerCase()===e.toLowerCase()}function s(t){var e=r({},t.attributes);e.children=t.children;var n=t.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===e[o]&&(e[o]=n[o]);return e}function l(t,e){var n=e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return n.__n=t,n}function f(t){var e=t.parentNode;e&&e.removeChild(t)}function p(t,e,n,r,o){if("className"===e&&(e="class"),"key"===e);else if("ref"===e)n&&n(null),r&&r(t);else if("class"!==e||o)if("style"===e){if(r&&"string"!=typeof r&&"string"!=typeof n||(t.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(t.style[i]="");for(var i in r)t.style[i]="number"==typeof r[i]&&!1===N.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===e)r&&(t.innerHTML=r.__html||"");else if("o"==e[0]&&"n"==e[1]){var a=e!==(e=e.replace(/Capture$/,""));e=e.toLowerCase().substring(2),r?n||t.addEventListener(e,d,a):t.removeEventListener(e,d,a),(t.__l||(t.__l={}))[e]=r}else if("list"!==e&&"type"!==e&&!o&&e in t)h(t,e,null==r?"":r),null!=r&&!1!==r||t.removeAttribute(e);else{var u=o&&e!==(e=e.replace(/^xlink:?/,""));null==r||!1===r?u?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.removeAttribute(e):"function"!=typeof r&&(u?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),r):t.setAttribute(e,r))}else t.className=r||""}function h(t,e,n){try{t[e]=n}catch(t){}}function d(t){return this.__l[t.type](E.event&&E.event(t)||t)}function v(){for(var t;t=W.pop();)E.afterMount&&E.afterMount(t),t.componentDidMount&&t.componentDidMount()}function m(t,e,n,r,o,i){H++||(B=null!=o&&void 0!==o.ownerSVGElement,I=null!=t&&!("__preactattr_"in t));var a=_(t,e,n,r,i);return o&&a.parentNode!==o&&o.appendChild(a),--H||(I=!1,i||v()),a}function _(t,e,n,r,o){var i=t,a=B;if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e||"number"==typeof e)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||o)?t.nodeValue!=e&&(t.nodeValue=e):(i=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(i,t),b(t,!0))),i.__preactattr_=!0,i;var u=e.nodeName;if("function"==typeof u)return L(t,e,n,r);if(B="svg"===u||"foreignObject"!==u&&B,u+="",(!t||!c(t,u))&&(i=l(u,B),t)){for(;t.firstChild;)i.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(i,t),b(t,!0)}var s=i.firstChild,f=i.__preactattr_,p=e.children;if(null==f){f=i.__preactattr_={};for(var h=i.attributes,d=h.length;d--;)f[h[d].name]=h[d].value}return!I&&p&&1===p.length&&"string"==typeof p[0]&&null!=s&&void 0!==s.splitText&&null==s.nextSibling?s.nodeValue!=p[0]&&(s.nodeValue=p[0]):(p&&p.length||null!=s)&&y(i,p,n,r,I||null!=f.dangerouslySetInnerHTML),w(i,e.attributes,f),B=a,i}function y(t,e,n,r,o){var i,a,c,s,l,p=t.childNodes,h=[],d={},v=0,m=0,y=p.length,g=0,w=e?e.length:0;if(0!==y)for(var O=0;O<y;O++){var C=p[O],x=C.__preactattr_,k=w&&x?C._component?C._component.__k:x.key:null;null!=k?(v++,d[k]=C):(x||(void 0!==C.splitText?!o||C.nodeValue.trim():o))&&(h[g++]=C)}if(0!==w)for(var O=0;O<w;O++){s=e[O],l=null;var k=s.key;if(null!=k)v&&void 0!==d[k]&&(l=d[k],d[k]=void 0,v--);else if(!l&&m<g)for(i=m;i<g;i++)if(void 0!==h[i]&&u(a=h[i],s,o)){l=a,h[i]=void 0,i===g-1&&g--,i===m&&m++;break}l=_(l,s,n,r),c=p[O],l&&l!==t&&l!==c&&(null==c?t.appendChild(l):l===c.nextSibling?f(c):t.insertBefore(l,c))}if(v)for(var O in d)void 0!==d[O]&&b(d[O],!1);for(;m<=g;)void 0!==(l=h[g--])&&b(l,!1)}function b(t,e){var n=t._component;n?S(n):(null!=t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),!1!==e&&null!=t.__preactattr_||f(t),g(t))}function g(t){for(t=t.lastChild;t;){var e=t.previousSibling;b(t,!0),t=e}}function w(t,e,n){var r;for(r in n)e&&null!=e[r]||null==n[r]||p(t,r,n[r],n[r]=void 0,B);for(r in e)"children"===r||"innerHTML"===r||r in n&&e[r]===("value"===r||"checked"===r?t[r]:n[r])||p(t,r,n[r],n[r]=e[r],B)}function O(t){var e=t.constructor.name;(D[e]||(D[e]=[])).push(t)}function C(t,e,n){var r,o=D[t.name];if(t.prototype&&t.prototype.render?(r=new t(e,n),M.call(r,e,n)):(r=new M(e,n),r.constructor=t,r.render=x),o)for(var i=o.length;i--;)if(o[i].constructor===t){r.__b=o[i].__b,o.splice(i,1);break}return r}function x(t,e,n){return this.constructor(t,n)}function k(t,e,n,r,o){t.__x||(t.__x=!0,(t.__r=e.ref)&&delete e.ref,(t.__k=e.key)&&delete e.key,!t.base||o?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,r),r&&r!==t.context&&(t.__c||(t.__c=t.context),t.context=r),t.__p||(t.__p=t.props),t.props=e,t.__x=!1,0!==n&&(1!==n&&!1===E.syncComponentUpdates&&t.base?i(t):j(t,1,o)),t.__r&&t.__r(t))}function j(t,e,n,o){if(!t.__x){var i,a,u,c=t.props,l=t.state,f=t.context,p=t.__p||c,h=t.__s||l,d=t.__c||f,_=t.base,y=t.__b,g=_||y,w=t._component,O=!1;if(_&&(t.props=p,t.state=h,t.context=d,2!==e&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(c,l,f)?O=!0:t.componentWillUpdate&&t.componentWillUpdate(c,l,f),t.props=c,t.state=l,t.context=f),t.__p=t.__s=t.__c=t.__b=null,t.__d=!1,!O){i=t.render(c,l,f),t.getChildContext&&(f=r(r({},f),t.getChildContext()));var x,L,M=i&&i.nodeName;if("function"==typeof M){var P=s(i);a=w,a&&a.constructor===M&&P.key==a.__k?k(a,P,1,f,!1):(x=a,t._component=a=C(M,P,f),a.__b=a.__b||y,a.__u=t,k(a,P,0,f,!1),j(a,1,n,!0)),L=a.base}else u=g,x=w,x&&(u=t._component=null),(g||1===e)&&(u&&(u._component=null),L=m(u,i,f,n||!_,g&&g.parentNode,!0));if(g&&L!==g&&a!==w){var U=g.parentNode;U&&L!==U&&(U.replaceChild(L,g),x||(g._component=null,b(g,!1)))}if(x&&S(x),t.base=L,L&&!o){for(var A=t,T=t;T=T.__u;)(A=T).base=L;L._component=A,L._componentConstructor=A.constructor}}if(!_||n?W.unshift(t):O||(t.componentDidUpdate&&t.componentDidUpdate(p,h,d),E.afterUpdate&&E.afterUpdate(t)),null!=t.__h)for(;t.__h.length;)t.__h.pop().call(t);H||o||v()}}function L(t,e,n,r){for(var o=t&&t._component,i=o,a=t,u=o&&t._componentConstructor===e.nodeName,c=u,l=s(e);o&&!c&&(o=o.__u);)c=o.constructor===e.nodeName;return o&&c&&(!r||o._component)?(k(o,l,3,n,r),t=o.base):(i&&!u&&(S(i),t=a=null),o=C(e.nodeName,l,n),t&&!o.__b&&(o.__b=t,a=null),k(o,l,1,n,r),t=o.base,a&&t!==a&&(a._component=null,b(a,!1))),t}function S(t){E.beforeUnmount&&E.beforeUnmount(t);var e=t.base;t.__x=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var n=t._component;n?S(n):e&&(e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),t.__b=e,f(e),O(t),g(e)),t.__r&&t.__r(null)}function M(t,e){this.__d=!0,this.context=e,this.props=t,this.state=this.state||{}}function P(t,e,n){return m(n,t,{},!1,e,!1)}var E={},U=[],A=[],T="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,N=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,R=[],W=[],H=0,B=!1,I=!1,D={};r(M.prototype,{setState:function(t,e){var n=this.state;this.__s||(this.__s=r({},n)),r(n,"function"==typeof t?t(n,this.props):t),e&&(this.__h=this.__h||[]).push(e),i(this)},forceUpdate:function(t){t&&(this.__h=this.__h||[]).push(t),j(this,2)},render:function(){}});var K={h:n,createElement:n,cloneElement:o,Component:M,render:P,rerender:a,options:E};t.exports=K}()},rq4c:function(){},sw5u:function(t,e,n){"use strict";function r(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u=n("KM04"),c=n("/QC5"),s=e.Match=function(t){function e(){for(var e,n,r,i=arguments.length,a=Array(i),u=0;u<i;u++)a[u]=arguments[u];return e=n=o(this,t.call.apply(t,[this].concat(a))),n.update=function(t){n.nextUrl=t,n.setState({})},r=e,o(n,r)}return i(e,t),e.prototype.componentDidMount=function(){c.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){c.subscribers.splice(c.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,c.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children[0]&&t.children[0]({url:e,path:n,matches:n===t.path})},e}(u.Component),l=function(t){var e=t.activeClassName,n=t.path,o=r(t,["activeClassName","path"]);return(0,u.h)(s,{path:n||o.href},function(t){var n=t.matches;return(0,u.h)(c.Link,a({},o,{class:[o.class||o.className,n&&e].filter(Boolean).join(" ")}))})};e.Link=l,e.default=s,s.Link=l},"t+Vk":function(t,e){"use strict";function n(t,e){if(t===e)return!0;if(null==t||null==e)return!1;if(Array.isArray(t))return Array.isArray(e)&&t.length===e.length&&t.every(function(t,r){return n(t,e[r])});var o=void 0===t?"undefined":r(t);if(o!==(void 0===e?"undefined":r(e)))return!1;if("object"===o){var i=t.valueOf(),a=e.valueOf();if(i!==t||a!==e)return n(i,a);var u=Object.keys(t);return u.length===Object.keys(e).length&&u.every(function(r){return n(t[r],e[r])})}return!1}Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=n},u3et:function(t){t.exports={header:"header__3QGkI",active:"active__3gItZ",minerform:"minerform__18ZXM"}},"uE+1":function(t,e){"use strict";e.__esModule=!0;e.canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement),e.addEventListener=function(t,e,n){return t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n)},e.removeEventListener=function(t,e,n){return t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent("on"+e,n)},e.getConfirmation=function(t,e){return e(window.confirm(t))},e.supportsHistory=function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)},e.supportsPopStateOnHashChange=function(){return-1===window.navigator.userAgent.indexOf("Trident")},e.supportsGoWithoutReloadUsingHash=function(){return-1===window.navigator.userAgent.indexOf("Firefox")},e.isExtraneousPopstateEvent=function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")}},vMhP:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.locationsAreEqual=e.createLocation=void 0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n("7YO4"),a=r(i),u=n("t+Vk"),c=r(u),s=n("4gcd");e.createLocation=function(t,e,n,r){var i=void 0;"string"==typeof t?(i=(0,s.parsePath)(t),i.state=e):(i=o({},t),void 0===i.pathname&&(i.pathname=""),i.search?"?"!==i.search.charAt(0)&&(i.search="?"+i.search):i.search="",i.hash?"#"!==i.hash.charAt(0)&&(i.hash="#"+i.hash):i.hash="",void 0!==e&&void 0===i.state&&(i.state=e));try{i.pathname=decodeURI(i.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return n&&(i.key=n),r?i.pathname?"/"!==i.pathname.charAt(0)&&(i.pathname=(0,a.default)(i.pathname,r.pathname)):i.pathname=r.pathname:i.pathname||(i.pathname="/"),i},e.locationsAreEqual=function(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash===e.hash&&t.key===e.key&&(0,c.default)(t.state,e.state)}},wJDa:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=n("/sXU"),u=r(a),c=n("2gTp"),s=r(c),l=n("vMhP"),f=n("4gcd"),p=n("/Uqj"),h=r(p),d=n("uE+1"),v=function(){try{return window.history.state||{}}catch(t){return{}}};e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,s.default)(d.canUseDOM,"Browser history needs a DOM");var e=window.history,n=(0,d.supportsHistory)(),r=!(0,d.supportsPopStateOnHashChange)(),a=t.forceRefresh,c=void 0!==a&&a,p=t.getUserConfirmation,m=void 0===p?d.getConfirmation:p,_=t.keyLength,y=void 0===_?6:_,b=t.basename?(0,f.stripTrailingSlash)((0,f.addLeadingSlash)(t.basename)):"",g=function(t){var e=t||{},n=e.key,r=e.state,o=window.location,i=o.pathname,a=o.search,c=o.hash,s=i+a+c;return(0,u.default)(!b||(0,f.hasBasename)(s,b),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+s+'" to begin with "'+b+'".'),b&&(s=(0,f.stripBasename)(s,b)),(0,l.createLocation)(s,r,n)},w=function(){return Math.random().toString(36).substr(2,y)},O=(0,h.default)(),C=function(t){i(K,t),K.length=e.length,O.notifyListeners(K.location,K.action)},x=function(t){(0,d.isExtraneousPopstateEvent)(t)||L(g(t.state))},k=function(){L(g(v()))},j=!1,L=function(t){if(j)j=!1,C();else{O.confirmTransitionTo(t,"POP",m,function(e){e?C({action:"POP",location:t}):S(t)})}},S=function(t){var e=K.location,n=P.indexOf(e.key);-1===n&&(n=0);var r=P.indexOf(t.key);-1===r&&(r=0);var o=n-r;o&&(j=!0,T(o))},M=g(v()),P=[M.key],E=function(t){return b+(0,f.createPath)(t)},U=function(t,r){(0,u.default)(!("object"===(void 0===t?"undefined":o(t))&&void 0!==t.state&&void 0!==r),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");var i=(0,l.createLocation)(t,r,w(),K.location);O.confirmTransitionTo(i,"PUSH",m,function(t){if(t){var r=E(i),o=i.key,a=i.state;if(n)if(e.pushState({key:o,state:a},null,r),c)window.location.href=r;else{var s=P.indexOf(K.location.key),l=P.slice(0,-1===s?0:s+1);l.push(i.key),P=l,C({action:"PUSH",location:i})}else(0,u.default)(void 0===a,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=r}})},A=function(t,r){(0,u.default)(!("object"===(void 0===t?"undefined":o(t))&&void 0!==t.state&&void 0!==r),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");var i=(0,l.createLocation)(t,r,w(),K.location);O.confirmTransitionTo(i,"REPLACE",m,function(t){if(t){var r=E(i),o=i.key,a=i.state;if(n)if(e.replaceState({key:o,state:a},null,r),c)window.location.replace(r);else{var s=P.indexOf(K.location.key);-1!==s&&(P[s]=i.key),C({action:"REPLACE",location:i})}else(0,u.default)(void 0===a,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(r)}})},T=function(t){e.go(t)},N=function(){return T(-1)},R=function(){return T(1)},W=0,H=function(t){W+=t,1===W?((0,d.addEventListener)(window,"popstate",x),r&&(0,d.addEventListener)(window,"hashchange",k)):0===W&&((0,d.removeEventListener)(window,"popstate",x),r&&(0,d.removeEventListener)(window,"hashchange",k))},B=!1,I=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=O.setPrompt(t);return B||(H(1),B=!0),function(){return B&&(B=!1,H(-1)),e()}},D=function(t){var e=O.appendListener(t);return H(1),function(){H(-1),e()}},K={length:e.length,action:"POP",location:M,createHref:E,push:U,replace:A,go:T,goBack:N,goForward:R,block:I,listen:D};return K}}});
//# sourceMappingURL=bundle.84f8f.js.map