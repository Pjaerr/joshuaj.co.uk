function j(){}function en(n,t){for(const e in t)n[e]=t[e];return n}function T(n){return n()}function C(){return Object.create(null)}function m(n){n.forEach(T)}function L(n){return typeof n=="function"}function rn(n,t){return n!=n?t==t:n!==t||n&&typeof n=="object"||typeof n=="function"}let y;function cn(n,t){return y||(y=document.createElement("a")),y.href=t,n===y.href}function D(n){return Object.keys(n).length===0}function ln(n){const t={};for(const e in n)e[0]!=="$"&&(t[e]=n[e]);return t}function on(n){return n??""}function un(n){return n&&L(n.destroy)?n.destroy:j}let b=!1;function z(){b=!0}function F(){b=!1}function G(n,t,e,l){for(;n<t;){const c=n+(t-n>>1);e(c)<=l?n=c+1:t=c}return n}function H(n){if(n.hydrate_init)return;n.hydrate_init=!0;let t=n.childNodes;if(n.nodeName==="HEAD"){const i=[];for(let o=0;o<t.length;o++){const s=t[o];s.claim_order!==void 0&&i.push(s)}t=i}const e=new Int32Array(t.length+1),l=new Int32Array(t.length);e[0]=-1;let c=0;for(let i=0;i<t.length;i++){const o=t[i].claim_order,s=(c>0&&t[e[c]].claim_order<=o?c+1:G(1,c,p=>t[e[p]].claim_order,o))-1;l[i]=e[s]+1;const a=s+1;e[a]=i,c=Math.max(a,c)}const f=[],r=[];let u=t.length-1;for(let i=e[c]+1;i!=0;i=l[i-1]){for(f.push(t[i-1]);u>=i;u--)r.push(t[u]);u--}for(;u>=0;u--)r.push(t[u]);f.reverse(),r.sort((i,o)=>i.claim_order-o.claim_order);for(let i=0,o=0;i<r.length;i++){for(;o<f.length&&r[i].claim_order>=f[o].claim_order;)o++;const s=o<f.length?f[o]:null;n.insertBefore(r[i],s)}}function I(n,t){if(b){for(H(n),(n.actual_end_child===void 0||n.actual_end_child!==null&&n.actual_end_child.parentElement!==n)&&(n.actual_end_child=n.firstChild);n.actual_end_child!==null&&n.actual_end_child.claim_order===void 0;)n.actual_end_child=n.actual_end_child.nextSibling;t!==n.actual_end_child?(t.claim_order!==void 0||t.parentNode!==n)&&n.insertBefore(t,n.actual_end_child):n.actual_end_child=t.nextSibling}else(t.parentNode!==n||t.nextSibling!==null)&&n.appendChild(t)}function fn(n,t,e){b&&!e?I(n,t):(t.parentNode!==n||t.nextSibling!=e)&&n.insertBefore(t,e||null)}function P(n){n.parentNode.removeChild(n)}function an(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}function W(n){return document.createElement(n)}function v(n){return document.createTextNode(n)}function sn(){return v(" ")}function dn(){return v("")}function _n(n,t,e,l){return n.addEventListener(t,e,l),()=>n.removeEventListener(t,e,l)}function hn(n,t,e){e==null?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function J(n){return Array.from(n.childNodes)}function K(n){n.claim_info===void 0&&(n.claim_info={last_index:0,total_claimed:0})}function M(n,t,e,l,c=!1){K(n);const f=(()=>{for(let r=n.claim_info.last_index;r<n.length;r++){const u=n[r];if(t(u)){const i=e(u);return i===void 0?n.splice(r,1):n[r]=i,c||(n.claim_info.last_index=r),u}}for(let r=n.claim_info.last_index-1;r>=0;r--){const u=n[r];if(t(u)){const i=e(u);return i===void 0?n.splice(r,1):n[r]=i,c?i===void 0&&n.claim_info.last_index--:n.claim_info.last_index=r,u}}return l()})();return f.claim_order=n.claim_info.total_claimed,n.claim_info.total_claimed+=1,f}function Q(n,t,e,l){return M(n,c=>c.nodeName===t,c=>{const f=[];for(let r=0;r<c.attributes.length;r++){const u=c.attributes[r];e[u.name]||f.push(u.name)}f.forEach(r=>c.removeAttribute(r))},()=>l(t))}function mn(n,t,e){return Q(n,t,e,W)}function R(n,t){return M(n,e=>e.nodeType===3,e=>{const l=""+t;if(e.data.startsWith(l)){if(e.data.length!==l.length)return e.splitText(l.length)}else e.data=l},()=>v(t),!0)}function pn(n){return R(n," ")}function yn(n,t){t=""+t,n.wholeText!==t&&(n.data=t)}let A;function h(n){A=n}const _=[],q=[],x=[],B=[],V=Promise.resolve();let E=!1;function X(){E||(E=!0,V.then(O))}function k(n){x.push(n)}const w=new Set;let g=0;function O(){const n=A;do{for(;g<_.length;){const t=_[g];g++,h(t),Y(t.$$)}for(h(null),_.length=0,g=0;q.length;)q.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];w.has(e)||(w.add(e),e())}x.length=0}while(_.length);for(;B.length;)B.pop()();E=!1,w.clear(),h(n)}function Y(n){if(n.fragment!==null){n.update(),m(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(k)}}const $=new Set;let d;function gn(){d={r:0,c:[],p:d}}function xn(){d.r||m(d.c),d=d.p}function Z(n,t){n&&n.i&&($.delete(n),n.i(t))}function $n(n,t,e,l){if(n&&n.o){if($.has(n))return;$.add(n),d.c.push(()=>{$.delete(n),l&&(e&&n.d(1),l())}),n.o(t)}}function bn(n,t){const e={},l={},c={$$scope:1};let f=n.length;for(;f--;){const r=n[f],u=t[f];if(u){for(const i in r)i in u||(l[i]=1);for(const i in u)c[i]||(e[i]=u[i],c[i]=1);n[f]=u}else for(const i in r)c[i]=1}for(const r in l)r in e||(e[r]=void 0);return e}function wn(n){return typeof n=="object"&&n!==null?n:{}}function En(n){n&&n.c()}function kn(n,t){n&&n.l(t)}function U(n,t,e,l){const{fragment:c,on_mount:f,on_destroy:r,after_update:u}=n.$$;c&&c.m(t,e),l||k(()=>{const i=f.map(T).filter(L);r?r.push(...i):m(i),n.$$.on_mount=[]}),u.forEach(k)}function nn(n,t){const e=n.$$;e.fragment!==null&&(m(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function tn(n,t){n.$$.dirty[0]===-1&&(_.push(n),X(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function jn(n,t,e,l,c,f,r,u=[-1]){const i=A;h(n);const o=n.$$={fragment:null,ctx:null,props:f,update:j,not_equal:c,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:C(),dirty:u,skip_bound:!1,root:t.target||i.$$.root};r&&r(o.root);let s=!1;if(o.ctx=e?e(n,t.props||{},(a,p,...N)=>{const S=N.length?N[0]:p;return o.ctx&&c(o.ctx[a],o.ctx[a]=S)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](S),s&&tn(n,a)),p}):[],o.update(),s=!0,m(o.before_update),o.fragment=l?l(o.ctx):!1,t.target){if(t.hydrate){z();const a=J(t.target);o.fragment&&o.fragment.l(a),a.forEach(P)}else o.fragment&&o.fragment.c();t.intro&&Z(n.$$.fragment),U(n,t.target,t.anchor,t.customElement),F(),O()}h(i)}class vn{$destroy(){nn(this,1),this.$destroy=j}$on(t,e){const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(e),()=>{const c=l.indexOf(e);c!==-1&&l.splice(c,1)}}$set(t){this.$$set&&!D(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{sn as A,pn as B,cn as C,on as D,un as E,yn as F,an as G,vn as S,kn as a,fn as b,En as c,wn as d,dn as e,xn as f,bn as g,Z as h,jn as i,P as j,nn as k,en as l,U as m,ln as n,gn as o,W as p,mn as q,J as r,rn as s,$n as t,j as u,hn as v,v as w,R as x,I as y,_n as z};
