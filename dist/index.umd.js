(function(b,y){typeof exports=="object"&&typeof module<"u"?y(exports):typeof define=="function"&&define.amd?define(["exports"],y):(b=typeof globalThis<"u"?globalThis:b||self,y(b.UserSatisfactionSurvey={}))})(this,function(b){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Tt;const y=globalThis,V=y.ShadowRoot&&(y.ShadyCSS===void 0||y.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,F=Symbol(),rt=new WeakMap;let ot=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==F)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(V&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=rt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&rt.set(e,t))}return t}toString(){return this.cssText}};const It=n=>new ot(typeof n=="string"?n:n+"",void 0,F),kt=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[r+1],n[0]);return new ot(e,n,F)},Ot=(n,t)=>{if(V)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=y.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,n.appendChild(s)}},lt=V?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return It(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Mt,defineProperty:Rt,getOwnPropertyDescriptor:Ht,getOwnPropertyNames:Nt,getOwnPropertySymbols:Bt,getPrototypeOf:Dt}=Object,v=globalThis,at=v.trustedTypes,jt=at?at.emptyScript:"",W=v.reactiveElementPolyfillSupport,T=(n,t)=>n,D={toAttribute(n,t){switch(t){case Boolean:n=n?jt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},Y=(n,t)=>!Mt(n,t),ht={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:Y};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),v.litPropertyMetadata??(v.litPropertyMetadata=new WeakMap);class P extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ht){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Rt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=Ht(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const h=i==null?void 0:i.call(this);r.call(this,o),this.requestUpdate(t,h,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ht}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;const t=Dt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){const e=this.properties,s=[...Nt(e),...Bt(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(lt(i))}else t!==void 0&&e.push(lt(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ot(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var r;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const o=(((r=s.converter)==null?void 0:r.toAttribute)!==void 0?s.converter:D).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){var r;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),h=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:D;this._$Em=i,this[i]=h.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??Y)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,o]of i)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[T("elementProperties")]=new Map,P[T("finalized")]=new Map,W==null||W({ReactiveElement:P}),(v.reactiveElementVersions??(v.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=globalThis,j=q.trustedTypes,ct=j?j.createPolicy("lit-html",{createHTML:n=>n}):void 0,Q="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,Z="?"+_,zt=`<${Z}>`,w=document,I=()=>w.createComment(""),k=n=>n===null||typeof n!="object"&&typeof n!="function",dt=Array.isArray,pt=n=>dt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",J=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ut=/-->/g,ft=/>/g,x=RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$t=/'/g,_t=/"/g,mt=/^(?:script|style|textarea|title)$/i,Vt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),U=Vt(1),m=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),gt=new WeakMap,C=w.createTreeWalker(w,129);function yt(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ct!==void 0?ct.createHTML(t):t}const vt=(n,t)=>{const e=n.length-1,s=[];let i,r=t===2?"<svg>":"",o=O;for(let h=0;h<e;h++){const l=n[h];let c,u,a=-1,p=0;for(;p<l.length&&(o.lastIndex=p,u=o.exec(l),u!==null);)p=o.lastIndex,o===O?u[1]==="!--"?o=ut:u[1]!==void 0?o=ft:u[2]!==void 0?(mt.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=x):u[3]!==void 0&&(o=x):o===x?u[0]===">"?(o=i??O,a=-1):u[1]===void 0?a=-2:(a=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?x:u[3]==='"'?_t:$t):o===_t||o===$t?o=x:o===ut||o===ft?o=O:(o=x,i=void 0);const d=o===x&&n[h+1].startsWith("/>")?" ":"";r+=o===O?l+zt:a>=0?(s.push(c),l.slice(0,a)+Q+l.slice(a)+_+d):l+_+(a===-2?h:d)}return[yt(n,r+(n[e]||"<?>")+(t===2?"</svg>":"")),s]};class M{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const h=t.length-1,l=this.parts,[c,u]=vt(t,e);if(this.el=M.createElement(c,s),C.currentNode=this.el.content,e===2){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(i=C.nextNode())!==null&&l.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(const a of i.getAttributeNames())if(a.endsWith(Q)){const p=u[o++],d=i.getAttribute(a).split(_),$=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:$[2],strings:d,ctor:$[1]==="."?bt:$[1]==="?"?wt:$[1]==="@"?xt:R}),i.removeAttribute(a)}else a.startsWith(_)&&(l.push({type:6,index:r}),i.removeAttribute(a));if(mt.test(i.tagName)){const a=i.textContent.split(_),p=a.length-1;if(p>0){i.textContent=j?j.emptyScript:"";for(let d=0;d<p;d++)i.append(a[d],I()),C.nextNode(),l.push({type:2,index:++r});i.append(a[p],I())}}}else if(i.nodeType===8)if(i.data===Z)l.push({type:2,index:r});else{let a=-1;for(;(a=i.data.indexOf(_,a+1))!==-1;)l.push({type:7,index:r}),a+=_.length-1}r++}}static createElement(t,e){const s=w.createElement("template");return s.innerHTML=t,s}}function E(n,t,e=n,s){var o,h;if(t===m)return t;let i=s!==void 0?(o=e._$Co)==null?void 0:o[s]:e._$Cl;const r=k(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==r&&((h=i==null?void 0:i._$AO)==null||h.call(i,!1),r===void 0?i=void 0:(i=new r(n),i._$AT(n,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=E(n,i._$AS(n,t.values),i,s)),t}class At{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??w).importNode(e,!0);C.currentNode=i;let r=C.nextNode(),o=0,h=0,l=s[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new L(r,r.nextSibling,this,t):l.type===1?c=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(c=new Ct(r,this,t)),this._$AV.push(c),l=s[++h]}o!==(l==null?void 0:l.index)&&(r=C.nextNode(),o++)}return C.currentNode=w,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class L{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),k(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==m&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):pt(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==f&&k(this._$AH)?this._$AA.nextSibling.data=t:this.T(w.createTextNode(t)),this._$AH=t}$(t){var r;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=M.createElement(yt(s.h,s.h[0]),this.options)),s);if(((r=this._$AH)==null?void 0:r._$AD)===i)this._$AH.p(e);else{const o=new At(i,this),h=o.u(this.options);o.p(e),this.T(h),this._$AH=o}}_$AC(t){let e=gt.get(t.strings);return e===void 0&&gt.set(t.strings,e=new M(t)),e}k(t){dt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new L(this.S(I()),this.S(I()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=f}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(r===void 0)t=E(this,t,e,0),o=!k(t)||t!==this._$AH&&t!==m,o&&(this._$AH=t);else{const h=t;let l,c;for(t=r[0],l=0;l<r.length-1;l++)c=E(this,h[s+l],e,l),c===m&&(c=this._$AH[l]),o||(o=!k(c)||c!==this._$AH[l]),c===f?t=f:t!==f&&(t+=(c??"")+r[l+1]),this._$AH[l]=c}o&&!i&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class bt extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}}class wt extends R{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}}class xt extends R{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??f)===m)return;const s=this._$AH,i=t===f&&s!==f||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==f&&(s===f||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ct{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const Ft={P:Q,A:_,C:Z,M:1,L:vt,R:At,D:pt,V:E,I:L,H:R,N:wt,U:xt,B:bt,F:Ct},K=q.litHtmlPolyfillSupport;K==null||K(M,L),(q.litHtmlVersions??(q.litHtmlVersions=[])).push("3.1.2");const Wt=(n,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const r=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new L(t.insertBefore(I(),r),r,void 0,e??{})}return i._$AI(n),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let H=class extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Wt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return m}};H._$litElement$=!0,H.finalized=!0,(Tt=globalThis.litElementHydrateSupport)==null||Tt.call(globalThis,{LitElement:H});const G=globalThis.litElementPolyfillSupport;G==null||G({LitElement:H}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qt={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:Y},Zt=(n=Qt,t,e)=>{const{kind:s,metadata:i}=e;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),r.set(e.name,n),s==="accessor"){const{name:o}=e;return{set(h){const l=t.get.call(this);t.set.call(this,h),this.requestUpdate(o,l,n)},init(h){return h!==void 0&&this.P(o,void 0,n),h}}}if(s==="setter"){const{name:o}=e;return function(h){const l=this[o];t.call(this,h),this.requestUpdate(o,l,n)}}throw Error("Unsupported decorator location: "+s)};function z(n){return(t,e)=>typeof e=="object"?Zt(n,t,e):((s,i,r)=>{const o=i.hasOwnProperty(r);return i.constructor.createProperty(r,o?{...s,wrapped:!0}:s),o?Object.getOwnPropertyDescriptor(i,r):void 0})(n,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},tt=n=>(...t)=>({_$litDirective$:n,values:t});let et=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jt=tt(class extends et{constructor(n){var t;if(super(n),n.type!==X.ATTRIBUTE||n.name!=="class"||((t=n.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(t=>n[t]).join(" ")+" "}update(n,[t]){var s,i;if(this.st===void 0){this.st=new Set,n.strings!==void 0&&(this.nt=new Set(n.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!((s=this.nt)!=null&&s.has(r))&&this.st.add(r);return this.render(t)}const e=n.element.classList;for(const r of this.st)r in t||(e.remove(r),this.st.delete(r));for(const r in t){const o=!!t[r];o===this.st.has(r)||(i=this.nt)!=null&&i.has(r)||(o?(e.add(r),this.st.add(r)):(e.remove(r),this.st.delete(r)))}return m}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Et="important",Kt=" !"+Et,st=tt(class extends et{constructor(n){var t;if(super(n),n.type!==X.ATTRIBUTE||n.name!=="style"||((t=n.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(n){return Object.keys(n).reduce((t,e)=>{const s=n[e];return s==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(n,[t]){const{style:e}=n.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const s of this.ft)t[s]==null&&(this.ft.delete(s),s.includes("-")?e.removeProperty(s):e[s]=null);for(const s in t){const i=t[s];if(i!=null){this.ft.add(s);const r=typeof i=="string"&&i.endsWith(Kt);s.includes("-")||r?e.setProperty(s,r?i.slice(0,-11):i,r?Et:""):e[s]=i}}return m}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Gt}=Ft,St=()=>document.createComment(""),N=(n,t,e)=>{var r;const s=n._$AA.parentNode,i=t===void 0?n._$AB:t._$AA;if(e===void 0){const o=s.insertBefore(St(),i),h=s.insertBefore(St(),i);e=new Gt(o,h,n,n.options)}else{const o=e._$AB.nextSibling,h=e._$AM,l=h!==n;if(l){let c;(r=e._$AQ)==null||r.call(e,n),e._$AM=n,e._$AP!==void 0&&(c=n._$AU)!==h._$AU&&e._$AP(c)}if(o!==i||l){let c=e._$AA;for(;c!==o;){const u=c.nextSibling;s.insertBefore(c,i),c=u}}}return e},S=(n,t,e=n)=>(n._$AI(t,e),n),Xt={},te=(n,t=Xt)=>n._$AH=t,ee=n=>n._$AH,it=n=>{var s;(s=n._$AP)==null||s.call(n,!1,!0);let t=n._$AA;const e=n._$AB.nextSibling;for(;t!==e;){const i=t.nextSibling;t.remove(),t=i}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt=(n,t,e)=>{const s=new Map;for(let i=t;i<=e;i++)s.set(n[i],i);return s},Ut=tt(class extends et{constructor(n){if(super(n),n.type!==X.CHILD)throw Error("repeat() can only be used in text expressions")}dt(n,t,e){let s;e===void 0?e=t:t!==void 0&&(s=t);const i=[],r=[];let o=0;for(const h of n)i[o]=s?s(h,o):o,r[o]=e(h,o),o++;return{values:r,keys:i}}render(n,t,e){return this.dt(n,t,e).values}update(n,[t,e,s]){const i=ee(n),{values:r,keys:o}=this.dt(t,e,s);if(!Array.isArray(i))return this.ut=o,r;const h=this.ut??(this.ut=[]),l=[];let c,u,a=0,p=i.length-1,d=0,$=r.length-1;for(;a<=p&&d<=$;)if(i[a]===null)a++;else if(i[p]===null)p--;else if(h[a]===o[d])l[d]=S(i[a],r[d]),a++,d++;else if(h[p]===o[$])l[$]=S(i[p],r[$]),p--,$--;else if(h[a]===o[$])l[$]=S(i[a],r[$]),N(n,l[$+1],i[a]),a++,$--;else if(h[p]===o[d])l[d]=S(i[p],r[d]),N(n,i[a],i[p]),p--,d++;else if(c===void 0&&(c=Pt(o,d,$),u=Pt(h,a,p)),c.has(h[a]))if(c.has(h[p])){const g=u.get(o[d]),nt=g!==void 0?i[g]:null;if(nt===null){const qt=N(n,i[a]);S(qt,r[d]),l[d]=qt}else l[d]=S(nt,r[d]),N(n,i[a],nt),i[g]=null;d++}else it(i[p]),p--;else it(i[a]),a++;for(;d<=$;){const g=N(n,l[$+1]);S(g,r[d]),l[d++]=g}for(;a<=p;){const g=i[a++];g!==null&&it(g)}return this.ut=o,te(n,l),m}}),Lt="user-satisfaction";var se=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,B=(n,t,e,s)=>{for(var i=s>1?void 0:s?ie(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&se(t,e,i),i};let A=class extends H{constructor(){super(...arguments),this.questionList=[],this.questionIndex=0,this.isVisible=!1,this.styles={},this._answers=[]}willUpdate(n){if(n.has("isVisible")){const t=n.get("isVisible");t===!1?this.styles={animation:"0.4s ease forwards fadeIn",display:"block"}:t===!0&&(this.styles={animation:"0.5s ease forwards fadeOut",display:"block"})}}render(){var t;const n=(t=this.questionList[this.questionIndex])==null?void 0:t.content;return U`
      <div class="user-satisfaction-component" style=${st(this.styles)}>
        <svg class="icon-close" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" @click=${this._onCloseClick}>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.19526 4.19526C4.45561 3.93491 4.87772 3.93491 5.13807 4.19526L8 7.05719L10.8619 4.19526C11.1223 3.93491 11.5444 3.93491 11.8047 4.19526C12.0651 4.45561 12.0651 4.87772 11.8047 5.13807L8.94281 8L11.8047 10.8619C12.0651 11.1223 12.0651 11.5444 11.8047 11.8047C11.5444 12.0651 11.1223 12.0651 10.8619 11.8047L8 8.94281L5.13807 11.8047C4.87772 12.0651 4.45561 12.0651 4.19526 11.8047C3.93491 11.5444 3.93491 11.1223 4.19526 10.8619L7.05719 8L4.19526 5.13807C3.93491 4.87772 3.93491 4.45561 4.19526 4.19526Z" fill="currentColor"/>
        </svg>
        <div class="question">${n}</div>
        <div class="content-wrapper">
          <div class="option-wrapper">
            <div class="desc-text">不同意</div>
            ${this.renderRate()}
            <div class="desc-text">同意</div>
          </div>
          ${this.renderProgressText()}
        </div>
        ${this.renderProgressBar()}
      </div>
    `}renderProgressText(){return U`<div class="progress-text" style=${st({opacity:this.questionIndex===0?"0":"100%"})}>${this.questionIndex+1}/${this.questionList.length}</div>`}renderProgressBar(){return U`
      <div class="progress-bar" style=${st({opacity:this.questionIndex===0?"0":"100%"})}>
        ${Ut(this.questionList,n=>n.id,(n,t)=>U`<div class="${Jt({"progress-item":!0,"is-done":t<this.questionIndex,"is-active":t===this.questionIndex})}"></div>`)}
      </div>
    `}renderRate(){return U`
      <div class="rate-wrapper">
        ${Ut(["rate5","rate4","rate3","rate2","rate1"],n=>n,(n,t)=>U`
          <input type="radio" name="rate" id=${n}>
          <label for=${n} @click=${()=>this._onRateClick(5-t)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
              <path d="M10.2826 1.83735C10.5131 1.37041 10.6284 1.13694 10.7848 1.06235C10.9209 0.997447 11.0791 0.997447 11.2152 1.06235C11.3716 1.13694 11.4869 1.37041 11.7174 1.83735L13.904 6.26732C13.9721 6.40517 14.0061 6.47409 14.0558 6.52761C14.0999 6.57499 14.1527 6.61338 14.2113 6.64065C14.2775 6.67146 14.3536 6.68257 14.5057 6.70481L19.397 7.41974C19.912 7.49502 20.1696 7.53267 20.2888 7.65847C20.3925 7.76792 20.4412 7.91833 20.4215 8.06781C20.3988 8.23961 20.2124 8.42121 19.8395 8.78441L16.3014 12.2305C16.1911 12.3379 16.136 12.3916 16.1004 12.4555C16.0689 12.5121 16.0487 12.5742 16.0409 12.6385C16.0321 12.7112 16.0451 12.787 16.0711 12.9388L16.9059 17.8061C16.994 18.3195 17.038 18.5762 16.9553 18.7285C16.8833 18.8611 16.7553 18.954 16.607 18.9815C16.4366 19.0131 16.2061 18.8919 15.7451 18.6494L11.3724 16.3499C11.2361 16.2782 11.168 16.2424 11.0962 16.2283C11.0327 16.2159 10.9673 16.2159 10.9038 16.2283C10.832 16.2424 10.7639 16.2782 10.6276 16.3499L6.25491 18.6494C5.7939 18.8919 5.5634 19.0131 5.39296 18.9815C5.24467 18.954 5.11671 18.8611 5.04472 18.7285C4.96199 18.5762 5.00601 18.3195 5.09406 17.8061L5.92887 12.9388C5.9549 12.787 5.96791 12.7112 5.9591 12.6385C5.95131 12.5742 5.9311 12.5121 5.89959 12.4555C5.86401 12.3916 5.80886 12.3379 5.69857 12.2305L2.16054 8.78441C1.78765 8.42121 1.6012 8.23961 1.57851 8.06781C1.55877 7.91833 1.60754 7.76792 1.71124 7.65847C1.83042 7.53267 2.08796 7.49502 2.60303 7.41974L7.4943 6.70481C7.64641 6.68257 7.72247 6.67146 7.7887 6.64065C7.84735 6.61338 7.90015 6.57499 7.94417 6.52761C7.99389 6.47409 8.02791 6.40517 8.09596 6.26732L10.2826 1.83735Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </label>
        `)}
      </div>
    `}_onCloseClick(){this.isVisible=!1,this.dispatchEvent(new CustomEvent("close",{bubbles:!1,detail:null}))}_onRateClick(n){const t={index:this.questionIndex,questionId:this.questionList[this.questionIndex].id,score:n};this._answers.push(t),this.dispatchEvent(new CustomEvent("questionCompleted",{bubbles:!1,detail:t})),this.questionIndex<this.questionList.length-1?this.questionIndex++:(this.isVisible=!1,setTimeout(()=>{this.questionIndex=0},500),this.dispatchEvent(new CustomEvent("completed",{bubbles:!1,detail:this._answers})),this._answers=[])}};A.styles=kt`
    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(200px);
      }
      60% {
        opacity: 1;
        transform: translateY(-30px);
      }
      80% {
        opacity: 1;
        transform: translateY(10px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeOut {
      0% {
        opacity: 1;
        transform: translateY(0);
        pointer-events: none;
      }
      20% {
        opacity: 1;
        transform: translateY(-30px);
      }
      100% {
        opacity: 0;
        transform: translateY(200px);
        pointer-events: none;
      }
    }

    :host {
      position: fixed;
      z-index: 9999;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;

      --usc-modal-width: 400px;
    }

    .user-satisfaction-component {
      position: absolute;
      z-index: 9999;
      right: 24px;
      bottom: 40px;
      border-radius: 8px;
      border: 1px solid #EAECF0;
      box-shadow: 0px 20px 24px -4px rgba(8, 15, 52, 0.08), 0px 8px 8px -4px rgba(8, 15, 52, 0.03);
      width: var(--usc-modal-width);
      padding: 24px;
      background: #fff;
      overflow: hidden;
      pointer-events: auto;
      display: none;
    }

    .icon-close {
      position: absolute;
      right: 8px;
      top: 8px;
      width: 16px;
      height: 16px;
      cursor: pointer;
    }

    .icon-close path {
      fill: #98A2B3;
      transition: fill 0.2s ease;
    }

    .icon-close:hover path{
      fill: #667085;
    }

    .question {
      font-family: "PingFang SC";
      font-style: normal;
      font-size: 14px;
      line-height: 22px;
      font-weight: 500;
      color: #344054;
    }

    .content-wrapper {
      margin-top: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .content-wrapper > .option-wrapper {
      display: flex;
      align-items: center;
    }

    .content-wrapper > .option-wrapper > .desc-text {
      font-family: "PingFang SC";
      font-style: normal;
      font-size: 12px;
      line-height: 18px;
      font-weight: 400;
      color: #98A2B3;
    }

    .content-wrapper > .option-wrapper > .rate-wrapper {
      margin: 0 24px;
      display: flex;
      align-items: center;
      flex-flow: row-reverse;
    }

    .rate-wrapper > input[name="rate"] {
      position: absolute;
      opacity: 0;
      pointer-events: none;
    }

    .rate-wrapper > label {
      padding: 0 12px;
      cursor: pointer;
    }

    .rate-wrapper > label svg {
      width: 24px;
      height: 24px;
    }

    .rate-wrapper > label path {
      fill: #F2F4F7;
      stroke: #F2F4F7;
      transition: fill 0.25s ease, stroke 0.25s ease;
    }

    /* input[name="rate"]:checked ~ label path, */
    .rate-wrapper > label:hover path,
    .rate-wrapper > label:hover ~ label path {
      fill: #FDB022;
      stroke: #FDB022;
    }

    .rate-wrapper > label:hover {
      transform: scale(1.2);
      transition: transform 0.2s ease;
      transform-origin: center;
    }

    .content-wrapper > .option-wrapper > .rate-wrapper > div {
      cursor: pointer;
      color: #98A2B3;
    }

    .content-wrapper > .option-wrapper > .rate-wrapper > div:hover {
      color: #333;
    }

    .content-wrapper > .progress-text {
      flex-shrink: 0;
      font-family: "PingFang SC";
      font-style: normal;
      font-size: 12px;
      line-height: 18px;
      font-weight: 400;
      color: #667085;
    }

    .progress-bar {
      position: absolute;
      left: 0;
      bottom: 1px;
      width: 100%;
      height: 4px;
      display: flex;
      column-gap: 4px;
    }

    .progress-bar > .progress-item {
      position: relative;
      flex: 1;
      height: 4px;
      background: #E8EAED;
    }

    /* done */
    .progress-bar > .progress-item::before {
      content: '';
      position: absolute;
      z-index: 9;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: #99CEFF;
      transition: width 0.15s linear 0.15s;
    }

    /* active */
    .progress-bar > .progress-item::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: #0085FF;
      transition: width 0.15s linear 0.15s;
    }

    .progress-bar > .progress-item.is-done::before {
      width: 100%;
      transition: width 0.15s linear;
    }

    .progress-bar > .progress-item.is-active::after {
      width: 100%;
      transition: width 0.15s linear;
    }
  `,B([z({type:Array})],A.prototype,"questionList",2),B([z({type:Number})],A.prototype,"questionIndex",2),B([z({type:Boolean})],A.prototype,"isVisible",2),B([z()],A.prototype,"styles",2),A=B([Yt(Lt)],A);const ne=A;class re{constructor(t=[]){this._listenerDestroyers=[];const e=document.createElement(Lt);this._element=e,t.length>0&&this.addQuestions(t),document.body.appendChild(this._element)}launch(){this._element.isVisible=!0}close(){this._element.isVisible=!1}destroy(){document.body.removeChild(this._element);for(const t of this._listenerDestroyers)t();this._element=null,this._listenerDestroyers=null}setQuestions(t){this._element.questionList=t}removeQuestionById(t){if(this._element.questionIndex===this._element.questionList.length-1&&this._element.questionList[this._element.questionIndex].id===t)throw new Error("无法删除当前正在填写的最后一个问题！");this._element.questionIndex=this._element.questionIndex-this._element.questionList.slice(0,this._element.questionIndex).filter(e=>e.id===t).length,this._element.questionList=this._element.questionList.filter(e=>e.id!==t)}removeQuestionByIds(t){if(this._element.questionList.slice(this._element.questionIndex).every(e=>t.includes(e.id)))throw new Error("无法直接删除所有待填写问题！");this._element.questionIndex=this._element.questionIndex-this._element.questionList.slice(0,this._element.questionIndex).filter(e=>!t.includes(e.id)).length,this._element.questionList=this._element.questionList.filter(e=>!t.includes(e.id))}addQuestion(t,e=-1){e===-1?this._element.questionList.push(t):this._element.questionList.splice(e+1,0,t),this._element.requestUpdate()}addQuestions(t,e=-1){e===-1?this._element.questionList.push(...t):this._element.questionList.splice(e,0,...t),this._element.requestUpdate()}on(t,e){const s=i=>{e(i.detail)};this._element.addEventListener(t,s),this._listenerDestroyers.push(()=>{this._element.removeEventListener(t,s)})}}b.UserSatisfactionElement=ne,b.UserSatisfactionSurvey=re,Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});