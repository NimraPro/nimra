(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[124],{506:function(e,t,r){"use strict";r.d(t,{AK:function(){return le},eh:function(){return X},Hf:function(){return de},xf:function(){return ie}});var n=r(178),o=r.n(n),i=r(7294),a=r.t(i,2);Math.round(1e10*Math.random());Boolean("undefined"!==typeof window&&window.document&&window.document.createElement);var s=r(3935);"undefined"!==typeof window&&i.useLayoutEffect;new Map;new Set(["id"]),new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]);let u=new Map,c=new Set;function d(){if("undefined"===typeof window)return;let e=t=>{let r=u.get(t.target);if(r&&(r.delete(t.propertyName),0===r.size&&(t.target.removeEventListener("transitioncancel",e),u.delete(t.target)),0===u.size)){for(let e of c)e();c.clear()}};document.body.addEventListener("transitionrun",(t=>{let r=u.get(t.target);r||(r=new Set,u.set(t.target,r),t.target.addEventListener("transitioncancel",e)),r.add(t.propertyName)})),document.body.addEventListener("transitionend",e)}"undefined"!==typeof document&&("loading"!==document.readyState?d():document.addEventListener("DOMContentLoaded",d));"undefined"!==typeof window&&window.visualViewport;new Map;function l(e){return"undefined"!==typeof window&&null!=window.navigator&&e.test(window.navigator.platform)}function p(){return l(/^Mac/)}function f(e){return!(0!==e.mozInputSource||!e.isTrusted)||0===e.detail&&!e.pointerType}const h=i.createContext(null);h.displayName="PressResponderContext";let v=null,m=new Set,y=!1,g=!1,w=!1;function _(e,t){for(let r of m)r(e,t)}function b(e){g=!0,function(e){return!(e.metaKey||!p()&&e.altKey||e.ctrlKey||"keyup"===e.type&&("Control"===e.key||"Shift"===e.key))}(e)&&(v="keyboard",_("keyboard",e))}function S(e){v="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(g=!0,_("pointer",e))}function j(e){f(e)&&(g=!0,v="virtual")}function O(e){e.target!==window&&e.target!==document&&(g||w||(v="virtual",_("virtual",e)),g=!1,w=!1)}function C(){g=!1,w=!0}function A(){if("undefined"===typeof window||y)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){g=!0,e.apply(this,arguments)},document.addEventListener("keydown",b,!0),document.addEventListener("keyup",b,!0),document.addEventListener("click",j,!0),window.addEventListener("focus",O,!0),window.addEventListener("blur",C,!1),"undefined"!==typeof PointerEvent?(document.addEventListener("pointerdown",S,!0),document.addEventListener("pointermove",S,!0),document.addEventListener("pointerup",S,!0)):(document.addEventListener("mousedown",S,!0),document.addEventListener("mousemove",S,!0),document.addEventListener("mouseup",S,!0)),y=!0}"undefined"!==typeof document&&("loading"!==document.readyState?A():document.addEventListener("DOMContentLoaded",A));new Set;const E=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"];E.join(":not([hidden]),");E.push('[tabindex]:not([tabindex="-1"]):not([disabled])');E.join(':not([hidden]):not([tabindex="-1"]),');function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function T(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"===typeof e)return M(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?M(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function R(e){return null!=e}function P(e){for(var t={},r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];for(var i=0,a=n;i<a.length;i++){var s=a[i];s in e&&(t[s]=e[s])}return t}function F(e){for(var t={},r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];for(var i=0,a=Object.keys(e);i<a.length;i++){var s=a[i];n.includes(s)||(t[s]=e[s])}return t}function I(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];if(0!==t.length)return function(e){for(var r,n=e,o=T(t);!(r=o()).done;){n=(0,r.value)(n)}return n}}var z="undefined"!==typeof window,L=Symbol("NONE"),N=z?i.useLayoutEffect:i.useEffect;function B(e,t,r){return Array.isArray(r)?i.createElement.apply(i,[e,t].concat(r)):r||"children"in t?i.createElement(e,t,r):i.createElement(e,t)}function U(e){for(var t=x({},e),r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];for(var i=0,a=n;i<a.length;i++)for(var s=a[i],u=0,c=Object.keys(s);u<c.length;u++){var d=c[u];t[d]=$(d,t[d],s[d])}return t}function H(e,t){e&&("function"===typeof e?e(t):Object.isFrozen(e)||(e.current=t))}function D(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){for(var r,n=T(t);!(r=n()).done;){H(r.value,e)}}}function $(e,t,r){return t===L||r===L?null:null==t?r:null==r?t:"className"===e?o()(t,r):"style"===e?x({},t,r):"ref"===e?D(t,r):typeof t!==typeof r?r:e.startsWith("on")&&"function"===typeof t?function(){var e;return"function"===typeof t&&(e=t.apply(void 0,arguments)),"function"===typeof r&&(e=r.apply(void 0,arguments)),e}:r}function q(e,t,r,n){var o=t.children,i=k(t,["children"]),a=V(o,null!=r&&r);return B(e,x({ref:n},i),a)}function W(e,t){var r=e.as,n=e.hasGap;return q(null!=r?r:"div",k(e,["as","hasGap"]),n,t)}var Z=(0,i.forwardRef)(W),G=function(e){return(0,i.forwardRef)((function(t,r){var n=t.hasGap,o=k(t,["hasGap"]);return q(e,o,n,r)}))},K=Object.assign(Z,{div:G("div"),a:G("a"),button:G("button"),h1:G("h1"),h2:G("h2"),h3:G("h3"),h4:G("h4"),h5:G("h5"),h6:G("h6"),label:G("label"),form:G("form"),section:G("section"),head:G("head"),main:G("main"),nav:G("nav")});function V(e,t){var r=t?"__wab_flex-container":"__wab_passthrough";return e?Array.isArray(e)?i.createElement.apply(a,["div",{className:r}].concat(e)):(0,i.createElement)("div",{className:r},e):null}function Q(e,t,r,n){var o=re(e),a=te(r,o.props);if("render"===o.type)return o.render(a,t);var s=t;"as"===o.type&&o.as&&(t===K?a.as=o.as:s=o.as);var u=a.children;o.wrapChildren&&(u=o.wrapChildren(function(e){return Array.isArray(e)?1===e.length?e[0]:i.createElement.apply(i,[i.Fragment,{}].concat(e)):e}(u))),n&&(u=V(u,!0));var c=B(s,a,u);return o.wrap&&(c=o.wrap(c)),c}var J=new Map;function X(e,t){null==t&&(t={});var r=t["data-plasmic-name"],n=t["data-plasmic-root"],o=t["data-plasmic-for-node"];delete t["data-plasmic-name"],delete t["data-plasmic-root"],delete t["data-plasmic-for-node"];for(var i=arguments.length,a=new Array(i>2?i-2:0),s=2;s<i;s++)a[s-2]=arguments[s];var u=Y.apply(void 0,[e,t].concat(a));if(r&&J.set(r,u),n){var c,d=o?null!=(c=J.get(o))?c:null:u;return J.clear(),d}return u}function Y(e,t){var r,n=t["data-plasmic-override"],o=t["data-plasmic-wrap-flex-child"],i=null!=(r=t["data-plasmic-trigger-props"])?r:[];delete t["data-plasmic-override"],delete t["data-plasmic-wrap-flex-child"],delete t["data-plasmic-trigger-props"];for(var a=arguments.length,s=new Array(a>2?a-2:0),u=2;u<a;u++)s[u-2]=arguments[u];return Q(n,e,U.apply(void 0,[t,0===s.length?{}:{children:1===s.length?s[0]:s}].concat(i)),o)}var ee=Symbol("UNSET");function te(e,t){if(!t)return e;for(var r=x({},e),n=0,o=Object.keys(t);n<o.length;n++){var i=o[n],a=e[i],s=t[i];s===ee?delete r[i]:(null!=s||"className"===i||"style"===i||i.startsWith("on")&&"function"===typeof a||(s=L),r[i]=$(i,a,s))}return r}function re(e){if(!e)return{type:"default",props:{}};if(function(e){return"string"===typeof e||"number"===typeof e||i.isValidElement(e)}(e))return{type:"default",props:{children:e}};if("object"===typeof e)return"as"in e?x({},e,{props:e.props||{},type:"as"}):"render"in e?x({},e,{type:"render"}):"props"in e?x({},e,{props:e.props||{},type:"default"}):(t=Object.keys(e),r=["wrap","wrapChildren"],t.every((function(e){return r.includes(e)}))?x({},e,{props:{},type:"default"}):{type:"default",props:e});if("function"===typeof e)return{type:"render",render:e};var t,r;throw new Error("Unexpected override: "+e)}function ne(e,t){for(var r={},n=0,o=Array.from(new Set([].concat(Object.keys(e),Object.keys(t))));n<o.length;n++){var i=o[n];r[i]=oe(e[i],t[i])}return r}function oe(e,t){var r,n;if(!e)return t;if(!t)return e;var o=re(e),i=re(t),a=I.apply(void 0,[o.wrap,i.wrap].filter(R)),s=I.apply(void 0,[o.wrapChildren,i.wrapChildren].filter(R)),u=te(null!=(r=o.props)?r:{},i.props);if("render"===i.type)return{render:i.render,props:u,wrap:a,wrapChildren:s};if("render"===o.type)return{render:o.render,props:u,wrap:a,wrapChildren:s};var c=null!=(n="as"===i.type?i.as:void 0)?n:"as"===o.type?o.as:void 0;return x({props:u,wrap:a,wrapChildren:s},c?{as:c}:{})}function ie(e,t){var r,n,o,i,a,s,u,c,d=t.name,l=t.descendantNames,p=t.internalVariantPropNames,f=t.internalArgPropNames,h=["variants","args","overrides"],v=(i=F.apply(void 0,[P.apply(void 0,[e].concat(p))].concat(h)),a=null!=(r=e.variants)?r:{},x({},i,a)),m=(s=F.apply(void 0,[P.apply(void 0,[e].concat(f))].concat(h)),u=null!=(n=e.args)?n:{},x({},s,u)),y=ne(F.apply(void 0,[P.apply(void 0,[e].concat(l))].concat(f,p,h)),null!=(o=e.overrides)?o:{}),g=F.apply(void 0,[e,"variants","args","overrides"].concat(l,p,f));Object.keys(g).length>0&&(y=ne(y,((c={})[d]={props:g},c)));return{variants:v,args:m,overrides:y}}var ae=[],se={};function ue(){return z?Object.entries(se).filter((function(e){var t=e[1];return window.matchMedia(t).matches})).map((function(e){return e[0]})):[]}var ce=void 0;function de(e,t){return Object.assign(se,t),ce=void 0,function(){var t=(0,i.useState)()[1],r=(0,i.useRef)(ce||[]);return N((function(){var e=function(){ce&&r.current.join("")!==ce.join("")&&(r.current=ce,t({}))};return ae.push(e),void 0===ce&&(ce=ue()),e(),function(){ae.splice(ae.indexOf(e),1)}}),[]),e?ce||[]:ce?ce[ce.length-1]:void 0}}z&&window.addEventListener("resize",(function(){var e=ue();ce&&e.join("")===ce.join("")||(ce=e,s.unstable_batchedUpdates((function(){return ae.forEach((function(e){return e()}))})))}));var le=o()},178:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var s in r)n.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},110:function(e,t,r){"use strict";r.d(t,{ZP:function(){return p}});var n=r(7294),o=(r(506),r(9672)),i=r(8625);const a={Homepage:o.ZP},s={Screen:{component:i.wd,isContext:!Boolean("ScreenVariantProvider")}},u={Homepage:{"6iu295UiMZ8b1qQooUTNAk":o.ZP}},c={Screen:{"6iu295UiMZ8b1qQooUTNAk":{component:i.wd,isContext:!Boolean(void 0)}}};function d(e,t){if(a[t])return a[t];if(!u[t])throw new Error(`The component ${t} could not be found.`);if(!u[t][e])throw new Error(`The component ${t} requires a valid projectId. Passed: ${e}. Options: ${Object.keys(u[t])}`);return u[t][e]}function l(e,t,r){const o=Object.entries(r||{}).map((([e,r])=>{if(s[e]){const{component:t,isContext:n}=s[e];return[n?t.Provider:t,r]}if(!c[e])throw new Error(`The provider ${e} could not be found.`);if(!c[e][t])throw new Error(`The provider ${e} requires a valid projectId. Passed: ${t}. Options: ${Object.keys(c[e])}`);const{component:n,isContext:o}=c[e][t];return[o?n.Provider:n,r]}));return o.length?o.reduce(((e,[t,r])=>n.createElement(t,{value:r},e)),e):e}function p({projectId:e,component:t,componentProps:r={},providerProps:o={}}){const i=d(e,t);return l(n.createElement(i,r),e,o)}p.getPlumeType=function({projectId:e,component:t}){return d(e,t).__plumeType}},3398:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},6393:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var n,o=(n=r(7294))&&n.__esModule?n:{default:n},i=r(3398);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,i=e.hasQuery,a=void 0!==i&&i;return r||o&&a}},2775:function(e,t,r){"use strict";var n=r(1682);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var i,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(7294)),s=(i=r(3244))&&i.__esModule?i:{default:i},u=r(3398),c=r(1165),d=r(6393);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var r=a.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(f,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?i=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var u=0,c=h.length;u<c;u++){var d=h[u];if(o.props.hasOwnProperty(d))if("charSet"===d)r.has(d)?i=!1:r.add(d);else{var l=o.props[d],p=n[d]||new Set;"name"===d&&a||!p.has(l)?(p.add(l),n[d]=p):i=!1}}}return i}}()).reverse().map((function(e,r){var i=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,a.default.cloneElement(e,s)}return a.default.cloneElement(e,{key:i})}))}var m=function(e){var t=e.children,r=(0,a.useContext)(u.AmpStateContext),n=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(s.default,{reduceComponentsToState:v,headManager:n,inAmpMode:(0,d.isInAmpMode)(r)},t)};t.default=m},3244:function(e,t,r){"use strict";var n=r(3115),o=r(2553),i=r(2012),a=(r(450),r(9807)),s=r(7690),u=r(9828);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}t.__esModule=!0,t.default=void 0;var d=r(7294),l=function(e){a(r,e);var t=c(r);function r(e){var i;return o(this,r),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(n(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(d.Component);t.default=l},8797:function(){},9008:function(e,t,r){e.exports=r(2775)},8164:function(e,t,r){var n=r(4360);e.exports=function(e){if(Array.isArray(e))return n(e)}},1682:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},1385:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Z:function(){return o}})},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,r){var n=r(8164),o=r(7381),i=r(3585),a=r(5725);e.exports=function(e){return n(e)||o(e)||i(e)||a()}},4155:function(e){var t,r,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var s,u=[],c=!1,d=-1;function l(){c&&s&&(c=!1,s.length?u=s.concat(u):d=-1,u.length&&p())}function p(){if(!c){var e=a(l);c=!0;for(var t=u.length;t;){for(s=u,u=[];++d<t;)s&&s[d].run();d=-1,t=u.length}s=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function h(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new f(e,t)),1!==u.length||c||a(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=h,n.addListener=h,n.once=h,n.off=h,n.removeListener=h,n.removeAllListeners=h,n.emit=h,n.prependListener=h,n.prependOnceListener=h,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},9887:function(e){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},4287:function(e,t,r){"use strict";var n=r(4155);function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var i="undefined"!==typeof n&&n.env&&!0,a=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(e){var t=void 0===e?{}:e,r=t.name,n=void 0===r?"stylesheet":r,o=t.optimizeForSpeed,s=void 0===o?i:o,c=t.isBrowser,d=void 0===c?"undefined"!==typeof window:c;u(a(n),"`name` must be a string"),this._name=n,this._deletedRulePlaceholder="#"+n+"-deleted-rule____{}",u("boolean"===typeof s,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=s,this._isBrowser=d,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var l=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=l?l.getAttribute("content"):null}var t,r,n,s=e.prototype;return s.setOptimizeForSpeed=function(e){u("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),u(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},s.isOptimizeForSpeed=function(){return this._optimizeForSpeed},s.inject=function(){var e=this;if(u(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(i||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},s.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},s.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},s.insertRule=function(e,t){if(u(a(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(o){return i||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var n=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,n))}return this._rulesCount++},s.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(o){i||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var n=this._tags[e];u(n,"old rule at index `"+e+"` not found"),n.textContent=t}return e},s.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];u(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},s.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},s.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},s.makeStyleTag=function(e,t,r){t&&u(a(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return r?o.insertBefore(n,r):o.appendChild(n),n},t=e,(r=[{key:"length",get:function(){return this._rulesCount}}])&&o(t.prototype,r),n&&o(t,n),e}();function u(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=s},7884:function(e,t,r){"use strict";t.default=void 0;var n,o=r(7294);var i=new(((n=r(8122))&&n.__esModule?n:{default:n}).default),a=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).prevProps={},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return i.computeId(t,r)})).join(" ")};var o=n.prototype;return o.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},o.componentWillUnmount=function(){i.remove(this.props)},o.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&i.remove(this.prevProps),i.add(this.props),this.prevProps=this.props),null},n}(o.Component);t.default=a},8122:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=i(r(9887)),o=i(r(4287));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,i=t.optimizeForSpeed,a=void 0!==i&&i,s=t.isBrowser,u=void 0===s?"undefined"!==typeof window:s;this._sheet=n||new o.default({name:"styled-jsx",optimizeForSpeed:a}),this._sheet.inject(),n&&"boolean"===typeof a&&(this._sheet.setOptimizeForSpeed(a),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,o=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var i=o.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=i,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var o=String(r),i=t+o;return e[i]||(e[i]="jsx-"+(0,n.default)(t+"-"+o)),e[i]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var o=r+n;return t[o]||(t[o]=n.replace(e,r)),t[o]}},t.getIdAndRules=function(e){var t=this,r=e.children,n=e.dynamic,o=e.id;if(n){var i=this.computeId(o,n);return{styleId:i,rules:Array.isArray(r)?r.map((function(e){return t.computeSelector(i,e)})):[this.computeSelector(i,r)]}}return{styleId:this.computeId(o),rules:Array.isArray(r)?r:[r]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=a},5988:function(e,t,r){e.exports=r(7884)}}]);