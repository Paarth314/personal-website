var D=Object.defineProperty;var O=(t,n,e)=>n in t?D(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var f=(t,n,e)=>(O(t,typeof n!="symbol"?n+"":n,e),e);function G(){}function I(t,n){for(const e in n)t[e]=n[e];return t}function z(t){return t()}function it(){return Object.create(null)}function F(t){t.forEach(z)}function ct(t){return typeof t=="function"}function rt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let p;function lt(t,n){return t===n?!0:(p||(p=document.createElement("a")),p.href=n,t===p.href)}function st(t){return Object.keys(t).length===0}function R(t,...n){if(t==null){for(const i of n)i(void 0);return G}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ot(t,n,e){t.$$.on_destroy.push(R(n,e))}function ut(t,n,e,i){if(t){const c=M(t,n,e,i);return t[0](c)}}function M(t,n,e,i){return t[1]&&i?I(e.ctx.slice(),t[1](i(n))):e.ctx}function at(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const o=[],r=Math.max(n.dirty.length,c.length);for(let s=0;s<r;s+=1)o[s]=n.dirty[s]|c[s];return o}return n.dirty|c}return n.dirty}function ft(t,n,e,i,c,o){if(c){const r=M(n,e,i,o);t.p(r,c)}}function _t(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function dt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function ht(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}let y=!1;function mt(){y=!0}function pt(){y=!1}function U(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&l.push(a)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let l=0;l<n.length;l++){const u=n[l].claim_order,a=(c>0&&n[e[c]].claim_order<=u?c+1:U(1,c,B=>n[e[B]].claim_order,u))-1;i[l]=e[a]+1;const w=a+1;e[w]=l,c=Math.max(w,c)}const o=[],r=[];let s=n.length-1;for(let l=e[c]+1;l!=0;l=i[l-1]){for(o.push(n[l-1]);s>=l;s--)r.push(n[s]);s--}for(;s>=0;s--)r.push(n[s]);o.reverse(),r.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<r.length;l++){for(;u<o.length&&r[l].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(r[l],a)}}function J(t,n){if(y){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function K(t,n,e){t.insertBefore(n,e||null)}function Q(t,n,e){y&&!e?J(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function gt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function H(t){return document.createElement(t)}function S(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function T(t){return document.createTextNode(t)}function yt(){return T(" ")}function bt(){return T("")}function xt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Et(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function vt(t){return t.dataset.svelteH}function Tt(t){return Array.from(t.childNodes)}function j(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function C(t,n,e,i,c=!1){j(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const s=t[r];if(n(s)){const l=e(s);return l===void 0?t.splice(r,1):t[r]=l,c||(t.claim_info.last_index=r),s}}for(let r=t.claim_info.last_index-1;r>=0;r--){const s=t[r];if(n(s)){const l=e(s);return l===void 0?t.splice(r,1):t[r]=l,c?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function P(t,n,e,i){return C(t,c=>c.nodeName===n,c=>{const o=[];for(let r=0;r<c.attributes.length;r++){const s=c.attributes[r];e[s.name]||o.push(s.name)}o.forEach(r=>c.removeAttribute(r))},()=>i(n))}function wt(t,n,e){return P(t,n,e,H)}function Nt(t,n,e){return P(t,n,e,S)}function V(t,n){return C(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>T(n),!0)}function At(t){return V(t," ")}function N(t,n,e){for(let i=e;i<t.length;i+=1){const c=t[i];if(c.nodeType===8&&c.textContent.trim()===n)return i}return-1}function kt(t,n){const e=N(t,"HTML_TAG_START",0),i=N(t,"HTML_TAG_END",e+1);if(e===-1||i===-1)return new A(n);j(t);const c=t.splice(e,i-e+1);E(c[0]),E(c[c.length-1]);const o=c.slice(1,c.length-1);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new A(n,o)}function Lt(t,n){n=""+n,t.data!==n&&(t.data=n)}function Mt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Ht(t,n,e){t.classList.toggle(n,!!e)}function X(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}class Y{constructor(n=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=S(e.nodeName):this.e=H(e.nodeType===11?"TEMPLATE":e.nodeName),this.t=e.tagName!=="TEMPLATE"?e:e.content,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)K(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(E)}}class A extends Y{constructor(e=!1,i){super(e);f(this,"l");this.e=this.n=null,this.l=i}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let i=0;i<this.n.length;i+=1)Q(this.t,this.n[i],e)}}function St(t,n){return new t(n)}let g;function b(t){g=t}function m(){if(!g)throw new Error("Function called outside component initialization");return g}function jt(t){m().$$.on_mount.push(t)}function Ct(t){m().$$.after_update.push(t)}function Pt(){const t=m();return(n,e,{cancelable:i=!1}={})=>{const c=t.$$.callbacks[n];if(c){const o=X(n,e,{cancelable:i});return c.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}function qt(t,n){return m().$$.context.set(t,n),n}function Bt(t){return m().$$.context.get(t)}const h=[],k=[];let d=[];const L=[],q=Promise.resolve();let v=!1;function Z(){v||(v=!0,q.then(tt))}function Dt(){return Z(),q}function $(t){d.push(t)}const x=new Set;let _=0;function tt(){if(_!==0)return;const t=g;do{try{for(;_<h.length;){const n=h[_];_++,b(n),nt(n.$$)}}catch(n){throw h.length=0,_=0,n}for(b(null),h.length=0,_=0;k.length;)k.pop()();for(let n=0;n<d.length;n+=1){const e=d[n];x.has(e)||(x.add(e),e())}d.length=0}while(h.length);for(;L.length;)L.pop()();v=!1,x.clear(),b(t)}function nt(t){if(t.fragment!==null){t.update(),F(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach($)}}function Ot(t){const n=[],e=[];d.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),d=n}export{mt as $,F as A,ot as B,Ht as C,ut as D,ft as E,_t as F,at as G,ht as H,I,dt as J,gt as K,Bt as L,lt as M,A as N,kt as O,Pt as P,qt as Q,it as R,tt as S,ct as T,st as U,Ot as V,g as W,b as X,z as Y,h as Z,Z as _,yt as a,pt as a0,Ct as b,At as c,E as d,bt as e,H as f,wt as g,Tt as h,Q as i,Et as j,Mt as k,T as l,V as m,Lt as n,jt as o,k as p,St as q,$ as r,rt as s,Dt as t,S as u,vt as v,Nt as w,J as x,xt as y,G as z};
