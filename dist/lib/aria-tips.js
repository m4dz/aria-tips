!function(){"use strict";var t="undefined"==typeof window?global:window;if("function"!=typeof t.require){var e={},r={},n={}.hasOwnProperty,i={},o=function(t,e){var r=0;e&&(e.indexOf(!1)&&(r="components/".length),e.indexOf("/",r)>0&&(e=e.substring(r,e.indexOf("/",r))));var n=i[t+"/index.js"]||i[e+"/deps/"+t+"/index.js"];return n?"components/"+n.substring(0,n.length-".js".length):t},u=function(){var t=/^\.\.?(\/|$)/;return function(e,r){var n,i,o=[];n=(t.test(r)?e+"/"+r:r).split("/");for(var u=0,s=n.length;s>u;u++)i=n[u],".."===i?o.pop():"."!==i&&""!==i&&o.push(i);return o.join("/")}}(),s=function(t){return t.split("/").slice(0,-1).join("/")},a=function(e){return function(r){var n=u(s(e),r);return t.require(n,e)}},l=function(t,e){var n={id:t,exports:{}};return r[t]=n,e(n.exports,a(t),n),n.exports},c=function(t,i){var s=u(t,".");if(null==i&&(i="/"),s=o(t,i),n.call(r,s))return r[s].exports;if(n.call(e,s))return l(s,e[s]);var a=u(s,"./index");if(n.call(r,a))return r[a].exports;if(n.call(e,a))return l(a,e[a]);throw new Error('Cannot find module "'+t+'" from "'+i+'"')};c.alias=function(t,e){i[e]=t},c.register=c.define=function(t,r){if("object"==typeof t)for(var i in t)n.call(t,i)&&(e[i]=t[i]);else e[t]=r},c.list=function(){var t=[];for(var r in e)n.call(e,r)&&t.push(r);return t},c.brunch=!0,t.require=c}}(),require.register("src/aria-tips",function(t,e,r){var n,i,o,u,s,a,l;n=6,s=function(t){switch(t){case"top":return"bottom";case"bottom":return"top";case"left":return"right";case"right":return"left"}},i=function(){var t,e,r,n,i,u,s;for(n=document.querySelectorAll("[role=tooltip]"),s=[],i=0,u=n.length;u>i;i++)r=n[i],document.body.appendChild(r),e=document.querySelectorAll("[aria-describedby="+r.id+"]"),s.push(function(){var r,n,i;for(i=[],r=0,n=e.length;n>r;r++)t=e[r],i.push(o.call(t));return i}());return s},a=function(t){var e,r,i,o,u,a,c;switch(l.call(this),i=t.dataset.tooltipDirection||this.dataset.tooltipDirection,e=t.getBoundingClientRect(),r={x:0|e.left+(e.right-e.left)/2,y:0|e.top+(e.bottom-e.top)/2},a={top:"auto",bottom:"auto",left:"auto",right:"auto"},o=function(){switch(i){case"top":return window.innerHeight-e.top;case"bottom":return e.bottom;case"left":return window.innerWidth-e.left;case"right":return e.right}}(),a[s(i)]=""+(0|o+n)+"px",i){case"top":case"bottom":a.left=""+r.x+"px";break;case"left":case"right":a.top=""+r.y+"px"}for(u in a)c=a[u],this.style[u]=c;return i!==this.dataset.tooltipDirection?(this.origDirection=this.dataset.tooltipDirection,this.dataset.tooltipDirection=i):void 0},l=function(){return this.origDirection?(this.dataset.tooltipDirection=this.origDirection,this.origDirection=null):void 0},u=function(t){var e,r,n,i,o;for(n=this.querySelectorAll("pre.label"),i=0,o=n.length;o>i;i++)e=n[i],e.parentNode.removeChild(e);return(r=t.getAttribute("aria-label"))?(e=document.createElement("pre"),e.classList.add("label"),e.innerHTML="("+r+")",this.appendChild(e)):void 0},o=function(){var t,e,r,n;return n=document.querySelector("#"+this.getAttribute("aria-describedby")),r=null,e=function(i){return function(){return n.addEventListener("mouseover",e),n.addEventListener("mouseout",t),r?(clearTimeout(r),r=null,n.setAttribute("aria-hidden",!1)):(u.call(n,i),a.call(n,i),r=setTimeout(function(){return n.setAttribute("aria-hidden",!1)},300))}}(this),t=function(){return clearTimeout(r),r=setTimeout(function(){return r=null,n.removeEventListener("mouseover",e),n.removeEventListener("mouseout",t),n.setAttribute("aria-hidden",!0)},30)},this.addEventListener("mouseover",e),this.addEventListener("mouseout",t)},r.exports={bind:function(){return i()}}});