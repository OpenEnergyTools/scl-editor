/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$4=window,e$a=t$4.ShadowRoot&&(void 0===t$4.ShadyCSS||t$4.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$6=Symbol(),n$6=new WeakMap;class o$7{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$6)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$a&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$6.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$6.set(s,t));}return t}toString(){return this.cssText}}const r$3=t=>new o$7("string"==typeof t?t:t+"",void 0,s$6),i$6=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$7(n,t,s$6)},S$1=(s,n)=>{e$a?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$4.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$3=e$a?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$3(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$5;const e$9=window,r$2=e$9.trustedTypes,h$3=r$2?r$2.emptyScript:"",o$6=e$9.reactiveElementPolyfillSupport,n$5={toAttribute(t,i){switch(i){case Boolean:t=t?h$3:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$6={attribute:!0,type:String,converter:n$5,reflect:!1,hasChanged:a$1};class d$1 extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$6){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$6}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$3(i));}else void 0!==i&&s.push(c$3(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$6){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$5).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$5;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}}d$1.finalized=!0,d$1.elementProperties=new Map,d$1.elementStyles=[],d$1.shadowRootOptions={mode:"open"},null==o$6||o$6({ReactiveElement:d$1}),(null!==(s$5=e$9.reactiveElementVersions)&&void 0!==s$5?s$5:e$9.reactiveElementVersions=[]).push("1.4.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$3;const i$5=window,s$4=i$5.trustedTypes,e$8=s$4?s$4.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$5=`lit$${(Math.random()+"").slice(9)}$`,n$4="?"+o$5,l$5=`<${n$4}>`,h$2=document,r$1=(t="")=>h$2.createComment(t),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,c$2=t=>u(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,a=/-->/g,f$1=/>/g,_=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),m=/'/g,p=/"/g,$=/^(?:script|style|textarea|title)$/i,g=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),y=g(1),w=g(2),x=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),T=new WeakMap,A=h$2.createTreeWalker(h$2,129,null,!1),E=(t,i)=>{const s=t.length-1,n=[];let h,r=2===i?"<svg>":"",d=v;for(let i=0;i<s;i++){const s=t[i];let e,u,c=-1,g=0;for(;g<s.length&&(d.lastIndex=g,u=d.exec(s),null!==u);)g=d.lastIndex,d===v?"!--"===u[1]?d=a:void 0!==u[1]?d=f$1:void 0!==u[2]?($.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=_):void 0!==u[3]&&(d=_):d===_?">"===u[0]?(d=null!=h?h:v,c=-1):void 0===u[1]?c=-2:(c=d.lastIndex-u[2].length,e=u[1],d=void 0===u[3]?_:'"'===u[3]?p:m):d===p||d===m?d=_:d===a||d===f$1?d=v:(d=_,h=void 0);const y=d===_&&t[i+1].startsWith("/>")?" ":"";r+=d===v?s+l$5:c>=0?(n.push(e),s.slice(0,c)+"$lit$"+s.slice(c)+o$5+y):s+o$5+(-2===c?(n.push(void 0),i):y);}const u=r+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==e$8?e$8.createHTML(u):u,n]};class C{constructor({strings:t,_$litType$:i},e){let l;this.parts=[];let h=0,d=0;const u=t.length-1,c=this.parts,[v,a]=E(t,i);if(this.el=C.createElement(v,e),A.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(o$5)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(o$5),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:h,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?k:"@"===i[1]?H:S});}else c.push({type:6,index:h});}for(const i of t)l.removeAttribute(i);}if($.test(l.tagName)){const t=l.textContent.split(o$5),i=t.length-1;if(i>0){l.textContent=s$4?s$4.emptyScript:"";for(let s=0;s<i;s++)l.append(t[s],r$1()),A.nextNode(),c.push({type:2,index:++h});l.append(t[i],r$1());}}}else if(8===l.nodeType)if(l.data===n$4)c.push({type:2,index:h});else {let t=-1;for(;-1!==(t=l.data.indexOf(o$5,t+1));)c.push({type:7,index:h}),t+=o$5.length-1;}h++;}}static createElement(t,i){const s=h$2.createElement("template");return s.innerHTML=t,s}}function P(t,i,s=t,e){var o,n,l,h;if(i===x)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=P(t,r._$AS(t,i.values),r,e)),i}class V{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:h$2).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),l=0,r=0,d=e[0];for(;void 0!==d;){if(l===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new I(n,this,t)),this.u.push(i),d=e[++r];}l!==(null==d?void 0:d.index)&&(n=A.nextNode(),l++);}return o}p(t){let i=0;for(const s of this.u)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cm=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P(this,t,i),d(t)?t===b||null==t||""===t?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==x&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):c$2(t)?this.k(t):this.g(t);}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}g(t){this._$AH!==b&&d(this._$AH)?this._$AA.nextSibling.data=t:this.T(h$2.createTextNode(t)),this._$AH=t;}$(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=C.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.p(s);else {const t=new V(o,this),i=t.v(this.options);t.p(s),this.T(i),this._$AH=t;}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new C(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.O(r$1()),this.O(r$1()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cm=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S{constructor(t,i,s,e,o){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=b;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==x,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P(this,e[s+l],i,l),h===x&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===b?t=b:t!==b&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M extends S{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===b?void 0:t;}}const R=s$4?s$4.emptyScript:"";class k extends S{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==b?this.element.setAttribute(this.name,R):this.element.removeAttribute(this.name);}}class H extends S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=P(this,t,i,0))&&void 0!==s?s:b)===x)return;const e=this._$AH,o=t===b&&e!==b||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==b&&(e===b||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class I{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t);}}const z=i$5.litHtmlPolyfillSupport;null==z||z(C,N),(null!==(t$3=i$5.litHtmlVersions)&&void 0!==t$3?t$3:i$5.litHtmlVersions=[]).push("2.4.0");const Z=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(r$1(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$4,o$4;class s$3 extends d$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Z(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return x}}s$3.finalized=!0,s$3._$litElement$=!0,null===(l$4=globalThis.litElementHydrateSupport)||void 0===l$4||l$4.call(globalThis,{LitElement:s$3});const n$3=globalThis.litElementPolyfillSupport;null==n$3||n$3({LitElement:s$3});(null!==(o$4=globalThis.litElementVersions)&&void 0!==o$4?o$4:globalThis.litElementVersions=[]).push("3.2.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$7=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return {kind:t,elements:s,finisher(n){customElements.define(e,n);}}})(e,n);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$4=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e$6(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i$4(e,n)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t$2(t){return e$6({...t,state:!0})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$3=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n);}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n);}};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$5(e){return o$3({finisher:(r,t)=>{Object.assign(r.prototype[t],e);}})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i$3(i,n){return o$3({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]};}return t}})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$4(e){return o$3({descriptor:r=>({get(){var r,o;return null!==(o=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelectorAll(e))&&void 0!==o?o:[]},enumerable:!0,configurable:!0})})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e$3(e){return o$3({descriptor:r=>({async get(){var r;return await this.updateComplete,null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(e)},enumerable:!0,configurable:!0})})}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n$2;const e$2=null!=(null===(n$2=window.HTMLSlotElement)||void 0===n$2?void 0:n$2.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));function l$3(n){const{slot:l,selector:t}=null!=n?n:{};return o$3({descriptor:o=>({get(){var o;const r="slot"+(l?`[name=${l}]`:":not([name])"),i=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(r),s=null!=i?e$2(i,n):[];return t?s.filter((o=>o.matches(t))):s},enumerable:!0,configurable:!0})})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function o$2(o,n,r){let l,s=o;return "object"==typeof o?(s=o.slot,l=o):l={flatten:n},r?l$3({slot:s,flatten:n,selector:r}):o$3({descriptor:e=>({get(){var e,t;const o="slot"+(s?`[name=${s}]`:":not([name])"),n=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(o);return null!==(t=null==n?void 0:n.assignedNodes(l))&&void 0!==t?t:[]},enumerable:!0,configurable:!0})})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$1=t=>(...e)=>({_$litDirective$:t,values:e});class i$2{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$1=e$1(class extends i$2{constructor(t){var i;if(super(t),t.type!==t$1.ATTRIBUTE||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[s]){var r,o;if(void 0===this.nt){this.nt=new Set,void 0!==i.strings&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(r=this.st)||void 0===r?void 0:r.has(t))&&this.nt.add(t);return this.render(s)}const e=i.element.classList;this.nt.forEach((t=>{t in s||(e.remove(t),this.nt.delete(t));}));for(const t in s){const i=!!s[t];i===this.nt.has(t)||(null===(o=this.st)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.nt.add(t)):(e.remove(t),this.nt.delete(t)));}return x}});

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
    if (element.closest) {
        return element.closest(selector);
    }
    var el = element;
    while (el) {
        if (matches(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
function matches(element, selector) {
    var nativeMatches = element.matches
        || element.webkitMatchesSelector
        || element.msMatchesSelector;
    return nativeMatches.call(element, selector);
}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Style preference for leading underscores.
// tslint:disable:strip-private-property-underscore
/**
 * Determines whether a node is an element.
 *
 * @param node Node to check
 */
const isNodeElement = (node) => {
    return node.nodeType === Node.ELEMENT_NODE;
};
function addHasRemoveClass(element) {
    return {
        addClass: (className) => {
            element.classList.add(className);
        },
        removeClass: (className) => {
            element.classList.remove(className);
        },
        hasClass: (className) => element.classList.contains(className),
    };
}
const fn = () => { };
const optionsBlock = {
    get passive() {
        return false;
    }
};
document.addEventListener('x', fn, optionsBlock);
document.removeEventListener('x', fn);
const deepActiveElementPath = (doc = window.document) => {
    let activeElement = doc.activeElement;
    const path = [];
    if (!activeElement) {
        return path;
    }
    while (activeElement) {
        path.push(activeElement);
        if (activeElement.shadowRoot) {
            activeElement = activeElement.shadowRoot.activeElement;
        }
        else {
            break;
        }
    }
    return path;
};
const doesElementContainFocus = (element) => {
    const activePath = deepActiveElementPath();
    if (!activePath.length) {
        return false;
    }
    const deepActiveElement = activePath[activePath.length - 1];
    const focusEv = new Event('check-if-focused', { bubbles: true, composed: true });
    let composedPath = [];
    const listener = (ev) => {
        composedPath = ev.composedPath();
    };
    document.body.addEventListener('check-if-focused', listener);
    deepActiveElement.dispatchEvent(focusEv);
    document.body.removeEventListener('check-if-focused', listener);
    return composedPath.indexOf(element) !== -1;
};

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class BaseElement extends s$3 {
    click() {
        if (this.mdcRoot) {
            this.mdcRoot.focus();
            this.mdcRoot.click();
            return;
        }
        super.click();
    }
    /**
     * Create and attach the MDC Foundation to the instance
     */
    createFoundation() {
        if (this.mdcFoundation !== undefined) {
            this.mdcFoundation.destroy();
        }
        if (this.mdcFoundationClass) {
            this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter());
            this.mdcFoundation.init();
        }
    }
    firstUpdated() {
        this.createFoundation();
    }
}

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = /** @class */ (function () {
    function MDCFoundation(adapter) {
        if (adapter === void 0) { adapter = {}; }
        this.adapter = adapter;
    }
    Object.defineProperty(MDCFoundation, "cssClasses", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "strings", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "numbers", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "defaultAdapter", {
        get: function () {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
        },
        enumerable: false,
        configurable: true
    });
    MDCFoundation.prototype.init = function () {
        // Subclasses should override this method to perform initialization routines (registering events, etc.)
    };
    MDCFoundation.prototype.destroy = function () {
        // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };
    return MDCFoundation;
}());

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$b = {
    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
    // given that it's an 'upgrade' to an existing component. That being said it is the root
    // CSS class that all other CSS classes derive from.
    BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
    FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
    FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
    ROOT: 'mdc-ripple-upgraded',
    UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
};
var strings$9 = {
    VAR_FG_SCALE: '--mdc-ripple-fg-scale',
    VAR_FG_SIZE: '--mdc-ripple-fg-size',
    VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
    VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
    VAR_LEFT: '--mdc-ripple-left',
    VAR_TOP: '--mdc-ripple-top',
};
var numbers$7 = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300, // Delay between touch and simulated mouse events on touch devices
};

/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
    if (!evt) {
        return { x: 0, y: 0 };
    }
    var x = pageOffset.x, y = pageOffset.y;
    var documentX = x + clientRect.left;
    var documentY = y + clientRect.top;
    var normalizedX;
    var normalizedY;
    // Determine touch point relative to the ripple container.
    if (evt.type === 'touchstart') {
        var touchEvent = evt;
        normalizedX = touchEvent.changedTouches[0].pageX - documentX;
        normalizedY = touchEvent.changedTouches[0].pageY - documentY;
    }
    else {
        var mouseEvent = evt;
        normalizedX = mouseEvent.pageX - documentX;
        normalizedY = mouseEvent.pageY - documentY;
    }
    return { x: normalizedX, y: normalizedY };
}

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = [
    'touchstart', 'pointerdown', 'mousedown', 'keydown',
];
// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = [
    'touchend', 'pointerup', 'mouseup', 'contextmenu',
];
// simultaneous nested activations
var activatedTargets = [];
var MDCRippleFoundation = /** @class */ (function (_super) {
    __extends(MDCRippleFoundation, _super);
    function MDCRippleFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCRippleFoundation.defaultAdapter), adapter)) || this;
        _this.activationAnimationHasEnded = false;
        _this.activationTimer = 0;
        _this.fgDeactivationRemovalTimer = 0;
        _this.fgScale = '0';
        _this.frame = { width: 0, height: 0 };
        _this.initialSize = 0;
        _this.layoutFrame = 0;
        _this.maxRadius = 0;
        _this.unboundedCoords = { left: 0, top: 0 };
        _this.activationState = _this.defaultActivationState();
        _this.activationTimerCallback = function () {
            _this.activationAnimationHasEnded = true;
            _this.runDeactivationUXLogicIfReady();
        };
        _this.activateHandler = function (e) {
            _this.activateImpl(e);
        };
        _this.deactivateHandler = function () {
            _this.deactivateImpl();
        };
        _this.focusHandler = function () {
            _this.handleFocus();
        };
        _this.blurHandler = function () {
            _this.handleBlur();
        };
        _this.resizeHandler = function () {
            _this.layout();
        };
        return _this;
    }
    Object.defineProperty(MDCRippleFoundation, "cssClasses", {
        get: function () {
            return cssClasses$b;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "strings", {
        get: function () {
            return strings$9;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "numbers", {
        get: function () {
            return numbers$7;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                browserSupportsCssVars: function () { return true; },
                computeBoundingRect: function () {
                    return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 });
                },
                containsEventTarget: function () { return true; },
                deregisterDocumentInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                deregisterResizeHandler: function () { return undefined; },
                getWindowPageOffset: function () { return ({ x: 0, y: 0 }); },
                isSurfaceActive: function () { return true; },
                isSurfaceDisabled: function () { return true; },
                isUnbounded: function () { return true; },
                registerDocumentInteractionHandler: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
                registerResizeHandler: function () { return undefined; },
                removeClass: function () { return undefined; },
                updateCssVariable: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCRippleFoundation.prototype.init = function () {
        var _this = this;
        var supportsPressRipple = this.supportsPressRipple();
        this.registerRootHandlers(supportsPressRipple);
        if (supportsPressRipple) {
            var _a = MDCRippleFoundation.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter.addClass(ROOT_1);
                if (_this.adapter.isUnbounded()) {
                    _this.adapter.addClass(UNBOUNDED_1);
                    // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                    _this.layoutInternal();
                }
            });
        }
    };
    MDCRippleFoundation.prototype.destroy = function () {
        var _this = this;
        if (this.supportsPressRipple()) {
            if (this.activationTimer) {
                clearTimeout(this.activationTimer);
                this.activationTimer = 0;
                this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
            }
            if (this.fgDeactivationRemovalTimer) {
                clearTimeout(this.fgDeactivationRemovalTimer);
                this.fgDeactivationRemovalTimer = 0;
                this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
            }
            var _a = MDCRippleFoundation.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter.removeClass(ROOT_2);
                _this.adapter.removeClass(UNBOUNDED_2);
                _this.removeCssVars();
            });
        }
        this.deregisterRootHandlers();
        this.deregisterDeactivationHandlers();
    };
    /**
     * @param evt Optional event containing position information.
     */
    MDCRippleFoundation.prototype.activate = function (evt) {
        this.activateImpl(evt);
    };
    MDCRippleFoundation.prototype.deactivate = function () {
        this.deactivateImpl();
    };
    MDCRippleFoundation.prototype.layout = function () {
        var _this = this;
        if (this.layoutFrame) {
            cancelAnimationFrame(this.layoutFrame);
        }
        this.layoutFrame = requestAnimationFrame(function () {
            _this.layoutInternal();
            _this.layoutFrame = 0;
        });
    };
    MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
        var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
        if (unbounded) {
            this.adapter.addClass(UNBOUNDED);
        }
        else {
            this.adapter.removeClass(UNBOUNDED);
        }
    };
    MDCRippleFoundation.prototype.handleFocus = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.adapter.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); });
    };
    MDCRippleFoundation.prototype.handleBlur = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.adapter.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); });
    };
    /**
     * We compute this property so that we are not querying information about the client
     * until the point in time where the foundation requests it. This prevents scenarios where
     * client-side feature-detection may happen too early, such as when components are rendered on the server
     * and then initialized at mount time on the client.
     */
    MDCRippleFoundation.prototype.supportsPressRipple = function () {
        return this.adapter.browserSupportsCssVars();
    };
    MDCRippleFoundation.prototype.defaultActivationState = function () {
        return {
            activationEvent: undefined,
            hasDeactivationUXRun: false,
            isActivated: false,
            isProgrammatic: false,
            wasActivatedByPointer: false,
            wasElementMadeActive: false,
        };
    };
    /**
     * supportsPressRipple Passed from init to save a redundant function call
     */
    MDCRippleFoundation.prototype.registerRootHandlers = function (supportsPressRipple) {
        var e_1, _a;
        if (supportsPressRipple) {
            try {
                for (var ACTIVATION_EVENT_TYPES_1 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next(); !ACTIVATION_EVENT_TYPES_1_1.done; ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next()) {
                    var evtType = ACTIVATION_EVENT_TYPES_1_1.value;
                    this.adapter.registerInteractionHandler(evtType, this.activateHandler);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (ACTIVATION_EVENT_TYPES_1_1 && !ACTIVATION_EVENT_TYPES_1_1.done && (_a = ACTIVATION_EVENT_TYPES_1.return)) _a.call(ACTIVATION_EVENT_TYPES_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (this.adapter.isUnbounded()) {
                this.adapter.registerResizeHandler(this.resizeHandler);
            }
        }
        this.adapter.registerInteractionHandler('focus', this.focusHandler);
        this.adapter.registerInteractionHandler('blur', this.blurHandler);
    };
    MDCRippleFoundation.prototype.registerDeactivationHandlers = function (evt) {
        var e_2, _a;
        if (evt.type === 'keydown') {
            this.adapter.registerInteractionHandler('keyup', this.deactivateHandler);
        }
        else {
            try {
                for (var POINTER_DEACTIVATION_EVENT_TYPES_1 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next(); !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done; POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next()) {
                    var evtType = POINTER_DEACTIVATION_EVENT_TYPES_1_1.value;
                    this.adapter.registerDocumentInteractionHandler(evtType, this.deactivateHandler);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (POINTER_DEACTIVATION_EVENT_TYPES_1_1 && !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_1.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    };
    MDCRippleFoundation.prototype.deregisterRootHandlers = function () {
        var e_3, _a;
        try {
            for (var ACTIVATION_EVENT_TYPES_2 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next(); !ACTIVATION_EVENT_TYPES_2_1.done; ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next()) {
                var evtType = ACTIVATION_EVENT_TYPES_2_1.value;
                this.adapter.deregisterInteractionHandler(evtType, this.activateHandler);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (ACTIVATION_EVENT_TYPES_2_1 && !ACTIVATION_EVENT_TYPES_2_1.done && (_a = ACTIVATION_EVENT_TYPES_2.return)) _a.call(ACTIVATION_EVENT_TYPES_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.adapter.deregisterInteractionHandler('focus', this.focusHandler);
        this.adapter.deregisterInteractionHandler('blur', this.blurHandler);
        if (this.adapter.isUnbounded()) {
            this.adapter.deregisterResizeHandler(this.resizeHandler);
        }
    };
    MDCRippleFoundation.prototype.deregisterDeactivationHandlers = function () {
        var e_4, _a;
        this.adapter.deregisterInteractionHandler('keyup', this.deactivateHandler);
        try {
            for (var POINTER_DEACTIVATION_EVENT_TYPES_2 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next(); !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done; POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next()) {
                var evtType = POINTER_DEACTIVATION_EVENT_TYPES_2_1.value;
                this.adapter.deregisterDocumentInteractionHandler(evtType, this.deactivateHandler);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (POINTER_DEACTIVATION_EVENT_TYPES_2_1 && !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_2.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_2);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    MDCRippleFoundation.prototype.removeCssVars = function () {
        var _this = this;
        var rippleStrings = MDCRippleFoundation.strings;
        var keys = Object.keys(rippleStrings);
        keys.forEach(function (key) {
            if (key.indexOf('VAR_') === 0) {
                _this.adapter.updateCssVariable(rippleStrings[key], null);
            }
        });
    };
    MDCRippleFoundation.prototype.activateImpl = function (evt) {
        var _this = this;
        if (this.adapter.isSurfaceDisabled()) {
            return;
        }
        var activationState = this.activationState;
        if (activationState.isActivated) {
            return;
        }
        // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
        var previousActivationEvent = this.previousActivationEvent;
        var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
        if (isSameInteraction) {
            return;
        }
        activationState.isActivated = true;
        activationState.isProgrammatic = evt === undefined;
        activationState.activationEvent = evt;
        activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
        var hasActivatedChild = evt !== undefined &&
            activatedTargets.length > 0 &&
            activatedTargets.some(function (target) { return _this.adapter.containsEventTarget(target); });
        if (hasActivatedChild) {
            // Immediately reset activation state, while preserving logic that prevents touch follow-on events
            this.resetActivationState();
            return;
        }
        if (evt !== undefined) {
            activatedTargets.push(evt.target);
            this.registerDeactivationHandlers(evt);
        }
        activationState.wasElementMadeActive = this.checkElementMadeActive(evt);
        if (activationState.wasElementMadeActive) {
            this.animateActivation();
        }
        requestAnimationFrame(function () {
            // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
            activatedTargets = [];
            if (!activationState.wasElementMadeActive
                && evt !== undefined
                && (evt.key === ' ' || evt.keyCode === 32)) {
                // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                // active states inconsistently when they're called within event handling code:
                // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                // variable is set within a rAF callback for a submit button interaction (#2241).
                activationState.wasElementMadeActive = _this.checkElementMadeActive(evt);
                if (activationState.wasElementMadeActive) {
                    _this.animateActivation();
                }
            }
            if (!activationState.wasElementMadeActive) {
                // Reset activation state immediately if element was not made active.
                _this.activationState = _this.defaultActivationState();
            }
        });
    };
    MDCRippleFoundation.prototype.checkElementMadeActive = function (evt) {
        return (evt !== undefined && evt.type === 'keydown') ?
            this.adapter.isSurfaceActive() :
            true;
    };
    MDCRippleFoundation.prototype.animateActivation = function () {
        var _this = this;
        var _a = MDCRippleFoundation.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
        var _b = MDCRippleFoundation.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
        var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal();
        var translateStart = '';
        var translateEnd = '';
        if (!this.adapter.isUnbounded()) {
            var _c = this.getFgTranslationCoordinates(), startPoint = _c.startPoint, endPoint = _c.endPoint;
            translateStart = startPoint.x + "px, " + startPoint.y + "px";
            translateEnd = endPoint.x + "px, " + endPoint.y + "px";
        }
        this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
        this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
        // Cancel any ongoing activation/deactivation animations
        clearTimeout(this.activationTimer);
        clearTimeout(this.fgDeactivationRemovalTimer);
        this.rmBoundedActivationClasses();
        this.adapter.removeClass(FG_DEACTIVATION);
        // Force layout in order to re-trigger the animation.
        this.adapter.computeBoundingRect();
        this.adapter.addClass(FG_ACTIVATION);
        this.activationTimer = setTimeout(function () {
            _this.activationTimerCallback();
        }, DEACTIVATION_TIMEOUT_MS);
    };
    MDCRippleFoundation.prototype.getFgTranslationCoordinates = function () {
        var _a = this.activationState, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
        var startPoint;
        if (wasActivatedByPointer) {
            startPoint = getNormalizedEventCoords(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
        }
        else {
            startPoint = {
                x: this.frame.width / 2,
                y: this.frame.height / 2,
            };
        }
        // Center the element around the start point.
        startPoint = {
            x: startPoint.x - (this.initialSize / 2),
            y: startPoint.y - (this.initialSize / 2),
        };
        var endPoint = {
            x: (this.frame.width / 2) - (this.initialSize / 2),
            y: (this.frame.height / 2) - (this.initialSize / 2),
        };
        return { startPoint: startPoint, endPoint: endPoint };
    };
    MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady = function () {
        var _this = this;
        // This method is called both when a pointing device is released, and when the activation animation ends.
        // The deactivation animation should only run after both of those occur.
        var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
        var _a = this.activationState, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
        var activationHasEnded = hasDeactivationUXRun || !isActivated;
        if (activationHasEnded && this.activationAnimationHasEnded) {
            this.rmBoundedActivationClasses();
            this.adapter.addClass(FG_DEACTIVATION);
            this.fgDeactivationRemovalTimer = setTimeout(function () {
                _this.adapter.removeClass(FG_DEACTIVATION);
            }, numbers$7.FG_DEACTIVATION_MS);
        }
    };
    MDCRippleFoundation.prototype.rmBoundedActivationClasses = function () {
        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
        this.adapter.removeClass(FG_ACTIVATION);
        this.activationAnimationHasEnded = false;
        this.adapter.computeBoundingRect();
    };
    MDCRippleFoundation.prototype.resetActivationState = function () {
        var _this = this;
        this.previousActivationEvent = this.activationState.activationEvent;
        this.activationState = this.defaultActivationState();
        // Touch devices may fire additional events for the same interaction within a short time.
        // Store the previous event until it's safe to assume that subsequent events are for new interactions.
        setTimeout(function () { return _this.previousActivationEvent = undefined; }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    };
    MDCRippleFoundation.prototype.deactivateImpl = function () {
        var _this = this;
        var activationState = this.activationState;
        // This can happen in scenarios such as when you have a keyup event that blurs the element.
        if (!activationState.isActivated) {
            return;
        }
        var state = __assign({}, activationState);
        if (activationState.isProgrammatic) {
            requestAnimationFrame(function () {
                _this.animateDeactivation(state);
            });
            this.resetActivationState();
        }
        else {
            this.deregisterDeactivationHandlers();
            requestAnimationFrame(function () {
                _this.activationState.hasDeactivationUXRun = true;
                _this.animateDeactivation(state);
                _this.resetActivationState();
            });
        }
    };
    MDCRippleFoundation.prototype.animateDeactivation = function (_a) {
        var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
        if (wasActivatedByPointer || wasElementMadeActive) {
            this.runDeactivationUXLogicIfReady();
        }
    };
    MDCRippleFoundation.prototype.layoutInternal = function () {
        var _this = this;
        this.frame = this.adapter.computeBoundingRect();
        var maxDim = Math.max(this.frame.height, this.frame.width);
        // Surface diameter is treated differently for unbounded vs. bounded ripples.
        // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
        // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
        // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
        // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
        // `overflow: hidden`.
        var getBoundedRadius = function () {
            var hypotenuse = Math.sqrt(Math.pow(_this.frame.width, 2) + Math.pow(_this.frame.height, 2));
            return hypotenuse + MDCRippleFoundation.numbers.PADDING;
        };
        this.maxRadius = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
        // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
        var initialSize = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
        // Unbounded ripple size should always be even number to equally center align.
        if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
            this.initialSize = initialSize - 1;
        }
        else {
            this.initialSize = initialSize;
        }
        this.fgScale = "" + this.maxRadius / this.initialSize;
        this.updateLayoutCssVars();
    };
    MDCRippleFoundation.prototype.updateLayoutCssVars = function () {
        var _a = MDCRippleFoundation.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
        this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize + "px");
        this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale);
        if (this.adapter.isUnbounded()) {
            this.unboundedCoords = {
                left: Math.round((this.frame.width / 2) - (this.initialSize / 2)),
                top: Math.round((this.frame.height / 2) - (this.initialSize / 2)),
            };
            this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords.left + "px");
            this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords.top + "px");
        }
    };
    return MDCRippleFoundation;
}(MDCFoundation));
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var MDCRippleFoundation$1 = MDCRippleFoundation;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i$1=e$1(class extends i$2{constructor(t){var e;if(super(t),t.type!==t$1.ATTRIBUTE||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.vt){this.vt=new Set;for(const t in r)this.vt.add(t);return this.render(r)}this.vt.forEach((t=>{null==r[t]&&(this.vt.delete(t),t.includes("-")?s.removeProperty(t):s[t]="");}));for(const t in r){const e=r[t];null!=e&&(this.vt.add(t),t.includes("-")?s.setProperty(t,e):s[t]=e);}return x}});

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class RippleBase extends BaseElement {
    constructor() {
        super(...arguments);
        this.primary = false;
        this.accent = false;
        this.unbounded = false;
        this.disabled = false;
        this.activated = false;
        this.selected = false;
        this.internalUseStateLayerCustomProperties = false;
        this.hovering = false;
        this.bgFocused = false;
        this.fgActivation = false;
        this.fgDeactivation = false;
        this.fgScale = '';
        this.fgSize = '';
        this.translateStart = '';
        this.translateEnd = '';
        this.leftPos = '';
        this.topPos = '';
        this.mdcFoundationClass = MDCRippleFoundation$1;
    }
    get isActive() {
        return matches(this.parentElement || this, ':active');
    }
    createAdapter() {
        return {
            browserSupportsCssVars: () => true,
            isUnbounded: () => this.unbounded,
            isSurfaceActive: () => this.isActive,
            isSurfaceDisabled: () => this.disabled,
            addClass: (className) => {
                switch (className) {
                    case 'mdc-ripple-upgraded--background-focused':
                        this.bgFocused = true;
                        break;
                    case 'mdc-ripple-upgraded--foreground-activation':
                        this.fgActivation = true;
                        break;
                    case 'mdc-ripple-upgraded--foreground-deactivation':
                        this.fgDeactivation = true;
                        break;
                }
            },
            removeClass: (className) => {
                switch (className) {
                    case 'mdc-ripple-upgraded--background-focused':
                        this.bgFocused = false;
                        break;
                    case 'mdc-ripple-upgraded--foreground-activation':
                        this.fgActivation = false;
                        break;
                    case 'mdc-ripple-upgraded--foreground-deactivation':
                        this.fgDeactivation = false;
                        break;
                }
            },
            containsEventTarget: () => true,
            registerInteractionHandler: () => undefined,
            deregisterInteractionHandler: () => undefined,
            registerDocumentInteractionHandler: () => undefined,
            deregisterDocumentInteractionHandler: () => undefined,
            registerResizeHandler: () => undefined,
            deregisterResizeHandler: () => undefined,
            updateCssVariable: (varName, value) => {
                switch (varName) {
                    case '--mdc-ripple-fg-scale':
                        this.fgScale = value;
                        break;
                    case '--mdc-ripple-fg-size':
                        this.fgSize = value;
                        break;
                    case '--mdc-ripple-fg-translate-end':
                        this.translateEnd = value;
                        break;
                    case '--mdc-ripple-fg-translate-start':
                        this.translateStart = value;
                        break;
                    case '--mdc-ripple-left':
                        this.leftPos = value;
                        break;
                    case '--mdc-ripple-top':
                        this.topPos = value;
                        break;
                }
            },
            computeBoundingRect: () => (this.parentElement || this).getBoundingClientRect(),
            getWindowPageOffset: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        };
    }
    startPress(ev) {
        this.waitForFoundation(() => {
            this.mdcFoundation.activate(ev);
        });
    }
    endPress() {
        this.waitForFoundation(() => {
            this.mdcFoundation.deactivate();
        });
    }
    startFocus() {
        this.waitForFoundation(() => {
            this.mdcFoundation.handleFocus();
        });
    }
    endFocus() {
        this.waitForFoundation(() => {
            this.mdcFoundation.handleBlur();
        });
    }
    startHover() {
        this.hovering = true;
    }
    endHover() {
        this.hovering = false;
    }
    /**
     * Wait for the MDCFoundation to be created by `firstUpdated`
     */
    waitForFoundation(fn) {
        if (this.mdcFoundation) {
            fn();
        }
        else {
            this.updateComplete.then(fn);
        }
    }
    update(changedProperties) {
        if (changedProperties.has('disabled')) {
            // stop hovering when ripple is disabled to prevent a stuck "hover" state
            // When re-enabled, the outer component will get a `mouseenter` event on
            // the first movement, which will call `startHover()`
            if (this.disabled) {
                this.endHover();
            }
        }
        super.update(changedProperties);
    }
    /** @soyTemplate */
    render() {
        const shouldActivateInPrimary = this.activated && (this.primary || !this.accent);
        const shouldSelectInPrimary = this.selected && (this.primary || !this.accent);
        /** @classMap */
        const classes = {
            'mdc-ripple-surface--accent': this.accent,
            'mdc-ripple-surface--primary--activated': shouldActivateInPrimary,
            'mdc-ripple-surface--accent--activated': this.accent && this.activated,
            'mdc-ripple-surface--primary--selected': shouldSelectInPrimary,
            'mdc-ripple-surface--accent--selected': this.accent && this.selected,
            'mdc-ripple-surface--disabled': this.disabled,
            'mdc-ripple-surface--hover': this.hovering,
            'mdc-ripple-surface--primary': this.primary,
            'mdc-ripple-surface--selected': this.selected,
            'mdc-ripple-upgraded--background-focused': this.bgFocused,
            'mdc-ripple-upgraded--foreground-activation': this.fgActivation,
            'mdc-ripple-upgraded--foreground-deactivation': this.fgDeactivation,
            'mdc-ripple-upgraded--unbounded': this.unbounded,
            'mdc-ripple-surface--internal-use-state-layer-custom-properties': this.internalUseStateLayerCustomProperties,
        };
        return y `
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${o$1(classes)}"
          style="${i$1({
            '--mdc-ripple-fg-scale': this.fgScale,
            '--mdc-ripple-fg-size': this.fgSize,
            '--mdc-ripple-fg-translate-end': this.translateEnd,
            '--mdc-ripple-fg-translate-start': this.translateStart,
            '--mdc-ripple-left': this.leftPos,
            '--mdc-ripple-top': this.topPos,
        })}"></div>`;
    }
}
__decorate([
    i$3('.mdc-ripple-surface')
], RippleBase.prototype, "mdcRoot", void 0);
__decorate([
    e$6({ type: Boolean })
], RippleBase.prototype, "primary", void 0);
__decorate([
    e$6({ type: Boolean })
], RippleBase.prototype, "accent", void 0);
__decorate([
    e$6({ type: Boolean })
], RippleBase.prototype, "unbounded", void 0);
__decorate([
    e$6({ type: Boolean })
], RippleBase.prototype, "disabled", void 0);
__decorate([
    e$6({ type: Boolean })
], RippleBase.prototype, "activated", void 0);
__decorate([
    e$6({ type: Boolean })
], RippleBase.prototype, "selected", void 0);
__decorate([
    e$6({ type: Boolean })
], RippleBase.prototype, "internalUseStateLayerCustomProperties", void 0);
__decorate([
    t$2()
], RippleBase.prototype, "hovering", void 0);
__decorate([
    t$2()
], RippleBase.prototype, "bgFocused", void 0);
__decorate([
    t$2()
], RippleBase.prototype, "fgActivation", void 0);
__decorate([
    t$2()
], RippleBase.prototype, "fgDeactivation", void 0);
__decorate([
    t$2()
], RippleBase.prototype, "fgScale", void 0);
__decorate([
    t$2()
], RippleBase.prototype, "fgSize", void 0);
__decorate([
    t$2()
], RippleBase.prototype, "translateStart", void 0);
__decorate([
    t$2()
], RippleBase.prototype, "translateEnd", void 0);
__decorate([
    t$2()
], RippleBase.prototype, "leftPos", void 0);
__decorate([
    t$2()
], RippleBase.prototype, "topPos", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$h = i$6 `.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
let Ripple = class Ripple extends RippleBase {
};
Ripple.styles = [styles$h];
Ripple = __decorate([
    e$7('mwc-ripple')
], Ripple);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TypeScript version of the decorator
 * @see https://www.typescriptlang.org/docs/handbook/decorators.html#property-decorators
 */
function tsDecorator(prototype, name, descriptor) {
    const constructor = prototype.constructor;
    if (!descriptor) {
        /**
         * lit uses internal properties with two leading underscores to
         * provide storage for accessors
         */
        const litInternalPropertyKey = `__${name}`;
        descriptor =
            constructor.getPropertyDescriptor(name, litInternalPropertyKey);
        if (!descriptor) {
            throw new Error('@ariaProperty must be used after a @property decorator');
        }
    }
    // descriptor must exist at this point, reassign so typescript understands
    const propDescriptor = descriptor;
    let attribute = '';
    if (!propDescriptor.set) {
        throw new Error(`@ariaProperty requires a setter for ${name}`);
    }
    // TODO(b/202853219): Remove this check when internal tooling is
    // compatible
    // tslint:disable-next-line:no-any bail if applied to internal generated class
    if (prototype.dispatchWizEvent) {
        return descriptor;
    }
    const wrappedDescriptor = {
        configurable: true,
        enumerable: true,
        set(value) {
            if (attribute === '') {
                const options = constructor.getPropertyOptions(name);
                // if attribute is not a string, use `name` instead
                attribute =
                    typeof options.attribute === 'string' ? options.attribute : name;
            }
            if (this.hasAttribute(attribute)) {
                this.removeAttribute(attribute);
            }
            propDescriptor.set.call(this, value);
        }
    };
    if (propDescriptor.get) {
        wrappedDescriptor.get = function () {
            return propDescriptor.get.call(this);
        };
    }
    return wrappedDescriptor;
}
/**
 * A property decorator proxies an aria attribute to an internal node
 *
 * This decorator is only intended for use with ARIA attributes, such as `role`
 * and `aria-label` due to screenreader needs.
 *
 * Upon first render, `@ariaProperty` will remove the attribute from the host
 * element to prevent screenreaders from reading the host instead of the
 * internal node.
 *
 * This decorator should only be used for non-Symbol public fields decorated
 * with `@property`, or on a setter with an optional getter.
 *
 * @example
 * ```ts
 * class MyElement {
 *   @ariaProperty
 *   @property({ type: String, attribute: 'aria-label' })
 *   ariaLabel!: string;
 * }
 * ```
 * @category Decorator
 * @ExportDecoratedItems
 */
function ariaProperty(protoOrDescriptor, name, 
// tslint:disable-next-line:no-any any is required as a return type from decorators
descriptor) {
    if (name !== undefined) {
        return tsDecorator(protoOrDescriptor, name, descriptor);
    }
    else {
        throw new Error('@ariaProperty only supports TypeScript Decorators');
    }
}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var _a$1, _b$1;
// ShadyDOM should submit <input> elements in component internals
const USING_SHADY_DOM = (_b$1 = (_a$1 = window.ShadyDOM) === null || _a$1 === void 0 ? void 0 : _a$1.inUse) !== null && _b$1 !== void 0 ? _b$1 : false;
/** @soyCompatible */
class FormElement extends BaseElement {
    constructor() {
        super(...arguments);
        /**
         * Disabled state for the component. When `disabled` is set to `true`, the
         * component will not be added to form submission.
         */
        this.disabled = false;
        /**
         * Form element that contains this element
         */
        this.containingForm = null;
        this.formDataListener = (ev) => {
            if (!this.disabled) {
                this.setFormData(ev.formData);
            }
        };
    }
    findFormElement() {
        // If the component internals are not in Shadow DOM, subscribing to form
        // data events could lead to duplicated data, which may not work correctly
        // on the server side.
        if (!this.shadowRoot || USING_SHADY_DOM) {
            return null;
        }
        const root = this.getRootNode();
        const forms = root.querySelectorAll('form');
        for (const form of Array.from(forms)) {
            if (form.contains(this)) {
                return form;
            }
        }
        return null;
    }
    connectedCallback() {
        var _a;
        super.connectedCallback();
        this.containingForm = this.findFormElement();
        (_a = this.containingForm) === null || _a === void 0 ? void 0 : _a.addEventListener('formdata', this.formDataListener);
    }
    disconnectedCallback() {
        var _a;
        super.disconnectedCallback();
        (_a = this.containingForm) === null || _a === void 0 ? void 0 : _a.removeEventListener('formdata', this.formDataListener);
        this.containingForm = null;
    }
    click() {
        if (this.formElement && !this.disabled) {
            this.formElement.focus();
            this.formElement.click();
        }
    }
    firstUpdated() {
        super.firstUpdated();
        if (this.shadowRoot) {
            this.mdcRoot.addEventListener('change', (e) => {
                this.dispatchEvent(new Event('change', e));
            });
        }
    }
}
FormElement.shadowRootOptions = { mode: 'open', delegatesFocus: true };
__decorate([
    e$6({ type: Boolean })
], FormElement.prototype, "disabled", void 0);

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Specifies an observer callback that is run when the decorated property
 * changes. The observer receives the current and old value as arguments.
 */
const observer = (observer) => 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(proto, propName) => {
    // if we haven't wrapped `updated` in this class, do so
    if (!proto.constructor
        ._observers) {
        proto.constructor._observers = new Map();
        const userUpdated = proto.updated;
        proto.updated = function (changedProperties) {
            userUpdated.call(this, changedProperties);
            changedProperties.forEach((v, k) => {
                const observers = this.constructor
                    ._observers;
                const observer = observers.get(k);
                if (observer !== undefined) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    observer.call(this, this[k], v);
                }
            });
        };
        // clone any existing observers (superclasses)
        // eslint-disable-next-line no-prototype-builtins
    }
    else if (!proto.constructor.hasOwnProperty('_observers')) {
        const observers = proto.constructor._observers;
        proto.constructor._observers = new Map();
        observers.forEach(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (v, k) => proto.constructor._observers.set(k, v));
    }
    // set this method
    proto.constructor._observers.set(propName, observer);
};

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Style preference for leading underscores.
// tslint:disable:strip-private-property-underscore
/**
 * Unique symbol for marking roots
 */
const selectionController = Symbol('selection controller');
/**
 * Set of checkable elements with added metadata
 */
class SingleSelectionSet {
    constructor() {
        this.selected = null;
        this.ordered = null;
        this.set = new Set();
    }
}
/**
 * Controller that provides behavior similar to a native `<input type="radio">`
 * group.
 *
 * Behaviors:
 *
 * - Selection via key navigation (currently LTR is supported)
 * - Deselection of other grouped, checkable controls upon selection
 * - Grouping of checkable elements by name
 *   - Defaults grouping scope to host shadow root
 *   - Document-wide scoping enabled
 * - Land focus only on checked element. Focuses leading element when none
 *   checked.
 *
 * Intended Usage:
 *
 * ```ts
 * class MyElement extends HTMLElement {
 *   private selectionController: SingleSelectionController | null = null;
 *   name = "";
 *   global = false;
 *
 *   private _checked = false;
 *   set checked(checked: boolean) {
 *     const oldVal = this._checked;
 *     if (checked === oldVal) return;
 *
 *     this._checked = checked;
 *
 *     if (this.selectionController) {
 *       this.selectionController.update(this)
 *     }
 *   }
 *
 *   get checked() {
 *     return this._checked;
 *   }
 *
 *   connectedCallback() {
 *     this.selectionController = SelectionController.getController(this);
 *     this.selectionController.register(this);
 *     this.selectionController.update(this);
 *   }
 *
 *   disconnectedCallback() {
 *     this.selectionController!.unregister(this);
 *     this.selectionController = null;
 *   }
 * }
 * ```
 */
class SingleSelectionController {
    constructor(element) {
        this.sets = {};
        this.focusedSet = null;
        this.mouseIsDown = false;
        this.updating = false;
        element.addEventListener('keydown', (e) => {
            this.keyDownHandler(e);
        });
        element.addEventListener('mousedown', () => {
            this.mousedownHandler();
        });
        element.addEventListener('mouseup', () => {
            this.mouseupHandler();
        });
    }
    /**
     * Get a controller for the given element. If no controller exists, one will
     * be created. Defaults to getting the controller scoped to the element's root
     * node shadow root unless `element.global` is true. Then, it will get a
     * `window.document`-scoped controller.
     *
     * @param element Element from which to get / create a SelectionController. If
     *     `element.global` is true, it gets a selection controller scoped to
     *     `window.document`.
     */
    static getController(element) {
        const useGlobal = !('global' in element) || ('global' in element && element.global);
        const root = useGlobal ? document :
            element.getRootNode();
        let controller = root[selectionController];
        if (controller === undefined) {
            controller = new SingleSelectionController(root);
            root[selectionController] = controller;
        }
        return controller;
    }
    keyDownHandler(e) {
        const element = e.target;
        if (!('checked' in element)) {
            return;
        }
        if (!this.has(element)) {
            return;
        }
        if (e.key == 'ArrowRight' || e.key == 'ArrowDown') {
            this.selectNext(element);
        }
        else if (e.key == 'ArrowLeft' || e.key == 'ArrowUp') {
            this.selectPrevious(element);
        }
    }
    mousedownHandler() {
        this.mouseIsDown = true;
    }
    mouseupHandler() {
        this.mouseIsDown = false;
    }
    /**
     * Whether or not the controller controls  the given element.
     *
     * @param element element to check
     */
    has(element) {
        const set = this.getSet(element.name);
        return set.set.has(element);
    }
    /**
     * Selects and returns the controlled element previous to the given element in
     * document position order. See
     * [Node.compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
     *
     * @param element element relative from which preceding element is fetched
     */
    selectPrevious(element) {
        const order = this.getOrdered(element);
        const i = order.indexOf(element);
        const previous = order[i - 1] || order[order.length - 1];
        this.select(previous);
        return previous;
    }
    /**
     * Selects and returns the controlled element next to the given element in
     * document position order. See
     * [Node.compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
     *
     * @param element element relative from which following element is fetched
     */
    selectNext(element) {
        const order = this.getOrdered(element);
        const i = order.indexOf(element);
        const next = order[i + 1] || order[0];
        this.select(next);
        return next;
    }
    select(element) {
        element.click();
    }
    /**
     * Focuses the selected element in the given element's selection set. User's
     * mouse selection will override this focus.
     *
     * @param element Element from which selection set is derived and subsequently
     *     focused.
     * @deprecated update() method now handles focus management by setting
     *     appropriate tabindex to form element.
     */
    focus(element) {
        // Only manage focus state when using keyboard
        if (this.mouseIsDown) {
            return;
        }
        const set = this.getSet(element.name);
        const currentFocusedSet = this.focusedSet;
        this.focusedSet = set;
        if (currentFocusedSet != set && set.selected && set.selected != element) {
            set.selected.focus();
        }
    }
    /**
     * @return Returns true if atleast one radio is selected in the radio group.
     */
    isAnySelected(element) {
        const set = this.getSet(element.name);
        for (const e of set.set) {
            if (e.checked) {
                return true;
            }
        }
        return false;
    }
    /**
     * Returns the elements in the given element's selection set in document
     * position order.
     * [Node.compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
     *
     * @param element Element from which selection set is derived and subsequently
     *     ordered.
     */
    getOrdered(element) {
        const set = this.getSet(element.name);
        if (!set.ordered) {
            set.ordered = Array.from(set.set);
            set.ordered.sort((a, b) => a.compareDocumentPosition(b) == Node.DOCUMENT_POSITION_PRECEDING ?
                1 :
                0);
        }
        return set.ordered;
    }
    /**
     * Gets the selection set of the given name and creates one if it does not yet
     * exist.
     *
     * @param name Name of set
     */
    getSet(name) {
        if (!this.sets[name]) {
            this.sets[name] = new SingleSelectionSet();
        }
        return this.sets[name];
    }
    /**
     * Register the element in the selection controller.
     *
     * @param element Element to register. Registers in set of `element.name`.
     */
    register(element) {
        // TODO(b/168546148): Remove accessing 'name' via getAttribute() when new
        // base class is created without single selection controller. Component
        // maybe booted up after it is connected to DOM in which case properties
        // (including `name`) are not updated yet.
        const name = element.name || element.getAttribute('name') || '';
        const set = this.getSet(name);
        set.set.add(element);
        set.ordered = null;
    }
    /**
     * Unregister the element from selection controller.
     *
     * @param element Element to register. Registers in set of `element.name`.
     */
    unregister(element) {
        const set = this.getSet(element.name);
        set.set.delete(element);
        set.ordered = null;
        if (set.selected == element) {
            set.selected = null;
        }
    }
    /**
     * Unselects other elements in element's set if element is checked. Noop
     * otherwise.
     *
     * @param element Element from which to calculate selection controller update.
     */
    update(element) {
        if (this.updating) {
            return;
        }
        this.updating = true;
        const set = this.getSet(element.name);
        if (element.checked) {
            for (const e of set.set) {
                if (e == element) {
                    continue;
                }
                e.checked = false;
            }
            set.selected = element;
        }
        // When tabbing through land focus on the checked radio in the group.
        if (this.isAnySelected(element)) {
            for (const e of set.set) {
                if (e.formElementTabIndex === undefined) {
                    break;
                }
                e.formElementTabIndex = e.checked ? 0 : -1;
            }
        }
        this.updating = false;
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Class that encapsulates the events handlers for `mwc-ripple`
 *
 *
 * Example:
 * ```
 * class XFoo extends LitElement {
 *   async getRipple() {
 *     this.renderRipple = true;
 *     await this.updateComplete;
 *     return this.renderRoot.querySelector('mwc-ripple');
 *   }
 *   rippleHandlers = new RippleHandlers(() => this.getRipple());
 *
 *   render() {
 *     return html`
 *       <div @mousedown=${this.rippleHandlers.startPress}></div>
 *       ${this.renderRipple ? html`<mwc-ripple></mwc-ripple>` : ''}
 *     `;
 *   }
 * }
 * ```
 */
class RippleHandlers {
    constructor(
    /** Function that returns a `mwc-ripple` */
    rippleFn) {
        this.startPress = (ev) => {
            rippleFn().then((r) => {
                r && r.startPress(ev);
            });
        };
        this.endPress = () => {
            rippleFn().then((r) => {
                r && r.endPress();
            });
        };
        this.startFocus = () => {
            rippleFn().then((r) => {
                r && r.startFocus();
            });
        };
        this.endFocus = () => {
            rippleFn().then((r) => {
                r && r.endFocus();
            });
        };
        this.startHover = () => {
            rippleFn().then((r) => {
                r && r.startHover();
            });
        };
        this.endHover = () => {
            rippleFn().then((r) => {
                r && r.endHover();
            });
        };
    }
}

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings$8 = {
    NATIVE_CONTROL_SELECTOR: '.mdc-radio__native-control',
};
var cssClasses$a = {
    DISABLED: 'mdc-radio--disabled',
    ROOT: 'mdc-radio',
};

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCRadioFoundation = /** @class */ (function (_super) {
    __extends(MDCRadioFoundation, _super);
    function MDCRadioFoundation(adapter) {
        return _super.call(this, __assign(__assign({}, MDCRadioFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCRadioFoundation, "cssClasses", {
        get: function () {
            return cssClasses$a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRadioFoundation, "strings", {
        get: function () {
            return strings$8;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRadioFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                setNativeControlDisabled: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCRadioFoundation.prototype.setDisabled = function (disabled) {
        var DISABLED = MDCRadioFoundation.cssClasses.DISABLED;
        this.adapter.setNativeControlDisabled(disabled);
        if (disabled) {
            this.adapter.addClass(DISABLED);
        }
        else {
            this.adapter.removeClass(DISABLED);
        }
    };
    return MDCRadioFoundation;
}(MDCFoundation));
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var MDCRadioFoundation$1 = MDCRadioFoundation;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l$2=l=>null!=l?l:b;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @fires checked
 * @soyCompatible
 */
class RadioBase extends FormElement {
    constructor() {
        super(...arguments);
        this._checked = false;
        this.useStateLayerCustomProperties = false;
        this.global = false;
        this.disabled = false;
        this.value = 'on';
        this.name = '';
        /**
         * Touch target extends beyond visual boundary of a component by default.
         * Set to `true` to remove touch target added to the component.
         * @see https://material.io/design/usability/accessibility.html
         */
        this.reducedTouchTarget = false;
        this.mdcFoundationClass = MDCRadioFoundation$1;
        /**
         * input's tabindex is updated based on checked status.
         * Tab navigation will be removed from unchecked radios.
         */
        this.formElementTabIndex = 0;
        this.focused = false;
        this.shouldRenderRipple = false;
        this.rippleElement = null;
        this.rippleHandlers = new RippleHandlers(() => {
            this.shouldRenderRipple = true;
            this.ripple.then((v) => {
                this.rippleElement = v;
            });
            return this.ripple;
        });
    }
    get checked() {
        return this._checked;
    }
    /**
     * We define our own getter/setter for `checked` because we need to track
     * changes to it synchronously.
     *
     * The order in which the `checked` property is set across radio buttons
     * within the same group is very important. However, we can't rely on
     * UpdatingElement's `updated` callback to observe these changes (which is
     * also what the `@observer` decorator uses), because it batches changes to
     * all properties.
     *
     * Consider:
     *
     *   radio1.disabled = true;
     *   radio2.checked = true;
     *   radio1.checked = true;
     *
     * In this case we'd first see all changes for radio1, and then for radio2,
     * and we couldn't tell that radio1 was the most recently checked.
     */
    set checked(isChecked) {
        var _a, _b;
        const oldValue = this._checked;
        if (isChecked === oldValue) {
            return;
        }
        this._checked = isChecked;
        if (this.formElement) {
            this.formElement.checked = isChecked;
        }
        (_a = this._selectionController) === null || _a === void 0 ? void 0 : _a.update(this);
        if (isChecked === false) {
            // Remove focus ring when unchecked on other radio programmatically.
            // Blur on input since this determines the focus style.
            (_b = this.formElement) === null || _b === void 0 ? void 0 : _b.blur();
        }
        this.requestUpdate('checked', oldValue);
        // useful when unchecks self and wrapping element needs to synchronize
        // TODO(b/168543810): Remove triggering event on programmatic API call.
        this.dispatchEvent(new Event('checked', { bubbles: true, composed: true }));
    }
    _handleUpdatedValue(newValue) {
        // the observer function can't access protected fields (according to
        // closure compiler) because it's not a method on the class, so we need this
        // wrapper.
        this.formElement.value = newValue;
    }
    /** @soyTemplate */
    renderRipple() {
        return this.shouldRenderRipple ? y `<mwc-ripple unbounded accent
        .internalUseStateLayerCustomProperties="${this.useStateLayerCustomProperties}"
        .disabled="${this.disabled}"></mwc-ripple>` :
            '';
    }
    get isRippleActive() {
        var _a;
        return ((_a = this.rippleElement) === null || _a === void 0 ? void 0 : _a.isActive) || false;
    }
    connectedCallback() {
        super.connectedCallback();
        // Note that we must defer creating the selection controller until the
        // element has connected, because selection controllers are keyed by the
        // radio's shadow root. For example, if we're stamping in a lit map
        // or repeat, then we'll be constructed before we're added to a root node.
        //
        // Also note if we aren't using native shadow DOM, we still need a
        // SelectionController, because we should update checked status of other
        // radios in the group when selection changes. It also simplifies
        // implementation and testing to use one in all cases.
        //
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        this._selectionController = SingleSelectionController.getController(this);
        this._selectionController.register(this);
        // Radios maybe checked before connected, update selection as soon it is
        // connected to DOM. Last checked radio button in the DOM will be selected.
        //
        // NOTE: If we update selection only after firstUpdate() we might mistakenly
        // update checked status before other radios are rendered.
        this._selectionController.update(this);
    }
    disconnectedCallback() {
        // The controller is initialized in connectedCallback, so if we are in
        // disconnectedCallback then it must be initialized.
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this._selectionController.unregister(this);
        this._selectionController = undefined;
    }
    focus() {
        this.formElement.focus();
    }
    createAdapter() {
        return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), { setNativeControlDisabled: (disabled) => {
                this.formElement.disabled = disabled;
            } });
    }
    handleFocus() {
        this.focused = true;
        this.handleRippleFocus();
    }
    handleClick() {
        // Firefox has weird behavior with radios if they are not focused
        this.formElement.focus();
    }
    handleBlur() {
        this.focused = false;
        this.formElement.blur();
        this.rippleHandlers.endFocus();
    }
    setFormData(formData) {
        if (this.name && this.checked) {
            formData.append(this.name, this.value);
        }
    }
    /**
     * @soyTemplate
     * @soyAttributes radioAttributes: input
     * @soyClasses radioClasses: .mdc-radio
     */
    render() {
        /** @classMap */
        const classes = {
            'mdc-radio--touch': !this.reducedTouchTarget,
            'mdc-ripple-upgraded--background-focused': this.focused,
            'mdc-radio--disabled': this.disabled,
        };
        return y `
      <div class="mdc-radio ${o$1(classes)}">
        <input
          tabindex="${this.formElementTabIndex}"
          class="mdc-radio__native-control"
          type="radio"
          name="${this.name}"
          aria-label="${l$2(this.ariaLabel)}"
          aria-labelledby="${l$2(this.ariaLabelledBy)}"
          .checked="${this.checked}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          @change="${this.changeHandler}"
          @focus="${this.handleFocus}"
          @click="${this.handleClick}"
          @blur="${this.handleBlur}"
          @mousedown="${this.handleRippleMouseDown}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleTouchStart}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-radio__background">
          <div class="mdc-radio__outer-circle"></div>
          <div class="mdc-radio__inner-circle"></div>
        </div>
        ${this.renderRipple()}
      </div>`;
    }
    handleRippleMouseDown(event) {
        const onUp = () => {
            window.removeEventListener('mouseup', onUp);
            this.handleRippleDeactivate();
        };
        window.addEventListener('mouseup', onUp);
        this.rippleHandlers.startPress(event);
    }
    handleRippleTouchStart(event) {
        this.rippleHandlers.startPress(event);
    }
    handleRippleDeactivate() {
        this.rippleHandlers.endPress();
    }
    handleRippleMouseEnter() {
        this.rippleHandlers.startHover();
    }
    handleRippleMouseLeave() {
        this.rippleHandlers.endHover();
    }
    handleRippleFocus() {
        this.rippleHandlers.startFocus();
    }
    changeHandler() {
        this.checked = this.formElement.checked;
    }
}
__decorate([
    i$3('.mdc-radio')
], RadioBase.prototype, "mdcRoot", void 0);
__decorate([
    i$3('input')
], RadioBase.prototype, "formElement", void 0);
__decorate([
    t$2()
], RadioBase.prototype, "useStateLayerCustomProperties", void 0);
__decorate([
    e$6({ type: Boolean })
], RadioBase.prototype, "global", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true })
], RadioBase.prototype, "checked", null);
__decorate([
    e$6({ type: Boolean }),
    observer(function (disabled) {
        this.mdcFoundation.setDisabled(disabled);
    })
], RadioBase.prototype, "disabled", void 0);
__decorate([
    e$6({ type: String }),
    observer(function (value) {
        this._handleUpdatedValue(value);
    })
], RadioBase.prototype, "value", void 0);
__decorate([
    e$6({ type: String })
], RadioBase.prototype, "name", void 0);
__decorate([
    e$6({ type: Boolean })
], RadioBase.prototype, "reducedTouchTarget", void 0);
__decorate([
    e$6({ type: Number })
], RadioBase.prototype, "formElementTabIndex", void 0);
__decorate([
    t$2()
], RadioBase.prototype, "focused", void 0);
__decorate([
    t$2()
], RadioBase.prototype, "shouldRenderRipple", void 0);
__decorate([
    e$3('mwc-ripple')
], RadioBase.prototype, "ripple", void 0);
__decorate([
    ariaProperty,
    e$6({ attribute: 'aria-label' })
], RadioBase.prototype, "ariaLabel", void 0);
__decorate([
    ariaProperty,
    e$6({ attribute: 'aria-labelledby' })
], RadioBase.prototype, "ariaLabelledBy", void 0);
__decorate([
    e$5({ passive: true })
], RadioBase.prototype, "handleRippleTouchStart", null);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$g = i$6 `.mdc-touch-target-wrapper{display:inline}.mdc-radio{padding:calc((40px - 20px) / 2)}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.54)}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio .mdc-radio__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__background::before{top:calc(-1 * (40px - 20px) / 2);left:calc(-1 * (40px - 20px) / 2);width:40px;height:40px}.mdc-radio .mdc-radio__native-control{top:calc((40px - 40px) / 2);right:calc((40px - 40px) / 2);left:calc((40px - 40px) / 2);width:40px;height:40px}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-radio.mdc-radio--disabled [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio.mdc-radio--disabled .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio.mdc-radio--disabled [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio.mdc-radio--disabled .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio.mdc-radio--disabled [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio.mdc-radio--disabled .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:GrayText}}.mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:calc((40px - 48px) / 2);right:calc((40px - 48px) / 2);left:calc((40px - 48px) / 2);width:48px;height:48px}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{border-color:CanvasText}}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring::after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring::after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring::after{border-color:CanvasText}}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host{display:inline-block;outline:none}.mdc-radio{vertical-align:bottom}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unchecked-color, rgba(0, 0, 0, 0.54))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Radio = class Radio extends RadioBase {
};
Radio.styles = [styles$g];
Radio = __decorate([
    e$7('mwc-radio')
], Radio);

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$9 = {
    ROOT: 'mdc-form-field',
};
var strings$7 = {
    LABEL_SELECTOR: '.mdc-form-field > label',
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFormFieldFoundation = /** @class */ (function (_super) {
    __extends(MDCFormFieldFoundation, _super);
    function MDCFormFieldFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCFormFieldFoundation.defaultAdapter), adapter)) || this;
        _this.click = function () {
            _this.handleClick();
        };
        return _this;
    }
    Object.defineProperty(MDCFormFieldFoundation, "cssClasses", {
        get: function () {
            return cssClasses$9;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFormFieldFoundation, "strings", {
        get: function () {
            return strings$7;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFormFieldFoundation, "defaultAdapter", {
        get: function () {
            return {
                activateInputRipple: function () { return undefined; },
                deactivateInputRipple: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCFormFieldFoundation.prototype.init = function () {
        this.adapter.registerInteractionHandler('click', this.click);
    };
    MDCFormFieldFoundation.prototype.destroy = function () {
        this.adapter.deregisterInteractionHandler('click', this.click);
    };
    MDCFormFieldFoundation.prototype.handleClick = function () {
        var _this = this;
        this.adapter.activateInputRipple();
        requestAnimationFrame(function () {
            _this.adapter.deactivateInputRipple();
        });
    };
    return MDCFormFieldFoundation;
}(MDCFoundation));
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var MDCFormFieldFoundation$1 = MDCFormFieldFoundation;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class FormfieldBase extends BaseElement {
    constructor() {
        super(...arguments);
        this.alignEnd = false;
        this.spaceBetween = false;
        this.nowrap = false;
        this.label = '';
        this.mdcFoundationClass = MDCFormFieldFoundation$1;
    }
    createAdapter() {
        return {
            registerInteractionHandler: (type, handler) => {
                this.labelEl.addEventListener(type, handler);
            },
            deregisterInteractionHandler: (type, handler) => {
                this.labelEl.removeEventListener(type, handler);
            },
            activateInputRipple: async () => {
                const input = this.input;
                if (input instanceof FormElement) {
                    const ripple = await input.ripple;
                    if (ripple) {
                        ripple.startPress();
                    }
                }
            },
            deactivateInputRipple: async () => {
                const input = this.input;
                if (input instanceof FormElement) {
                    const ripple = await input.ripple;
                    if (ripple) {
                        ripple.endPress();
                    }
                }
            },
        };
    }
    get input() {
        var _a, _b;
        return (_b = (_a = this.slottedInputs) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : null;
    }
    render() {
        const classes = {
            'mdc-form-field--align-end': this.alignEnd,
            'mdc-form-field--space-between': this.spaceBetween,
            'mdc-form-field--nowrap': this.nowrap
        };
        return y `
      <div class="mdc-form-field ${o$1(classes)}">
        <slot></slot>
        <label class="mdc-label"
               @click="${this._labelClick}">${this.label}</label>
      </div>`;
    }
    click() {
        this._labelClick();
    }
    _labelClick() {
        const input = this.input;
        if (input) {
            input.focus();
            input.click();
        }
    }
}
__decorate([
    e$6({ type: Boolean })
], FormfieldBase.prototype, "alignEnd", void 0);
__decorate([
    e$6({ type: Boolean })
], FormfieldBase.prototype, "spaceBetween", void 0);
__decorate([
    e$6({ type: Boolean })
], FormfieldBase.prototype, "nowrap", void 0);
__decorate([
    e$6({ type: String }),
    observer(async function (label) {
        var _a;
        (_a = this.input) === null || _a === void 0 ? void 0 : _a.setAttribute('aria-label', label);
    })
], FormfieldBase.prototype, "label", void 0);
__decorate([
    i$3('.mdc-form-field')
], FormfieldBase.prototype, "mdcRoot", void 0);
__decorate([
    o$2('', true, '*')
], FormfieldBase.prototype, "slottedInputs", void 0);
__decorate([
    i$3('label')
], FormfieldBase.prototype, "labelEl", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$f = i$6 `.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}:host{display:inline-flex}.mdc-form-field{width:100%}::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}::slotted(mwc-switch){margin-right:10px}[dir=rtl] ::slotted(mwc-switch),::slotted(mwc-switch[dir=rtl]){margin-left:10px}`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Formfield = class Formfield extends FormfieldBase {
};
Formfield.styles = [styles$f];
Formfield = __decorate([
    e$7('mwc-formfield')
], Formfield);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$e = i$6 `:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
let Icon = class Icon extends s$3 {
    /** @soyTemplate */
    render() {
        return y `<span><slot></slot></span>`;
    }
};
Icon.styles = [styles$e];
Icon = __decorate([
    e$7('mwc-icon')
], Icon);

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class ButtonBase extends s$3 {
    constructor() {
        super(...arguments);
        this.raised = false;
        this.unelevated = false;
        this.outlined = false;
        this.dense = false;
        this.disabled = false;
        this.trailingIcon = false;
        this.fullwidth = false;
        this.icon = '';
        this.label = '';
        this.expandContent = false;
        this.shouldRenderRipple = false;
        this.rippleHandlers = new RippleHandlers(() => {
            this.shouldRenderRipple = true;
            return this.ripple;
        });
    }
    /** @soyTemplate */
    renderOverlay() {
        return y ``;
    }
    /** @soyTemplate */
    renderRipple() {
        const filled = this.raised || this.unelevated;
        return this.shouldRenderRipple ?
            y `<mwc-ripple class="ripple" .primary="${!filled}" .disabled="${this.disabled}"></mwc-ripple>` :
            '';
    }
    focus() {
        const buttonElement = this.buttonElement;
        if (buttonElement) {
            this.rippleHandlers.startFocus();
            buttonElement.focus();
        }
    }
    blur() {
        const buttonElement = this.buttonElement;
        if (buttonElement) {
            this.rippleHandlers.endFocus();
            buttonElement.blur();
        }
    }
    /** @soyTemplate */
    getRenderClasses() {
        return {
            'mdc-button--raised': this.raised,
            'mdc-button--unelevated': this.unelevated,
            'mdc-button--outlined': this.outlined,
            'mdc-button--dense': this.dense,
        };
    }
    /**
     * @soyTemplate
     * @soyAttributes buttonAttributes: #button
     * @soyClasses buttonClasses: #button
     */
    render() {
        return y `
      <button
          id="button"
          class="mdc-button ${o$1(this.getRenderClasses())}"
          ?disabled="${this.disabled}"
          aria-label="${this.label || this.icon}"
          aria-haspopup="${l$2(this.ariaHasPopup)}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleActivate}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleActivate}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderOverlay()}
        ${this.renderRipple()}
        <span class="leading-icon">
          <slot name="icon">
            ${this.icon && !this.trailingIcon ? this.renderIcon() : ''}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <span class="slot-container ${o$1({
            flex: this.expandContent
        })}">
          <slot></slot>
        </span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon && this.trailingIcon ? this.renderIcon() : ''}
          </slot>
        </span>
      </button>`;
    }
    /** @soyTemplate */
    renderIcon() {
        return y `
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`;
    }
    handleRippleActivate(evt) {
        const onUp = () => {
            window.removeEventListener('mouseup', onUp);
            this.handleRippleDeactivate();
        };
        window.addEventListener('mouseup', onUp);
        this.rippleHandlers.startPress(evt);
    }
    handleRippleDeactivate() {
        this.rippleHandlers.endPress();
    }
    handleRippleMouseEnter() {
        this.rippleHandlers.startHover();
    }
    handleRippleMouseLeave() {
        this.rippleHandlers.endHover();
    }
    handleRippleFocus() {
        this.rippleHandlers.startFocus();
    }
    handleRippleBlur() {
        this.rippleHandlers.endFocus();
    }
}
ButtonBase.shadowRootOptions = { mode: 'open', delegatesFocus: true };
__decorate([
    ariaProperty,
    e$6({ type: String, attribute: 'aria-haspopup' })
], ButtonBase.prototype, "ariaHasPopup", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true })
], ButtonBase.prototype, "raised", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true })
], ButtonBase.prototype, "unelevated", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true })
], ButtonBase.prototype, "outlined", void 0);
__decorate([
    e$6({ type: Boolean })
], ButtonBase.prototype, "dense", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true })
], ButtonBase.prototype, "disabled", void 0);
__decorate([
    e$6({ type: Boolean, attribute: 'trailingicon' })
], ButtonBase.prototype, "trailingIcon", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true })
], ButtonBase.prototype, "fullwidth", void 0);
__decorate([
    e$6({ type: String })
], ButtonBase.prototype, "icon", void 0);
__decorate([
    e$6({ type: String })
], ButtonBase.prototype, "label", void 0);
__decorate([
    e$6({ type: Boolean })
], ButtonBase.prototype, "expandContent", void 0);
__decorate([
    i$3('#button')
], ButtonBase.prototype, "buttonElement", void 0);
__decorate([
    e$3('mwc-ripple')
], ButtonBase.prototype, "ripple", void 0);
__decorate([
    t$2()
], ButtonBase.prototype, "shouldRenderRipple", void 0);
__decorate([
    e$5({ passive: true })
], ButtonBase.prototype, "handleRippleActivate", null);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$d = i$6 `.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase)}.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:transparent}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{display:none}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc( 100% + 4px );width:calc( 100% + 4px );display:block}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after{border-color:CanvasText}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:transparent}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised,.mdc-button--unelevated{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--raised .mdc-button__ripple,.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--outlined .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:1px}.mdc-button--outlined .mdc-button__touch{left:calc(-1 * 1px);width:calc(100% + 2 * 1px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color:#fff;--mdc-ripple-focus-opacity:0.24;--mdc-ripple-hover-opacity:0.08;--mdc-ripple-press-opacity:0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,[dir=rtl] .leading-icon ::slotted(*),[dir=rtl] .leading-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl],.leading-icon ::slotted(*[dir=rtl]),.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{height:100%}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
let Button = class Button extends ButtonBase {
};
Button.styles = [styles$d];
Button = __decorate([
    e$7('mwc-button')
], Button);

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @fires request-selected {RequestSelectedDetail}
 * @fires list-item-rendered
 */
class ListItemBase extends s$3 {
    constructor() {
        super(...arguments);
        this.value = '';
        this.group = null;
        this.tabindex = -1;
        this.disabled = false;
        this.twoline = false;
        this.activated = false;
        this.graphic = null;
        this.multipleGraphics = false;
        this.hasMeta = false;
        this.noninteractive = false;
        this.selected = false;
        this.shouldRenderRipple = false;
        this._managingList = null;
        this.boundOnClick = this.onClick.bind(this);
        this._firstChanged = true;
        this._skipPropRequest = false;
        this.rippleHandlers = new RippleHandlers(() => {
            this.shouldRenderRipple = true;
            return this.ripple;
        });
        this.listeners = [
            {
                target: this,
                eventNames: ['click'],
                cb: () => {
                    this.onClick();
                },
            },
            {
                target: this,
                eventNames: ['mouseenter'],
                cb: this.rippleHandlers.startHover,
            },
            {
                target: this,
                eventNames: ['mouseleave'],
                cb: this.rippleHandlers.endHover,
            },
            {
                target: this,
                eventNames: ['focus'],
                cb: this.rippleHandlers.startFocus,
            },
            {
                target: this,
                eventNames: ['blur'],
                cb: this.rippleHandlers.endFocus,
            },
            {
                target: this,
                eventNames: ['mousedown', 'touchstart'],
                cb: (e) => {
                    const name = e.type;
                    this.onDown(name === 'mousedown' ? 'mouseup' : 'touchend', e);
                },
            },
        ];
    }
    get text() {
        const textContent = this.textContent;
        return textContent ? textContent.trim() : '';
    }
    render() {
        const text = this.renderText();
        const graphic = this.graphic ? this.renderGraphic() : y ``;
        const meta = this.hasMeta ? this.renderMeta() : y ``;
        return y `
      ${this.renderRipple()}
      ${graphic}
      ${text}
      ${meta}`;
    }
    renderRipple() {
        if (this.shouldRenderRipple) {
            return y `
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>`;
        }
        else if (this.activated) {
            return y `<div class="fake-activated-ripple"></div>`;
        }
        else {
            return '';
        }
    }
    renderGraphic() {
        const graphicClasses = {
            multi: this.multipleGraphics,
        };
        return y `
      <span class="mdc-deprecated-list-item__graphic material-icons ${o$1(graphicClasses)}">
        <slot name="graphic"></slot>
      </span>`;
    }
    renderMeta() {
        return y `
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
    }
    renderText() {
        const inner = this.twoline ? this.renderTwoline() : this.renderSingleLine();
        return y `
      <span class="mdc-deprecated-list-item__text">
        ${inner}
      </span>`;
    }
    renderSingleLine() {
        return y `<slot></slot>`;
    }
    renderTwoline() {
        return y `
      <span class="mdc-deprecated-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-deprecated-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `;
    }
    onClick() {
        this.fireRequestSelected(!this.selected, 'interaction');
    }
    onDown(upName, evt) {
        const onUp = () => {
            window.removeEventListener(upName, onUp);
            this.rippleHandlers.endPress();
        };
        window.addEventListener(upName, onUp);
        this.rippleHandlers.startPress(evt);
    }
    fireRequestSelected(selected, source) {
        if (this.noninteractive) {
            return;
        }
        const customEv = new CustomEvent('request-selected', { bubbles: true, composed: true, detail: { source, selected } });
        this.dispatchEvent(customEv);
    }
    connectedCallback() {
        super.connectedCallback();
        if (!this.noninteractive) {
            this.setAttribute('mwc-list-item', '');
        }
        for (const listener of this.listeners) {
            for (const eventName of listener.eventNames) {
                listener.target.addEventListener(eventName, listener.cb, { passive: true });
            }
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        for (const listener of this.listeners) {
            for (const eventName of listener.eventNames) {
                listener.target.removeEventListener(eventName, listener.cb);
            }
        }
        if (this._managingList) {
            this._managingList.debouncedLayout ?
                this._managingList.debouncedLayout(true) :
                this._managingList.layout(true);
        }
    }
    // composed flag, event fire through shadow root and up through composed tree
    firstUpdated() {
        const ev = new Event('list-item-rendered', { bubbles: true, composed: true });
        this.dispatchEvent(ev);
    }
}
__decorate([
    i$3('slot')
], ListItemBase.prototype, "slotElement", void 0);
__decorate([
    e$3('mwc-ripple')
], ListItemBase.prototype, "ripple", void 0);
__decorate([
    e$6({ type: String })
], ListItemBase.prototype, "value", void 0);
__decorate([
    e$6({ type: String, reflect: true })
], ListItemBase.prototype, "group", void 0);
__decorate([
    e$6({ type: Number, reflect: true })
], ListItemBase.prototype, "tabindex", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true }),
    observer(function (value) {
        if (value) {
            this.setAttribute('aria-disabled', 'true');
        }
        else {
            this.setAttribute('aria-disabled', 'false');
        }
    })
], ListItemBase.prototype, "disabled", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true })
], ListItemBase.prototype, "twoline", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true })
], ListItemBase.prototype, "activated", void 0);
__decorate([
    e$6({ type: String, reflect: true })
], ListItemBase.prototype, "graphic", void 0);
__decorate([
    e$6({ type: Boolean })
], ListItemBase.prototype, "multipleGraphics", void 0);
__decorate([
    e$6({ type: Boolean })
], ListItemBase.prototype, "hasMeta", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true }),
    observer(function (value) {
        if (value) {
            this.removeAttribute('aria-checked');
            this.removeAttribute('mwc-list-item');
            this.selected = false;
            this.activated = false;
            this.tabIndex = -1;
        }
        else {
            this.setAttribute('mwc-list-item', '');
        }
    })
], ListItemBase.prototype, "noninteractive", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true }),
    observer(function (value) {
        const role = this.getAttribute('role');
        const isAriaSelectable = role === 'gridcell' || role === 'option' ||
            role === 'row' || role === 'tab';
        if (isAriaSelectable && value) {
            this.setAttribute('aria-selected', 'true');
        }
        else if (isAriaSelectable) {
            this.setAttribute('aria-selected', 'false');
        }
        if (this._firstChanged) {
            this._firstChanged = false;
            return;
        }
        if (this._skipPropRequest) {
            return;
        }
        this.fireRequestSelected(value, 'property');
    })
], ListItemBase.prototype, "selected", void 0);
__decorate([
    t$2()
], ListItemBase.prototype, "shouldRenderRipple", void 0);
__decorate([
    t$2()
], ListItemBase.prototype, "_managingList", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$c = i$6 `:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let ListItem = class ListItem extends ListItemBase {
};
ListItem.styles = [styles$c];
ListItem = __decorate([
    e$7('mwc-list-item')
], ListItem);

function isRemove(edit) {
    return (edit.parent === undefined && edit.node !== undefined);
}
function newEditEvent(edit) {
    return new CustomEvent('oscd-edit', {
        composed: true,
        bubbles: true,
        detail: edit,
    });
}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class IconButtonBase extends s$3 {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.icon = '';
        this.shouldRenderRipple = false;
        this.rippleHandlers = new RippleHandlers(() => {
            this.shouldRenderRipple = true;
            return this.ripple;
        });
    }
    /** @soyTemplate */
    renderRipple() {
        return this.shouldRenderRipple ? y `
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>` :
            '';
    }
    focus() {
        const buttonElement = this.buttonElement;
        if (buttonElement) {
            this.rippleHandlers.startFocus();
            buttonElement.focus();
        }
    }
    blur() {
        const buttonElement = this.buttonElement;
        if (buttonElement) {
            this.rippleHandlers.endFocus();
            buttonElement.blur();
        }
    }
    /** @soyTemplate */
    render() {
        return y `<button
        class="mdc-icon-button mdc-icon-button--display-flex"
        aria-label="${this.ariaLabel || this.icon}"
        aria-haspopup="${l$2(this.ariaHasPopup)}"
        ?disabled="${this.disabled}"
        @focus="${this.handleRippleFocus}"
        @blur="${this.handleRippleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}"
    >${this.renderRipple()}
    ${this.icon ? y `<i class="material-icons">${this.icon}</i>` : ''}
    <span
      ><slot></slot
    ></span>
  </button>`;
    }
    handleRippleMouseDown(event) {
        const onUp = () => {
            window.removeEventListener('mouseup', onUp);
            this.handleRippleDeactivate();
        };
        window.addEventListener('mouseup', onUp);
        this.rippleHandlers.startPress(event);
    }
    handleRippleTouchStart(event) {
        this.rippleHandlers.startPress(event);
    }
    handleRippleDeactivate() {
        this.rippleHandlers.endPress();
    }
    handleRippleMouseEnter() {
        this.rippleHandlers.startHover();
    }
    handleRippleMouseLeave() {
        this.rippleHandlers.endHover();
    }
    handleRippleFocus() {
        this.rippleHandlers.startFocus();
    }
    handleRippleBlur() {
        this.rippleHandlers.endFocus();
    }
}
__decorate([
    e$6({ type: Boolean, reflect: true })
], IconButtonBase.prototype, "disabled", void 0);
__decorate([
    e$6({ type: String })
], IconButtonBase.prototype, "icon", void 0);
__decorate([
    ariaProperty,
    e$6({ type: String, attribute: 'aria-label' })
], IconButtonBase.prototype, "ariaLabel", void 0);
__decorate([
    ariaProperty,
    e$6({ type: String, attribute: 'aria-haspopup' })
], IconButtonBase.prototype, "ariaHasPopup", void 0);
__decorate([
    i$3('button')
], IconButtonBase.prototype, "buttonElement", void 0);
__decorate([
    e$3('mwc-ripple')
], IconButtonBase.prototype, "ripple", void 0);
__decorate([
    t$2()
], IconButtonBase.prototype, "shouldRenderRipple", void 0);
__decorate([
    e$5({ passive: true })
], IconButtonBase.prototype, "handleRippleMouseDown", null);
__decorate([
    e$5({ passive: true })
], IconButtonBase.prototype, "handleRippleTouchStart", null);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$b = i$6 `.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button .mdc-icon-button__focus-ring{display:none}.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:48px;max-width:48px}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:40px;height:40px;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:40px;max-width:40px}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}:host{display:inline-block;outline:none}:host([disabled]){pointer-events:none}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block}:host{--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
let IconButton = class IconButton extends IconButtonBase {
};
IconButton.styles = [styles$b];
IconButton = __decorate([
    e$7('mwc-icon-button')
], IconButton);

/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(() => {
    var _a, _b, _c;
    /* Symbols for private properties */
    const _blockingElements = Symbol();
    const _alreadyInertElements = Symbol();
    const _topElParents = Symbol();
    const _siblingsToRestore = Symbol();
    const _parentMO = Symbol();
    /* Symbols for private static methods */
    const _topChanged = Symbol();
    const _swapInertedSibling = Symbol();
    const _inertSiblings = Symbol();
    const _restoreInertedSiblings = Symbol();
    const _getParents = Symbol();
    const _getDistributedChildren = Symbol();
    const _isInertable = Symbol();
    const _handleMutations = Symbol();
    class BlockingElementsImpl {
        constructor() {
            /**
             * The blocking elements.
             */
            this[_a] = [];
            /**
             * Used to keep track of the parents of the top element, from the element
             * itself up to body. When top changes, the old top might have been removed
             * from the document, so we need to memoize the inerted parents' siblings
             * in order to restore their inerteness when top changes.
             */
            this[_b] = [];
            /**
             * Elements that are already inert before the first blocking element is
             * pushed.
             */
            this[_c] = new Set();
        }
        destructor() {
            // Restore original inertness.
            this[_restoreInertedSiblings](this[_topElParents]);
            // Note we don't want to make these properties nullable on the class,
            // since then we'd need non-null casts in many places. Calling a method on
            // a BlockingElements instance after calling destructor will result in an
            // exception.
            const nullable = this;
            nullable[_blockingElements] = null;
            nullable[_topElParents] = null;
            nullable[_alreadyInertElements] = null;
        }
        get top() {
            const elems = this[_blockingElements];
            return elems[elems.length - 1] || null;
        }
        push(element) {
            if (!element || element === this.top) {
                return;
            }
            // Remove it from the stack, we'll bring it to the top.
            this.remove(element);
            this[_topChanged](element);
            this[_blockingElements].push(element);
        }
        remove(element) {
            const i = this[_blockingElements].indexOf(element);
            if (i === -1) {
                return false;
            }
            this[_blockingElements].splice(i, 1);
            // Top changed only if the removed element was the top element.
            if (i === this[_blockingElements].length) {
                this[_topChanged](this.top);
            }
            return true;
        }
        pop() {
            const top = this.top;
            top && this.remove(top);
            return top;
        }
        has(element) {
            return this[_blockingElements].indexOf(element) !== -1;
        }
        /**
         * Sets `inert` to all document elements except the new top element, its
         * parents, and its distributed content.
         */
        [(_a = _blockingElements, _b = _topElParents, _c = _alreadyInertElements, _topChanged)](newTop) {
            const toKeepInert = this[_alreadyInertElements];
            const oldParents = this[_topElParents];
            // No new top, reset old top if any.
            if (!newTop) {
                this[_restoreInertedSiblings](oldParents);
                toKeepInert.clear();
                this[_topElParents] = [];
                return;
            }
            const newParents = this[_getParents](newTop);
            // New top is not contained in the main document!
            if (newParents[newParents.length - 1].parentNode !== document.body) {
                throw Error('Non-connected element cannot be a blocking element');
            }
            // Cast here because we know we'll call _inertSiblings on newParents
            // below.
            this[_topElParents] = newParents;
            const toSkip = this[_getDistributedChildren](newTop);
            // No previous top element.
            if (!oldParents.length) {
                this[_inertSiblings](newParents, toSkip, toKeepInert);
                return;
            }
            let i = oldParents.length - 1;
            let j = newParents.length - 1;
            // Find common parent. Index 0 is the element itself (so stop before it).
            while (i > 0 && j > 0 && oldParents[i] === newParents[j]) {
                i--;
                j--;
            }
            // If up the parents tree there are 2 elements that are siblings, swap
            // the inerted sibling.
            if (oldParents[i] !== newParents[j]) {
                this[_swapInertedSibling](oldParents[i], newParents[j]);
            }
            // Restore old parents siblings inertness.
            i > 0 && this[_restoreInertedSiblings](oldParents.slice(0, i));
            // Make new parents siblings inert.
            j > 0 && this[_inertSiblings](newParents.slice(0, j), toSkip, null);
        }
        /**
         * Swaps inertness between two sibling elements.
         * Sets the property `inert` over the attribute since the inert spec
         * doesn't specify if it should be reflected.
         * https://html.spec.whatwg.org/multipage/interaction.html#inert
         */
        [_swapInertedSibling](oldInert, newInert) {
            const siblingsToRestore = oldInert[_siblingsToRestore];
            // oldInert is not contained in siblings to restore, so we have to check
            // if it's inertable and if already inert.
            if (this[_isInertable](oldInert) && !oldInert.inert) {
                oldInert.inert = true;
                siblingsToRestore.add(oldInert);
            }
            // If newInert was already between the siblings to restore, it means it is
            // inertable and must be restored.
            if (siblingsToRestore.has(newInert)) {
                newInert.inert = false;
                siblingsToRestore.delete(newInert);
            }
            newInert[_parentMO] = oldInert[_parentMO];
            newInert[_siblingsToRestore] = siblingsToRestore;
            oldInert[_parentMO] = undefined;
            oldInert[_siblingsToRestore] = undefined;
        }
        /**
         * Restores original inertness to the siblings of the elements.
         * Sets the property `inert` over the attribute since the inert spec
         * doesn't specify if it should be reflected.
         * https://html.spec.whatwg.org/multipage/interaction.html#inert
         */
        [_restoreInertedSiblings](elements) {
            for (const element of elements) {
                const mo = element[_parentMO];
                mo.disconnect();
                element[_parentMO] = undefined;
                const siblings = element[_siblingsToRestore];
                for (const sibling of siblings) {
                    sibling.inert = false;
                }
                element[_siblingsToRestore] = undefined;
            }
        }
        /**
         * Inerts the siblings of the elements except the elements to skip. Stores
         * the inerted siblings into the element's symbol `_siblingsToRestore`.
         * Pass `toKeepInert` to collect the already inert elements.
         * Sets the property `inert` over the attribute since the inert spec
         * doesn't specify if it should be reflected.
         * https://html.spec.whatwg.org/multipage/interaction.html#inert
         */
        [_inertSiblings](elements, toSkip, toKeepInert) {
            for (const element of elements) {
                // Assume element is not a Document, so it must have a parentNode.
                const parent = element.parentNode;
                const children = parent.children;
                const inertedSiblings = new Set();
                for (let j = 0; j < children.length; j++) {
                    const sibling = children[j];
                    // Skip the input element, if not inertable or to be skipped.
                    if (sibling === element || !this[_isInertable](sibling) ||
                        (toSkip && toSkip.has(sibling))) {
                        continue;
                    }
                    // Should be collected since already inerted.
                    if (toKeepInert && sibling.inert) {
                        toKeepInert.add(sibling);
                    }
                    else {
                        sibling.inert = true;
                        inertedSiblings.add(sibling);
                    }
                }
                // Store the siblings that were inerted.
                element[_siblingsToRestore] = inertedSiblings;
                // Observe only immediate children mutations on the parent.
                const mo = new MutationObserver(this[_handleMutations].bind(this));
                element[_parentMO] = mo;
                let parentToObserve = parent;
                // If we're using the ShadyDOM polyfill, then our parent could be a
                // shady root, which is an object that acts like a ShadowRoot, but isn't
                // actually a node in the real DOM. Observe the real DOM parent instead.
                const maybeShadyRoot = parentToObserve;
                if (maybeShadyRoot.__shady && maybeShadyRoot.host) {
                    parentToObserve = maybeShadyRoot.host;
                }
                mo.observe(parentToObserve, {
                    childList: true,
                });
            }
        }
        /**
         * Handles newly added/removed nodes by toggling their inertness.
         * It also checks if the current top Blocking Element has been removed,
         * notifying and removing it.
         */
        [_handleMutations](mutations) {
            const parents = this[_topElParents];
            const toKeepInert = this[_alreadyInertElements];
            for (const mutation of mutations) {
                // If the target is a shadowRoot, get its host as we skip shadowRoots when
                // computing _topElParents.
                const target = mutation.target.host || mutation.target;
                const idx = target === document.body ?
                    parents.length :
                    parents.indexOf(target);
                const inertedChild = parents[idx - 1];
                const inertedSiblings = inertedChild[_siblingsToRestore];
                // To restore.
                for (let i = 0; i < mutation.removedNodes.length; i++) {
                    const sibling = mutation.removedNodes[i];
                    if (sibling === inertedChild) {
                        console.info('Detected removal of the top Blocking Element.');
                        this.pop();
                        return;
                    }
                    if (inertedSiblings.has(sibling)) {
                        sibling.inert = false;
                        inertedSiblings.delete(sibling);
                    }
                }
                // To inert.
                for (let i = 0; i < mutation.addedNodes.length; i++) {
                    const sibling = mutation.addedNodes[i];
                    if (!this[_isInertable](sibling)) {
                        continue;
                    }
                    if (toKeepInert && sibling.inert) {
                        toKeepInert.add(sibling);
                    }
                    else {
                        sibling.inert = true;
                        inertedSiblings.add(sibling);
                    }
                }
            }
        }
        /**
         * Returns if the element is inertable.
         */
        [_isInertable](element) {
            return false === /^(style|template|script)$/.test(element.localName);
        }
        /**
         * Returns the list of newParents of an element, starting from element
         * (included) up to `document.body` (excluded).
         */
        [_getParents](element) {
            const parents = [];
            let current = element;
            // Stop to body.
            while (current && current !== document.body) {
                // Skip shadow roots.
                if (current.nodeType === Node.ELEMENT_NODE) {
                    parents.push(current);
                }
                // ShadowDom v1
                if (current.assignedSlot) {
                    // Collect slots from deepest slot to top.
                    while (current = current.assignedSlot) {
                        parents.push(current);
                    }
                    // Continue the search on the top slot.
                    current = parents.pop();
                    continue;
                }
                current = current.parentNode ||
                    current.host;
            }
            return parents;
        }
        /**
         * Returns the distributed children of the element's shadow root.
         * Returns null if the element doesn't have a shadow root.
         */
        [_getDistributedChildren](element) {
            const shadowRoot = element.shadowRoot;
            if (!shadowRoot) {
                return null;
            }
            const result = new Set();
            let i;
            let j;
            let nodes;
            const slots = shadowRoot.querySelectorAll('slot');
            if (slots.length && slots[0].assignedNodes) {
                for (i = 0; i < slots.length; i++) {
                    nodes = slots[i].assignedNodes({
                        flatten: true,
                    });
                    for (j = 0; j < nodes.length; j++) {
                        if (nodes[j].nodeType === Node.ELEMENT_NODE) {
                            result.add(nodes[j]);
                        }
                    }
                }
                // No need to search for <content>.
            }
            return result;
        }
    }
    document.$blockingElements =
        new BlockingElementsImpl();
})();

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define('inert', factory) :
  (factory());
}(undefined, (function () {
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  /**
   * This work is licensed under the W3C Software and Document License
   * (http://www.w3.org/Consortium/Legal/2015/copyright-software-and-document).
   */

  (function () {
    // Return early if we're not running inside of the browser.
    if (typeof window === 'undefined') {
      return;
    }

    // Convenience function for converting NodeLists.
    /** @type {typeof Array.prototype.slice} */
    var slice = Array.prototype.slice;

    /**
     * IE has a non-standard name for "matches".
     * @type {typeof Element.prototype.matches}
     */
    var matches = Element.prototype.matches || Element.prototype.msMatchesSelector;

    /** @type {string} */
    var _focusableElementsString = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'details', 'summary', 'iframe', 'object', 'embed', '[contenteditable]'].join(',');

    /**
     * `InertRoot` manages a single inert subtree, i.e. a DOM subtree whose root element has an `inert`
     * attribute.
     *
     * Its main functions are:
     *
     * - to create and maintain a set of managed `InertNode`s, including when mutations occur in the
     *   subtree. The `makeSubtreeUnfocusable()` method handles collecting `InertNode`s via registering
     *   each focusable node in the subtree with the singleton `InertManager` which manages all known
     *   focusable nodes within inert subtrees. `InertManager` ensures that a single `InertNode`
     *   instance exists for each focusable node which has at least one inert root as an ancestor.
     *
     * - to notify all managed `InertNode`s when this subtree stops being inert (i.e. when the `inert`
     *   attribute is removed from the root node). This is handled in the destructor, which calls the
     *   `deregister` method on `InertManager` for each managed inert node.
     */

    var InertRoot = function () {
      /**
       * @param {!HTMLElement} rootElement The HTMLElement at the root of the inert subtree.
       * @param {!InertManager} inertManager The global singleton InertManager object.
       */
      function InertRoot(rootElement, inertManager) {
        _classCallCheck(this, InertRoot);

        /** @type {!InertManager} */
        this._inertManager = inertManager;

        /** @type {!HTMLElement} */
        this._rootElement = rootElement;

        /**
         * @type {!Set<!InertNode>}
         * All managed focusable nodes in this InertRoot's subtree.
         */
        this._managedNodes = new Set();

        // Make the subtree hidden from assistive technology
        if (this._rootElement.hasAttribute('aria-hidden')) {
          /** @type {?string} */
          this._savedAriaHidden = this._rootElement.getAttribute('aria-hidden');
        } else {
          this._savedAriaHidden = null;
        }
        this._rootElement.setAttribute('aria-hidden', 'true');

        // Make all focusable elements in the subtree unfocusable and add them to _managedNodes
        this._makeSubtreeUnfocusable(this._rootElement);

        // Watch for:
        // - any additions in the subtree: make them unfocusable too
        // - any removals from the subtree: remove them from this inert root's managed nodes
        // - attribute changes: if `tabindex` is added, or removed from an intrinsically focusable
        //   element, make that node a managed node.
        this._observer = new MutationObserver(this._onMutation.bind(this));
        this._observer.observe(this._rootElement, { attributes: true, childList: true, subtree: true });
      }

      /**
       * Call this whenever this object is about to become obsolete.  This unwinds all of the state
       * stored in this object and updates the state of all of the managed nodes.
       */


      _createClass(InertRoot, [{
        key: 'destructor',
        value: function destructor() {
          this._observer.disconnect();

          if (this._rootElement) {
            if (this._savedAriaHidden !== null) {
              this._rootElement.setAttribute('aria-hidden', this._savedAriaHidden);
            } else {
              this._rootElement.removeAttribute('aria-hidden');
            }
          }

          this._managedNodes.forEach(function (inertNode) {
            this._unmanageNode(inertNode.node);
          }, this);

          // Note we cast the nulls to the ANY type here because:
          // 1) We want the class properties to be declared as non-null, or else we
          //    need even more casts throughout this code. All bets are off if an
          //    instance has been destroyed and a method is called.
          // 2) We don't want to cast "this", because we want type-aware optimizations
          //    to know which properties we're setting.
          this._observer = /** @type {?} */null;
          this._rootElement = /** @type {?} */null;
          this._managedNodes = /** @type {?} */null;
          this._inertManager = /** @type {?} */null;
        }

        /**
         * @return {!Set<!InertNode>} A copy of this InertRoot's managed nodes set.
         */

      }, {
        key: '_makeSubtreeUnfocusable',


        /**
         * @param {!Node} startNode
         */
        value: function _makeSubtreeUnfocusable(startNode) {
          var _this2 = this;

          composedTreeWalk(startNode, function (node) {
            return _this2._visitNode(node);
          });

          var activeElement = document.activeElement;

          if (!document.body.contains(startNode)) {
            // startNode may be in shadow DOM, so find its nearest shadowRoot to get the activeElement.
            var node = startNode;
            /** @type {!ShadowRoot|undefined} */
            var root = undefined;
            while (node) {
              if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                root = /** @type {!ShadowRoot} */node;
                break;
              }
              node = node.parentNode;
            }
            if (root) {
              activeElement = root.activeElement;
            }
          }
          if (startNode.contains(activeElement)) {
            activeElement.blur();
            // In IE11, if an element is already focused, and then set to tabindex=-1
            // calling blur() will not actually move the focus.
            // To work around this we call focus() on the body instead.
            if (activeElement === document.activeElement) {
              document.body.focus();
            }
          }
        }

        /**
         * @param {!Node} node
         */

      }, {
        key: '_visitNode',
        value: function _visitNode(node) {
          if (node.nodeType !== Node.ELEMENT_NODE) {
            return;
          }
          var element = /** @type {!HTMLElement} */node;

          // If a descendant inert root becomes un-inert, its descendants will still be inert because of
          // this inert root, so all of its managed nodes need to be adopted by this InertRoot.
          if (element !== this._rootElement && element.hasAttribute('inert')) {
            this._adoptInertRoot(element);
          }

          if (matches.call(element, _focusableElementsString) || element.hasAttribute('tabindex')) {
            this._manageNode(element);
          }
        }

        /**
         * Register the given node with this InertRoot and with InertManager.
         * @param {!Node} node
         */

      }, {
        key: '_manageNode',
        value: function _manageNode(node) {
          var inertNode = this._inertManager.register(node, this);
          this._managedNodes.add(inertNode);
        }

        /**
         * Unregister the given node with this InertRoot and with InertManager.
         * @param {!Node} node
         */

      }, {
        key: '_unmanageNode',
        value: function _unmanageNode(node) {
          var inertNode = this._inertManager.deregister(node, this);
          if (inertNode) {
            this._managedNodes['delete'](inertNode);
          }
        }

        /**
         * Unregister the entire subtree starting at `startNode`.
         * @param {!Node} startNode
         */

      }, {
        key: '_unmanageSubtree',
        value: function _unmanageSubtree(startNode) {
          var _this3 = this;

          composedTreeWalk(startNode, function (node) {
            return _this3._unmanageNode(node);
          });
        }

        /**
         * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
         * @param {!HTMLElement} node
         */

      }, {
        key: '_adoptInertRoot',
        value: function _adoptInertRoot(node) {
          var inertSubroot = this._inertManager.getInertRoot(node);

          // During initialisation this inert root may not have been registered yet,
          // so register it now if need be.
          if (!inertSubroot) {
            this._inertManager.setInert(node, true);
            inertSubroot = this._inertManager.getInertRoot(node);
          }

          inertSubroot.managedNodes.forEach(function (savedInertNode) {
            this._manageNode(savedInertNode.node);
          }, this);
        }

        /**
         * Callback used when mutation observer detects subtree additions, removals, or attribute changes.
         * @param {!Array<!MutationRecord>} records
         * @param {!MutationObserver} self
         */

      }, {
        key: '_onMutation',
        value: function _onMutation(records, self) {
          records.forEach(function (record) {
            var target = /** @type {!HTMLElement} */record.target;
            if (record.type === 'childList') {
              // Manage added nodes
              slice.call(record.addedNodes).forEach(function (node) {
                this._makeSubtreeUnfocusable(node);
              }, this);

              // Un-manage removed nodes
              slice.call(record.removedNodes).forEach(function (node) {
                this._unmanageSubtree(node);
              }, this);
            } else if (record.type === 'attributes') {
              if (record.attributeName === 'tabindex') {
                // Re-initialise inert node if tabindex changes
                this._manageNode(target);
              } else if (target !== this._rootElement && record.attributeName === 'inert' && target.hasAttribute('inert')) {
                // If a new inert root is added, adopt its managed nodes and make sure it knows about the
                // already managed nodes from this inert subroot.
                this._adoptInertRoot(target);
                var inertSubroot = this._inertManager.getInertRoot(target);
                this._managedNodes.forEach(function (managedNode) {
                  if (target.contains(managedNode.node)) {
                    inertSubroot._manageNode(managedNode.node);
                  }
                });
              }
            }
          }, this);
        }
      }, {
        key: 'managedNodes',
        get: function get() {
          return new Set(this._managedNodes);
        }

        /** @return {boolean} */

      }, {
        key: 'hasSavedAriaHidden',
        get: function get() {
          return this._savedAriaHidden !== null;
        }

        /** @param {?string} ariaHidden */

      }, {
        key: 'savedAriaHidden',
        set: function set(ariaHidden) {
          this._savedAriaHidden = ariaHidden;
        }

        /** @return {?string} */
        ,
        get: function get() {
          return this._savedAriaHidden;
        }
      }]);

      return InertRoot;
    }();

    /**
     * `InertNode` initialises and manages a single inert node.
     * A node is inert if it is a descendant of one or more inert root elements.
     *
     * On construction, `InertNode` saves the existing `tabindex` value for the node, if any, and
     * either removes the `tabindex` attribute or sets it to `-1`, depending on whether the element
     * is intrinsically focusable or not.
     *
     * `InertNode` maintains a set of `InertRoot`s which are descendants of this `InertNode`. When an
     * `InertRoot` is destroyed, and calls `InertManager.deregister()`, the `InertManager` notifies the
     * `InertNode` via `removeInertRoot()`, which in turn destroys the `InertNode` if no `InertRoot`s
     * remain in the set. On destruction, `InertNode` reinstates the stored `tabindex` if one exists,
     * or removes the `tabindex` attribute if the element is intrinsically focusable.
     */


    var InertNode = function () {
      /**
       * @param {!Node} node A focusable element to be made inert.
       * @param {!InertRoot} inertRoot The inert root element associated with this inert node.
       */
      function InertNode(node, inertRoot) {
        _classCallCheck(this, InertNode);

        /** @type {!Node} */
        this._node = node;

        /** @type {boolean} */
        this._overrodeFocusMethod = false;

        /**
         * @type {!Set<!InertRoot>} The set of descendant inert roots.
         *    If and only if this set becomes empty, this node is no longer inert.
         */
        this._inertRoots = new Set([inertRoot]);

        /** @type {?number} */
        this._savedTabIndex = null;

        /** @type {boolean} */
        this._destroyed = false;

        // Save any prior tabindex info and make this node untabbable
        this.ensureUntabbable();
      }

      /**
       * Call this whenever this object is about to become obsolete.
       * This makes the managed node focusable again and deletes all of the previously stored state.
       */


      _createClass(InertNode, [{
        key: 'destructor',
        value: function destructor() {
          this._throwIfDestroyed();

          if (this._node && this._node.nodeType === Node.ELEMENT_NODE) {
            var element = /** @type {!HTMLElement} */this._node;
            if (this._savedTabIndex !== null) {
              element.setAttribute('tabindex', this._savedTabIndex);
            } else {
              element.removeAttribute('tabindex');
            }

            // Use `delete` to restore native focus method.
            if (this._overrodeFocusMethod) {
              delete element.focus;
            }
          }

          // See note in InertRoot.destructor for why we cast these nulls to ANY.
          this._node = /** @type {?} */null;
          this._inertRoots = /** @type {?} */null;
          this._destroyed = true;
        }

        /**
         * @type {boolean} Whether this object is obsolete because the managed node is no longer inert.
         * If the object has been destroyed, any attempt to access it will cause an exception.
         */

      }, {
        key: '_throwIfDestroyed',


        /**
         * Throw if user tries to access destroyed InertNode.
         */
        value: function _throwIfDestroyed() {
          if (this.destroyed) {
            throw new Error('Trying to access destroyed InertNode');
          }
        }

        /** @return {boolean} */

      }, {
        key: 'ensureUntabbable',


        /** Save the existing tabindex value and make the node untabbable and unfocusable */
        value: function ensureUntabbable() {
          if (this.node.nodeType !== Node.ELEMENT_NODE) {
            return;
          }
          var element = /** @type {!HTMLElement} */this.node;
          if (matches.call(element, _focusableElementsString)) {
            if ( /** @type {!HTMLElement} */element.tabIndex === -1 && this.hasSavedTabIndex) {
              return;
            }

            if (element.hasAttribute('tabindex')) {
              this._savedTabIndex = /** @type {!HTMLElement} */element.tabIndex;
            }
            element.setAttribute('tabindex', '-1');
            if (element.nodeType === Node.ELEMENT_NODE) {
              element.focus = function () {};
              this._overrodeFocusMethod = true;
            }
          } else if (element.hasAttribute('tabindex')) {
            this._savedTabIndex = /** @type {!HTMLElement} */element.tabIndex;
            element.removeAttribute('tabindex');
          }
        }

        /**
         * Add another inert root to this inert node's set of managing inert roots.
         * @param {!InertRoot} inertRoot
         */

      }, {
        key: 'addInertRoot',
        value: function addInertRoot(inertRoot) {
          this._throwIfDestroyed();
          this._inertRoots.add(inertRoot);
        }

        /**
         * Remove the given inert root from this inert node's set of managing inert roots.
         * If the set of managing inert roots becomes empty, this node is no longer inert,
         * so the object should be destroyed.
         * @param {!InertRoot} inertRoot
         */

      }, {
        key: 'removeInertRoot',
        value: function removeInertRoot(inertRoot) {
          this._throwIfDestroyed();
          this._inertRoots['delete'](inertRoot);
          if (this._inertRoots.size === 0) {
            this.destructor();
          }
        }
      }, {
        key: 'destroyed',
        get: function get() {
          return (/** @type {!InertNode} */this._destroyed
          );
        }
      }, {
        key: 'hasSavedTabIndex',
        get: function get() {
          return this._savedTabIndex !== null;
        }

        /** @return {!Node} */

      }, {
        key: 'node',
        get: function get() {
          this._throwIfDestroyed();
          return this._node;
        }

        /** @param {?number} tabIndex */

      }, {
        key: 'savedTabIndex',
        set: function set(tabIndex) {
          this._throwIfDestroyed();
          this._savedTabIndex = tabIndex;
        }

        /** @return {?number} */
        ,
        get: function get() {
          this._throwIfDestroyed();
          return this._savedTabIndex;
        }
      }]);

      return InertNode;
    }();

    /**
     * InertManager is a per-document singleton object which manages all inert roots and nodes.
     *
     * When an element becomes an inert root by having an `inert` attribute set and/or its `inert`
     * property set to `true`, the `setInert` method creates an `InertRoot` object for the element.
     * The `InertRoot` in turn registers itself as managing all of the element's focusable descendant
     * nodes via the `register()` method. The `InertManager` ensures that a single `InertNode` instance
     * is created for each such node, via the `_managedNodes` map.
     */


    var InertManager = function () {
      /**
       * @param {!Document} document
       */
      function InertManager(document) {
        _classCallCheck(this, InertManager);

        if (!document) {
          throw new Error('Missing required argument; InertManager needs to wrap a document.');
        }

        /** @type {!Document} */
        this._document = document;

        /**
         * All managed nodes known to this InertManager. In a map to allow looking up by Node.
         * @type {!Map<!Node, !InertNode>}
         */
        this._managedNodes = new Map();

        /**
         * All inert roots known to this InertManager. In a map to allow looking up by Node.
         * @type {!Map<!Node, !InertRoot>}
         */
        this._inertRoots = new Map();

        /**
         * Observer for mutations on `document.body`.
         * @type {!MutationObserver}
         */
        this._observer = new MutationObserver(this._watchForInert.bind(this));

        // Add inert style.
        addInertStyle(document.head || document.body || document.documentElement);

        // Wait for document to be loaded.
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', this._onDocumentLoaded.bind(this));
        } else {
          this._onDocumentLoaded();
        }
      }

      /**
       * Set whether the given element should be an inert root or not.
       * @param {!HTMLElement} root
       * @param {boolean} inert
       */


      _createClass(InertManager, [{
        key: 'setInert',
        value: function setInert(root, inert) {
          if (inert) {
            if (this._inertRoots.has(root)) {
              // element is already inert
              return;
            }

            var inertRoot = new InertRoot(root, this);
            root.setAttribute('inert', '');
            this._inertRoots.set(root, inertRoot);
            // If not contained in the document, it must be in a shadowRoot.
            // Ensure inert styles are added there.
            if (!this._document.body.contains(root)) {
              var parent = root.parentNode;
              while (parent) {
                if (parent.nodeType === 11) {
                  addInertStyle(parent);
                }
                parent = parent.parentNode;
              }
            }
          } else {
            if (!this._inertRoots.has(root)) {
              // element is already non-inert
              return;
            }

            var _inertRoot = this._inertRoots.get(root);
            _inertRoot.destructor();
            this._inertRoots['delete'](root);
            root.removeAttribute('inert');
          }
        }

        /**
         * Get the InertRoot object corresponding to the given inert root element, if any.
         * @param {!Node} element
         * @return {!InertRoot|undefined}
         */

      }, {
        key: 'getInertRoot',
        value: function getInertRoot(element) {
          return this._inertRoots.get(element);
        }

        /**
         * Register the given InertRoot as managing the given node.
         * In the case where the node has a previously existing inert root, this inert root will
         * be added to its set of inert roots.
         * @param {!Node} node
         * @param {!InertRoot} inertRoot
         * @return {!InertNode} inertNode
         */

      }, {
        key: 'register',
        value: function register(node, inertRoot) {
          var inertNode = this._managedNodes.get(node);
          if (inertNode !== undefined) {
            // node was already in an inert subtree
            inertNode.addInertRoot(inertRoot);
          } else {
            inertNode = new InertNode(node, inertRoot);
          }

          this._managedNodes.set(node, inertNode);

          return inertNode;
        }

        /**
         * De-register the given InertRoot as managing the given inert node.
         * Removes the inert root from the InertNode's set of managing inert roots, and remove the inert
         * node from the InertManager's set of managed nodes if it is destroyed.
         * If the node is not currently managed, this is essentially a no-op.
         * @param {!Node} node
         * @param {!InertRoot} inertRoot
         * @return {?InertNode} The potentially destroyed InertNode associated with this node, if any.
         */

      }, {
        key: 'deregister',
        value: function deregister(node, inertRoot) {
          var inertNode = this._managedNodes.get(node);
          if (!inertNode) {
            return null;
          }

          inertNode.removeInertRoot(inertRoot);
          if (inertNode.destroyed) {
            this._managedNodes['delete'](node);
          }

          return inertNode;
        }

        /**
         * Callback used when document has finished loading.
         */

      }, {
        key: '_onDocumentLoaded',
        value: function _onDocumentLoaded() {
          // Find all inert roots in document and make them actually inert.
          var inertElements = slice.call(this._document.querySelectorAll('[inert]'));
          inertElements.forEach(function (inertElement) {
            this.setInert(inertElement, true);
          }, this);

          // Comment this out to use programmatic API only.
          this._observer.observe(this._document.body || this._document.documentElement, { attributes: true, subtree: true, childList: true });
        }

        /**
         * Callback used when mutation observer detects attribute changes.
         * @param {!Array<!MutationRecord>} records
         * @param {!MutationObserver} self
         */

      }, {
        key: '_watchForInert',
        value: function _watchForInert(records, self) {
          var _this = this;
          records.forEach(function (record) {
            switch (record.type) {
              case 'childList':
                slice.call(record.addedNodes).forEach(function (node) {
                  if (node.nodeType !== Node.ELEMENT_NODE) {
                    return;
                  }
                  var inertElements = slice.call(node.querySelectorAll('[inert]'));
                  if (matches.call(node, '[inert]')) {
                    inertElements.unshift(node);
                  }
                  inertElements.forEach(function (inertElement) {
                    this.setInert(inertElement, true);
                  }, _this);
                }, _this);
                break;
              case 'attributes':
                if (record.attributeName !== 'inert') {
                  return;
                }
                var target = /** @type {!HTMLElement} */record.target;
                var inert = target.hasAttribute('inert');
                _this.setInert(target, inert);
                break;
            }
          }, this);
        }
      }]);

      return InertManager;
    }();

    /**
     * Recursively walk the composed tree from |node|.
     * @param {!Node} node
     * @param {(function (!HTMLElement))=} callback Callback to be called for each element traversed,
     *     before descending into child nodes.
     * @param {?ShadowRoot=} shadowRootAncestor The nearest ShadowRoot ancestor, if any.
     */


    function composedTreeWalk(node, callback, shadowRootAncestor) {
      if (node.nodeType == Node.ELEMENT_NODE) {
        var element = /** @type {!HTMLElement} */node;
        if (callback) {
          callback(element);
        }

        // Descend into node:
        // If it has a ShadowRoot, ignore all child elements - these will be picked
        // up by the <content> or <shadow> elements. Descend straight into the
        // ShadowRoot.
        var shadowRoot = /** @type {!HTMLElement} */element.shadowRoot;
        if (shadowRoot) {
          composedTreeWalk(shadowRoot, callback);
          return;
        }

        // If it is a <content> element, descend into distributed elements - these
        // are elements from outside the shadow root which are rendered inside the
        // shadow DOM.
        if (element.localName == 'content') {
          var content = /** @type {!HTMLContentElement} */element;
          // Verifies if ShadowDom v0 is supported.
          var distributedNodes = content.getDistributedNodes ? content.getDistributedNodes() : [];
          for (var i = 0; i < distributedNodes.length; i++) {
            composedTreeWalk(distributedNodes[i], callback);
          }
          return;
        }

        // If it is a <slot> element, descend into assigned nodes - these
        // are elements from outside the shadow root which are rendered inside the
        // shadow DOM.
        if (element.localName == 'slot') {
          var slot = /** @type {!HTMLSlotElement} */element;
          // Verify if ShadowDom v1 is supported.
          var _distributedNodes = slot.assignedNodes ? slot.assignedNodes({ flatten: true }) : [];
          for (var _i = 0; _i < _distributedNodes.length; _i++) {
            composedTreeWalk(_distributedNodes[_i], callback);
          }
          return;
        }
      }

      // If it is neither the parent of a ShadowRoot, a <content> element, a <slot>
      // element, nor a <shadow> element recurse normally.
      var child = node.firstChild;
      while (child != null) {
        composedTreeWalk(child, callback);
        child = child.nextSibling;
      }
    }

    /**
     * Adds a style element to the node containing the inert specific styles
     * @param {!Node} node
     */
    function addInertStyle(node) {
      if (node.querySelector('style#inert-style, link#inert-style')) {
        return;
      }
      var style = document.createElement('style');
      style.setAttribute('id', 'inert-style');
      style.textContent = '\n' + '[inert] {\n' + '  pointer-events: none;\n' + '  cursor: default;\n' + '}\n' + '\n' + '[inert], [inert] * {\n' + '  -webkit-user-select: none;\n' + '  -moz-user-select: none;\n' + '  -ms-user-select: none;\n' + '  user-select: none;\n' + '}\n';
      node.appendChild(style);
    }

    if (!HTMLElement.prototype.hasOwnProperty('inert')) {
      /** @type {!InertManager} */
      var inertManager = new InertManager(document);

      Object.defineProperty(HTMLElement.prototype, 'inert', {
        enumerable: true,
        /** @this {!HTMLElement} */
        get: function get() {
          return this.hasAttribute('inert');
        },
        /** @this {!HTMLElement} */
        set: function set(inert) {
          inertManager.setInert(this, inert);
        }
      });
    }
  })();

})));

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$8 = {
    CLOSING: 'mdc-dialog--closing',
    OPEN: 'mdc-dialog--open',
    OPENING: 'mdc-dialog--opening',
    SCROLLABLE: 'mdc-dialog--scrollable',
    SCROLL_LOCK: 'mdc-dialog-scroll-lock',
    STACKED: 'mdc-dialog--stacked',
    FULLSCREEN: 'mdc-dialog--fullscreen',
    // Class for showing a scroll divider on full-screen dialog header element.
    // Should only be displayed on scrollable content, when the dialog content is
    // scrolled "underneath" the header.
    SCROLL_DIVIDER_HEADER: 'mdc-dialog-scroll-divider-header',
    // Class for showing a scroll divider on a full-screen dialog footer element.
    // Should only be displayed on scrolalble content, when the dialog content is
    // obscured "underneath" the footer.
    SCROLL_DIVIDER_FOOTER: 'mdc-dialog-scroll-divider-footer',
    // The "surface scrim" is a scrim covering only the surface of a dialog. This
    // is used in situations where a confirmation dialog is shown over an already
    // opened full-screen dialog. On larger screen-sizes, the full-screen dialog
    // is sized as a modal and so in these situations we display a "surface scrim"
    // to prevent a "double scrim" (where the scrim from the secondary
    // confirmation dialog would overlap with the scrim from the full-screen
    // dialog).
    SURFACE_SCRIM_SHOWN: 'mdc-dialog__surface-scrim--shown',
    // "Showing" animating class for the surface-scrim.
    SURFACE_SCRIM_SHOWING: 'mdc-dialog__surface-scrim--showing',
    // "Hiding" animating class for the surface-scrim.
    SURFACE_SCRIM_HIDING: 'mdc-dialog__surface-scrim--hiding',
    // Class to hide a dialog's scrim (used in conjunction with a surface-scrim).
    // Note that we only hide the original scrim rather than removing it entirely
    // to prevent interactions with the content behind this scrim, and to capture
    // scrim clicks.
    SCRIM_HIDDEN: 'mdc-dialog__scrim--hidden',
};
var strings$6 = {
    ACTION_ATTRIBUTE: 'data-mdc-dialog-action',
    BUTTON_DEFAULT_ATTRIBUTE: 'data-mdc-dialog-button-default',
    BUTTON_SELECTOR: '.mdc-dialog__button',
    CLOSED_EVENT: 'MDCDialog:closed',
    CLOSE_ACTION: 'close',
    CLOSING_EVENT: 'MDCDialog:closing',
    CONTAINER_SELECTOR: '.mdc-dialog__container',
    CONTENT_SELECTOR: '.mdc-dialog__content',
    DESTROY_ACTION: 'destroy',
    INITIAL_FOCUS_ATTRIBUTE: 'data-mdc-dialog-initial-focus',
    OPENED_EVENT: 'MDCDialog:opened',
    OPENING_EVENT: 'MDCDialog:opening',
    SCRIM_SELECTOR: '.mdc-dialog__scrim',
    SUPPRESS_DEFAULT_PRESS_SELECTOR: [
        'textarea',
        '.mdc-menu .mdc-list-item',
        '.mdc-menu .mdc-deprecated-list-item',
    ].join(', '),
    SURFACE_SELECTOR: '.mdc-dialog__surface',
};
var numbers$6 = {
    DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
    DIALOG_ANIMATION_OPEN_TIME_MS: 150,
};

/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * AnimationFrame provides a user-friendly abstraction around requesting
 * and canceling animation frames.
 */
var AnimationFrame = /** @class */ (function () {
    function AnimationFrame() {
        this.rafIDs = new Map();
    }
    /**
     * Requests an animation frame. Cancels any existing frame with the same key.
     * @param {string} key The key for this callback.
     * @param {FrameRequestCallback} callback The callback to be executed.
     */
    AnimationFrame.prototype.request = function (key, callback) {
        var _this = this;
        this.cancel(key);
        var frameID = requestAnimationFrame(function (frame) {
            _this.rafIDs.delete(key);
            // Callback must come *after* the key is deleted so that nested calls to
            // request with the same key are not deleted.
            callback(frame);
        });
        this.rafIDs.set(key, frameID);
    };
    /**
     * Cancels a queued callback with the given key.
     * @param {string} key The key for this callback.
     */
    AnimationFrame.prototype.cancel = function (key) {
        var rafID = this.rafIDs.get(key);
        if (rafID) {
            cancelAnimationFrame(rafID);
            this.rafIDs.delete(key);
        }
    };
    /**
     * Cancels all queued callback.
     */
    AnimationFrame.prototype.cancelAll = function () {
        var _this = this;
        // Need to use forEach because it's the only iteration method supported
        // by IE11. Suppress the underscore because we don't need it.
        // tslint:disable-next-line:enforce-name-casing
        this.rafIDs.forEach(function (_, key) {
            _this.cancel(key);
        });
    };
    /**
     * Returns the queue of unexecuted callback keys.
     */
    AnimationFrame.prototype.getQueue = function () {
        var queue = [];
        // Need to use forEach because it's the only iteration method supported
        // by IE11. Suppress the underscore because we don't need it.
        // tslint:disable-next-line:enforce-name-casing
        this.rafIDs.forEach(function (_, key) {
            queue.push(key);
        });
        return queue;
    };
    return AnimationFrame;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var AnimationKeys;
(function (AnimationKeys) {
    AnimationKeys["POLL_SCROLL_POS"] = "poll_scroll_position";
    AnimationKeys["POLL_LAYOUT_CHANGE"] = "poll_layout_change";
})(AnimationKeys || (AnimationKeys = {}));
var MDCDialogFoundation = /** @class */ (function (_super) {
    __extends(MDCDialogFoundation, _super);
    function MDCDialogFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCDialogFoundation.defaultAdapter), adapter)) || this;
        _this.dialogOpen = false;
        _this.isFullscreen = false;
        _this.animationFrame = 0;
        _this.animationTimer = 0;
        _this.escapeKeyAction = strings$6.CLOSE_ACTION;
        _this.scrimClickAction = strings$6.CLOSE_ACTION;
        _this.autoStackButtons = true;
        _this.areButtonsStacked = false;
        _this.suppressDefaultPressSelector = strings$6.SUPPRESS_DEFAULT_PRESS_SELECTOR;
        _this.animFrame = new AnimationFrame();
        _this.contentScrollHandler = function () {
            _this.handleScrollEvent();
        };
        _this.windowResizeHandler = function () {
            _this.layout();
        };
        _this.windowOrientationChangeHandler = function () {
            _this.layout();
        };
        return _this;
    }
    Object.defineProperty(MDCDialogFoundation, "cssClasses", {
        get: function () {
            return cssClasses$8;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCDialogFoundation, "strings", {
        get: function () {
            return strings$6;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCDialogFoundation, "numbers", {
        get: function () {
            return numbers$6;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCDialogFoundation, "defaultAdapter", {
        get: function () {
            return {
                addBodyClass: function () { return undefined; },
                addClass: function () { return undefined; },
                areButtonsStacked: function () { return false; },
                clickDefaultButton: function () { return undefined; },
                eventTargetMatches: function () { return false; },
                getActionFromEvent: function () { return ''; },
                getInitialFocusEl: function () { return null; },
                hasClass: function () { return false; },
                isContentScrollable: function () { return false; },
                notifyClosed: function () { return undefined; },
                notifyClosing: function () { return undefined; },
                notifyOpened: function () { return undefined; },
                notifyOpening: function () { return undefined; },
                releaseFocus: function () { return undefined; },
                removeBodyClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                reverseButtons: function () { return undefined; },
                trapFocus: function () { return undefined; },
                registerContentEventHandler: function () { return undefined; },
                deregisterContentEventHandler: function () { return undefined; },
                isScrollableContentAtTop: function () { return false; },
                isScrollableContentAtBottom: function () { return false; },
                registerWindowEventHandler: function () { return undefined; },
                deregisterWindowEventHandler: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCDialogFoundation.prototype.init = function () {
        if (this.adapter.hasClass(cssClasses$8.STACKED)) {
            this.setAutoStackButtons(false);
        }
        this.isFullscreen = this.adapter.hasClass(cssClasses$8.FULLSCREEN);
    };
    MDCDialogFoundation.prototype.destroy = function () {
        if (this.animationTimer) {
            clearTimeout(this.animationTimer);
            this.handleAnimationTimerEnd();
        }
        if (this.isFullscreen) {
            this.adapter.deregisterContentEventHandler('scroll', this.contentScrollHandler);
        }
        this.animFrame.cancelAll();
        this.adapter.deregisterWindowEventHandler('resize', this.windowResizeHandler);
        this.adapter.deregisterWindowEventHandler('orientationchange', this.windowOrientationChangeHandler);
    };
    MDCDialogFoundation.prototype.open = function (dialogOptions) {
        var _this = this;
        this.dialogOpen = true;
        this.adapter.notifyOpening();
        this.adapter.addClass(cssClasses$8.OPENING);
        if (this.isFullscreen) {
            // A scroll event listener is registered even if the dialog is not
            // scrollable on open, since the window resize event, or orientation
            // change may make the dialog scrollable after it is opened.
            this.adapter.registerContentEventHandler('scroll', this.contentScrollHandler);
        }
        if (dialogOptions && dialogOptions.isAboveFullscreenDialog) {
            this.adapter.addClass(cssClasses$8.SCRIM_HIDDEN);
        }
        this.adapter.registerWindowEventHandler('resize', this.windowResizeHandler);
        this.adapter.registerWindowEventHandler('orientationchange', this.windowOrientationChangeHandler);
        // Wait a frame once display is no longer "none", to establish basis for
        // animation
        this.runNextAnimationFrame(function () {
            _this.adapter.addClass(cssClasses$8.OPEN);
            _this.adapter.addBodyClass(cssClasses$8.SCROLL_LOCK);
            _this.layout();
            _this.animationTimer = setTimeout(function () {
                _this.handleAnimationTimerEnd();
                _this.adapter.trapFocus(_this.adapter.getInitialFocusEl());
                _this.adapter.notifyOpened();
            }, numbers$6.DIALOG_ANIMATION_OPEN_TIME_MS);
        });
    };
    MDCDialogFoundation.prototype.close = function (action) {
        var _this = this;
        if (action === void 0) { action = ''; }
        if (!this.dialogOpen) {
            // Avoid redundant close calls (and events), e.g. from keydown on elements
            // that inherently emit click
            return;
        }
        this.dialogOpen = false;
        this.adapter.notifyClosing(action);
        this.adapter.addClass(cssClasses$8.CLOSING);
        this.adapter.removeClass(cssClasses$8.OPEN);
        this.adapter.removeBodyClass(cssClasses$8.SCROLL_LOCK);
        if (this.isFullscreen) {
            this.adapter.deregisterContentEventHandler('scroll', this.contentScrollHandler);
        }
        this.adapter.deregisterWindowEventHandler('resize', this.windowResizeHandler);
        this.adapter.deregisterWindowEventHandler('orientationchange', this.windowOrientationChangeHandler);
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = 0;
        clearTimeout(this.animationTimer);
        this.animationTimer = setTimeout(function () {
            _this.adapter.releaseFocus();
            _this.handleAnimationTimerEnd();
            _this.adapter.notifyClosed(action);
        }, numbers$6.DIALOG_ANIMATION_CLOSE_TIME_MS);
    };
    /**
     * Used only in instances of showing a secondary dialog over a full-screen
     * dialog. Shows the "surface scrim" displayed over the full-screen dialog.
     */
    MDCDialogFoundation.prototype.showSurfaceScrim = function () {
        var _this = this;
        this.adapter.addClass(cssClasses$8.SURFACE_SCRIM_SHOWING);
        this.runNextAnimationFrame(function () {
            _this.adapter.addClass(cssClasses$8.SURFACE_SCRIM_SHOWN);
        });
    };
    /**
     * Used only in instances of showing a secondary dialog over a full-screen
     * dialog. Hides the "surface scrim" displayed over the full-screen dialog.
     */
    MDCDialogFoundation.prototype.hideSurfaceScrim = function () {
        this.adapter.removeClass(cssClasses$8.SURFACE_SCRIM_SHOWN);
        this.adapter.addClass(cssClasses$8.SURFACE_SCRIM_HIDING);
    };
    /**
     * Handles `transitionend` event triggered when surface scrim animation is
     * finished.
     */
    MDCDialogFoundation.prototype.handleSurfaceScrimTransitionEnd = function () {
        this.adapter.removeClass(cssClasses$8.SURFACE_SCRIM_HIDING);
        this.adapter.removeClass(cssClasses$8.SURFACE_SCRIM_SHOWING);
    };
    MDCDialogFoundation.prototype.isOpen = function () {
        return this.dialogOpen;
    };
    MDCDialogFoundation.prototype.getEscapeKeyAction = function () {
        return this.escapeKeyAction;
    };
    MDCDialogFoundation.prototype.setEscapeKeyAction = function (action) {
        this.escapeKeyAction = action;
    };
    MDCDialogFoundation.prototype.getScrimClickAction = function () {
        return this.scrimClickAction;
    };
    MDCDialogFoundation.prototype.setScrimClickAction = function (action) {
        this.scrimClickAction = action;
    };
    MDCDialogFoundation.prototype.getAutoStackButtons = function () {
        return this.autoStackButtons;
    };
    MDCDialogFoundation.prototype.setAutoStackButtons = function (autoStack) {
        this.autoStackButtons = autoStack;
    };
    MDCDialogFoundation.prototype.getSuppressDefaultPressSelector = function () {
        return this.suppressDefaultPressSelector;
    };
    MDCDialogFoundation.prototype.setSuppressDefaultPressSelector = function (selector) {
        this.suppressDefaultPressSelector = selector;
    };
    MDCDialogFoundation.prototype.layout = function () {
        var _this = this;
        this.animFrame.request(AnimationKeys.POLL_LAYOUT_CHANGE, function () {
            _this.layoutInternal();
        });
    };
    /** Handles click on the dialog root element. */
    MDCDialogFoundation.prototype.handleClick = function (evt) {
        var isScrim = this.adapter.eventTargetMatches(evt.target, strings$6.SCRIM_SELECTOR);
        // Check for scrim click first since it doesn't require querying ancestors.
        if (isScrim && this.scrimClickAction !== '') {
            this.close(this.scrimClickAction);
        }
        else {
            var action = this.adapter.getActionFromEvent(evt);
            if (action) {
                this.close(action);
            }
        }
    };
    /** Handles keydown on the dialog root element. */
    MDCDialogFoundation.prototype.handleKeydown = function (evt) {
        var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
        if (!isEnter) {
            return;
        }
        var action = this.adapter.getActionFromEvent(evt);
        if (action) {
            // Action button callback is handled in `handleClick`,
            // since space/enter keydowns on buttons trigger click events.
            return;
        }
        // `composedPath` is used here, when available, to account for use cases
        // where a target meant to suppress the default press behaviour
        // may exist in a shadow root.
        // For example, a textarea inside a web component:
        // <mwc-dialog>
        //   <horizontal-layout>
        //     #shadow-root (open)
        //       <mwc-textarea>
        //         #shadow-root (open)
        //           <textarea></textarea>
        //       </mwc-textarea>
        //   </horizontal-layout>
        // </mwc-dialog>
        var target = evt.composedPath ? evt.composedPath()[0] : evt.target;
        var isDefault = this.suppressDefaultPressSelector ?
            !this.adapter.eventTargetMatches(target, this.suppressDefaultPressSelector) :
            true;
        if (isEnter && isDefault) {
            this.adapter.clickDefaultButton();
        }
    };
    /** Handles keydown on the document. */
    MDCDialogFoundation.prototype.handleDocumentKeydown = function (evt) {
        var isEscape = evt.key === 'Escape' || evt.keyCode === 27;
        if (isEscape && this.escapeKeyAction !== '') {
            this.close(this.escapeKeyAction);
        }
    };
    /**
     * Handles scroll event on the dialog's content element -- showing a scroll
     * divider on the header or footer based on the scroll position. This handler
     * should only be registered on full-screen dialogs with scrollable content.
     */
    MDCDialogFoundation.prototype.handleScrollEvent = function () {
        var _this = this;
        // Since scroll events can fire at a high rate, we throttle these events by
        // using requestAnimationFrame.
        this.animFrame.request(AnimationKeys.POLL_SCROLL_POS, function () {
            _this.toggleScrollDividerHeader();
            _this.toggleScrollDividerFooter();
        });
    };
    MDCDialogFoundation.prototype.layoutInternal = function () {
        if (this.autoStackButtons) {
            this.detectStackedButtons();
        }
        this.toggleScrollableClasses();
    };
    MDCDialogFoundation.prototype.handleAnimationTimerEnd = function () {
        this.animationTimer = 0;
        this.adapter.removeClass(cssClasses$8.OPENING);
        this.adapter.removeClass(cssClasses$8.CLOSING);
    };
    /**
     * Runs the given logic on the next animation frame, using setTimeout to
     * factor in Firefox reflow behavior.
     */
    MDCDialogFoundation.prototype.runNextAnimationFrame = function (callback) {
        var _this = this;
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = requestAnimationFrame(function () {
            _this.animationFrame = 0;
            clearTimeout(_this.animationTimer);
            _this.animationTimer = setTimeout(callback, 0);
        });
    };
    MDCDialogFoundation.prototype.detectStackedButtons = function () {
        // Remove the class first to let us measure the buttons' natural positions.
        this.adapter.removeClass(cssClasses$8.STACKED);
        var areButtonsStacked = this.adapter.areButtonsStacked();
        if (areButtonsStacked) {
            this.adapter.addClass(cssClasses$8.STACKED);
        }
        if (areButtonsStacked !== this.areButtonsStacked) {
            this.adapter.reverseButtons();
            this.areButtonsStacked = areButtonsStacked;
        }
    };
    MDCDialogFoundation.prototype.toggleScrollableClasses = function () {
        // Remove the class first to let us measure the natural height of the
        // content.
        this.adapter.removeClass(cssClasses$8.SCROLLABLE);
        if (this.adapter.isContentScrollable()) {
            this.adapter.addClass(cssClasses$8.SCROLLABLE);
            if (this.isFullscreen) {
                // If dialog is full-screen and scrollable, check if a scroll divider
                // should be shown.
                this.toggleScrollDividerHeader();
                this.toggleScrollDividerFooter();
            }
        }
    };
    MDCDialogFoundation.prototype.toggleScrollDividerHeader = function () {
        if (!this.adapter.isScrollableContentAtTop()) {
            this.adapter.addClass(cssClasses$8.SCROLL_DIVIDER_HEADER);
        }
        else if (this.adapter.hasClass(cssClasses$8.SCROLL_DIVIDER_HEADER)) {
            this.adapter.removeClass(cssClasses$8.SCROLL_DIVIDER_HEADER);
        }
    };
    MDCDialogFoundation.prototype.toggleScrollDividerFooter = function () {
        if (!this.adapter.isScrollableContentAtBottom()) {
            this.adapter.addClass(cssClasses$8.SCROLL_DIVIDER_FOOTER);
        }
        else if (this.adapter.hasClass(cssClasses$8.SCROLL_DIVIDER_FOOTER)) {
            this.adapter.removeClass(cssClasses$8.SCROLL_DIVIDER_FOOTER);
        }
    };
    return MDCDialogFoundation;
}(MDCFoundation));
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var MDCDialogFoundation$1 = MDCDialogFoundation;

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */
function applyPassive(globalObj) {
    if (globalObj === void 0) { globalObj = window; }
    return supportsPassiveOption(globalObj) ?
        { passive: true } :
        false;
}
function supportsPassiveOption(globalObj) {
    if (globalObj === void 0) { globalObj = window; }
    // See
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    var passiveSupported = false;
    try {
        var options = {
            // This function will be called when the browser
            // attempts to access the passive property.
            get passive() {
                passiveSupported = true;
                return false;
            }
        };
        var handler = function () { };
        globalObj.document.addEventListener('test', handler, options);
        globalObj.document.removeEventListener('test', handler, options);
    }
    catch (err) {
        passiveSupported = false;
    }
    return passiveSupported;
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const blockingElements = document.$blockingElements;
class DialogBase extends BaseElement {
    constructor() {
        super(...arguments);
        this.hideActions = false;
        this.stacked = false;
        this.heading = '';
        this.scrimClickAction = 'close';
        this.escapeKeyAction = 'close';
        this.open = false;
        this.defaultAction = 'close';
        this.actionAttribute = 'dialogAction';
        this.initialFocusAttribute = 'dialogInitialFocus';
        this.initialSupressDefaultPressSelector = '';
        this.mdcFoundationClass = MDCDialogFoundation$1;
        this.boundHandleClick = null;
        this.boundHandleKeydown = null;
        this.boundHandleDocumentKeydown = null;
    }
    set suppressDefaultPressSelector(selector) {
        if (this.mdcFoundation) {
            this.mdcFoundation.setSuppressDefaultPressSelector(selector);
        }
        else {
            this.initialSupressDefaultPressSelector = selector;
        }
    }
    /**
     * @export
     */
    get suppressDefaultPressSelector() {
        return this.mdcFoundation ?
            this.mdcFoundation.getSuppressDefaultPressSelector() :
            this.initialSupressDefaultPressSelector;
    }
    get primaryButton() {
        let assignedNodes = this.primarySlot.assignedNodes();
        assignedNodes = assignedNodes.filter((node) => node instanceof HTMLElement);
        const button = assignedNodes[0];
        return button ? button : null;
    }
    emitNotification(name, action) {
        const init = { detail: action ? { action } : {} };
        const ev = new CustomEvent(name, init);
        this.dispatchEvent(ev);
    }
    getInitialFocusEl() {
        const initFocusSelector = `[${this.initialFocusAttribute}]`;
        // only search light DOM. This typically handles all the cases
        const lightDomQs = this.querySelector(initFocusSelector);
        if (lightDomQs) {
            return lightDomQs;
        }
        // if not in light dom, search each flattened distributed node.
        const primarySlot = this.primarySlot;
        const primaryNodes = primarySlot.assignedNodes({ flatten: true });
        const primaryFocusElement = this.searchNodeTreesForAttribute(primaryNodes, this.initialFocusAttribute);
        if (primaryFocusElement) {
            return primaryFocusElement;
        }
        const secondarySlot = this.secondarySlot;
        const secondaryNodes = secondarySlot.assignedNodes({ flatten: true });
        const secondaryFocusElement = this.searchNodeTreesForAttribute(secondaryNodes, this.initialFocusAttribute);
        if (secondaryFocusElement) {
            return secondaryFocusElement;
        }
        const contentSlot = this.contentSlot;
        const contentNodes = contentSlot.assignedNodes({ flatten: true });
        const initFocusElement = this.searchNodeTreesForAttribute(contentNodes, this.initialFocusAttribute);
        return initFocusElement;
    }
    searchNodeTreesForAttribute(nodes, attribute) {
        for (const node of nodes) {
            if (!(node instanceof HTMLElement)) {
                continue;
            }
            if (node.hasAttribute(attribute)) {
                return node;
            }
            else {
                const selection = node.querySelector(`[${attribute}]`);
                if (selection) {
                    return selection;
                }
            }
        }
        return null;
    }
    createAdapter() {
        return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), { addBodyClass: () => document.body.style.overflow = 'hidden', removeBodyClass: () => document.body.style.overflow = '', areButtonsStacked: () => this.stacked, clickDefaultButton: () => {
                const primary = this.primaryButton;
                if (primary) {
                    primary.click();
                }
            }, eventTargetMatches: (target, selector) => target ? matches(target, selector) : false, getActionFromEvent: (e) => {
                if (!e.target) {
                    return '';
                }
                const element = closest(e.target, `[${this.actionAttribute}]`);
                const action = element && element.getAttribute(this.actionAttribute);
                return action;
            }, getInitialFocusEl: () => {
                return this.getInitialFocusEl();
            }, isContentScrollable: () => {
                const el = this.contentElement;
                return el ? el.scrollHeight > el.offsetHeight : false;
            }, notifyClosed: (action) => this.emitNotification('closed', action), notifyClosing: (action) => {
                if (!this.closingDueToDisconnect) {
                    // Don't set our open state to closed just because we were
                    // disconnected. That way if we get reconnected, we'll know to
                    // re-open.
                    this.open = false;
                }
                this.emitNotification('closing', action);
            }, notifyOpened: () => this.emitNotification('opened'), notifyOpening: () => {
                this.open = true;
                this.emitNotification('opening');
            }, reverseButtons: () => { }, releaseFocus: () => {
                blockingElements.remove(this);
            }, trapFocus: (el) => {
                if (!this.isConnected) {
                    // this is the case where it is opened and closed and then removed
                    // from DOM before the animation has completed. Blocking Elements will
                    // throw if this is the case
                    return;
                }
                blockingElements.push(this);
                if (el) {
                    el.focus();
                }
            }, registerContentEventHandler: (evtType, handler) => {
                const el = this.contentElement;
                el.addEventListener(evtType, handler);
            }, deregisterContentEventHandler: (evtType, handler) => {
                const el = this.contentElement;
                el.removeEventListener(evtType, handler);
            }, isScrollableContentAtTop: () => {
                const el = this.contentElement;
                return el ? el.scrollTop === 0 : false;
            }, isScrollableContentAtBottom: () => {
                const el = this.contentElement;
                return el ?
                    Math.ceil(el.scrollHeight - el.scrollTop) === el.clientHeight :
                    false;
            }, registerWindowEventHandler: (evtType, handler) => {
                window.addEventListener(evtType, handler, applyPassive());
            }, deregisterWindowEventHandler: (evtType, handler) => {
                window.removeEventListener(evtType, handler, applyPassive());
            } });
    }
    render() {
        const classes = {
            [cssClasses$8.STACKED]: this.stacked,
        };
        let heading = y ``;
        if (this.heading) {
            heading = this.renderHeading();
        }
        const actionsClasses = {
            'mdc-dialog__actions': !this.hideActions,
        };
        return y `
    <div class="mdc-dialog ${o$1(classes)}"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="title"
        aria-describedby="content">
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
          ${heading}
          <div id="content" class="mdc-dialog__content">
            <slot id="contentSlot"></slot>
          </div>
          <footer
              id="actions"
              class="${o$1(actionsClasses)}">
            <span>
              <slot name="secondaryAction"></slot>
            </span>
            <span>
             <slot name="primaryAction"></slot>
            </span>
          </footer>
        </div>
      </div>
      <div class="mdc-dialog__scrim"></div>
    </div>`;
    }
    renderHeading() {
        return y `
      <h2 id="title" class="mdc-dialog__title">${this.heading}</h2>`;
    }
    firstUpdated() {
        super.firstUpdated();
        this.mdcFoundation.setAutoStackButtons(true);
        if (this.initialSupressDefaultPressSelector) {
            this.suppressDefaultPressSelector =
                this.initialSupressDefaultPressSelector;
        }
        else {
            this.suppressDefaultPressSelector = [
                this.suppressDefaultPressSelector, 'mwc-textarea',
                'mwc-menu mwc-list-item', 'mwc-select mwc-list-item'
            ].join(', ');
        }
        this.boundHandleClick = this.mdcFoundation.handleClick.bind(this.mdcFoundation);
        this.boundHandleKeydown = this.mdcFoundation.handleKeydown.bind(this.mdcFoundation);
        this.boundHandleDocumentKeydown =
            this.mdcFoundation.handleDocumentKeydown.bind(this.mdcFoundation);
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.open && this.mdcFoundation && !this.mdcFoundation.isOpen()) {
            // We probably got disconnected while we were still open. Re-open,
            // matching the behavior of native <dialog>.
            this.setEventListeners();
            this.mdcFoundation.open();
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.open && this.mdcFoundation) {
            // If this dialog is opened and then disconnected, we want to close
            // the foundation, so that 1) any pending timers are cancelled
            // (in particular for trapFocus), and 2) if we reconnect, we can open
            // the foundation again to retrigger animations and focus.
            this.removeEventListeners();
            this.closingDueToDisconnect = true;
            this.mdcFoundation.close(this.currentAction || this.defaultAction);
            this.closingDueToDisconnect = false;
            this.currentAction = undefined;
            // When we close normally, the releaseFocus callback handles removing
            // ourselves from the blocking elements stack. However, that callback
            // happens on a delay, and when we are closing due to a disconnect we
            // need to remove ourselves before the blocking element polyfill's
            // mutation observer notices and logs a warning, since it's not valid to
            // be in the blocking elements stack while disconnected.
            blockingElements.remove(this);
        }
    }
    forceLayout() {
        this.mdcFoundation.layout();
    }
    focus() {
        const initialFocusEl = this.getInitialFocusEl();
        initialFocusEl && initialFocusEl.focus();
    }
    blur() {
        if (!this.shadowRoot) {
            return;
        }
        const activeEl = this.shadowRoot.activeElement;
        if (activeEl) {
            if (activeEl instanceof HTMLElement) {
                activeEl.blur();
            }
        }
        else {
            const root = this.getRootNode();
            const activeEl = root instanceof Document ? root.activeElement : null;
            if (activeEl instanceof HTMLElement) {
                activeEl.blur();
            }
        }
    }
    setEventListeners() {
        if (this.boundHandleClick) {
            this.mdcRoot.addEventListener('click', this.boundHandleClick);
        }
        if (this.boundHandleKeydown) {
            this.mdcRoot.addEventListener('keydown', this.boundHandleKeydown, applyPassive());
        }
        if (this.boundHandleDocumentKeydown) {
            document.addEventListener('keydown', this.boundHandleDocumentKeydown, applyPassive());
        }
    }
    removeEventListeners() {
        if (this.boundHandleClick) {
            this.mdcRoot.removeEventListener('click', this.boundHandleClick);
        }
        if (this.boundHandleKeydown) {
            this.mdcRoot.removeEventListener('keydown', this.boundHandleKeydown);
        }
        if (this.boundHandleDocumentKeydown) {
            document.removeEventListener('keydown', this.boundHandleDocumentKeydown);
        }
    }
    close() {
        this.open = false;
    }
    show() {
        this.open = true;
    }
}
__decorate([
    i$3('.mdc-dialog')
], DialogBase.prototype, "mdcRoot", void 0);
__decorate([
    i$3('slot[name="primaryAction"]')
], DialogBase.prototype, "primarySlot", void 0);
__decorate([
    i$3('slot[name="secondaryAction"]')
], DialogBase.prototype, "secondarySlot", void 0);
__decorate([
    i$3('#contentSlot')
], DialogBase.prototype, "contentSlot", void 0);
__decorate([
    i$3('.mdc-dialog__content')
], DialogBase.prototype, "contentElement", void 0);
__decorate([
    i$3('.mdc-container')
], DialogBase.prototype, "conatinerElement", void 0);
__decorate([
    e$6({ type: Boolean })
], DialogBase.prototype, "hideActions", void 0);
__decorate([
    e$6({ type: Boolean }),
    observer(function () {
        this.forceLayout();
    })
], DialogBase.prototype, "stacked", void 0);
__decorate([
    e$6({ type: String })
], DialogBase.prototype, "heading", void 0);
__decorate([
    e$6({ type: String }),
    observer(function (newAction) {
        this.mdcFoundation.setScrimClickAction(newAction);
    })
], DialogBase.prototype, "scrimClickAction", void 0);
__decorate([
    e$6({ type: String }),
    observer(function (newAction) {
        this.mdcFoundation.setEscapeKeyAction(newAction);
    })
], DialogBase.prototype, "escapeKeyAction", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true }),
    observer(function (isOpen) {
        // Check isConnected because we could have been disconnected before first
        // update. If we're now closed, then we shouldn't start the MDC foundation
        // opening animation. If we're now closed, then we've already closed the
        // foundation in disconnectedCallback.
        if (this.mdcFoundation && this.isConnected) {
            if (isOpen) {
                this.setEventListeners();
                this.mdcFoundation.open();
            }
            else {
                this.removeEventListeners();
                this.mdcFoundation.close(this.currentAction || this.defaultAction);
                this.currentAction = undefined;
            }
        }
    })
], DialogBase.prototype, "open", void 0);
__decorate([
    e$6()
], DialogBase.prototype, "defaultAction", void 0);
__decorate([
    e$6()
], DialogBase.prototype, "actionAttribute", void 0);
__decorate([
    e$6()
], DialogBase.prototype, "initialFocusAttribute", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$a = i$6 `.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__surface-scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0,0,0,.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0,0,0,.6)}.mdc-dialog .mdc-dialog__close{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-dialog .mdc-dialog__close:hover .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions,.mdc-dialog.mdc-dialog--scrollable.mdc-dialog-scroll-divider-footer .mdc-dialog__actions{border-color:rgba(0,0,0,.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:1px solid rgba(0,0,0,.12);margin-bottom:0}.mdc-dialog.mdc-dialog-scroll-divider-header.mdc-dialog--fullscreen .mdc-dialog__header{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.mdc-dialog .mdc-dialog__surface{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px)}.mdc-dialog__surface{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0,0,0,.12)}.mdc-dialog__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit)}.mdc-dialog__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:0.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, 0.03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit)}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(max-width: 600px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid transparent;border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid transparent;display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid transparent}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1;z-index:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}#actions:not(.mdc-dialog__actions){display:none}.mdc-dialog__surface{box-shadow:var(--mdc-dialog-box-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}@media(min-width: 560px){.mdc-dialog .mdc-dialog__surface{max-width:560px;max-width:var(--mdc-dialog-max-width, 560px)}}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0, 0, 0, 0.32);background-color:var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.32))}.mdc-dialog .mdc-dialog__title{color:rgba(0, 0, 0, 0.87);color:var(--mdc-dialog-heading-ink-color, rgba(0, 0, 0, 0.87))}.mdc-dialog .mdc-dialog__content{color:rgba(0, 0, 0, 0.6);color:var(--mdc-dialog-content-ink-color, rgba(0, 0, 0, 0.6))}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12))}.mdc-dialog .mdc-dialog__surface{min-width:280px;min-width:var(--mdc-dialog-min-width, 280px)}.mdc-dialog .mdc-dialog__surface{max-height:var(--mdc-dialog-max-height, calc(100% - 32px))}#actions ::slotted(*){margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*[dir=rtl]){margin-left:0;margin-right:8px}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*[dir=rtl]){text-align:left}.mdc-dialog--stacked #actions{flex-direction:column-reverse}.mdc-dialog--stacked #actions *:not(:last-child) ::slotted(*){flex-basis:.000000001px;margin-top:12px}`;

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Dialog = class Dialog extends DialogBase {
};
Dialog.styles = [styles$a];
Dialog = __decorate([
    e$7('mwc-dialog')
], Dialog);

/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * KEY provides normalized string values for keys.
 */
var KEY = {
    UNKNOWN: 'Unknown',
    BACKSPACE: 'Backspace',
    ENTER: 'Enter',
    SPACEBAR: 'Spacebar',
    PAGE_UP: 'PageUp',
    PAGE_DOWN: 'PageDown',
    END: 'End',
    HOME: 'Home',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_UP: 'ArrowUp',
    ARROW_RIGHT: 'ArrowRight',
    ARROW_DOWN: 'ArrowDown',
    DELETE: 'Delete',
    ESCAPE: 'Escape',
    TAB: 'Tab',
};
var normalizedKeys = new Set();
// IE11 has no support for new Map with iterable so we need to initialize this
// by hand.
normalizedKeys.add(KEY.BACKSPACE);
normalizedKeys.add(KEY.ENTER);
normalizedKeys.add(KEY.SPACEBAR);
normalizedKeys.add(KEY.PAGE_UP);
normalizedKeys.add(KEY.PAGE_DOWN);
normalizedKeys.add(KEY.END);
normalizedKeys.add(KEY.HOME);
normalizedKeys.add(KEY.ARROW_LEFT);
normalizedKeys.add(KEY.ARROW_UP);
normalizedKeys.add(KEY.ARROW_RIGHT);
normalizedKeys.add(KEY.ARROW_DOWN);
normalizedKeys.add(KEY.DELETE);
normalizedKeys.add(KEY.ESCAPE);
normalizedKeys.add(KEY.TAB);
var KEY_CODE = {
    BACKSPACE: 8,
    ENTER: 13,
    SPACEBAR: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    DELETE: 46,
    ESCAPE: 27,
    TAB: 9,
};
var mappedKeyCodes = new Map();
// IE11 has no support for new Map with iterable so we need to initialize this
// by hand.
mappedKeyCodes.set(KEY_CODE.BACKSPACE, KEY.BACKSPACE);
mappedKeyCodes.set(KEY_CODE.ENTER, KEY.ENTER);
mappedKeyCodes.set(KEY_CODE.SPACEBAR, KEY.SPACEBAR);
mappedKeyCodes.set(KEY_CODE.PAGE_UP, KEY.PAGE_UP);
mappedKeyCodes.set(KEY_CODE.PAGE_DOWN, KEY.PAGE_DOWN);
mappedKeyCodes.set(KEY_CODE.END, KEY.END);
mappedKeyCodes.set(KEY_CODE.HOME, KEY.HOME);
mappedKeyCodes.set(KEY_CODE.ARROW_LEFT, KEY.ARROW_LEFT);
mappedKeyCodes.set(KEY_CODE.ARROW_UP, KEY.ARROW_UP);
mappedKeyCodes.set(KEY_CODE.ARROW_RIGHT, KEY.ARROW_RIGHT);
mappedKeyCodes.set(KEY_CODE.ARROW_DOWN, KEY.ARROW_DOWN);
mappedKeyCodes.set(KEY_CODE.DELETE, KEY.DELETE);
mappedKeyCodes.set(KEY_CODE.ESCAPE, KEY.ESCAPE);
mappedKeyCodes.set(KEY_CODE.TAB, KEY.TAB);
var navigationKeys = new Set();
// IE11 has no support for new Set with iterable so we need to initialize this
// by hand.
navigationKeys.add(KEY.PAGE_UP);
navigationKeys.add(KEY.PAGE_DOWN);
navigationKeys.add(KEY.END);
navigationKeys.add(KEY.HOME);
navigationKeys.add(KEY.ARROW_LEFT);
navigationKeys.add(KEY.ARROW_UP);
navigationKeys.add(KEY.ARROW_RIGHT);
navigationKeys.add(KEY.ARROW_DOWN);
/**
 * normalizeKey returns the normalized string for a navigational action.
 */
function normalizeKey(evt) {
    var key = evt.key;
    // If the event already has a normalized key, return it
    if (normalizedKeys.has(key)) {
        return key;
    }
    // tslint:disable-next-line:deprecation
    var mappedKey = mappedKeyCodes.get(evt.keyCode);
    if (mappedKey) {
        return mappedKey;
    }
    return KEY.UNKNOWN;
}

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var _a, _b;
var cssClasses$7 = {
    LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated',
    LIST_ITEM_CLASS: 'mdc-list-item',
    LIST_ITEM_DISABLED_CLASS: 'mdc-list-item--disabled',
    LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
    LIST_ITEM_TEXT_CLASS: 'mdc-list-item__text',
    LIST_ITEM_PRIMARY_TEXT_CLASS: 'mdc-list-item__primary-text',
    ROOT: 'mdc-list',
};
(_a = {},
    _a["" + cssClasses$7.LIST_ITEM_ACTIVATED_CLASS] = 'mdc-list-item--activated',
    _a["" + cssClasses$7.LIST_ITEM_CLASS] = 'mdc-list-item',
    _a["" + cssClasses$7.LIST_ITEM_DISABLED_CLASS] = 'mdc-list-item--disabled',
    _a["" + cssClasses$7.LIST_ITEM_SELECTED_CLASS] = 'mdc-list-item--selected',
    _a["" + cssClasses$7.LIST_ITEM_PRIMARY_TEXT_CLASS] = 'mdc-list-item__primary-text',
    _a["" + cssClasses$7.ROOT] = 'mdc-list',
    _a);
var deprecatedClassNameMap = (_b = {},
    _b["" + cssClasses$7.LIST_ITEM_ACTIVATED_CLASS] = 'mdc-deprecated-list-item--activated',
    _b["" + cssClasses$7.LIST_ITEM_CLASS] = 'mdc-deprecated-list-item',
    _b["" + cssClasses$7.LIST_ITEM_DISABLED_CLASS] = 'mdc-deprecated-list-item--disabled',
    _b["" + cssClasses$7.LIST_ITEM_SELECTED_CLASS] = 'mdc-deprecated-list-item--selected',
    _b["" + cssClasses$7.LIST_ITEM_TEXT_CLASS] = 'mdc-deprecated-list-item__text',
    _b["" + cssClasses$7.LIST_ITEM_PRIMARY_TEXT_CLASS] = 'mdc-deprecated-list-item__primary-text',
    _b["" + cssClasses$7.ROOT] = 'mdc-deprecated-list',
    _b);
var strings$5 = {
    ACTION_EVENT: 'MDCList:action',
    SELECTION_CHANGE_EVENT: 'MDCList:selectionChange',
    ARIA_CHECKED: 'aria-checked',
    ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
    ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
    ARIA_CURRENT: 'aria-current',
    ARIA_DISABLED: 'aria-disabled',
    ARIA_ORIENTATION: 'aria-orientation',
    ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
    ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
    ARIA_SELECTED: 'aria-selected',
    ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
    ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
    CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses$7.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses$7.LIST_ITEM_CLASS + " a,\n    ." + deprecatedClassNameMap[cssClasses$7.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$7.LIST_ITEM_CLASS] + " a\n  ",
    DEPRECATED_SELECTOR: '.mdc-deprecated-list',
    FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses$7.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses$7.LIST_ITEM_CLASS + " a,\n    ." + cssClasses$7.LIST_ITEM_CLASS + " input[type=\"radio\"]:not(:disabled),\n    ." + cssClasses$7.LIST_ITEM_CLASS + " input[type=\"checkbox\"]:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$7.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$7.LIST_ITEM_CLASS] + " a,\n    ." + deprecatedClassNameMap[cssClasses$7.LIST_ITEM_CLASS] + " input[type=\"radio\"]:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$7.LIST_ITEM_CLASS] + " input[type=\"checkbox\"]:not(:disabled)\n  ",
    RADIO_SELECTOR: 'input[type="radio"]',
    SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]',
};
var numbers$5 = {
    UNSET_INDEX: -1,
    TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const integerSort = (a, b) => {
    return a - b;
};
const findIndexDiff = (oldSet, newSet) => {
    const oldArr = Array.from(oldSet);
    const newArr = Array.from(newSet);
    const diff = { added: [], removed: [] };
    const oldSorted = oldArr.sort(integerSort);
    const newSorted = newArr.sort(integerSort);
    let i = 0;
    let j = 0;
    while (i < oldSorted.length || j < newSorted.length) {
        const oldVal = oldSorted[i];
        const newVal = newSorted[j];
        if (oldVal === newVal) {
            i++;
            j++;
            continue;
        }
        if (oldVal !== undefined && (newVal === undefined || oldVal < newVal)) {
            diff.removed.push(oldVal);
            i++;
            continue;
        }
        if (newVal !== undefined && (oldVal === undefined || newVal < oldVal)) {
            diff.added.push(newVal);
            j++;
            continue;
        }
    }
    return diff;
};
const ELEMENTS_KEY_ALLOWED_IN$1 = ['input', 'button', 'textarea', 'select'];
function isIndexSet(selectedIndex) {
    return selectedIndex instanceof Set;
}
const createSetFromIndex = (index) => {
    const entry = index === numbers$5.UNSET_INDEX ? new Set() : index;
    return isIndexSet(entry) ? new Set(entry) : new Set([entry]);
};
class MDCListFoundation extends MDCFoundation {
    constructor(adapter) {
        super(Object.assign(Object.assign({}, MDCListFoundation.defaultAdapter), adapter));
        this.isMulti_ = false;
        this.wrapFocus_ = false;
        this.isVertical_ = true;
        this.selectedIndex_ = numbers$5.UNSET_INDEX;
        this.focusedItemIndex_ = numbers$5.UNSET_INDEX;
        this.useActivatedClass_ = false;
        this.ariaCurrentAttrValue_ = null;
    }
    static get strings() {
        return strings$5;
    }
    static get numbers() {
        return numbers$5;
    }
    static get defaultAdapter() {
        return {
            focusItemAtIndex: () => undefined,
            getFocusedElementIndex: () => 0,
            getListItemCount: () => 0,
            isFocusInsideList: () => false,
            isRootFocused: () => false,
            notifyAction: () => undefined,
            notifySelected: () => undefined,
            getSelectedStateForElementIndex: () => false,
            setDisabledStateForElementIndex: () => undefined,
            getDisabledStateForElementIndex: () => false,
            setSelectedStateForElementIndex: () => undefined,
            setActivatedStateForElementIndex: () => undefined,
            setTabIndexForElementIndex: () => undefined,
            setAttributeForElementIndex: () => undefined,
            getAttributeForElementIndex: () => null,
        };
    }
    /**
     * Sets the private wrapFocus_ variable.
     */
    setWrapFocus(value) {
        this.wrapFocus_ = value;
    }
    /**
     * Sets the private wrapFocus_ variable.
     */
    setMulti(value) {
        this.isMulti_ = value;
        const currentIndex = this.selectedIndex_;
        if (value) {
            // number to set
            if (!isIndexSet(currentIndex)) {
                const isUnset = currentIndex === numbers$5.UNSET_INDEX;
                this.selectedIndex_ = isUnset ? new Set() : new Set([currentIndex]);
            }
        }
        else {
            // set to first sorted number in set
            if (isIndexSet(currentIndex)) {
                if (currentIndex.size) {
                    const vals = Array.from(currentIndex).sort(integerSort);
                    this.selectedIndex_ = vals[0];
                }
                else {
                    this.selectedIndex_ = numbers$5.UNSET_INDEX;
                }
            }
        }
    }
    /**
     * Sets the isVertical_ private variable.
     */
    setVerticalOrientation(value) {
        this.isVertical_ = value;
    }
    /**
     * Sets the useActivatedClass_ private variable.
     */
    setUseActivatedClass(useActivated) {
        this.useActivatedClass_ = useActivated;
    }
    getSelectedIndex() {
        return this.selectedIndex_;
    }
    setSelectedIndex(index) {
        if (!this.isIndexValid_(index)) {
            return;
        }
        if (this.isMulti_) {
            this.setMultiSelectionAtIndex_(createSetFromIndex(index));
        }
        else {
            this.setSingleSelectionAtIndex_(index);
        }
    }
    /**
     * Focus in handler for the list items.
     */
    handleFocusIn(_, listItemIndex) {
        if (listItemIndex >= 0) {
            this.adapter.setTabIndexForElementIndex(listItemIndex, 0);
        }
    }
    /**
     * Focus out handler for the list items.
     */
    handleFocusOut(_, listItemIndex) {
        if (listItemIndex >= 0) {
            this.adapter.setTabIndexForElementIndex(listItemIndex, -1);
        }
        /**
         * Between Focusout & Focusin some browsers do not have focus on any
         * element. Setting a delay to wait till the focus is moved to next element.
         */
        setTimeout(() => {
            if (!this.adapter.isFocusInsideList()) {
                this.setTabindexToFirstSelectedItem_();
            }
        }, 0);
    }
    /**
     * Key handler for the list.
     */
    handleKeydown(event, isRootListItem, listItemIndex) {
        const isArrowLeft = normalizeKey(event) === 'ArrowLeft';
        const isArrowUp = normalizeKey(event) === 'ArrowUp';
        const isArrowRight = normalizeKey(event) === 'ArrowRight';
        const isArrowDown = normalizeKey(event) === 'ArrowDown';
        const isHome = normalizeKey(event) === 'Home';
        const isEnd = normalizeKey(event) === 'End';
        const isEnter = normalizeKey(event) === 'Enter';
        const isSpace = normalizeKey(event) === 'Spacebar';
        if (this.adapter.isRootFocused()) {
            if (isArrowUp || isEnd) {
                event.preventDefault();
                this.focusLastElement();
            }
            else if (isArrowDown || isHome) {
                event.preventDefault();
                this.focusFirstElement();
            }
            return;
        }
        let currentIndex = this.adapter.getFocusedElementIndex();
        if (currentIndex === -1) {
            currentIndex = listItemIndex;
            if (currentIndex < 0) {
                // If this event doesn't have a mdc-deprecated-list-item ancestor from
                // the current list (not from a sublist), return early.
                return;
            }
        }
        let nextIndex;
        if ((this.isVertical_ && isArrowDown) ||
            (!this.isVertical_ && isArrowRight)) {
            this.preventDefaultEvent(event);
            nextIndex = this.focusNextElement(currentIndex);
        }
        else if ((this.isVertical_ && isArrowUp) || (!this.isVertical_ && isArrowLeft)) {
            this.preventDefaultEvent(event);
            nextIndex = this.focusPrevElement(currentIndex);
        }
        else if (isHome) {
            this.preventDefaultEvent(event);
            nextIndex = this.focusFirstElement();
        }
        else if (isEnd) {
            this.preventDefaultEvent(event);
            nextIndex = this.focusLastElement();
        }
        else if (isEnter || isSpace) {
            if (isRootListItem) {
                // Return early if enter key is pressed on anchor element which triggers
                // synthetic MouseEvent event.
                const target = event.target;
                if (target && target.tagName === 'A' && isEnter) {
                    return;
                }
                this.preventDefaultEvent(event);
                this.setSelectedIndexOnAction_(currentIndex, true);
            }
        }
        this.focusedItemIndex_ = currentIndex;
        if (nextIndex !== undefined) {
            this.setTabindexAtIndex_(nextIndex);
            this.focusedItemIndex_ = nextIndex;
        }
    }
    /**
     * Click handler for the list.
     */
    handleSingleSelection(index, isInteraction, force) {
        if (index === numbers$5.UNSET_INDEX) {
            return;
        }
        this.setSelectedIndexOnAction_(index, isInteraction, force);
        this.setTabindexAtIndex_(index);
        this.focusedItemIndex_ = index;
    }
    /**
     * Focuses the next element on the list.
     */
    focusNextElement(index) {
        const count = this.adapter.getListItemCount();
        let nextIndex = index + 1;
        if (nextIndex >= count) {
            if (this.wrapFocus_) {
                nextIndex = 0;
            }
            else {
                // Return early because last item is already focused.
                return index;
            }
        }
        this.adapter.focusItemAtIndex(nextIndex);
        return nextIndex;
    }
    /**
     * Focuses the previous element on the list.
     */
    focusPrevElement(index) {
        let prevIndex = index - 1;
        if (prevIndex < 0) {
            if (this.wrapFocus_) {
                prevIndex = this.adapter.getListItemCount() - 1;
            }
            else {
                // Return early because first item is already focused.
                return index;
            }
        }
        this.adapter.focusItemAtIndex(prevIndex);
        return prevIndex;
    }
    focusFirstElement() {
        this.adapter.focusItemAtIndex(0);
        return 0;
    }
    focusLastElement() {
        const lastIndex = this.adapter.getListItemCount() - 1;
        this.adapter.focusItemAtIndex(lastIndex);
        return lastIndex;
    }
    /**
     * @param itemIndex Index of the list item
     * @param isEnabled Sets the list item to enabled or disabled.
     */
    setEnabled(itemIndex, isEnabled) {
        if (!this.isIndexValid_(itemIndex)) {
            return;
        }
        this.adapter.setDisabledStateForElementIndex(itemIndex, !isEnabled);
    }
    /**
     * Ensures that preventDefault is only called if the containing element
     * doesn't consume the event, and it will cause an unintended scroll.
     */
    preventDefaultEvent(evt) {
        const target = evt.target;
        const tagName = `${target.tagName}`.toLowerCase();
        if (ELEMENTS_KEY_ALLOWED_IN$1.indexOf(tagName) === -1) {
            evt.preventDefault();
        }
    }
    setSingleSelectionAtIndex_(index, isInteraction = true) {
        if (this.selectedIndex_ === index) {
            return;
        }
        // unset previous
        if (this.selectedIndex_ !== numbers$5.UNSET_INDEX) {
            this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, false);
            if (this.useActivatedClass_) {
                this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, false);
            }
        }
        // set new
        if (isInteraction) {
            this.adapter.setSelectedStateForElementIndex(index, true);
        }
        if (this.useActivatedClass_) {
            this.adapter.setActivatedStateForElementIndex(index, true);
        }
        this.setAriaForSingleSelectionAtIndex_(index);
        this.selectedIndex_ = index;
        this.adapter.notifySelected(index);
    }
    setMultiSelectionAtIndex_(newIndex, isInteraction = true) {
        const oldIndex = createSetFromIndex(this.selectedIndex_);
        const diff = findIndexDiff(oldIndex, newIndex);
        if (!diff.removed.length && !diff.added.length) {
            return;
        }
        for (const removed of diff.removed) {
            if (isInteraction) {
                this.adapter.setSelectedStateForElementIndex(removed, false);
            }
            if (this.useActivatedClass_) {
                this.adapter.setActivatedStateForElementIndex(removed, false);
            }
        }
        for (const added of diff.added) {
            if (isInteraction) {
                this.adapter.setSelectedStateForElementIndex(added, true);
            }
            if (this.useActivatedClass_) {
                this.adapter.setActivatedStateForElementIndex(added, true);
            }
        }
        this.selectedIndex_ = newIndex;
        this.adapter.notifySelected(newIndex, diff);
    }
    /**
     * Sets aria attribute for single selection at given index.
     */
    setAriaForSingleSelectionAtIndex_(index) {
        // Detect the presence of aria-current and get the value only during list
        // initialization when it is in unset state.
        if (this.selectedIndex_ === numbers$5.UNSET_INDEX) {
            this.ariaCurrentAttrValue_ =
                this.adapter.getAttributeForElementIndex(index, strings$5.ARIA_CURRENT);
        }
        const isAriaCurrent = this.ariaCurrentAttrValue_ !== null;
        const ariaAttribute = isAriaCurrent ? strings$5.ARIA_CURRENT : strings$5.ARIA_SELECTED;
        if (this.selectedIndex_ !== numbers$5.UNSET_INDEX) {
            this.adapter.setAttributeForElementIndex(this.selectedIndex_, ariaAttribute, 'false');
        }
        const ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue_ : 'true';
        this.adapter.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
    }
    setTabindexAtIndex_(index) {
        if (this.focusedItemIndex_ === numbers$5.UNSET_INDEX && index !== 0) {
            // If no list item was selected set first list item's tabindex to -1.
            // Generally, tabindex is set to 0 on first list item of list that has no
            // preselected items.
            this.adapter.setTabIndexForElementIndex(0, -1);
        }
        else if (this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== index) {
            this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1);
        }
        this.adapter.setTabIndexForElementIndex(index, 0);
    }
    setTabindexToFirstSelectedItem_() {
        let targetIndex = 0;
        if (typeof this.selectedIndex_ === 'number' &&
            this.selectedIndex_ !== numbers$5.UNSET_INDEX) {
            targetIndex = this.selectedIndex_;
        }
        else if (isIndexSet(this.selectedIndex_) && this.selectedIndex_.size > 0) {
            targetIndex = Math.min(...this.selectedIndex_);
        }
        this.setTabindexAtIndex_(targetIndex);
    }
    isIndexValid_(index) {
        if (index instanceof Set) {
            if (!this.isMulti_) {
                throw new Error('MDCListFoundation: Array of index is only supported for checkbox based list');
            }
            if (index.size === 0) {
                return true;
            }
            else {
                let isOneInRange = false;
                for (const entry of index) {
                    isOneInRange = this.isIndexInRange_(entry);
                    if (isOneInRange) {
                        break;
                    }
                }
                return isOneInRange;
            }
        }
        else if (typeof index === 'number') {
            if (this.isMulti_) {
                throw new Error('MDCListFoundation: Expected array of index for checkbox based list but got number: ' +
                    index);
            }
            return index === numbers$5.UNSET_INDEX || this.isIndexInRange_(index);
        }
        else {
            return false;
        }
    }
    isIndexInRange_(index) {
        const listSize = this.adapter.getListItemCount();
        return index >= 0 && index < listSize;
    }
    /**
     * Sets selected index on user action, toggles checkbox / radio based on
     * toggleCheckbox value. User interaction should not toggle list item(s) when
     * disabled.
     */
    setSelectedIndexOnAction_(index, isInteraction, force) {
        if (this.adapter.getDisabledStateForElementIndex(index)) {
            return;
        }
        let checkedIndex = index;
        if (this.isMulti_) {
            checkedIndex = new Set([index]);
        }
        if (!this.isIndexValid_(checkedIndex)) {
            return;
        }
        if (this.isMulti_) {
            this.toggleMultiAtIndex(index, force, isInteraction);
        }
        else {
            if (isInteraction || force) {
                this.setSingleSelectionAtIndex_(index, isInteraction);
            }
            else {
                const isDeselection = this.selectedIndex_ === index;
                if (isDeselection) {
                    this.setSingleSelectionAtIndex_(numbers$5.UNSET_INDEX);
                }
            }
        }
        if (isInteraction) {
            this.adapter.notifyAction(index);
        }
    }
    toggleMultiAtIndex(index, force, isInteraction = true) {
        let newSelectionValue = false;
        if (force === undefined) {
            newSelectionValue = !this.adapter.getSelectedStateForElementIndex(index);
        }
        else {
            newSelectionValue = force;
        }
        const newSet = createSetFromIndex(this.selectedIndex_);
        if (newSelectionValue) {
            newSet.add(index);
        }
        else {
            newSet.delete(index);
        }
        this.setMultiSelectionAtIndex_(newSet, isInteraction);
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function debounceLayout(callback, waitInMS = 50) {
    let timeoutId;
    // tslint:disable-next-line
    return function (updateItems = true) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            callback(updateItems);
        }, waitInMS);
    };
}
const isListItem = (element) => {
    return element.hasAttribute('mwc-list-item');
};
function clearAndCreateItemsReadyPromise() {
    const oldResolver = this.itemsReadyResolver;
    this.itemsReady = new Promise((res) => {
        // TODO(b/175626389): Type '(value: never[] | PromiseLike<never[]>) => void'
        // is not assignable to type '(value?: never[] | PromiseLike<never[]> |
        // undefined) => void'.
        return this.itemsReadyResolver = res;
    });
    oldResolver();
}
/**
 * @fires selected {SelectedDetail}
 * @fires action {ActionDetail}
 * @fires items-updated
 */
class ListBase extends BaseElement {
    constructor() {
        super();
        this.mdcAdapter = null;
        this.mdcFoundationClass = MDCListFoundation;
        this.activatable = false;
        this.multi = false;
        this.wrapFocus = false;
        this.itemRoles = null;
        this.innerRole = null;
        this.innerAriaLabel = null;
        this.rootTabbable = false;
        this.previousTabindex = null;
        this.noninteractive = false;
        this.itemsReadyResolver = (() => {
            //
        });
        this.itemsReady = Promise.resolve([]);
        // tslint:enable:ban-ts-ignore
        this.items_ = [];
        const debouncedFunction = debounceLayout(this.layout.bind(this));
        this.debouncedLayout = (updateItems = true) => {
            clearAndCreateItemsReadyPromise.call(this);
            debouncedFunction(updateItems);
        };
    }
    // tslint:disable:ban-ts-ignore
    async getUpdateComplete() {
        // @ts-ignore
        const result = await super.getUpdateComplete();
        await this.itemsReady;
        return result;
    }
    get items() {
        return this.items_;
    }
    updateItems() {
        var _a;
        const nodes = (_a = this.assignedElements) !== null && _a !== void 0 ? _a : [];
        const listItems = [];
        for (const node of nodes) {
            if (isListItem(node)) {
                listItems.push(node);
                node._managingList = this;
            }
            if (node.hasAttribute('divider') && !node.hasAttribute('role')) {
                node.setAttribute('role', 'separator');
            }
        }
        this.items_ = listItems;
        const selectedIndices = new Set();
        this.items_.forEach((item, index) => {
            if (this.itemRoles) {
                item.setAttribute('role', this.itemRoles);
            }
            else {
                item.removeAttribute('role');
            }
            if (item.selected) {
                selectedIndices.add(index);
            }
        });
        if (this.multi) {
            this.select(selectedIndices);
        }
        else {
            const index = selectedIndices.size ? selectedIndices.entries().next().value[1] : -1;
            this.select(index);
        }
        const itemsUpdatedEv = new Event('items-updated', { bubbles: true, composed: true });
        this.dispatchEvent(itemsUpdatedEv);
    }
    get selected() {
        const index = this.index;
        if (!isIndexSet(index)) {
            if (index === -1) {
                return null;
            }
            return this.items[index];
        }
        const selected = [];
        for (const entry of index) {
            selected.push(this.items[entry]);
        }
        return selected;
    }
    get index() {
        if (this.mdcFoundation) {
            return this.mdcFoundation.getSelectedIndex();
        }
        return -1;
    }
    render() {
        const role = this.innerRole === null ? undefined : this.innerRole;
        const ariaLabel = this.innerAriaLabel === null ? undefined : this.innerAriaLabel;
        const tabindex = this.rootTabbable ? '0' : '-1';
        return y `
      <!-- @ts-ignore -->
      <ul
          tabindex=${tabindex}
          role="${l$2(role)}"
          aria-label="${l$2(ariaLabel)}"
          class="mdc-deprecated-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}
          @list-item-rendered=${this.onListItemConnected}>
        <slot></slot>
        ${this.renderPlaceholder()}
      </ul>
    `;
    }
    renderPlaceholder() {
        var _a;
        const nodes = (_a = this.assignedElements) !== null && _a !== void 0 ? _a : [];
        if (this.emptyMessage !== undefined && nodes.length === 0) {
            return y `
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      `;
        }
        return null;
    }
    firstUpdated() {
        super.firstUpdated();
        if (!this.items.length) {
            // required because this is called before observers
            this.mdcFoundation.setMulti(this.multi);
            // for when children upgrade before list
            this.layout();
        }
    }
    onFocusIn(evt) {
        if (this.mdcFoundation && this.mdcRoot) {
            const index = this.getIndexOfTarget(evt);
            this.mdcFoundation.handleFocusIn(evt, index);
        }
    }
    onFocusOut(evt) {
        if (this.mdcFoundation && this.mdcRoot) {
            const index = this.getIndexOfTarget(evt);
            this.mdcFoundation.handleFocusOut(evt, index);
        }
    }
    onKeydown(evt) {
        if (this.mdcFoundation && this.mdcRoot) {
            const index = this.getIndexOfTarget(evt);
            const target = evt.target;
            const isRootListItem = isListItem(target);
            this.mdcFoundation.handleKeydown(evt, isRootListItem, index);
        }
    }
    onRequestSelected(evt) {
        if (this.mdcFoundation) {
            let index = this.getIndexOfTarget(evt);
            // might happen in shady dom slowness. Recalc children
            if (index === -1) {
                this.layout();
                index = this.getIndexOfTarget(evt);
                // still not found; may not be mwc-list-item. Unsupported case.
                if (index === -1) {
                    return;
                }
            }
            const element = this.items[index];
            if (element.disabled) {
                return;
            }
            const selected = evt.detail.selected;
            const source = evt.detail.source;
            this.mdcFoundation.handleSingleSelection(index, source === 'interaction', selected);
            evt.stopPropagation();
        }
    }
    getIndexOfTarget(evt) {
        const elements = this.items;
        const path = evt.composedPath();
        for (const pathItem of path) {
            let index = -1;
            if (isNodeElement(pathItem) && isListItem(pathItem)) {
                index = elements.indexOf(pathItem);
            }
            if (index !== -1) {
                return index;
            }
        }
        return -1;
    }
    createAdapter() {
        this.mdcAdapter = {
            getListItemCount: () => {
                if (this.mdcRoot) {
                    return this.items.length;
                }
                return 0;
            },
            getFocusedElementIndex: this.getFocusedItemIndex,
            getAttributeForElementIndex: (index, attr) => {
                const listElement = this.mdcRoot;
                if (!listElement) {
                    return '';
                }
                const element = this.items[index];
                return element ? element.getAttribute(attr) : '';
            },
            setAttributeForElementIndex: (index, attr, val) => {
                if (!this.mdcRoot) {
                    return;
                }
                const element = this.items[index];
                if (element) {
                    element.setAttribute(attr, val);
                }
            },
            focusItemAtIndex: (index) => {
                const element = this.items[index];
                if (element) {
                    element.focus();
                }
            },
            setTabIndexForElementIndex: (index, value) => {
                const item = this.items[index];
                if (item) {
                    item.tabindex = value;
                }
            },
            notifyAction: (index) => {
                const init = { bubbles: true, composed: true };
                init.detail = { index };
                const ev = new CustomEvent('action', init);
                this.dispatchEvent(ev);
            },
            notifySelected: (index, diff) => {
                const init = { bubbles: true, composed: true };
                init.detail = { index, diff };
                const ev = new CustomEvent('selected', init);
                this.dispatchEvent(ev);
            },
            isFocusInsideList: () => {
                return doesElementContainFocus(this);
            },
            isRootFocused: () => {
                const mdcRoot = this.mdcRoot;
                const root = mdcRoot.getRootNode();
                return root.activeElement === mdcRoot;
            },
            setDisabledStateForElementIndex: (index, value) => {
                const item = this.items[index];
                if (!item) {
                    return;
                }
                item.disabled = value;
            },
            getDisabledStateForElementIndex: (index) => {
                const item = this.items[index];
                if (!item) {
                    return false;
                }
                return item.disabled;
            },
            setSelectedStateForElementIndex: (index, value) => {
                const item = this.items[index];
                if (!item) {
                    return;
                }
                item.selected = value;
            },
            getSelectedStateForElementIndex: (index) => {
                const item = this.items[index];
                if (!item) {
                    return false;
                }
                return item.selected;
            },
            setActivatedStateForElementIndex: (index, value) => {
                const item = this.items[index];
                if (!item) {
                    return;
                }
                item.activated = value;
            },
        };
        return this.mdcAdapter;
    }
    selectUi(index, activate = false) {
        const item = this.items[index];
        if (item) {
            item.selected = true;
            item.activated = activate;
        }
    }
    deselectUi(index) {
        const item = this.items[index];
        if (item) {
            item.selected = false;
            item.activated = false;
        }
    }
    select(index) {
        if (!this.mdcFoundation) {
            return;
        }
        this.mdcFoundation.setSelectedIndex(index);
    }
    toggle(index, force) {
        if (this.multi) {
            this.mdcFoundation.toggleMultiAtIndex(index, force);
        }
    }
    onListItemConnected(e) {
        const target = e.target;
        this.layout(this.items.indexOf(target) === -1);
    }
    layout(updateItems = true) {
        if (updateItems) {
            this.updateItems();
        }
        const first = this.items[0];
        for (const item of this.items) {
            item.tabindex = -1;
        }
        if (first) {
            if (this.noninteractive) {
                if (!this.previousTabindex) {
                    this.previousTabindex = first;
                }
            }
            else {
                first.tabindex = 0;
            }
        }
        this.itemsReadyResolver();
    }
    getFocusedItemIndex() {
        if (!this.mdcRoot) {
            return -1;
        }
        if (!this.items.length) {
            return -1;
        }
        const activeElementPath = deepActiveElementPath();
        if (!activeElementPath.length) {
            return -1;
        }
        for (let i = activeElementPath.length - 1; i >= 0; i--) {
            const activeItem = activeElementPath[i];
            if (isListItem(activeItem)) {
                return this.items.indexOf(activeItem);
            }
        }
        return -1;
    }
    focusItemAtIndex(index) {
        for (const item of this.items) {
            if (item.tabindex === 0) {
                item.tabindex = -1;
                break;
            }
        }
        this.items[index].tabindex = 0;
        this.items[index].focus();
    }
    focus() {
        const root = this.mdcRoot;
        if (root) {
            root.focus();
        }
    }
    blur() {
        const root = this.mdcRoot;
        if (root) {
            root.blur();
        }
    }
}
__decorate([
    e$6({ type: String })
], ListBase.prototype, "emptyMessage", void 0);
__decorate([
    i$3('.mdc-deprecated-list')
], ListBase.prototype, "mdcRoot", void 0);
__decorate([
    o$2('', true, '*')
], ListBase.prototype, "assignedElements", void 0);
__decorate([
    o$2('', true, '[tabindex="0"]')
], ListBase.prototype, "tabbableElements", void 0);
__decorate([
    e$6({ type: Boolean }),
    observer(function (value) {
        if (this.mdcFoundation) {
            this.mdcFoundation.setUseActivatedClass(value);
        }
    })
], ListBase.prototype, "activatable", void 0);
__decorate([
    e$6({ type: Boolean }),
    observer(function (newValue, oldValue) {
        if (this.mdcFoundation) {
            this.mdcFoundation.setMulti(newValue);
        }
        if (oldValue !== undefined) {
            this.layout();
        }
    })
], ListBase.prototype, "multi", void 0);
__decorate([
    e$6({ type: Boolean }),
    observer(function (value) {
        if (this.mdcFoundation) {
            this.mdcFoundation.setWrapFocus(value);
        }
    })
], ListBase.prototype, "wrapFocus", void 0);
__decorate([
    e$6({ type: String }),
    observer(function (_newValue, oldValue) {
        if (oldValue !== undefined) {
            this.updateItems();
        }
    })
], ListBase.prototype, "itemRoles", void 0);
__decorate([
    e$6({ type: String })
], ListBase.prototype, "innerRole", void 0);
__decorate([
    e$6({ type: String })
], ListBase.prototype, "innerAriaLabel", void 0);
__decorate([
    e$6({ type: Boolean })
], ListBase.prototype, "rootTabbable", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true }),
    observer(function (value) {
        var _a, _b;
        if (value) {
            const tabbable = (_b = (_a = this.tabbableElements) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : null;
            this.previousTabindex = tabbable;
            if (tabbable) {
                tabbable.setAttribute('tabindex', '-1');
            }
        }
        else if (!value && this.previousTabindex) {
            this.previousTabindex.setAttribute('tabindex', '0');
            this.previousTabindex = null;
        }
    })
], ListBase.prototype, "noninteractive", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$9 = i$6 `@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-deprecated-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-deprecated-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-deprecated-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc( 100% - var(--mdc-list-inset-margin, 72px) )}[dir=rtl] .mdc-deprecated-list ::slotted([divider][inset]),.mdc-deprecated-list ::slotted([divider][inset][dir=rtl]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-deprecated-list ::slotted([divider][inset][padded]){width:calc( 100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px) )}.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense ::slotted([mwc-list-item]),.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let List = class List extends ListBase {
};
List.styles = [styles$9];
List = __decorate([
    e$7('mwc-list')
], List);

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$6 = {
    ANCHOR: 'mdc-menu-surface--anchor',
    ANIMATING_CLOSED: 'mdc-menu-surface--animating-closed',
    ANIMATING_OPEN: 'mdc-menu-surface--animating-open',
    FIXED: 'mdc-menu-surface--fixed',
    IS_OPEN_BELOW: 'mdc-menu-surface--is-open-below',
    OPEN: 'mdc-menu-surface--open',
    ROOT: 'mdc-menu-surface',
};
// tslint:disable:object-literal-sort-keys
var strings$4 = {
    CLOSED_EVENT: 'MDCMenuSurface:closed',
    CLOSING_EVENT: 'MDCMenuSurface:closing',
    OPENED_EVENT: 'MDCMenuSurface:opened',
    OPENING_EVENT: 'MDCMenuSurface:opening',
    FOCUSABLE_ELEMENTS: [
        'button:not(:disabled)',
        '[href]:not([aria-disabled="true"])',
        'input:not(:disabled)',
        'select:not(:disabled)',
        'textarea:not(:disabled)',
        '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])',
    ].join(', '),
};
// tslint:enable:object-literal-sort-keys
var numbers$4 = {
    /** Total duration of menu-surface open animation. */
    TRANSITION_OPEN_DURATION: 120,
    /** Total duration of menu-surface close animation. */
    TRANSITION_CLOSE_DURATION: 75,
    /**
     * Margin left to the edge of the viewport when menu-surface is at maximum
     * possible height. Also used as a viewport margin.
     */
    MARGIN_TO_EDGE: 32,
    /**
     * Ratio of anchor width to menu-surface width for switching from corner
     * positioning to center positioning.
     */
    ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
    /**
     * Amount of time to wait before restoring focus when closing the menu
     * surface. This is important because if a touch event triggered the menu
     * close, and the subsequent mouse event occurs after focus is restored, then
     * the restored focus would be lost.
     */
    TOUCH_EVENT_WAIT_MS: 30,
};
/**
 * Enum for bits in the {@see Corner) bitmap.
 */
var CornerBit;
(function (CornerBit) {
    CornerBit[CornerBit["BOTTOM"] = 1] = "BOTTOM";
    CornerBit[CornerBit["CENTER"] = 2] = "CENTER";
    CornerBit[CornerBit["RIGHT"] = 4] = "RIGHT";
    CornerBit[CornerBit["FLIP_RTL"] = 8] = "FLIP_RTL";
})(CornerBit || (CornerBit = {}));
/**
 * Enum for representing an element corner for positioning the menu-surface.
 *
 * The START constants map to LEFT if element directionality is left
 * to right and RIGHT if the directionality is right to left.
 * Likewise END maps to RIGHT or LEFT depending on the directionality.
 */
var Corner;
(function (Corner) {
    Corner[Corner["TOP_LEFT"] = 0] = "TOP_LEFT";
    Corner[Corner["TOP_RIGHT"] = 4] = "TOP_RIGHT";
    Corner[Corner["BOTTOM_LEFT"] = 1] = "BOTTOM_LEFT";
    Corner[Corner["BOTTOM_RIGHT"] = 5] = "BOTTOM_RIGHT";
    Corner[Corner["TOP_START"] = 8] = "TOP_START";
    Corner[Corner["TOP_END"] = 12] = "TOP_END";
    Corner[Corner["BOTTOM_START"] = 9] = "BOTTOM_START";
    Corner[Corner["BOTTOM_END"] = 13] = "BOTTOM_END";
})(Corner || (Corner = {}));

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCMenuSurfaceFoundation = /** @class */ (function (_super) {
    __extends(MDCMenuSurfaceFoundation, _super);
    function MDCMenuSurfaceFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCMenuSurfaceFoundation.defaultAdapter), adapter)) || this;
        _this.isSurfaceOpen = false;
        _this.isQuickOpen = false;
        _this.isHoistedElement = false;
        _this.isFixedPosition = false;
        _this.isHorizontallyCenteredOnViewport = false;
        _this.maxHeight = 0;
        _this.openBottomBias = 0;
        _this.openAnimationEndTimerId = 0;
        _this.closeAnimationEndTimerId = 0;
        _this.animationRequestId = 0;
        _this.anchorCorner = Corner.TOP_START;
        /**
         * Corner of the menu surface to which menu surface is attached to anchor.
         *
         *  Anchor corner --->+----------+
         *                    |  ANCHOR  |
         *                    +----------+
         *  Origin corner --->+--------------+
         *                    |              |
         *                    |              |
         *                    | MENU SURFACE |
         *                    |              |
         *                    |              |
         *                    +--------------+
         */
        _this.originCorner = Corner.TOP_START;
        _this.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 };
        _this.position = { x: 0, y: 0 };
        return _this;
    }
    Object.defineProperty(MDCMenuSurfaceFoundation, "cssClasses", {
        get: function () {
            return cssClasses$6;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "strings", {
        get: function () {
            return strings$4;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "numbers", {
        get: function () {
            return numbers$4;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "Corner", {
        get: function () {
            return Corner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "defaultAdapter", {
        /**
         * @see {@link MDCMenuSurfaceAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                hasAnchor: function () { return false; },
                isElementInContainer: function () { return false; },
                isFocused: function () { return false; },
                isRtl: function () { return false; },
                getInnerDimensions: function () { return ({ height: 0, width: 0 }); },
                getAnchorDimensions: function () { return null; },
                getWindowDimensions: function () { return ({ height: 0, width: 0 }); },
                getBodyDimensions: function () { return ({ height: 0, width: 0 }); },
                getWindowScroll: function () { return ({ x: 0, y: 0 }); },
                setPosition: function () { return undefined; },
                setMaxHeight: function () { return undefined; },
                setTransformOrigin: function () { return undefined; },
                saveFocus: function () { return undefined; },
                restoreFocus: function () { return undefined; },
                notifyClose: function () { return undefined; },
                notifyClosing: function () { return undefined; },
                notifyOpen: function () { return undefined; },
                notifyOpening: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCMenuSurfaceFoundation.prototype.init = function () {
        var _a = MDCMenuSurfaceFoundation.cssClasses, ROOT = _a.ROOT, OPEN = _a.OPEN;
        if (!this.adapter.hasClass(ROOT)) {
            throw new Error(ROOT + " class required in root element.");
        }
        if (this.adapter.hasClass(OPEN)) {
            this.isSurfaceOpen = true;
        }
    };
    MDCMenuSurfaceFoundation.prototype.destroy = function () {
        clearTimeout(this.openAnimationEndTimerId);
        clearTimeout(this.closeAnimationEndTimerId);
        // Cancel any currently running animations.
        cancelAnimationFrame(this.animationRequestId);
    };
    /**
     * @param corner Default anchor corner alignment of top-left menu surface
     *     corner.
     */
    MDCMenuSurfaceFoundation.prototype.setAnchorCorner = function (corner) {
        this.anchorCorner = corner;
    };
    /**
     * Flip menu corner horizontally.
     */
    MDCMenuSurfaceFoundation.prototype.flipCornerHorizontally = function () {
        this.originCorner = this.originCorner ^ CornerBit.RIGHT;
    };
    /**
     * @param margin Set of margin values from anchor.
     */
    MDCMenuSurfaceFoundation.prototype.setAnchorMargin = function (margin) {
        this.anchorMargin.top = margin.top || 0;
        this.anchorMargin.right = margin.right || 0;
        this.anchorMargin.bottom = margin.bottom || 0;
        this.anchorMargin.left = margin.left || 0;
    };
    /** Used to indicate if the menu-surface is hoisted to the body. */
    MDCMenuSurfaceFoundation.prototype.setIsHoisted = function (isHoisted) {
        this.isHoistedElement = isHoisted;
    };
    /**
     * Used to set the menu-surface calculations based on a fixed position menu.
     */
    MDCMenuSurfaceFoundation.prototype.setFixedPosition = function (isFixedPosition) {
        this.isFixedPosition = isFixedPosition;
    };
    /**
     * @return Returns true if menu is in fixed (`position: fixed`) position.
     */
    MDCMenuSurfaceFoundation.prototype.isFixed = function () {
        return this.isFixedPosition;
    };
    /** Sets the menu-surface position on the page. */
    MDCMenuSurfaceFoundation.prototype.setAbsolutePosition = function (x, y) {
        this.position.x = this.isFinite(x) ? x : 0;
        this.position.y = this.isFinite(y) ? y : 0;
    };
    /** Sets whether menu-surface should be horizontally centered to viewport. */
    MDCMenuSurfaceFoundation.prototype.setIsHorizontallyCenteredOnViewport = function (isCentered) {
        this.isHorizontallyCenteredOnViewport = isCentered;
    };
    MDCMenuSurfaceFoundation.prototype.setQuickOpen = function (quickOpen) {
        this.isQuickOpen = quickOpen;
    };
    /**
     * Sets maximum menu-surface height on open.
     * @param maxHeight The desired max-height. Set to 0 (default) to
     *     automatically calculate max height based on available viewport space.
     */
    MDCMenuSurfaceFoundation.prototype.setMaxHeight = function (maxHeight) {
        this.maxHeight = maxHeight;
    };
    /**
     * Set to a positive integer to influence the menu to preferentially open
     * below the anchor instead of above.
     * @param bias A value of `x` simulates an extra `x` pixels of available space
     *     below the menu during positioning calculations.
     */
    MDCMenuSurfaceFoundation.prototype.setOpenBottomBias = function (bias) {
        this.openBottomBias = bias;
    };
    MDCMenuSurfaceFoundation.prototype.isOpen = function () {
        return this.isSurfaceOpen;
    };
    /**
     * Open the menu surface.
     */
    MDCMenuSurfaceFoundation.prototype.open = function () {
        var _this = this;
        if (this.isSurfaceOpen) {
            return;
        }
        this.adapter.notifyOpening();
        this.adapter.saveFocus();
        if (this.isQuickOpen) {
            this.isSurfaceOpen = true;
            this.adapter.addClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
            this.dimensions = this.adapter.getInnerDimensions();
            this.autoposition();
            this.adapter.notifyOpen();
        }
        else {
            this.adapter.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
            this.animationRequestId = requestAnimationFrame(function () {
                _this.dimensions = _this.adapter.getInnerDimensions();
                _this.autoposition();
                _this.adapter.addClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
                _this.openAnimationEndTimerId = setTimeout(function () {
                    _this.openAnimationEndTimerId = 0;
                    _this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
                    _this.adapter.notifyOpen();
                }, numbers$4.TRANSITION_OPEN_DURATION);
            });
            this.isSurfaceOpen = true;
        }
    };
    /**
     * Closes the menu surface.
     */
    MDCMenuSurfaceFoundation.prototype.close = function (skipRestoreFocus) {
        var _this = this;
        if (skipRestoreFocus === void 0) { skipRestoreFocus = false; }
        if (!this.isSurfaceOpen) {
            return;
        }
        this.adapter.notifyClosing();
        if (this.isQuickOpen) {
            this.isSurfaceOpen = false;
            if (!skipRestoreFocus) {
                this.maybeRestoreFocus();
            }
            this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
            this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.IS_OPEN_BELOW);
            this.adapter.notifyClose();
            return;
        }
        this.adapter.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
        requestAnimationFrame(function () {
            _this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
            _this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.IS_OPEN_BELOW);
            _this.closeAnimationEndTimerId = setTimeout(function () {
                _this.closeAnimationEndTimerId = 0;
                _this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
                _this.adapter.notifyClose();
            }, numbers$4.TRANSITION_CLOSE_DURATION);
        });
        this.isSurfaceOpen = false;
        if (!skipRestoreFocus) {
            this.maybeRestoreFocus();
        }
    };
    /** Handle clicks and close if not within menu-surface element. */
    MDCMenuSurfaceFoundation.prototype.handleBodyClick = function (evt) {
        var el = evt.target;
        if (this.adapter.isElementInContainer(el)) {
            return;
        }
        this.close();
    };
    /** Handle keys that close the surface. */
    MDCMenuSurfaceFoundation.prototype.handleKeydown = function (evt) {
        var keyCode = evt.keyCode, key = evt.key;
        var isEscape = key === 'Escape' || keyCode === 27;
        if (isEscape) {
            this.close();
        }
    };
    MDCMenuSurfaceFoundation.prototype.autoposition = function () {
        var _a;
        // Compute measurements for autoposition methods reuse.
        this.measurements = this.getAutoLayoutmeasurements();
        var corner = this.getoriginCorner();
        var maxMenuSurfaceHeight = this.getMenuSurfaceMaxHeight(corner);
        var verticalAlignment = this.hasBit(corner, CornerBit.BOTTOM) ? 'bottom' : 'top';
        var horizontalAlignment = this.hasBit(corner, CornerBit.RIGHT) ? 'right' : 'left';
        var horizontalOffset = this.getHorizontalOriginOffset(corner);
        var verticalOffset = this.getVerticalOriginOffset(corner);
        var _b = this.measurements, anchorSize = _b.anchorSize, surfaceSize = _b.surfaceSize;
        var position = (_a = {},
            _a[horizontalAlignment] = horizontalOffset,
            _a[verticalAlignment] = verticalOffset,
            _a);
        // Center align when anchor width is comparable or greater than menu
        // surface, otherwise keep corner.
        if (anchorSize.width / surfaceSize.width >
            numbers$4.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO) {
            horizontalAlignment = 'center';
        }
        // If the menu-surface has been hoisted to the body, it's no longer relative
        // to the anchor element
        if (this.isHoistedElement || this.isFixedPosition) {
            this.adjustPositionForHoistedElement(position);
        }
        this.adapter.setTransformOrigin(horizontalAlignment + " " + verticalAlignment);
        this.adapter.setPosition(position);
        this.adapter.setMaxHeight(maxMenuSurfaceHeight ? maxMenuSurfaceHeight + 'px' : '');
        // If it is opened from the top then add is-open-below class
        if (!this.hasBit(corner, CornerBit.BOTTOM)) {
            this.adapter.addClass(MDCMenuSurfaceFoundation.cssClasses.IS_OPEN_BELOW);
        }
    };
    /**
     * @return Measurements used to position menu surface popup.
     */
    MDCMenuSurfaceFoundation.prototype.getAutoLayoutmeasurements = function () {
        var anchorRect = this.adapter.getAnchorDimensions();
        var bodySize = this.adapter.getBodyDimensions();
        var viewportSize = this.adapter.getWindowDimensions();
        var windowScroll = this.adapter.getWindowScroll();
        if (!anchorRect) {
            // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
            anchorRect = {
                top: this.position.y,
                right: this.position.x,
                bottom: this.position.y,
                left: this.position.x,
                width: 0,
                height: 0,
            };
            // tslint:enable:object-literal-sort-keys
        }
        return {
            anchorSize: anchorRect,
            bodySize: bodySize,
            surfaceSize: this.dimensions,
            viewportDistance: {
                // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
                top: anchorRect.top,
                right: viewportSize.width - anchorRect.right,
                bottom: viewportSize.height - anchorRect.bottom,
                left: anchorRect.left,
                // tslint:enable:object-literal-sort-keys
            },
            viewportSize: viewportSize,
            windowScroll: windowScroll,
        };
    };
    /**
     * Computes the corner of the anchor from which to animate and position the
     * menu surface.
     *
     * Only LEFT or RIGHT bit is used to position the menu surface ignoring RTL
     * context. E.g., menu surface will be positioned from right side on TOP_END.
     */
    MDCMenuSurfaceFoundation.prototype.getoriginCorner = function () {
        var corner = this.originCorner;
        var _a = this.measurements, viewportDistance = _a.viewportDistance, anchorSize = _a.anchorSize, surfaceSize = _a.surfaceSize;
        var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation.numbers.MARGIN_TO_EDGE;
        var isAnchoredToBottom = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
        var availableTop;
        var availableBottom;
        if (isAnchoredToBottom) {
            availableTop =
                viewportDistance.top - MARGIN_TO_EDGE + this.anchorMargin.bottom;
            availableBottom =
                viewportDistance.bottom - MARGIN_TO_EDGE - this.anchorMargin.bottom;
        }
        else {
            availableTop =
                viewportDistance.top - MARGIN_TO_EDGE + this.anchorMargin.top;
            availableBottom = viewportDistance.bottom - MARGIN_TO_EDGE +
                anchorSize.height - this.anchorMargin.top;
        }
        var isAvailableBottom = availableBottom - surfaceSize.height > 0;
        if (!isAvailableBottom &&
            availableTop > availableBottom + this.openBottomBias) {
            // Attach bottom side of surface to the anchor.
            corner = this.setBit(corner, CornerBit.BOTTOM);
        }
        var isRtl = this.adapter.isRtl();
        var isFlipRtl = this.hasBit(this.anchorCorner, CornerBit.FLIP_RTL);
        var hasRightBit = this.hasBit(this.anchorCorner, CornerBit.RIGHT) ||
            this.hasBit(corner, CornerBit.RIGHT);
        // Whether surface attached to right side of anchor element.
        var isAnchoredToRight = false;
        // Anchored to start
        if (isRtl && isFlipRtl) {
            isAnchoredToRight = !hasRightBit;
        }
        else {
            // Anchored to right
            isAnchoredToRight = hasRightBit;
        }
        var availableLeft;
        var availableRight;
        if (isAnchoredToRight) {
            availableLeft =
                viewportDistance.left + anchorSize.width + this.anchorMargin.right;
            availableRight = viewportDistance.right - this.anchorMargin.right;
        }
        else {
            availableLeft = viewportDistance.left + this.anchorMargin.left;
            availableRight =
                viewportDistance.right + anchorSize.width - this.anchorMargin.left;
        }
        var isAvailableLeft = availableLeft - surfaceSize.width > 0;
        var isAvailableRight = availableRight - surfaceSize.width > 0;
        var isOriginCornerAlignedToEnd = this.hasBit(corner, CornerBit.FLIP_RTL) &&
            this.hasBit(corner, CornerBit.RIGHT);
        if (isAvailableRight && isOriginCornerAlignedToEnd && isRtl ||
            !isAvailableLeft && isOriginCornerAlignedToEnd) {
            // Attach left side of surface to the anchor.
            corner = this.unsetBit(corner, CornerBit.RIGHT);
        }
        else if (isAvailableLeft && isAnchoredToRight && isRtl ||
            (isAvailableLeft && !isAnchoredToRight && hasRightBit) ||
            (!isAvailableRight && availableLeft >= availableRight)) {
            // Attach right side of surface to the anchor.
            corner = this.setBit(corner, CornerBit.RIGHT);
        }
        return corner;
    };
    /**
     * @param corner Origin corner of the menu surface.
     * @return Maximum height of the menu surface, based on available space. 0
     *     indicates should not be set.
     */
    MDCMenuSurfaceFoundation.prototype.getMenuSurfaceMaxHeight = function (corner) {
        if (this.maxHeight > 0) {
            return this.maxHeight;
        }
        var viewportDistance = this.measurements.viewportDistance;
        var maxHeight = 0;
        var isBottomAligned = this.hasBit(corner, CornerBit.BOTTOM);
        var isBottomAnchored = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
        var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation.numbers.MARGIN_TO_EDGE;
        // When maximum height is not specified, it is handled from CSS.
        if (isBottomAligned) {
            maxHeight = viewportDistance.top + this.anchorMargin.top - MARGIN_TO_EDGE;
            if (!isBottomAnchored) {
                maxHeight += this.measurements.anchorSize.height;
            }
        }
        else {
            maxHeight = viewportDistance.bottom - this.anchorMargin.bottom +
                this.measurements.anchorSize.height - MARGIN_TO_EDGE;
            if (isBottomAnchored) {
                maxHeight -= this.measurements.anchorSize.height;
            }
        }
        return maxHeight;
    };
    /**
     * @param corner Origin corner of the menu surface.
     * @return Horizontal offset of menu surface origin corner from corresponding
     *     anchor corner.
     */
    MDCMenuSurfaceFoundation.prototype.getHorizontalOriginOffset = function (corner) {
        var anchorSize = this.measurements.anchorSize;
        // isRightAligned corresponds to using the 'right' property on the surface.
        var isRightAligned = this.hasBit(corner, CornerBit.RIGHT);
        var avoidHorizontalOverlap = this.hasBit(this.anchorCorner, CornerBit.RIGHT);
        if (isRightAligned) {
            var rightOffset = avoidHorizontalOverlap ?
                anchorSize.width - this.anchorMargin.left :
                this.anchorMargin.right;
            // For hoisted or fixed elements, adjust the offset by the difference
            // between viewport width and body width so when we calculate the right
            // value (`adjustPositionForHoistedElement`) based on the element
            // position, the right property is correct.
            if (this.isHoistedElement || this.isFixedPosition) {
                return rightOffset -
                    (this.measurements.viewportSize.width -
                        this.measurements.bodySize.width);
            }
            return rightOffset;
        }
        return avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin.right :
            this.anchorMargin.left;
    };
    /**
     * @param corner Origin corner of the menu surface.
     * @return Vertical offset of menu surface origin corner from corresponding
     *     anchor corner.
     */
    MDCMenuSurfaceFoundation.prototype.getVerticalOriginOffset = function (corner) {
        var anchorSize = this.measurements.anchorSize;
        var isBottomAligned = this.hasBit(corner, CornerBit.BOTTOM);
        var avoidVerticalOverlap = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
        var y = 0;
        if (isBottomAligned) {
            y = avoidVerticalOverlap ? anchorSize.height - this.anchorMargin.top :
                -this.anchorMargin.bottom;
        }
        else {
            y = avoidVerticalOverlap ?
                (anchorSize.height + this.anchorMargin.bottom) :
                this.anchorMargin.top;
        }
        return y;
    };
    /**
     * Calculates the offsets for positioning the menu-surface when the
     * menu-surface has been hoisted to the body.
     */
    MDCMenuSurfaceFoundation.prototype.adjustPositionForHoistedElement = function (position) {
        var e_1, _a;
        var _b = this.measurements, windowScroll = _b.windowScroll, viewportDistance = _b.viewportDistance, surfaceSize = _b.surfaceSize, viewportSize = _b.viewportSize;
        var props = Object.keys(position);
        try {
            for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
                var prop = props_1_1.value;
                var value = position[prop] || 0;
                if (this.isHorizontallyCenteredOnViewport &&
                    (prop === 'left' || prop === 'right')) {
                    position[prop] = (viewportSize.width - surfaceSize.width) / 2;
                    continue;
                }
                // Hoisted surfaces need to have the anchor elements location on the page
                // added to the position properties for proper alignment on the body.
                value += viewportDistance[prop];
                // Surfaces that are absolutely positioned need to have additional
                // calculations for scroll and bottom positioning.
                if (!this.isFixedPosition) {
                    if (prop === 'top') {
                        value += windowScroll.y;
                    }
                    else if (prop === 'bottom') {
                        value -= windowScroll.y;
                    }
                    else if (prop === 'left') {
                        value += windowScroll.x;
                    }
                    else { // prop === 'right'
                        value -= windowScroll.x;
                    }
                }
                position[prop] = value;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * The last focused element when the menu surface was opened should regain
     * focus, if the user is focused on or within the menu surface when it is
     * closed.
     */
    MDCMenuSurfaceFoundation.prototype.maybeRestoreFocus = function () {
        var _this = this;
        var isRootFocused = this.adapter.isFocused();
        var ownerDocument = this.adapter.getOwnerDocument ?
            this.adapter.getOwnerDocument() :
            document;
        var childHasFocus = ownerDocument.activeElement &&
            this.adapter.isElementInContainer(ownerDocument.activeElement);
        if (isRootFocused || childHasFocus) {
            // Wait before restoring focus when closing the menu surface. This is
            // important because if a touch event triggered the menu close, and the
            // subsequent mouse event occurs after focus is restored, then the
            // restored focus would be lost.
            setTimeout(function () {
                _this.adapter.restoreFocus();
            }, numbers$4.TOUCH_EVENT_WAIT_MS);
        }
    };
    MDCMenuSurfaceFoundation.prototype.hasBit = function (corner, bit) {
        return Boolean(corner & bit); // tslint:disable-line:no-bitwise
    };
    MDCMenuSurfaceFoundation.prototype.setBit = function (corner, bit) {
        return corner | bit; // tslint:disable-line:no-bitwise
    };
    MDCMenuSurfaceFoundation.prototype.unsetBit = function (corner, bit) {
        return corner ^ bit;
    };
    /**
     * isFinite that doesn't force conversion to number type.
     * Equivalent to Number.isFinite in ES2015, which is not supported in IE.
     */
    MDCMenuSurfaceFoundation.prototype.isFinite = function (num) {
        return typeof num === 'number' && isFinite(num);
    };
    return MDCMenuSurfaceFoundation;
}(MDCFoundation));
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var MDCMenuSurfaceFoundation$1 = MDCMenuSurfaceFoundation;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// tslint:disable:no-bitwise
// required for closure compiler
const stringToCorner = {
    'TOP_LEFT': Corner.TOP_LEFT,
    'TOP_RIGHT': Corner.TOP_RIGHT,
    'BOTTOM_LEFT': Corner.BOTTOM_LEFT,
    'BOTTOM_RIGHT': Corner.BOTTOM_RIGHT,
    'TOP_START': Corner.TOP_START,
    'TOP_END': Corner.TOP_END,
    'BOTTOM_START': Corner.BOTTOM_START,
    'BOTTOM_END': Corner.BOTTOM_END,
};
/**
 * @fires opened
 * @fires closed
 */
class MenuSurfaceBase extends BaseElement {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = MDCMenuSurfaceFoundation$1;
        this.absolute = false;
        this.fullwidth = false;
        this.fixed = false;
        this.x = null;
        this.y = null;
        // must be defined before open or else race condition in foundation occurs.
        this.quick = false;
        this.open = false;
        this.stayOpenOnBodyClick = false;
        this.bitwiseCorner = Corner.TOP_START;
        this.previousMenuCorner = null;
        // must be defined before observer of anchor corner for initialization
        this.menuCorner = 'START';
        this.corner = 'TOP_START';
        this.styleTop = '';
        this.styleLeft = '';
        this.styleRight = '';
        this.styleBottom = '';
        this.styleMaxHeight = '';
        this.styleTransformOrigin = '';
        this.anchor = null;
        this.previouslyFocused = null;
        this.previousAnchor = null;
        this.onBodyClickBound = () => undefined;
    }
    render() {
        return this.renderSurface();
    }
    renderSurface() {
        const classes = this.getRootClasses();
        const styles = this.getRootStyles();
        return y `
      <div
          class=${o$1(classes)}
          style="${i$1(styles)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        ${this.renderContent()}
      </div>`;
    }
    getRootClasses() {
        return {
            'mdc-menu-surface': true,
            'mdc-menu-surface--fixed': this.fixed,
            'mdc-menu-surface--fullwidth': this.fullwidth,
        };
    }
    getRootStyles() {
        return {
            'top': this.styleTop,
            'left': this.styleLeft,
            'right': this.styleRight,
            'bottom': this.styleBottom,
            'max-height': this.styleMaxHeight,
            'transform-origin': this.styleTransformOrigin,
        };
    }
    renderContent() {
        return y `<slot></slot>`;
    }
    createAdapter() {
        return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), { hasAnchor: () => {
                return !!this.anchor;
            }, notifyClose: () => {
                const init = { bubbles: true, composed: true };
                const ev = new CustomEvent('closed', init);
                this.open = false;
                this.mdcRoot.dispatchEvent(ev);
            }, notifyClosing: () => {
                const init = { bubbles: true, composed: true };
                const ev = new CustomEvent('closing', init);
                this.mdcRoot.dispatchEvent(ev);
            }, notifyOpen: () => {
                const init = { bubbles: true, composed: true };
                const ev = new CustomEvent('opened', init);
                this.open = true;
                this.mdcRoot.dispatchEvent(ev);
            }, notifyOpening: () => {
                const init = { bubbles: true, composed: true };
                const ev = new CustomEvent('opening', init);
                this.mdcRoot.dispatchEvent(ev);
            }, isElementInContainer: () => false, isRtl: () => {
                if (this.mdcRoot) {
                    return getComputedStyle(this.mdcRoot).direction === 'rtl';
                }
                return false;
            }, setTransformOrigin: (origin) => {
                const root = this.mdcRoot;
                if (!root) {
                    return;
                }
                this.styleTransformOrigin = origin;
            }, isFocused: () => {
                return doesElementContainFocus(this);
            }, saveFocus: () => {
                const activeElementPath = deepActiveElementPath();
                const pathLength = activeElementPath.length;
                if (!pathLength) {
                    this.previouslyFocused = null;
                }
                this.previouslyFocused = activeElementPath[pathLength - 1];
            }, restoreFocus: () => {
                if (!this.previouslyFocused) {
                    return;
                }
                if ('focus' in this.previouslyFocused) {
                    this.previouslyFocused.focus();
                }
            }, getInnerDimensions: () => {
                const mdcRoot = this.mdcRoot;
                if (!mdcRoot) {
                    return { width: 0, height: 0 };
                }
                return { width: mdcRoot.offsetWidth, height: mdcRoot.offsetHeight };
            }, getAnchorDimensions: () => {
                const anchorElement = this.anchor;
                return anchorElement ? anchorElement.getBoundingClientRect() : null;
            }, getBodyDimensions: () => {
                return {
                    width: document.body.clientWidth,
                    height: document.body.clientHeight,
                };
            }, getWindowDimensions: () => {
                return {
                    width: window.innerWidth,
                    height: window.innerHeight,
                };
            }, getWindowScroll: () => {
                return {
                    x: window.pageXOffset,
                    y: window.pageYOffset,
                };
            }, setPosition: (position) => {
                const mdcRoot = this.mdcRoot;
                if (!mdcRoot) {
                    return;
                }
                this.styleLeft = 'left' in position ? `${position.left}px` : '';
                this.styleRight = 'right' in position ? `${position.right}px` : '';
                this.styleTop = 'top' in position ? `${position.top}px` : '';
                this.styleBottom = 'bottom' in position ? `${position.bottom}px` : '';
            }, setMaxHeight: async (height) => {
                const mdcRoot = this.mdcRoot;
                if (!mdcRoot) {
                    return;
                }
                // must set both for IE support as IE will not set a var
                this.styleMaxHeight = height;
                await this.updateComplete;
                this.styleMaxHeight = `var(--mdc-menu-max-height, ${height})`;
            } });
    }
    onKeydown(evt) {
        if (this.mdcFoundation) {
            this.mdcFoundation.handleKeydown(evt);
        }
    }
    onBodyClick(evt) {
        if (this.stayOpenOnBodyClick) {
            return;
        }
        const path = evt.composedPath();
        if (path.indexOf(this) === -1) {
            this.close();
        }
    }
    registerBodyClick() {
        this.onBodyClickBound = this.onBodyClick.bind(this);
        // capture otherwise listener closes menu after quick menu opens
        document.body.addEventListener('click', this.onBodyClickBound, { passive: true, capture: true });
    }
    deregisterBodyClick() {
        document.body.removeEventListener('click', this.onBodyClickBound, { capture: true });
    }
    onOpenChanged(isOpen, wasOpen) {
        if (this.mdcFoundation) {
            if (isOpen) {
                this.mdcFoundation.open();
                // wasOpen helps with first render (when it is `undefined`) perf
            }
            else if (wasOpen !== undefined) {
                this.mdcFoundation.close();
            }
        }
    }
    close() {
        this.open = false;
    }
    show() {
        this.open = true;
    }
}
__decorate([
    i$3('.mdc-menu-surface')
], MenuSurfaceBase.prototype, "mdcRoot", void 0);
__decorate([
    i$3('slot')
], MenuSurfaceBase.prototype, "slotElement", void 0);
__decorate([
    e$6({ type: Boolean }),
    observer(function (isAbsolute) {
        if (this.mdcFoundation && !this.fixed) {
            this.mdcFoundation.setIsHoisted(isAbsolute);
        }
    })
], MenuSurfaceBase.prototype, "absolute", void 0);
__decorate([
    e$6({ type: Boolean })
], MenuSurfaceBase.prototype, "fullwidth", void 0);
__decorate([
    e$6({ type: Boolean }),
    observer(function (isFixed) {
        if (this.mdcFoundation && !this.absolute) {
            this.mdcFoundation.setFixedPosition(isFixed);
        }
    })
], MenuSurfaceBase.prototype, "fixed", void 0);
__decorate([
    e$6({ type: Number }),
    observer(function (value) {
        if (this.mdcFoundation && this.y !== null && value !== null) {
            this.mdcFoundation.setAbsolutePosition(value, this.y);
            this.mdcFoundation.setAnchorMargin({ left: value, top: this.y, right: -value, bottom: this.y });
        }
    })
], MenuSurfaceBase.prototype, "x", void 0);
__decorate([
    e$6({ type: Number }),
    observer(function (value) {
        if (this.mdcFoundation && this.x !== null && value !== null) {
            this.mdcFoundation.setAbsolutePosition(this.x, value);
            this.mdcFoundation.setAnchorMargin({ left: this.x, top: value, right: -this.x, bottom: value });
        }
    })
], MenuSurfaceBase.prototype, "y", void 0);
__decorate([
    e$6({ type: Boolean }),
    observer(function (value) {
        if (this.mdcFoundation) {
            this.mdcFoundation.setQuickOpen(value);
        }
    })
], MenuSurfaceBase.prototype, "quick", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true }),
    observer(function (isOpen, wasOpen) {
        this.onOpenChanged(isOpen, wasOpen);
    })
], MenuSurfaceBase.prototype, "open", void 0);
__decorate([
    e$6({ type: Boolean })
], MenuSurfaceBase.prototype, "stayOpenOnBodyClick", void 0);
__decorate([
    t$2(),
    observer(function (value) {
        if (this.mdcFoundation) {
            if (value) {
                this.mdcFoundation.setAnchorCorner(value);
            }
            else {
                this.mdcFoundation.setAnchorCorner(value);
            }
        }
    })
], MenuSurfaceBase.prototype, "bitwiseCorner", void 0);
__decorate([
    e$6({ type: String }),
    observer(function (value) {
        if (this.mdcFoundation) {
            const isValidValue = value === 'START' || value === 'END';
            const isFirstTimeSet = this.previousMenuCorner === null;
            const cornerChanged = !isFirstTimeSet && value !== this.previousMenuCorner;
            const initiallySetToEnd = isFirstTimeSet && value === 'END';
            if (isValidValue && (cornerChanged || initiallySetToEnd)) {
                this.bitwiseCorner = this.bitwiseCorner ^ CornerBit.RIGHT;
                this.mdcFoundation.flipCornerHorizontally();
                this.previousMenuCorner = value;
            }
        }
    })
], MenuSurfaceBase.prototype, "menuCorner", void 0);
__decorate([
    e$6({ type: String }),
    observer(function (value) {
        if (this.mdcFoundation) {
            if (value) {
                let newCorner = stringToCorner[value];
                if (this.menuCorner === 'END') {
                    newCorner = newCorner ^ CornerBit.RIGHT;
                }
                this.bitwiseCorner = newCorner;
            }
        }
    })
], MenuSurfaceBase.prototype, "corner", void 0);
__decorate([
    t$2()
], MenuSurfaceBase.prototype, "styleTop", void 0);
__decorate([
    t$2()
], MenuSurfaceBase.prototype, "styleLeft", void 0);
__decorate([
    t$2()
], MenuSurfaceBase.prototype, "styleRight", void 0);
__decorate([
    t$2()
], MenuSurfaceBase.prototype, "styleBottom", void 0);
__decorate([
    t$2()
], MenuSurfaceBase.prototype, "styleMaxHeight", void 0);
__decorate([
    t$2()
], MenuSurfaceBase.prototype, "styleTransformOrigin", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$8 = i$6 `.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:8;z-index:var(--mdc-menu-z-index, 8);min-width:112px;min-width:var(--mdc-menu-min-width, 112px)}`;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let MenuSurface = class MenuSurface extends MenuSurfaceBase {
};
MenuSurface.styles = [styles$8];
MenuSurface = __decorate([
    e$7('mwc-menu-surface')
], MenuSurface);

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$5 = {
    MENU_SELECTED_LIST_ITEM: 'mdc-menu-item--selected',
    MENU_SELECTION_GROUP: 'mdc-menu__selection-group',
    ROOT: 'mdc-menu',
};
var strings$3 = {
    ARIA_CHECKED_ATTR: 'aria-checked',
    ARIA_DISABLED_ATTR: 'aria-disabled',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    LIST_SELECTOR: '.mdc-list,.mdc-deprecated-list',
    SELECTED_EVENT: 'MDCMenu:selected',
    SKIP_RESTORE_FOCUS: 'data-menu-item-skip-restore-focus',
};
var numbers$3 = {
    FOCUS_ROOT_INDEX: -1,
};
var DefaultFocusState;
(function (DefaultFocusState) {
    DefaultFocusState[DefaultFocusState["NONE"] = 0] = "NONE";
    DefaultFocusState[DefaultFocusState["LIST_ROOT"] = 1] = "LIST_ROOT";
    DefaultFocusState[DefaultFocusState["FIRST_ITEM"] = 2] = "FIRST_ITEM";
    DefaultFocusState[DefaultFocusState["LAST_ITEM"] = 3] = "LAST_ITEM";
})(DefaultFocusState || (DefaultFocusState = {}));

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCMenuFoundation = /** @class */ (function (_super) {
    __extends(MDCMenuFoundation, _super);
    function MDCMenuFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCMenuFoundation.defaultAdapter), adapter)) || this;
        _this.closeAnimationEndTimerId = 0;
        _this.defaultFocusState = DefaultFocusState.LIST_ROOT;
        _this.selectedIndex = -1;
        return _this;
    }
    Object.defineProperty(MDCMenuFoundation, "cssClasses", {
        get: function () {
            return cssClasses$5;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCMenuFoundation, "strings", {
        get: function () {
            return strings$3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCMenuFoundation, "numbers", {
        get: function () {
            return numbers$3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCMenuFoundation, "defaultAdapter", {
        /**
         * @see {@link MDCMenuAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClassToElementAtIndex: function () { return undefined; },
                removeClassFromElementAtIndex: function () { return undefined; },
                addAttributeToElementAtIndex: function () { return undefined; },
                removeAttributeFromElementAtIndex: function () { return undefined; },
                getAttributeFromElementAtIndex: function () { return null; },
                elementContainsClass: function () { return false; },
                closeSurface: function () { return undefined; },
                getElementIndex: function () { return -1; },
                notifySelected: function () { return undefined; },
                getMenuItemCount: function () { return 0; },
                focusItemAtIndex: function () { return undefined; },
                focusListRoot: function () { return undefined; },
                getSelectedSiblingOfItemAtIndex: function () { return -1; },
                isSelectableItemAtIndex: function () { return false; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCMenuFoundation.prototype.destroy = function () {
        if (this.closeAnimationEndTimerId) {
            clearTimeout(this.closeAnimationEndTimerId);
        }
        this.adapter.closeSurface();
    };
    MDCMenuFoundation.prototype.handleKeydown = function (evt) {
        var key = evt.key, keyCode = evt.keyCode;
        var isTab = key === 'Tab' || keyCode === 9;
        if (isTab) {
            this.adapter.closeSurface(/** skipRestoreFocus */ true);
        }
    };
    MDCMenuFoundation.prototype.handleItemAction = function (listItem) {
        var _this = this;
        var index = this.adapter.getElementIndex(listItem);
        if (index < 0) {
            return;
        }
        this.adapter.notifySelected({ index: index });
        var skipRestoreFocus = this.adapter.getAttributeFromElementAtIndex(index, strings$3.SKIP_RESTORE_FOCUS) === 'true';
        this.adapter.closeSurface(skipRestoreFocus);
        // Wait for the menu to close before adding/removing classes that affect styles.
        this.closeAnimationEndTimerId = setTimeout(function () {
            // Recompute the index in case the menu contents have changed.
            var recomputedIndex = _this.adapter.getElementIndex(listItem);
            if (recomputedIndex >= 0 &&
                _this.adapter.isSelectableItemAtIndex(recomputedIndex)) {
                _this.setSelectedIndex(recomputedIndex);
            }
        }, MDCMenuSurfaceFoundation.numbers.TRANSITION_CLOSE_DURATION);
    };
    MDCMenuFoundation.prototype.handleMenuSurfaceOpened = function () {
        switch (this.defaultFocusState) {
            case DefaultFocusState.FIRST_ITEM:
                this.adapter.focusItemAtIndex(0);
                break;
            case DefaultFocusState.LAST_ITEM:
                this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
                break;
            case DefaultFocusState.NONE:
                // Do nothing.
                break;
            default:
                this.adapter.focusListRoot();
                break;
        }
    };
    /**
     * Sets default focus state where the menu should focus every time when menu
     * is opened. Focuses the list root (`DefaultFocusState.LIST_ROOT`) element by
     * default.
     */
    MDCMenuFoundation.prototype.setDefaultFocusState = function (focusState) {
        this.defaultFocusState = focusState;
    };
    /** @return Index of the currently selected list item within the menu. */
    MDCMenuFoundation.prototype.getSelectedIndex = function () {
        return this.selectedIndex;
    };
    /**
     * Selects the list item at `index` within the menu.
     * @param index Index of list item within the menu.
     */
    MDCMenuFoundation.prototype.setSelectedIndex = function (index) {
        this.validatedIndex(index);
        if (!this.adapter.isSelectableItemAtIndex(index)) {
            throw new Error('MDCMenuFoundation: No selection group at specified index.');
        }
        var prevSelectedIndex = this.adapter.getSelectedSiblingOfItemAtIndex(index);
        if (prevSelectedIndex >= 0) {
            this.adapter.removeAttributeFromElementAtIndex(prevSelectedIndex, strings$3.ARIA_CHECKED_ATTR);
            this.adapter.removeClassFromElementAtIndex(prevSelectedIndex, cssClasses$5.MENU_SELECTED_LIST_ITEM);
        }
        this.adapter.addClassToElementAtIndex(index, cssClasses$5.MENU_SELECTED_LIST_ITEM);
        this.adapter.addAttributeToElementAtIndex(index, strings$3.ARIA_CHECKED_ATTR, 'true');
        this.selectedIndex = index;
    };
    /**
     * Sets the enabled state to isEnabled for the menu item at the given index.
     * @param index Index of the menu item
     * @param isEnabled The desired enabled state of the menu item.
     */
    MDCMenuFoundation.prototype.setEnabled = function (index, isEnabled) {
        this.validatedIndex(index);
        if (isEnabled) {
            this.adapter.removeClassFromElementAtIndex(index, cssClasses$7.LIST_ITEM_DISABLED_CLASS);
            this.adapter.addAttributeToElementAtIndex(index, strings$3.ARIA_DISABLED_ATTR, 'false');
        }
        else {
            this.adapter.addClassToElementAtIndex(index, cssClasses$7.LIST_ITEM_DISABLED_CLASS);
            this.adapter.addAttributeToElementAtIndex(index, strings$3.ARIA_DISABLED_ATTR, 'true');
        }
    };
    MDCMenuFoundation.prototype.validatedIndex = function (index) {
        var menuSize = this.adapter.getMenuItemCount();
        var isIndexInRange = index >= 0 && index < menuSize;
        if (!isIndexInRange) {
            throw new Error('MDCMenuFoundation: No list item at specified index.');
        }
    };
    return MDCMenuFoundation;
}(MDCFoundation));
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var MDCMenuFoundation$1 = MDCMenuFoundation;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @fires selected {SelectedDetail}
 * @fires action {ActionDetail}
 * @fires items-updated
 * @fires opened
 * @fires closed
 */
class MenuBase extends BaseElement {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = MDCMenuFoundation$1;
        this.listElement_ = null;
        this.anchor = null;
        this.open = false;
        this.quick = false;
        this.wrapFocus = false;
        this.innerRole = 'menu';
        this.innerAriaLabel = null;
        this.corner = 'TOP_START';
        this.x = null;
        this.y = null;
        this.absolute = false;
        this.multi = false;
        this.activatable = false;
        this.fixed = false;
        this.forceGroupSelection = false;
        this.fullwidth = false;
        this.menuCorner = 'START';
        this.stayOpenOnBodyClick = false;
        this.defaultFocus = 'LIST_ROOT';
        this._listUpdateComplete = null;
    }
    get listElement() {
        if (!this.listElement_) {
            this.listElement_ = this.renderRoot.querySelector('mwc-list');
            return this.listElement_;
        }
        return this.listElement_;
    }
    get items() {
        const listElement = this.listElement;
        if (listElement) {
            return listElement.items;
        }
        return [];
    }
    get index() {
        const listElement = this.listElement;
        if (listElement) {
            return listElement.index;
        }
        return -1;
    }
    get selected() {
        const listElement = this.listElement;
        if (listElement) {
            return listElement.selected;
        }
        return null;
    }
    render() {
        return this.renderSurface();
    }
    renderSurface() {
        const classes = this.getSurfaceClasses();
        return y `
      <mwc-menu-surface
        ?hidden=${!this.open}
        .anchor=${this.anchor}
        .open=${this.open}
        .quick=${this.quick}
        .corner=${this.corner}
        .x=${this.x}
        .y=${this.y}
        .absolute=${this.absolute}
        .fixed=${this.fixed}
        .fullwidth=${this.fullwidth}
        .menuCorner=${this.menuCorner}
        ?stayOpenOnBodyClick=${this.stayOpenOnBodyClick}
        class=${o$1(classes)}
        @closed=${this.onClosed}
        @opened=${this.onOpened}
        @keydown=${this.onKeydown}>
      ${this.renderList()}
    </mwc-menu-surface>`;
    }
    getSurfaceClasses() {
        return {
            'mdc-menu': true,
            'mdc-menu-surface': true,
        };
    }
    renderList() {
        const itemRoles = this.innerRole === 'menu' ? 'menuitem' : 'option';
        const classes = this.renderListClasses();
        return y `
      <mwc-list
          rootTabbable
          .innerAriaLabel=${this.innerAriaLabel}
          .innerRole=${this.innerRole}
          .multi=${this.multi}
          class=${o$1(classes)}
          .itemRoles=${itemRoles}
          .wrapFocus=${this.wrapFocus}
          .activatable=${this.activatable}
          @action=${this.onAction}>
        <slot></slot>
      </mwc-list>`;
    }
    renderListClasses() {
        return {
            'mdc-deprecated-list': true,
        };
    }
    createAdapter() {
        return {
            addClassToElementAtIndex: (index, className) => {
                const listElement = this.listElement;
                if (!listElement) {
                    return;
                }
                const element = listElement.items[index];
                if (!element) {
                    return;
                }
                if (className === 'mdc-menu-item--selected') {
                    if (this.forceGroupSelection && !element.selected) {
                        listElement.toggle(index, true);
                    }
                }
                else {
                    element.classList.add(className);
                }
            },
            removeClassFromElementAtIndex: (index, className) => {
                const listElement = this.listElement;
                if (!listElement) {
                    return;
                }
                const element = listElement.items[index];
                if (!element) {
                    return;
                }
                if (className === 'mdc-menu-item--selected') {
                    if (element.selected) {
                        listElement.toggle(index, false);
                    }
                }
                else {
                    element.classList.remove(className);
                }
            },
            addAttributeToElementAtIndex: (index, attr, value) => {
                const listElement = this.listElement;
                if (!listElement) {
                    return;
                }
                const element = listElement.items[index];
                if (!element) {
                    return;
                }
                element.setAttribute(attr, value);
            },
            removeAttributeFromElementAtIndex: (index, attr) => {
                const listElement = this.listElement;
                if (!listElement) {
                    return;
                }
                const element = listElement.items[index];
                if (!element) {
                    return;
                }
                element.removeAttribute(attr);
            },
            getAttributeFromElementAtIndex: (index, attr) => {
                const listElement = this.listElement;
                if (!listElement) {
                    return null;
                }
                const element = listElement.items[index];
                if (!element) {
                    return null;
                }
                return element.getAttribute(attr);
            },
            elementContainsClass: (element, className) => element.classList.contains(className),
            closeSurface: () => {
                this.open = false;
            },
            getElementIndex: (element) => {
                const listElement = this.listElement;
                if (listElement) {
                    return listElement.items.indexOf(element);
                }
                return -1;
            },
            notifySelected: () => { },
            getMenuItemCount: () => {
                const listElement = this.listElement;
                if (!listElement) {
                    return 0;
                }
                return listElement.items.length;
            },
            focusItemAtIndex: (index) => {
                const listElement = this.listElement;
                if (!listElement) {
                    return;
                }
                const element = listElement.items[index];
                if (element) {
                    element.focus();
                }
            },
            focusListRoot: () => {
                if (this.listElement) {
                    this.listElement.focus();
                }
            },
            getSelectedSiblingOfItemAtIndex: (index) => {
                const listElement = this.listElement;
                if (!listElement) {
                    return -1;
                }
                const elementAtIndex = listElement.items[index];
                if (!elementAtIndex || !elementAtIndex.group) {
                    return -1;
                }
                for (let i = 0; i < listElement.items.length; i++) {
                    if (i === index) {
                        continue;
                    }
                    const current = listElement.items[i];
                    if (current.selected && current.group === elementAtIndex.group) {
                        return i;
                    }
                }
                return -1;
            },
            isSelectableItemAtIndex: (index) => {
                const listElement = this.listElement;
                if (!listElement) {
                    return false;
                }
                const elementAtIndex = listElement.items[index];
                if (!elementAtIndex) {
                    return false;
                }
                return elementAtIndex.hasAttribute('group');
            },
        };
    }
    onKeydown(evt) {
        if (this.mdcFoundation) {
            this.mdcFoundation.handleKeydown(evt);
        }
    }
    onAction(evt) {
        const listElement = this.listElement;
        if (this.mdcFoundation && listElement) {
            const index = evt.detail.index;
            const el = listElement.items[index];
            if (el) {
                this.mdcFoundation.handleItemAction(el);
            }
        }
    }
    onOpened() {
        this.open = true;
        if (this.mdcFoundation) {
            this.mdcFoundation.handleMenuSurfaceOpened();
        }
    }
    onClosed() {
        this.open = false;
    }
    // tslint:disable:ban-ts-ignore
    async getUpdateComplete() {
        await this._listUpdateComplete;
        // @ts-ignore
        const result = await super.getUpdateComplete();
        return result;
    }
    // tslint:enable:ban-ts-ignore
    async firstUpdated() {
        super.firstUpdated();
        const listElement = this.listElement;
        if (listElement) {
            this._listUpdateComplete = listElement.updateComplete;
            await this._listUpdateComplete;
        }
    }
    select(index) {
        const listElement = this.listElement;
        if (listElement) {
            listElement.select(index);
        }
    }
    close() {
        this.open = false;
    }
    show() {
        this.open = true;
    }
    getFocusedItemIndex() {
        const listElement = this.listElement;
        if (listElement) {
            return listElement.getFocusedItemIndex();
        }
        return -1;
    }
    focusItemAtIndex(index) {
        const listElement = this.listElement;
        if (listElement) {
            listElement.focusItemAtIndex(index);
        }
    }
    layout(updateItems = true) {
        const listElement = this.listElement;
        if (listElement) {
            listElement.layout(updateItems);
        }
    }
}
__decorate([
    i$3('.mdc-menu')
], MenuBase.prototype, "mdcRoot", void 0);
__decorate([
    i$3('slot')
], MenuBase.prototype, "slotElement", void 0);
__decorate([
    e$6({ type: Object })
], MenuBase.prototype, "anchor", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true })
], MenuBase.prototype, "open", void 0);
__decorate([
    e$6({ type: Boolean })
], MenuBase.prototype, "quick", void 0);
__decorate([
    e$6({ type: Boolean })
], MenuBase.prototype, "wrapFocus", void 0);
__decorate([
    e$6({ type: String })
], MenuBase.prototype, "innerRole", void 0);
__decorate([
    e$6({ type: String })
], MenuBase.prototype, "innerAriaLabel", void 0);
__decorate([
    e$6({ type: String })
], MenuBase.prototype, "corner", void 0);
__decorate([
    e$6({ type: Number })
], MenuBase.prototype, "x", void 0);
__decorate([
    e$6({ type: Number })
], MenuBase.prototype, "y", void 0);
__decorate([
    e$6({ type: Boolean })
], MenuBase.prototype, "absolute", void 0);
__decorate([
    e$6({ type: Boolean })
], MenuBase.prototype, "multi", void 0);
__decorate([
    e$6({ type: Boolean })
], MenuBase.prototype, "activatable", void 0);
__decorate([
    e$6({ type: Boolean })
], MenuBase.prototype, "fixed", void 0);
__decorate([
    e$6({ type: Boolean })
], MenuBase.prototype, "forceGroupSelection", void 0);
__decorate([
    e$6({ type: Boolean })
], MenuBase.prototype, "fullwidth", void 0);
__decorate([
    e$6({ type: String })
], MenuBase.prototype, "menuCorner", void 0);
__decorate([
    e$6({ type: Boolean })
], MenuBase.prototype, "stayOpenOnBodyClick", void 0);
__decorate([
    e$6({ type: String }),
    observer(function (value) {
        if (this.mdcFoundation) {
            this.mdcFoundation.setDefaultFocusState(DefaultFocusState[value]);
        }
    })
], MenuBase.prototype, "defaultFocus", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$7 = i$6 `mwc-list ::slotted([mwc-list-item]:not([twoline])),mwc-list ::slotted([noninteractive]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}`;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Menu = class Menu extends MenuBase {
};
Menu.styles = [styles$7];
Menu = __decorate([
    e$7('mwc-menu')
], Menu);

/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * Observe a target's property for changes. When a property changes, the
 * provided `Observer` function will be invoked with the properties current and
 * previous values.
 *
 * The returned cleanup function will stop listening to changes for the
 * provided `Observer`.
 *
 * @template T The observed target type.
 * @template K The observed property.
 * @param target - The target to observe.
 * @param property - The property of the target to observe.
 * @param observer - An observer function to invoke each time the property
 *     changes.
 * @return A cleanup function that will stop observing changes for the provided
 *     `Observer`.
 */
function observeProperty(target, property, observer) {
    var targetObservers = installObserver(target, property);
    var observers = targetObservers.getObservers(property);
    observers.push(observer);
    return function () {
        observers.splice(observers.indexOf(observer), 1);
    };
}
/**
 * A Map of all `TargetObservers` that have been installed.
 */
var allTargetObservers = new WeakMap();
/**
 * Installs a `TargetObservers` for the provided target (if not already
 * installed), and replaces the given property with a getter and setter that
 * will respond to changes and call `TargetObservers`.
 *
 * Subsequent calls to `installObserver()` with the same target and property
 * will not override the property's previously installed getter/setter.
 *
 * @template T The observed target type.
 * @template K The observed property to create a getter/setter for.
 * @param target - The target to observe.
 * @param property - The property to create a getter/setter for, if needed.
 * @return The installed `TargetObservers` for the provided target.
 */
function installObserver(target, property) {
    var observersMap = new Map();
    if (!allTargetObservers.has(target)) {
        allTargetObservers.set(target, {
            isEnabled: true,
            getObservers: function (key) {
                var observers = observersMap.get(key) || [];
                if (!observersMap.has(key)) {
                    observersMap.set(key, observers);
                }
                return observers;
            },
            installedProperties: new Set()
        });
    }
    var targetObservers = allTargetObservers.get(target);
    if (targetObservers.installedProperties.has(property)) {
        // The getter/setter has already been replaced for this property
        return targetObservers;
    }
    // Retrieve (or create if it's a plain property) the original descriptor from
    // the target...
    var descriptor = getDescriptor(target, property) || {
        configurable: true,
        enumerable: true,
        value: target[property],
        writable: true
    };
    // ...and create a copy that will be used for the observer.
    var observedDescriptor = __assign({}, descriptor);
    var descGet = descriptor.get, descSet = descriptor.set;
    if ('value' in descriptor) {
        // The descriptor is a simple value (not a getter/setter).
        // For our observer descriptor that we copied, delete the value/writable
        // properties, since they are incompatible with the get/set properties
        // for descriptors.
        delete observedDescriptor.value;
        delete observedDescriptor.writable;
        // Set up a simple getter...
        var value_1 = descriptor.value;
        descGet = function () { return value_1; };
        // ...and setter (if the original property was writable).
        if (descriptor.writable) {
            descSet = function (newValue) {
                value_1 = newValue;
            };
        }
    }
    if (descGet) {
        observedDescriptor.get = function () {
            // `this as T` needed for closure conformance
            return descGet.call(this);
        };
    }
    if (descSet) {
        observedDescriptor.set = function (newValue) {
            var e_4, _a;
            // `thus as T` needed for closure conformance
            var previous = descGet ? descGet.call(this) : newValue;
            descSet.call(this, newValue);
            if (targetObservers.isEnabled && (!descGet || newValue !== previous)) {
                try {
                    for (var _b = __values(targetObservers.getObservers(property)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var observer = _c.value;
                        observer(newValue, previous);
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
        };
    }
    targetObservers.installedProperties.add(property);
    Object.defineProperty(target, property, observedDescriptor);
    return targetObservers;
}
/**
 * Retrieves the descriptor for a property from the provided target. This
 * function will walk up the target's prototype chain to search for the
 * descriptor.
 *
 * @template T The target type.
 * @template K The property type.
 * @param target - The target to retrieve a descriptor from.
 * @param property - The name of the property to retrieve a descriptor for.
 * @return the descriptor, or undefined if it does not exist. Keep in mind that
 *     plain properties may not have a descriptor defined.
 */
function getDescriptor(target, property) {
    var descriptorTarget = target;
    var descriptor;
    while (descriptorTarget) {
        descriptor = Object.getOwnPropertyDescriptor(descriptorTarget, property);
        if (descriptor) {
            break;
        }
        // Walk up the instance's prototype chain in case the property is declared
        // on a superclass.
        descriptorTarget = Object.getPrototypeOf(descriptorTarget);
    }
    return descriptor;
}
/**
 * Enables or disables all observers for a provided target. Changes to observed
 * properties will not call any observers when disabled.
 *
 * @template T The observed target type.
 * @param target - The target to enable or disable observers for.
 * @param enabled - True to enable or false to disable observers.
 */
function setObserversEnabled(target, enabled) {
    var targetObservers = allTargetObservers.get(target);
    if (targetObservers) {
        targetObservers.isEnabled = enabled;
    }
}

/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCObserverFoundation = /** @class */ (function (_super) {
    __extends(MDCObserverFoundation, _super);
    function MDCObserverFoundation(adapter) {
        var _this = _super.call(this, adapter) || this;
        /** A set of cleanup functions to unobserve changes. */
        _this.unobserves = new Set();
        return _this;
    }
    MDCObserverFoundation.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.unobserve();
    };
    /**
     * Observe a target's properties for changes using the provided map of
     * property names and observer functions.
     *
     * @template T The target type.
     * @param target - The target to observe.
     * @param observers - An object whose keys are target properties and values
     *     are observer functions that are called when the associated property
     *     changes.
     * @return A cleanup function that can be called to unobserve the
     *     target.
     */
    MDCObserverFoundation.prototype.observe = function (target, observers) {
        var e_1, _a;
        var _this = this;
        var cleanup = [];
        try {
            for (var _b = __values(Object.keys(observers)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var property = _c.value;
                var observer = observers[property].bind(this);
                cleanup.push(this.observeProperty(target, property, observer));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var unobserve = function () {
            var e_2, _a;
            try {
                for (var cleanup_1 = __values(cleanup), cleanup_1_1 = cleanup_1.next(); !cleanup_1_1.done; cleanup_1_1 = cleanup_1.next()) {
                    var cleanupFn = cleanup_1_1.value;
                    cleanupFn();
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (cleanup_1_1 && !cleanup_1_1.done && (_a = cleanup_1.return)) _a.call(cleanup_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            _this.unobserves.delete(unobserve);
        };
        this.unobserves.add(unobserve);
        return unobserve;
    };
    /**
     * Observe a target's property for changes. When a property changes, the
     * provided `Observer` function will be invoked with the properties current
     * and previous values.
     *
     * The returned cleanup function will stop listening to changes for the
     * provided `Observer`.
     *
     * @template T The observed target type.
     * @template K The observed property.
     * @param target - The target to observe.
     * @param property - The property of the target to observe.
     * @param observer - An observer function to invoke each time the property
     *     changes.
     * @return A cleanup function that will stop observing changes for the
     *     provided `Observer`.
     */
    MDCObserverFoundation.prototype.observeProperty = function (target, property, observer) {
        return observeProperty(target, property, observer);
    };
    /**
     * Enables or disables all observers for the provided target. Disabling
     * observers will prevent them from being called until they are re-enabled.
     *
     * @param target - The target to enable or disable observers for.
     * @param enabled - Whether or not observers should be called.
     */
    MDCObserverFoundation.prototype.setObserversEnabled = function (target, enabled) {
        setObserversEnabled(target, enabled);
    };
    /**
     * Clean up all observers and stop listening for property changes.
     */
    MDCObserverFoundation.prototype.unobserve = function () {
        var e_3, _a;
        try {
            // Iterate over a copy since unobserve() will remove themselves from the set
            for (var _b = __values(__spreadArray([], __read(this.unobserves))), _c = _b.next(); !_c.done; _c = _b.next()) {
                var unobserve = _c.value;
                unobserve();
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    return MDCObserverFoundation;
}(MDCFoundation));

/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * CSS classes used for switch.
 */
var CssClasses;
(function (CssClasses) {
    CssClasses["PROCESSING"] = "mdc-switch--processing";
    CssClasses["SELECTED"] = "mdc-switch--selected";
    CssClasses["UNSELECTED"] = "mdc-switch--unselected";
})(CssClasses || (CssClasses = {}));
/**
 * Query selectors used for switch.
 */
var Selectors;
(function (Selectors) {
    Selectors["RIPPLE"] = ".mdc-switch__ripple";
})(Selectors || (Selectors = {}));

/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * `MDCSwitchFoundation` provides a state-only foundation for a switch
 * component.
 *
 * State observers and event handler entrypoints update a component's adapter's
 * state with the logic needed for switch to function.
 */
var MDCSwitchFoundation = /** @class */ (function (_super) {
    __extends(MDCSwitchFoundation, _super);
    function MDCSwitchFoundation(adapter) {
        var _this = _super.call(this, adapter) || this;
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    /**
     * Initializes the foundation and starts observing state changes.
     */
    MDCSwitchFoundation.prototype.init = function () {
        this.observe(this.adapter.state, {
            disabled: this.stopProcessingIfDisabled,
            processing: this.stopProcessingIfDisabled,
        });
    };
    /**
     * Event handler for switch click events. Clicking on a switch will toggle its
     * selected state.
     */
    MDCSwitchFoundation.prototype.handleClick = function () {
        if (this.adapter.state.disabled) {
            return;
        }
        this.adapter.state.selected = !this.adapter.state.selected;
    };
    MDCSwitchFoundation.prototype.stopProcessingIfDisabled = function () {
        if (this.adapter.state.disabled) {
            this.adapter.state.processing = false;
        }
    };
    return MDCSwitchFoundation;
}(MDCObserverFoundation));
/**
 * `MDCSwitchRenderFoundation` provides a state and rendering foundation for a
 * switch component.
 *
 * State observers and event handler entrypoints update a component's
 * adapter's state with the logic needed for switch to function.
 *
 * In response to state changes, the rendering foundation uses the component's
 * render adapter to keep the component's DOM updated with the state.
 */
/** @class */ ((function (_super) {
    __extends(MDCSwitchRenderFoundation, _super);
    function MDCSwitchRenderFoundation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Initializes the foundation and starts observing state changes.
     */
    MDCSwitchRenderFoundation.prototype.init = function () {
        _super.prototype.init.call(this);
        this.observe(this.adapter.state, {
            disabled: this.onDisabledChange,
            processing: this.onProcessingChange,
            selected: this.onSelectedChange,
        });
    };
    /**
     * Initializes the foundation from a server side rendered (SSR) component.
     * This will sync the adapter's state with the current state of the DOM.
     *
     * This method should be called after `init()`.
     */
    MDCSwitchRenderFoundation.prototype.initFromDOM = function () {
        // Turn off observers while setting state
        this.setObserversEnabled(this.adapter.state, false);
        this.adapter.state.selected = this.adapter.hasClass(CssClasses.SELECTED);
        // Ensure aria-checked is set if attribute is not present
        this.onSelectedChange();
        this.adapter.state.disabled = this.adapter.isDisabled();
        this.adapter.state.processing =
            this.adapter.hasClass(CssClasses.PROCESSING);
        // Re-observe state
        this.setObserversEnabled(this.adapter.state, true);
        this.stopProcessingIfDisabled();
    };
    MDCSwitchRenderFoundation.prototype.onDisabledChange = function () {
        this.adapter.setDisabled(this.adapter.state.disabled);
    };
    MDCSwitchRenderFoundation.prototype.onProcessingChange = function () {
        this.toggleClass(this.adapter.state.processing, CssClasses.PROCESSING);
    };
    MDCSwitchRenderFoundation.prototype.onSelectedChange = function () {
        this.adapter.setAriaChecked(String(this.adapter.state.selected));
        this.toggleClass(this.adapter.state.selected, CssClasses.SELECTED);
        this.toggleClass(!this.adapter.state.selected, CssClasses.UNSELECTED);
    };
    MDCSwitchRenderFoundation.prototype.toggleClass = function (addClass, className) {
        if (addClass) {
            this.adapter.addClass(className);
        }
        else {
            this.adapter.removeClass(className);
        }
    };
    return MDCSwitchRenderFoundation;
})(MDCSwitchFoundation));

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class SwitchBase extends FormElement {
    constructor() {
        super(...arguments);
        // MDCSwitchState
        this.processing = false;
        this.selected = false;
        // Aria
        /** @soyPrefixAttribute */
        this.ariaLabel = '';
        /** @soyPrefixAttribute */
        this.ariaLabelledBy = '';
        this.shouldRenderRipple = false;
        this.rippleHandlers = new RippleHandlers(() => {
            this.shouldRenderRipple = true;
            return this.ripple;
        });
        // FormElement
        this.name = '';
        this.value = 'on';
        this.mdcFoundationClass = MDCSwitchFoundation;
    }
    setFormData(formData) {
        if (this.name && this.selected) {
            formData.append(this.name, this.value);
        }
    }
    click() {
        var _a, _b;
        // Switch uses a hidden input as its form element, but a different <button>
        // for interaction. It overrides click() from FormElement to avoid clicking
        // the hidden input.
        if (this.disabled) {
            return;
        }
        (_a = this.mdcRoot) === null || _a === void 0 ? void 0 : _a.focus();
        (_b = this.mdcRoot) === null || _b === void 0 ? void 0 : _b.click();
    }
    /** @soyTemplate */
    render() {
        return y `
      <button
        type="button"
        class="mdc-switch ${o$1(this.getRenderClasses())}"
        role="switch"
        aria-checked="${this.selected}"
        aria-label="${l$2(this.ariaLabel || undefined)}"
        aria-labelledby="${l$2(this.ariaLabelledBy || undefined)}"
        .disabled=${this.disabled}
        @click=${this.handleClick}
        @focus="${this.handleFocus}"
        @blur="${this.handleBlur}"
        @pointerdown="${this.handlePointerDown}"
        @pointerup="${this.handlePointerUp}"
        @pointerenter="${this.handlePointerEnter}"
        @pointerleave="${this.handlePointerLeave}"
      >
        <div class="mdc-switch__track"></div>
        <div class="mdc-switch__handle-track">
          ${this.renderHandle()}
        </div>
      </button>

      <input
        type="checkbox"
        aria-hidden="true"
        name="${this.name}"
        .checked=${this.selected}
        .value=${this.value}
      >
    `;
    }
    /** @soyTemplate */
    getRenderClasses() {
        return {
            'mdc-switch--processing': this.processing,
            'mdc-switch--selected': this.selected,
            'mdc-switch--unselected': !this.selected,
        };
    }
    /** @soyTemplate */
    renderHandle() {
        return y `
      <div class="mdc-switch__handle">
        ${this.renderShadow()}
        ${this.renderRipple()}
        <div class="mdc-switch__icons">
          ${this.renderOnIcon()}
          ${this.renderOffIcon()}
        </div>
      </div>
    `;
    }
    /** @soyTemplate */
    renderShadow() {
        return y `
      <div class="mdc-switch__shadow">
        <div class="mdc-elevation-overlay"></div>
      </div>
    `;
    }
    /** @soyTemplate */
    renderRipple() {
        if (this.shouldRenderRipple) {
            return y `
        <div class="mdc-switch__ripple">
          <mwc-ripple
            internalUseStateLayerCustomProperties
            .disabled="${this.disabled}"
            unbounded>
          </mwc-ripple>
        </div>
      `;
        }
        else {
            return y ``;
        }
    }
    /** @soyTemplate */
    renderOnIcon() {
        return y `
      <svg class="mdc-switch__icon mdc-switch__icon--on" viewBox="0 0 24 24">
        <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />
      </svg>
    `;
    }
    /** @soyTemplate */
    renderOffIcon() {
        return y `
      <svg class="mdc-switch__icon mdc-switch__icon--off" viewBox="0 0 24 24">
        <path d="M20 13H4v-2h16v2z" />
      </svg>
    `;
    }
    handleClick() {
        var _a;
        (_a = this.mdcFoundation) === null || _a === void 0 ? void 0 : _a.handleClick();
    }
    handleFocus() {
        this.rippleHandlers.startFocus();
    }
    handleBlur() {
        this.rippleHandlers.endFocus();
    }
    handlePointerDown(event) {
        event.target.setPointerCapture(event.pointerId);
        this.rippleHandlers.startPress(event);
    }
    handlePointerUp() {
        this.rippleHandlers.endPress();
    }
    handlePointerEnter() {
        this.rippleHandlers.startHover();
    }
    handlePointerLeave() {
        this.rippleHandlers.endHover();
    }
    createAdapter() {
        return { state: this };
    }
}
__decorate([
    e$6({ type: Boolean })
], SwitchBase.prototype, "processing", void 0);
__decorate([
    e$6({ type: Boolean })
], SwitchBase.prototype, "selected", void 0);
__decorate([
    ariaProperty,
    e$6({ type: String, attribute: 'aria-label' })
], SwitchBase.prototype, "ariaLabel", void 0);
__decorate([
    ariaProperty,
    e$6({ type: String, attribute: 'aria-labelledby' })
], SwitchBase.prototype, "ariaLabelledBy", void 0);
__decorate([
    e$3('mwc-ripple')
], SwitchBase.prototype, "ripple", void 0);
__decorate([
    t$2()
], SwitchBase.prototype, "shouldRenderRipple", void 0);
__decorate([
    e$6({ type: String, reflect: true })
], SwitchBase.prototype, "name", void 0);
__decorate([
    e$6({ type: String })
], SwitchBase.prototype, "value", void 0);
__decorate([
    i$3('input')
], SwitchBase.prototype, "formElement", void 0);
__decorate([
    i$3('.mdc-switch')
], SwitchBase.prototype, "mdcRoot", void 0);
__decorate([
    e$5({ passive: true })
], SwitchBase.prototype, "handlePointerDown", null);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$6 = i$6 `.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative}.mdc-switch:disabled{cursor:default;pointer-events:none}.mdc-switch__track{overflow:hidden;position:relative;width:100%}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid transparent;border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%}@media screen and (forced-colors: active){.mdc-switch__track::before,.mdc-switch__track::after{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(-100%)}[dir=rtl] .mdc-switch__track::after,.mdc-switch__track[dir=rtl]::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track[dir=rtl]::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0)}[dir=rtl] .mdc-switch__handle-track,.mdc-switch__handle-track[dir=rtl]{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track,.mdc-switch--selected .mdc-switch__handle-track[dir=rtl]{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto}[dir=rtl] .mdc-switch__handle,.mdc-switch__handle[dir=rtl]{left:auto;right:0}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid transparent;border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media screen and (forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-elevation-overlay{bottom:0;left:0;right:0;top:0}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1}.mdc-switch:disabled .mdc-switch__ripple{display:none}.mdc-switch__icons{height:100%;position:relative;width:100%;z-index:1}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}:host{display:inline-flex;outline:none}input{display:none}.mdc-switch{width:36px;width:var(--mdc-switch-track-width, 36px)}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__handle::after{background:#6200ee;background:var(--mdc-switch-selected-handle-color, var(--mdc-theme-primary, #6200ee))}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:#310077;background:var(--mdc-switch-selected-hover-handle-color, #310077)}.mdc-switch.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:#310077;background:var(--mdc-switch-selected-focus-handle-color, #310077)}.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:#310077;background:var(--mdc-switch-selected-pressed-handle-color, #310077)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__handle::after{background:#424242;background:var(--mdc-switch-disabled-selected-handle-color, #424242)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:#616161;background:var(--mdc-switch-unselected-handle-color, #616161)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:#212121;background:var(--mdc-switch-unselected-hover-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:#212121;background:var(--mdc-switch-unselected-focus-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:#212121;background:var(--mdc-switch-unselected-pressed-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__handle::after{background:#424242;background:var(--mdc-switch-disabled-unselected-handle-color, #424242)}.mdc-switch .mdc-switch__handle::before{background:#fff;background:var(--mdc-switch-handle-surface-color, var(--mdc-theme-surface, #fff))}.mdc-switch:enabled .mdc-switch__shadow{--mdc-elevation-box-shadow-for-gss:0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-switch-handle-elevation, var(--mdc-elevation-box-shadow-for-gss))}.mdc-switch:disabled .mdc-switch__shadow{--mdc-elevation-box-shadow-for-gss:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-switch-disabled-handle-elevation, var(--mdc-elevation-box-shadow-for-gss))}.mdc-switch .mdc-switch__focus-ring-wrapper,.mdc-switch .mdc-switch__handle{height:20px;height:var(--mdc-switch-handle-height, 20px)}.mdc-switch:disabled .mdc-switch__handle::after{opacity:0.38;opacity:var(--mdc-switch-disabled-handle-opacity, 0.38)}.mdc-switch .mdc-switch__handle{border-radius:10px;border-radius:var(--mdc-switch-handle-shape, 10px)}.mdc-switch .mdc-switch__handle{width:20px;width:var(--mdc-switch-handle-width, 20px)}.mdc-switch .mdc-switch__handle-track{width:calc(100% - 20px);width:calc(100% - var(--mdc-switch-handle-width, 20px))}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-selected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-disabled-selected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-unselected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-disabled-unselected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:0.38;opacity:var(--mdc-switch-disabled-selected-icon-opacity, 0.38)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:0.38;opacity:var(--mdc-switch-disabled-unselected-icon-opacity, 0.38)}.mdc-switch.mdc-switch--selected .mdc-switch__icon{width:18px;width:var(--mdc-switch-selected-icon-size, 18px);height:18px;height:var(--mdc-switch-selected-icon-size, 18px)}.mdc-switch.mdc-switch--unselected .mdc-switch__icon{width:18px;width:var(--mdc-switch-unselected-icon-size, 18px);height:18px;height:var(--mdc-switch-unselected-icon-size, 18px)}.mdc-switch .mdc-switch__ripple{height:48px;height:var(--mdc-switch-state-layer-size, 48px);width:48px;width:var(--mdc-switch-state-layer-size, 48px)}.mdc-switch .mdc-switch__track{height:14px;height:var(--mdc-switch-track-height, 14px)}.mdc-switch:disabled .mdc-switch__track{opacity:0.12;opacity:var(--mdc-switch-disabled-track-opacity, 0.12)}.mdc-switch:enabled .mdc-switch__track::after{background:#d7bbff;background:var(--mdc-switch-selected-track-color, #d7bbff)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:#d7bbff;background:var(--mdc-switch-selected-hover-track-color, #d7bbff)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:#d7bbff;background:var(--mdc-switch-selected-focus-track-color, #d7bbff)}.mdc-switch:enabled:active .mdc-switch__track::after{background:#d7bbff;background:var(--mdc-switch-selected-pressed-track-color, #d7bbff)}.mdc-switch:disabled .mdc-switch__track::after{background:#424242;background:var(--mdc-switch-disabled-selected-track-color, #424242)}.mdc-switch:enabled .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-track-color, #e0e0e0)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-hover-track-color, #e0e0e0)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-focus-track-color, #e0e0e0)}.mdc-switch:enabled:active .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-pressed-track-color, #e0e0e0)}.mdc-switch:disabled .mdc-switch__track::before{background:#424242;background:var(--mdc-switch-disabled-unselected-track-color, #424242)}.mdc-switch .mdc-switch__track{border-radius:7px;border-radius:var(--mdc-switch-track-shape, 7px)}.mdc-switch.mdc-switch--selected{--mdc-ripple-focus-state-layer-color:var(--mdc-switch-selected-focus-state-layer-color, var(--mdc-theme-primary, #6200ee));--mdc-ripple-focus-state-layer-opacity:var(--mdc-switch-selected-focus-state-layer-opacity, 0.12);--mdc-ripple-hover-state-layer-color:var(--mdc-switch-selected-hover-state-layer-color, var(--mdc-theme-primary, #6200ee));--mdc-ripple-hover-state-layer-opacity:var(--mdc-switch-selected-hover-state-layer-opacity, 0.04);--mdc-ripple-pressed-state-layer-color:var(--mdc-switch-selected-pressed-state-layer-color, var(--mdc-theme-primary, #6200ee));--mdc-ripple-pressed-state-layer-opacity:var(--mdc-switch-selected-pressed-state-layer-opacity, 0.1)}.mdc-switch.mdc-switch--selected:enabled:focus:not(:active){--mdc-ripple-hover-state-layer-color:var(--mdc-switch-selected-focus-state-layer-color, var(--mdc-theme-primary, #6200ee))}.mdc-switch.mdc-switch--selected:enabled:active{--mdc-ripple-hover-state-layer-color:var(--mdc-switch-selected-pressed-state-layer-color, var(--mdc-theme-primary, #6200ee))}.mdc-switch.mdc-switch--unselected{--mdc-ripple-focus-state-layer-color:var(--mdc-switch-unselected-focus-state-layer-color, #424242);--mdc-ripple-focus-state-layer-opacity:var(--mdc-switch-unselected-focus-state-layer-opacity, 0.12);--mdc-ripple-hover-state-layer-color:var(--mdc-switch-unselected-hover-state-layer-color, #424242);--mdc-ripple-hover-state-layer-opacity:var(--mdc-switch-unselected-hover-state-layer-opacity, 0.04);--mdc-ripple-pressed-state-layer-color:var(--mdc-switch-unselected-pressed-state-layer-color, #424242);--mdc-ripple-pressed-state-layer-opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity, 0.1)}.mdc-switch.mdc-switch--unselected:enabled:focus:not(:active){--mdc-ripple-hover-state-layer-color:var(--mdc-switch-unselected-focus-state-layer-color, #424242)}.mdc-switch.mdc-switch--unselected:enabled:active{--mdc-ripple-hover-state-layer-color:var(--mdc-switch-unselected-pressed-state-layer-color, #424242)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-switch:disabled .mdc-switch__handle::after{opacity:1;opacity:var(--mdc-switch-disabled-handle-opacity, 1)}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:ButtonText;fill:var(--mdc-switch-selected-icon-color, ButtonText)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:GrayText;fill:var(--mdc-switch-disabled-selected-icon-color, GrayText)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:ButtonText;fill:var(--mdc-switch-unselected-icon-color, ButtonText)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:GrayText;fill:var(--mdc-switch-disabled-unselected-icon-color, GrayText)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:1;opacity:var(--mdc-switch-disabled-selected-icon-opacity, 1)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:1;opacity:var(--mdc-switch-disabled-unselected-icon-opacity, 1)}.mdc-switch:disabled .mdc-switch__track{opacity:1;opacity:var(--mdc-switch-disabled-track-opacity, 1)}}`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
let Switch = class Switch extends SwitchBase {
};
Switch.styles = [styles$6];
Switch = __decorate([
    e$7('mwc-switch')
], Switch);

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings$2 = {
    NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch',
};
var numbers$2 = {
    // This should stay in sync with $mdc-notched-outline-padding * 2.
    NOTCH_ELEMENT_PADDING: 8,
};
var cssClasses$4 = {
    NO_LABEL: 'mdc-notched-outline--no-label',
    OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
    OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded',
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCNotchedOutlineFoundation = /** @class */ (function (_super) {
    __extends(MDCNotchedOutlineFoundation, _super);
    function MDCNotchedOutlineFoundation(adapter) {
        return _super.call(this, __assign(__assign({}, MDCNotchedOutlineFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCNotchedOutlineFoundation, "strings", {
        get: function () {
            return strings$2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "cssClasses", {
        get: function () {
            return cssClasses$4;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "numbers", {
        get: function () {
            return numbers$2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "defaultAdapter", {
        /**
         * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                setNotchWidthProperty: function () { return undefined; },
                removeNotchWidthProperty: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Adds the outline notched selector and updates the notch width calculated based off of notchWidth.
     */
    MDCNotchedOutlineFoundation.prototype.notch = function (notchWidth) {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
        if (notchWidth > 0) {
            notchWidth += numbers$2.NOTCH_ELEMENT_PADDING; // Add padding from left/right.
        }
        this.adapter.setNotchWidthProperty(notchWidth);
        this.adapter.addClass(OUTLINE_NOTCHED);
    };
    /**
     * Removes notched outline selector to close the notch in the outline.
     */
    MDCNotchedOutlineFoundation.prototype.closeNotch = function () {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
        this.adapter.removeClass(OUTLINE_NOTCHED);
        this.adapter.removeNotchWidthProperty();
    };
    return MDCNotchedOutlineFoundation;
}(MDCFoundation));

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class NotchedOutlineBase extends BaseElement {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = MDCNotchedOutlineFoundation;
        this.width = 0;
        this.open = false;
        this.lastOpen = this.open;
    }
    createAdapter() {
        return {
            addClass: (className) => this.mdcRoot.classList.add(className),
            removeClass: (className) => this.mdcRoot.classList.remove(className),
            setNotchWidthProperty: (width) => this.notchElement.style.setProperty('width', `${width}px`),
            removeNotchWidthProperty: () => this.notchElement.style.removeProperty('width'),
        };
    }
    openOrClose(shouldOpen, width) {
        if (!this.mdcFoundation) {
            return;
        }
        if (shouldOpen && width !== undefined) {
            this.mdcFoundation.notch(width);
        }
        else {
            this.mdcFoundation.closeNotch();
        }
    }
    render() {
        this.openOrClose(this.open, this.width);
        const classes = o$1({
            'mdc-notched-outline--notched': this.open,
        });
        return y `
      <span class="mdc-notched-outline ${classes}">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <slot></slot>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>`;
    }
}
__decorate([
    i$3('.mdc-notched-outline')
], NotchedOutlineBase.prototype, "mdcRoot", void 0);
__decorate([
    e$6({ type: Number })
], NotchedOutlineBase.prototype, "width", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true })
], NotchedOutlineBase.prototype, "open", void 0);
__decorate([
    i$3('.mdc-notched-outline__notch')
], NotchedOutlineBase.prototype, "notchElement", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$5 = i$6 `.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host([dir=rtl]){text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / 0.75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}`;

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let NotchedOutline = class NotchedOutline extends NotchedOutlineBase {
};
NotchedOutline.styles = [styles$5];
NotchedOutline = __decorate([
    e$7('mwc-notched-outline')
], NotchedOutline);

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$3 = {
    LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
    LABEL_REQUIRED: 'mdc-floating-label--required',
    LABEL_SHAKE: 'mdc-floating-label--shake',
    ROOT: 'mdc-floating-label',
};

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFloatingLabelFoundation = /** @class */ (function (_super) {
    __extends(MDCFloatingLabelFoundation, _super);
    function MDCFloatingLabelFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCFloatingLabelFoundation.defaultAdapter), adapter)) || this;
        _this.shakeAnimationEndHandler = function () {
            _this.handleShakeAnimationEnd();
        };
        return _this;
    }
    Object.defineProperty(MDCFloatingLabelFoundation, "cssClasses", {
        get: function () {
            return cssClasses$3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFloatingLabelFoundation, "defaultAdapter", {
        /**
         * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                getWidth: function () { return 0; },
                registerInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCFloatingLabelFoundation.prototype.init = function () {
        this.adapter.registerInteractionHandler('animationend', this.shakeAnimationEndHandler);
    };
    MDCFloatingLabelFoundation.prototype.destroy = function () {
        this.adapter.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler);
    };
    /**
     * Returns the width of the label element.
     */
    MDCFloatingLabelFoundation.prototype.getWidth = function () {
        return this.adapter.getWidth();
    };
    /**
     * Styles the label to produce a shake animation to indicate an error.
     * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
     */
    MDCFloatingLabelFoundation.prototype.shake = function (shouldShake) {
        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
        if (shouldShake) {
            this.adapter.addClass(LABEL_SHAKE);
        }
        else {
            this.adapter.removeClass(LABEL_SHAKE);
        }
    };
    /**
     * Styles the label to float or dock.
     * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
     */
    MDCFloatingLabelFoundation.prototype.float = function (shouldFloat) {
        var _a = MDCFloatingLabelFoundation.cssClasses, LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE, LABEL_SHAKE = _a.LABEL_SHAKE;
        if (shouldFloat) {
            this.adapter.addClass(LABEL_FLOAT_ABOVE);
        }
        else {
            this.adapter.removeClass(LABEL_FLOAT_ABOVE);
            this.adapter.removeClass(LABEL_SHAKE);
        }
    };
    /**
     * Styles the label as required.
     * @param isRequired If true, adds an asterisk to the label, indicating that it is required.
     */
    MDCFloatingLabelFoundation.prototype.setRequired = function (isRequired) {
        var LABEL_REQUIRED = MDCFloatingLabelFoundation.cssClasses.LABEL_REQUIRED;
        if (isRequired) {
            this.adapter.addClass(LABEL_REQUIRED);
        }
        else {
            this.adapter.removeClass(LABEL_REQUIRED);
        }
    };
    MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd = function () {
        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
        this.adapter.removeClass(LABEL_SHAKE);
    };
    return MDCFloatingLabelFoundation;
}(MDCFoundation));

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const createAdapter$1 = (labelElement) => {
    return {
        addClass: (className) => labelElement.classList.add(className),
        removeClass: (className) => labelElement.classList.remove(className),
        getWidth: () => labelElement.scrollWidth,
        registerInteractionHandler: (evtType, handler) => {
            labelElement.addEventListener(evtType, handler);
        },
        deregisterInteractionHandler: (evtType, handler) => {
            labelElement.removeEventListener(evtType, handler);
        },
    };
};
class FloatingLabelDirective extends i$2 {
    constructor(partInfo) {
        super(partInfo);
        this.foundation = null;
        this.previousPart = null;
        switch (partInfo.type) {
            // Only allow Attribute and Part bindings
            case t$1.ATTRIBUTE:
            case t$1.PROPERTY:
                break;
            default:
                throw new Error('FloatingLabel directive only support attribute and property parts');
        }
    }
    /**
     * There is no PropertyPart in Lit 2 so far. For more info see:
     * https://github.com/lit/lit/issues/1863
     */
    update(part, [label]) {
        if (part !== this.previousPart) {
            if (this.foundation) {
                this.foundation.destroy();
            }
            this.previousPart = part;
            const labelElement = part.element;
            labelElement.classList.add('mdc-floating-label');
            const adapter = createAdapter$1(labelElement);
            this.foundation = new MDCFloatingLabelFoundation(adapter);
            this.foundation.init();
        }
        return this.render(label);
    }
    render(_label) {
        return this.foundation;
    }
}
const floatingLabel = e$1(FloatingLabelDirective);

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$2 = {
    LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
    LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating',
};

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCLineRippleFoundation = /** @class */ (function (_super) {
    __extends(MDCLineRippleFoundation, _super);
    function MDCLineRippleFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCLineRippleFoundation.defaultAdapter), adapter)) || this;
        _this.transitionEndHandler = function (evt) {
            _this.handleTransitionEnd(evt);
        };
        return _this;
    }
    Object.defineProperty(MDCLineRippleFoundation, "cssClasses", {
        get: function () {
            return cssClasses$2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCLineRippleFoundation, "defaultAdapter", {
        /**
         * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                setStyle: function () { return undefined; },
                registerEventHandler: function () { return undefined; },
                deregisterEventHandler: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCLineRippleFoundation.prototype.init = function () {
        this.adapter.registerEventHandler('transitionend', this.transitionEndHandler);
    };
    MDCLineRippleFoundation.prototype.destroy = function () {
        this.adapter.deregisterEventHandler('transitionend', this.transitionEndHandler);
    };
    MDCLineRippleFoundation.prototype.activate = function () {
        this.adapter.removeClass(cssClasses$2.LINE_RIPPLE_DEACTIVATING);
        this.adapter.addClass(cssClasses$2.LINE_RIPPLE_ACTIVE);
    };
    MDCLineRippleFoundation.prototype.setRippleCenter = function (xCoordinate) {
        this.adapter.setStyle('transform-origin', xCoordinate + "px center");
    };
    MDCLineRippleFoundation.prototype.deactivate = function () {
        this.adapter.addClass(cssClasses$2.LINE_RIPPLE_DEACTIVATING);
    };
    MDCLineRippleFoundation.prototype.handleTransitionEnd = function (evt) {
        // Wait for the line ripple to be either transparent or opaque
        // before emitting the animation end event
        var isDeactivating = this.adapter.hasClass(cssClasses$2.LINE_RIPPLE_DEACTIVATING);
        if (evt.propertyName === 'opacity') {
            if (isDeactivating) {
                this.adapter.removeClass(cssClasses$2.LINE_RIPPLE_ACTIVE);
                this.adapter.removeClass(cssClasses$2.LINE_RIPPLE_DEACTIVATING);
            }
        }
    };
    return MDCLineRippleFoundation;
}(MDCFoundation));

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const createAdapter = (lineElement) => {
    return {
        addClass: (className) => lineElement.classList.add(className),
        removeClass: (className) => lineElement.classList.remove(className),
        hasClass: (className) => lineElement.classList.contains(className),
        setStyle: (propertyName, value) => lineElement.style.setProperty(propertyName, value),
        registerEventHandler: (evtType, handler) => {
            lineElement.addEventListener(evtType, handler);
        },
        deregisterEventHandler: (evtType, handler) => {
            lineElement.removeEventListener(evtType, handler);
        },
    };
};
class LineRippleDirective extends i$2 {
    constructor(partInfo) {
        super(partInfo);
        this.previousPart = null;
        this.foundation = null;
        switch (partInfo.type) {
            case t$1.ATTRIBUTE:
            case t$1.PROPERTY:
                return;
            default:
                throw new Error('LineRipple only support attribute and property parts.');
        }
    }
    /**
     * There is no PropertyPart in Lit 2 so far. For more info see:
     * https://github.com/lit/lit/issues/1863
     */
    update(part, _params) {
        if (this.previousPart !== part) {
            if (this.foundation) {
                this.foundation.destroy();
            }
            this.previousPart = part;
            const lineElement = part.element;
            lineElement.classList.add('mdc-line-ripple');
            const adapter = createAdapter(lineElement);
            this.foundation = new MDCLineRippleFoundation(adapter);
            this.foundation.init();
        }
        return this.render();
    }
    render() {
        return this.foundation;
    }
}
const lineRipple = e$1(LineRippleDirective);

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings$1 = {
    ARIA_CONTROLS: 'aria-controls',
    ARIA_DESCRIBEDBY: 'aria-describedby',
    INPUT_SELECTOR: '.mdc-text-field__input',
    LABEL_SELECTOR: '.mdc-floating-label',
    LEADING_ICON_SELECTOR: '.mdc-text-field__icon--leading',
    LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
    OUTLINE_SELECTOR: '.mdc-notched-outline',
    PREFIX_SELECTOR: '.mdc-text-field__affix--prefix',
    SUFFIX_SELECTOR: '.mdc-text-field__affix--suffix',
    TRAILING_ICON_SELECTOR: '.mdc-text-field__icon--trailing'
};
var cssClasses$1 = {
    DISABLED: 'mdc-text-field--disabled',
    FOCUSED: 'mdc-text-field--focused',
    HELPER_LINE: 'mdc-text-field-helper-line',
    INVALID: 'mdc-text-field--invalid',
    LABEL_FLOATING: 'mdc-text-field--label-floating',
    NO_LABEL: 'mdc-text-field--no-label',
    OUTLINED: 'mdc-text-field--outlined',
    ROOT: 'mdc-text-field',
    TEXTAREA: 'mdc-text-field--textarea',
    WITH_LEADING_ICON: 'mdc-text-field--with-leading-icon',
    WITH_TRAILING_ICON: 'mdc-text-field--with-trailing-icon',
    WITH_INTERNAL_COUNTER: 'mdc-text-field--with-internal-counter',
};
var numbers$1 = {
    LABEL_SCALE: 0.75,
};
/**
 * Whitelist based off of
 * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
 * under the "Validation-related attributes" section.
 */
var VALIDATION_ATTR_WHITELIST = [
    'pattern',
    'min',
    'max',
    'required',
    'step',
    'minlength',
    'maxlength',
];
/**
 * Label should always float for these types as they show some UI even if value
 * is empty.
 */
var ALWAYS_FLOAT_TYPES = [
    'color',
    'date',
    'datetime-local',
    'month',
    'range',
    'time',
    'week',
];

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var POINTERDOWN_EVENTS = ['mousedown', 'touchstart'];
var INTERACTION_EVENTS = ['click', 'keydown'];
var MDCTextFieldFoundation = /** @class */ (function (_super) {
    __extends(MDCTextFieldFoundation, _super);
    /**
     * @param adapter
     * @param foundationMap Map from subcomponent names to their subfoundations.
     */
    function MDCTextFieldFoundation(adapter, foundationMap) {
        if (foundationMap === void 0) { foundationMap = {}; }
        var _this = _super.call(this, __assign(__assign({}, MDCTextFieldFoundation.defaultAdapter), adapter)) || this;
        _this.isFocused = false;
        _this.receivedUserInput = false;
        _this.valid = true;
        _this.useNativeValidation = true;
        _this.validateOnValueChange = true;
        _this.helperText = foundationMap.helperText;
        _this.characterCounter = foundationMap.characterCounter;
        _this.leadingIcon = foundationMap.leadingIcon;
        _this.trailingIcon = foundationMap.trailingIcon;
        _this.inputFocusHandler = function () {
            _this.activateFocus();
        };
        _this.inputBlurHandler = function () {
            _this.deactivateFocus();
        };
        _this.inputInputHandler = function () {
            _this.handleInput();
        };
        _this.setPointerXOffset = function (evt) {
            _this.setTransformOrigin(evt);
        };
        _this.textFieldInteractionHandler = function () {
            _this.handleTextFieldInteraction();
        };
        _this.validationAttributeChangeHandler = function (attributesList) {
            _this.handleValidationAttributeChange(attributesList);
        };
        return _this;
    }
    Object.defineProperty(MDCTextFieldFoundation, "cssClasses", {
        get: function () {
            return cssClasses$1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation, "strings", {
        get: function () {
            return strings$1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation, "numbers", {
        get: function () {
            return numbers$1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldAlwaysFloat", {
        get: function () {
            var type = this.getNativeInput().type;
            return ALWAYS_FLOAT_TYPES.indexOf(type) >= 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldFloat", {
        get: function () {
            return this.shouldAlwaysFloat || this.isFocused || !!this.getValue() ||
                this.isBadInput();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldShake", {
        get: function () {
            return !this.isFocused && !this.isValid() && !!this.getValue();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldAdapter} for typing information on parameters and
         * return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return true; },
                setInputAttr: function () { return undefined; },
                removeInputAttr: function () { return undefined; },
                registerTextFieldInteractionHandler: function () { return undefined; },
                deregisterTextFieldInteractionHandler: function () { return undefined; },
                registerInputInteractionHandler: function () { return undefined; },
                deregisterInputInteractionHandler: function () { return undefined; },
                registerValidationAttributeChangeHandler: function () {
                    return new MutationObserver(function () { return undefined; });
                },
                deregisterValidationAttributeChangeHandler: function () { return undefined; },
                getNativeInput: function () { return null; },
                isFocused: function () { return false; },
                activateLineRipple: function () { return undefined; },
                deactivateLineRipple: function () { return undefined; },
                setLineRippleTransformOrigin: function () { return undefined; },
                shakeLabel: function () { return undefined; },
                floatLabel: function () { return undefined; },
                setLabelRequired: function () { return undefined; },
                hasLabel: function () { return false; },
                getLabelWidth: function () { return 0; },
                hasOutline: function () { return false; },
                notchOutline: function () { return undefined; },
                closeOutline: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldFoundation.prototype.init = function () {
        var e_1, _a, e_2, _b;
        if (this.adapter.hasLabel() && this.getNativeInput().required) {
            this.adapter.setLabelRequired(true);
        }
        if (this.adapter.isFocused()) {
            this.inputFocusHandler();
        }
        else if (this.adapter.hasLabel() && this.shouldFloat) {
            this.notchOutline(true);
            this.adapter.floatLabel(true);
            this.styleFloating(true);
        }
        this.adapter.registerInputInteractionHandler('focus', this.inputFocusHandler);
        this.adapter.registerInputInteractionHandler('blur', this.inputBlurHandler);
        this.adapter.registerInputInteractionHandler('input', this.inputInputHandler);
        try {
            for (var POINTERDOWN_EVENTS_1 = __values(POINTERDOWN_EVENTS), POINTERDOWN_EVENTS_1_1 = POINTERDOWN_EVENTS_1.next(); !POINTERDOWN_EVENTS_1_1.done; POINTERDOWN_EVENTS_1_1 = POINTERDOWN_EVENTS_1.next()) {
                var evtType = POINTERDOWN_EVENTS_1_1.value;
                this.adapter.registerInputInteractionHandler(evtType, this.setPointerXOffset);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (POINTERDOWN_EVENTS_1_1 && !POINTERDOWN_EVENTS_1_1.done && (_a = POINTERDOWN_EVENTS_1.return)) _a.call(POINTERDOWN_EVENTS_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var INTERACTION_EVENTS_1 = __values(INTERACTION_EVENTS), INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next(); !INTERACTION_EVENTS_1_1.done; INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next()) {
                var evtType = INTERACTION_EVENTS_1_1.value;
                this.adapter.registerTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (INTERACTION_EVENTS_1_1 && !INTERACTION_EVENTS_1_1.done && (_b = INTERACTION_EVENTS_1.return)) _b.call(INTERACTION_EVENTS_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.validationObserver =
            this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler);
        this.setcharacterCounter(this.getValue().length);
    };
    MDCTextFieldFoundation.prototype.destroy = function () {
        var e_3, _a, e_4, _b;
        this.adapter.deregisterInputInteractionHandler('focus', this.inputFocusHandler);
        this.adapter.deregisterInputInteractionHandler('blur', this.inputBlurHandler);
        this.adapter.deregisterInputInteractionHandler('input', this.inputInputHandler);
        try {
            for (var POINTERDOWN_EVENTS_2 = __values(POINTERDOWN_EVENTS), POINTERDOWN_EVENTS_2_1 = POINTERDOWN_EVENTS_2.next(); !POINTERDOWN_EVENTS_2_1.done; POINTERDOWN_EVENTS_2_1 = POINTERDOWN_EVENTS_2.next()) {
                var evtType = POINTERDOWN_EVENTS_2_1.value;
                this.adapter.deregisterInputInteractionHandler(evtType, this.setPointerXOffset);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (POINTERDOWN_EVENTS_2_1 && !POINTERDOWN_EVENTS_2_1.done && (_a = POINTERDOWN_EVENTS_2.return)) _a.call(POINTERDOWN_EVENTS_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        try {
            for (var INTERACTION_EVENTS_2 = __values(INTERACTION_EVENTS), INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next(); !INTERACTION_EVENTS_2_1.done; INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next()) {
                var evtType = INTERACTION_EVENTS_2_1.value;
                this.adapter.deregisterTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (INTERACTION_EVENTS_2_1 && !INTERACTION_EVENTS_2_1.done && (_b = INTERACTION_EVENTS_2.return)) _b.call(INTERACTION_EVENTS_2);
            }
            finally { if (e_4) throw e_4.error; }
        }
        this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
    };
    /**
     * Handles user interactions with the Text Field.
     */
    MDCTextFieldFoundation.prototype.handleTextFieldInteraction = function () {
        var nativeInput = this.adapter.getNativeInput();
        if (nativeInput && nativeInput.disabled) {
            return;
        }
        this.receivedUserInput = true;
    };
    /**
     * Handles validation attribute changes
     */
    MDCTextFieldFoundation.prototype.handleValidationAttributeChange = function (attributesList) {
        var _this = this;
        attributesList.some(function (attributeName) {
            if (VALIDATION_ATTR_WHITELIST.indexOf(attributeName) > -1) {
                _this.styleValidity(true);
                _this.adapter.setLabelRequired(_this.getNativeInput().required);
                return true;
            }
            return false;
        });
        if (attributesList.indexOf('maxlength') > -1) {
            this.setcharacterCounter(this.getValue().length);
        }
    };
    /**
     * Opens/closes the notched outline.
     */
    MDCTextFieldFoundation.prototype.notchOutline = function (openNotch) {
        if (!this.adapter.hasOutline() || !this.adapter.hasLabel()) {
            return;
        }
        if (openNotch) {
            var labelWidth = this.adapter.getLabelWidth() * numbers$1.LABEL_SCALE;
            this.adapter.notchOutline(labelWidth);
        }
        else {
            this.adapter.closeOutline();
        }
    };
    /**
     * Activates the text field focus state.
     */
    MDCTextFieldFoundation.prototype.activateFocus = function () {
        this.isFocused = true;
        this.styleFocused(this.isFocused);
        this.adapter.activateLineRipple();
        if (this.adapter.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter.floatLabel(this.shouldFloat);
            this.styleFloating(this.shouldFloat);
            this.adapter.shakeLabel(this.shouldShake);
        }
        if (this.helperText &&
            (this.helperText.isPersistent() || !this.helperText.isValidation() ||
                !this.valid)) {
            this.helperText.showToScreenReader();
        }
    };
    /**
     * Sets the line ripple's transform origin, so that the line ripple activate
     * animation will animate out from the user's click location.
     */
    MDCTextFieldFoundation.prototype.setTransformOrigin = function (evt) {
        if (this.isDisabled() || this.adapter.hasOutline()) {
            return;
        }
        var touches = evt.touches;
        var targetEvent = touches ? touches[0] : evt;
        var targetClientRect = targetEvent.target.getBoundingClientRect();
        var normalizedX = targetEvent.clientX - targetClientRect.left;
        this.adapter.setLineRippleTransformOrigin(normalizedX);
    };
    /**
     * Handles input change of text input and text area.
     */
    MDCTextFieldFoundation.prototype.handleInput = function () {
        this.autoCompleteFocus();
        this.setcharacterCounter(this.getValue().length);
    };
    /**
     * Activates the Text Field's focus state in cases when the input value
     * changes without user input (e.g. programmatically).
     */
    MDCTextFieldFoundation.prototype.autoCompleteFocus = function () {
        if (!this.receivedUserInput) {
            this.activateFocus();
        }
    };
    /**
     * Deactivates the Text Field's focus state.
     */
    MDCTextFieldFoundation.prototype.deactivateFocus = function () {
        this.isFocused = false;
        this.adapter.deactivateLineRipple();
        var isValid = this.isValid();
        this.styleValidity(isValid);
        this.styleFocused(this.isFocused);
        if (this.adapter.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter.floatLabel(this.shouldFloat);
            this.styleFloating(this.shouldFloat);
            this.adapter.shakeLabel(this.shouldShake);
        }
        if (!this.shouldFloat) {
            this.receivedUserInput = false;
        }
    };
    MDCTextFieldFoundation.prototype.getValue = function () {
        return this.getNativeInput().value;
    };
    /**
     * @param value The value to set on the input Element.
     */
    MDCTextFieldFoundation.prototype.setValue = function (value) {
        // Prevent Safari from moving the caret to the end of the input when the
        // value has not changed.
        if (this.getValue() !== value) {
            this.getNativeInput().value = value;
        }
        this.setcharacterCounter(value.length);
        if (this.validateOnValueChange) {
            var isValid = this.isValid();
            this.styleValidity(isValid);
        }
        if (this.adapter.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter.floatLabel(this.shouldFloat);
            this.styleFloating(this.shouldFloat);
            if (this.validateOnValueChange) {
                this.adapter.shakeLabel(this.shouldShake);
            }
        }
    };
    /**
     * @return The custom validity state, if set; otherwise, the result of a
     *     native validity check.
     */
    MDCTextFieldFoundation.prototype.isValid = function () {
        return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
    };
    /**
     * @param isValid Sets the custom validity state of the Text Field.
     */
    MDCTextFieldFoundation.prototype.setValid = function (isValid) {
        this.valid = isValid;
        this.styleValidity(isValid);
        var shouldShake = !isValid && !this.isFocused && !!this.getValue();
        if (this.adapter.hasLabel()) {
            this.adapter.shakeLabel(shouldShake);
        }
    };
    /**
     * @param shouldValidate Whether or not validity should be updated on
     *     value change.
     */
    MDCTextFieldFoundation.prototype.setValidateOnValueChange = function (shouldValidate) {
        this.validateOnValueChange = shouldValidate;
    };
    /**
     * @return Whether or not validity should be updated on value change. `true`
     *     by default.
     */
    MDCTextFieldFoundation.prototype.getValidateOnValueChange = function () {
        return this.validateOnValueChange;
    };
    /**
     * Enables or disables the use of native validation. Use this for custom
     * validation.
     * @param useNativeValidation Set this to false to ignore native input
     *     validation.
     */
    MDCTextFieldFoundation.prototype.setUseNativeValidation = function (useNativeValidation) {
        this.useNativeValidation = useNativeValidation;
    };
    MDCTextFieldFoundation.prototype.isDisabled = function () {
        return this.getNativeInput().disabled;
    };
    /**
     * @param disabled Sets the text-field disabled or enabled.
     */
    MDCTextFieldFoundation.prototype.setDisabled = function (disabled) {
        this.getNativeInput().disabled = disabled;
        this.styleDisabled(disabled);
    };
    /**
     * @param content Sets the content of the helper text.
     */
    MDCTextFieldFoundation.prototype.setHelperTextContent = function (content) {
        if (this.helperText) {
            this.helperText.setContent(content);
        }
    };
    /**
     * Sets the aria label of the leading icon.
     */
    MDCTextFieldFoundation.prototype.setLeadingIconAriaLabel = function (label) {
        if (this.leadingIcon) {
            this.leadingIcon.setAriaLabel(label);
        }
    };
    /**
     * Sets the text content of the leading icon.
     */
    MDCTextFieldFoundation.prototype.setLeadingIconContent = function (content) {
        if (this.leadingIcon) {
            this.leadingIcon.setContent(content);
        }
    };
    /**
     * Sets the aria label of the trailing icon.
     */
    MDCTextFieldFoundation.prototype.setTrailingIconAriaLabel = function (label) {
        if (this.trailingIcon) {
            this.trailingIcon.setAriaLabel(label);
        }
    };
    /**
     * Sets the text content of the trailing icon.
     */
    MDCTextFieldFoundation.prototype.setTrailingIconContent = function (content) {
        if (this.trailingIcon) {
            this.trailingIcon.setContent(content);
        }
    };
    /**
     * Sets character counter values that shows characters used and the total
     * character limit.
     */
    MDCTextFieldFoundation.prototype.setcharacterCounter = function (currentLength) {
        if (!this.characterCounter) {
            return;
        }
        var maxLength = this.getNativeInput().maxLength;
        if (maxLength === -1) {
            throw new Error('MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.');
        }
        this.characterCounter.setCounterValue(currentLength, maxLength);
    };
    /**
     * @return True if the Text Field input fails in converting the user-supplied
     *     value.
     */
    MDCTextFieldFoundation.prototype.isBadInput = function () {
        // The badInput property is not supported in IE 11 💩.
        return this.getNativeInput().validity.badInput || false;
    };
    /**
     * @return The result of native validity checking (ValidityState.valid).
     */
    MDCTextFieldFoundation.prototype.isNativeInputValid = function () {
        return this.getNativeInput().validity.valid;
    };
    /**
     * Styles the component based on the validity state.
     */
    MDCTextFieldFoundation.prototype.styleValidity = function (isValid) {
        var INVALID = MDCTextFieldFoundation.cssClasses.INVALID;
        if (isValid) {
            this.adapter.removeClass(INVALID);
        }
        else {
            this.adapter.addClass(INVALID);
        }
        if (this.helperText) {
            this.helperText.setValidity(isValid);
            // We dynamically set or unset aria-describedby for validation helper text
            // only, based on whether the field is valid
            var helperTextValidation = this.helperText.isValidation();
            if (!helperTextValidation) {
                return;
            }
            var helperTextVisible = this.helperText.isVisible();
            var helperTextId = this.helperText.getId();
            if (helperTextVisible && helperTextId) {
                this.adapter.setInputAttr(strings$1.ARIA_DESCRIBEDBY, helperTextId);
            }
            else {
                this.adapter.removeInputAttr(strings$1.ARIA_DESCRIBEDBY);
            }
        }
    };
    /**
     * Styles the component based on the focused state.
     */
    MDCTextFieldFoundation.prototype.styleFocused = function (isFocused) {
        var FOCUSED = MDCTextFieldFoundation.cssClasses.FOCUSED;
        if (isFocused) {
            this.adapter.addClass(FOCUSED);
        }
        else {
            this.adapter.removeClass(FOCUSED);
        }
    };
    /**
     * Styles the component based on the disabled state.
     */
    MDCTextFieldFoundation.prototype.styleDisabled = function (isDisabled) {
        var _a = MDCTextFieldFoundation.cssClasses, DISABLED = _a.DISABLED, INVALID = _a.INVALID;
        if (isDisabled) {
            this.adapter.addClass(DISABLED);
            this.adapter.removeClass(INVALID);
        }
        else {
            this.adapter.removeClass(DISABLED);
        }
        if (this.leadingIcon) {
            this.leadingIcon.setDisabled(isDisabled);
        }
        if (this.trailingIcon) {
            this.trailingIcon.setDisabled(isDisabled);
        }
    };
    /**
     * Styles the component based on the label floating state.
     */
    MDCTextFieldFoundation.prototype.styleFloating = function (isFloating) {
        var LABEL_FLOATING = MDCTextFieldFoundation.cssClasses.LABEL_FLOATING;
        if (isFloating) {
            this.adapter.addClass(LABEL_FLOATING);
        }
        else {
            this.adapter.removeClass(LABEL_FLOATING);
        }
    };
    /**
     * @return The native text input element from the host environment, or an
     *     object with the same shape for unit tests.
     */
    MDCTextFieldFoundation.prototype.getNativeInput = function () {
        // this.adapter may be undefined in foundation unit tests. This happens when
        // testdouble is creating a mock object and invokes the
        // shouldShake/shouldFloat getters (which in turn call getValue(), which
        // calls this method) before init() has been called from the MDCTextField
        // constructor. To work around that issue, we return a dummy object.
        var nativeInput = this.adapter ? this.adapter.getNativeInput() : null;
        return nativeInput || {
            disabled: false,
            maxLength: -1,
            required: false,
            type: 'input',
            validity: {
                badInput: false,
                valid: true,
            },
            value: '',
        };
    };
    return MDCTextFieldFoundation;
}(MDCFoundation));
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var MDCTextFieldFoundation$1 = MDCTextFieldFoundation;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t=o=>null===o||"object"!=typeof o&&"function"!=typeof o,e=o=>void 0===o.strings,f={},s$2=(o,l=f)=>o._$AH=l;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l$1=e$1(class extends i$2{constructor(r){if(super(r),r.type!==t$1.PROPERTY&&r.type!==t$1.ATTRIBUTE&&r.type!==t$1.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!e(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(i,[t]){if(t===x||t===b)return t;const o=i.element,l=i.name;if(i.type===t$1.PROPERTY){if(t===o[l])return x}else if(i.type===t$1.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(l))return x}else if(i.type===t$1.ATTRIBUTE&&o.getAttribute(l)===t+"")return x;return s$2(i),t}});

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const passiveEvents = ['touchstart', 'touchmove', 'scroll', 'mousewheel'];
const createValidityObj$1 = (customValidity = {}) => {
    /*
     * We need to make ValidityState an object because it is readonly and
     * we cannot use the spread operator. Also, we don't export
     * `CustomValidityState` because it is a leaky implementation and the user
     * already has access to `ValidityState` in lib.dom.ts. Also an interface
     * {a: Type} can be casted to {readonly a: Type} so passing any object
     * should be fine.
     */
    const objectifiedCustomValidity = {};
    // eslint-disable-next-line guard-for-in
    for (const propName in customValidity) {
        /*
         * Casting is needed because ValidityState's props are all readonly and
         * thus cannot be set on `onjectifiedCustomValidity`. In the end, the
         * interface is the same as ValidityState (but not readonly), but the
         * function signature casts the output to ValidityState (thus readonly).
         */
        objectifiedCustomValidity[propName] =
            customValidity[propName];
    }
    return Object.assign({ badInput: false, customError: false, patternMismatch: false, rangeOverflow: false, rangeUnderflow: false, stepMismatch: false, tooLong: false, tooShort: false, typeMismatch: false, valid: true, valueMissing: false }, objectifiedCustomValidity);
};
/** @soyCompatible */
class TextFieldBase extends FormElement {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = MDCTextFieldFoundation$1;
        this.value = '';
        this.type = 'text';
        this.placeholder = '';
        this.label = '';
        this.icon = '';
        this.iconTrailing = '';
        this.disabled = false;
        this.required = false;
        this.minLength = -1;
        this.maxLength = -1;
        this.outlined = false;
        this.helper = '';
        this.validateOnInitialRender = false;
        this.validationMessage = '';
        this.autoValidate = false;
        this.pattern = '';
        this.min = '';
        this.max = '';
        /**
         * step can be a number or the keyword "any".
         *
         * Use `String` typing to pass down the value as a string and let the native
         * input cast internally as needed.
         */
        this.step = null;
        this.size = null;
        this.helperPersistent = false;
        this.charCounter = false;
        this.endAligned = false;
        this.prefix = '';
        this.suffix = '';
        this.name = '';
        this.readOnly = false;
        this.autocapitalize = '';
        this.outlineOpen = false;
        this.outlineWidth = 0;
        this.isUiValid = true;
        this.focused = false;
        this._validity = createValidityObj$1();
        this.validityTransform = null;
    }
    get validity() {
        this._checkValidity(this.value);
        return this._validity;
    }
    get willValidate() {
        return this.formElement.willValidate;
    }
    get selectionStart() {
        return this.formElement.selectionStart;
    }
    get selectionEnd() {
        return this.formElement.selectionEnd;
    }
    focus() {
        const focusEvt = new CustomEvent('focus');
        this.formElement.dispatchEvent(focusEvt);
        this.formElement.focus();
    }
    blur() {
        const blurEvt = new CustomEvent('blur');
        this.formElement.dispatchEvent(blurEvt);
        this.formElement.blur();
    }
    select() {
        this.formElement.select();
    }
    setSelectionRange(selectionStart, selectionEnd, selectionDirection) {
        this.formElement.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
    }
    update(changedProperties) {
        if (changedProperties.has('autoValidate') && this.mdcFoundation) {
            this.mdcFoundation.setValidateOnValueChange(this.autoValidate);
        }
        if (changedProperties.has('value') && typeof this.value !== 'string') {
            this.value = `${this.value}`;
        }
        super.update(changedProperties);
    }
    setFormData(formData) {
        if (this.name) {
            formData.append(this.name, this.value);
        }
    }
    /** @soyTemplate */
    render() {
        const shouldRenderCharCounter = this.charCounter && this.maxLength !== -1;
        const shouldRenderHelperText = !!this.helper || !!this.validationMessage || shouldRenderCharCounter;
        /** @classMap */
        const classes = {
            'mdc-text-field--disabled': this.disabled,
            'mdc-text-field--no-label': !this.label,
            'mdc-text-field--filled': !this.outlined,
            'mdc-text-field--outlined': this.outlined,
            'mdc-text-field--with-leading-icon': this.icon,
            'mdc-text-field--with-trailing-icon': this.iconTrailing,
            'mdc-text-field--end-aligned': this.endAligned,
        };
        return y `
      <label class="mdc-text-field ${o$1(classes)}">
        ${this.renderRipple()}
        ${this.outlined ? this.renderOutline() : this.renderLabel()}
        ${this.renderLeadingIcon()}
        ${this.renderPrefix()}
        ${this.renderInput(shouldRenderHelperText)}
        ${this.renderSuffix()}
        ${this.renderTrailingIcon()}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(shouldRenderHelperText, shouldRenderCharCounter)}
    `;
    }
    updated(changedProperties) {
        if (changedProperties.has('value') &&
            changedProperties.get('value') !== undefined) {
            this.mdcFoundation.setValue(this.value);
            if (this.autoValidate) {
                this.reportValidity();
            }
        }
    }
    /** @soyTemplate */
    renderRipple() {
        return this.outlined ? '' : y `
      <span class="mdc-text-field__ripple"></span>
    `;
    }
    /** @soyTemplate */
    renderOutline() {
        return !this.outlined ? '' : y `
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>`;
    }
    /** @soyTemplate */
    renderLabel() {
        return !this.label ?
            '' :
            y `
      <span
          .floatingLabelFoundation=${floatingLabel(this.label)}
          id="label">${this.label}</span>
    `;
    }
    /** @soyTemplate */
    renderLeadingIcon() {
        return this.icon ? this.renderIcon(this.icon) : '';
    }
    /** @soyTemplate */
    renderTrailingIcon() {
        return this.iconTrailing ? this.renderIcon(this.iconTrailing, true) : '';
    }
    /** @soyTemplate */
    renderIcon(icon, isTrailingIcon = false) {
        /** @classMap */
        const classes = {
            'mdc-text-field__icon--leading': !isTrailingIcon,
            'mdc-text-field__icon--trailing': isTrailingIcon
        };
        return y `<i class="material-icons mdc-text-field__icon ${o$1(classes)}">${icon}</i>`;
    }
    /** @soyTemplate */
    renderPrefix() {
        return this.prefix ? this.renderAffix(this.prefix) : '';
    }
    /** @soyTemplate */
    renderSuffix() {
        return this.suffix ? this.renderAffix(this.suffix, true) : '';
    }
    /** @soyTemplate */
    renderAffix(content, isSuffix = false) {
        /** @classMap */
        const classes = {
            'mdc-text-field__affix--prefix': !isSuffix,
            'mdc-text-field__affix--suffix': isSuffix
        };
        return y `<span class="mdc-text-field__affix ${o$1(classes)}">
        ${content}</span>`;
    }
    /** @soyTemplate */
    renderInput(shouldRenderHelperText) {
        const minOrUndef = this.minLength === -1 ? undefined : this.minLength;
        const maxOrUndef = this.maxLength === -1 ? undefined : this.maxLength;
        const autocapitalizeOrUndef = this.autocapitalize ?
            this.autocapitalize :
            undefined;
        const showValidationMessage = this.validationMessage && !this.isUiValid;
        const ariaLabelledbyOrUndef = !!this.label ? 'label' : undefined;
        const ariaControlsOrUndef = shouldRenderHelperText ? 'helper-text' : undefined;
        const ariaDescribedbyOrUndef = this.focused || this.helperPersistent || showValidationMessage ?
            'helper-text' :
            undefined;
        // TODO: live() directive needs casting for lit-analyzer
        // https://github.com/runem/lit-analyzer/pull/91/files
        // TODO: lit-analyzer labels min/max as (number|string) instead of string
        return y `
      <input
          aria-labelledby=${l$2(ariaLabelledbyOrUndef)}
          aria-controls="${l$2(ariaControlsOrUndef)}"
          aria-describedby="${l$2(ariaDescribedbyOrUndef)}"
          class="mdc-text-field__input"
          type="${this.type}"
          .value="${l$1(this.value)}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${l$2(minOrUndef)}"
          maxlength="${l$2(maxOrUndef)}"
          pattern="${l$2(this.pattern ? this.pattern : undefined)}"
          min="${l$2(this.min === '' ? undefined : this.min)}"
          max="${l$2(this.max === '' ? undefined : this.max)}"
          step="${l$2(this.step === null ? undefined : this.step)}"
          size="${l$2(this.size === null ? undefined : this.size)}"
          name="${l$2(this.name === '' ? undefined : this.name)}"
          inputmode="${l$2(this.inputMode)}"
          autocapitalize="${l$2(autocapitalizeOrUndef)}"
          @input="${this.handleInputChange}"
          @focus="${this.onInputFocus}"
          @blur="${this.onInputBlur}">`;
    }
    /** @soyTemplate */
    renderLineRipple() {
        return this.outlined ?
            '' :
            y `
      <span .lineRippleFoundation=${lineRipple()}></span>
    `;
    }
    /** @soyTemplate */
    renderHelperText(shouldRenderHelperText, shouldRenderCharCounter) {
        const showValidationMessage = this.validationMessage && !this.isUiValid;
        /** @classMap */
        const classes = {
            'mdc-text-field-helper-text--persistent': this.helperPersistent,
            'mdc-text-field-helper-text--validation-msg': showValidationMessage,
        };
        const ariaHiddenOrUndef = this.focused || this.helperPersistent || showValidationMessage ?
            undefined :
            'true';
        const helperText = showValidationMessage ? this.validationMessage : this.helper;
        return !shouldRenderHelperText ? '' : y `
      <div class="mdc-text-field-helper-line">
        <div id="helper-text"
             aria-hidden="${l$2(ariaHiddenOrUndef)}"
             class="mdc-text-field-helper-text ${o$1(classes)}"
             >${helperText}</div>
        ${this.renderCharCounter(shouldRenderCharCounter)}
      </div>`;
    }
    /** @soyTemplate */
    renderCharCounter(shouldRenderCharCounter) {
        const length = Math.min(this.value.length, this.maxLength);
        return !shouldRenderCharCounter ? '' : y `
      <span class="mdc-text-field-character-counter"
            >${length} / ${this.maxLength}</span>`;
    }
    onInputFocus() {
        this.focused = true;
    }
    onInputBlur() {
        this.focused = false;
        this.reportValidity();
    }
    checkValidity() {
        const isValid = this._checkValidity(this.value);
        if (!isValid) {
            const invalidEvent = new Event('invalid', { bubbles: false, cancelable: true });
            this.dispatchEvent(invalidEvent);
        }
        return isValid;
    }
    reportValidity() {
        const isValid = this.checkValidity();
        this.mdcFoundation.setValid(isValid);
        this.isUiValid = isValid;
        return isValid;
    }
    _checkValidity(value) {
        const nativeValidity = this.formElement.validity;
        let validity = createValidityObj$1(nativeValidity);
        if (this.validityTransform) {
            const customValidity = this.validityTransform(value, validity);
            validity = Object.assign(Object.assign({}, validity), customValidity);
            this.mdcFoundation.setUseNativeValidation(false);
        }
        else {
            this.mdcFoundation.setUseNativeValidation(true);
        }
        this._validity = validity;
        return this._validity.valid;
    }
    setCustomValidity(message) {
        this.validationMessage = message;
        this.formElement.setCustomValidity(message);
    }
    handleInputChange() {
        this.value = this.formElement.value;
    }
    createAdapter() {
        return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, this.getRootAdapterMethods()), this.getInputAdapterMethods()), this.getLabelAdapterMethods()), this.getLineRippleAdapterMethods()), this.getOutlineAdapterMethods());
    }
    getRootAdapterMethods() {
        return Object.assign({ registerTextFieldInteractionHandler: (evtType, handler) => this.addEventListener(evtType, handler), deregisterTextFieldInteractionHandler: (evtType, handler) => this.removeEventListener(evtType, handler), registerValidationAttributeChangeHandler: (handler) => {
                const getAttributesList = (mutationsList) => {
                    return mutationsList.map((mutation) => mutation.attributeName)
                        .filter((attributeName) => attributeName);
                };
                const observer = new MutationObserver((mutationsList) => {
                    handler(getAttributesList(mutationsList));
                });
                const config = { attributes: true };
                observer.observe(this.formElement, config);
                return observer;
            }, deregisterValidationAttributeChangeHandler: (observer) => observer.disconnect() }, addHasRemoveClass(this.mdcRoot));
    }
    getInputAdapterMethods() {
        return {
            getNativeInput: () => this.formElement,
            // since HelperTextFoundation is not used, aria-describedby a11y logic
            // is implemented in render method instead of these adapter methods
            setInputAttr: () => undefined,
            removeInputAttr: () => undefined,
            isFocused: () => this.shadowRoot ?
                this.shadowRoot.activeElement === this.formElement :
                false,
            registerInputInteractionHandler: (evtType, handler) => this.formElement.addEventListener(evtType, handler, { passive: evtType in passiveEvents }),
            deregisterInputInteractionHandler: (evtType, handler) => this.formElement.removeEventListener(evtType, handler),
        };
    }
    getLabelAdapterMethods() {
        return {
            floatLabel: (shouldFloat) => this.labelElement &&
                this.labelElement.floatingLabelFoundation.float(shouldFloat),
            getLabelWidth: () => {
                return this.labelElement ?
                    this.labelElement.floatingLabelFoundation.getWidth() :
                    0;
            },
            hasLabel: () => Boolean(this.labelElement),
            shakeLabel: (shouldShake) => this.labelElement &&
                this.labelElement.floatingLabelFoundation.shake(shouldShake),
            setLabelRequired: (isRequired) => {
                if (this.labelElement) {
                    this.labelElement.floatingLabelFoundation.setRequired(isRequired);
                }
            },
        };
    }
    getLineRippleAdapterMethods() {
        return {
            activateLineRipple: () => {
                if (this.lineRippleElement) {
                    this.lineRippleElement.lineRippleFoundation.activate();
                }
            },
            deactivateLineRipple: () => {
                if (this.lineRippleElement) {
                    this.lineRippleElement.lineRippleFoundation.deactivate();
                }
            },
            setLineRippleTransformOrigin: (normalizedX) => {
                if (this.lineRippleElement) {
                    this.lineRippleElement.lineRippleFoundation.setRippleCenter(normalizedX);
                }
            },
        };
    }
    // tslint:disable:ban-ts-ignore
    async getUpdateComplete() {
        var _a;
        // @ts-ignore
        const result = await super.getUpdateComplete();
        await ((_a = this.outlineElement) === null || _a === void 0 ? void 0 : _a.updateComplete);
        return result;
    }
    // tslint:enable:ban-ts-ignore
    firstUpdated() {
        var _a;
        super.firstUpdated();
        this.mdcFoundation.setValidateOnValueChange(this.autoValidate);
        if (this.validateOnInitialRender) {
            this.reportValidity();
        }
        // wait for the outline element to render to update the notch width
        (_a = this.outlineElement) === null || _a === void 0 ? void 0 : _a.updateComplete.then(() => {
            var _a;
            // `foundation.notchOutline()` assumes the label isn't floating and
            // multiplies by a constant, but the label is already is floating at this
            // stage, therefore directly set the outline width to the label width
            this.outlineWidth =
                ((_a = this.labelElement) === null || _a === void 0 ? void 0 : _a.floatingLabelFoundation.getWidth()) || 0;
        });
    }
    getOutlineAdapterMethods() {
        return {
            closeOutline: () => this.outlineElement && (this.outlineOpen = false),
            hasOutline: () => Boolean(this.outlineElement),
            notchOutline: (labelWidth) => {
                const outlineElement = this.outlineElement;
                if (outlineElement && !this.outlineOpen) {
                    this.outlineWidth = labelWidth;
                    this.outlineOpen = true;
                }
            }
        };
    }
    async layout() {
        await this.updateComplete;
        const labelElement = this.labelElement;
        if (!labelElement) {
            this.outlineOpen = false;
            return;
        }
        const shouldFloat = !!this.label && !!this.value;
        labelElement.floatingLabelFoundation.float(shouldFloat);
        if (!this.outlined) {
            return;
        }
        this.outlineOpen = shouldFloat;
        await this.updateComplete;
        /* When the textfield automatically notches due to a value and label
         * being defined, the textfield may be set to `display: none` by the user.
         * this means that the notch is of size 0px. We provide this function so
         * that the user may manually resize the notch to the floated label's
         * width.
         */
        const labelWidth = labelElement.floatingLabelFoundation.getWidth();
        if (this.outlineOpen) {
            this.outlineWidth = labelWidth;
            await this.updateComplete;
        }
    }
}
__decorate([
    i$3('.mdc-text-field')
], TextFieldBase.prototype, "mdcRoot", void 0);
__decorate([
    i$3('input')
], TextFieldBase.prototype, "formElement", void 0);
__decorate([
    i$3('.mdc-floating-label')
], TextFieldBase.prototype, "labelElement", void 0);
__decorate([
    i$3('.mdc-line-ripple')
], TextFieldBase.prototype, "lineRippleElement", void 0);
__decorate([
    i$3('mwc-notched-outline')
], TextFieldBase.prototype, "outlineElement", void 0);
__decorate([
    i$3('.mdc-notched-outline__notch')
], TextFieldBase.prototype, "notchElement", void 0);
__decorate([
    e$6({ type: String })
], TextFieldBase.prototype, "value", void 0);
__decorate([
    e$6({ type: String })
], TextFieldBase.prototype, "type", void 0);
__decorate([
    e$6({ type: String })
], TextFieldBase.prototype, "placeholder", void 0);
__decorate([
    e$6({ type: String }),
    observer(function (_newVal, oldVal) {
        if (oldVal !== undefined && this.label !== oldVal) {
            this.layout();
        }
    })
], TextFieldBase.prototype, "label", void 0);
__decorate([
    e$6({ type: String })
], TextFieldBase.prototype, "icon", void 0);
__decorate([
    e$6({ type: String })
], TextFieldBase.prototype, "iconTrailing", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true })
], TextFieldBase.prototype, "disabled", void 0);
__decorate([
    e$6({ type: Boolean })
], TextFieldBase.prototype, "required", void 0);
__decorate([
    e$6({ type: Number })
], TextFieldBase.prototype, "minLength", void 0);
__decorate([
    e$6({ type: Number })
], TextFieldBase.prototype, "maxLength", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true }),
    observer(function (_newVal, oldVal) {
        if (oldVal !== undefined && this.outlined !== oldVal) {
            this.layout();
        }
    })
], TextFieldBase.prototype, "outlined", void 0);
__decorate([
    e$6({ type: String })
], TextFieldBase.prototype, "helper", void 0);
__decorate([
    e$6({ type: Boolean })
], TextFieldBase.prototype, "validateOnInitialRender", void 0);
__decorate([
    e$6({ type: String })
], TextFieldBase.prototype, "validationMessage", void 0);
__decorate([
    e$6({ type: Boolean })
], TextFieldBase.prototype, "autoValidate", void 0);
__decorate([
    e$6({ type: String })
], TextFieldBase.prototype, "pattern", void 0);
__decorate([
    e$6({ type: String })
], TextFieldBase.prototype, "min", void 0);
__decorate([
    e$6({ type: String })
], TextFieldBase.prototype, "max", void 0);
__decorate([
    e$6({ type: String })
], TextFieldBase.prototype, "step", void 0);
__decorate([
    e$6({ type: Number })
], TextFieldBase.prototype, "size", void 0);
__decorate([
    e$6({ type: Boolean })
], TextFieldBase.prototype, "helperPersistent", void 0);
__decorate([
    e$6({ type: Boolean })
], TextFieldBase.prototype, "charCounter", void 0);
__decorate([
    e$6({ type: Boolean })
], TextFieldBase.prototype, "endAligned", void 0);
__decorate([
    e$6({ type: String })
], TextFieldBase.prototype, "prefix", void 0);
__decorate([
    e$6({ type: String })
], TextFieldBase.prototype, "suffix", void 0);
__decorate([
    e$6({ type: String })
], TextFieldBase.prototype, "name", void 0);
__decorate([
    e$6({ type: String })
], TextFieldBase.prototype, "inputMode", void 0);
__decorate([
    e$6({ type: Boolean })
], TextFieldBase.prototype, "readOnly", void 0);
__decorate([
    e$6({ type: String })
], TextFieldBase.prototype, "autocapitalize", void 0);
__decorate([
    t$2()
], TextFieldBase.prototype, "outlineOpen", void 0);
__decorate([
    t$2()
], TextFieldBase.prototype, "outlineWidth", void 0);
__decorate([
    t$2()
], TextFieldBase.prototype, "isUiValid", void 0);
__decorate([
    t$2()
], TextFieldBase.prototype, "focused", void 0);
__decorate([
    e$5({ passive: true })
], TextFieldBase.prototype, "handleInputChange", null);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$4 = i$6 `.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px}.mdc-line-ripple::before{z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-text-field--filled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field--filled .mdc-text-field__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-text-field--filled .mdc-text-field__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0, 0, 0, 0.87)}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.54)}}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.54)}}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}.mdc-text-field__affix{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-text-field--filled:hover .mdc-text-field__ripple::before,.mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:whitesmoke}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px, var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-text-field__ripple::before,.mdc-text-field--outlined .mdc-text-field__ripple::after{background-color:transparent;background-color:var(--mdc-ripple-color, transparent)}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:transparent}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0;transition:none}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px;line-height:1.5rem}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0, 0, 0, 0.38)}@media all{.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.38)}}@media all{.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.38)}}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-floating-label{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--leading{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:GrayText}}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled{background-color:#fafafa}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-text-field-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;opacity:0;will-change:opacity;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field__icon{align-self:center;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field__icon svg{display:block}.mdc-text-field__icon--leading{margin-left:16px;margin-right:8px}[dir=rtl] .mdc-text-field__icon--leading,.mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-text-field__icon--trailing{padding:12px;margin-left:0px;margin-right:0px}[dir=rtl] .mdc-text-field__icon--trailing,.mdc-text-field__icon--trailing[dir=rtl]{margin-left:0px;margin-right:0px}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-flex;flex-direction:column;outline:none}.mdc-text-field{width:100%}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-text-field-idle-line-color, rgba(0, 0, 0, 0.42))}.mdc-text-field:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-text-field-hover-line-color, rgba(0, 0, 0, 0.87))}.mdc-text-field.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06);border-bottom-color:var(--mdc-text-field-disabled-line-color, rgba(0, 0, 0, 0.06))}.mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field__input{direction:inherit}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38) )}:host(:not([disabled]):hover) :not(.mdc-text-field--invalid):not(.mdc-text-field--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-error-color, var(--mdc-theme-error, #b00020) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-character-counter,:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid .mdc-text-field__icon{color:var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input{color:var(--mdc-text-field-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg),:host(:not([disabled])) .mdc-text-field-helper-line:not(.mdc-text-field--invalid) .mdc-text-field-character-counter{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-text-field.mdc-text-field--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field .mdc-text-field__input,:host([disabled]) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-helper-text,:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-character-counter{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
let TextField = class TextField extends TextFieldBase {
};
TextField.styles = [styles$4];
TextField = __decorate([
    e$7('mwc-textfield')
], TextField);

/** A potentially `nullable` `TextField` that allows for selection of an SI
 * `multiplier` if an SI `unit` is given.
 *
 * NB: Use `maybeValue: string | null` instead of `value` if `nullable`! */
let OscdTextfield = class OscdTextfield extends TextField {
    constructor() {
        super();
        /** Whether [[`maybeValue`]] may be `null` */
        this.nullable = false;
        /** Selectable SI multipliers for a non-empty [[`unit`]]. */
        this.multipliers = [null, ''];
        this.multiplierIndex = 0;
        /** SI Unit, must be non-empty to allow for selecting a [[`multiplier`]].
         * Overrides `suffix`. */
        this.unit = '';
        this.isNull = false;
        /** The default `value` displayed if [[`maybeValue`]] is `null`. */
        this.defaultValue = '';
        /** Additional values that cause validation to fail. */
        this.reservedValues = [];
        // FIXME: workaround to allow disable of the whole component - need basic refactor
        this.disabledSwitch = false;
        this.nulled = null;
        // eslint-disable-next-line wc/no-constructor-attributes
        this.disabledSwitch = this.hasAttribute('disabled');
    }
    get multiplier() {
        var _a, _b;
        if (this.unit === '')
            return null;
        return ((_b = (_a = this.multipliers[this.multiplierIndex]) !== null && _a !== void 0 ? _a : this.multipliers[0]) !== null && _b !== void 0 ? _b : null);
    }
    set multiplier(value) {
        var _a;
        const index = this.multipliers.indexOf(value);
        if (index >= 0)
            this.multiplierIndex = index;
        this.suffix = ((_a = this.multiplier) !== null && _a !== void 0 ? _a : '') + this.unit;
    }
    get null() {
        return this.nullable && this.isNull;
    }
    set null(value) {
        if (!this.nullable || value === this.isNull)
            return;
        this.isNull = value;
        if (this.null)
            this.disable();
        else
            this.enable();
    }
    /** Replacement for `value`, can only be `null` if [[`nullable`]]. */
    get maybeValue() {
        return this.null ? null : this.value;
    }
    set maybeValue(value) {
        if (value === null)
            this.null = true;
        else {
            this.null = false;
            this.value = value;
        }
    }
    selectMultiplier(se) {
        this.multiplier = this.multipliers[se.detail.index];
    }
    enable() {
        if (this.nulled === null)
            return;
        this.value = this.nulled;
        this.nulled = null;
        this.helperPersistent = false;
        this.disabled = false;
    }
    disable() {
        if (this.nulled !== null)
            return;
        this.nulled = this.value;
        this.value = this.defaultValue;
        this.helperPersistent = true;
        this.disabled = true;
    }
    async firstUpdated() {
        var _a;
        await super.firstUpdated();
        if (this.multiplierMenu)
            this.multiplierMenu.anchor = (_a = this.multiplierButton) !== null && _a !== void 0 ? _a : null;
    }
    checkValidity() {
        if (this.reservedValues &&
            this.reservedValues.some(array => array === this.value)) {
            this.setCustomValidity('textfield.unique');
            return false;
        }
        this.setCustomValidity('');
        return super.checkValidity();
    }
    renderUnitSelector() {
        var _a;
        if (this.multipliers.length && this.unit)
            return y `<div style="position:relative;">
        <mwc-icon-button
          style="margin:5px;"
          icon="more"
          ?disabled=${this.null || this.disabledSwitch}
          @click=${() => { var _a; return (_a = this.multiplierMenu) === null || _a === void 0 ? void 0 : _a.show(); }}
        ></mwc-icon-button>
        <mwc-menu
          @selected=${this.selectMultiplier}
          fixed
          .anchor=${(_a = this.multiplierButton) !== null && _a !== void 0 ? _a : null}
          >${this.renderMulplierList()}</mwc-menu
        >
      </div>`;
        return y ``;
    }
    renderMulplierList() {
        return y `${this.multipliers.map(multiplier => y `<mwc-list-item ?selected=${multiplier === this.multiplier}
          >${multiplier === null
            ? 'textfield.noMultiplier'
            : multiplier}</mwc-list-item
        >`)}`;
    }
    renderSwitch() {
        if (this.nullable) {
            return y `<mwc-switch
        style="margin-left: 12px;"
        ?selected=${!this.null}
        ?disabled=${this.disabledSwitch}
        @click=${() => {
                this.null = !this.nullSwitch.selected;
                this.dispatchEvent(new Event('input'));
            }}
      ></mwc-switch>`;
        }
        return y ``;
    }
    render() {
        return y `
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        ${this.renderUnitSelector()}
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
    }
};
__decorate([
    e$6({ type: Boolean })
], OscdTextfield.prototype, "nullable", void 0);
__decorate([
    e$6({ type: Array })
], OscdTextfield.prototype, "multipliers", void 0);
__decorate([
    e$6({ type: String })
], OscdTextfield.prototype, "multiplier", null);
__decorate([
    e$6({ type: String })
], OscdTextfield.prototype, "unit", void 0);
__decorate([
    t$2()
], OscdTextfield.prototype, "null", null);
__decorate([
    e$6({ type: String })
], OscdTextfield.prototype, "maybeValue", null);
__decorate([
    e$6({ type: String })
], OscdTextfield.prototype, "defaultValue", void 0);
__decorate([
    e$6({ type: Array })
], OscdTextfield.prototype, "reservedValues", void 0);
__decorate([
    i$3('mwc-switch')
], OscdTextfield.prototype, "nullSwitch", void 0);
__decorate([
    i$3('mwc-menu')
], OscdTextfield.prototype, "multiplierMenu", void 0);
__decorate([
    i$3('mwc-icon-button')
], OscdTextfield.prototype, "multiplierButton", void 0);
OscdTextfield = __decorate([
    e$7('oscd-textfield')
], OscdTextfield);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s$1=(i,t)=>{var e,o;const r=i._$AN;if(void 0===r)return !1;for(const i of r)null===(o=(e=i)._$AO)||void 0===o||o.call(e,t,!1),s$1(i,t);return !0},o=i=>{let t,e;do{if(void 0===(t=i._$AM))break;e=t._$AN,e.delete(i),i=t;}while(0===(null==e?void 0:e.size))},r=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(void 0===e)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),l(t);}};function n$1(i){void 0!==this._$AN?(o(this),this._$AM=i,r(this)):this._$AM=i;}function h$1(i,t=!1,e=0){const r=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(r))for(let i=e;i<r.length;i++)s$1(r[i],!1),o(r[i]);else null!=r&&(s$1(r,!1),o(r));else s$1(this,i);}const l=i=>{var t,s,o,r;i.type==t$1.CHILD&&(null!==(t=(o=i)._$AP)&&void 0!==t||(o._$AP=h$1),null!==(s=(r=i)._$AQ)&&void 0!==s||(r._$AQ=n$1));};class c$1 extends i$2{constructor(){super(...arguments),this._$AN=void 0;}_$AT(i,t,e){super._$AT(i,t,e),r(this),this.isConnected=i._$AU;}_$AO(i,t=!0){var e,r;i!==this.isConnected&&(this.isConnected=i,i?null===(e=this.reconnected)||void 0===e||e.call(this):null===(r=this.disconnected)||void 0===r||r.call(this)),t&&(s$1(this,i),o(this));}setValue(t){if(e(this._$Ct))this._$Ct._$AI(t,this);else {const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0);}}disconnected(){}reconnected(){}}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class s{constructor(t){this.Y=t;}disconnect(){this.Y=void 0;}reconnect(t){this.Y=t;}deref(){return this.Y}}class i{constructor(){this.Z=void 0,this.q=void 0;}get(){return this.Z}pause(){var t;null!==(t=this.Z)&&void 0!==t||(this.Z=new Promise((t=>this.q=t)));}resume(){var t;null===(t=this.q)||void 0===t||t.call(this),this.Z=this.q=void 0;}}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n=t$1=>!t(t$1)&&"function"==typeof t$1.then;class h extends c$1{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cyt=[],this._$CK=new s(this),this._$CX=new i;}render(...s){var i;return null!==(i=s.find((t=>!n(t))))&&void 0!==i?i:x}update(s,i){const r=this._$Cyt;let e=r.length;this._$Cyt=i;const o=this._$CK,h=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<i.length&&!(t>this._$Cwt);t++){const s=i[t];if(!n(s))return this._$Cwt=t,s;t<e&&s===r[t]||(this._$Cwt=1073741823,e=0,Promise.resolve(s).then((async t=>{for(;h.get();)await h.get();const i=o.deref();if(void 0!==i){const r=i._$Cyt.indexOf(s);r>-1&&r<i._$Cwt&&(i._$Cwt=r,i.setValue(t));}})));}return x}disconnected(){this._$CK.disconnect(),this._$CX.pause();}reconnected(){this._$CK.reconnect(this),this._$CX.resume();}}const c=e$1(h);

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class CheckboxBase extends FormElement {
    constructor() {
        super(...arguments);
        this.checked = false;
        this.indeterminate = false;
        this.disabled = false;
        this.name = '';
        this.value = 'on';
        /**
         * Touch target extends beyond visual boundary of a component by default.
         * Set to `true` to remove touch target added to the component.
         * @see https://material.io/design/usability/accessibility.html
         */
        this.reducedTouchTarget = false;
        this.animationClass = '';
        this.shouldRenderRipple = false;
        this.focused = false;
        // MDC Foundation is unused
        this.mdcFoundationClass = undefined;
        this.mdcFoundation = undefined;
        this.rippleElement = null;
        this.rippleHandlers = new RippleHandlers(() => {
            this.shouldRenderRipple = true;
            this.ripple.then((v) => this.rippleElement = v);
            return this.ripple;
        });
    }
    createAdapter() {
        return {};
    }
    update(changedProperties) {
        const oldIndeterminate = changedProperties.get('indeterminate');
        const oldChecked = changedProperties.get('checked');
        const oldDisabled = changedProperties.get('disabled');
        if (oldIndeterminate !== undefined || oldChecked !== undefined ||
            oldDisabled !== undefined) {
            const oldState = this.calculateAnimationStateName(!!oldChecked, !!oldIndeterminate, !!oldDisabled);
            const newState = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
            this.animationClass = `${oldState}-${newState}`;
        }
        super.update(changedProperties);
    }
    calculateAnimationStateName(checked, indeterminate, disabled) {
        if (disabled) {
            return 'disabled';
        }
        else if (indeterminate) {
            return 'indeterminate';
        }
        else if (checked) {
            return 'checked';
        }
        else {
            return 'unchecked';
        }
    }
    // TODO(dfreedm): Make this use selected as a param after Polymer/internal#739
    /** @soyTemplate */
    renderRipple() {
        return this.shouldRenderRipple ? this.renderRippleTemplate() : '';
    }
    /** @soyTemplate */
    renderRippleTemplate() {
        return y `<mwc-ripple
        .disabled="${this.disabled}"
        unbounded></mwc-ripple>`;
    }
    /**
     * @soyTemplate
     * @soyAttributes checkboxAttributes: input
     * @soyClasses checkboxClasses: .mdc-checkbox
     */
    render() {
        const selected = this.indeterminate || this.checked;
        /* eslint-disable eqeqeq */
        // tslint:disable:triple-equals
        /** @classMap */
        const classes = {
            'mdc-checkbox--disabled': this.disabled,
            'mdc-checkbox--selected': selected,
            'mdc-checkbox--touch': !this.reducedTouchTarget,
            'mdc-ripple-upgraded--background-focused': this.focused,
            // transition animiation classes
            'mdc-checkbox--anim-checked-indeterminate': this.animationClass == 'checked-indeterminate',
            'mdc-checkbox--anim-checked-unchecked': this.animationClass == 'checked-unchecked',
            'mdc-checkbox--anim-indeterminate-checked': this.animationClass == 'indeterminate-checked',
            'mdc-checkbox--anim-indeterminate-unchecked': this.animationClass == 'indeterminate-unchecked',
            'mdc-checkbox--anim-unchecked-checked': this.animationClass == 'unchecked-checked',
            'mdc-checkbox--anim-unchecked-indeterminate': this.animationClass == 'unchecked-indeterminate',
        };
        // tslint:enable:triple-equals
        /* eslint-enable eqeqeq */
        const ariaChecked = this.indeterminate ? 'mixed' : undefined;
        return y `
      <div class="mdc-checkbox mdc-checkbox--upgraded ${o$1(classes)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${l$2(this.name)}"
              aria-checked="${l$2(ariaChecked)}"
              aria-label="${l$2(this.ariaLabel)}"
              aria-labelledby="${l$2(this.ariaLabelledBy)}"
              aria-describedby="${l$2(this.ariaDescribedBy)}"
              data-indeterminate="${this.indeterminate ? 'true' : 'false'}"
              ?disabled="${this.disabled}"
              .indeterminate="${this.indeterminate}"
              .checked="${this.checked}"
              .value="${this.value}"
              @change="${this.handleChange}"
              @focus="${this.handleFocus}"
              @blur="${this.handleBlur}"
              @mousedown="${this.handleRippleMouseDown}"
              @mouseenter="${this.handleRippleMouseEnter}"
              @mouseleave="${this.handleRippleMouseLeave}"
              @touchstart="${this.handleRippleTouchStart}"
              @touchend="${this.handleRippleDeactivate}"
              @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-checkbox__background"
          @animationend="${this.resetAnimationClass}">
          <svg class="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
        ${this.renderRipple()}
      </div>`;
    }
    setFormData(formData) {
        if (this.name && this.checked) {
            formData.append(this.name, this.value);
        }
    }
    handleFocus() {
        this.focused = true;
        this.handleRippleFocus();
    }
    handleBlur() {
        this.focused = false;
        this.handleRippleBlur();
    }
    handleRippleMouseDown(event) {
        const onUp = () => {
            window.removeEventListener('mouseup', onUp);
            this.handleRippleDeactivate();
        };
        window.addEventListener('mouseup', onUp);
        this.rippleHandlers.startPress(event);
    }
    handleRippleTouchStart(event) {
        this.rippleHandlers.startPress(event);
    }
    handleRippleDeactivate() {
        this.rippleHandlers.endPress();
    }
    handleRippleMouseEnter() {
        this.rippleHandlers.startHover();
    }
    handleRippleMouseLeave() {
        this.rippleHandlers.endHover();
    }
    handleRippleFocus() {
        this.rippleHandlers.startFocus();
    }
    handleRippleBlur() {
        this.rippleHandlers.endFocus();
    }
    handleChange() {
        this.checked = this.formElement.checked;
        this.indeterminate = this.formElement.indeterminate;
    }
    resetAnimationClass() {
        this.animationClass = '';
    }
    get isRippleActive() {
        var _a;
        return ((_a = this.rippleElement) === null || _a === void 0 ? void 0 : _a.isActive) || false;
    }
}
__decorate([
    i$3('.mdc-checkbox')
], CheckboxBase.prototype, "mdcRoot", void 0);
__decorate([
    i$3('input')
], CheckboxBase.prototype, "formElement", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true })
], CheckboxBase.prototype, "checked", void 0);
__decorate([
    e$6({ type: Boolean })
], CheckboxBase.prototype, "indeterminate", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true })
], CheckboxBase.prototype, "disabled", void 0);
__decorate([
    e$6({ type: String, reflect: true })
], CheckboxBase.prototype, "name", void 0);
__decorate([
    e$6({ type: String })
], CheckboxBase.prototype, "value", void 0);
__decorate([
    ariaProperty,
    e$6({ type: String, attribute: 'aria-label' })
], CheckboxBase.prototype, "ariaLabel", void 0);
__decorate([
    ariaProperty,
    e$6({ type: String, attribute: 'aria-labelledby' })
], CheckboxBase.prototype, "ariaLabelledBy", void 0);
__decorate([
    ariaProperty,
    e$6({ type: String, attribute: 'aria-describedby' })
], CheckboxBase.prototype, "ariaDescribedBy", void 0);
__decorate([
    e$6({ type: Boolean })
], CheckboxBase.prototype, "reducedTouchTarget", void 0);
__decorate([
    t$2()
], CheckboxBase.prototype, "animationClass", void 0);
__decorate([
    t$2()
], CheckboxBase.prototype, "shouldRenderRipple", void 0);
__decorate([
    t$2()
], CheckboxBase.prototype, "focused", void 0);
__decorate([
    e$3('mwc-ripple')
], CheckboxBase.prototype, "ripple", void 0);
__decorate([
    e$5({ passive: true })
], CheckboxBase.prototype, "handleRippleTouchStart", null);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$3 = i$6 `.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{border-color:CanvasText}}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{border-color:CanvasText}}@media all and (-ms-high-contrast: none){.mdc-checkbox .mdc-checkbox__focus-ring{display:none}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
let Checkbox = class Checkbox extends CheckboxBase {
};
Checkbox.styles = [styles$3];
Checkbox = __decorate([
    e$7('mwc-checkbox')
], Checkbox);

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class CheckListItemBase extends ListItemBase {
    constructor() {
        super(...arguments);
        this.left = false;
        this.graphic = 'control';
    }
    render() {
        const checkboxClasses = {
            'mdc-deprecated-list-item__graphic': this.left,
            'mdc-deprecated-list-item__meta': !this.left,
        };
        const text = this.renderText();
        const graphic = this.graphic && this.graphic !== 'control' && !this.left ?
            this.renderGraphic() :
            y ``;
        const meta = this.hasMeta && this.left ? this.renderMeta() : y ``;
        const ripple = this.renderRipple();
        return y `
      ${ripple}
      ${graphic}
      ${this.left ? '' : text}
      <span class=${o$1(checkboxClasses)}>
        <mwc-checkbox
            reducedTouchTarget
            tabindex=${this.tabindex}
            .checked=${this.selected}
            ?disabled=${this.disabled}
            @change=${this.onChange}>
        </mwc-checkbox>
      </span>
      ${this.left ? text : ''}
      ${meta}`;
    }
    async onChange(evt) {
        const checkbox = evt.target;
        const changeFromProp = this.selected === checkbox.checked;
        if (!changeFromProp) {
            this._skipPropRequest = true;
            this.selected = checkbox.checked;
            await this.updateComplete;
            this._skipPropRequest = false;
        }
    }
}
__decorate([
    i$3('slot')
], CheckListItemBase.prototype, "slotElement", void 0);
__decorate([
    i$3('mwc-checkbox')
], CheckListItemBase.prototype, "checkboxElement", void 0);
__decorate([
    e$6({ type: Boolean })
], CheckListItemBase.prototype, "left", void 0);
__decorate([
    e$6({ type: String, reflect: true })
], CheckListItemBase.prototype, "graphic", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$2 = i$6 `:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let CheckListItem = class CheckListItem extends CheckListItemBase {
};
CheckListItem.styles = [styles$c, styles$2];
CheckListItem = __decorate([
    e$7('mwc-check-list-item')
], CheckListItem);

function slotItem(item) {
    if (!item.closest('oscd-filtered-list') || !item.parentElement)
        return item;
    if (item.parentElement instanceof OscdFilteredList)
        return item;
    return slotItem(item.parentElement);
}
function hideFiltered(item, searchText) {
    const itemInnerText = `${item.innerText}\n`;
    const childInnerText = Array.from(item.children)
        .map(child => child.innerText)
        .join('\n');
    const { value } = item;
    const filterTarget = (itemInnerText +
        childInnerText +
        value).toUpperCase();
    const terms = searchText
        .toUpperCase()
        .replace(/[.+^${}()|[\]\\]/g, '\\$&')
        .trim()
        .split(/\s+/g);
    // eslint-disable-next-line no-unused-expressions
    (terms.length === 1 && terms[0] === '') ||
        terms.every(term => {
            // regexp escape
            const reTerm = new RegExp(`*${term}*`.replace(/\*/g, '.*').replace(/\?/g, '.{1}'), 'i');
            return reTerm.test(filterTarget);
        })
        ? slotItem(item).classList.remove('hidden')
        : slotItem(item).classList.add('hidden');
}
/**
 * A mwc-list with mwc-textfield that filters the list items for given or separated terms
 */
let OscdFilteredList = class OscdFilteredList extends ListBase {
    constructor() {
        super();
        /** Whether the check all option (checkbox next to search text field) is activated */
        this.disableCheckAll = false;
        this.addEventListener('selected', () => {
            this.requestUpdate();
        });
    }
    get existCheckListItem() {
        return this.items.some(item => item instanceof CheckListItem);
    }
    get isAllSelected() {
        return this.items
            .filter(item => !item.disabled)
            .filter(item => item instanceof CheckListItem)
            .every(checkItem => checkItem.selected);
    }
    get isSomeSelected() {
        return this.items
            .filter(item => !item.disabled)
            .filter(item => item instanceof CheckListItem)
            .some(checkItem => checkItem.selected);
    }
    onCheckAll() {
        const select = !this.isAllSelected;
        this.items
            .filter(item => !item.disabled && !item.classList.contains('hidden'))
            .forEach(item => {
            // eslint-disable-next-line no-param-reassign
            item.selected = select;
        });
    }
    onFilterInput() {
        Array.from(this.querySelectorAll('mwc-list-item, mwc-check-list-item, mwc-radio-list-item')).forEach(item => hideFiltered(item, this.searchField.value));
    }
    onListItemConnected(e) {
        super.onListItemConnected(e);
        this.requestUpdate();
    }
    renderCheckAll() {
        return this.existCheckListItem && !this.disableCheckAll
            ? y `<mwc-formfield class="checkall"
          ><mwc-checkbox
            ?indeterminate=${!this.isAllSelected && this.isSomeSelected}
            ?checked=${this.isAllSelected}
            @change=${() => {
                this.onCheckAll();
            }}
          ></mwc-checkbox
        ></mwc-formfield>`
            : y ``;
    }
    render() {
        var _a, _b;
        return y `<div id="tfcontainer">
        <abbr title="${(_a = this.searchFieldLabel) !== null && _a !== void 0 ? _a : 'filter'}"
          ><mwc-textfield
            label="${(_b = this.searchFieldLabel) !== null && _b !== void 0 ? _b : ''}"
            iconTrailing="search"
            outlined
            @input=${() => this.onFilterInput()}
          ></mwc-textfield
        ></abbr>
        ${this.renderCheckAll()}
      </div>
      ${super.render()}`;
    }
};
OscdFilteredList.styles = i$6 `
    ${r$3(List.styles)}

    #tfcontainer {
      display: flex;
      flex: auto;
    }

    ::slotted(.hidden) {
      display: none;
    }

    abbr {
      display: flex;
      flex: auto;
      margin: 8px;
      text-decoration: none;
      border-bottom: none;
    }

    mwc-textfield {
      width: 100%;
      --mdc-shape-small: 28px;
    }

    mwc-formfield.checkall {
      padding-right: 8px;
    }

    .mdc-list {
      padding-inline-start: 0px;
    }
  `;
__decorate([
    e$6({ type: String })
], OscdFilteredList.prototype, "searchFieldLabel", void 0);
__decorate([
    e$6({ type: Boolean })
], OscdFilteredList.prototype, "disableCheckAll", void 0);
__decorate([
    t$2()
], OscdFilteredList.prototype, "existCheckListItem", null);
__decorate([
    t$2()
], OscdFilteredList.prototype, "isAllSelected", null);
__decorate([
    t$2()
], OscdFilteredList.prototype, "isSomeSelected", null);
__decorate([
    i$3('mwc-textfield')
], OscdFilteredList.prototype, "searchField", void 0);
OscdFilteredList = __decorate([
    e$7('oscd-filtered-list')
], OscdFilteredList);

function depth(t, mem = new WeakSet()) {
    if (mem.has(t))
        return Infinity;
    switch (t === null || t === void 0 ? void 0 : t.constructor) {
        case Object:
        case Array:
            mem.add(t);
            return (1 +
                Math.max(-1, ...Object.values(t).map(_ => depth(_, mem))));
        default:
            return 0;
    }
}
const waitingList = y `<div class="column">
  <mwc-list
    ><mwc-list-item noninteractive hasMeta
      >loading<mwc-icon slot="meta">pending</mwc-icon></mwc-list-item
    ></mwc-list
  >
</div>`;
let OscdFinderList = class OscdFinderList extends s$3 {
    constructor() {
        super(...arguments);
        this.selection = {};
        this.multi = false;
        // eslint-disable-next-line class-methods-use-this
        this.read = async (path) => ({
            path,
            header: y `<h2>${`/${path.join('/')}`}</h2>`,
            entries: [],
        });
        this.loaded = Promise.resolve();
    }
    get depth() {
        return depth(this.selection);
    }
    get paths() {
        return this.getPaths();
    }
    set paths(paths) {
        const selection = {};
        for (const path of paths) {
            let i = selection;
            for (const name of path) {
                if (!Object.prototype.hasOwnProperty.call(i, name))
                    i[name] = {};
                i = i[name];
            }
        }
        this.selection = selection;
    }
    get path() {
        var _a;
        return (_a = this.paths[0]) !== null && _a !== void 0 ? _a : [];
    }
    set path(path) {
        this.paths = [path];
    }
    // eslint-disable-next-line class-methods-use-this
    getTitle(path) {
        return path.join('/');
    }
    // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
    getDisplayString(entry, path) {
        return entry;
    }
    // eslint-disable-next-line no-shadow
    getPaths(depth) {
        let paths = Object.keys(this.selection).map(key => [key]);
        let i = depth !== null && depth !== void 0 ? depth : this.depth - 1;
        // eslint-disable-next-line no-plusplus
        while (i-- > 0) {
            paths = paths.flatMap(path => {
                let dir = this.selection;
                for (const entry of path)
                    dir = dir[entry]; // recursive descent
                const newPaths = Object.keys(dir).map(entry => path.concat(entry));
                return newPaths.length === 0 ? [path] : newPaths;
            });
        }
        return depth === undefined
            ? paths
            : paths.filter(path => path.length > depth);
    }
    multiSelect(event, path, clicked) {
        let dir = this.selection;
        for (const entry of path)
            dir = dir[entry]; // recursive descent
        if (dir && dir[clicked])
            delete dir[clicked];
        // deselect if selected
        else
            dir[clicked] = {}; // select otherwise
    }
    singleSelect(event, path, clicked) {
        if (this.path[path.length] === clicked)
            this.path = path;
        // deselect if selected
        else
            this.path = path.concat(clicked); // select otherwise
    }
    async select(event, path) {
        const clicked = event.target.selected.value;
        if (this.multi)
            this.multiSelect(event, path, clicked);
        else
            this.singleSelect(event, path, clicked);
        this.requestUpdate();
        await this.updateComplete;
        await new Promise(resolve => {
            setTimeout(resolve, 250);
        });
        this.container.scrollLeft = 1000 * this.depth;
    }
    renderDirectory(path, entries) {
        return y `<oscd-filtered-list
      @selected=${(e) => this.select(e, path)}
      searchFieldLabel="${this.getTitle(path)}"
    >
      ${entries.map(entry => y `<mwc-list-item
            value="${entry}"
            ?activated=${this.getPaths(path.length)
            .map(p => JSON.stringify(p))
            .includes(JSON.stringify(path.concat(entry)))}
            >${this.getDisplayString(entry, path)}</mwc-list-item
          >`)}
    </oscd-filtered-list>`;
    }
    async renderColumn(column) {
        const paths = this.getPaths(column);
        const dirs = paths.map(path => this.read(path));
        const lists = [];
        for await (const { header, entries, path } of dirs) {
            if (header || entries.length > 0)
                lists.push(y `${header} ${this.renderDirectory(path, entries)}`);
        }
        if (lists.length === 0)
            return y ``;
        return y `<div class="column">${lists}</div>`;
    }
    render() {
        const columns = new Array(this.depth)
            .fill(0)
            .map((_, index) => this.renderColumn(index));
        this.loaded = Promise.allSettled(columns).then();
        return y `<div class="pane">
      ${columns.map(column => c(column, waitingList))}
    </div>`;
    }
};
OscdFinderList.styles = i$6 `
    div.pane {
      display: flex;
      flex-direction: row;
      overflow: auto;
    }

    h2 {
      color: var(--mdc-theme-primary);
    }

    section {
      display: flex;
      flex-direction: column;
      width: max-content;
    }

    section > mwc-list {
      margin-top: 76px;
    }

    a {
      font-weight: 600;
      font-variant: small-caps;
      text-transform: lowercase;
      text-decoration: none;
      color: var(--mdc-theme-primary);
    }

    a:link {
      color: var(--mdc-theme-error);
    }

    a:visited {
      color: var(--mdc-theme-secondary);
    }
  `;
__decorate([
    e$6({ type: Object })
], OscdFinderList.prototype, "selection", void 0);
__decorate([
    e$6({ type: Boolean })
], OscdFinderList.prototype, "multi", void 0);
__decorate([
    e$6({ type: Number })
], OscdFinderList.prototype, "depth", null);
__decorate([
    e$6({ type: Array })
], OscdFinderList.prototype, "paths", null);
__decorate([
    e$6({ type: Array })
], OscdFinderList.prototype, "path", null);
__decorate([
    e$6({ attribute: false })
], OscdFinderList.prototype, "read", void 0);
__decorate([
    e$6({ attribute: false })
], OscdFinderList.prototype, "loaded", void 0);
__decorate([
    i$3('div')
], OscdFinderList.prototype, "container", void 0);
OscdFinderList = __decorate([
    e$7('oscd-finder-list')
], OscdFinderList);

const tAbstractConductingEquipment = [
    'TransformerWinding',
    'ConductingEquipment',
];
const tEquipment = [
    'GeneralEquipment',
    'PowerTransformer',
    ...tAbstractConductingEquipment,
];
const tEquipmentContainer = ['Substation', 'VoltageLevel', 'Bay'];
const tGeneralEquipmentContainer = ['Process', 'Line'];
const tAbstractEqFuncSubFunc = ['EqSubFunction', 'EqFunction'];
const tPowerSystemResource = [
    'SubFunction',
    'Function',
    'TapChanger',
    'SubEquipment',
    ...tEquipment,
    ...tEquipmentContainer,
    ...tGeneralEquipmentContainer,
    ...tAbstractEqFuncSubFunc,
];
const tLNodeContainer = ['ConnectivityNode', ...tPowerSystemResource];
const tCertificate = ['GOOSESecurity', 'SMVSecurity'];
const tNaming = ['SubNetwork', ...tCertificate, ...tLNodeContainer];
const tAbstractDataAttribute = ['BDA', 'DA'];
const tControlWithIEDName = ['SampledValueControl', 'GSEControl'];
const tControlWithTriggerOpt = ['LogControl', 'ReportControl'];
const tControl = [...tControlWithIEDName, ...tControlWithTriggerOpt];
const tControlBlock = ['GSE', 'SMV'];
const tUnNaming = [
    'ConnectedAP',
    'PhysConn',
    'SDO',
    'DO',
    'DAI',
    'SDI',
    'DOI',
    'Inputs',
    'RptEnabled',
    'Server',
    'ServerAt',
    'SettingControl',
    'Communication',
    'Log',
    'LDevice',
    'DataSet',
    'AccessPoint',
    'IED',
    'NeutralPoint',
    ...tControl,
    ...tControlBlock,
    ...tAbstractDataAttribute,
];
const tAnyLN = ['LN0', 'LN'];
const tAnyContentFromOtherNamespace = [
    'Text',
    'Private',
    'Hitem',
    'AccessControl',
];
const tCert = ['Subject', 'IssuerName'];
const tDurationInMilliSec = ['MinTime', 'MaxTime'];
const tIDNaming = ['LNodeType', 'DOType', 'DAType', 'EnumType'];
const tServiceYesNo = [
    'FileHandling',
    'TimeSyncProt',
    'CommProt',
    'SGEdit',
    'ConfSG',
    'GetDirectory',
    'GetDataObjectDefinition',
    'DataObjectDirectory',
    'GetDataSetValue',
    'SetDataSetValue',
    'DataSetDirectory',
    'ReadWrite',
    'TimerActivatedControl',
    'GetCBValues',
    'GSEDir',
    'ConfLdName',
];
const tServiceWithMaxAndMaxAttributes = ['DynDataSet', 'ConfDataSet'];
const tServiceWithMax = [
    'GSSE',
    'GOOSE',
    'ConfReportControl',
    'SMVsc',
    ...tServiceWithMaxAndMaxAttributes,
];
const tServiceWithMaxNonZero = ['ConfLogControl', 'ConfSigRef'];
const tServiceSettings = [
    'ReportSettings',
    'LogSettings',
    'GSESettings',
    'SMVSettings',
];
const tBaseElement = ['SCL', ...tNaming, ...tUnNaming, ...tIDNaming];
const sCLTags = [
    ...tBaseElement,
    ...tAnyContentFromOtherNamespace,
    'Header',
    'LNode',
    'Val',
    'Voltage',
    'Services',
    ...tCert,
    ...tDurationInMilliSec,
    'Association',
    'FCDA',
    'ClientLN',
    'IEDName',
    'ExtRef',
    'Protocol',
    ...tAnyLN,
    ...tServiceYesNo,
    'DynAssociation',
    'SettingGroups',
    ...tServiceWithMax,
    ...tServiceWithMaxNonZero,
    ...tServiceSettings,
    'ConfLNs',
    'ClientServices',
    'SupSubscription',
    'ValueHandling',
    'RedProt',
    'McSecurity',
    'KDC',
    'Address',
    'P',
    'ProtNs',
    'EnumVal',
    'Terminal',
    'BitRate',
    'Authentication',
    'DataTypeTemplates',
    'History',
    'OptFields',
    'SmvOpts',
    'TrgOps',
    'SamplesPerSec',
    'SmpRate',
    'SecPerSamples',
];
const tagSet = new Set(sCLTags);
function isSCLTag(tag) {
    return tagSet.has(tag);
}
const tBaseNameSequence = ['Text', 'Private'];
const tNamingSequence = [...tBaseNameSequence];
const tUnNamingSequence = [...tBaseNameSequence];
const tIDNamingSequence = [...tBaseNameSequence];
const tAbstractDataAttributeSequence = [...tUnNamingSequence, 'Val'];
const tLNodeContainerSequence = [...tNamingSequence, 'LNode'];
const tPowerSystemResourceSequence = [...tLNodeContainerSequence];
const tEquipmentSequence = [...tPowerSystemResourceSequence];
const tEquipmentContainerSequence = [
    ...tPowerSystemResourceSequence,
    'PowerTransformer',
    'GeneralEquipment',
];
const tAbstractConductingEquipmentSequence = [
    ...tEquipmentSequence,
    'Terminal',
];
const tControlBlockSequence = [...tUnNamingSequence, 'Address'];
const tControlSequence = [...tNamingSequence];
const tControlWithIEDNameSequence = [...tControlSequence, 'IEDName'];
const tAnyLNSequence = [
    ...tUnNamingSequence,
    'DataSet',
    'ReportControl',
    'LogControl',
    'DOI',
    'Inputs',
    'Log',
];
const tGeneralEquipmentContainerSequence = [
    ...tPowerSystemResourceSequence,
    'GeneralEquipment',
    'Function',
];
const tControlWithTriggerOptSequence = [...tControlSequence, 'TrgOps'];
const tAbstractEqFuncSubFuncSequence = [
    ...tPowerSystemResourceSequence,
    'GeneralEquipment',
    'EqSubFunction',
];
const relatives = {
    AccessControl: {
        parents: ['LDevice'],
        children: [],
    },
    AccessPoint: {
        parents: ['IED'],
        children: [
            ...tNamingSequence,
            'Server',
            'LN',
            'ServerAt',
            'Services',
            'GOOSESecurity',
            'SMVSecurity',
        ],
    },
    Address: {
        parents: ['ConnectedAP', 'GSE', 'SMV'],
        children: ['P'],
    },
    Association: {
        parents: ['Server'],
        children: [],
    },
    Authentication: {
        parents: ['Server'],
        children: [],
    },
    BDA: {
        parents: ['DAType'],
        children: [...tAbstractDataAttributeSequence],
    },
    BitRate: {
        parents: ['SubNetwork'],
        children: [],
    },
    Bay: {
        parents: ['VoltageLevel'],
        children: [
            ...tEquipmentContainerSequence,
            'ConductingEquipment',
            'ConnectivityNode',
            'Function',
        ],
    },
    ClientLN: {
        parents: ['RptEnabled'],
        children: [],
    },
    ClientServices: {
        parents: ['Services'],
        children: ['TimeSyncProt', 'McSecurity'],
    },
    CommProt: {
        parents: ['Services'],
        children: [],
    },
    Communication: {
        parents: ['SCL'],
        children: [...tUnNamingSequence, 'SubNetwork'],
    },
    ConductingEquipment: {
        parents: ['Process', 'Line', 'SubFunction', 'Function', 'Bay'],
        children: [
            ...tAbstractConductingEquipmentSequence,
            'EqFunction',
            'SubEquipment',
        ],
    },
    ConfDataSet: {
        parents: ['Services'],
        children: [],
    },
    ConfLdName: {
        parents: ['Services'],
        children: [],
    },
    ConfLNs: {
        parents: ['Services'],
        children: [],
    },
    ConfLogControl: {
        parents: ['Services'],
        children: [],
    },
    ConfReportControl: {
        parents: ['Services'],
        children: [],
    },
    ConfSG: {
        parents: ['SettingGroups'],
        children: [],
    },
    ConfSigRef: {
        parents: ['Services'],
        children: [],
    },
    ConnectedAP: {
        parents: ['SubNetwork'],
        children: [...tUnNamingSequence, 'Address', 'GSE', 'SMV', 'PhysConn'],
    },
    ConnectivityNode: {
        parents: ['Bay', 'Line'],
        children: [...tLNodeContainerSequence],
    },
    DA: {
        parents: ['DOType'],
        children: [...tAbstractDataAttributeSequence],
    },
    DAI: {
        parents: ['DOI', 'SDI'],
        children: [...tUnNamingSequence, 'Val'],
    },
    DAType: {
        parents: ['DataTypeTemplates'],
        children: [...tIDNamingSequence, 'BDA', 'ProtNs'],
    },
    DO: {
        parents: ['LNodeType'],
        children: [...tUnNamingSequence],
    },
    DOI: {
        parents: [...tAnyLN],
        children: [...tUnNamingSequence, 'SDI', 'DAI'],
    },
    DOType: {
        parents: ['DataTypeTemplates'],
        children: [...tIDNamingSequence, 'SDO', 'DA'],
    },
    DataObjectDirectory: {
        parents: ['Services'],
        children: [],
    },
    DataSet: {
        parents: [...tAnyLN],
        children: [...tNamingSequence, 'FCDA'],
    },
    DataSetDirectory: {
        parents: ['Services'],
        children: [],
    },
    DataTypeTemplates: {
        parents: ['SCL'],
        children: ['LNodeType', 'DOType', 'DAType', 'EnumType'],
    },
    DynAssociation: {
        parents: ['Services'],
        children: [],
    },
    DynDataSet: {
        parents: ['Services'],
        children: [],
    },
    EnumType: {
        parents: ['DataTypeTemplates'],
        children: [...tIDNamingSequence, 'EnumVal'],
    },
    EnumVal: {
        parents: ['EnumType'],
        children: [],
    },
    EqFunction: {
        parents: [
            'GeneralEquipment',
            'TapChanger',
            'TransformerWinding',
            'PowerTransformer',
            'SubEquipment',
            'ConductingEquipment',
        ],
        children: [...tAbstractEqFuncSubFuncSequence],
    },
    EqSubFunction: {
        parents: ['EqSubFunction', 'EqFunction'],
        children: [...tAbstractEqFuncSubFuncSequence],
    },
    ExtRef: {
        parents: ['Inputs'],
        children: [],
    },
    FCDA: {
        parents: ['DataSet'],
        children: [],
    },
    FileHandling: {
        parents: ['Services'],
        children: [],
    },
    Function: {
        parents: ['Bay', 'VoltageLevel', 'Substation', 'Process', 'Line'],
        children: [
            ...tPowerSystemResourceSequence,
            'SubFunction',
            'GeneralEquipment',
            'ConductingEquipment',
        ],
    },
    GeneralEquipment: {
        parents: [
            'SubFunction',
            'Function',
            ...tGeneralEquipmentContainer,
            ...tAbstractEqFuncSubFunc,
            ...tEquipmentContainer,
        ],
        children: [...tEquipmentSequence, 'EqFunction'],
    },
    GetCBValues: {
        parents: ['Services'],
        children: [],
    },
    GetDataObjectDefinition: {
        parents: ['Services'],
        children: [],
    },
    GetDataSetValue: {
        parents: ['Services'],
        children: [],
    },
    GetDirectory: {
        parents: ['Services'],
        children: [],
    },
    GOOSE: {
        parents: ['Services'],
        children: [],
    },
    GOOSESecurity: {
        parents: ['AccessPoint'],
        children: [...tNamingSequence, 'Subject', 'IssuerName'],
    },
    GSE: {
        parents: ['ConnectedAP'],
        children: [...tControlBlockSequence, 'MinTime', 'MaxTime'],
    },
    GSEDir: {
        parents: ['Services'],
        children: [],
    },
    GSEControl: {
        parents: ['LN0'],
        children: [...tControlWithIEDNameSequence, 'Protocol'],
    },
    GSESettings: {
        parents: ['Services'],
        children: [],
    },
    GSSE: {
        parents: ['Services'],
        children: [],
    },
    Header: {
        parents: ['SCL'],
        children: ['Text', 'History'],
    },
    History: {
        parents: ['Header'],
        children: ['Hitem'],
    },
    Hitem: {
        parents: ['History'],
        children: [],
    },
    IED: {
        parents: ['SCL'],
        children: [...tUnNamingSequence, 'Services', 'AccessPoint', 'KDC'],
    },
    IEDName: {
        parents: ['GSEControl', 'SampledValueControl'],
        children: [],
    },
    Inputs: {
        parents: [...tAnyLN],
        children: [...tUnNamingSequence, 'ExtRef'],
    },
    IssuerName: {
        parents: ['GOOSESecurity', 'SMVSecurity'],
        children: [],
    },
    KDC: {
        parents: ['IED'],
        children: [],
    },
    LDevice: {
        parents: ['Server'],
        children: [...tUnNamingSequence, 'LN0', 'LN', 'AccessControl'],
    },
    LN: {
        parents: ['AccessPoint', 'LDevice'],
        children: [...tAnyLNSequence],
    },
    LN0: {
        parents: ['LDevice'],
        children: [
            ...tAnyLNSequence,
            'GSEControl',
            'SampledValueControl',
            'SettingControl',
        ],
    },
    LNode: {
        parents: [...tLNodeContainer],
        children: [...tUnNamingSequence],
    },
    LNodeType: {
        parents: ['DataTypeTemplates'],
        children: [...tIDNamingSequence, 'DO'],
    },
    Line: {
        parents: ['Process', 'SCL'],
        children: [
            ...tGeneralEquipmentContainerSequence,
            'Voltage',
            'ConductingEquipment',
        ],
    },
    Log: {
        parents: [...tAnyLN],
        children: [...tUnNamingSequence],
    },
    LogControl: {
        parents: [...tAnyLN],
        children: [...tControlWithTriggerOptSequence],
    },
    LogSettings: {
        parents: ['Services'],
        children: [],
    },
    MaxTime: {
        parents: ['GSE'],
        children: [],
    },
    McSecurity: {
        parents: ['GSESettings', 'SMVSettings', 'ClientServices'],
        children: [],
    },
    MinTime: {
        parents: ['GSE'],
        children: [],
    },
    NeutralPoint: {
        parents: ['TransformerWinding'],
        children: [...tUnNamingSequence],
    },
    OptFields: {
        parents: ['ReportControl'],
        children: [],
    },
    P: {
        parents: ['Address', 'PhysConn'],
        children: [],
    },
    PhysConn: {
        parents: ['ConnectedAP'],
        children: [...tUnNamingSequence, 'P'],
    },
    PowerTransformer: {
        parents: [...tEquipmentContainer],
        children: [
            ...tEquipmentSequence,
            'TransformerWinding',
            'SubEquipment',
            'EqFunction',
        ],
    },
    Private: {
        parents: [],
        children: [],
    },
    Process: {
        parents: ['Process', 'SCL'],
        children: [
            ...tGeneralEquipmentContainerSequence,
            'ConductingEquipment',
            'Substation',
            'Line',
            'Process',
        ],
    },
    ProtNs: {
        parents: ['DAType', 'DA'],
        children: [],
    },
    Protocol: {
        parents: ['GSEControl', 'SampledValueControl'],
        children: [],
    },
    ReadWrite: {
        parents: ['Services'],
        children: [],
    },
    RedProt: {
        parents: ['Services'],
        children: [],
    },
    ReportControl: {
        parents: [...tAnyLN],
        children: [...tControlWithTriggerOptSequence, 'OptFields', 'RptEnabled'],
    },
    ReportSettings: {
        parents: ['Services'],
        children: [],
    },
    RptEnabled: {
        parents: ['ReportControl'],
        children: [...tUnNamingSequence, 'ClientLN'],
    },
    SamplesPerSec: {
        parents: ['SMVSettings'],
        children: [],
    },
    SampledValueControl: {
        parents: ['LN0'],
        children: [...tControlWithIEDNameSequence, 'SmvOpts'],
    },
    SecPerSamples: {
        parents: ['SMVSettings'],
        children: [],
    },
    SCL: {
        parents: [],
        children: [
            ...tBaseNameSequence,
            'Header',
            'Substation',
            'Communication',
            'IED',
            'DataTypeTemplates',
            'Line',
            'Process',
        ],
    },
    SDI: {
        parents: ['DOI', 'SDI'],
        children: [...tUnNamingSequence, 'SDI', 'DAI'],
    },
    SDO: {
        parents: ['DOType'],
        children: [...tNamingSequence],
    },
    Server: {
        parents: ['AccessPoint'],
        children: [
            ...tUnNamingSequence,
            'Authentication',
            'LDevice',
            'Association',
        ],
    },
    ServerAt: {
        parents: ['AccessPoint'],
        children: [...tUnNamingSequence],
    },
    Services: {
        parents: ['IED', 'AccessPoint'],
        children: [
            'DynAssociation',
            'SettingGroups',
            'GetDirectory',
            'GetDataObjectDefinition',
            'DataObjectDirectory',
            'GetDataSetValue',
            'SetDataSetValue',
            'DataSetDirectory',
            'ConfDataSet',
            'DynDataSet',
            'ReadWrite',
            'TimerActivatedControl',
            'ConfReportControl',
            'GetCBValues',
            'ConfLogControl',
            'ReportSettings',
            'LogSettings',
            'GSESettings',
            'SMVSettings',
            'GSEDir',
            'GOOSE',
            'GSSE',
            'SMVsc',
            'FileHandling',
            'ConfLNs',
            'ClientServices',
            'ConfLdName',
            'SupSubscription',
            'ConfSigRef',
            'ValueHandling',
            'RedProt',
            'TimeSyncProt',
            'CommProt',
        ],
    },
    SetDataSetValue: {
        parents: ['Services'],
        children: [],
    },
    SettingControl: {
        parents: ['LN0'],
        children: [...tUnNamingSequence],
    },
    SettingGroups: {
        parents: ['Services'],
        children: ['SGEdit', 'ConfSG'],
    },
    SGEdit: {
        parents: ['SettingGroups'],
        children: [],
    },
    SmpRate: {
        parents: ['SMVSettings'],
        children: [],
    },
    SMV: {
        parents: ['ConnectedAP'],
        children: [...tControlBlockSequence],
    },
    SmvOpts: {
        parents: ['SampledValueControl'],
        children: [],
    },
    SMVsc: {
        parents: ['Services'],
        children: [],
    },
    SMVSecurity: {
        parents: ['AccessPoint'],
        children: [...tNamingSequence, 'Subject', 'IssuerName'],
    },
    SMVSettings: {
        parents: ['Services'],
        children: ['SmpRate', 'SamplesPerSec', 'SecPerSamples', 'McSecurity'],
    },
    SubEquipment: {
        parents: [
            'TapChanger',
            'PowerTransformer',
            'ConductingEquipment',
            'TransformerWinding',
            ...tAbstractConductingEquipment,
        ],
        children: [...tPowerSystemResourceSequence, 'EqFunction'],
    },
    SubFunction: {
        parents: ['SubFunction', 'Function'],
        children: [
            ...tPowerSystemResourceSequence,
            'GeneralEquipment',
            'ConductingEquipment',
            'SubFunction',
        ],
    },
    SubNetwork: {
        parents: ['Communication'],
        children: [...tNamingSequence, 'BitRate', 'ConnectedAP'],
    },
    Subject: {
        parents: ['GOOSESecurity', 'SMVSecurity'],
        children: [],
    },
    Substation: {
        parents: ['SCL'],
        children: [...tEquipmentContainerSequence, 'VoltageLevel', 'Function'],
    },
    SupSubscription: {
        parents: ['Services'],
        children: [],
    },
    TapChanger: {
        parents: ['TransformerWinding'],
        children: [...tPowerSystemResourceSequence, 'SubEquipment', 'EqFunction'],
    },
    Terminal: {
        parents: [...tEquipment],
        children: [...tUnNamingSequence],
    },
    Text: {
        parents: sCLTags.filter(tag => tag !== 'Text' && tag !== 'Private'),
        children: [],
    },
    TimerActivatedControl: {
        parents: ['Services'],
        children: [],
    },
    TimeSyncProt: {
        parents: ['Services', 'ClientServices'],
        children: [],
    },
    TransformerWinding: {
        parents: ['PowerTransformer'],
        children: [
            ...tAbstractConductingEquipmentSequence,
            'TapChanger',
            'NeutralPoint',
            'EqFunction',
            'SubEquipment',
        ],
    },
    TrgOps: {
        parents: ['ReportControl'],
        children: [],
    },
    Val: {
        parents: ['DAI', 'DA', 'BDA'],
        children: [],
    },
    ValueHandling: {
        parents: ['Services'],
        children: [],
    },
    Voltage: {
        parents: ['VoltageLevel'],
        children: [],
    },
    VoltageLevel: {
        parents: ['Substation'],
        children: [...tEquipmentContainerSequence, 'Voltage', 'Bay', 'Function'],
    },
};
function getReference(parent, tag) {
    var _a, _b, _c;
    const parentTag = parent.tagName;
    const children = Array.from(parent.children);
    if (parentTag === 'Services' ||
        parentTag === 'SettingGroups' ||
        !isSCLTag(parentTag))
        return (_a = children.find(child => child.tagName === tag)) !== null && _a !== void 0 ? _a : null;
    const sequence = (_c = (_b = relatives[parentTag]) === null || _b === void 0 ? void 0 : _b.children) !== null && _c !== void 0 ? _c : [];
    let index = sequence.findIndex(element => element === tag);
    if (index < 0)
        return null;
    let nextSibling;
    while (index < sequence.length && !nextSibling) {
        // eslint-disable-next-line no-loop-func
        nextSibling = children.find(child => child.tagName === sequence[index]);
        // eslint-disable-next-line no-plusplus
        index++;
    }
    return nextSibling !== null && nextSibling !== void 0 ? nextSibling : null;
}

const voidSelector = ':not(*)';
function selector(tagName, identity) {
    if (typeof identity !== 'string')
        return voidSelector;
    if (isSCLTag(tagName))
        return tags[tagName].selector(tagName, identity);
    return tagName;
}
function crossProduct(...arrays) {
    return arrays.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())), [[]]);
}
function pathParts(identity) {
    var _a;
    const path = identity.split('>');
    const end = (_a = path.pop()) !== null && _a !== void 0 ? _a : '';
    const start = path.join('>');
    return [start, end];
}
function hitemSelector(tagName, identity) {
    const [version, revision] = identity.split('\t');
    if (!version || !revision)
        return voidSelector;
    return `${tagName}[version="${version}"][revision="${revision}"]`;
}
function terminalSelector(tagName, identity) {
    const [parentIdentity, connectivityNode] = pathParts(identity);
    const parentSelectors = relatives[tagName].parents.flatMap(parentTag => selector(parentTag, parentIdentity).split(','));
    return crossProduct(parentSelectors, ['>'], [`${tagName}[connectivityNode="${connectivityNode}"]`])
        .map(strings => strings.join(''))
        .join(',');
}
function lNodeSelector(tagName, identity) {
    if (identity.endsWith(')')) {
        const [parentIdentity, childIdentity] = pathParts(identity);
        const [lnClass, lnType] = childIdentity
            .substring(1, childIdentity.length - 1)
            .split(' ');
        if (!lnClass || !lnType)
            return voidSelector;
        const parentSelectors = relatives[tagName].parents.flatMap(parentTag => selector(parentTag, parentIdentity).split(','));
        return crossProduct(parentSelectors, ['>'], [`${tagName}[iedName="None"][lnClass="${lnClass}"][lnType="${lnType}"]`])
            .map(strings => strings.join(''))
            .join(',');
    }
    const [iedName, ldInst, prefix, lnClass, lnInst] = identity.split(/[ /]/);
    if (!iedName || !ldInst || !lnClass)
        return voidSelector;
    const [iedNameSelectors, ldInstSelectors, prefixSelectors, lnClassSelectors, lnInstSelectors,] = [
        [`[iedName="${iedName}"]`],
        ldInst === '(Client)'
            ? [':not([ldInst])', '[ldInst=""]']
            : [`[ldInst="${ldInst}"]`],
        prefix ? [`[prefix="${prefix}"]`] : [':not([prefix])', '[prefix=""]'],
        [`[lnClass="${lnClass}"]`],
        lnInst ? [`[lnInst="${lnInst}"]`] : [':not([lnInst])', '[lnInst=""]'],
    ];
    return crossProduct([tagName], iedNameSelectors, ldInstSelectors, prefixSelectors, lnClassSelectors, lnInstSelectors)
        .map(strings => strings.join(''))
        .join(',');
}
function kDCSelector(tagName, identity) {
    const [parentIdentity, childIdentity] = pathParts(identity);
    const [iedName, apName] = childIdentity.split(' ');
    return `${selector('IED', parentIdentity)}>${tagName}[iedName="${iedName}"][apName="${apName}"]`;
}
function associationSelector(tagName, identity) {
    const [parentIdentity, associationID] = pathParts(identity);
    if (!associationID)
        return voidSelector;
    return `${selector('Server', parentIdentity)}>${tagName}[associationID="${associationID}"]`;
}
function lDeviceSelector(tagName, identity) {
    const [iedName, inst] = identity.split('>>');
    if (!inst)
        return voidSelector;
    return `IED[name="${iedName}"] ${tagName}[inst="${inst}"]`;
}
function iEDNameSelector(tagName, identity) {
    const [parentIdentity, childIdentity] = pathParts(identity);
    const [iedName, apRef, ldInst, prefix, lnClass, lnInst] = childIdentity.split(/[ /]/);
    const [parentSelectors, apRefSelectors, ldInstSelectors, prefixSelectors, lnClassSelectors, lnInstSelectors,] = [
        relatives[tagName].parents.flatMap(parentTag => selector(parentTag, parentIdentity).split(',')),
        [`${iedName}`],
        apRef ? [`[apRef="${apRef}"]`] : [':not([apRef])', '[apRef=""]'],
        ldInst ? [`[ldInst="${ldInst}"]`] : [':not([ldInst])', '[ldInst=""]'],
        prefix ? [`[prefix="${prefix}"]`] : [':not([prefix])', '[prefix=""]'],
        [`[lnClass="${lnClass}"]`],
        lnInst ? [`[lnInst="${lnInst}"]`] : [':not([lnInst])', '[lnInst=""]'],
    ];
    return crossProduct(parentSelectors, ['>'], [tagName], apRefSelectors, ldInstSelectors, prefixSelectors, lnClassSelectors, lnInstSelectors)
        .map(strings => strings.join(''))
        .join(',');
}
function fCDASelector(tagName, identity) {
    const [parentIdentity, childIdentity] = pathParts(identity);
    const [ldInst, prefix, lnClass, lnInst] = childIdentity.split(/[ /.]/);
    const matchDoDa = childIdentity.match(/.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/);
    const doName = matchDoDa && matchDoDa[1] ? matchDoDa[1] : '';
    const daName = matchDoDa && matchDoDa[2] ? matchDoDa[2] : '';
    const matchFx = childIdentity.match(/\(([A-Z]{2})/);
    const matchIx = childIdentity.match(/ \[([0-9]{1,2})\]/);
    const fc = matchFx && matchFx[1] ? matchFx[1] : '';
    const ix = matchIx && matchIx[1] ? matchIx[1] : '';
    const [parentSelectors, ldInstSelectors, prefixSelectors, lnClassSelectors, lnInstSelectors, doNameSelectors, daNameSelectors, fcSelectors, ixSelectors,] = [
        relatives[tagName].parents.flatMap(parentTag => selector(parentTag, parentIdentity).split(',')),
        [`[ldInst="${ldInst}"]`],
        prefix ? [`[prefix="${prefix}"]`] : [':not([prefix])', '[prefix=""]'],
        [`[lnClass="${lnClass}"]`],
        lnInst ? [`[lnInst="${lnInst}"]`] : [':not([lnInst])', '[lnInst=""]'],
        [`[doName="${doName}"]`],
        daName ? [`[daName="${daName}"]`] : [':not([daName])', '[daName=""]'],
        [`[fc="${fc}"]`],
        ix ? [`[ix="${ix}"]`] : [':not([ix])', '[ix=""]'],
    ];
    return crossProduct(parentSelectors, ['>'], [tagName], ldInstSelectors, prefixSelectors, lnClassSelectors, lnInstSelectors, doNameSelectors, daNameSelectors, fcSelectors, ixSelectors)
        .map(strings => strings.join(''))
        .join(',');
}
function extRefSelector(tagName, identity) {
    const [parentIdentity, childIdentity] = pathParts(identity);
    const parentSelectors = relatives[tagName].parents.flatMap(parentTag => selector(parentTag, parentIdentity).split(','));
    if (childIdentity.endsWith(']')) {
        const [intAddr] = childIdentity.split('[');
        const intAddrSelectors = [`[intAddr="${intAddr}"]`];
        return crossProduct(parentSelectors, ['>'], [tagName], intAddrSelectors)
            .map(strings => strings.join(''))
            .join(',');
    }
    let iedName;
    let ldInst;
    let prefix;
    let lnClass;
    let lnInst;
    let doName;
    let daName;
    let serviceType;
    let srcCBName;
    let srcLDInst;
    let srcPrefix;
    let srcLNClass;
    let srcLNInst;
    let intAddr;
    if (!childIdentity.includes(':') && !childIdentity.includes('@')) {
        [iedName, ldInst, prefix, lnClass, lnInst, doName, daName] =
            childIdentity.split(/[ /]/);
    }
    else if (childIdentity.includes(':') && !childIdentity.includes('@')) {
        [
            serviceType,
            srcCBName,
            srcLDInst,
            srcPrefix,
            srcLNClass,
            srcLNInst,
            iedName,
            ldInst,
            prefix,
            lnClass,
            lnInst,
            doName,
            daName,
        ] = childIdentity.split(/[ /:]/);
    }
    else if (!childIdentity.includes(':') && childIdentity.includes('@')) {
        [iedName, ldInst, prefix, lnClass, lnInst, doName, daName, intAddr] =
            childIdentity.split(/[ /@]/);
    }
    else {
        [
            serviceType,
            srcCBName,
            srcLDInst,
            srcPrefix,
            srcLNClass,
            srcLNInst,
            iedName,
            ldInst,
            prefix,
            lnClass,
            lnInst,
            doName,
            daName,
            intAddr,
        ] = childIdentity.split(/[ /:@]/);
    }
    const [iedNameSelectors, ldInstSelectors, prefixSelectors, lnClassSelectors, lnInstSelectors, doNameSelectors, daNameSelectors, serviceTypeSelectors, srcCBNameSelectors, srcLDInstSelectors, srcPrefixSelectors, srcLNClassSelectors, srcLNInstSelectors, intAddrSelectors,] = [
        iedName ? [`[iedName="${iedName}"]`] : [':not([iedName])'],
        ldInst ? [`[ldInst="${ldInst}"]`] : [':not([ldInst])', '[ldInst=""]'],
        prefix ? [`[prefix="${prefix}"]`] : [':not([prefix])', '[prefix=""]'],
        lnClass ? [`[lnClass="${lnClass}"]`] : [':not([lnClass])'],
        lnInst ? [`[lnInst="${lnInst}"]`] : [':not([lnInst])', '[lnInst=""]'],
        doName ? [`[doName="${doName}"]`] : [':not([doName])'],
        daName ? [`[daName="${daName}"]`] : [':not([daName])', '[daName=""]'],
        serviceType
            ? [`[serviceType="${serviceType}"]`]
            : [':not([serviceType])', '[serviceType=""]'],
        srcCBName
            ? [`[srcCBName="${srcCBName}"]`]
            : [':not([srcCBName])', '[srcCBName=""]'],
        srcLDInst
            ? [`[srcLDInst="${srcLDInst}"]`]
            : [':not([srcLDInst])', '[srcLDInst=""]'],
        srcPrefix
            ? [`[srcPrefix="${srcPrefix}"]`]
            : [':not([srcPrefix])', '[srcPrefix=""]'],
        srcLNClass
            ? [`[srcLNClass="${srcLNClass}"]`]
            : [':not([srcLNClass])', '[srcLNClass=""]'],
        srcLNInst
            ? [`[srcLNInst="${srcLNInst}"]`]
            : [':not([srcLNInst])', '[srcLNInst=""]'],
        intAddr ? [`[intAddr="${intAddr}"]`] : [':not([intAddr])', '[intAddr=""]'],
    ];
    return crossProduct(parentSelectors, ['>'], [tagName], iedNameSelectors, ldInstSelectors, prefixSelectors, lnClassSelectors, lnInstSelectors, doNameSelectors, daNameSelectors, serviceTypeSelectors, srcCBNameSelectors, srcLDInstSelectors, srcPrefixSelectors, srcLNClassSelectors, srcLNInstSelectors, intAddrSelectors)
        .map(strings => strings.join(''))
        .join(',');
}
function lNSelector(tagName, identity) {
    const [parentIdentity, childIdentity] = pathParts(identity);
    const parentSelectors = relatives[tagName].parents.flatMap(parentTag => selector(parentTag, parentIdentity).split(','));
    const [prefix, lnClass, inst] = childIdentity.split(' ');
    if (!lnClass)
        return voidSelector;
    const [prefixSelectors, lnClassSelectors, instSelectors] = [
        prefix ? [`[prefix="${prefix}"]`] : [':not([prefix])', '[prefix=""]'],
        [`[lnClass="${lnClass}"]`],
        [`[inst="${inst}"]`],
    ];
    return crossProduct(parentSelectors, ['>'], [tagName], prefixSelectors, lnClassSelectors, instSelectors)
        .map(strings => strings.join(''))
        .join(',');
}
function clientLNSelector(tagName, identity) {
    const [parentIdentity, childIdentity] = pathParts(identity);
    const parentSelectors = relatives[tagName].parents.flatMap(parentTag => selector(parentTag, parentIdentity).split(','));
    const [iedName, apRef, ldInst, prefix, lnClass, lnInst] = childIdentity.split(/[ /]/);
    const [iedNameSelectors, apRefSelectors, ldInstSelectors, prefixSelectors, lnClassSelectors, lnInstSelectors,] = [
        iedName ? [`[iedName="${iedName}"]`] : [':not([iedName])', '[iedName=""]'],
        apRef ? [`[apRef="${apRef}"]`] : [':not([apRef])', '[apRef=""]'],
        ldInst ? [`[ldInst="${ldInst}"]`] : [':not([ldInst])', '[ldInst=""]'],
        prefix ? [`[prefix="${prefix}"]`] : [':not([prefix])', '[prefix=""]'],
        [`[lnClass="${lnClass}"]`],
        lnInst ? [`[lnInst="${lnInst}"]`] : [':not([lnInst])', '[lnInst=""]'],
    ];
    return crossProduct(parentSelectors, ['>'], [tagName], iedNameSelectors, apRefSelectors, ldInstSelectors, prefixSelectors, lnClassSelectors, lnInstSelectors)
        .map(strings => strings.join(''))
        .join(',');
}
function ixNamingSelector(tagName, identity, depth = -1) {
    var _a;
    // eslint-disable-next-line no-param-reassign
    if (depth === -1)
        depth = identity.split('>').length;
    const [parentIdentity, childIdentity] = pathParts(identity);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_0, name, _1, ix] = (_a = childIdentity.match(/([^[]*)(\[([0-9]*)\])?/)) !== null && _a !== void 0 ? _a : [];
    if (!name)
        return voidSelector;
    if (depth === 0)
        return `${tagName}[name="${name}"]`;
    const parentSelectors = relatives[tagName].parents
        .flatMap(parentTag => parentTag === 'SDI'
        ? ixNamingSelector(parentTag, parentIdentity, depth - 1).split(',')
        : selector(parentTag, parentIdentity).split(','))
        // eslint-disable-next-line no-shadow
        .filter(selector => !selector.startsWith(voidSelector));
    if (parentSelectors.length === 0)
        return voidSelector;
    const [nameSelectors, ixSelectors] = [
        [`[name="${name}"]`],
        ix ? [`[ix="${ix}"]`] : ['[ix=""]', ':not([ix])'],
    ];
    return crossProduct(parentSelectors, ['>'], [tagName], nameSelectors, ixSelectors)
        .map(strings => strings.join(''))
        .join(',');
}
function valSelector(tagName, identity) {
    const [parentIdentity, childIdentity] = pathParts(identity);
    const [sGroup, indexText] = childIdentity.split(' ');
    const index = parseFloat(indexText);
    const parentSelectors = relatives[tagName].parents.flatMap(parentTag => selector(parentTag, parentIdentity).split(','));
    const [nameSelectors, ixSelectors] = [
        sGroup ? [`[sGroup="${sGroup}"]`] : [''],
        index ? [`:nth-child(${index + 1})`] : [''],
    ];
    return crossProduct(parentSelectors, ['>'], [tagName], nameSelectors, ixSelectors)
        .map(strings => strings.join(''))
        .join(',');
}
function connectedAPSelector(tagName, identity) {
    const [iedName, apName] = identity.split(' ');
    if (!iedName || !apName)
        return voidSelector;
    return `${tagName}[iedName="${iedName}"][apName="${apName}"]`;
}
function controlBlockSelector(tagName, identity) {
    const [ldInst, cbName] = identity.split(' ');
    if (!ldInst || !cbName)
        return voidSelector;
    return `${tagName}[ldInst="${ldInst}"][cbName="${cbName}"]`;
}
function physConnSelector(tagName, identity) {
    const [parentIdentity, pcType] = pathParts(identity);
    const [parentSelectors, typeSelectors] = [
        relatives[tagName].parents.flatMap(parentTag => selector(parentTag, parentIdentity).split(',')),
        pcType ? [`[type="${pcType}"]`] : [''],
    ];
    return crossProduct(parentSelectors, ['>'], [tagName], typeSelectors)
        .map(strings => strings.join(''))
        .join(',');
}
function pSelector(tagName, identity) {
    const [parentIdentity, childIdentity] = pathParts(identity);
    const [type] = childIdentity.split(' ');
    const index = childIdentity &&
        childIdentity.match(/\[([0-9]+)\]/) &&
        childIdentity.match(/\[([0-9]+)\]/)[1]
        ? parseFloat(childIdentity.match(/\[([0-9]+)\]/)[1])
        : NaN;
    const [parentSelectors, typeSelectors, ixSelectors] = [
        relatives[tagName].parents.flatMap(parentTag => selector(parentTag, parentIdentity).split(',')),
        [`[type="${type}"]`],
        index ? [`:nth-child(${index + 1})`] : [''],
    ];
    return crossProduct(parentSelectors, ['>'], [tagName], typeSelectors, ixSelectors)
        .map(strings => strings.join(''))
        .join(',');
}
function enumValSelector(tagName, identity) {
    const [parentIdentity, ord] = pathParts(identity);
    return `${selector('EnumType', parentIdentity)}>${tagName}[ord="${ord}"]`;
}
function protNsSelector(tagName, identity) {
    const [parentIdentity, childIdentity] = pathParts(identity);
    const [type, value] = childIdentity.split('\t');
    const [parentSelectors] = [
        relatives[tagName].parents.flatMap(parentTag => selector(parentTag, parentIdentity).split(',')),
    ];
    return crossProduct(parentSelectors, ['>'], [tagName], [`[type="${type}"]`], ['>'], [value])
        .map(strings => strings.join(''))
        .join(',');
}
function sCLSelector() {
    return ':root';
}
function namingSelector(tagName, identity, depth = -1) {
    // eslint-disable-next-line no-param-reassign
    if (depth === -1)
        depth = identity.split('>').length;
    const [parentIdentity, name] = pathParts(identity);
    if (!name)
        return voidSelector;
    if (depth === 0)
        return `${tagName}[name="${name}"]`;
    // eslint-disable-next-line prefer-destructuring
    const parents = relatives[tagName].parents;
    if (!parents)
        return voidSelector;
    const parentSelectors = parents
        .flatMap(parentTag => tags[parentTag].selector === tags.Substation.selector
        ? namingSelector(parentTag, parentIdentity, depth - 1).split(',')
        : selector(parentTag, parentIdentity).split(','))
        // eslint-disable-next-line no-shadow
        .filter(selector => !selector.startsWith(voidSelector));
    if (parentSelectors.length === 0)
        return voidSelector;
    return crossProduct(parentSelectors, ['>'], [tagName], [`[name="${name}"]`])
        .map(strings => strings.join(''))
        .join(',');
}
function singletonSelector(tagName, identity) {
    // eslint-disable-next-line prefer-destructuring
    const parents = relatives[tagName].parents;
    if (!parents)
        return voidSelector;
    const parentSelectors = parents
        .flatMap(parentTag => selector(parentTag, identity).split(','))
        // eslint-disable-next-line no-shadow
        .filter(selector => !selector.startsWith(voidSelector));
    if (parentSelectors.length === 0)
        return voidSelector;
    return crossProduct(parentSelectors, ['>'], [tagName])
        .map(strings => strings.join(''))
        .join(',');
}
function idNamingSelector(tagName, identity) {
    const id = identity.replace(/^#/, '');
    if (!id)
        return voidSelector;
    return `${tagName}[id="${id}"]`;
}

const tags = {
    AccessControl: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    AccessPoint: {
        identity: namingIdentity,
        selector: namingSelector,
    },
    Address: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    Association: {
        identity: associationIdentity,
        selector: associationSelector,
    },
    Authentication: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    BDA: {
        identity: namingIdentity,
        selector: namingSelector,
    },
    BitRate: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    Bay: {
        identity: namingIdentity,
        selector: namingSelector,
    },
    ClientLN: {
        identity: clientLNIdentity,
        selector: clientLNSelector,
    },
    ClientServices: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    CommProt: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    Communication: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    ConductingEquipment: {
        identity: namingIdentity,
        selector: namingSelector,
    },
    ConfDataSet: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    ConfLdName: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    ConfLNs: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    ConfLogControl: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    ConfReportControl: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    ConfSG: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    ConfSigRef: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    ConnectedAP: {
        identity: connectedAPIdentity,
        selector: connectedAPSelector,
    },
    ConnectivityNode: {
        identity: namingIdentity,
        selector: namingSelector,
    },
    DA: {
        identity: namingIdentity,
        selector: namingSelector,
    },
    DAI: {
        identity: ixNamingIdentity,
        selector: ixNamingSelector,
    },
    DAType: {
        identity: idNamingIdentity,
        selector: idNamingSelector,
    },
    DO: {
        identity: namingIdentity,
        selector: namingSelector,
    },
    DOI: {
        identity: namingIdentity,
        selector: namingSelector,
    },
    DOType: {
        identity: idNamingIdentity,
        selector: idNamingSelector,
    },
    DataObjectDirectory: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    DataSet: {
        identity: namingIdentity,
        selector: namingSelector,
    },
    DataSetDirectory: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    DataTypeTemplates: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    DynAssociation: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    DynDataSet: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    EnumType: {
        identity: idNamingIdentity,
        selector: idNamingSelector,
    },
    EnumVal: {
        identity: enumValIdentity,
        selector: enumValSelector,
    },
    EqFunction: {
        identity: namingIdentity,
        selector: namingSelector,
    },
    EqSubFunction: {
        identity: namingIdentity,
        selector: namingSelector,
    },
    ExtRef: {
        identity: extRefIdentity,
        selector: extRefSelector,
    },
    FCDA: {
        identity: fCDAIdentity,
        selector: fCDASelector,
    },
    FileHandling: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    Function: {
        identity: namingIdentity,
        selector: namingSelector,
    },
    GeneralEquipment: {
        identity: namingIdentity,
        selector: namingSelector,
    },
    GetCBValues: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    GetDataObjectDefinition: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    GetDataSetValue: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    GetDirectory: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    GOOSE: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    GOOSESecurity: {
        identity: namingIdentity,
        selector: namingSelector,
    },
    GSE: {
        identity: controlBlockIdentity,
        selector: controlBlockSelector,
    },
    GSEDir: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    GSEControl: {
        identity: namingIdentity,
        selector: namingSelector,
    },
    GSESettings: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    GSSE: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    Header: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    History: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    Hitem: {
        identity: hitemIdentity,
        selector: hitemSelector,
    },
    IED: {
        identity: namingIdentity,
        selector: namingSelector,
    },
    IEDName: {
        identity: iEDNameIdentity,
        selector: iEDNameSelector,
    },
    Inputs: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    IssuerName: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    KDC: {
        identity: kDCIdentity,
        selector: kDCSelector,
    },
    LDevice: {
        identity: lDeviceIdentity,
        selector: lDeviceSelector,
    },
    LN: {
        identity: lNIdentity,
        selector: lNSelector,
    },
    LN0: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    LNode: {
        identity: lNodeIdentity,
        selector: lNodeSelector,
    },
    LNodeType: {
        identity: idNamingIdentity,
        selector: idNamingSelector,
    },
    Line: {
        identity: namingIdentity,
        selector: namingSelector,
    },
    Log: {
        identity: namingIdentity,
        selector: namingSelector,
    },
    LogControl: {
        identity: namingIdentity,
        selector: namingSelector,
    },
    LogSettings: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    MaxTime: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    McSecurity: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    MinTime: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    NeutralPoint: {
        identity: terminalIdentity,
        selector: terminalSelector,
    },
    OptFields: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    P: {
        identity: pIdentity,
        selector: pSelector,
    },
    PhysConn: {
        identity: physConnIdentity,
        selector: physConnSelector,
    },
    PowerTransformer: {
        identity: namingIdentity,
        selector: namingSelector,
    },
    Private: {
        identity: () => NaN,
        selector: () => voidSelector,
    },
    Process: {
        identity: namingIdentity,
        selector: namingSelector,
    },
    ProtNs: {
        identity: protNsIdentity,
        selector: protNsSelector,
    },
    Protocol: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    ReadWrite: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    RedProt: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    ReportControl: {
        identity: namingIdentity,
        selector: namingSelector,
    },
    ReportSettings: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    RptEnabled: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    SamplesPerSec: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    SampledValueControl: {
        identity: namingIdentity,
        selector: namingSelector,
    },
    SecPerSamples: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    SCL: {
        identity: sCLIdentity,
        selector: sCLSelector,
    },
    SDI: {
        identity: ixNamingIdentity,
        selector: ixNamingSelector,
    },
    SDO: {
        identity: namingIdentity,
        selector: namingSelector,
    },
    Server: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    ServerAt: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    Services: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    SetDataSetValue: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    SettingControl: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    SettingGroups: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    SGEdit: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    SmpRate: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    SMV: {
        identity: controlBlockIdentity,
        selector: controlBlockSelector,
    },
    SmvOpts: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    SMVsc: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    SMVSecurity: {
        identity: namingIdentity,
        selector: namingSelector,
    },
    SMVSettings: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    SubEquipment: {
        identity: namingIdentity,
        selector: namingSelector,
    },
    SubFunction: {
        identity: namingIdentity,
        selector: namingSelector,
    },
    SubNetwork: {
        identity: namingIdentity,
        selector: namingSelector,
    },
    Subject: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    Substation: {
        identity: namingIdentity,
        selector: namingSelector,
    },
    SupSubscription: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    TapChanger: {
        identity: namingIdentity,
        selector: namingSelector,
    },
    Terminal: {
        identity: terminalIdentity,
        selector: terminalSelector,
    },
    Text: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    TimerActivatedControl: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    TimeSyncProt: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    TransformerWinding: {
        identity: namingIdentity,
        selector: namingSelector,
    },
    TrgOps: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    Val: {
        identity: valIdentity,
        selector: valSelector,
    },
    ValueHandling: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    Voltage: {
        identity: singletonIdentity,
        selector: singletonSelector,
    },
    VoltageLevel: {
        identity: namingIdentity,
        selector: namingSelector,
    },
};

/** @returns a string uniquely identifying `e` in its document, or NaN if `e`
 * is unidentifiable. */
function identity(e) {
    if (e === null)
        return NaN;
    if (e.closest('Private'))
        return NaN;
    const tag = e.tagName;
    if (isSCLTag(tag))
        return tags[tag].identity(e);
    return NaN;
}
function hitemIdentity(e) {
    return `${e.getAttribute('version')}\t${e.getAttribute('revision')}`;
}
function terminalIdentity(e) {
    return `${identity(e.parentElement)}>${e.getAttribute('connectivityNode')}`;
}
function lNodeIdentity(e) {
    const [iedName, ldInst, prefix, lnClass, lnInst, lnType] = [
        'iedName',
        'ldInst',
        'prefix',
        'lnClass',
        'lnInst',
        'lnType',
    ].map(name => e.getAttribute(name));
    if (iedName === 'None')
        return `${identity(e.parentElement)}>(${lnClass} ${lnType})`;
    return `${iedName} ${ldInst || '(Client)'}/${prefix !== null && prefix !== void 0 ? prefix : ''} ${lnClass} ${lnInst !== null && lnInst !== void 0 ? lnInst : ''}`;
}
function kDCIdentity(e) {
    return `${identity(e.parentElement)}>${e.getAttribute('iedName')} ${e.getAttribute('apName')}`;
}
function associationIdentity(e) {
    var _a;
    return `${identity(e.parentElement)}>${(_a = e.getAttribute('associationID')) !== null && _a !== void 0 ? _a : ''}`;
}
function lDeviceIdentity(e) {
    return `${identity(e.closest('IED'))}>>${e.getAttribute('inst')}`;
}
function iEDNameIdentity(e) {
    const iedName = e.textContent;
    const [apRef, ldInst, prefix, lnClass, lnInst] = [
        'apRef',
        'ldInst',
        'prefix',
        'lnClass',
        'lnInst',
    ].map(name => e.getAttribute(name));
    return `${identity(e.parentElement)}>${iedName} ${apRef || ''} ${ldInst || ''}/${prefix !== null && prefix !== void 0 ? prefix : ''} ${lnClass !== null && lnClass !== void 0 ? lnClass : ''} ${lnInst !== null && lnInst !== void 0 ? lnInst : ''}`;
}
function fCDAIdentity(e) {
    const [ldInst, prefix, lnClass, lnInst, doName, daName, fc, ix] = [
        'ldInst',
        'prefix',
        'lnClass',
        'lnInst',
        'doName',
        'daName',
        'fc',
        'ix',
    ].map(name => e.getAttribute(name));
    const dataPath = `${ldInst}/${prefix !== null && prefix !== void 0 ? prefix : ''} ${lnClass} ${lnInst !== null && lnInst !== void 0 ? lnInst : ''}.${doName} ${daName || ''}`;
    return `${identity(e.parentElement)}>${dataPath} (${fc}${ix ? ` [${ix}]` : ''})`;
}
function extRefIdentity(e) {
    if (!e.parentElement)
        return NaN;
    const parentIdentity = identity(e.parentElement);
    const iedName = e.getAttribute('iedName');
    const intAddr = e.getAttribute('intAddr');
    const intAddrIndex = Array.from(e.parentElement.querySelectorAll(`ExtRef[intAddr="${intAddr}"]`)).indexOf(e);
    if (!iedName)
        return `${parentIdentity}>${intAddr}[${intAddrIndex}]`;
    const [ldInst, prefix, lnClass, lnInst, doName, daName, serviceType, srcLDInst, srcPrefix, srcLNClass, srcLNInst, srcCBName,] = [
        'ldInst',
        'prefix',
        'lnClass',
        'lnInst',
        'doName',
        'daName',
        'serviceType',
        'srcLDInst',
        'srcPrefix',
        'srcLNClass',
        'srcLNInst',
        'srcCBName',
    ].map(name => e.getAttribute(name));
    const cbPath = srcCBName
        ? `${serviceType}:${srcCBName} ${srcLDInst !== null && srcLDInst !== void 0 ? srcLDInst : ''}/${srcPrefix !== null && srcPrefix !== void 0 ? srcPrefix : ''} ${srcLNClass !== null && srcLNClass !== void 0 ? srcLNClass : ''} ${srcLNInst !== null && srcLNInst !== void 0 ? srcLNInst : ''}`
        : '';
    const dataPath = `${iedName} ${ldInst}/${prefix !== null && prefix !== void 0 ? prefix : ''} ${lnClass} ${lnInst !== null && lnInst !== void 0 ? lnInst : ''} ${doName} ${daName || ''}`;
    return `${parentIdentity}>${cbPath ? `${cbPath} ` : ''}${dataPath}${
    // eslint-disable-next-line no-useless-concat
    intAddr ? '@' + `${intAddr}` : ''}`;
}
function lNIdentity(e) {
    const [prefix, lnClass, inst] = ['prefix', 'lnClass', 'inst'].map(name => e.getAttribute(name));
    return `${identity(e.parentElement)}>${prefix !== null && prefix !== void 0 ? prefix : ''} ${lnClass} ${inst}`;
}
function clientLNIdentity(e) {
    const [apRef, iedName, ldInst, prefix, lnClass, lnInst] = [
        'apRef',
        'iedName',
        'ldInst',
        'prefix',
        'lnClass',
        'lnInst',
    ].map(name => e.getAttribute(name));
    return `${identity(e.parentElement)}>${iedName} ${apRef || ''} ${ldInst}/${prefix !== null && prefix !== void 0 ? prefix : ''} ${lnClass} ${lnInst}`;
}
function ixNamingIdentity(e) {
    const [name, ix] = ['name', 'ix'].map(naming => e.getAttribute(naming));
    return `${identity(e.parentElement)}>${name}${ix ? `[${ix}]` : ''}`;
}
function valIdentity(e) {
    if (!e.parentElement)
        return NaN;
    const sGroup = e.getAttribute('sGroup');
    const index = Array.from(e.parentElement.children)
        .filter(child => child.getAttribute('sGroup') === sGroup)
        .findIndex(child => child.isSameNode(e));
    return `${identity(e.parentElement)}>${sGroup ? `${sGroup}.` : ''} ${index}`;
}
function connectedAPIdentity(e) {
    const [iedName, apName] = ['iedName', 'apName'].map(name => e.getAttribute(name));
    return `${iedName} ${apName}`;
}
function controlBlockIdentity(e) {
    const [ldInst, cbName] = ['ldInst', 'cbName'].map(name => e.getAttribute(name));
    return `${ldInst} ${cbName}`;
}
function physConnIdentity(e) {
    if (!e.parentElement)
        return NaN;
    if (!e.parentElement.querySelector('PhysConn[type="RedConn"]'))
        return NaN;
    const pcType = e.getAttribute('type');
    if (e.parentElement.children.length > 1 &&
        pcType !== 'Connection' &&
        pcType !== 'RedConn')
        return NaN;
    return `${identity(e.parentElement)}>${pcType}`;
}
function pIdentity(e) {
    if (!e.parentElement)
        return NaN;
    const eParent = e.parentElement;
    const eType = e.getAttribute('type');
    if (eParent.tagName === 'PhysConn')
        return `${identity(e.parentElement)}>${eType}`;
    const index = Array.from(e.parentElement.children)
        .filter(child => child.getAttribute('type') === eType)
        .findIndex(child => child.isSameNode(e));
    return `${identity(e.parentElement)}>${eType} [${index}]`;
}
function enumValIdentity(e) {
    return `${identity(e.parentElement)}>${e.getAttribute('ord')}`;
}
function protNsIdentity(e) {
    return `${identity(e.parentElement)}>${e.getAttribute('type') || '8-MMS'}\t${e.textContent}`;
}
function sCLIdentity() {
    return '';
}
function namingIdentity(e) {
    return e.parentElement.tagName === 'SCL'
        ? e.getAttribute('name')
        : `${identity(e.parentElement)}>${e.getAttribute('name')}`;
}
function singletonIdentity(e) {
    return identity(e.parentElement).toString();
}
function idNamingIdentity(e) {
    return `#${e.id}`;
}

function subscriberSupervision(ctrlBlock, subscriberIed) {
    const supervisionType = ctrlBlock.tagName === 'GSEControl' ? 'LGOS' : 'LSVS';
    const valElement = Array.from(subscriberIed.querySelectorAll(`LN0[lnClass="${supervisionType}"] > DOI > DAI > Val,
       LN[lnClass="${supervisionType}"] > DOI > DAI > Val`)).find(val => val.textContent === controlBlockObjectReference(ctrlBlock));
    if (!valElement)
        return null;
    const ln = valElement.closest('LN0, LN');
    const doi = valElement.closest('DOI');
    return { ln, doi };
}
/** @returns Whether `setSrcRef` can edited by SCL editor */
function isSrcRefEditable(ctrlBlock, subscriberIed) {
    const supervision = subscriberSupervision(ctrlBlock, subscriberIed);
    if (!supervision)
        return false;
    const rootNode = supervision.ln.ownerDocument;
    const lnClass = supervision.ln.getAttribute('lnClass');
    const goOrSvCBRef = rootNode.querySelector(`DataTypeTemplates > 
      LNodeType[id="${supervision.ln.getAttribute('lnType')}"][lnClass="${lnClass}"] > DO[name="${lnClass === 'LGOS' ? 'GoCBRef' : 'SvCBRef'}"]`);
    const setSrcRef = rootNode.querySelector(`DataTypeTemplates > DOType[id="${goOrSvCBRef === null || goOrSvCBRef === void 0 ? void 0 : goOrSvCBRef.getAttribute('type')}"] > DA[name="setSrcRef"]`);
    return (((setSrcRef === null || setSrcRef === void 0 ? void 0 : setSrcRef.getAttribute('valKind')) === 'Conf' ||
        (setSrcRef === null || setSrcRef === void 0 ? void 0 : setSrcRef.getAttribute('valKind')) === 'RO') &&
        setSrcRef.getAttribute('valImport') === 'true');
}
/** Whether there is another subscribed ExtRef of the same ctrlBlock */
function otherCtrlBlockSubscriberData(extRefs) {
    const [srcCBName, srcLDInst, srcLNClass, iedName, srcPrefix, srcLNInst, serviceType,] = [
        'srcCBName',
        'srcLDInst',
        'srcLNClass',
        'iedName',
        'srcPrefix',
        'srcLNInst',
        'serviceType',
    ].map(attr => extRefs[0].getAttribute(attr));
    const parentIed = extRefs[0].closest('IED');
    return Array.from(parentIed.getElementsByTagName('ExtRef')).some(otherExtRef => {
        var _a, _b;
        return !extRefs.includes(otherExtRef) &&
            ((_a = otherExtRef.getAttribute('srcPrefix')) !== null && _a !== void 0 ? _a : '') === (srcPrefix !== null && srcPrefix !== void 0 ? srcPrefix : '') &&
            ((_b = otherExtRef.getAttribute('srcLNInst')) !== null && _b !== void 0 ? _b : '') === (srcLNInst !== null && srcLNInst !== void 0 ? srcLNInst : '') &&
            otherExtRef.getAttribute('srcCBName') === srcCBName &&
            otherExtRef.getAttribute('srcLDInst') === srcLDInst &&
            otherExtRef.getAttribute('srcLNClass') === srcLNClass &&
            otherExtRef.getAttribute('iedName') === iedName &&
            otherExtRef.getAttribute('serviceType') === serviceType;
    });
}
/**
 * @param extRefs - a set of external references
 * @returns node's representing subscription supervision
 */
function removeSubscriptionSupervision(extRefs) {
    var _a;
    if (extRefs.length === 0)
        return [];
    const isEd1 = !((_a = extRefs[0].ownerDocument
        .querySelector('SCL')) === null || _a === void 0 ? void 0 : _a.hasAttribute('version'));
    if (isEd1)
        return [];
    const groupedExtRefs = {};
    extRefs.forEach(extRef => {
        const ctrlBlock = controlBlock(extRef);
        if (ctrlBlock) {
            const ctrlBlockRef = controlBlockObjectReference(ctrlBlock);
            if (groupedExtRefs[ctrlBlockRef])
                groupedExtRefs[ctrlBlockRef].extRefs.push(extRef);
            else
                groupedExtRefs[ctrlBlockRef] = {
                    extRefs: [extRef],
                    ctrlBlock,
                    subscriberIed: extRef.closest('IED'),
                };
        }
    });
    return Object.values(groupedExtRefs)
        .map(extRefGroup => {
        if (otherCtrlBlockSubscriberData(extRefGroup.extRefs) ||
            !isSrcRefEditable(extRefGroup.ctrlBlock, extRefGroup.subscriberIed))
            return null;
        const { ln, doi } = subscriberSupervision(extRefGroup.ctrlBlock, extRefGroup.subscriberIed);
        // do not remove logical nodes LGOS, LSVS unless privately tagged
        const canRemoveLn = ln.querySelector(':scope > Private[type="OpenSCD.create"]');
        return canRemoveLn ? ln : doi;
    })
        .filter(element => element).map(node => ({ node }));
}

/* eslint-disable import/no-extraneous-dependencies */
const serviceType = {
    GSEControl: 'GOOSE',
    SampledValueControl: 'SMV',
    ReportControl: 'Report',
};
function duplicates(arr, val) {
    let count = 0;
    // eslint-disable-next-line no-plusplus
    for (const value of arr)
        if (value === val)
            count++;
    return count;
}
function correctInputs(extRefActions) {
    const removeInputs = [];
    extRefActions
        .filter(extRefAction => isRemove(extRefAction))
        .map(removeAction => removeAction.node.parentElement)
        .filter(input => input).forEach((input, _index, inputs) => {
        const number = duplicates(inputs, input);
        if (input.querySelectorAll('ExtRef').length === number &&
            !removeInputs.some(removeInput => removeInput.node === input))
            removeInputs.push({ node: input });
    });
    return extRefActions.concat(removeInputs);
}
function unsubscribe(extRefs) {
    const actions = [];
    extRefs.forEach(extRef => {
        if (extRef.getAttribute('intAddr'))
            actions.push({
                element: extRef,
                attributes: {
                    iedName: null,
                    ldInst: null,
                    prefix: null,
                    lnClass: null,
                    lnInst: null,
                    doName: null,
                    daName: null,
                    srcLDInst: null,
                    srcPrefix: null,
                    srcLNClass: null,
                    srcLNInst: null,
                    srcCBName: null,
                    serviceType: null,
                },
            });
        else
            actions.push({ node: extRef });
    });
    return correctInputs(actions).concat(removeSubscriptionSupervision(extRefs));
}
/** @returns Whether a ExtRef to FCDA reference match */
function matchExtRefFcda(extRef, fcda) {
    var _a, _b, _c, _d, _e, _f;
    return (extRef.getAttribute('ldInst') === fcda.getAttribute('ldInst') &&
        ((_a = extRef.getAttribute('prefix')) !== null && _a !== void 0 ? _a : '') ===
            ((_b = fcda.getAttribute('prefix')) !== null && _b !== void 0 ? _b : '') &&
        extRef.getAttribute('lnClass') === fcda.getAttribute('lnClass') &&
        ((_c = extRef.getAttribute('lnInst')) !== null && _c !== void 0 ? _c : '') ===
            ((_d = fcda.getAttribute('lnInst')) !== null && _d !== void 0 ? _d : '') &&
        extRef.getAttribute('doName') === fcda.getAttribute('doName') &&
        ((_e = extRef.getAttribute('daName')) !== null && _e !== void 0 ? _e : '') ===
            ((_f = fcda.getAttribute('daName')) !== null && _f !== void 0 ? _f : ''));
}
/** @returns Whether src... type ExtRef attributes match */
function matchExtRefCtrlBlockAttr(extRef, ctrlBlock) {
    var _a, _b, _c, _d, _e, _f, _g;
    const cbName = ctrlBlock.getAttribute('name');
    const srcLDInst = (_a = ctrlBlock.closest('LDevice')) === null || _a === void 0 ? void 0 : _a.getAttribute('inst');
    const srcPrefix = (_c = (_b = ctrlBlock.closest('LN0, LN')) === null || _b === void 0 ? void 0 : _b.getAttribute('prefix')) !== null && _c !== void 0 ? _c : '';
    const srcLNClass = (_d = ctrlBlock.closest('LN0, LN')) === null || _d === void 0 ? void 0 : _d.getAttribute('lnClass');
    const srcLNInst = (_e = ctrlBlock.closest('LN0, LN')) === null || _e === void 0 ? void 0 : _e.getAttribute('inst');
    return (extRef.getAttribute('srcCBName') === cbName &&
        extRef.getAttribute('srcLDInst') === srcLDInst &&
        ((_f = extRef.getAttribute('srcPrefix')) !== null && _f !== void 0 ? _f : '') === srcPrefix &&
        ((_g = extRef.getAttribute('srcLNInst')) !== null && _g !== void 0 ? _g : '') === srcLNInst &&
        extRef.getAttribute('srcLNClass') === srcLNClass &&
        extRef.getAttribute('serviceType') === serviceType[ctrlBlock.tagName]);
}

/** @returns Updated confRev attribute for control block */
function updatedConfRev(ctrlBlock) {
    var _a;
    return `${parseInt((_a = ctrlBlock.getAttribute('confRev')) !== null && _a !== void 0 ? _a : '0', 10) + 10000}`;
}
/** @returns all ExtRef element subscribed to a controlBlock */
function findCtrlBlockSubscription(ctrlBlock) {
    const doc = ctrlBlock.ownerDocument;
    const iedName = ctrlBlock.closest('IED').getAttribute('name');
    return Array.from(doc.querySelectorAll(`ExtRef[iedName="${iedName}"]`)).filter(extRef => matchExtRefCtrlBlockAttr(extRef, ctrlBlock));
}
/** @returns object reference acc. IEC 61850-7-3 for control block elements */
function controlBlockObjectReference(ctrlBlock) {
    var _a, _b, _c, _d;
    const iedName = (_a = ctrlBlock.closest('IED')) === null || _a === void 0 ? void 0 : _a.getAttribute('name');
    const ldInst = (_b = ctrlBlock.closest('LDevice')) === null || _b === void 0 ? void 0 : _b.getAttribute('inst');
    const parentLn = ctrlBlock.closest('LN,LN0');
    const prefix = (_c = parentLn === null || parentLn === void 0 ? void 0 : parentLn.getAttribute('prefix')) !== null && _c !== void 0 ? _c : '';
    const lnClass = parentLn === null || parentLn === void 0 ? void 0 : parentLn.getAttribute('lnClass');
    const lnInst = (_d = parentLn === null || parentLn === void 0 ? void 0 : parentLn.getAttribute('inst')) !== null && _d !== void 0 ? _d : '';
    const cbName = ctrlBlock.getAttribute('name');
    if (!iedName || !ldInst || !lnClass || !cbName)
        return null;
    return `${iedName}${ldInst}/${prefix}${lnClass}${lnInst}.${cbName}`;
}
/** @returns control block or null for a given external reference */
function controlBlock(extRef) {
    var _a;
    const [iedName, srcLDInst, srcPrefix, srcLNClass, srcLNInst, srcCBName] = [
        'iedName',
        'srcLDInst',
        'srcPrefix',
        'srcLNClass',
        'srcLNInst',
        'srcCBName',
    ].map(attr => { var _a; return (_a = extRef.getAttribute(attr)) !== null && _a !== void 0 ? _a : ''; });
    return ((_a = Array.from(extRef.ownerDocument.querySelectorAll(`IED[name="${iedName}"] ReportControl, 
        IED[name="${iedName}"] GSEControl, 
        IED[name="${iedName}"] SampledValueControl`)).find(cBlock => {
        var _a;
        return cBlock.closest('LDevice').getAttribute('inst') === srcLDInst &&
            ((_a = cBlock.closest('LN, LN0').getAttribute('prefix')) !== null && _a !== void 0 ? _a : '') ===
                srcPrefix &&
            cBlock.closest('LN, LN0').getAttribute('lnClass') === srcLNClass &&
            cBlock.closest('LN, LN0').getAttribute('inst') === srcLNInst &&
            cBlock.getAttribute('name') === srcCBName;
    })) !== null && _a !== void 0 ? _a : null);
}
/** @returns control blocks for a given data attribute or data set */
function controlBlocks(fcdaOrDataSet) {
    var _a, _b;
    const datSet = (_a = fcdaOrDataSet.closest('DataSet')) === null || _a === void 0 ? void 0 : _a.getAttribute('name');
    const parentLn = fcdaOrDataSet.closest('LN0, LN');
    return Array.from((_b = parentLn === null || parentLn === void 0 ? void 0 : parentLn.querySelectorAll(`:scope > ReportControl[datSet="${datSet}"],
             :scope > GSEControl[datSet="${datSet}"],
             :scope > SampledValueControl[datSet="${datSet}"]`)) !== null && _b !== void 0 ? _b : []);
}
/** @returns Action array removing control block and its referenced data */
function removeControlBlock(ctrlBlock) {
    var _a;
    const ctrlBlockRemoveAction = [{ node: ctrlBlock }];
    const dataSet = (_a = ctrlBlock.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector(`DataSet[name="${ctrlBlock.getAttribute('datSet')}"]`);
    if (!dataSet)
        return ctrlBlockRemoveAction;
    const multiUseDataSet = controlBlocks(dataSet).length > 1;
    if (multiUseDataSet)
        return ctrlBlockRemoveAction.concat(unsubscribe(findCtrlBlockSubscription(ctrlBlock)));
    return ctrlBlockRemoveAction.concat(removeDataSet(dataSet));
}

function createElement$5(doc, tag, attrs) {
    const element = doc.createElementNS(doc.documentElement.namespaceURI, tag);
    Object.entries(attrs)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .filter(([_, value]) => value !== null)
        .forEach(([name, value]) => element.setAttribute(name, value));
    return element;
}
function findFcda(dataSet, attr) {
    return Array.from(dataSet.children).find(fcda => {
        var _a, _b, _c;
        return fcda.tagName === 'FCDA' &&
            fcda.getAttribute('ldInst') === attr.ldInst &&
            ((_a = fcda.getAttribute('prefix')) !== null && _a !== void 0 ? _a : '') === attr.prefix &&
            ((_b = fcda.getAttribute('lnInst')) !== null && _b !== void 0 ? _b : '') === attr.lnInst &&
            fcda.getAttribute('lnClass') === attr.lnClass &&
            fcda.getAttribute('doName') === attr.doName &&
            fcda.getAttribute('daName') === ((_c = attr.daName) !== null && _c !== void 0 ? _c : null) &&
            fcda.getAttribute('fc') === attr.fc;
    });
}
function findFcdaSubscription(fcda) {
    var _a, _b;
    const doc = fcda.ownerDocument;
    const iedName = (_a = fcda.closest('IED')) === null || _a === void 0 ? void 0 : _a.getAttribute('name');
    if (!iedName)
        return [];
    const isEd1 = !((_b = fcda.ownerDocument
        .querySelector('SCL')) === null || _b === void 0 ? void 0 : _b.getAttribute('version'));
    if (isEd1)
        return Array.from(doc.querySelectorAll(`ExtRef[iedName="${iedName}"]`)).filter(extRef => matchExtRefFcda(extRef, fcda));
    return controlBlocks(fcda).flatMap(controlBlock => Array.from(doc.querySelectorAll(`ExtRef[iedName="${iedName}"]`)).filter(extRef => matchExtRefFcda(extRef, fcda) &&
        matchExtRefCtrlBlockAttr(extRef, controlBlock)));
}
/** @returns Action array removing multi FCDA and its subscriber information */
function removeFCDAs(fCDAs) {
    const removeFCDAsActions = fCDAs.map(fCDA => ({
        node: fCDA,
    }));
    const extRefActions = [];
    extRefActions.push(...unsubscribe(fCDAs.flatMap(fCDA => findFcdaSubscription(fCDA))));
    const controlBlockUpdates = fCDAs.flatMap(fCDA => controlBlocks(fCDA).map(element => ({
        element,
        attributes: { confRev: updatedConfRev(element) },
    })));
    return removeFCDAsActions.concat(extRefActions, controlBlockUpdates);
}
/** @returns Action array removing FCDA and its subscriber information */
function removeFCDA(fCDA) {
    const removeActionFcda = [{ node: fCDA }];
    const extRefActions = [];
    extRefActions.push(...unsubscribe(findFcdaSubscription(fCDA)));
    return removeActionFcda.concat(extRefActions);
}
/** @returns Action array adding new `FCDA`s to parent [[`DataSet`]] */
function addFCDAs(dataSet, paths) {
    var _a, _b, _c;
    const actions = [];
    for (const path of paths) {
        const anyLn = path.find(section => section.tagName === 'LN' || section.tagName === 'LN0');
        const lDevice = path.find(section => section.tagName === 'LDevice');
        const ldInst = lDevice === null || lDevice === void 0 ? void 0 : lDevice.getAttribute('inst');
        const prefix = (_a = anyLn === null || anyLn === void 0 ? void 0 : anyLn.getAttribute('prefix')) !== null && _a !== void 0 ? _a : '';
        const lnClass = anyLn === null || anyLn === void 0 ? void 0 : anyLn.getAttribute('lnClass');
        const lnInst = (_b = anyLn === null || anyLn === void 0 ? void 0 : anyLn.getAttribute('inst')) !== null && _b !== void 0 ? _b : '';
        // eslint-disable-next-line no-continue
        if (!ldInst || !lnClass)
            continue;
        let doName = '';
        let daName = '';
        let fc = '';
        for (const ancestor of path) {
            // eslint-disable-next-line no-continue
            if (!['DO', 'DA', 'SDO', 'BDA'].includes(ancestor.tagName))
                continue;
            const name = ancestor.getAttribute('name');
            if (ancestor.tagName === 'DO')
                doName = name;
            if (ancestor.tagName === 'SDO')
                doName = `${doName}.${name}`;
            if (ancestor.tagName === 'DA') {
                daName = name;
                fc = (_c = ancestor.getAttribute('fc')) !== null && _c !== void 0 ? _c : '';
            }
            if (ancestor.tagName === 'BDA')
                daName = `${daName}.${name}`;
        }
        // eslint-disable-next-line no-continue
        if (!doName || !daName || !fc)
            continue;
        const fcdaAttrs = {
            ldInst,
            prefix,
            lnClass,
            lnInst,
            doName,
            daName,
            fc,
        };
        // eslint-disable-next-line no-continue
        if (findFcda(dataSet, fcdaAttrs))
            continue;
        actions.push({
            parent: dataSet,
            node: createElement$5(dataSet.ownerDocument, 'FCDA', fcdaAttrs),
            reference: null,
        });
    }
    return actions;
}
/** @returns Action array adding new `FCDA`s to parent [[`DataSet`]] */
function addFCDOs(dataSet, fcPaths) {
    var _a, _b;
    const actions = [];
    for (const fcPath of fcPaths) {
        const anyLn = fcPath.path.find(section => section.tagName === 'LN' || section.tagName === 'LN0');
        const lDevice = fcPath.path.find(section => section.tagName === 'LDevice');
        const ldInst = lDevice === null || lDevice === void 0 ? void 0 : lDevice.getAttribute('inst');
        const prefix = (_a = anyLn === null || anyLn === void 0 ? void 0 : anyLn.getAttribute('prefix')) !== null && _a !== void 0 ? _a : '';
        const lnClass = anyLn === null || anyLn === void 0 ? void 0 : anyLn.getAttribute('lnClass');
        const lnInst = (_b = anyLn === null || anyLn === void 0 ? void 0 : anyLn.getAttribute('inst')) !== null && _b !== void 0 ? _b : '';
        // eslint-disable-next-line no-continue
        if (!ldInst || !lnClass)
            continue;
        let doName = '';
        const { fc } = fcPath;
        for (const ancestor of fcPath.path) {
            // eslint-disable-next-line no-continue
            if (!['DO', 'SDO'].includes(ancestor.tagName))
                continue;
            const name = ancestor.getAttribute('name');
            if (ancestor.tagName === 'DO')
                doName = name;
            if (ancestor.tagName === 'SDO')
                doName = `${doName}.${name}`;
        }
        // eslint-disable-next-line no-continue
        if (!doName)
            continue;
        const fcdaAttrs = {
            ldInst,
            prefix,
            lnClass,
            lnInst,
            doName,
            fc,
        };
        // eslint-disable-next-line no-continue
        if (findFcda(dataSet, fcdaAttrs))
            continue;
        actions.push({
            parent: dataSet,
            node: createElement$5(dataSet.ownerDocument, 'FCDA', fcdaAttrs),
            reference: null,
        });
    }
    return actions;
}

function createElement$4(doc, tag, attrs) {
    const element = doc.createElementNS(doc.documentElement.namespaceURI, tag);
    Object.entries(attrs)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .filter(([_, value]) => value !== null)
        .forEach(([name, value]) => element.setAttribute(name, value));
    return element;
}
function removeDataSet(dataSet) {
    const dataSetRemove = [{ node: dataSet }];
    const ctrlBlockUpdates = controlBlocks(dataSet).map(ctrlBlock => ({
        element: ctrlBlock,
        attributes: { datSet: null, confRev: updatedConfRev(ctrlBlock) },
    }));
    const removeFCDAsActions = removeFCDAs(Array.from(dataSet.querySelectorAll(':scope > FCDA')));
    return dataSetRemove.concat(ctrlBlockUpdates, removeFCDAsActions);
}
/** @returns Update actions for `DataSet`s attributes and its `datSet` references */
function updateDateSetName(dataSet, attr) {
    const parent = dataSet.parentElement;
    if (!parent)
        return [];
    const dataSetUpdate = {
        element: dataSet,
        attributes: attr,
    };
    const newName = attr.name;
    if (!newName)
        return [dataSetUpdate];
    const controlBlockUpdates = controlBlocks(dataSet).map(element => ({
        element,
        attributes: { datSet: newName, confRev: updatedConfRev(element) },
    }));
    return [dataSetUpdate].concat(controlBlockUpdates);
}
function uniqueDataSetName(anyLn) {
    const nameCore = 'newDataSet';
    const siblingNames = Array.from(anyLn.querySelectorAll('DataSet')).map(child => { var _a; return (_a = child.getAttribute('name')) !== null && _a !== void 0 ? _a : child.tagName; });
    if (!siblingNames.length)
        return `${nameCore}_001`;
    let newName = '';
    // eslint-disable-next-line no-plusplus
    let i = 1;
    newName = `${nameCore}_${i.toString().padStart(3, '0')}`;
    while (i < siblingNames.length + 1) {
        if (!siblingNames.includes(newName))
            break;
        i += 1;
        newName = `${nameCore}_${i.toString().padStart(3, '0')}`;
    }
    return newName;
}
/**
 * @parent Parent element such as `LN0`, `LN`, `LDevice`, `AccessPoint` and `IED`
 * @attributes DataSet element attributes. Required but missing attributes
 *             will be added automatically.
 ** @returns Action inserting new `DataSet` to [[`parent`]] element */
function addDataSet(parent, attributes = {}) {
    const anyLn = parent.tagName === 'LN' || parent.tagName === 'LN0'
        ? parent
        : parent.querySelector('LN0, LN');
    if (!anyLn)
        return null;
    // eslint-disable-next-line no-param-reassign
    if (!attributes.name)
        attributes.name = uniqueDataSetName(anyLn);
    const dataSet = createElement$4(anyLn.ownerDocument, 'DataSet', attributes);
    return {
        parent: anyLn,
        node: dataSet,
        reference: getReference(anyLn, 'DataSet'),
    };
}

function getDisplayString(entry) {
    if (entry.startsWith('IED:'))
        return entry.replace(/^.*:/, '').trim();
    if (entry.startsWith('LN0:'))
        return 'LLN0';
    return entry.replace(/^.*>/, '').trim();
}
function getDataAttributeChildren(parent) {
    if (['LDevice', 'Server'].includes(parent.tagName))
        return Array.from(parent.children).filter(child => child.tagName === 'LDevice' ||
            child.tagName === 'LN0' ||
            child.tagName === 'LN');
    const id = parent.tagName === 'LN' || parent.tagName === 'LN0'
        ? parent.getAttribute('lnType')
        : parent.getAttribute('type');
    return Array.from(parent.ownerDocument.querySelectorAll(`LNodeType[id="${id}"] > DO, DOType[id="${id}"] > SDO, DOType[id="${id}"] > DA, DAType[id="${id}"] > BDA`));
}
function getDataObjectChildren(parent) {
    if (['LDevice', 'Server'].includes(parent.tagName))
        return Array.from(parent.children).filter(child => child.tagName === 'LDevice' ||
            child.tagName === 'LN0' ||
            child.tagName === 'LN');
    const id = parent.tagName === 'LN' || parent.tagName === 'LN0'
        ? parent.getAttribute('lnType')
        : parent.getAttribute('type');
    const dOs = Array.from(parent.ownerDocument.querySelectorAll(`LNodeType[id="${id}"] > DO, DOType[id="${id}"] > SDO`));
    const fCs = new Set();
    Array.from(parent.ownerDocument.querySelectorAll(`DOType[id="${id}"] > DA`)).forEach(da => {
        fCs.add(da.getAttribute('fc'));
    });
    const fcArr = Array.from(fCs);
    const out = [];
    return out.concat(dOs, fcArr);
}
function getReader(doc, getChildren) {
    return async (path) => {
        var _a;
        // eslint-disable-next-line no-unsafe-optional-chaining
        const [tagName, id] = (_a = path[path.length - 1]) === null || _a === void 0 ? void 0 : _a.split(': ', 2);
        const element = doc.querySelector(selector(tagName, id));
        if (tagName === 'FC')
            return { path, header: undefined, entries: [] };
        if (!element)
            return { path, header: y `<p>error</p>`, entries: [] };
        return {
            path,
            header: undefined,
            entries: getChildren(element).map(child => {
                if (typeof child === 'string')
                    return `FC: ${child}`;
                return `${child.tagName}: ${identity(child)}`;
            }),
        };
    };
}

function dataAttributePaths(doc, paths) {
    const daPaths = [];
    for (const path of paths) {
        const daPath = [];
        for (const section of path) {
            const [tag, id] = section.split(': ');
            const ancestor = doc.querySelector(selector(tag, id));
            if (ancestor)
                daPath.push(ancestor);
        }
        daPaths.push(daPath);
    }
    return daPaths;
}
function functionaContraintPaths(doc, paths) {
    const fcPaths = [];
    for (const path of paths) {
        const doPath = [];
        let fc = '';
        for (const section of path) {
            const [tag, id] = section.split(': ');
            if (tag === 'FC')
                fc = id;
            const ancestor = doc.querySelector(selector(tag, id));
            if (ancestor)
                doPath.push(ancestor);
        }
        fcPaths.push({ path: doPath, fc });
    }
    return fcPaths;
}
let DataSetElementEditor = class DataSetElementEditor extends s$3 {
    constructor() {
        super(...arguments);
        /** SCL change indicator */
        this.editCount = 0;
        this.someInputDiff = false;
    }
    get name() {
        return this.element ? this.element.getAttribute('name') : 'UNDEFINED';
    }
    get desc() {
        return this.element ? this.element.getAttribute('desc') : 'UNDEFINED';
    }
    onInputChange() {
        var _a;
        this.someInputDiff = Array.from((_a = this.inputs) !== null && _a !== void 0 ? _a : []).some(input => { var _a; return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.getAttribute(input.label)) !== input.maybeValue; });
    }
    saveChanges() {
        var _a;
        if (!this.element)
            return;
        const attributes = {};
        for (const input of (_a = this.inputs) !== null && _a !== void 0 ? _a : [])
            if (this.element.getAttribute(input.label) !== input.maybeValue)
                attributes[input.label] = input.maybeValue;
        this.dispatchEvent(newEditEvent(updateDateSetName(this.element, attributes)));
        this.onInputChange();
    }
    saveDataObjects() {
        var _a, _b, _c;
        const finder = (_a = this.dataObjectPicker) === null || _a === void 0 ? void 0 : _a.querySelector('oscd-finder-list');
        const paths = (_b = finder === null || finder === void 0 ? void 0 : finder.paths) !== null && _b !== void 0 ? _b : [];
        const actions = addFCDOs(this.element, functionaContraintPaths(this.element.ownerDocument, paths));
        this.dispatchEvent(newEditEvent(actions));
        (_c = this.dataObjectPicker) === null || _c === void 0 ? void 0 : _c.close();
    }
    saveDataAttributes() {
        var _a, _b, _c;
        const finder = (_a = this.dataAttributePicker) === null || _a === void 0 ? void 0 : _a.querySelector('oscd-finder-list');
        const paths = (_b = finder === null || finder === void 0 ? void 0 : finder.paths) !== null && _b !== void 0 ? _b : [];
        const actions = addFCDAs(this.element, dataAttributePaths(this.element.ownerDocument, paths));
        this.dispatchEvent(newEditEvent(actions));
        (_c = this.dataAttributePicker) === null || _c === void 0 ? void 0 : _c.close();
    }
    // eslint-disable-next-line class-methods-use-this
    renderHeader(subtitle) {
        return y `<h2>
      <div style="display:flex; flex-direction:row;">
        <div style="flex:auto;">
          <div>DataSet</div>
          <div class="headersubtitle">${subtitle}</div>
        </div>
        <slot name="change"></slot>
      </div>
    </h2>`;
    }
    renderDataObjectPicker() {
        var _a;
        const server = (_a = this.element) === null || _a === void 0 ? void 0 : _a.closest('Server');
        return y ` <mwc-button
        label="Add data object"
        icon="playlist_add"
        @click=${() => { var _a; return (_a = this.dataObjectPicker) === null || _a === void 0 ? void 0 : _a.show(); }}
      ></mwc-button
      ><mwc-dialog id="dopicker" heading="Add Data Attributes"
        ><oscd-finder-list
          multi
          .paths=${[[`Server: ${identity(server)}`]]}
          .read=${getReader(server.ownerDocument, getDataObjectChildren)}
          .getDisplayString=${getDisplayString}
          .getTitle=${(path) => path[path.length - 1]}
        ></oscd-finder-list>
        <mwc-button
          slot="secondaryAction"
          label="close"
          @click=${() => { var _a; return (_a = this.dataObjectPicker) === null || _a === void 0 ? void 0 : _a.close(); }}
        ></mwc-button>
        <mwc-button
          slot="primaryAction"
          label="save"
          icon="save"
          @click=${this.saveDataObjects}
        ></mwc-button>
      </mwc-dialog>`;
    }
    renderDataAttributePicker() {
        var _a;
        const server = (_a = this.element) === null || _a === void 0 ? void 0 : _a.closest('Server');
        return y ` <mwc-button
        label="Add data attribute"
        icon="playlist_add"
        @click=${() => { var _a; return (_a = this.dataAttributePicker) === null || _a === void 0 ? void 0 : _a.show(); }}
      ></mwc-button
      ><mwc-dialog id="dapicker" heading="Add Data Attributes"
        ><oscd-finder-list
          multi
          .paths=${[[`Server: ${identity(server)}`]]}
          .read=${getReader(server.ownerDocument, getDataAttributeChildren)}
          .getDisplayString=${getDisplayString}
          .getTitle=${(path) => path[path.length - 1]}
        ></oscd-finder-list>
        <mwc-button
          slot="secondaryAction"
          label="close"
          @click=${() => { var _a; return (_a = this.dataAttributePicker) === null || _a === void 0 ? void 0 : _a.close(); }}
        ></mwc-button>
        <mwc-button
          slot="primaryAction"
          label="save"
          icon="save"
          @click=${this.saveDataAttributes}
        ></mwc-button>
      </mwc-dialog>`;
    }
    renderContent() {
        var _a, _b;
        return y `<oscd-textfield
        id="${identity(this.element)}"
        tag="${(_b = (_a = this.element) === null || _a === void 0 ? void 0 : _a.tagName) !== null && _b !== void 0 ? _b : ''}"
        label="name"
        .maybeValue=${this.name}
        helper="scl.name"
        required
        @input=${() => this.onInputChange()}
      >
      </oscd-textfield>
      <oscd-textfield
        id="${identity(this.element)}"
        label="desc"
        .maybeValue=${this.desc}
        helper="scl.desc"
        nullable
        @input=${() => this.onInputChange()}
      >
      </oscd-textfield>
      <mwc-button
        class="save"
        label="save"
        icon="save"
        ?disabled=${!this.someInputDiff}
        @click=${() => this.saveChanges()}
      ></mwc-button>
      <hr color="lightgrey" />
      <div style="display: flex; flex-direction:row;align-self: center;">
        ${this.renderDataAttributePicker()} ${this.renderDataObjectPicker()}
      </div>
      <oscd-filtered-list
        >${Array.from(this.element.querySelectorAll('FCDA')).map(fcda => {
            const [ldInst, prefix, lnClass, lnInst, doName, daName, fc] = [
                'ldInst',
                'prefix',
                'lnClass',
                'lnInst',
                'doName',
                'daName',
                'fc',
            ].map(attributeName => { var _a; return (_a = fcda.getAttribute(attributeName)) !== null && _a !== void 0 ? _a : ''; });
            return y `<mwc-list-item hasMeta selected twoline value="${identity(fcda)}"
            ><span>${doName}${daName ? `.${daName} [${fc}]` : ` [${fc}]`}</span
            ><span slot="secondary"
              >${`${ldInst}/${prefix}${lnClass}${lnInst}`}</span
            ></span>
            <span slot="meta"><mwc-icon-button icon="delete" @click=${() => this.dispatchEvent(newEditEvent(removeFCDA(fcda)))}></mwc-icon-button>
            </span>
          </mwc-list-item>`;
        })}</oscd-filtered-list
      >`;
    }
    render() {
        if (this.element)
            return y `<div class="content">
        ${this.renderHeader(identity(this.element))}${this.renderContent()}
      </div>`;
        return y `<div class="content">
      ${this.renderHeader('publisher.nocontent')}
    </div>`;
    }
};
DataSetElementEditor.styles = i$6 `
    .content {
      display: flex;
      flex-direction: column;
      background-color: var(--mdc-theme-surface);
    }

    .content > * {
      display: block;
      margin: 4px 8px 16px;
    }

    .save {
      display: flex;
      align-self: flex-end;
    }

    h2 {
      color: var(--mdc-theme-on-surface);
      font-family: 'Roboto', sans-serif;
      font-weight: 300;

      margin: 0px;
      padding-left: 0.3em;
      transition: background-color 150ms linear;
    }

    .headersubtitle {
      font-size: 16px;
      font-weight: 200;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    mwc-list-item {
      --mdc-list-item-meta-size: 48px;
    }

    *[iconTrailing='search'] {
      --mdc-shape-small: 28px;
    }
  `;
__decorate([
    e$6({ attribute: false })
], DataSetElementEditor.prototype, "doc", void 0);
__decorate([
    e$6({ attribute: false })
], DataSetElementEditor.prototype, "element", void 0);
__decorate([
    e$6({ type: Number })
], DataSetElementEditor.prototype, "editCount", void 0);
__decorate([
    t$2()
], DataSetElementEditor.prototype, "name", null);
__decorate([
    t$2()
], DataSetElementEditor.prototype, "desc", null);
__decorate([
    t$2()
], DataSetElementEditor.prototype, "someInputDiff", void 0);
__decorate([
    e$4('oscd-textfield')
], DataSetElementEditor.prototype, "inputs", void 0);
__decorate([
    i$3('#dapicker')
], DataSetElementEditor.prototype, "dataAttributePicker", void 0);
__decorate([
    i$3('#dopicker')
], DataSetElementEditor.prototype, "dataObjectPicker", void 0);
DataSetElementEditor = __decorate([
    e$7('data-set-element-editor')
], DataSetElementEditor);

/** A potentially `nullable` labelled checkbox. */
let OscdCheckbox = class OscdCheckbox extends s$3 {
    constructor() {
        super(...arguments);
        this.label = '';
        /** Parenthetical information rendered after the label: `label (helper)` */
        this.helper = '';
        /** Whether [[`maybeValue`]] may be `null` */
        this.nullable = false;
        /** The default `checked` state while [[`maybeValue`]] is `null`. */
        this.defaultChecked = false;
        /** Disables component including null switch */
        this.disabled = false;
        this.isNull = false;
        this.initChecked = false;
        this.deactivateCheckbox = false;
        this.nulled = null;
    }
    /** Is `"true"` when checked, `"false"` un-checked, `null` if [[`nullable`]]. */
    get maybeValue() {
        // eslint-disable-next-line no-nested-ternary
        return this.null ? null : this.checked ? 'true' : 'false';
    }
    set maybeValue(check) {
        if (check === null)
            this.null = true;
        else {
            this.null = false;
            this.checked = check === 'true';
        }
    }
    get null() {
        return this.nullable && this.isNull;
    }
    set null(value) {
        if (!this.nullable || value === this.isNull)
            return;
        this.isNull = value;
        if (this.null)
            this.disable();
        else
            this.enable();
    }
    get checked() {
        var _a, _b;
        return (_b = (_a = this.checkbox) === null || _a === void 0 ? void 0 : _a.checked) !== null && _b !== void 0 ? _b : this.initChecked;
    }
    set checked(value) {
        if (this.checkbox)
            this.checkbox.checked = value;
        else
            this.initChecked = value;
    }
    get formfieldLabel() {
        return this.helper ? `${this.helper} (${this.label})` : this.label;
    }
    // eslint-disable-next-line class-methods-use-this
    checkValidity() {
        return true;
    }
    enable() {
        if (this.nulled === null)
            return;
        this.checked = this.nulled;
        this.nulled = null;
        this.deactivateCheckbox = false;
    }
    disable() {
        if (this.nulled !== null)
            return;
        this.nulled = this.checked;
        this.checked = this.defaultChecked;
        this.deactivateCheckbox = true;
    }
    firstUpdated() {
        this.requestUpdate();
    }
    renderSwitch() {
        if (this.nullable) {
            return y `<mwc-switch
        style="margin-left: 12px;"
        ?selected=${!this.null}
        ?disabled=${this.disabled}
        @click=${() => {
                this.null = !this.nullSwitch.selected;
                this.dispatchEvent(new Event('input'));
            }}
      ></mwc-switch>`;
        }
        return y ``;
    }
    render() {
        return y `
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">
          <mwc-formfield
            label="${this.formfieldLabel}"
            style="${this.deactivateCheckbox || this.disabled
            ? `--mdc-theme-text-primary-on-background:rgba(0, 0, 0, 0.38)`
            : ``}"
            ><mwc-checkbox
              ?checked=${this.initChecked}
              ?disabled=${this.deactivateCheckbox || this.disabled}
              @change=${() => this.dispatchEvent(new Event('input'))}
            ></mwc-checkbox
          ></mwc-formfield>
        </div>
        <div style="display: flex; align-items: center;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
    }
};
__decorate([
    e$6({ type: String })
], OscdCheckbox.prototype, "label", void 0);
__decorate([
    e$6({ type: String })
], OscdCheckbox.prototype, "helper", void 0);
__decorate([
    e$6({ type: Boolean })
], OscdCheckbox.prototype, "nullable", void 0);
__decorate([
    e$6({ type: Boolean })
], OscdCheckbox.prototype, "defaultChecked", void 0);
__decorate([
    e$6({ type: String })
], OscdCheckbox.prototype, "maybeValue", null);
__decorate([
    e$6({ type: Boolean })
], OscdCheckbox.prototype, "disabled", void 0);
__decorate([
    t$2()
], OscdCheckbox.prototype, "null", null);
__decorate([
    t$2()
], OscdCheckbox.prototype, "checked", null);
__decorate([
    t$2()
], OscdCheckbox.prototype, "deactivateCheckbox", void 0);
__decorate([
    t$2()
], OscdCheckbox.prototype, "formfieldLabel", null);
__decorate([
    i$3('mwc-switch')
], OscdCheckbox.prototype, "nullSwitch", void 0);
__decorate([
    i$3('mwc-checkbox')
], OscdCheckbox.prototype, "checkbox", void 0);
OscdCheckbox = __decorate([
    e$7('oscd-checkbox')
], OscdCheckbox);

/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];
/**
 * Ensures that preventDefault is only called if the containing element
 * doesn't consume the event, and it will cause an unintended scroll.
 *
 * @param evt keyboard event to be prevented.
 */
var preventDefaultEvent = function (evt) {
    var target = evt.target;
    if (!target) {
        return;
    }
    var tagName = ("" + target.tagName).toLowerCase();
    if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
        evt.preventDefault();
    }
};

/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * Initializes a state object for typeahead. Use the same reference for calls to
 * typeahead functions.
 *
 * @return The current state of the typeahead process. Each state reference
 *     represents a typeahead instance as the reference is typically mutated
 *     in-place.
 */
function initState() {
    var state = {
        bufferClearTimeout: 0,
        currentFirstChar: '',
        sortedIndexCursor: 0,
        typeaheadBuffer: '',
    };
    return state;
}
/**
 * Initializes typeahead state by indexing the current list items by primary
 * text into the sortedIndexByFirstChar data structure.
 *
 * @param listItemCount numer of items in the list
 * @param getPrimaryTextByItemIndex function that returns the primary text at a
 *     given index
 *
 * @return Map that maps the first character of the primary text to the full
 *     list text and it's index
 */
function initSortedIndex(listItemCount, getPrimaryTextByItemIndex) {
    var sortedIndexByFirstChar = new Map();
    // Aggregate item text to index mapping
    for (var i = 0; i < listItemCount; i++) {
        var primaryText = getPrimaryTextByItemIndex(i).trim();
        if (!primaryText) {
            continue;
        }
        var firstChar = primaryText[0].toLowerCase();
        if (!sortedIndexByFirstChar.has(firstChar)) {
            sortedIndexByFirstChar.set(firstChar, []);
        }
        sortedIndexByFirstChar.get(firstChar).push({ text: primaryText.toLowerCase(), index: i });
    }
    // Sort the mapping
    // TODO(b/157162694): Investigate replacing forEach with Map.values()
    sortedIndexByFirstChar.forEach(function (values) {
        values.sort(function (first, second) {
            return first.index - second.index;
        });
    });
    return sortedIndexByFirstChar;
}
/**
 * Given the next desired character from the user, it attempts to find the next
 * list option matching the buffer. Wraps around if at the end of options.
 *
 * @param opts Options and accessors
 *   - nextChar - the next character to match against items
 *   - sortedIndexByFirstChar - output of `initSortedIndex(...)`
 *   - focusedItemIndex - the index of the currently focused item
 *   - focusItemAtIndex - function that focuses a list item at given index
 *   - skipFocus - whether or not to focus the matched item
 *   - isItemAtIndexDisabled - function that determines whether an item at a
 *        given index is disabled
 * @param state The typeahead state instance. See `initState`.
 *
 * @return The index of the matched item, or -1 if no match.
 */
function matchItem(opts, state) {
    var nextChar = opts.nextChar, focusItemAtIndex = opts.focusItemAtIndex, sortedIndexByFirstChar = opts.sortedIndexByFirstChar, focusedItemIndex = opts.focusedItemIndex, skipFocus = opts.skipFocus, isItemAtIndexDisabled = opts.isItemAtIndexDisabled;
    clearTimeout(state.bufferClearTimeout);
    state.bufferClearTimeout = setTimeout(function () {
        clearBuffer(state);
    }, numbers$5.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS);
    state.typeaheadBuffer = state.typeaheadBuffer + nextChar;
    var index;
    if (state.typeaheadBuffer.length === 1) {
        index = matchFirstChar(sortedIndexByFirstChar, focusedItemIndex, isItemAtIndexDisabled, state);
    }
    else {
        index = matchAllChars(sortedIndexByFirstChar, isItemAtIndexDisabled, state);
    }
    if (index !== -1 && !skipFocus) {
        focusItemAtIndex(index);
    }
    return index;
}
/**
 * Matches the user's single input character in the buffer to the
 * next option that begins with such character. Wraps around if at
 * end of options. Returns -1 if no match is found.
 */
function matchFirstChar(sortedIndexByFirstChar, focusedItemIndex, isItemAtIndexDisabled, state) {
    var firstChar = state.typeaheadBuffer[0];
    var itemsMatchingFirstChar = sortedIndexByFirstChar.get(firstChar);
    if (!itemsMatchingFirstChar) {
        return -1;
    }
    // Has the same firstChar been recently matched?
    // Also, did starting index remain the same between key presses?
    // If both hold true, simply increment index.
    if (firstChar === state.currentFirstChar &&
        itemsMatchingFirstChar[state.sortedIndexCursor].index ===
            focusedItemIndex) {
        state.sortedIndexCursor =
            (state.sortedIndexCursor + 1) % itemsMatchingFirstChar.length;
        var newIndex = itemsMatchingFirstChar[state.sortedIndexCursor].index;
        if (!isItemAtIndexDisabled(newIndex)) {
            return newIndex;
        }
    }
    // If we're here, it means one of the following happened:
    // - either firstChar or startingIndex has changed, invalidating the
    // cursor.
    // - The next item of typeahead is disabled, so we have to look further.
    state.currentFirstChar = firstChar;
    var newCursorPosition = -1;
    var cursorPosition;
    // Find the first non-disabled item as a fallback.
    for (cursorPosition = 0; cursorPosition < itemsMatchingFirstChar.length; cursorPosition++) {
        if (!isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)) {
            newCursorPosition = cursorPosition;
            break;
        }
    }
    // Advance cursor to first item matching the firstChar that is positioned
    // after starting item. Cursor is unchanged from fallback if there's no
    // such item.
    for (; cursorPosition < itemsMatchingFirstChar.length; cursorPosition++) {
        if (itemsMatchingFirstChar[cursorPosition].index > focusedItemIndex &&
            !isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)) {
            newCursorPosition = cursorPosition;
            break;
        }
    }
    if (newCursorPosition !== -1) {
        state.sortedIndexCursor = newCursorPosition;
        return itemsMatchingFirstChar[state.sortedIndexCursor].index;
    }
    return -1;
}
/**
 * Attempts to find the next item that matches all of the typeahead buffer.
 * Wraps around if at end of options. Returns -1 if no match is found.
 */
function matchAllChars(sortedIndexByFirstChar, isItemAtIndexDisabled, state) {
    var firstChar = state.typeaheadBuffer[0];
    var itemsMatchingFirstChar = sortedIndexByFirstChar.get(firstChar);
    if (!itemsMatchingFirstChar) {
        return -1;
    }
    // Do nothing if text already matches
    var startingItem = itemsMatchingFirstChar[state.sortedIndexCursor];
    if (startingItem.text.lastIndexOf(state.typeaheadBuffer, 0) === 0 &&
        !isItemAtIndexDisabled(startingItem.index)) {
        return startingItem.index;
    }
    // Find next item that matches completely; if no match, we'll eventually
    // loop around to same position
    var cursorPosition = (state.sortedIndexCursor + 1) % itemsMatchingFirstChar.length;
    var nextCursorPosition = -1;
    while (cursorPosition !== state.sortedIndexCursor) {
        var currentItem = itemsMatchingFirstChar[cursorPosition];
        var matches = currentItem.text.lastIndexOf(state.typeaheadBuffer, 0) === 0;
        var isEnabled = !isItemAtIndexDisabled(currentItem.index);
        if (matches && isEnabled) {
            nextCursorPosition = cursorPosition;
            break;
        }
        cursorPosition = (cursorPosition + 1) % itemsMatchingFirstChar.length;
    }
    if (nextCursorPosition !== -1) {
        state.sortedIndexCursor = nextCursorPosition;
        return itemsMatchingFirstChar[state.sortedIndexCursor].index;
    }
    return -1;
}
/**
 * Whether or not the given typeahead instaance state is currently typing.
 *
 * @param state The typeahead state instance. See `initState`.
 */
function isTypingInProgress(state) {
    return state.typeaheadBuffer.length > 0;
}
/**
 * Clears the typeahaed buffer so that it resets item matching to the first
 * character.
 *
 * @param state The typeahead state instance. See `initState`.
 */
function clearBuffer(state) {
    state.typeaheadBuffer = '';
}
/**
 * Given a keydown event, it calculates whether or not to automatically focus a
 * list item depending on what was typed mimicing the typeahead functionality of
 * a standard <select> element that is open.
 *
 * @param opts Options and accessors
 *   - event - the KeyboardEvent to handle and parse
 *   - sortedIndexByFirstChar - output of `initSortedIndex(...)`
 *   - focusedItemIndex - the index of the currently focused item
 *   - focusItemAtIndex - function that focuses a list item at given index
 *   - isItemAtFocusedIndexDisabled - whether or not the currently focused item
 *      is disabled
 *   - isTargetListItem - whether or not the event target is a list item
 * @param state The typeahead state instance. See `initState`.
 *
 * @returns index of the item matched by the keydown. -1 if not matched.
 */
function handleKeydown(opts, state) {
    var event = opts.event, isTargetListItem = opts.isTargetListItem, focusedItemIndex = opts.focusedItemIndex, focusItemAtIndex = opts.focusItemAtIndex, sortedIndexByFirstChar = opts.sortedIndexByFirstChar, isItemAtIndexDisabled = opts.isItemAtIndexDisabled;
    var isArrowLeft = normalizeKey(event) === 'ArrowLeft';
    var isArrowUp = normalizeKey(event) === 'ArrowUp';
    var isArrowRight = normalizeKey(event) === 'ArrowRight';
    var isArrowDown = normalizeKey(event) === 'ArrowDown';
    var isHome = normalizeKey(event) === 'Home';
    var isEnd = normalizeKey(event) === 'End';
    var isEnter = normalizeKey(event) === 'Enter';
    var isSpace = normalizeKey(event) === 'Spacebar';
    if (event.altKey || event.ctrlKey || event.metaKey || isArrowLeft ||
        isArrowUp || isArrowRight || isArrowDown || isHome || isEnd || isEnter) {
        return -1;
    }
    var isCharacterKey = !isSpace && event.key.length === 1;
    if (isCharacterKey) {
        preventDefaultEvent(event);
        var matchItemOpts = {
            focusItemAtIndex: focusItemAtIndex,
            focusedItemIndex: focusedItemIndex,
            nextChar: event.key.toLowerCase(),
            sortedIndexByFirstChar: sortedIndexByFirstChar,
            skipFocus: false,
            isItemAtIndexDisabled: isItemAtIndexDisabled,
        };
        return matchItem(matchItemOpts, state);
    }
    if (!isSpace) {
        return -1;
    }
    if (isTargetListItem) {
        preventDefaultEvent(event);
    }
    var typeaheadOnListItem = isTargetListItem && isTypingInProgress(state);
    if (typeaheadOnListItem) {
        var matchItemOpts = {
            focusItemAtIndex: focusItemAtIndex,
            focusedItemIndex: focusedItemIndex,
            nextChar: ' ',
            sortedIndexByFirstChar: sortedIndexByFirstChar,
            skipFocus: false,
            isItemAtIndexDisabled: isItemAtIndexDisabled,
        };
        // space participates in typeahead matching if in rapid typing mode
        return matchItem(matchItemOpts, state);
    }
    return -1;
}

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    ACTIVATED: 'mdc-select--activated',
    DISABLED: 'mdc-select--disabled',
    FOCUSED: 'mdc-select--focused',
    INVALID: 'mdc-select--invalid',
    MENU_INVALID: 'mdc-select__menu--invalid',
    OUTLINED: 'mdc-select--outlined',
    REQUIRED: 'mdc-select--required',
    ROOT: 'mdc-select',
    WITH_LEADING_ICON: 'mdc-select--with-leading-icon',
};
var strings = {
    ARIA_CONTROLS: 'aria-controls',
    ARIA_DESCRIBEDBY: 'aria-describedby',
    ARIA_SELECTED_ATTR: 'aria-selected',
    CHANGE_EVENT: 'MDCSelect:change',
    HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
    LABEL_SELECTOR: '.mdc-floating-label',
    LEADING_ICON_SELECTOR: '.mdc-select__icon',
    LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
    MENU_SELECTOR: '.mdc-select__menu',
    OUTLINE_SELECTOR: '.mdc-notched-outline',
    SELECTED_TEXT_SELECTOR: '.mdc-select__selected-text',
    SELECT_ANCHOR_SELECTOR: '.mdc-select__anchor',
    VALUE_ATTR: 'data-value',
};
var numbers = {
    LABEL_SCALE: 0.75,
    UNSET_INDEX: -1,
    CLICK_DEBOUNCE_TIMEOUT_MS: 330,
};

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCSelectFoundation = /** @class */ (function (_super) {
    __extends(MDCSelectFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */
    /**
     * @param adapter
     * @param foundationMap Map from subcomponent names to their subfoundations.
     */
    function MDCSelectFoundation(adapter, foundationMap) {
        if (foundationMap === void 0) { foundationMap = {}; }
        var _this = _super.call(this, __assign(__assign({}, MDCSelectFoundation.defaultAdapter), adapter)) || this;
        // Disabled state
        _this.disabled = false;
        // isMenuOpen is used to track the state of the menu by listening to the
        // MDCMenuSurface:closed event For reference, menu.open will return false if
        // the menu is still closing, but isMenuOpen returns false only after the menu
        // has closed
        _this.isMenuOpen = false;
        // By default, select is invalid if it is required but no value is selected.
        _this.useDefaultValidation = true;
        _this.customValidity = true;
        _this.lastSelectedIndex = numbers.UNSET_INDEX;
        _this.clickDebounceTimeout = 0;
        _this.recentlyClicked = false;
        _this.leadingIcon = foundationMap.leadingIcon;
        _this.helperText = foundationMap.helperText;
        return _this;
    }
    Object.defineProperty(MDCSelectFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCSelectFoundation, "numbers", {
        get: function () {
            return numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCSelectFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCSelectFoundation, "defaultAdapter", {
        /**
         * See {@link MDCSelectAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                activateBottomLine: function () { return undefined; },
                deactivateBottomLine: function () { return undefined; },
                getSelectedIndex: function () { return -1; },
                setSelectedIndex: function () { return undefined; },
                hasLabel: function () { return false; },
                floatLabel: function () { return undefined; },
                getLabelWidth: function () { return 0; },
                setLabelRequired: function () { return undefined; },
                hasOutline: function () { return false; },
                notchOutline: function () { return undefined; },
                closeOutline: function () { return undefined; },
                setRippleCenter: function () { return undefined; },
                notifyChange: function () { return undefined; },
                setSelectedText: function () { return undefined; },
                isSelectAnchorFocused: function () { return false; },
                getSelectAnchorAttr: function () { return ''; },
                setSelectAnchorAttr: function () { return undefined; },
                removeSelectAnchorAttr: function () { return undefined; },
                addMenuClass: function () { return undefined; },
                removeMenuClass: function () { return undefined; },
                openMenu: function () { return undefined; },
                closeMenu: function () { return undefined; },
                getAnchorElement: function () { return null; },
                setMenuAnchorElement: function () { return undefined; },
                setMenuAnchorCorner: function () { return undefined; },
                setMenuWrapFocus: function () { return undefined; },
                focusMenuItemAtIndex: function () { return undefined; },
                getMenuItemCount: function () { return 0; },
                getMenuItemValues: function () { return []; },
                getMenuItemTextAtIndex: function () { return ''; },
                isTypeaheadInProgress: function () { return false; },
                typeaheadMatchItem: function () { return -1; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    /** Returns the index of the currently selected menu item, or -1 if none. */
    MDCSelectFoundation.prototype.getSelectedIndex = function () {
        return this.adapter.getSelectedIndex();
    };
    MDCSelectFoundation.prototype.setSelectedIndex = function (index, closeMenu, skipNotify) {
        if (closeMenu === void 0) { closeMenu = false; }
        if (skipNotify === void 0) { skipNotify = false; }
        if (index >= this.adapter.getMenuItemCount()) {
            return;
        }
        if (index === numbers.UNSET_INDEX) {
            this.adapter.setSelectedText('');
        }
        else {
            this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(index).trim());
        }
        this.adapter.setSelectedIndex(index);
        if (closeMenu) {
            this.adapter.closeMenu();
        }
        if (!skipNotify && this.lastSelectedIndex !== index) {
            this.handleChange();
        }
        this.lastSelectedIndex = index;
    };
    MDCSelectFoundation.prototype.setValue = function (value, skipNotify) {
        if (skipNotify === void 0) { skipNotify = false; }
        var index = this.adapter.getMenuItemValues().indexOf(value);
        this.setSelectedIndex(index, /** closeMenu */ false, skipNotify);
    };
    MDCSelectFoundation.prototype.getValue = function () {
        var index = this.adapter.getSelectedIndex();
        var menuItemValues = this.adapter.getMenuItemValues();
        return index !== numbers.UNSET_INDEX ? menuItemValues[index] : '';
    };
    MDCSelectFoundation.prototype.getDisabled = function () {
        return this.disabled;
    };
    MDCSelectFoundation.prototype.setDisabled = function (isDisabled) {
        this.disabled = isDisabled;
        if (this.disabled) {
            this.adapter.addClass(cssClasses.DISABLED);
            this.adapter.closeMenu();
        }
        else {
            this.adapter.removeClass(cssClasses.DISABLED);
        }
        if (this.leadingIcon) {
            this.leadingIcon.setDisabled(this.disabled);
        }
        if (this.disabled) {
            // Prevent click events from focusing select. Simply pointer-events: none
            // is not enough since screenreader clicks may bypass this.
            this.adapter.removeSelectAnchorAttr('tabindex');
        }
        else {
            this.adapter.setSelectAnchorAttr('tabindex', '0');
        }
        this.adapter.setSelectAnchorAttr('aria-disabled', this.disabled.toString());
    };
    /** Opens the menu. */
    MDCSelectFoundation.prototype.openMenu = function () {
        this.adapter.addClass(cssClasses.ACTIVATED);
        this.adapter.openMenu();
        this.isMenuOpen = true;
        this.adapter.setSelectAnchorAttr('aria-expanded', 'true');
    };
    /**
     * @param content Sets the content of the helper text.
     */
    MDCSelectFoundation.prototype.setHelperTextContent = function (content) {
        if (this.helperText) {
            this.helperText.setContent(content);
        }
    };
    /**
     * Re-calculates if the notched outline should be notched and if the label
     * should float.
     */
    MDCSelectFoundation.prototype.layout = function () {
        if (this.adapter.hasLabel()) {
            var optionHasValue = this.getValue().length > 0;
            var isFocused = this.adapter.hasClass(cssClasses.FOCUSED);
            var shouldFloatAndNotch = optionHasValue || isFocused;
            var isRequired = this.adapter.hasClass(cssClasses.REQUIRED);
            this.notchOutline(shouldFloatAndNotch);
            this.adapter.floatLabel(shouldFloatAndNotch);
            this.adapter.setLabelRequired(isRequired);
        }
    };
    /**
     * Synchronizes the list of options with the state of the foundation. Call
     * this whenever menu options are dynamically updated.
     */
    MDCSelectFoundation.prototype.layoutOptions = function () {
        var menuItemValues = this.adapter.getMenuItemValues();
        var selectedIndex = menuItemValues.indexOf(this.getValue());
        this.setSelectedIndex(selectedIndex, /** closeMenu */ false, /** skipNotify */ true);
    };
    MDCSelectFoundation.prototype.handleMenuOpened = function () {
        if (this.adapter.getMenuItemValues().length === 0) {
            return;
        }
        // Menu should open to the last selected element, should open to first menu item otherwise.
        var selectedIndex = this.getSelectedIndex();
        var focusItemIndex = selectedIndex >= 0 ? selectedIndex : 0;
        this.adapter.focusMenuItemAtIndex(focusItemIndex);
    };
    MDCSelectFoundation.prototype.handleMenuClosing = function () {
        this.adapter.setSelectAnchorAttr('aria-expanded', 'false');
    };
    MDCSelectFoundation.prototype.handleMenuClosed = function () {
        this.adapter.removeClass(cssClasses.ACTIVATED);
        this.isMenuOpen = false;
        // Unfocus the select if menu is closed without a selection
        if (!this.adapter.isSelectAnchorFocused()) {
            this.blur();
        }
    };
    /**
     * Handles value changes, via change event or programmatic updates.
     */
    MDCSelectFoundation.prototype.handleChange = function () {
        this.layout();
        this.adapter.notifyChange(this.getValue());
        var isRequired = this.adapter.hasClass(cssClasses.REQUIRED);
        if (isRequired && this.useDefaultValidation) {
            this.setValid(this.isValid());
        }
    };
    MDCSelectFoundation.prototype.handleMenuItemAction = function (index) {
        this.setSelectedIndex(index, /** closeMenu */ true);
    };
    /**
     * Handles focus events from select element.
     */
    MDCSelectFoundation.prototype.handleFocus = function () {
        this.adapter.addClass(cssClasses.FOCUSED);
        this.layout();
        this.adapter.activateBottomLine();
    };
    /**
     * Handles blur events from select element.
     */
    MDCSelectFoundation.prototype.handleBlur = function () {
        if (this.isMenuOpen) {
            return;
        }
        this.blur();
    };
    MDCSelectFoundation.prototype.handleClick = function (normalizedX) {
        if (this.disabled || this.recentlyClicked) {
            return;
        }
        this.setClickDebounceTimeout();
        if (this.isMenuOpen) {
            this.adapter.closeMenu();
            return;
        }
        this.adapter.setRippleCenter(normalizedX);
        this.openMenu();
    };
    /**
     * Handles keydown events on select element. Depending on the type of
     * character typed, does typeahead matching or opens menu.
     */
    MDCSelectFoundation.prototype.handleKeydown = function (event) {
        if (this.isMenuOpen || !this.adapter.hasClass(cssClasses.FOCUSED)) {
            return;
        }
        var isEnter = normalizeKey(event) === KEY.ENTER;
        var isSpace = normalizeKey(event) === KEY.SPACEBAR;
        var arrowUp = normalizeKey(event) === KEY.ARROW_UP;
        var arrowDown = normalizeKey(event) === KEY.ARROW_DOWN;
        var isModifier = event.ctrlKey || event.metaKey;
        // Typeahead
        if (!isModifier &&
            (!isSpace && event.key && event.key.length === 1 ||
                isSpace && this.adapter.isTypeaheadInProgress())) {
            var key = isSpace ? ' ' : event.key;
            var typeaheadNextIndex = this.adapter.typeaheadMatchItem(key, this.getSelectedIndex());
            if (typeaheadNextIndex >= 0) {
                this.setSelectedIndex(typeaheadNextIndex);
            }
            event.preventDefault();
            return;
        }
        if (!isEnter && !isSpace && !arrowUp && !arrowDown) {
            return;
        }
        this.openMenu();
        event.preventDefault();
    };
    /**
     * Opens/closes the notched outline.
     */
    MDCSelectFoundation.prototype.notchOutline = function (openNotch) {
        if (!this.adapter.hasOutline()) {
            return;
        }
        var isFocused = this.adapter.hasClass(cssClasses.FOCUSED);
        if (openNotch) {
            var labelScale = numbers.LABEL_SCALE;
            var labelWidth = this.adapter.getLabelWidth() * labelScale;
            this.adapter.notchOutline(labelWidth);
        }
        else if (!isFocused) {
            this.adapter.closeOutline();
        }
    };
    /**
     * Sets the aria label of the leading icon.
     */
    MDCSelectFoundation.prototype.setLeadingIconAriaLabel = function (label) {
        if (this.leadingIcon) {
            this.leadingIcon.setAriaLabel(label);
        }
    };
    /**
     * Sets the text content of the leading icon.
     */
    MDCSelectFoundation.prototype.setLeadingIconContent = function (content) {
        if (this.leadingIcon) {
            this.leadingIcon.setContent(content);
        }
    };
    MDCSelectFoundation.prototype.getUseDefaultValidation = function () {
        return this.useDefaultValidation;
    };
    MDCSelectFoundation.prototype.setUseDefaultValidation = function (useDefaultValidation) {
        this.useDefaultValidation = useDefaultValidation;
    };
    MDCSelectFoundation.prototype.setValid = function (isValid) {
        if (!this.useDefaultValidation) {
            this.customValidity = isValid;
        }
        this.adapter.setSelectAnchorAttr('aria-invalid', (!isValid).toString());
        if (isValid) {
            this.adapter.removeClass(cssClasses.INVALID);
            this.adapter.removeMenuClass(cssClasses.MENU_INVALID);
        }
        else {
            this.adapter.addClass(cssClasses.INVALID);
            this.adapter.addMenuClass(cssClasses.MENU_INVALID);
        }
        this.syncHelperTextValidity(isValid);
    };
    MDCSelectFoundation.prototype.isValid = function () {
        if (this.useDefaultValidation &&
            this.adapter.hasClass(cssClasses.REQUIRED) &&
            !this.adapter.hasClass(cssClasses.DISABLED)) {
            // See notes for required attribute under https://www.w3.org/TR/html52/sec-forms.html#the-select-element
            // TL;DR: Invalid if no index is selected, or if the first index is selected and has an empty value.
            return this.getSelectedIndex() !== numbers.UNSET_INDEX &&
                (this.getSelectedIndex() !== 0 || Boolean(this.getValue()));
        }
        return this.customValidity;
    };
    MDCSelectFoundation.prototype.setRequired = function (isRequired) {
        if (isRequired) {
            this.adapter.addClass(cssClasses.REQUIRED);
        }
        else {
            this.adapter.removeClass(cssClasses.REQUIRED);
        }
        this.adapter.setSelectAnchorAttr('aria-required', isRequired.toString());
        this.adapter.setLabelRequired(isRequired);
    };
    MDCSelectFoundation.prototype.getRequired = function () {
        return this.adapter.getSelectAnchorAttr('aria-required') === 'true';
    };
    MDCSelectFoundation.prototype.init = function () {
        var anchorEl = this.adapter.getAnchorElement();
        if (anchorEl) {
            this.adapter.setMenuAnchorElement(anchorEl);
            this.adapter.setMenuAnchorCorner(Corner.BOTTOM_START);
        }
        this.adapter.setMenuWrapFocus(false);
        this.setDisabled(this.adapter.hasClass(cssClasses.DISABLED));
        this.syncHelperTextValidity(!this.adapter.hasClass(cssClasses.INVALID));
        this.layout();
        this.layoutOptions();
    };
    /**
     * Unfocuses the select component.
     */
    MDCSelectFoundation.prototype.blur = function () {
        this.adapter.removeClass(cssClasses.FOCUSED);
        this.layout();
        this.adapter.deactivateBottomLine();
        var isRequired = this.adapter.hasClass(cssClasses.REQUIRED);
        if (isRequired && this.useDefaultValidation) {
            this.setValid(this.isValid());
        }
    };
    MDCSelectFoundation.prototype.syncHelperTextValidity = function (isValid) {
        if (!this.helperText) {
            return;
        }
        this.helperText.setValidity(isValid);
        var helperTextVisible = this.helperText.isVisible();
        var helperTextId = this.helperText.getId();
        if (helperTextVisible && helperTextId) {
            this.adapter.setSelectAnchorAttr(strings.ARIA_DESCRIBEDBY, helperTextId);
        }
        else {
            // Needed because screenreaders will read labels pointed to by
            // `aria-describedby` even if they are `aria-hidden`.
            this.adapter.removeSelectAnchorAttr(strings.ARIA_DESCRIBEDBY);
        }
    };
    MDCSelectFoundation.prototype.setClickDebounceTimeout = function () {
        var _this = this;
        clearTimeout(this.clickDebounceTimeout);
        this.clickDebounceTimeout = setTimeout(function () {
            _this.recentlyClicked = false;
        }, numbers.CLICK_DEBOUNCE_TIMEOUT_MS);
        this.recentlyClicked = true;
    };
    return MDCSelectFoundation;
}(MDCFoundation));
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var MDCSelectFoundation$1 = MDCSelectFoundation;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const createValidityObj = (customValidity = {}) => {
    /*
     * We need to make ValidityState an object because it is readonly and
     * we cannot use the spread operator. Also, we don't export
     * `CustomValidityState` because it is a leaky implementation and the user
     * already has access to `ValidityState` in lib.dom.ts. Also an interface
     * {a: Type} can be casted to {readonly a: Type} so passing any object
     * should be fine.
     */
    const objectifiedCustomValidity = {};
    // eslint-disable-next-line guard-for-in
    for (const propName in customValidity) {
        /*
         * Casting is needed because ValidityState's props are all readonly and
         * thus cannot be set on `onjectifiedCustomValidity`. In the end, the
         * interface is the same as ValidityState (but not readonly), but the
         * function signature casts the output to ValidityState (thus readonly).
         */
        objectifiedCustomValidity[propName] =
            customValidity[propName];
    }
    return Object.assign({ badInput: false, customError: false, patternMismatch: false, rangeOverflow: false, rangeUnderflow: false, stepMismatch: false, tooLong: false, tooShort: false, typeMismatch: false, valid: true, valueMissing: false }, objectifiedCustomValidity);
};
/**
 * @fires selected {SelectedDetail}
 * @fires action {ActionDetail}
 * @fires opened
 * @fires closed
 * @fires change
 * @fires invalid
 */
class SelectBase extends FormElement {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = MDCSelectFoundation$1;
        this.disabled = false;
        this.outlined = false;
        this.label = '';
        this.outlineOpen = false;
        this.outlineWidth = 0;
        this.value = '';
        this.name = '';
        this.selectedText = '';
        this.icon = '';
        this.menuOpen = false;
        this.helper = '';
        this.validateOnInitialRender = false;
        this.validationMessage = '';
        this.required = false;
        this.naturalMenuWidth = false;
        this.isUiValid = true;
        this.fixedMenuPosition = false;
        // Transiently holds current typeahead prefix from user.
        this.typeaheadState = initState();
        this.sortedIndexByFirstChar = new Map();
        this.menuElement_ = null;
        this.listeners = [];
        this.onBodyClickBound = () => undefined;
        this._menuUpdateComplete = null;
        this.valueSetDirectly = false;
        this.validityTransform = null;
        this._validity = createValidityObj();
    }
    get items() {
        // memoize menuElement to prevent unnecessary querySelector calls.
        if (!this.menuElement_) {
            this.menuElement_ = this.menuElement;
        }
        if (this.menuElement_) {
            return this.menuElement_.items;
        }
        return [];
    }
    get selected() {
        const menuElement = this.menuElement;
        if (menuElement) {
            return menuElement.selected;
        }
        return null;
    }
    get index() {
        const menuElement = this.menuElement;
        if (menuElement) {
            return menuElement.index;
        }
        return -1;
    }
    get shouldRenderHelperText() {
        return !!this.helper || !!this.validationMessage;
    }
    get validity() {
        this._checkValidity(this.value);
        return this._validity;
    }
    render() {
        const classes = {
            'mdc-select--disabled': this.disabled,
            'mdc-select--no-label': !this.label,
            'mdc-select--filled': !this.outlined,
            'mdc-select--outlined': this.outlined,
            'mdc-select--with-leading-icon': !!this.icon,
            'mdc-select--required': this.required,
            'mdc-select--invalid': !this.isUiValid,
        };
        const labelledby = !!this.label ? 'label' : undefined;
        const describedby = this.shouldRenderHelperText ? 'helper-text' : undefined;
        return y `
      <div
          class="mdc-select ${o$1(classes)}">
        <input
            class="formElement"
            name="${this.name}"
            .value="${this.value}"
            hidden
            ?disabled="${this.disabled}"
            ?required=${this.required}>
        <!-- @ts-ignore -->
        <div class="mdc-select__anchor"
            aria-autocomplete="none"
            role="combobox"
            aria-expanded=${this.menuOpen}
            aria-invalid=${!this.isUiValid}
            aria-haspopup="listbox"
            aria-labelledby=${l$2(labelledby)}
            aria-required=${this.required}
            aria-describedby=${l$2(describedby)}
            @click=${this.onClick}
            @focus=${this.onFocus}
            @blur=${this.onBlur}
            @keydown=${this.onKeydown}>
          ${this.renderRipple()}
          ${this.outlined ? this.renderOutline() : this.renderLabel()}
          ${this.renderLeadingIcon()}
          <span class="mdc-select__selected-text-container">
            <span class="mdc-select__selected-text">${this.selectedText}</span>
          </span>
          <span class="mdc-select__dropdown-icon">
            <svg
                class="mdc-select__dropdown-icon-graphic"
                viewBox="7 10 10 5"
                focusable="false">
              <polygon
                  class="mdc-select__dropdown-icon-inactive"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 10 12 15 17 10">
              </polygon>
              <polygon
                  class="mdc-select__dropdown-icon-active"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 15 12 10 17 15">
              </polygon>
            </svg>
          </span>
          ${this.renderLineRipple()}
        </div>
        ${this.renderMenu()}
      </div>
      ${this.renderHelperText()}`;
    }
    renderMenu() {
        const classes = this.getMenuClasses();
        return y `
      <mwc-menu
        innerRole="listbox"
        wrapFocus
        class=" ${o$1(classes)}"
        activatable
        .fullwidth=${this.fixedMenuPosition ? false : !this.naturalMenuWidth}
        .open=${this.menuOpen}
        .anchor=${this.anchorElement}
        .fixed=${this.fixedMenuPosition}
        @selected=${this.onSelected}
        @opened=${this.onOpened}
        @closed=${this.onClosed}
        @items-updated=${this.onItemsUpdated}
        @keydown=${this.handleTypeahead}>
      ${this.renderMenuContent()}
    </mwc-menu>`;
    }
    getMenuClasses() {
        return {
            'mdc-select__menu': true,
            'mdc-menu': true,
            'mdc-menu-surface': true,
            'mdc-select__menu--invalid': !this.isUiValid,
        };
    }
    renderMenuContent() {
        return y `<slot></slot>`;
    }
    renderRipple() {
        if (this.outlined) {
            return b;
        }
        return y `
      <span class="mdc-select__ripple"></span>
    `;
    }
    renderOutline() {
        if (!this.outlined) {
            return b;
        }
        return y `
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>`;
    }
    renderLabel() {
        if (!this.label) {
            return b;
        }
        return y `
      <span
          .floatingLabelFoundation=${floatingLabel(this.label)}
          id="label">${this.label}</span>
    `;
    }
    renderLeadingIcon() {
        if (!this.icon) {
            return b;
        }
        return y `<mwc-icon class="mdc-select__icon"><div>${this.icon}</div></mwc-icon>`;
    }
    renderLineRipple() {
        if (this.outlined) {
            return b;
        }
        return y `
      <span .lineRippleFoundation=${lineRipple()}></span>
    `;
    }
    renderHelperText() {
        if (!this.shouldRenderHelperText) {
            return b;
        }
        const showValidationMessage = this.validationMessage && !this.isUiValid;
        const classes = {
            'mdc-select-helper-text--validation-msg': showValidationMessage,
        };
        return y `
        <p
          class="mdc-select-helper-text ${o$1(classes)}"
          id="helper-text">${showValidationMessage ? this.validationMessage : this.helper}</p>`;
    }
    createAdapter() {
        return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), { activateBottomLine: () => {
                if (this.lineRippleElement) {
                    this.lineRippleElement.lineRippleFoundation.activate();
                }
            }, deactivateBottomLine: () => {
                if (this.lineRippleElement) {
                    this.lineRippleElement.lineRippleFoundation.deactivate();
                }
            }, hasLabel: () => {
                return !!this.label;
            }, floatLabel: (shouldFloat) => {
                if (this.labelElement) {
                    this.labelElement.floatingLabelFoundation.float(shouldFloat);
                }
            }, getLabelWidth: () => {
                if (this.labelElement) {
                    return this.labelElement.floatingLabelFoundation.getWidth();
                }
                return 0;
            }, setLabelRequired: (isRequired) => {
                if (this.labelElement) {
                    this.labelElement.floatingLabelFoundation.setRequired(isRequired);
                }
            }, hasOutline: () => this.outlined, notchOutline: (labelWidth) => {
                const outlineElement = this.outlineElement;
                if (outlineElement && !this.outlineOpen) {
                    this.outlineWidth = labelWidth;
                    this.outlineOpen = true;
                }
            }, closeOutline: () => {
                if (this.outlineElement) {
                    this.outlineOpen = false;
                }
            }, setRippleCenter: (normalizedX) => {
                if (this.lineRippleElement) {
                    const foundation = this.lineRippleElement.lineRippleFoundation;
                    foundation.setRippleCenter(normalizedX);
                }
            }, notifyChange: async (value) => {
                if (!this.valueSetDirectly && value === this.value) {
                    return;
                }
                this.valueSetDirectly = false;
                this.value = value;
                await this.updateComplete;
                const ev = new Event('change', { bubbles: true });
                this.dispatchEvent(ev);
            }, setSelectedText: (value) => this.selectedText = value, isSelectAnchorFocused: () => {
                const selectAnchorElement = this.anchorElement;
                if (!selectAnchorElement) {
                    return false;
                }
                const rootNode = selectAnchorElement.getRootNode();
                return rootNode.activeElement === selectAnchorElement;
            }, getSelectAnchorAttr: (attr) => {
                const selectAnchorElement = this.anchorElement;
                if (!selectAnchorElement) {
                    return null;
                }
                return selectAnchorElement.getAttribute(attr);
            }, setSelectAnchorAttr: (attr, value) => {
                const selectAnchorElement = this.anchorElement;
                if (!selectAnchorElement) {
                    return;
                }
                selectAnchorElement.setAttribute(attr, value);
            }, removeSelectAnchorAttr: (attr) => {
                const selectAnchorElement = this.anchorElement;
                if (!selectAnchorElement) {
                    return;
                }
                selectAnchorElement.removeAttribute(attr);
            }, openMenu: () => {
                this.menuOpen = true;
            }, closeMenu: () => {
                this.menuOpen = false;
            }, addMenuClass: () => undefined, removeMenuClass: () => undefined, getAnchorElement: () => this.anchorElement, setMenuAnchorElement: () => {
                /* Handled by anchor directive */
            }, setMenuAnchorCorner: () => {
                const menuElement = this.menuElement;
                if (menuElement) {
                    menuElement.corner = 'BOTTOM_START';
                }
            }, setMenuWrapFocus: (wrapFocus) => {
                const menuElement = this.menuElement;
                if (menuElement) {
                    menuElement.wrapFocus = wrapFocus;
                }
            }, focusMenuItemAtIndex: (index) => {
                const menuElement = this.menuElement;
                if (!menuElement) {
                    return;
                }
                const element = menuElement.items[index];
                if (!element) {
                    return;
                }
                element.focus();
            }, getMenuItemCount: () => {
                const menuElement = this.menuElement;
                if (menuElement) {
                    return menuElement.items.length;
                }
                return 0;
            }, getMenuItemValues: () => {
                const menuElement = this.menuElement;
                if (!menuElement) {
                    return [];
                }
                const items = menuElement.items;
                return items.map((item) => item.value);
            }, getMenuItemTextAtIndex: (index) => {
                const menuElement = this.menuElement;
                if (!menuElement) {
                    return '';
                }
                const element = menuElement.items[index];
                if (!element) {
                    return '';
                }
                return element.text;
            }, getSelectedIndex: () => this.index, setSelectedIndex: () => undefined, isTypeaheadInProgress: () => isTypingInProgress(this.typeaheadState), typeaheadMatchItem: (nextChar, startingIndex) => {
                if (!this.menuElement) {
                    return -1;
                }
                const opts = {
                    focusItemAtIndex: (index) => {
                        this.menuElement.focusItemAtIndex(index);
                    },
                    focusedItemIndex: startingIndex ?
                        startingIndex :
                        this.menuElement.getFocusedItemIndex(),
                    nextChar,
                    sortedIndexByFirstChar: this.sortedIndexByFirstChar,
                    skipFocus: false,
                    isItemAtIndexDisabled: (index) => this.items[index].disabled,
                };
                const index = matchItem(opts, this.typeaheadState);
                if (index !== -1) {
                    this.select(index);
                }
                return index;
            } });
    }
    checkValidity() {
        const isValid = this._checkValidity(this.value);
        if (!isValid) {
            const invalidEvent = new Event('invalid', { bubbles: false, cancelable: true });
            this.dispatchEvent(invalidEvent);
        }
        return isValid;
    }
    reportValidity() {
        const isValid = this.checkValidity();
        this.isUiValid = isValid;
        return isValid;
    }
    _checkValidity(value) {
        const nativeValidity = this.formElement.validity;
        let validity = createValidityObj(nativeValidity);
        if (this.validityTransform) {
            const customValidity = this.validityTransform(value, validity);
            validity = Object.assign(Object.assign({}, validity), customValidity);
        }
        this._validity = validity;
        return this._validity.valid;
    }
    setCustomValidity(message) {
        this.validationMessage = message;
        this.formElement.setCustomValidity(message);
    }
    // tslint:disable:ban-ts-ignore
    async getUpdateComplete() {
        await this._menuUpdateComplete;
        // @ts-ignore
        const result = await super.getUpdateComplete();
        return result;
    }
    // tslint:enable:ban-ts-ignore
    async firstUpdated() {
        const menuElement = this.menuElement;
        if (menuElement) {
            this._menuUpdateComplete = menuElement.updateComplete;
            await this._menuUpdateComplete;
        }
        super.firstUpdated();
        this.mdcFoundation.isValid = () => true;
        this.mdcFoundation.setValid = () => undefined;
        this.mdcFoundation.setDisabled(this.disabled);
        if (this.validateOnInitialRender) {
            this.reportValidity();
        }
        // Select an option based on init value
        if (!this.selected) {
            if (!this.items.length && this.slotElement &&
                this.slotElement.assignedNodes({ flatten: true }).length) {
                // Shady DOM initial render fix
                await new Promise((res) => requestAnimationFrame(res));
                await this.layout();
            }
            const hasEmptyFirstOption = this.items.length && this.items[0].value === '';
            if (!this.value && hasEmptyFirstOption) {
                this.select(0);
                return;
            }
            this.selectByValue(this.value);
        }
        this.sortedIndexByFirstChar = initSortedIndex(this.items.length, (index) => this.items[index].text);
    }
    onItemsUpdated() {
        this.sortedIndexByFirstChar = initSortedIndex(this.items.length, (index) => this.items[index].text);
    }
    select(index) {
        const menuElement = this.menuElement;
        if (menuElement) {
            menuElement.select(index);
        }
    }
    selectByValue(value) {
        let indexToSelect = -1;
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            if (item.value === value) {
                indexToSelect = i;
                break;
            }
        }
        this.valueSetDirectly = true;
        this.select(indexToSelect);
        this.mdcFoundation.handleChange();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        for (const listener of this.listeners) {
            listener.target.removeEventListener(listener.name, listener.cb);
        }
    }
    focus() {
        const focusEvt = new CustomEvent('focus');
        const selectAnchorElement = this.anchorElement;
        if (selectAnchorElement) {
            selectAnchorElement.dispatchEvent(focusEvt);
            selectAnchorElement.focus();
        }
    }
    blur() {
        const focusEvt = new CustomEvent('blur');
        const selectAnchorElement = this.anchorElement;
        if (selectAnchorElement) {
            selectAnchorElement.dispatchEvent(focusEvt);
            selectAnchorElement.blur();
        }
    }
    onFocus() {
        if (this.mdcFoundation) {
            this.mdcFoundation.handleFocus();
        }
    }
    onBlur() {
        if (this.mdcFoundation) {
            this.mdcFoundation.handleBlur();
        }
        const menuElement = this.menuElement;
        if (menuElement && !menuElement.open) {
            this.reportValidity();
        }
    }
    onClick(evt) {
        if (this.mdcFoundation) {
            this.focus();
            const targetClientRect = evt.target.getBoundingClientRect();
            let xCoord = 0;
            if ('touches' in evt) {
                xCoord = evt.touches[0].clientX;
            }
            else {
                xCoord = evt.clientX;
            }
            const normalizedX = xCoord - targetClientRect.left;
            this.mdcFoundation.handleClick(normalizedX);
        }
    }
    onKeydown(evt) {
        const arrowUp = normalizeKey(evt) === KEY.ARROW_UP;
        const arrowDown = normalizeKey(evt) === KEY.ARROW_DOWN;
        if (arrowDown || arrowUp) {
            const shouldSelectNextItem = arrowUp && this.index > 0;
            const shouldSelectPrevItem = arrowDown && this.index < this.items.length - 1;
            if (shouldSelectNextItem) {
                this.select(this.index - 1);
            }
            else if (shouldSelectPrevItem) {
                this.select(this.index + 1);
            }
            evt.preventDefault();
            this.mdcFoundation.openMenu();
            return;
        }
        this.mdcFoundation.handleKeydown(evt);
    }
    // must capture to run before list foundation captures event
    handleTypeahead(event) {
        if (!this.menuElement) {
            return;
        }
        const focusedItemIndex = this.menuElement.getFocusedItemIndex();
        const target = isNodeElement(event.target) ?
            event.target :
            null;
        const isTargetListItem = target ? target.hasAttribute('mwc-list-item') : false;
        const opts = {
            event,
            focusItemAtIndex: (index) => {
                this.menuElement.focusItemAtIndex(index);
            },
            focusedItemIndex,
            isTargetListItem,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: (index) => this.items[index].disabled,
        };
        handleKeydown(opts, this.typeaheadState);
    }
    async onSelected(event) {
        if (!this.mdcFoundation) {
            await this.updateComplete;
        }
        this.mdcFoundation.handleMenuItemAction(event.detail.index);
        const item = this.items[event.detail.index];
        if (item) {
            this.value = item.value;
        }
    }
    onOpened() {
        if (this.mdcFoundation) {
            this.menuOpen = true;
            this.mdcFoundation.handleMenuOpened();
        }
    }
    onClosed() {
        if (this.mdcFoundation) {
            this.menuOpen = false;
            this.mdcFoundation.handleMenuClosed();
        }
    }
    setFormData(formData) {
        if (this.name && this.selected !== null) {
            formData.append(this.name, this.value);
        }
    }
    async layout(updateItems = true) {
        if (this.mdcFoundation) {
            this.mdcFoundation.layout();
        }
        await this.updateComplete;
        const menuElement = this.menuElement;
        if (menuElement) {
            menuElement.layout(updateItems);
        }
        const labelElement = this.labelElement;
        if (!labelElement) {
            this.outlineOpen = false;
            return;
        }
        const shouldFloat = !!this.label && !!this.value;
        labelElement.floatingLabelFoundation.float(shouldFloat);
        if (!this.outlined) {
            return;
        }
        this.outlineOpen = shouldFloat;
        await this.updateComplete;
        /* When the textfield automatically notches due to a value and label
         * being defined, the textfield may be set to `display: none` by the user.
         * this means that the notch is of size 0px. We provide this function so
         * that the user may manually resize the notch to the floated label's
         * width.
         */
        const labelWidth = labelElement.floatingLabelFoundation.getWidth();
        if (this.outlineOpen) {
            this.outlineWidth = labelWidth;
        }
    }
    async layoutOptions() {
        if (!this.mdcFoundation) {
            return;
        }
        this.mdcFoundation.layoutOptions();
    }
}
__decorate([
    i$3('.mdc-select')
], SelectBase.prototype, "mdcRoot", void 0);
__decorate([
    i$3('.formElement')
], SelectBase.prototype, "formElement", void 0);
__decorate([
    i$3('slot')
], SelectBase.prototype, "slotElement", void 0);
__decorate([
    i$3('select')
], SelectBase.prototype, "nativeSelectElement", void 0);
__decorate([
    i$3('input')
], SelectBase.prototype, "nativeInputElement", void 0);
__decorate([
    i$3('.mdc-line-ripple')
], SelectBase.prototype, "lineRippleElement", void 0);
__decorate([
    i$3('.mdc-floating-label')
], SelectBase.prototype, "labelElement", void 0);
__decorate([
    i$3('mwc-notched-outline')
], SelectBase.prototype, "outlineElement", void 0);
__decorate([
    i$3('.mdc-menu')
], SelectBase.prototype, "menuElement", void 0);
__decorate([
    i$3('.mdc-select__anchor')
], SelectBase.prototype, "anchorElement", void 0);
__decorate([
    e$6({ type: Boolean, attribute: 'disabled', reflect: true }),
    observer(function (value) {
        if (this.mdcFoundation) {
            this.mdcFoundation.setDisabled(value);
        }
    })
], SelectBase.prototype, "disabled", void 0);
__decorate([
    e$6({ type: Boolean }),
    observer(function (_newVal, oldVal) {
        if (oldVal !== undefined && this.outlined !== oldVal) {
            this.layout(false);
        }
    })
], SelectBase.prototype, "outlined", void 0);
__decorate([
    e$6({ type: String }),
    observer(function (_newVal, oldVal) {
        if (oldVal !== undefined && this.label !== oldVal) {
            this.layout(false);
        }
    })
], SelectBase.prototype, "label", void 0);
__decorate([
    t$2()
], SelectBase.prototype, "outlineOpen", void 0);
__decorate([
    t$2()
], SelectBase.prototype, "outlineWidth", void 0);
__decorate([
    e$6({ type: String }),
    observer(function (value) {
        if (this.mdcFoundation) {
            const initialization = this.selected === null && !!value;
            const valueSetByUser = this.selected && this.selected.value !== value;
            if (initialization || valueSetByUser) {
                this.selectByValue(value);
            }
            this.reportValidity();
        }
    })
], SelectBase.prototype, "value", void 0);
__decorate([
    e$6()
], SelectBase.prototype, "name", void 0);
__decorate([
    t$2()
], SelectBase.prototype, "selectedText", void 0);
__decorate([
    e$6({ type: String })
], SelectBase.prototype, "icon", void 0);
__decorate([
    t$2()
], SelectBase.prototype, "menuOpen", void 0);
__decorate([
    e$6({ type: String })
], SelectBase.prototype, "helper", void 0);
__decorate([
    e$6({ type: Boolean })
], SelectBase.prototype, "validateOnInitialRender", void 0);
__decorate([
    e$6({ type: String })
], SelectBase.prototype, "validationMessage", void 0);
__decorate([
    e$6({ type: Boolean })
], SelectBase.prototype, "required", void 0);
__decorate([
    e$6({ type: Boolean })
], SelectBase.prototype, "naturalMenuWidth", void 0);
__decorate([
    t$2()
], SelectBase.prototype, "isUiValid", void 0);
__decorate([
    e$6({ type: Boolean })
], SelectBase.prototype, "fixedMenuPosition", void 0);
__decorate([
    e$5({ capture: true })
], SelectBase.prototype, "handleTypeahead", null);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$1 = i$6 `.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px}.mdc-line-ripple::before{z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-select{display:inline-flex;position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87)}.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-select.mdc-select--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#6200ee;fill:var(--mdc-theme-primary, #6200ee)}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled)+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:rgba(0, 0, 0, 0.54)}.mdc-select.mdc-select--disabled .mdc-select__icon{color:rgba(0, 0, 0, 0.38)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:red}.mdc-select.mdc-select--disabled .mdc-floating-label{color:GrayText}.mdc-select.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}.mdc-select.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select.mdc-select--disabled .mdc-notched-outline__trailing{border-color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__icon{color:GrayText}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:GrayText}}.mdc-select .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-select .mdc-select__anchor{padding-left:16px;padding-right:0}[dir=rtl] .mdc-select .mdc-select__anchor,.mdc-select .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:16px}.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor{padding-left:0;padding-right:0}[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-select__anchor,.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:0}.mdc-select .mdc-select__icon{width:24px;height:24px;font-size:24px}.mdc-select .mdc-select__dropdown-icon{width:24px;height:24px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item,.mdc-select .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:12px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic,.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:12px;margin-right:0}.mdc-select__dropdown-icon{margin-left:12px;margin-right:12px;display:inline-flex;position:relative;align-self:center;align-items:center;justify-content:center;flex-shrink:0;pointer-events:none}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active,.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{position:absolute;top:0;left:0}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-graphic{width:41.6666666667%;height:20.8333333333%}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:1;transition:opacity 75ms linear 75ms}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:0;transition:opacity 75ms linear}[dir=rtl] .mdc-select__dropdown-icon,.mdc-select__dropdown-icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:0;transition:opacity 49.5ms linear}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:1;transition:opacity 100.5ms linear 49.5ms}.mdc-select__anchor{width:200px;min-width:0;flex:1 1 auto;position:relative;box-sizing:border-box;overflow:hidden;outline:none;cursor:pointer}.mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-select__selected-text-container{display:flex;appearance:none;pointer-events:none;box-sizing:border-box;width:auto;min-width:0;flex-grow:1;height:28px;border:none;outline:none;padding:0;background-color:transparent;color:inherit}.mdc-select__selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;width:100%;text-align:left}[dir=rtl] .mdc-select__selected-text,.mdc-select__selected-text[dir=rtl]{text-align:right}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid+.mdc-select-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--disabled{cursor:default;pointer-events:none}.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item{padding-left:12px;padding-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item,.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:12px;padding-right:12px}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-select__menu::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}}@media screen and (forced-colors: active)and (forced-colors: active),screen and (-ms-high-contrast: active)and (forced-colors: active){.mdc-select__menu::before{border-color:CanvasText}}.mdc-select__menu .mdc-deprecated-list .mdc-select__icon,.mdc-select__menu .mdc-list .mdc-select__icon{margin-left:0;margin-right:0}[dir=rtl] .mdc-select__menu .mdc-deprecated-list .mdc-select__icon,[dir=rtl] .mdc-select__menu .mdc-list .mdc-select__icon,.mdc-select__menu .mdc-deprecated-list .mdc-select__icon[dir=rtl],.mdc-select__menu .mdc-list .mdc-select__icon[dir=rtl]{margin-left:0;margin-right:0}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--activated{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-list-item__start{display:inline-flex;align-items:center}.mdc-select__option{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select__option,.mdc-select__option[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select__one-line-option.mdc-list-item--with-one-line{height:48px}.mdc-select__two-line-option.mdc-list-item--with-two-lines{height:64px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__start{margin-top:20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-select__two-line-option.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:36px;content:"";vertical-align:0}.mdc-select__option-with-leading-content{padding-left:0;padding-right:12px}.mdc-select__option-with-leading-content.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-select__option-with-leading-content.mdc-list-item,.mdc-select__option-with-leading-content.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-select__option-with-leading-content .mdc-list-item__start{margin-left:12px;margin-right:0}[dir=rtl] .mdc-select__option-with-leading-content .mdc-list-item__start,.mdc-select__option-with-leading-content .mdc-list-item__start[dir=rtl]{margin-left:0;margin-right:12px}.mdc-select__option-with-leading-content .mdc-list-item__start{width:36px;height:24px}[dir=rtl] .mdc-select__option-with-leading-content,.mdc-select__option-with-leading-content[dir=rtl]{padding-left:12px;padding-right:0}.mdc-select__option-with-meta.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-select__option-with-meta.mdc-list-item,.mdc-select__option-with-meta.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-select__option-with-meta .mdc-list-item__end{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select__option-with-meta .mdc-list-item__end,.mdc-select__option-with-meta .mdc-list-item__end[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--filled .mdc-select__anchor{height:56px;display:flex;align-items:baseline}.mdc-select--filled .mdc-select__anchor::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor::before{display:none}.mdc-select--filled .mdc-select__anchor{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-select--filled:not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke}.mdc-select--filled.mdc-select--disabled .mdc-select__anchor{background-color:#fafafa}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-select--filled:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--filled.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-select--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-select--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-select--filled .mdc-menu-surface--is-open-below{border-top-left-radius:0px;border-top-right-radius:0px}.mdc-select--filled.mdc-select--focused.mdc-line-ripple::after{transform:scale(1, 2);opacity:1}.mdc-select--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-select--filled .mdc-floating-label,.mdc-select--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined{border:none}.mdc-select--outlined .mdc-select__anchor{height:56px}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-56px{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-select--outlined .mdc-select__anchor{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-select--outlined+.mdc-select-helper-text{margin-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined.mdc-select--disabled .mdc-select__anchor{background-color:transparent}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-select--outlined .mdc-select__anchor{display:flex;align-items:baseline;overflow:visible}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined 250ms 1}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--outlined .mdc-select__anchor::before{display:none}.mdc-select--outlined .mdc-select__selected-text-container{display:flex;border:none;z-index:1;background-color:transparent}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem;left:4px;right:initial}[dir=rtl] .mdc-select--outlined .mdc-floating-label,.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-select--outlined.mdc-select--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake,.mdc-select--outlined.mdc-select--with-leading-icon[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 96px)}.mdc-select--outlined .mdc-menu-surface{margin-bottom:8px}.mdc-select--outlined.mdc-select--no-label .mdc-menu-surface,.mdc-select--outlined .mdc-menu-surface--is-open-below{margin-bottom:0}.mdc-select__anchor{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-select__anchor .mdc-select__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-select__anchor .mdc-select__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-select__anchor.mdc-ripple-upgraded--unbounded .mdc-select__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-select__anchor.mdc-ripple-upgraded--foreground-activation .mdc-select__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation .mdc-select__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-select__anchor:hover .mdc-select__ripple::before,.mdc-select__anchor.mdc-ripple-surface--hover .mdc-select__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__anchor.mdc-ripple-upgraded--background-focused .mdc-select__ripple::before,.mdc-select__anchor:not(.mdc-ripple-upgraded):focus .mdc-select__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__anchor .mdc-select__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select-helper-text{margin:0;margin-left:16px;margin-right:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal}[dir=rtl] .mdc-select-helper-text,.mdc-select-helper-text[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-select-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-select-helper-text--validation-msg{opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-select--invalid+.mdc-select-helper-text--validation-msg,.mdc-select-helper-text--validation-msg-persistent{opacity:1}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;box-sizing:border-box;border:none;text-decoration:none;cursor:pointer;user-select:none;flex-shrink:0;align-self:center;background-color:transparent;fill:currentColor}.mdc-select--with-leading-icon .mdc-select__icon{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon,.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex="-1"]{cursor:default;pointer-events:none}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-block;vertical-align:top;outline:none}.mdc-select{width:100%}[hidden]{display:none}.mdc-select__icon{z-index:2}.mdc-select--with-leading-icon{--mdc-list-item-graphic-margin: calc( 48px - var(--mdc-list-item-graphic-size, 24px) - var(--mdc-list-side-padding, 16px) )}.mdc-select .mdc-select__anchor .mdc-select__selected-text{overflow:hidden}.mdc-select .mdc-select__anchor *{display:inline-flex}.mdc-select .mdc-select__anchor .mdc-floating-label{display:inline-block}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-idle-border-color, rgba(0, 0, 0, 0.38) );--mdc-notched-outline-notch-offset: 1px}:host(:not([disabled]):hover) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87);color:var(--mdc-select-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-select-idle-line-color, rgba(0, 0, 0, 0.42))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-select-hover-line-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--outlined):not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke;background-color:var(--mdc-select-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-select__dropdown-icon{fill:var(--mdc-select-error-dropdown-icon-color, var(--mdc-select-error-color, var(--mdc-theme-error, #b00020)))}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label,:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label::after{color:var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select.mdc-select--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}.mdc-select__menu--invalid{--mdc-theme-primary: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.6);color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54);fill:var(--mdc-select-dropdown-icon-color, rgba(0, 0, 0, 0.54))}:host(:not([disabled])) .mdc-select.mdc-select--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px;--mdc-notched-outline-notch-offset: 2px}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-select__dropdown-icon{fill:rgba(98,0,238,.87);fill:var(--mdc-select-focused-dropdown-icon-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label::after{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg){color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-select:not(.mdc-select--outlined).mdc-select--disabled .mdc-select__anchor{background-color:#fafafa;background-color:var(--mdc-select-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-select.mdc-select--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-select .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38);fill:var(--mdc-select-disabled-dropdown-icon-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select-helper-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Select = class Select extends SelectBase {
};
Select.styles = [styles$1];
Select = __decorate([
    e$7('mwc-select')
], Select);

/** A potentially `nullable` `Select`.
 *
 * NB: Use `maybeValue: string | null` instead of `value` if `nullable`! */
let OscdSelect = class OscdSelect extends Select {
    constructor() {
        super();
        /** Whether [[`maybeValue`]] may be `null` */
        this.nullable = false;
        this.isNull = false;
        /** The default `value` displayed if [[`maybeValue`]] is `null`. */
        this.defaultValue = '';
        /** Additional values that cause validation to fail. */
        this.reservedValues = [];
        // FIXME: workaround to allow disable of the whole component - need basic refactor
        this.disabledSwitch = false;
        this.nulled = null;
        // eslint-disable-next-line wc/no-constructor-attributes
        this.disabledSwitch = this.hasAttribute('disabled');
    }
    get null() {
        return this.nullable && this.isNull;
    }
    set null(value) {
        if (!this.nullable || value === this.isNull)
            return;
        this.isNull = value;
        if (this.null)
            this.disable();
        else
            this.enable();
    }
    /** Replacement for `value`, can only be `null` if [[`nullable`]]. */
    get maybeValue() {
        return this.null ? null : this.value;
    }
    set maybeValue(value) {
        if (value === null)
            this.null = true;
        else {
            this.null = false;
            this.value = value;
        }
    }
    enable() {
        if (this.nulled === null)
            return;
        this.value = this.nulled;
        this.nulled = null;
        this.disabled = false;
    }
    disable() {
        if (this.nulled !== null)
            return;
        this.nulled = this.value;
        this.value = this.defaultValue;
        this.disabled = true;
    }
    async firstUpdated() {
        await super.firstUpdated();
    }
    checkValidity() {
        var _a;
        if (this.nullable && !((_a = this.nullSwitch) === null || _a === void 0 ? void 0 : _a.selected))
            return true;
        return super.checkValidity();
    }
    renderSwitch() {
        if (this.nullable) {
            return y `<mwc-switch
        style="margin-left: 12px;"
        ?selected=${!this.null}
        ?disabled=${this.disabledSwitch}
        @click=${() => {
                this.null = !this.nullSwitch.selected;
                this.dispatchEvent(new Event('selected'));
            }}
      ></mwc-switch>`;
        }
        return y ``;
    }
    render() {
        return y `
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
    }
};
__decorate([
    e$6({ type: Boolean })
], OscdSelect.prototype, "nullable", void 0);
__decorate([
    t$2()
], OscdSelect.prototype, "null", null);
__decorate([
    e$6({ type: String })
], OscdSelect.prototype, "maybeValue", null);
__decorate([
    e$6({ type: String })
], OscdSelect.prototype, "defaultValue", void 0);
__decorate([
    e$6({ type: Array })
], OscdSelect.prototype, "reservedValues", void 0);
__decorate([
    i$3('mwc-switch')
], OscdSelect.prototype, "nullSwitch", void 0);
OscdSelect = __decorate([
    e$7('oscd-select')
], OscdSelect);

const typeBase = {
    IP: '([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])[.]([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])[.]([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])[.]([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])',
    OSI: '[0-9A-F]+',
    OSId: '[0-9]+',
    OSIAPi: '[0-9\u002C]+',
    MAC: '([0-9A-F]{2}-){5}[0-9A-F]{2}',
    APPID: '[0-9A-F]{4}',
    VLANp: '[0-7]',
    VLANid: '[0-9A-F]{3}',
    port: '0|([1-9][0-9]{0,3})|([1-5][0-9]{4,4})|(6[0-4][0-9]{3,3})|(65[0-4][0-9]{2,2})|(655[0-2][0-9])|(6553[0-5])',
    IPv6: '([0-9a-f]{1,4}:){7}[0-9a-f]{1,4}',
    IPv6sub: '/[1-9]|/[1-9][0-9]|/1[0-1][0-9]|/12[0-7]',
};
/** Patterns from IEC 61850-6 for all `P` elements */
const typePattern = {
    IP: typeBase.IP,
    'IP-SUBNET': typeBase.IP,
    'IP-GATEWAY': typeBase.IP,
    'OSI-TSEL': typeBase.OSI,
    'OSI-SSEL': typeBase.OSI,
    'OSI-PSEL': typeBase.OSI,
    'OSI-AP-Title': typeBase.OSIAPi,
    'OSI-AP-Invoke': typeBase.OSId,
    'OSI-AE-Qualifier': typeBase.OSId,
    'OSI-AE-Invoke': typeBase.OSId,
    'MAC-Address': typeBase.MAC,
    APPID: typeBase.APPID,
    'VLAN-ID': typeBase.VLANid,
    'VLAN-PRIORITY': typeBase.VLANp,
    'OSI-NSAP': typeBase.OSI,
    'SNTP-Port': typeBase.port,
    'MMS-Port': typeBase.port,
    DNSName: '[^ ]*',
    'UDP-Port': typeBase.port,
    'TCP-Port': typeBase.port,
    'C37-118-IP-Port': '102[5-9]|10[3-9][0-9]|1[1-9][0-9][0-9]|[2-9][0-9]{3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]',
    IPv6: typeBase.IPv6,
    'IPv6-SUBNET': typeBase.IPv6sub,
    'IPv6-GATEWAY': typeBase.IPv6,
    IPv6FlowLabel: '[0-9a-fA-F]{1,5}',
    IPv6ClassOfTraffic: '[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]',
    'IPv6-IGMPv3Src': typeBase.IPv6,
    'IP-IGMPv3Sr': typeBase.IP,
    'IP-ClassOfTraffic': typeBase.OSI,
};
/** Whether `P` element is required within `Address` */
const typeNullable = {
    IP: false,
    'IP-SUBNET': false,
    'IP-GATEWAY': true,
    'OSI-TSEL': true,
    'OSI-SSEL': true,
    'OSI-PSEL': true,
    'OSI-AP-Title': true,
    'OSI-AP-Invoke': true,
    'OSI-AE-Qualifier': true,
    'OSI-AE-Invoke': true,
    'OSI-NSAP': true,
    'MAC-Address': false,
    APPID: false,
    'VLAN-ID': true,
    'VLAN-PRIORITY': true,
    'SNTP-Port': true,
    'MMS-Port': true,
    DNSName: true,
    'UDP-Port': true,
    'TCP-Port': true,
    'C37-118-IP-Port': true,
    IPv6: true,
    'IPv6-SUBNET': true,
    'IPv6-GATEWAY': true,
    IPv6FlowLabel: true,
    IPv6ClassOfTraffic: true,
    'IPv6-IGMPv3Src': true,
    'IP-IGMPv3Sr': true,
    'IP-ClassOfTraffic': true,
};
const nameStartChar = '[:_A-Za-z]|[\u00C0-\u00D6]|[\u00D8-\u00F6]|[\u00F8-\u02FF]|[\u0370-\u037D]' +
    '|[\u037F-\u1FFF]|[\u200C-\u200D]|[\u2070-\u218F]|[\u2C00-\u2FEF]' +
    '|[\u3001-\uD7FF]|[\uF900-\uFDCF]|[\uFDF0-\uFFFD]';
const nameChar = `${nameStartChar}|[.0-9-]|\u00B7|[\u0300-\u036F]|[\u203F-\u2040]`;
const name = `${nameStartChar}(${nameChar})*`;
const nmToken = `(${nameChar})+`;
const patterns = {
    string: '([\u0009-\u000A]|[\u000D]|[\u0020-\u007E]|[\u0085]|[\u00A0-\uD7FF]' +
        '|[\uE000-\uFFFD])*',
    normalizedString: '([\u0020-\u007E]|[\u0085]|[\u00A0-\uD7FF]|[\uE000-\uFFFD])*',
    name,
    nmToken,
    names: `${name}( ${name})*`,
    nmTokens: `${nmToken}( ${nmToken})*`,
    decimal: '[+-]?[0-9]+(([.][0-9]*)?|([.][0-9]+))',
    unsigned: '[+]?[0-9]+(([.][0-9]*)?|([.][0-9]+))',
    alphanumericFirstUpperCase: '[A-Z][0-9,A-Z,a-z]*',
    asciName: '[A-Za-z][0-9,A-Z,a-z_]*',
    lnClass: '[A-Z]{4,4}',
    tRestrName1stL: '[a-z][0-9A-Za-z]*',
    abstractDataAttributeName: '((T)|(Test)|(Check)|(SIUnit)|(Oper)|(SBO)|(SBOw)|(Cancel)|[a-z][0-9A-Za-z]*)',
    cdc: '(SPS)|(DPS)|(INS)|(ENS)|(ACT)|(ACD)|(SEC)|(BCR)|(HST)|(VSS)|(MV)|(CMV)|(SAV)|' +
        '(WYE)|(DEL)|(SEQ)|(HMV)|(HWYE)|(HDEL)|(SPC)|(DPC)|(INC)|(ENC)|(BSC)|(ISC)|(APC)|(BAC)|' +
        '(SPG)|(ING)|(ENG)|(ORG)|(TSG)|(CUG)|(VSG)|(ASG)|(CURVE)|(CSG)|(DPL)|(LPL)|(CSD)|(CST)|' +
        '(BTS)|(UTS)|(LTS)|(GTS)|(MTS)|(NTS)|(STS)|(CTS)|(OTS)|(VSD)',
};
const maxLength = {
    cbName: 32,
    abstracDaName: 60,
};

function createElement$3(doc, tag, attrs) {
    const element = doc.createElementNS(doc.documentElement.namespaceURI, tag);
    Object.entries(attrs)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .filter(([_, value]) => value !== null)
        .forEach(([name, value]) => element.setAttribute(name, value));
    return element;
}
/** @returns action array to update all `OptFields` attributes */
function updateOptFields(optFields, attributes) {
    return { element: optFields, attributes };
}
/** @returns action array to update all `ReportControl` attributes */
function updateReportControl(reportControl, attributes) {
    const confRev = updatedConfRev(reportControl); // +10000 for update
    const attrs = { ...attributes, confRev };
    const ctrlBlockUpdates = [
        { element: reportControl, attributes: attrs },
    ];
    if (!attributes.name)
        return ctrlBlockUpdates;
    const extRefUpdates = findCtrlBlockSubscription(reportControl).map(extRef => ({
        element: extRef,
        attributes: { srcCBName: attributes.name },
    }));
    return ctrlBlockUpdates.concat(extRefUpdates);
}
/** @returns action to update max clients in ReportControl element */
function updateMaxClients(reportControl, max) {
    const rptEnabled = reportControl.querySelector(':scope > RptEnabled');
    if (rptEnabled && !max)
        return {
            node: rptEnabled,
        };
    if (!rptEnabled && !max)
        return null;
    if (!rptEnabled && max) {
        const newRptEnabled = createElement$3(reportControl.ownerDocument, 'RptEnabled', { max });
        return {
            parent: reportControl,
            node: newRptEnabled,
            reference: getReference(reportControl, 'RptEnabled'),
        };
    }
    return { element: rptEnabled, attributes: { max } };
}
function uniqueReportControlName(anyLn) {
    const nameCore = 'newReportControl';
    const siblingNames = Array.from(anyLn.querySelectorAll('ReportControl')).map(child => { var _a; return (_a = child.getAttribute('name')) !== null && _a !== void 0 ? _a : child.tagName; });
    if (!siblingNames.length)
        return `${nameCore}_001`;
    let newName = '';
    // eslint-disable-next-line no-plusplus
    let i = 1;
    newName = `${nameCore}_${i.toString().padStart(3, '0')}`;
    while (i < siblingNames.length + 1) {
        if (!siblingNames.includes(newName))
            break;
        i += 1;
        newName = `${nameCore}_${i.toString().padStart(3, '0')}`;
    }
    return newName;
}
/** Function processing ReportControl creation
 * @parent Parent element such as `LN0`, `LN`, `LDevice`, `AccessPoint` and `IED`
 * @attributes ReportControl, TrgOps and OptFields elements attributes. Missing and required
 *             attributes are set to their defaults.
 * @option allow to overwrite `confRev` and `max` clients
 * @returns Action object adding new `ReportControl` to [[`parent`]] element
 * */
function addReportControl(parent, attributes = { rpt: {}, trgOps: {}, optFields: {} }) {
    const anyLn = parent.tagName === 'LN0' || parent.tagName === 'LN'
        ? parent
        : parent.querySelector('LN0, LN');
    if (!anyLn)
        return null;
    if (!attributes.rpt.name)
        attributes.rpt.name = uniqueReportControlName(anyLn);
    if (!attributes.rpt.buffered)
        attributes.rpt.buffered = 'true';
    if (!attributes.rpt.rptID)
        attributes.rpt.rptID = '';
    if (!attributes.rpt.bufTime)
        attributes.rpt.bufTime = '100';
    if (attributes.trgOps.period === 'true' && !attributes.rpt.intgPd)
        attributes.rpt.intgPd = '1000';
    const confRev = attributes.confRev ? attributes.confRev : '0';
    if ((attributes.rpt.intgPd && !attributes.trgOps.period) ||
        attributes.trgOps.period === 'false')
        attributes.trgOps.period = 'true';
    const reportControl = createElement$3(anyLn.ownerDocument, 'ReportControl', {
        ...attributes.rpt,
        confRev,
    });
    if (Object.keys(attributes.trgOps).length) {
        const trgOps = createElement$3(anyLn.ownerDocument, 'TrgOps', attributes.trgOps);
        reportControl.insertBefore(trgOps, null);
    }
    if (Object.keys(attributes.optFields).length) {
        const optFields = createElement$3(anyLn.ownerDocument, 'OptFields', attributes.optFields);
        reportControl.insertBefore(optFields, null);
    }
    if (attributes.maxClients) {
        const rptEnabled = createElement$3(anyLn.ownerDocument, 'RptEnabled', {
            max: attributes.maxClients,
        });
        reportControl.insertBefore(rptEnabled, null);
    }
    const actions = [];
    actions.push({
        parent: anyLn,
        node: reportControl,
        reference: getReference(anyLn, 'ReportControl'),
    });
    return actions;
}

function checkRptEnabledValidity(rptEnabled, input) {
    var _a;
    if (!input.checkValidity())
        return false;
    if (!rptEnabled)
        return true;
    const clientLNs = Array.from(rptEnabled.querySelectorAll(':scope > ClientLN'));
    const maxRpt = (_a = input.maybeValue) !== null && _a !== void 0 ? _a : '0';
    if (clientLNs.length <= parseInt(maxRpt, 10))
        return true;
    input.setCustomValidity(`There are ${clientLNs.length} clientLNs`);
    return false;
}
let ReportControlElementEditor = class ReportControlElementEditor extends s$3 {
    constructor() {
        super(...arguments);
        /** SCL change indicator */
        this.editCount = 0;
        this.optFieldsDiff = false;
        this.trgOpsDiff = false;
        this.reportControlDiff = false;
    }
    onOptFieldsInputChange() {
        var _a, _b, _c;
        const optFields = this.element.querySelector(':scope > OptFields');
        if (Array.from((_a = this.optFieldsInputs) !== null && _a !== void 0 ? _a : []).some(input => !input.checkValidity())) {
            this.optFieldsDiff = false;
            return;
        }
        const optFieldsAttrs = {};
        for (const input of (_b = this.optFieldsInputs) !== null && _b !== void 0 ? _b : [])
            optFieldsAttrs[input.label] = input.maybeValue;
        this.optFieldsDiff = Array.from((_c = this.optFieldsInputs) !== null && _c !== void 0 ? _c : []).some(input => (optFields === null || optFields === void 0 ? void 0 : optFields.getAttribute(input.label)) !== input.maybeValue);
    }
    saveOptFieldChanges() {
        var _a;
        const optFields = this.element.querySelector(':scope > OptFields');
        if (!optFields)
            return;
        const optFieldAttrs = {};
        for (const input of (_a = this.optFieldsInputs) !== null && _a !== void 0 ? _a : [])
            if (optFields.getAttribute(input.label) !== input.maybeValue)
                optFieldAttrs[input.label] = input.maybeValue;
        this.dispatchEvent(newEditEvent(updateOptFields(optFields, optFieldAttrs)));
        this.onOptFieldsInputChange();
    }
    onTrgOpsInputChange() {
        var _a, _b, _c;
        const trgOps = this.element.querySelector(':scope > TrgOps');
        if (Array.from((_a = this.trgOpsInputs) !== null && _a !== void 0 ? _a : []).some(input => !input.checkValidity())) {
            this.trgOpsDiff = false;
            return;
        }
        const trgOpsAttrs = {};
        for (const input of (_b = this.trgOpsInputs) !== null && _b !== void 0 ? _b : [])
            trgOpsAttrs[input.label] = input.maybeValue;
        this.trgOpsDiff = Array.from((_c = this.trgOpsInputs) !== null && _c !== void 0 ? _c : []).some(input => (trgOps === null || trgOps === void 0 ? void 0 : trgOps.getAttribute(input.label)) !== input.maybeValue);
    }
    saveTrgOpsChanges() {
        var _a;
        const trgOps = this.element.querySelector(':scope > TrgOps');
        if (!trgOps)
            return;
        const trgOpsAttrs = {};
        for (const input of (_a = this.trgOpsInputs) !== null && _a !== void 0 ? _a : [])
            if (trgOps.getAttribute(input.label) !== input.maybeValue)
                trgOpsAttrs[input.label] = input.maybeValue;
        this.dispatchEvent(newEditEvent(updateOptFields(trgOps, trgOpsAttrs)));
        this.onTrgOpsInputChange();
    }
    onReportControlInputChange() {
        var _a, _b, _c, _d;
        const reportControl = this.element;
        const rptEnabled = reportControl.querySelector(':scope > RptEnabled');
        const someInvalidAttrs = Array.from((_a = this.reportControlInputs) !== null && _a !== void 0 ? _a : []).some(input => !input.checkValidity());
        if (someInvalidAttrs ||
            !checkRptEnabledValidity(rptEnabled, this.rptEnabledInput)) {
            this.reportControlDiff = false;
            return;
        }
        const reportControlAttrs = {};
        for (const input of (_b = this.reportControlInputs) !== null && _b !== void 0 ? _b : [])
            reportControlAttrs[input.label] = input.maybeValue;
        const someAttrDiff = Array.from((_c = this.reportControlInputs) !== null && _c !== void 0 ? _c : []).some(input => (reportControl === null || reportControl === void 0 ? void 0 : reportControl.getAttribute(input.label)) !== input.maybeValue);
        const rptEnabledDiff = ((_d = rptEnabled === null || rptEnabled === void 0 ? void 0 : rptEnabled.getAttribute('max')) !== null && _d !== void 0 ? _d : null) !==
            this.rptEnabledInput.maybeValue;
        this.reportControlDiff = someAttrDiff || rptEnabledDiff;
    }
    saveReportControlChanges() {
        var _a;
        const reportControl = this.element;
        const reportControlAttrs = {};
        for (const input of (_a = this.reportControlInputs) !== null && _a !== void 0 ? _a : [])
            if (reportControl.getAttribute(input.label) !== input.maybeValue)
                reportControlAttrs[input.label] = input.maybeValue;
        const reportControlActions = updateReportControl(reportControl, reportControlAttrs);
        const max = this.rptEnabledInput.maybeValue;
        const rptEnabledAction = updateMaxClients(reportControl, max);
        if (!rptEnabledAction)
            this.dispatchEvent(newEditEvent(reportControlActions));
        else
            this.dispatchEvent(newEditEvent([...reportControlActions, rptEnabledAction]));
        this.onReportControlInputChange();
    }
    renderOptFieldsContent() {
        const [seqNum, timeStamp, dataSet, reasonCode, dataRef, entryID, configRef, bufOvfl,] = [
            'seqNum',
            'timeStamp',
            'dataSet',
            'reasonCode',
            'dataRef',
            'entryID',
            'configRef',
            'bufOvfl',
        ].map(attr => { var _a, _b; return (_b = (_a = this.element.querySelector('OptFields')) === null || _a === void 0 ? void 0 : _a.getAttribute(attr)) !== null && _b !== void 0 ? _b : null; });
        return y `<div class="content optfields">
        <h3>Optional Fields</h3>
        ${Object.entries({
            seqNum,
            timeStamp,
            dataSet,
            reasonCode,
            dataRef,
            entryID,
            configRef,
            bufOvfl,
        }).map(([key, value]) => y `<oscd-checkbox
              label="${key}"
              .maybeValue=${value}
              nullable
              helper="scl.key"
              @input=${this.onOptFieldsInputChange}
            ></oscd-checkbox>`)}
      </div>
      <mwc-button
        class="save"
        label="save"
        icon="save"
        ?disabled=${!this.optFieldsDiff}
        @click=${() => this.saveOptFieldChanges()}
      ></mwc-button>`;
    }
    renderTrgOpsContent() {
        const [dchg, qchg, dupd, period, gi] = [
            'dchg',
            'qchg',
            'dupd',
            'period',
            'gi',
        ].map(attr => { var _a, _b; return (_b = (_a = this.element.querySelector('TrgOps')) === null || _a === void 0 ? void 0 : _a.getAttribute(attr)) !== null && _b !== void 0 ? _b : null; });
        return y `<div class="content trgops">
        <h3>Trigger Options</h3>
        ${Object.entries({ dchg, qchg, dupd, period, gi }).map(([key, value]) => y `<oscd-checkbox
              label="${key}"
              .maybeValue=${value}
              nullable
              helper="scl.key"
              @input=${this.onTrgOpsInputChange}
            ></oscd-checkbox>`)}
      </div>
      <mwc-button
        class="save"
        label="save"
        icon="save"
        ?disabled=${!this.trgOpsDiff}
        @click=${() => this.saveTrgOpsChanges()}
      ></mwc-button>`;
    }
    renderChildElements() {
        return y `<div class="content">
      ${this.renderTrgOpsContent()}${this.renderOptFieldsContent()}
    </div>`;
    }
    renderReportControlContent() {
        var _a, _b;
        const [name, desc, buffered, rptID, indexed, bufTime, intgPd] = [
            'name',
            'desc',
            'buffered',
            'rptID',
            'indexed',
            'bufTime',
            'intgPd',
        ].map(attr => { var _a; return (_a = this.element) === null || _a === void 0 ? void 0 : _a.getAttribute(attr); });
        const max = (_b = (_a = this.element.querySelector('RptEnabled')) === null || _a === void 0 ? void 0 : _a.getAttribute('max')) !== null && _b !== void 0 ? _b : null;
        return y `<div class="content reportcontrol">
      <oscd-textfield
        class="report attributes"
        label="name"
        .maybeValue=${name}
        helper="scl.name"
        required
        validationMessage="'textfield.required')}"
        pattern="${patterns.asciName}"
        maxLength="${maxLength.cbName}"
        dialogInitialFocus
        @input=${this.onReportControlInputChange}
      ></oscd-textfield
      ><oscd-textfield
        class="report attributes"
        label="desc"
        .maybeValue=${desc}
        nullable
        helper="scl.desc"
        @input=${this.onReportControlInputChange}
      ></oscd-textfield
      ><oscd-checkbox
        class="report attributes"
        label="buffered"
        .maybeValue=${buffered}
        helper="scl.buffered"
        @input=${this.onReportControlInputChange}
      ></oscd-checkbox
      ><oscd-textfield
        class="report attributes"
        label="rptID"
        .maybeValue=${rptID}
        nullable
        helper="report.rptID"
        @input=${this.onReportControlInputChange}
      ></oscd-textfield
      ><oscd-checkbox
        class="report attributes"
        label="indexed"
        .maybeValue=${indexed}
        nullable
        helper="scl.indexed"
        @input=${this.onReportControlInputChange}
      ></oscd-checkbox
      ><oscd-textfield
        class="rptenabled attributes"
        label="max Clients"
        .maybeValue=${max}
        helper="scl.maxReport"
        nullable
        type="number"
        min="0"
        suffix="#"
        @input=${this.onReportControlInputChange}
      ></oscd-textfield
      ><oscd-textfield
        class="report attributes"
        label="bufTime"
        .maybeValue=${bufTime}
        helper="scl.bufTime"
        nullable
        required
        type="number"
        min="0"
        suffix="ms"
        @input=${this.onReportControlInputChange}
      ></oscd-textfield
      ><oscd-textfield
        class="report attributes"
        label="intgPd"
        .maybeValue=${intgPd}
        helper="scl.intgPd"
        nullable
        required
        type="number"
        min="0"
        suffix="ms"
        @input=${this.onReportControlInputChange}
      ></oscd-textfield>
      <mwc-button
        class="save"
        label="save"
        icon="save"
        ?disabled=${!this.reportControlDiff}
        @click=${() => this.saveReportControlChanges()}
      ></mwc-button>
    </div>`;
    }
    render() {
        if (this.element)
            return y `<h2 style="display: flex;">
          <div style="flex:auto">
            <div>ReportControl</div>
            <div class="headersubtitle">${identity(this.element)}</div>
          </div>
        </h2>
        <div class="parentcontent">
          ${this.renderReportControlContent()}${this.renderChildElements()}
        </div>`;
        return y `<div class="parentcontent">
      <h2>'publisher.nodataset'</h2>
    </div>`;
    }
};
ReportControlElementEditor.styles = i$6 `
    .parentcontent {
      display: grid;
      grid-gap: 12px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(316px, auto));
    }

    .content {
      display: flex;
      flex-direction: column;
      border-left: thick solid var(--mdc-theme-on-primary);
    }

    .content > * {
      display: block;
      margin: 4px 8px 16px;
    }

    .save {
      align-self: flex-end;
    }

    h2,
    h3 {
      color: var(--mdc-theme-on-surface);
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      margin: 4px 8px 16px;
      padding-left: 0.3em;
    }

    .headersubtitle {
      font-size: 16px;
      font-weight: 200;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    *[iconTrailing='search'] {
      --mdc-shape-small: 28px;
    }

    @media (max-width: 950px) {
      .parentcontent {
        border-left: 0px solid var(--mdc-theme-on-primary);
      }
    }
  `;
__decorate([
    e$6({ attribute: false })
], ReportControlElementEditor.prototype, "doc", void 0);
__decorate([
    e$6({ attribute: false })
], ReportControlElementEditor.prototype, "element", void 0);
__decorate([
    e$6({ type: Number })
], ReportControlElementEditor.prototype, "editCount", void 0);
__decorate([
    t$2()
], ReportControlElementEditor.prototype, "optFieldsDiff", void 0);
__decorate([
    t$2()
], ReportControlElementEditor.prototype, "trgOpsDiff", void 0);
__decorate([
    t$2()
], ReportControlElementEditor.prototype, "reportControlDiff", void 0);
__decorate([
    e$4('.content.optfields > oscd-checkbox')
], ReportControlElementEditor.prototype, "optFieldsInputs", void 0);
__decorate([
    e$4('.content.trgops > oscd-checkbox')
], ReportControlElementEditor.prototype, "trgOpsInputs", void 0);
__decorate([
    e$4('.report.attributes')
], ReportControlElementEditor.prototype, "reportControlInputs", void 0);
__decorate([
    i$3('.rptenabled.attributes')
], ReportControlElementEditor.prototype, "rptEnabledInput", void 0);
ReportControlElementEditor = __decorate([
    e$7('report-control-element-editor')
], ReportControlElementEditor);

function updateElementReference(newDoc, oldElement) {
    if (!oldElement || !oldElement.closest('SCL'))
        return null;
    const id = identity(oldElement);
    const newElement = newDoc.querySelector(selector(oldElement.tagName, id));
    return newElement;
}
const styles = i$6 `
  .section {
    display: flex;
    height: calc(100vh - 184px);
  }

  .selectionlist {
    flex: 35%;
    margin: 4px 4px 4px 8px;
    background-color: var(--mdc-theme-surface, white);
    overflow-y: scroll;
  }

  .elementeditorcontainer {
    flex: 65%;
    margin: 4px 8px 4px 4px;
    background-color: var(--mdc-theme-surface);
    overflow-y: scroll;
    display: flex;
  }

  .listitem.header {
    font-weight: 500;
  }

  mwc-list-item.hidden[noninteractive] + li[divider] {
    display: none;
  }

  .change.scl.element {
    display: none;
  }

  @media (max-width: 950px) {
    .elementeditorcontainer {
      display: block;
    }
  }

  @media (max-width: 599px) {
    .section {
      height: 100%;
    }

    .selectionlist {
      position: absolute;
      width: calc(100% - 32px);
      height: auto;
      top: 110px;
      left: 8px;
      z-index: 1;
      box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
    }

    .elementeditorcontainer {
      display: block;
    }

    data-set-element-editor {
      width: calc(100% - 16px);
    }

    .selectionlist.hidden {
      display: none;
    }

    .change.scl.element {
      display: flex;
      margin: 4px 8px 8px;
    }
  }
`;

const pathsSVG = {
    gooseIcon: w `<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
    reportIcon: w `<path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11C15,11.84 14.5,12.55 13.76,12.85L15,17H13L11.8,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,16.41 7.58,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
    smvIcon: w `<path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
};
const gooseIcon = w `<svg style="width:24px;height:24px" viewBox="0 0 24 24">${pathsSVG.gooseIcon}</svg>`;
const reportIcon = w `<svg style="width:24px;height:24px" viewBox="0 0 24 24">${pathsSVG.reportIcon}</svg>`;
const smvIcon = w `<svg style="width:24px;height:24px" viewBox="0 0 24 24">${pathsSVG.smvIcon}</svg>`;

let ReportControlEditor = class ReportControlEditor extends s$3 {
    constructor() {
        super(...arguments);
        /** SCL change indicator */
        this.editCount = 0;
    }
    /** Resets selected Report and its DataSet, if not existing in new doc */
    update(props) {
        super.update(props);
        if (props.has('doc') && this.selectedReportControl) {
            const newReportControl = updateElementReference(this.doc, this.selectedReportControl);
            this.selectedReportControl = newReportControl !== null && newReportControl !== void 0 ? newReportControl : undefined;
            this.selectedDataSet = this.selectedReportControl
                ? updateElementReference(this.doc, this.selectedDataSet)
                : undefined;
            if (!newReportControl &&
                this.selectionList &&
                this.selectionList.selected)
                this.selectionList.selected.selected = false;
        }
    }
    selectDataSet() {
        var _a, _b;
        const dataSetElement = this.selectDataSetDialog.querySelector('oscd-filtered-list').selected;
        if (!dataSetElement)
            return;
        const dataSetName = dataSetElement.value;
        const dataSet = (_b = (_a = this.selectedReportControl) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.querySelector(`DataSet[name="${dataSetName}"]`);
        if (!dataSet)
            return;
        this.dispatchEvent(newEditEvent({
            element: this.selectedReportControl,
            attributes: { datSet: dataSetName },
        }));
        this.selectedDataSet = dataSet;
        this.selectDataSetDialog.close();
    }
    selectReportControl(evt) {
        var _a;
        const id = evt.target.selected.value;
        const reportControl = this.doc.querySelector(selector('ReportControl', id));
        if (!reportControl)
            return;
        this.selectedReportControl = reportControl;
        if (this.selectedReportControl) {
            this.selectedDataSet =
                (_a = this.selectedReportControl.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector(`DataSet[name="${this.selectedReportControl.getAttribute('datSet')}"]`);
            evt.target.classList.add('hidden');
            this.selectReportControlButton.classList.remove('hidden');
        }
    }
    renderSelectDataSetDialog() {
        var _a, _b, _c;
        return y `
      <mwc-dialog heading="Select Data Set">
        <oscd-filtered-list activatable @selected=${() => this.selectDataSet()}
          >${Array.from((_c = (_b = (_a = this.selectedReportControl) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.querySelectorAll('DataSet')) !== null && _c !== void 0 ? _c : []).map(dataSet => {
            var _a, _b, _c, _d, _e;
            return y `<mwc-list-item
                twoline
                ?selected=${((_b = (_a = this.selectedDataSet) === null || _a === void 0 ? void 0 : _a.getAttribute('name')) !== null && _b !== void 0 ? _b : 'UNDEFINED') ===
                ((_c = dataSet.getAttribute('name')) !== null && _c !== void 0 ? _c : 'UNDEFINED')}
                value="${(_d = dataSet.getAttribute('name')) !== null && _d !== void 0 ? _d : 'UNDEFINED'}"
                ><span>${(_e = dataSet.getAttribute('name')) !== null && _e !== void 0 ? _e : 'UNDEFINED'}</span>
                <span slot="secondary">${identity(dataSet)}</span>
              </mwc-list-item>`;
        })}
        </oscd-filtered-list>
      </mwc-dialog>
    `;
    }
    renderElementEditorContainer() {
        if (this.selectedReportControl !== undefined)
            return y `<div class="elementeditorcontainer">
        <div class="content dataSet">
          ${this.renderSelectDataSetDialog()}
          <data-set-element-editor
            .element=${this.selectedDataSet}
            .showHeader=${false}
            editCount="${this.editCount}"
          >
            <mwc-icon-button
              slot="change"
              icon="swap_vert"
              ?disabled=${!!findCtrlBlockSubscription(this.selectedReportControl).length}
              @click=${() => this.selectDataSetDialog.show()}
            ></mwc-icon-button
          ></data-set-element-editor>
        </div>
        <report-control-element-editor
          .doc=${this.doc}
          .element=${this.selectedReportControl}
          editCount="${this.editCount}"
        ></report-control-element-editor>
      </div>`;
        return y ``;
    }
    renderSelectionList() {
        return y `<oscd-filtered-list
      activatable
      class="selectionlist"
      @action=${this.selectReportControl}
      >${Array.from(this.doc.querySelectorAll('IED')).flatMap(ied => {
            const ieditem = y `<mwc-list-item
            class="listitem header"
            hasMeta
            noninteractive
            graphic="icon"
            value="${Array.from(ied.querySelectorAll('ReportControl'))
                .map(element => {
                const id = identity(element);
                return typeof id === 'string' ? id : '';
            })
                .join(' ')}"
          >
            <span>${ied.getAttribute('name')}</span>
            <mwc-icon slot="graphic">developer_board</mwc-icon>
            <mwc-icon-button
              slot="meta"
              icon="playlist_add"
              @click=${() => {
                const insert = addReportControl(ied);
                if (insert)
                    this.dispatchEvent(newEditEvent(insert));
                this.requestUpdate();
            }}
            ></mwc-icon-button>
          </mwc-list-item>
          <li divider role="separator"></li>`;
            const reports = Array.from(ied.querySelectorAll('ReportControl')).map(reportCb => y `<mwc-list-item
              hasMeta
              twoline
              value="${identity(reportCb)}"
              graphic="icon"
              ><span>${reportCb.getAttribute('name')}</span
              ><span slot="secondary">${identity(reportCb)}</span>
              <span slot="meta"
                ><mwc-icon-button
                  icon="delete"
                  @click=${() => {
                this.dispatchEvent(newEditEvent(removeControlBlock(reportCb)));
                this.requestUpdate();
            }}
                ></mwc-icon-button>
              </span>
              <mwc-icon slot="graphic">${reportIcon}</mwc-icon>
            </mwc-list-item>`);
            return [ieditem, ...reports];
        })}</oscd-filtered-list
    >`;
    }
    renderToggleButton() {
        return y `<mwc-button
      class="change scl element"
      outlined
      label="publisher.selectbutton Report"
      @click=${() => {
            this.selectionList.classList.remove('hidden');
            this.selectReportControlButton.classList.add('hidden');
        }}
    ></mwc-button>`;
    }
    render() {
        return y `${this.renderToggleButton()}
      <div class="section">
        ${this.renderSelectionList()}${this.renderElementEditorContainer()}
      </div>`;
    }
};
ReportControlEditor.styles = i$6 `
    ${styles}

    .elementeditorcontainer {
      flex: 65%;
      margin: 4px 8px 4px 4px;
      background-color: var(--mdc-theme-surface);
      overflow-y: scroll;
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      grid-template-columns: repeat(3, 1fr);
    }

    .content.dataSet {
      display: flex;
      flex-direction: column;
    }
    mwc-list-item {
      --mdc-list-item-meta-size: 48px;
    }

    mwc-icon-button[icon='playlist_add'] {
      pointer-events: all;
    }

    data-set-element-editor {
      grid-column: 1 / 2;
    }

    report-control-element-editor {
      grid-column: 2 / 4;
    }

    @media (max-width: 950px) {
      .elementeditorcontainer {
        display: block;
      }
    }
  `;
__decorate([
    e$6({ attribute: false })
], ReportControlEditor.prototype, "doc", void 0);
__decorate([
    e$6({ type: Number })
], ReportControlEditor.prototype, "editCount", void 0);
__decorate([
    t$2()
], ReportControlEditor.prototype, "selectedReportControl", void 0);
__decorate([
    t$2()
], ReportControlEditor.prototype, "selectedDataSet", void 0);
__decorate([
    i$3('.selectionlist')
], ReportControlEditor.prototype, "selectionList", void 0);
__decorate([
    i$3('mwc-button')
], ReportControlEditor.prototype, "selectReportControlButton", void 0);
__decorate([
    i$3('mwc-dialog')
], ReportControlEditor.prototype, "selectDataSetDialog", void 0);
ReportControlEditor = __decorate([
    e$7('report-control-editor')
], ReportControlEditor);

const maxGseMacAddress = 0x010ccd0101ff;
const minGseMacAddress = 0x010ccd010000;
const maxSmvMacAddress = 0x010ccd0401ff;
const minSmvMacAddress = 0x010ccd040000;
function convertToMac(mac) {
    const str = 0 + mac.toString(16).toUpperCase();
    const arr = str.match(/.{1,2}/g);
    return arr.join('-');
}
const gseMacRange = Array(maxGseMacAddress - minGseMacAddress)
    .fill(1)
    .map((_, i) => convertToMac(minGseMacAddress + i));
const smvMacRange = Array(maxSmvMacAddress - minSmvMacAddress)
    .fill(1)
    .map((_, i) => convertToMac(minSmvMacAddress + i));
/**
 * @param doc - project xml document
 * @param serviceType - SampledValueControl (SMV) or GSEControl (GSE)
 * @returns a function generating increasing unused `MAC-Address` within `doc` on subsequent invocations
 */
function mACAddressGenerator(doc, serviceType) {
    const macs = new Set(Array.from(doc.querySelectorAll(`${serviceType} > Address > P[type="MAC-Address"]`)).map(mac => mac.textContent));
    const range = serviceType === 'SMV' ? smvMacRange : gseMacRange;
    return () => {
        const uniqueMAC = range.find(mac => !macs.has(mac));
        if (uniqueMAC)
            macs.add(uniqueMAC);
        return uniqueMAC !== null && uniqueMAC !== void 0 ? uniqueMAC : null;
    };
}
const maxGseAppId = 0x3fff;
const minGseAppId = 0x0000;
// APPID range for Type1A(Trip) GOOSE acc. IEC 61850-8-1
const maxGseTripAppId = 0xbfff;
const minGseTripAppId = 0x8000;
const maxSmvAppId = 0x7fff;
const minSmvAppId = 0x4000;
const gseAppIdRange = Array(maxGseAppId - minGseAppId)
    .fill(1)
    .map((_, i) => (minGseAppId + i).toString(16).toUpperCase().padStart(4, '0'));
const gseTripAppIdRange = Array(maxGseTripAppId - minGseTripAppId)
    .fill(1)
    .map((_, i) => (minGseTripAppId + i).toString(16).toUpperCase().padStart(4, '0'));
const smvAppIdRange = Array(maxSmvAppId - minSmvAppId)
    .fill(1)
    .map((_, i) => (minSmvAppId + i).toString(16).toUpperCase().padStart(4, '0'));
/**
 * @param doc - project xml document
 * @param serviceType - SampledValueControl (SMV) or GSEControl (GSE)
 * @param type1A - whether the GOOSE is a Trip GOOSE resulting in different APPID range - default false
 * @returns a function generating increasing unused `APPID` within `doc` on subsequent invocations
 */
function appIdGenerator(doc, serviceType, type1A = false) {
    const appIds = new Set(Array.from(doc.querySelectorAll(`${serviceType} > Address > P[type="APPID"]`)).map(appId => appId.textContent));
    const range = 
    // eslint-disable-next-line no-nested-ternary
    serviceType === 'SMV'
        ? smvAppIdRange
        : type1A
            ? gseTripAppIdRange
            : gseAppIdRange;
    return () => {
        const uniqueAppId = range.find(appId => !appIds.has(appId));
        if (uniqueAppId)
            appIds.add(uniqueAppId);
        return uniqueAppId !== null && uniqueAppId !== void 0 ? uniqueAppId : null;
    };
}

const gSEselectors = {
    MinTime: ':scope > MinTime',
    MaxTime: ':scope > MaxTime',
    'MAC-Address': ':scope > Address > P[type="MAC-Address"]',
    APPID: ':scope > Address > P[type="APPID"]',
    'VLAN-ID': ':scope > Address > P[type="VLAN-ID"]',
    'VLAN-PRIORITY': ':scope > Address > P[type="VLAN-PRIORITY"]',
};
/** @returns a `GSE` element referenced to `GSEControl` element or `null` */
function referencedGSE(gseControl) {
    var _a, _b, _c;
    const iedName = (_a = gseControl.closest('IED')) === null || _a === void 0 ? void 0 : _a.getAttribute('name');
    const apName = (_b = gseControl.closest('AccessPoint')) === null || _b === void 0 ? void 0 : _b.getAttribute('name');
    const ldInst = (_c = gseControl.closest('LDevice')) === null || _c === void 0 ? void 0 : _c.getAttribute('inst');
    const cbName = gseControl.getAttribute('name');
    return gseControl.ownerDocument.querySelector(`Communication 
      > SubNetwork
      > ConnectedAP[iedName="${iedName}"][apName="${apName}"] 
      > GSE[ldInst="${ldInst}"][cbName="${cbName}"]`);
}
/** @returns Whether the `gSE`s element attributes or instType has changed */
function checkGSEDiff(gSE, attrs, instType) {
    return Object.entries(attrs).some(([key, value]) => {
        var _a, _b, _c;
        const oldValue = (_b = (_a = gSE.querySelector(gSEselectors[key])) === null || _a === void 0 ? void 0 : _a.textContent) !== null && _b !== void 0 ? _b : null;
        if (instType === undefined)
            return oldValue !== value;
        const oldInstType = key === 'MinTime' || key === 'MaxTime'
            ? undefined
            : (_c = gSE.querySelector(gSEselectors[key])) === null || _c === void 0 ? void 0 : _c.hasAttribute('xsi:type');
        if (oldInstType === undefined)
            return oldValue !== value;
        return oldValue !== value || instType !== oldInstType;
    });
}
function checkTimeMinMaxTimeDiff(gSE, attrs) {
    const timeAttrs = {};
    timeAttrs.MinTime = attrs.MinTime;
    timeAttrs.MaxTime = attrs.MaxTime;
    return checkGSEDiff(gSE, timeAttrs);
}
function checkTimeAddressDiff(gSE, attrs, instType) {
    const timeAttrs = {};
    timeAttrs['MAC-Address'] = attrs['MAC-Address'];
    timeAttrs.APPID = attrs.APPID;
    timeAttrs['VLAN-ID'] = attrs['VLAN-ID'];
    timeAttrs['VLAN-PRIORITY'] = attrs['VLAN-PRIORITY'];
    return checkGSEDiff(gSE, timeAttrs, instType);
}
/** @returns a new [[`tag`]] element owned by [[`doc`]]. */
function createElement$2(doc, tag, attrs) {
    const element = doc.createElementNS(doc.documentElement.namespaceURI, tag);
    Object.entries(attrs)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .filter(([_, value]) => value !== null)
        .forEach(([name, value]) => element.setAttribute(name, value));
    return element;
}
function updateGseTimes(gSE, attr) {
    const actions = [];
    if (attr.MinTime !== undefined) {
        if (attr.MinTime !== null) {
            const newMinTime = createElement$2(gSE.ownerDocument, 'MinTime', {
                unit: 's',
                multiplier: 'm',
            });
            newMinTime.textContent = attr.MinTime;
            actions.push({
                parent: gSE,
                node: newMinTime,
                reference: getReference(gSE, 'MinTime'),
            });
        }
        const oldMinTime = gSE.querySelector('MinTime');
        if (oldMinTime)
            actions.push({ node: oldMinTime });
    }
    if (attr.MaxTime !== undefined) {
        if (attr.MaxTime !== null) {
            const newMaxTime = createElement$2(gSE.ownerDocument, 'MaxTime', {
                unit: 's',
                multiplier: 'm',
            });
            newMaxTime.textContent = attr.MaxTime;
            actions.push({
                parent: gSE,
                node: newMaxTime,
                reference: getReference(gSE, 'MaxTime'),
            });
        }
        const oldMaxTime = gSE.querySelector('MaxTime');
        if (oldMaxTime)
            actions.push({ node: oldMaxTime });
    }
    return actions;
}
function updateGseAddress(gSE, attrs, instType) {
    const actions = [];
    const newAddress = createElement$2(gSE.ownerDocument, 'Address', {});
    Object.entries(attrs)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .filter(([_, value]) => value !== null)
        .forEach(([type, value]) => {
        const child = createElement$2(gSE.ownerDocument, 'P', { type });
        if (instType)
            child.setAttributeNS('http://www.w3.org/2001/XMLSchema-instance', 'xsi:type', `tP_${type}`);
        child.textContent = value;
        newAddress.appendChild(child);
    });
    actions.push({
        parent: gSE,
        node: newAddress,
        reference: getReference(gSE, 'Address'),
    });
    const oldAddress = gSE.querySelector('Address');
    if (oldAddress)
        actions.push({ node: oldAddress });
    return actions;
}
/**
 * @param gSE - the element to be updated
 * @param attrs - input values containing potential changes
 * @param instType - Whether xsi:type attributes shall be set
 * @returns Action array updating GSEs children Address, MinTine and MaxTime
 * */
function updateGSE(gSE, attrs, instType) {
    const addressActions = checkTimeAddressDiff(gSE, attrs, instType)
        ? updateGseAddress(gSE, attrs, instType)
        : [];
    const timeActions = checkTimeMinMaxTimeDiff(gSE, attrs)
        ? updateGseTimes(gSE, attrs)
        : [];
    return addressActions.concat(timeActions);
}
/** @returns Action inserting new `GSE` to [[`connectedAp`]] element */
function addGSE(connectedAp, attributes, options = { pTypes: {} }) {
    var _a, _b;
    const actions = [];
    const gSE = createElement$2(connectedAp.ownerDocument, 'GSE', attributes);
    const address = createElement$2(gSE.ownerDocument, 'Address', {});
    if (!options.pTypes['MAC-Address'])
        // eslint-disable-next-line no-param-reassign
        options.pTypes['MAC-Address'] = mACAddressGenerator(connectedAp.ownerDocument, 'GSE')();
    if (!options.pTypes.APPID)
        // eslint-disable-next-line no-param-reassign
        options.pTypes.APPID = appIdGenerator(connectedAp.ownerDocument, 'GSE')();
    Object.entries(options.pTypes)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .filter(([_, value]) => value !== null)
        .forEach(([type, value]) => {
        const child = createElement$2(gSE.ownerDocument, 'P', { type });
        child.textContent = value;
        address.appendChild(child);
    });
    actions.push({
        parent: connectedAp,
        node: gSE,
        reference: getReference(connectedAp, 'GSE'),
    });
    actions.push({
        parent: gSE,
        node: address,
        reference: getReference(gSE, 'Address'),
    });
    const newMinTime = createElement$2(gSE.ownerDocument, 'MinTime', {
        unit: 's',
        multiplier: 'm',
    });
    newMinTime.textContent = (_a = options.minTime) !== null && _a !== void 0 ? _a : '10';
    actions.push({
        parent: gSE,
        node: newMinTime,
        reference: getReference(gSE, 'MinTime'),
    });
    const newMaxTime = createElement$2(gSE.ownerDocument, 'MaxTime', {
        unit: 's',
        multiplier: 'm',
    });
    newMaxTime.textContent = (_b = options.maxTime) !== null && _b !== void 0 ? _b : '10000';
    actions.push({
        parent: gSE,
        node: newMaxTime,
        reference: getReference(gSE, 'MaxTime'),
    });
    return actions;
}

/** @returns ConnectedAP element for any given element within an AccessPoint */
function connectedAp(parent) {
    var _a, _b;
    const apName = (_a = parent.closest('AccessPoint')) === null || _a === void 0 ? void 0 : _a.getAttribute('name');
    const iedName = (_b = parent.closest('IED')) === null || _b === void 0 ? void 0 : _b.getAttribute('name');
    return parent.ownerDocument.querySelector(`ConnectedAP[iedName="${iedName}"][apName="${apName}"]`);
}

function createElement$1(doc, tag, attrs) {
    const element = doc.createElementNS(doc.documentElement.namespaceURI, tag);
    Object.entries(attrs)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .filter(([_, value]) => value !== null)
        .forEach(([name, value]) => element.setAttribute(name, value));
    return element;
}
/** @returns action array to update all `GSEControl` attributes */
function updateGseControl(gseControl, attrs) {
    attrs.confRev = updatedConfRev(gseControl); // +10000 for update
    const ctrlBlockUpdates = [
        { element: gseControl, attributes: attrs },
    ];
    if (!attrs.name)
        return ctrlBlockUpdates;
    const extRefUpdates = findCtrlBlockSubscription(gseControl).map(extRef => ({
        element: extRef,
        attributes: { srcCBName: attrs.name },
    }));
    const objRefUpdates = Array.from(gseControl.ownerDocument.querySelectorAll('Val'))
        .filter(val => val.textContent === controlBlockObjectReference(gseControl))
        .flatMap(val => {
        const [path] = controlBlockObjectReference(gseControl).split('.');
        const newVal = gseControl.ownerDocument.createTextNode(`${path}.${attrs.name}`);
        return [
            { node: val.firstChild },
            { parent: val, node: newVal, reference: null },
        ];
    });
    const updateGseAction = [];
    const gSE = referencedGSE(gseControl);
    if (gSE) {
        updateGseAction.push({ element: gSE, attributes: { cbName: attrs.name } });
    }
    return ctrlBlockUpdates.concat(extRefUpdates, objRefUpdates, updateGseAction);
}
function uniqueGSEControlName(ln0) {
    const nameCore = 'newGSEControl';
    const siblingNames = Array.from(ln0.querySelectorAll('GSEControl')).map(child => { var _a; return (_a = child.getAttribute('name')) !== null && _a !== void 0 ? _a : child.tagName; });
    if (!siblingNames.length)
        return `${nameCore}_001`;
    let newName = '';
    // eslint-disable-next-line no-plusplus
    let i = 1;
    newName = `${nameCore}_${i.toString().padStart(3, '0')}`;
    while (i < siblingNames.length + 1) {
        if (!siblingNames.includes(newName))
            break;
        i += 1;
        newName = `${nameCore}_${i.toString().padStart(3, '0')}`;
    }
    return newName;
}
/** Function processing GSEControl creation
 * @parent Parent element such as `LN0`, `LDevice`, `AccessPoint` and `IED`
 * @attributes GSEControl element attributes. Required but missing attributes
 *             will be added automatically
 * @returns Action inserting new `GSEControl` to [[`parent`]] element
 * */
function addGSEControl(parent, attributes = {}) {
    const ln0 = parent.tagName === 'LN0' ? parent : parent.querySelector('LN0');
    if (!ln0)
        return null;
    if (!attributes.name)
        attributes.name = uniqueGSEControlName(ln0);
    if (!attributes.confRev)
        attributes.confRev = '1';
    if (!attributes.type)
        attributes.type = 'GOOSE';
    if (!attributes.appId)
        attributes.appId = `${identity(ln0)}>${uniqueGSEControlName(ln0)}`;
    const gseControl = createElement$1(ln0.ownerDocument, 'GSEControl', attributes);
    const actions = [];
    actions.push({
        parent: ln0,
        node: gseControl,
        reference: getReference(ln0, 'GSEControl'),
    });
    const connAp = connectedAp(ln0);
    if (!connAp)
        return actions;
    const ldInst = ln0.closest('LDevice').getAttribute('inst');
    const cbName = gseControl.getAttribute('name');
    if (!ldInst || !cbName)
        return actions;
    const gseAttrs = { ldInst, cbName };
    return actions.concat(addGSE(connAp, gseAttrs));
}

let GseControlElementEditor = class GseControlElementEditor extends s$3 {
    constructor() {
        super(...arguments);
        /** SCL change indicator */
        this.editCount = 0;
        this.gSEdiff = false;
        this.gSEControlDiff = false;
    }
    get gSE() {
        var _a, _b, _c;
        const cbName = this.element.getAttribute('name');
        const iedName = (_a = this.element.closest('IED')) === null || _a === void 0 ? void 0 : _a.getAttribute('name');
        const apName = (_b = this.element.closest('AccessPoint')) === null || _b === void 0 ? void 0 : _b.getAttribute('name');
        const ldInst = (_c = this.element.closest('LDevice')) === null || _c === void 0 ? void 0 : _c.getAttribute('inst');
        return this.element.ownerDocument.querySelector(`:root > Communication > SubNetwork > ` +
            `ConnectedAP[iedName="${iedName}"][apName="${apName}"] > ` +
            `GSE[ldInst="${ldInst}"][cbName="${cbName}"]`);
    }
    onGSEControlInputChange() {
        var _a, _b, _c;
        if (Array.from((_a = this.gSEControlInputs) !== null && _a !== void 0 ? _a : []).some(input => !input.checkValidity())) {
            this.gSEControlDiff = false;
            return;
        }
        const gSEControlAttrs = {};
        for (const input of (_b = this.gSEControlInputs) !== null && _b !== void 0 ? _b : [])
            gSEControlAttrs[input.label] = input.maybeValue;
        this.gSEControlDiff = Array.from((_c = this.gSEControlInputs) !== null && _c !== void 0 ? _c : []).some(input => { var _a; return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.getAttribute(input.label)) !== input.maybeValue; });
    }
    saveGSEControlChanges() {
        var _a, _b;
        if (!this.element)
            return;
        const gSEControlAttrs = {};
        for (const input of (_a = this.gSEControlInputs) !== null && _a !== void 0 ? _a : [])
            if (((_b = this.element) === null || _b === void 0 ? void 0 : _b.getAttribute(input.label)) !== input.maybeValue)
                gSEControlAttrs[input.label] = input.maybeValue;
        this.dispatchEvent(newEditEvent(updateGseControl(this.element, gSEControlAttrs)));
        this.onGSEControlInputChange();
    }
    onGSEInputChange() {
        var _a, _b, _c;
        if (Array.from((_a = this.gSEInputs) !== null && _a !== void 0 ? _a : []).some(input => !input.checkValidity())) {
            this.gSEdiff = false;
            return;
        }
        const gSEAttrs = {};
        for (const input of (_b = this.gSEInputs) !== null && _b !== void 0 ? _b : [])
            gSEAttrs[input.label] = input.maybeValue;
        this.gSEdiff = checkGSEDiff(this.gSE, gSEAttrs, (_c = this.instType) === null || _c === void 0 ? void 0 : _c.checked);
    }
    saveGSEChanges() {
        var _a, _b;
        if (!this.gSE)
            return;
        const gSEAttrs = {};
        for (const input of (_a = this.gSEInputs) !== null && _a !== void 0 ? _a : [])
            gSEAttrs[input.label] = input.maybeValue;
        this.dispatchEvent(newEditEvent(updateGSE(this.gSE, gSEAttrs, (_b = this.instType) === null || _b === void 0 ? void 0 : _b.checked)));
        this.onGSEInputChange();
    }
    renderGseContent() {
        var _a, _b, _c, _d;
        const { gSE } = this;
        if (!gSE)
            return y `<div class="content">
        <h3>
          <div>Communication Settings (GSE)</div>
          <div class="headersubtitle">No connection to SubNetwork</div>
        </h3>
      </div>`;
        const minTime = (_b = (_a = gSE.querySelector('MinTime')) === null || _a === void 0 ? void 0 : _a.innerHTML.trim()) !== null && _b !== void 0 ? _b : null;
        const maxTime = (_d = (_c = gSE.querySelector('MaxTime')) === null || _c === void 0 ? void 0 : _c.innerHTML.trim()) !== null && _d !== void 0 ? _d : null;
        const hasInstType = Array.from(gSE.querySelectorAll('Address > P')).some(pType => pType.getAttribute('xsi:type'));
        const attributes = {};
        ['MAC-Address', 'APPID', 'VLAN-ID', 'VLAN-PRIORITY'].forEach(key => {
            var _a, _b;
            if (!attributes[key])
                attributes[key] =
                    (_b = (_a = gSE.querySelector(`Address > P[type="${key}"]`)) === null || _a === void 0 ? void 0 : _a.innerHTML.trim()) !== null && _b !== void 0 ? _b : null;
        });
        return y `<div class="content gse">
      <h3>Communication Settings (GSE)</h3>
      <mwc-formfield label="connectedap.wizard.addschemainsttype"
        ><mwc-checkbox
          id="instType"
          ?checked="${hasInstType}"
          @change=${this.onGSEInputChange}
        ></mwc-checkbox></mwc-formfield
      >${Object.entries(attributes).map(([key, value]) => y `<oscd-textfield
            label="${key}"
            .maybeValue=${value}
            pattern="${typePattern[key]}"
            required
            @input=${this.onGSEInputChange}
            ?nullable=${typeNullable[key]}
          ></oscd-textfield>`)}<oscd-textfield
        label="MinTime"
        .maybeValue=${minTime}
        nullable
        suffix="ms"
        type="number"
        @input=${this.onGSEInputChange}
      ></oscd-textfield
      ><oscd-textfield
        label="MaxTime"
        .maybeValue=${maxTime}
        nullable
        suffix="ms"
        type="number"
        @input=${this.onGSEInputChange}
      ></oscd-textfield>
      <mwc-button
        class="save"
        label="save"
        icon="save"
        ?disabled=${!this.gSEdiff}
        @click=${() => this.saveGSEChanges()}
      ></mwc-button>
    </div>`;
    }
    renderGseControlContent() {
        var _a, _b;
        const [name, desc, type, appID, fixedOffs, securityEnabled] = [
            'name',
            'desc',
            'type',
            'appID',
            'fixedOffs',
            'securityEnabled',
        ].map(attr => { var _a; return (_a = this.element) === null || _a === void 0 ? void 0 : _a.getAttribute(attr); });
        const reservedGseControlNames = Array.from((_b = (_a = this.element.parentElement) === null || _a === void 0 ? void 0 : _a.querySelectorAll('GSEControl')) !== null && _b !== void 0 ? _b : [])
            .map(gseControl => gseControl.getAttribute('name'))
            .filter(gseControlName => gseControlName !== this.element.getAttribute('name'));
        return y `<div class="content gsecontrol">
      <oscd-textfield
        label="name"
        .maybeValue=${name}
        helper="scl.name"
        required
        validationMessage="textfield.required"
        pattern="${patterns.asciName}"
        maxLength="${maxLength.cbName}"
        .reservedValues=${reservedGseControlNames}
        dialogInitialFocus
        @input=${this.onGSEControlInputChange}
      ></oscd-textfield>
      <oscd-textfield
        label="desc"
        .maybeValue=${desc}
        nullable
        helper="scl.desc"
        @input=${this.onGSEControlInputChange}
      ></oscd-textfield>
      <oscd-select
        label="type"
        .maybeValue=${type}
        helper="scl.type"
        nullable
        required
        @selected=${this.onGSEControlInputChange}
        >${['GOOSE', 'GSSE'].map(gseControlType => y `<mwc-list-item value="${gseControlType}"
              >${gseControlType}</mwc-list-item
            >`)}</oscd-select
      >
      <oscd-textfield
        label="appID"
        .maybeValue=${appID}
        helper="scl.id"
        required
        validationMessage="textfield.nonempty"
        @input=${this.onGSEControlInputChange}
      ></oscd-textfield>
      <oscd-checkbox
        label="fixedOffs"
        .maybeValue=${fixedOffs}
        nullable
        helper="scl.fixedOffs"
        @input=${this.onGSEControlInputChange}
      ></oscd-checkbox>
      <oscd-select
        label="securityEnabled"
        .maybeValue=${securityEnabled}
        nullable
        required
        helper="scl.securityEnable"
        @selected=${this.onGSEControlInputChange}
        >${['None', 'Signature', 'SignatureAndEncryption'].map(securityType => y `<mwc-list-item value="${securityType}"
              >${securityType}</mwc-list-item
            >`)}</oscd-select
      >
      <mwc-button
        class="save"
        label="save"
        icon="save"
        ?disabled=${!this.gSEControlDiff}
        @click=${() => this.saveGSEControlChanges()}
      ></mwc-button>
    </div>`;
    }
    render() {
        return y `<h2 style="display: flex;">
        <div style="flex:auto">
          <div>GSEControl</div>
          <div class="headersubtitle">${identity(this.element)}</div>
        </div>
      </h2>
      <div class="parentcontent">
        ${this.renderGseControlContent()}${this.renderGseContent()}
      </div>`;
    }
};
GseControlElementEditor.styles = i$6 `
    .parentcontent {
      display: grid;
      grid-gap: 12px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(316px, auto));
    }

    .content {
      display: flex;
      flex-direction: column;
      border-left: thick solid var(--mdc-theme-on-primary);
    }

    .content > * {
      display: block;
      margin: 4px 8px 16px;
    }

    .save {
      align-self: flex-end;
    }

    h2,
    h3 {
      color: var(--mdc-theme-on-surface);
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      margin: 4px 8px 16px;
      padding-left: 0.3em;
    }

    .headersubtitle {
      font-size: 16px;
      font-weight: 200;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    *[iconTrailing='search'] {
      --mdc-shape-small: 28px;
    }

    @media (max-width: 950px) {
      .content {
        border-left: 0px solid var(--mdc-theme-on-primary);
      }
    }
  `;
__decorate([
    e$6({ attribute: false })
], GseControlElementEditor.prototype, "doc", void 0);
__decorate([
    e$6({ attribute: false })
], GseControlElementEditor.prototype, "element", void 0);
__decorate([
    e$6({ type: Number })
], GseControlElementEditor.prototype, "editCount", void 0);
__decorate([
    e$6({ attribute: false })
], GseControlElementEditor.prototype, "gSE", null);
__decorate([
    t$2()
], GseControlElementEditor.prototype, "gSEdiff", void 0);
__decorate([
    t$2()
], GseControlElementEditor.prototype, "gSEControlDiff", void 0);
__decorate([
    e$4('.content.gse > oscd-textfield')
], GseControlElementEditor.prototype, "gSEInputs", void 0);
__decorate([
    e$4('.content.gsecontrol > oscd-textfield, .content.gsecontrol > oscd-select, .content.gsecontrol > oscd-checkbox')
], GseControlElementEditor.prototype, "gSEControlInputs", void 0);
__decorate([
    i$3('#instType')
], GseControlElementEditor.prototype, "instType", void 0);
GseControlElementEditor = __decorate([
    e$7('gse-control-element-editor')
], GseControlElementEditor);

let GseControlEditor = class GseControlEditor extends s$3 {
    constructor() {
        super(...arguments);
        /** SCL change indicator */
        this.editCount = 0;
    }
    /** Resets selected GOOSE and its DataSet, if not existing in new doc */
    update(props) {
        super.update(props);
        if (props.has('doc') && this.selectedGseControl) {
            const newGseControl = updateElementReference(this.doc, this.selectedGseControl);
            this.selectedGseControl = newGseControl !== null && newGseControl !== void 0 ? newGseControl : undefined;
            this.selectedDataSet = this.selectedGseControl
                ? updateElementReference(this.doc, this.selectedDataSet)
                : undefined;
            if (!newGseControl && this.selectionList && this.selectionList.selected)
                this.selectionList.selected.selected = false;
        }
    }
    selectDataSet() {
        var _a, _b;
        const dataSetElement = this.selectDataSetDialog.querySelector('oscd-filtered-list').selected;
        if (!dataSetElement)
            return;
        const dataSetName = dataSetElement.value;
        const dataSet = (_b = (_a = this.selectedGseControl) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.querySelector(`DataSet[name="${dataSetName}"]`);
        if (!dataSet)
            return;
        this.dispatchEvent(newEditEvent({
            element: this.selectedGseControl,
            attributes: { datSet: dataSetName },
        }));
        this.selectedDataSet = dataSet;
        this.selectDataSetDialog.close();
    }
    selectGSEControl(evt) {
        var _a;
        const id = evt.target.selected.value;
        const gseControl = this.doc.querySelector(selector('GSEControl', id));
        if (!gseControl)
            return;
        this.selectedGseControl = gseControl;
        if (gseControl) {
            this.selectedDataSet = (_a = gseControl.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector(`DataSet[name="${gseControl.getAttribute('datSet')}"]`);
            evt.target.classList.add('hidden');
            this.selectGSEControlButton.classList.remove('hidden');
        }
    }
    renderSelectDataSetDialog() {
        var _a, _b, _c;
        return y `
      <mwc-dialog heading="Select Data Set">
        <oscd-filtered-list activatable @action=${() => this.selectDataSet()}
          >${Array.from((_c = (_b = (_a = this.selectedGseControl) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.querySelectorAll('DataSet')) !== null && _c !== void 0 ? _c : []).map(dataSet => {
            var _a, _b, _c, _d, _e;
            return y `<mwc-list-item
                twoline
                ?selected=${((_b = (_a = this.selectedDataSet) === null || _a === void 0 ? void 0 : _a.getAttribute('name')) !== null && _b !== void 0 ? _b : 'UNDEFINED') ===
                ((_c = dataSet.getAttribute('name')) !== null && _c !== void 0 ? _c : 'UNDEFINED')}
                value="${(_d = dataSet.getAttribute('name')) !== null && _d !== void 0 ? _d : 'UNDEFINED'}"
                ><span>${(_e = dataSet.getAttribute('name')) !== null && _e !== void 0 ? _e : 'UNDEFINED'}</span>
                <span slot="secondary">${identity(dataSet)}</span>
              </mwc-list-item>`;
        })}
        </oscd-filtered-list>
      </mwc-dialog>
    `;
    }
    renderElementEditorContainer() {
        if (this.selectedGseControl !== undefined)
            return y `<div class="elementeditorcontainer">
        <div class="content dataSet">
          ${this.renderSelectDataSetDialog()}
          <data-set-element-editor
            .element=${this.selectedDataSet}
            .showHeader=${false}
            editCount="${this.editCount}"
          >
            <mwc-icon-button
              slot="change"
              icon="swap_vert"
              ?disabled=${!!findCtrlBlockSubscription(this.selectedGseControl)
                .length}
              @click=${() => this.selectDataSetDialog.show()}
            ></mwc-icon-button
          ></data-set-element-editor>
        </div>
        <gse-control-element-editor
          .doc=${this.doc}
          .element=${this.selectedGseControl}
          editCount="${this.editCount}"
        ></gse-control-element-editor>
      </div>`;
        return y ``;
    }
    renderSelectionList() {
        return y `<oscd-filtered-list
      activatable
      @action=${this.selectGSEControl}
      class="selectionlist"
      >${Array.from(this.doc.querySelectorAll('IED')).flatMap(ied => {
            const ieditem = y `<mwc-list-item
            class="listitem header"
            hasMeta
            noninteractive
            graphic="icon"
            value="${Array.from(ied.querySelectorAll('GSEControl'))
                .map(element => {
                const id = identity(element);
                return typeof id === 'string' ? id : '';
            })
                .join(' ')}"
          >
            <span>${ied.getAttribute('name')}</span>
            <mwc-icon slot="graphic">developer_board</mwc-icon>
            <mwc-icon-button
              slot="meta"
              icon="playlist_add"
              @click=${() => {
                const insert = addGSEControl(ied);
                if (insert)
                    this.dispatchEvent(newEditEvent(insert));
                this.requestUpdate();
            }}
            ></mwc-icon-button>
          </mwc-list-item>
          <li divider role="separator"></li>`;
            const gseControls = Array.from(ied.querySelectorAll('GSEControl')).map(gseControl => y `<mwc-list-item
              hasMeta
              twoline
              value="${identity(gseControl)}"
              graphic="icon"
              ><span>${gseControl.getAttribute('name')}</span
              ><span slot="secondary">${identity(gseControl)}</span>
              <span slot="meta"
                ><mwc-icon-button
                  icon="delete"
                  @click=${() => {
                this.dispatchEvent(newEditEvent(removeControlBlock(gseControl)));
                this.requestUpdate();
            }}
                ></mwc-icon-button>
              </span>
              <mwc-icon slot="graphic">${gooseIcon}</mwc-icon>
            </mwc-list-item>`);
            return [ieditem, ...gseControls];
        })}</oscd-filtered-list
    >`;
    }
    renderToggleButton() {
        return y `<mwc-button
      class="change scl element"
      outlined
      label="publisher.selectbutton GOOSE"
      @click=${() => {
            this.selectionList.classList.remove('hidden');
            this.selectGSEControlButton.classList.add('hidden');
        }}
    ></mwc-button>`;
    }
    render() {
        return y `${this.renderToggleButton()}
      <div class="section">
        ${this.renderSelectionList()}${this.renderElementEditorContainer()}
      </div>`;
    }
};
GseControlEditor.styles = i$6 `
    ${styles}

    .elementeditorcontainer {
      flex: 65%;
      margin: 4px 8px 4px 4px;
      background-color: var(--mdc-theme-surface);
      overflow-y: scroll;
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      grid-template-columns: repeat(3, 1fr);
    }
    .content.dataSet {
      display: flex;
      flex-direction: column;
    }

    data-set-element-editor {
      grid-column: 1 / 2;
    }

    gse-control-element-editor {
      grid-column: 2 / 4;
    }

    mwc-list-item {
      --mdc-list-item-meta-size: 48px;
    }

    mwc-icon-button[icon='playlist_add'] {
      pointer-events: all;
    }

    @media (max-width: 950px) {
      .elementeditorcontainer {
        display: block;
      }
    }
  `;
__decorate([
    e$6({ attribute: false })
], GseControlEditor.prototype, "doc", void 0);
__decorate([
    e$6({ type: Number })
], GseControlEditor.prototype, "editCount", void 0);
__decorate([
    t$2()
], GseControlEditor.prototype, "selectedGseControl", void 0);
__decorate([
    t$2()
], GseControlEditor.prototype, "selectedDataSet", void 0);
__decorate([
    i$3('.selectionlist')
], GseControlEditor.prototype, "selectionList", void 0);
__decorate([
    i$3('mwc-button')
], GseControlEditor.prototype, "selectGSEControlButton", void 0);
__decorate([
    i$3('mwc-dialog')
], GseControlEditor.prototype, "selectDataSetDialog", void 0);
GseControlEditor = __decorate([
    e$7('gse-control-editor')
], GseControlEditor);

let DataSetEditor = class DataSetEditor extends s$3 {
    constructor() {
        super(...arguments);
        /** SCL change indicator */
        this.editCount = 0;
    }
    /** Resets selected GOOSE, if not existing in new doc */
    update(props) {
        if (props.has('doc') && this.selectedDataSet) {
            const newDataSet = updateElementReference(this.doc, this.selectedDataSet);
            this.selectedDataSet = newDataSet !== null && newDataSet !== void 0 ? newDataSet : undefined;
            if (!newDataSet && this.selectionList && this.selectionList.selected)
                this.selectionList.selected.selected = false;
        }
        super.update(props);
    }
    selectDataSet(evt) {
        const id = evt.target.selected.value;
        const dataSet = this.doc.querySelector(selector('DataSet', id));
        if (dataSet) {
            this.selectedDataSet = dataSet;
            evt.target.classList.add('hidden');
            this.selectDataSetButton.classList.remove('hidden');
        }
    }
    renderElementEditorContainer() {
        if (this.selectedDataSet)
            return y `<div class="elementeditorcontainer">
        <data-set-element-editor
          .element=${this.selectedDataSet}
          editCount="${this.editCount}"
        ></data-set-element-editor>
      </div>`;
        return y ``;
    }
    renderSelectionList() {
        return y `<oscd-filtered-list
      activatable
      @action=${this.selectDataSet}
      class="selectionlist"
      >${Array.from(this.doc.querySelectorAll('IED')).flatMap(ied => {
            const ieditem = y `<mwc-list-item
            hasMeta
            class="listitem header"
            noninteractive
            graphic="icon"
            value="${Array.from(ied.querySelectorAll('DataSet'))
                .map(element => {
                const id = identity(element);
                return typeof id === 'string' ? id : '';
            })
                .join(' ')}"
          >
            <span>${ied.getAttribute('name')}</span>
            <mwc-icon slot="graphic">developer_board</mwc-icon>
            <mwc-icon-button
              slot="meta"
              icon="playlist_add"
              @click=${() => {
                const insertDataSet = addDataSet(ied);
                if (insertDataSet)
                    this.dispatchEvent(newEditEvent(insertDataSet));
                this.requestUpdate();
            }}
            ></mwc-icon-button>
          </mwc-list-item>
          <li divider role="separator"></li>`;
            const dataSets = Array.from(ied.querySelectorAll('DataSet')).map(dataSet => y `<mwc-list-item hasMeta twoline value="${identity(dataSet)}"
              ><span>${dataSet.getAttribute('name')}</span
              ><span slot="secondary">${identity(dataSet)}</span>
              <span slot="meta"
                ><mwc-icon-button
                  icon="delete"
                  @click=${() => {
                this.dispatchEvent(newEditEvent(removeDataSet(dataSet)));
                this.requestUpdate();
            }}
                ></mwc-icon-button>
              </span>
            </mwc-list-item>`);
            return [ieditem, ...dataSets];
        })}</oscd-filtered-list
    >`;
    }
    renderToggleButton() {
        return y `<mwc-button
      outlined
      label="publisher.selectbutton.DataSet"
      @click=${() => {
            this.selectionList.classList.remove('hidden');
            this.selectDataSetButton.classList.add('hidden');
        }}
    ></mwc-button>`;
    }
    render() {
        return y `${this.renderToggleButton()}
      <div class="section">
        ${this.renderSelectionList()}${this.renderElementEditorContainer()}
      </div>`;
    }
};
DataSetEditor.styles = i$6 `
    ${styles}

    data-set-element-editor {
      flex: auto;
    }

    mwc-icon-button[icon='playlist_add'] {
      pointer-events: all;
    }

    mwc-list-item {
      --mdc-list-item-meta-size: 48px;
    }
  `;
__decorate([
    e$6({ attribute: false })
], DataSetEditor.prototype, "doc", void 0);
__decorate([
    e$6({ type: Number })
], DataSetEditor.prototype, "editCount", void 0);
__decorate([
    t$2()
], DataSetEditor.prototype, "selectedDataSet", void 0);
__decorate([
    i$3('.selectionlist')
], DataSetEditor.prototype, "selectionList", void 0);
__decorate([
    i$3('mwc-button')
], DataSetEditor.prototype, "selectDataSetButton", void 0);
DataSetEditor = __decorate([
    e$7('data-set-editor')
], DataSetEditor);

const sMVselectors = {
    'MAC-Address': ':scope > Address > P[type="MAC-Address"]',
    APPID: ':scope > Address > P[type="APPID"]',
    'VLAN-ID': ':scope > Address > P[type="VLAN-ID"]',
    'VLAN-PRIORITY': ':scope > Address > P[type="VLAN-PRIORITY"]',
};
/** @returns a new [[`tag`]] element owned by [[`doc`]]. */
function createElement(doc, tag, attrs) {
    const element = doc.createElementNS(doc.documentElement.namespaceURI, tag);
    Object.entries(attrs)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .filter(([_, value]) => value !== null)
        .forEach(([name, value]) => element.setAttribute(name, value));
    return element;
}
/** @returns Whether the `sMV`s element attributes or instType has changed */
function checkSMVDiff(sMV, attributes = { pTypes: {} }) {
    const pTypeDiff = Object.entries(attributes.pTypes).some(([key, value]) => { var _a, _b; return ((_b = (_a = sMV.querySelector(sMVselectors[key])) === null || _a === void 0 ? void 0 : _a.textContent) !== null && _b !== void 0 ? _b : null) !== value; });
    if (pTypeDiff)
        return true;
    if (attributes.instType === undefined)
        return false;
    const instTypeDiff = Object.keys(attributes.pTypes).some(key => {
        const pType = sMV.querySelector(sMVselectors[key]);
        if (!pType)
            return false;
        const hasInstType = pType.hasAttribute('xsi:type');
        return hasInstType !== attributes.instType;
    });
    return instTypeDiff;
}
/** Update function for SMV element's Address field
 * @sMV the `SMV` element to update the address element of
 * @attributes pType values `MAC-Address`,`APPID`,`VLAN-ID` or `VLAN-PRIORITY`
 *           instType whether to add xsi:type attributes for better XML parsing
 * @return action array to update a `SMV`s `Address` child element
 */
function updateSmvAddress(sMV, attributes = { pTypes: {}, instType: false }) {
    const actions = [];
    const newAddress = createElement(sMV.ownerDocument, 'Address', {});
    Object.entries(attributes.pTypes)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .filter(([_, value]) => value !== null)
        .forEach(([type, value]) => {
        const child = createElement(sMV.ownerDocument, 'P', { type });
        if (attributes.instType)
            child.setAttributeNS('http://www.w3.org/2001/XMLSchema-instance', 'xsi:type', `tP_${type}`);
        child.textContent = value;
        newAddress.appendChild(child);
    });
    actions.push({
        parent: sMV,
        node: newAddress,
    });
    const oldAddress = sMV.querySelector('Address');
    if (oldAddress)
        actions.push({ node: oldAddress });
    return actions;
}

/** @returns action array to update all `SmvOps` attributes */
function updateSmvOpts(smvOpts, attributes) {
    return { element: smvOpts, attributes };
}

let SampledValueControlElementEditor = class SampledValueControlElementEditor extends s$3 {
    constructor() {
        super(...arguments);
        /** SCL change indicator */
        this.editCount = 0;
        this.sMVdiff = false;
        this.smvOptsDiff = false;
    }
    get sMV() {
        var _a, _b, _c;
        const cbName = this.element.getAttribute('name');
        const iedName = (_a = this.element.closest('IED')) === null || _a === void 0 ? void 0 : _a.getAttribute('name');
        const apName = (_b = this.element.closest('AccessPoint')) === null || _b === void 0 ? void 0 : _b.getAttribute('name');
        const ldInst = (_c = this.element.closest('LDevice')) === null || _c === void 0 ? void 0 : _c.getAttribute('inst');
        return this.element.ownerDocument.querySelector(`:root > Communication > SubNetwork > ` +
            `ConnectedAP[iedName="${iedName}"][apName="${apName}"] > ` +
            `SMV[ldInst="${ldInst}"][cbName="${cbName}"]`);
    }
    onSMVInputChange() {
        var _a, _b, _c;
        if (Array.from((_a = this.sMVInputs) !== null && _a !== void 0 ? _a : []).some(input => !input.checkValidity())) {
            this.sMVdiff = false;
            return;
        }
        const pTypes = {};
        for (const input of (_b = this.sMVInputs) !== null && _b !== void 0 ? _b : [])
            pTypes[input.label] = input.maybeValue;
        this.sMVdiff = checkSMVDiff(this.sMV, {
            pTypes,
            instType: (_c = this.instType) === null || _c === void 0 ? void 0 : _c.checked,
        });
    }
    saveSMVChanges() {
        var _a, _b;
        if (!this.sMV)
            return;
        const pTypes = {};
        for (const input of (_a = this.sMVInputs) !== null && _a !== void 0 ? _a : [])
            pTypes[input.label] = input.maybeValue;
        this.dispatchEvent(newEditEvent(updateSmvAddress(this.sMV, {
            pTypes,
            instType: (_b = this.instType) === null || _b === void 0 ? void 0 : _b.checked,
        })));
        this.onSMVInputChange();
    }
    onSmvOptsInputChange() {
        var _a, _b, _c;
        const smvOpts = this.element.querySelector(':scope > SmvOpts');
        if (Array.from((_a = this.smvOptsInputs) !== null && _a !== void 0 ? _a : []).some(input => !input.checkValidity())) {
            this.smvOptsDiff = false;
            return;
        }
        const smvOptsAttrs = {};
        for (const input of (_b = this.smvOptsInputs) !== null && _b !== void 0 ? _b : [])
            smvOptsAttrs[input.label] = input.maybeValue;
        this.smvOptsDiff = Array.from((_c = this.smvOptsInputs) !== null && _c !== void 0 ? _c : []).some(input => (smvOpts === null || smvOpts === void 0 ? void 0 : smvOpts.getAttribute(input.label)) !== input.maybeValue);
    }
    saveSmvOptsChanges() {
        var _a;
        const smvOpts = this.element.querySelector(':scope > SmvOpts');
        if (!smvOpts)
            return;
        const smvOptsAttrs = {};
        for (const input of (_a = this.smvOptsInputs) !== null && _a !== void 0 ? _a : [])
            if (smvOpts.getAttribute(input.label) !== input.maybeValue)
                smvOptsAttrs[input.label] = input.maybeValue;
        this.dispatchEvent(newEditEvent(updateSmvOpts(smvOpts, smvOptsAttrs)));
        this.onSmvOptsInputChange();
    }
    renderSmvContent() {
        const { sMV } = this;
        if (!sMV)
            return y ` <h3>
        <div>'publisher.smv.commsetting</div>
        <div class="headersubtitle">publisher.smv.noconnectionap'</div>
      </h3>`;
        const hasInstType = Array.from(sMV.querySelectorAll('Address > P')).some(pType => pType.getAttribute('xsi:type'));
        const attributes = {};
        ['MAC-Address', 'APPID', 'VLAN-ID', 'VLAN-PRIORITY'].forEach(key => {
            var _a, _b, _c;
            if (!attributes[key])
                attributes[key] =
                    (_c = (_b = (_a = sMV
                        .querySelector(`Address > P[type="${key}"]`)) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim()) !== null && _c !== void 0 ? _c : null;
        });
        return y ` <div class="content smv">
      <h3>Communication Settings (SMV)</h3>
      <mwc-formfield label="connectedap.wizard.addschemainsttype"
        ><mwc-checkbox
          id="instType"
          ?checked="${hasInstType}"
          @change=${this.onSMVInputChange}
        ></mwc-checkbox></mwc-formfield
      >${Object.entries(attributes).map(([key, value]) => y `<oscd-textfield
            label="${key}"
            ?nullable=${typeNullable[key]}
            .maybeValue=${value}
            pattern="${typePattern[key]}"
            required
            @input=${this.onSMVInputChange}
          ></oscd-textfield>`)}<mwc-button
        class="save"
        label="save"
        icon="save"
        ?disabled=${!this.sMVdiff}
        @click=${() => this.saveSMVChanges()}
      ></mwc-button>
    </div>`;
    }
    renderSmvOptsContent() {
        const [refreshTime, sampleSynchronized, sampleRate, dataSet, security, timestamp, synchSourceId,] = [
            'refreshTime',
            'sampleSynchronized',
            'sampleRate',
            'dataSet',
            'security',
            'timestamp',
            'synchSourceId',
        ].map(attr => { var _a, _b; return (_b = (_a = this.element.querySelector('SmvOpts')) === null || _a === void 0 ? void 0 : _a.getAttribute(attr)) !== null && _b !== void 0 ? _b : null; });
        return y `<div class="content smvopts">
      <h3>'Sampled Value Options'</h3>
      ${Object.entries({
            refreshTime,
            sampleSynchronized,
            sampleRate,
            dataSet,
            security,
            timestamp,
            synchSourceId,
        }).map(([key, value]) => y `<oscd-checkbox
            label="${key}"
            .maybeValue=${value}
            nullable
            helper="scl.key"
            @input=${this.onSmvOptsInputChange}
          ></oscd-checkbox>`)}<mwc-button
        class="save"
        label="save"
        icon="save"
        ?disabled=${!this.smvOptsDiff}
        @click=${() => this.saveSmvOptsChanges()}
      ></mwc-button>
    </div>`;
    }
    renderOtherElements() {
        return y `<div class="content">
      ${this.renderSmvOptsContent()}${this.renderSmvContent()}
    </div>`;
    }
    renderSmvControlContent() {
        const [name, desc, multicast, smvID, smpMod, smpRate, nofASDU, securityEnabled,] = [
            'name',
            'desc',
            'multicast',
            'smvID',
            'smpMod',
            'smpRate',
            'nofASDU',
            'securityEnabled',
        ].map(attr => { var _a; return (_a = this.element) === null || _a === void 0 ? void 0 : _a.getAttribute(attr); });
        return y `<div class="content">
      <oscd-textfield
        label="name"
        .maybeValue=${name}
        helper="scl.name"
        required
        validationMessage="textfield.required')}"
        pattern="${patterns.asciName}"
        maxLength="${maxLength.cbName}"
        dialogInitialFocus
        disabled
      ></oscd-textfield>
      <oscd-textfield
        label="desc"
        .maybeValue=${desc}
        nullable
        helper="scl.desc')}"
        disabled
      ></oscd-textfield>
      ${multicast === 'true'
            ? y ``
            : y `<oscd-checkbox
            label="multicast"
            .maybeValue=${multicast}
            helper="scl.multicast')}"
            disabled
          ></oscd-checkbox>`}
      <oscd-textfield
        label="smvID"
        .maybeValue=${smvID}
        helper="scl.id')}"
        required
        voscd-textfield="textfield.nonempty')}"
        disabled
      ></oscd-textfield>
      <oscd-select
        label="smpMod"
        .maybeValue=${smpMod}
        nullable
        required
        helper="scl.smpMod')}"
        disabled
        >${['SmpPerPeriod', 'SmpPerSec', 'SecPerSmp'].map(option => y `<mwc-list-item value="${option}">${option}</mwc-list-item>`)}</oscd-select
      >
      <oscd-textfield
        label="smpRate"
        .maybeValue=${smpRate}
        helper="scl.smpRate')}"
        required
        type="number"
        moscd-textfield
        oscd-textfield
      ></oscd-textfield>
      <oscd-textfield
        label="nofASDU"
        .maybeValue=${nofASDU}
        helper="scl.nofASDU')}"
        required
        type="number"
        min="0"
        disabled
      ></oscd-textfield>
      <oscd-select
        label="securityEnabled"
        .maybeValue=${securityEnabled}
        nullable
        required
        helper="scl.securityEnable')}"
        disabled
        >${['None', 'Signature', 'SignatureAndEncryption'].map(type => y `<mwc-list-item value="${type}">${type}</mwc-list-item>`)}</oscd-select
      >
    </div>`;
    }
    render() {
        return y `<h2 style="display: flex;">
        <div style="flex:auto">
          <div>SampledValueControl</div>
          <div class="headersubtitle">${identity(this.element)}</div>
        </div>
      </h2>
      <div class="parentcontent">
        ${this.renderSmvControlContent()}${this.renderOtherElements()}
      </div>`;
    }
};
SampledValueControlElementEditor.styles = i$6 `
    .parentcontent {
      display: grid;
      grid-gap: 12px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(316px, auto));
    }

    .content {
      border-left: thick solid var(--mdc-theme-on-primary);
    }

    .content > * {
      display: block;
      margin: 4px 8px 16px;
    }

    h2,
    h3 {
      color: var(--mdc-theme-on-surface);
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      margin: 4px 8px 16px;
      padding-left: 0.3em;
    }

    .headersubtitle {
      font-size: 16px;
      font-weight: 200;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    *[iconTrailing='search'] {
      --mdc-shape-small: 28px;
    }

    @media (max-width: 950px) {
      .content {
        border-left: 0px solid var(--mdc-theme-on-primary);
      }
    }
  `;
__decorate([
    e$6({ attribute: false })
], SampledValueControlElementEditor.prototype, "doc", void 0);
__decorate([
    e$6({ attribute: false })
], SampledValueControlElementEditor.prototype, "element", void 0);
__decorate([
    e$6({ type: Number })
], SampledValueControlElementEditor.prototype, "editCount", void 0);
__decorate([
    e$6({ attribute: false })
], SampledValueControlElementEditor.prototype, "sMV", null);
__decorate([
    t$2()
], SampledValueControlElementEditor.prototype, "sMVdiff", void 0);
__decorate([
    t$2()
], SampledValueControlElementEditor.prototype, "smvOptsDiff", void 0);
__decorate([
    e$4('.content.smv > oscd-textfield')
], SampledValueControlElementEditor.prototype, "sMVInputs", void 0);
__decorate([
    e$4('.content.smvopts > oscd-checkbox')
], SampledValueControlElementEditor.prototype, "smvOptsInputs", void 0);
__decorate([
    i$3('#instType')
], SampledValueControlElementEditor.prototype, "instType", void 0);
SampledValueControlElementEditor = __decorate([
    e$7('sampled-value-control-element-editor')
], SampledValueControlElementEditor);

let SampledValueControlEditor = class SampledValueControlEditor extends s$3 {
    constructor() {
        super(...arguments);
        /** SCL change indicator */
        this.editCount = 0;
    }
    /** Resets selected SMV and its DataSet, if not existing in new doc */
    update(props) {
        super.update(props);
        if (props.has('doc') && this.selectedSampledValueControl) {
            const newSampledValueControl = updateElementReference(this.doc, this.selectedSampledValueControl);
            this.selectedSampledValueControl = newSampledValueControl !== null && newSampledValueControl !== void 0 ? newSampledValueControl : undefined;
            this.selectedDataSet = this.selectedSampledValueControl
                ? updateElementReference(this.doc, this.selectedDataSet)
                : undefined;
            if (!newSampledValueControl &&
                this.selectionList &&
                this.selectionList.selected)
                this.selectionList.selected.selected = false;
        }
    }
    selectDataSet() {
        var _a, _b;
        const dataSetElement = this.selectDataSetDialog.querySelector('oscd-filtered-list').selected;
        if (!dataSetElement)
            return;
        const dataSetName = dataSetElement.value;
        const dataSet = (_b = (_a = this.selectedSampledValueControl) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.querySelector(`DataSet[name="${dataSetName}"]`);
        if (!dataSet)
            return;
        this.dispatchEvent(newEditEvent({
            element: this.selectedSampledValueControl,
            attributes: { datSet: dataSetName },
        }));
        this.selectedDataSet = dataSet;
        this.selectDataSetDialog.close();
    }
    selectSMVControl(evt) {
        var _a, _b;
        const id = evt.target.selected.value;
        const smvControl = this.doc.querySelector(selector('SampledValueControl', id));
        if (!smvControl)
            return;
        this.selectedSampledValueControl = smvControl;
        if (smvControl) {
            this.selectedDataSet =
                (_b = (_a = smvControl.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector(`DataSet[name="${smvControl.getAttribute('datSet')}"]`)) !== null && _b !== void 0 ? _b : null;
            evt.target.classList.add('hidden');
            this.selectSampledValueControlButton.classList.remove('hidden');
        }
    }
    renderSelectDataSetDialog() {
        var _a, _b, _c;
        return y `
      <mwc-dialog heading="Select Data Set">
        <oscd-filtered-list activatable @selected=${() => this.selectDataSet()}
          >${Array.from((_c = (_b = (_a = this.selectedSampledValueControl) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.querySelectorAll('DataSet')) !== null && _c !== void 0 ? _c : []).map(dataSet => {
            var _a, _b, _c, _d, _e;
            return y `<mwc-list-item
                twoline
                ?selected=${((_b = (_a = this.selectedDataSet) === null || _a === void 0 ? void 0 : _a.getAttribute('name')) !== null && _b !== void 0 ? _b : 'UNDEFINED') ===
                ((_c = dataSet.getAttribute('name')) !== null && _c !== void 0 ? _c : 'UNDEFINED')}
                value="${(_d = dataSet.getAttribute('name')) !== null && _d !== void 0 ? _d : 'UNDEFINED'}"
                ><span>${(_e = dataSet.getAttribute('name')) !== null && _e !== void 0 ? _e : 'UNDEFINED'}</span>
                <span slot="secondary">${identity(dataSet)}</span>
              </mwc-list-item>`;
        })}
        </oscd-filtered-list>
      </mwc-dialog>
    `;
    }
    renderElementEditorContainer() {
        if (this.selectedSampledValueControl !== undefined)
            return y `<div class="elementeditorcontainer">
        <div class="content dataSet">
          ${this.renderSelectDataSetDialog()}
          <data-set-element-editor
            .element=${this.selectedDataSet}
            .showHeader=${false}
            editCount="${this.editCount}"
          >
            <mwc-icon-button
              slot="change"
              icon="swap_vert"
              ?disabled=${!!findCtrlBlockSubscription(this.selectedSampledValueControl).length}
              @click=${() => this.selectDataSetDialog.show()}
            ></mwc-icon-button
          ></data-set-element-editor>
        </div>
        <sampled-value-control-element-editor
          .doc=${this.doc}
          .element=${this.selectedSampledValueControl}
          editCount="${this.editCount}"
        ></sampled-value-control-element-editor>
      </div>`;
        return y ``;
    }
    renderSelectionList() {
        return y `<oscd-filtered-list
      activatable
      @action=${this.selectSMVControl}
      class="selectionlist"
      >${Array.from(this.doc.querySelectorAll('IED')).flatMap(ied => {
            const ieditem = y `<mwc-list-item
            class="listitem header"
            noninteractive
            graphic="icon"
            value="${Array.from(ied.querySelectorAll('SampledValueControl'))
                .map(element => {
                const id = identity(element);
                return typeof id === 'string' ? id : '';
            })
                .join(' ')}"
          >
            <span>${ied.getAttribute('name')}</span>
            <mwc-icon slot="graphic">developer_board</mwc-icon>
          </mwc-list-item>
          <li divider role="separator"></li>`;
            const sampledValueControls = Array.from(ied.querySelectorAll('SampledValueControl')).map(smvControl => y `<mwc-list-item
              hasMeta
              twoline
              value="${identity(smvControl)}"
              graphic="icon"
              ><span>${smvControl.getAttribute('name')}</span
              ><span slot="secondary">${identity(smvControl)}</span>
              <span slot="meta"
                ><mwc-icon-button
                  icon="delete"
                  @click=${() => {
                this.dispatchEvent(newEditEvent(removeControlBlock(smvControl)));
                this.requestUpdate();
            }}
                ></mwc-icon-button>
              </span>
              <mwc-icon slot="graphic">${smvIcon}</mwc-icon>
            </mwc-list-item>`);
            return [ieditem, ...sampledValueControls];
        })}</oscd-filtered-list
    >`;
    }
    renderToggleButton() {
        return y `<mwc-button
      class="change scl element"
      outlined
      label="'publisher.selectbutton', { type: 'SMV' })}"
      @click=${() => {
            this.selectionList.classList.remove('hidden');
            this.selectSampledValueControlButton.classList.add('hidden');
        }}
    ></mwc-button>`;
    }
    render() {
        return y `${this.renderToggleButton()}
      <div class="section">
        ${this.renderSelectionList()}${this.renderElementEditorContainer()}
      </div>`;
    }
};
SampledValueControlEditor.styles = i$6 `
    ${styles}

    .elementeditorcontainer {
      flex: 65%;
      margin: 4px 8px 4px 4px;
      background-color: var(--mdc-theme-surface);
      overflow-y: scroll;
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      grid-template-columns: repeat(3, 1fr);
    }

    .content.dataSet {
      display: flex;
      flex-direction: column;
    }
    mwc-list-item {
      --mdc-list-item-meta-size: 48px;
    }

    data-set-element-editor {
      grid-column: 1 / 2;
    }

    sampled-value-control-element-editor {
      grid-column: 2 / 4;
    }

    @media (max-width: 950px) {
      .elementeditorcontainer {
        display: block;
      }
    }
  `;
__decorate([
    e$6({ attribute: false })
], SampledValueControlEditor.prototype, "doc", void 0);
__decorate([
    e$6({ type: Number })
], SampledValueControlEditor.prototype, "editCount", void 0);
__decorate([
    t$2()
], SampledValueControlEditor.prototype, "selectedSampledValueControl", void 0);
__decorate([
    t$2()
], SampledValueControlEditor.prototype, "selectedDataSet", void 0);
__decorate([
    i$3('.selectionlist')
], SampledValueControlEditor.prototype, "selectionList", void 0);
__decorate([
    i$3('mwc-button')
], SampledValueControlEditor.prototype, "selectSampledValueControlButton", void 0);
__decorate([
    i$3('mwc-dialog')
], SampledValueControlEditor.prototype, "selectDataSetDialog", void 0);
SampledValueControlEditor = __decorate([
    e$7('sampled-value-control-editor')
], SampledValueControlEditor);

/** An editor [[`plugin`]] to configure `Report`, `GOOSE`, `SampledValue` control blocks and its `DataSet` */
class PublisherPlugin extends s$3 {
    constructor() {
        super(...arguments);
        /** SCL change indicator */
        this.editCount = 0;
        this.publisherType = 'GOOSE';
    }
    render() {
        return y `<div class="publishertypeselector">
        <mwc-formfield label="Report"
          ><mwc-radio
            value="Report"
            ?checked=${this.publisherType === 'Report'}
            eslint-disable-next-line
            no-return-assign
            @checked=${() => {
            this.publisherType = 'Report';
        }}
          ></mwc-radio></mwc-formfield
        ><mwc-formfield label="GOOSE"
          ><mwc-radio
            value="GOOSE"
            ?checked=${this.publisherType === 'GOOSE'}
            @checked=${() => {
            this.publisherType = 'GOOSE';
        }}
          ></mwc-radio></mwc-formfield
        ><mwc-formfield label="SampledValue"
          ><mwc-radio
            value="SampledValue"
            ?checked=${this.publisherType === 'SampledValue'}
            @checked=${() => {
            this.publisherType = 'SampledValue';
        }}
          ></mwc-radio></mwc-formfield
        ><mwc-formfield label="DataSet"
          ><mwc-radio
            value="DataSet"
            ?checked=${this.publisherType === 'DataSet'}
            @checked=${() => {
            this.publisherType = 'DataSet';
        }}
          ></mwc-radio
        ></mwc-formfield>
      </div>
      <report-control-editor
        .doc=${this.doc}
        editCount="${this.editCount}"
        class="${o$1({
            hidden: this.publisherType !== 'Report',
        })}"
      ></report-control-editor
      ><gse-control-editor
        .doc=${this.doc}
        editCount="${this.editCount}"
        class="${o$1({
            hidden: this.publisherType !== 'GOOSE',
        })}"
      ></gse-control-editor
      ><sampled-value-control-editor
        .doc=${this.doc}
        editCount="${this.editCount}"
        class="${o$1({
            hidden: this.publisherType !== 'SampledValue',
        })}"
      ></sampled-value-control-editor
      ><data-set-editor
        .doc=${this.doc}
        editCount="${this.editCount}"
        class="${o$1({
            hidden: this.publisherType !== 'DataSet',
        })}"
      ></data-set-editor>`;
    }
}
PublisherPlugin.styles = i$6 `
    .hidden {
      display: none;
    }

    .publishertypeselector {
      margin: 4px 8px 8px;
      background-color: var(--mdc-theme-surface);
      width: calc(100% - 16px);
      justify-content: space-around;
    }
  `;
__decorate([
    e$6({ attribute: false })
], PublisherPlugin.prototype, "doc", void 0);
__decorate([
    e$6({ type: Number })
], PublisherPlugin.prototype, "editCount", void 0);
__decorate([
    t$2()
], PublisherPlugin.prototype, "publisherType", void 0);

export { PublisherPlugin as default };
//# sourceMappingURL=oscd-publisher.js.map
