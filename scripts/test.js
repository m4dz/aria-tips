(function(/* BrowserSync-Brunch */) {
  var url = "//" + location.hostname + ":3000/browser-sync/browser-sync-client.2.1.6.js";
  var bs = document.createElement("script");
  bs.type = "text/javascript"; bs.async = true; bs.src = url;
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(bs, s);
})();
!function(e){"undefined"!=typeof exports?e(exports):(window.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return window.hljs}))}(function(e){function n(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function r(e,n){var t=e&&e.exec(n);return t&&0==t.index}function a(e){var n=(e.className+" "+(e.parentNode?e.parentNode.className:"")).split(/\s+/);return n=n.map(function(e){return e.replace(/^lang(uage)?-/,"")}),n.filter(function(e){return N(e)||/no(-?)highlight|plain|text/.test(e)})[0]}function i(e,n){var t,r={};for(t in e)r[t]=e[t];if(n)for(t in n)r[t]=n[t];return r}function o(e){var n=[];return function r(e,a){for(var i=e.firstChild;i;i=i.nextSibling)3==i.nodeType?a+=i.nodeValue.length:1==i.nodeType&&(n.push({event:"start",offset:a,node:i}),a=r(i,a),t(i).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:i}));return a}(e,0),n}function u(e,r,a){function i(){return e.length&&r.length?e[0].offset!=r[0].offset?e[0].offset<r[0].offset?e:r:"start"==r[0].event?e:r:e.length?e:r}function o(e){function r(e){return" "+e.nodeName+'="'+n(e.value)+'"'}l+="<"+t(e)+Array.prototype.map.call(e.attributes,r).join("")+">"}function u(e){l+="</"+t(e)+">"}function c(e){("start"==e.event?o:u)(e.node)}for(var s=0,l="",f=[];e.length||r.length;){var g=i();if(l+=n(a.substr(s,g[0].offset-s)),s=g[0].offset,g==e){f.reverse().forEach(u);do c(g.splice(0,1)[0]),g=i();while(g==e&&g.length&&g[0].offset==s);f.reverse().forEach(o)}else"start"==g[0].event?f.push(g[0].node):f.pop(),c(g.splice(0,1)[0])}return l+n(a.substr(s))}function c(e){function n(e){return e&&e.source||e}function t(t,r){return new RegExp(n(t),"m"+(e.cI?"i":"")+(r?"g":""))}function r(a,o){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var u={},c=function(n,t){e.cI&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");u[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof a.k?c("keyword",a.k):Object.keys(a.k).forEach(function(e){c(e,a.k[e])}),a.k=u}a.lR=t(a.l||/\b\w+\b/,!0),o&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=t(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=t(a.e)),a.tE=n(a.e)||"",a.eW&&o.tE&&(a.tE+=(a.e?"|":"")+o.tE)),a.i&&(a.iR=t(a.i)),void 0===a.r&&(a.r=1),a.c||(a.c=[]);var s=[];a.c.forEach(function(e){e.v?e.v.forEach(function(n){s.push(i(e,n))}):s.push("self"==e?a:e)}),a.c=s,a.c.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,o);var l=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(n).filter(Boolean);a.t=l.length?t(l.join("|"),!0):{exec:function(){return null}}}}r(e)}function s(e,t,a,i){function o(e,n){for(var t=0;t<n.c.length;t++)if(r(n.c[t].bR,e))return n.c[t]}function u(e,n){if(r(e.eR,n)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?u(e.parent,n):void 0}function f(e,n){return!a&&r(n.iR,e)}function g(e,n){var t=E.cI?n[0].toLowerCase():n[0];return e.k.hasOwnProperty(t)&&e.k[t]}function p(e,n,t,r){var a=r?"":x.classPrefix,i='<span class="'+a,o=t?"":"</span>";return i+=e+'">',i+n+o}function d(){if(!L.k)return n(y);var e="",t=0;L.lR.lastIndex=0;for(var r=L.lR.exec(y);r;){e+=n(y.substr(t,r.index-t));var a=g(L,r);a?(B+=a[1],e+=p(a[0],n(r[0]))):e+=n(r[0]),t=L.lR.lastIndex,r=L.lR.exec(y)}return e+n(y.substr(t))}function h(){if(L.sL&&!w[L.sL])return n(y);var e=L.sL?s(L.sL,y,!0,M[L.sL]):l(y);return L.r>0&&(B+=e.r),"continuous"==L.subLanguageMode&&(M[L.sL]=e.top),p(e.language,e.value,!1,!0)}function b(){return void 0!==L.sL?h():d()}function v(e,t){var r=e.cN?p(e.cN,"",!0):"";e.rB?(k+=r,y=""):e.eB?(k+=n(t)+r,y=""):(k+=r,y=t),L=Object.create(e,{parent:{value:L}})}function m(e,t){if(y+=e,void 0===t)return k+=b(),0;var r=o(t,L);if(r)return k+=b(),v(r,t),r.rB?0:t.length;var a=u(L,t);if(a){var i=L;i.rE||i.eE||(y+=t),k+=b();do L.cN&&(k+="</span>"),B+=L.r,L=L.parent;while(L!=a.parent);return i.eE&&(k+=n(t)),y="",a.starts&&v(a.starts,""),i.rE?0:t.length}if(f(t,L))throw new Error('Illegal lexeme "'+t+'" for mode "'+(L.cN||"<unnamed>")+'"');return y+=t,t.length||1}var E=N(e);if(!E)throw new Error('Unknown language: "'+e+'"');c(E);var R,L=i||E,M={},k="";for(R=L;R!=E;R=R.parent)R.cN&&(k=p(R.cN,"",!0)+k);var y="",B=0;try{for(var C,j,I=0;;){if(L.t.lastIndex=I,C=L.t.exec(t),!C)break;j=m(t.substr(I,C.index-I),C[0]),I=C.index+j}for(m(t.substr(I)),R=L;R.parent;R=R.parent)R.cN&&(k+="</span>");return{r:B,value:k,language:e,top:L}}catch(S){if(-1!=S.message.indexOf("Illegal"))return{r:0,value:n(t)};throw S}}function l(e,t){t=t||x.languages||Object.keys(w);var r={r:0,value:n(e)},a=r;return t.forEach(function(n){if(N(n)){var t=s(n,e,!1);t.language=n,t.r>a.r&&(a=t),t.r>r.r&&(a=r,r=t)}}),a.language&&(r.second_best=a),r}function f(e){return x.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,n){return n.replace(/\t/g,x.tabReplace)})),x.useBR&&(e=e.replace(/\n/g,"<br>")),e}function g(e,n,t){var r=n?E[n]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(r)&&a.push(r),a.join(" ").trim()}function p(e){var n=a(e);if(!/no(-?)highlight|plain|text/.test(n)){var t;x.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div"),t.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):t=e;var r=t.textContent,i=n?s(n,r,!0):l(r),c=o(t);if(c.length){var p=document.createElementNS("http://www.w3.org/1999/xhtml","div");p.innerHTML=i.value,i.value=u(c,o(p),r)}i.value=f(i.value),e.innerHTML=i.value,e.className=g(e.className,n,i.language),e.result={language:i.language,re:i.r},i.second_best&&(e.second_best={language:i.second_best.language,re:i.second_best.r})}}function d(e){x=i(x,e)}function h(){if(!h.called){h.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,p)}}function b(){addEventListener("DOMContentLoaded",h,!1),addEventListener("load",h,!1)}function v(n,t){var r=w[n]=t(e);r.aliases&&r.aliases.forEach(function(e){E[e]=n})}function m(){return Object.keys(w)}function N(e){return w[e]||w[E[e]]}var x={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},w={},E={};return e.highlight=s,e.highlightAuto=l,e.fixMarkup=f,e.highlightBlock=p,e.configure=d,e.initHighlighting=h,e.initHighlightingOnLoad=b,e.registerLanguage=v,e.listLanguages=m,e.getLanguage=N,e.inherit=i,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="\\b(0[xX][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/},e.C=function(n,t,r){var a=e.inherit({cN:"comment",b:n,e:t,c:[]},r||{});return a.c.push(e.PWM),a},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e});hljs.registerLanguage("xml",function(t){var e="[A-Za-z0-9\\._:-]+",s={b:/<\?(php)?(?!\w)/,e:/\?>/,sL:"php",subLanguageMode:"continuous"},c={eW:!0,i:/</,r:0,c:[s,{cN:"attribute",b:e,r:0},{b:"=",r:0,c:[{cN:"value",c:[s],v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s\/>]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xsl","plist"],cI:!0,c:[{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},t.C("<!--","-->",{r:10}),{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[c],starts:{e:"</style>",rE:!0,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[c],starts:{e:"</script>",rE:!0,sL:""}},s,{cN:"pi",b:/<\?\w+/,e:/\?>/,r:10},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:/[^ \/><\n\t]+/,r:0},c]}]}});
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    return define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    return module.exports = factory();
  } else {
    return root.AriaTips = factory();
  }
})(this, function() {

  /*
      * Tooltips are the elements that are displayed when the mouse hovers a
      trigger.
  
      * Triggers are the elements that listen to mouseover events in order to
      show the tooltips.
   */
  var ARROW_DELTA, bindAll, bindEvents, fillTooltipLabel, oppositePosition, positionTooltip, resetTooltip, unbindAll, unbinders;
  ARROW_DELTA = 6;
  unbinders = [];
  bindAll = function() {
    var tip, tips, trigger, triggers, unbinder, _i, _len, _results;
    unbindAll();
    tips = document.querySelectorAll('[role=tooltip]');
    _results = [];
    for (_i = 0, _len = tips.length; _i < _len; _i++) {
      tip = tips[_i];
      document.body.appendChild(tip);
      triggers = document.querySelectorAll("[aria-describedby=" + tip.id + "]");
      _results.push((function() {
        var _j, _len1, _results1;
        _results1 = [];
        for (_j = 0, _len1 = triggers.length; _j < _len1; _j++) {
          trigger = triggers[_j];
          unbinder = bindEvents.call(trigger);
          _results1.push(unbinders.push(unbinder));
        }
        return _results1;
      })());
    }
    return _results;
  };
  unbindAll = function() {
    var unbinder, _i, _len;
    for (_i = 0, _len = unbinders.length; _i < _len; _i++) {
      unbinder = unbinders[_i];
      unbinder();
    }
    return unbinders = [];
  };
  oppositePosition = function(position) {
    switch (position) {
      case 'top':
        return 'bottom';
      case 'bottom':
        return 'top';
      case 'left':
        return 'right';
      case 'right':
        return 'left';
    }
  };
  positionTooltip = function(trigger) {
    var boundingBox, center, direction, oppositeDirection, position, prop, result, value;
    resetTooltip.call(this);
    direction = trigger.dataset.tooltipDirection || this.dataset.tooltipDirection;
    boundingBox = trigger.getBoundingClientRect();
    center = {
      x: 0 | boundingBox.left + (boundingBox.right - boundingBox.left) / 2,
      y: 0 | boundingBox.top + (boundingBox.bottom - boundingBox.top) / 2
    };
    center.x = center.x + window.pageXOffset;
    center.y = center.y + window.pageYOffset;
    result = {
      top: 'auto',
      bottom: 'auto',
      left: 'auto',
      right: 'auto'
    };
    position = (function() {
      switch (direction) {
        case 'top':
          return window.innerHeight - boundingBox.top - window.pageYOffset;
        case 'bottom':
          return boundingBox.bottom + window.pageYOffset;
        case 'left':
          return window.innerWidth - boundingBox.left - window.pageXOffset;
        case 'right':
          return boundingBox.right + window.pageXOffset;
      }
    })();
    oppositeDirection = oppositePosition(direction);
    result[oppositeDirection] = "" + (0 | position + ARROW_DELTA) + "px";
    switch (direction) {
      case 'top':
      case 'bottom':
        result.left = "" + center.x + "px";
        break;
      case 'left':
      case 'right':
        result.top = "" + center.y + "px";
    }
    for (prop in result) {
      value = result[prop];
      this.style[prop] = value;
    }
    if (direction !== this.dataset.tooltipDirection) {
      this.origDirection = this.dataset.tooltipDirection;
      return this.dataset.tooltipDirection = direction;
    }
  };
  resetTooltip = function() {
    if (this.origDirection) {
      this.dataset.tooltipDirection = this.origDirection;
      return this.origDirection = null;
    }
  };
  fillTooltipLabel = function(trigger) {
    var label, labelText, labels, _i, _len;
    labels = this.querySelectorAll('pre.label');
    for (_i = 0, _len = labels.length; _i < _len; _i++) {
      label = labels[_i];
      label.parentNode.removeChild(label);
    }
    labelText = trigger.getAttribute('aria-label');
    if (labelText) {
      label = document.createElement('pre');
      label.classList.add('label');
      label.innerHTML = "(" + labelText + ")";
      return this.appendChild(label);
    }
  };
  bindEvents = function() {
    var onMouseOut, onMouseOver, timeout, tip, tooltipId, unbindEvents;
    tooltipId = this.getAttribute('aria-describedby');
    tip = document.querySelector("#" + tooltipId);
    timeout = null;
    onMouseOver = (function(_this) {
      return function() {
        tip.addEventListener('mouseover', onMouseOver);
        tip.addEventListener('mouseout', onMouseOut);
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
          return tip.setAttribute('aria-hidden', false);
        } else {
          fillTooltipLabel.call(tip, _this);
          positionTooltip.call(tip, _this);
          return timeout = setTimeout(function() {
            return tip.setAttribute('aria-hidden', false);
          }, 300);
        }
      };
    })(this);
    onMouseOut = function() {
      clearTimeout(timeout);
      return timeout = setTimeout(function() {
        timeout = null;
        tip.removeEventListener('mouseover', onMouseOver);
        tip.removeEventListener('mouseout', onMouseOut);
        return tip.setAttribute('aria-hidden', true);
      }, 30);
    };
    this.addEventListener('mouseover', onMouseOver);
    this.addEventListener('mouseout', onMouseOut);
    unbindEvents = (function(_this) {
      return function() {
        tip.removeEventListener('mouseover', onMouseOver);
        tip.removeEventListener('mouseout', onMouseOut);
        _this.removeEventListener('mouseover', onMouseOver);
        return _this.removeEventListener('mouseout', onMouseOut);
      };
    })(this);
    return unbindEvents;
  };
  return {
    bind: function() {
      return bindAll();
    },
    unbind: function() {
      return unbindAll();
    }
  };
});
;
//# sourceMappingURL=test.js.map