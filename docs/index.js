!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e,n){e.style=n(3)},function(t,e,n){e.style=n(4)},function(t,e,n){e.style=n(5)},function(t,e){t.exports="#loader-wrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 1000; }\n\n#loader:after,\n#loader:before {\n  content: '';\n  position: absolute; }\n\n#loader {\n  display: block;\n  position: relative;\n  left: 50vw;\n  top: 50vh;\n  width: 150px;\n  height: 150px;\n  margin: -75px 0 0 -75px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #3498db;\n  animation: spin 2s linear infinite;\n  z-index: 1001; }\n\n#loader:before {\n  top: 5px;\n  left: 5px;\n  right: 5px;\n  bottom: 5px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #e74c3c;\n  animation: spin 3s linear infinite; }\n\n#loader:after {\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #f9c922;\n  -webkit-animation: spin 1.5s linear infinite;\n  animation: spin 1.5s linear infinite; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n#loader-wrapper .loader-section {\n  position: fixed;\n  top: 0;\n  width: 51%;\n  height: 100%;\n  z-index: 1000; }\n\n#loader-wrapper .loader-section.section-left {\n  left: 0; }\n\n#loader-wrapper .loader-section.section-right {\n  right: 0; }\n\n.loaded #loader-wrapper .loader-section.section-left {\n  -webkit-transform: translateX(-100%);\n  -ms-transform: translateX(-100%);\n  transform: translateX(-100%);\n  -webkit-transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.loaded #loader-wrapper .loader-section.section-right {\n  -webkit-transform: translateX(100%);\n  -ms-transform: translateX(100%);\n  transform: translateX(100%);\n  -webkit-transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.loaded #loader {\n  opacity: 0;\n  -webkit-transition: all .3s ease-out;\n  transition: all .3s ease-out; }\n\n.loaded #loader-wrapper {\n  visibility: hidden;\n  -webkit-transform: translateY(-100%);\n  -ms-transform: translateY(-100%);\n  transform: translateY(-100%);\n  -webkit-transition: all .3s 1s ease-out;\n  transition: all .3s 1s ease-out; }\n"},function(t,e){t.exports="jwd {\n  display: inline-block;\n  text-indent: 0; }\n\njwd + jwd {\n  margin-left: 0.25em; }\n\narticle a:not(.ni):hover {\n  text-decoration: none;\n  border-bottom-width: 1px;\n  border-bottom-style: solid; }\n\nen {\n  display: block;\n  color: #00f;\n  margin-bottom: -.6em;\n  font-size: .6em;\n  user-select: none; }\n"},function(t,e){t.exports="body {\n  margin: 0;\n  padding: 0; }\n\niframe {\n  width: 100vw;\n  height: 100vh;\n  border: 0; }\n"},function(t,e,n){"use strict";function r(t,e){const n=e.ownerDocument.createElement("style");n.innerHTML=t,e.appendChild(n)}n.r(e);class o{constructor(){this.targetLang={langCode:"en",pubCode:"e"};const t=/lp-(\w+)/.exec(window.location.pathname)[1];this.sourceLang=o.Langs[t]}}o.Langs={f:{langCode:"fr",pubCode:"f"},in:{langCode:"id",pubCode:"in"},tg:{langCode:"tl",pubCode:"tg"}};var i=new o,a=n(0);var s=new class{constructor(){document.write('\n\t\t\t<div id="loader-wrapper">\n\t\t\t\t<div id="loader"></div>\n\t\t\t\t<div class="loader-section section-left"></div>\n\t\t\t\t<div class="loader-section section-right"></div>\n\t\t\t</div>'),this.loader=document.querySelector("#loader-wrapper"),r(a.style,document.body)}show(){this.loader.hidden=!1}hide(){this.loader.hidden=!0}};class l{constructor(t){this.document=t,this.pending=[],this.qeue=[],this.GetEn=(t=>{t=t.toLowerCase();const e=localStorage.getItem(`${i.sourceLang.pubCode}-${i.targetLang.pubCode}-${t}`);if(null!==e)return e;this.Qeue(t)}),this.Qeue=(t=>{this.qeue.includes(t)||this.qeue.push(t)}),this.TriggerDownload=(()=>{if(0===this.pending.length&&this.qeue.length>0){this.pending=this.qeue.slice(0,100),this.qeue=this.qeue.slice(this.pending.length);const t=this.pending.map(t=>`&text=${t}`).join("");fetch(`${l.API}&lang=${i.sourceLang.langCode}-${i.targetLang.langCode}${t}`).then(t=>{t.json().then(t=>{for(let e=0;e<t.text.length;++e){let n=d(t.text[e]).trim().toLowerCase();localStorage.setItem(`${i.sourceLang.pubCode}-${i.targetLang.pubCode}-${this.pending[e]}`,n),this.document.querySelectorAll(`en[w='${this.pending[e].replace(/'/g,"\\'")}']`).forEach(t=>{t.innerText=n,t.attributes.removeNamedItem("w")})}this.pending=[],setTimeout(this.TriggerDownload,50)})})}else this.isQeueEmpty&&s.hide()})}get isQeueEmpty(){return 0===this.qeue.length}}function d(t){return t.replace(/&#([0-9]{1,3});/gi,(t,e)=>{const n=parseInt(e,10);return String.fromCharCode(n)})}l.API="https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20151224T142049Z.759b08af73c0cdb9.fda4eaad62f70a77deabf469f04e161cfda554b4&format=text";var c=n(1);class u{constructor(t){this.document=t,this.touchData={x:0,y:0,current:null},this.hasParsed=!1,this.ProcArticle=(()=>{this.document.querySelectorAll("#article [data-pid]").forEach(this.ProcParagraph),this.hasParsed=!0,this.Dictionary.isQeueEmpty&&s.hide()}),this.ProcParagraph=(t=>{this.ProcNode(t),this.Dictionary.TriggerDownload()}),this.ProcNode=(t=>{t.style.backgroundColor="red";const e=this.document.createElement("div");return Array.from(t.childNodes).forEach((t,n,r)=>{e.appendChild(t)}),Array.from(e.childNodes).forEach(e=>{"#text"===e.nodeName?t.insertAdjacentHTML("beforeend",this.ProcText(e.textContent||"")):"A"===e.nodeName&&"b"===e.className?t.appendChild(e):t.appendChild(this.ProcNode(e))}),t.style.backgroundColor=null,t}),this.ProcText=(t=>{let e="";return function(t,e){for(var n=[],r="",o=t.length,i=0;i<o;++i)e.includes(t[i])?(""!==r&&(n.push(r),r=""),n.push(t[i])):r+=t[i];r.length>0&&n.push(r);return n}(t,u.splitsChars).forEach(t=>{if(t.length>2){const n=this.Dictionary.GetEn(t);e+=null!==n&&void 0!==n?`<jwd><en>${n}</en>${t}</jwd>`:`<jwd><en w="${t.trim().toLowerCase()}"></en>${t}</jwd>`}else e+=t}),e}),this.LinkHandle=(()=>{this.document.querySelectorAll("a").forEach(t=>{t.addEventListener("touchstart",t=>{this.touchData.x=t.touches[0].screenX,this.touchData.y=t.touches[0].screenY}),t.addEventListener("touchend",t=>this.ProcLink(t.currentTarget)),t.addEventListener("mouseenter",t=>this.ProcLink(t.currentTarget))})}),this.ProcLink=(t=>{if("fb"!==t.className&&"lnk"!==t.className&&!t.attributes.getNamedItem("data-video"))if(this.document.querySelector(".tooltip")){if(this.touchData.current=null,this.document.querySelector(".tooltipContent jwd"))return;s.show(),this.document.querySelectorAll(".tooltipContent p[data-pid]").forEach(this.ProcParagraph)}else null!==this.touchData.current&&this.touchData.current!==t||(this.touchData.current=t,setTimeout(this.ProcLink,1e3,t))}),this.Dictionary=new l(t),r(c.style,t.body),s.show(),setTimeout(this.ProcArticle,100,t),this.LinkHandle()}}u.splitsChars=" ,[]()/:;!?.“”‘’—ー1234567890";var h=n(2);window.wol2lines=new class{constructor(){if("wol.jw.org"!==location.hostname)return void alert("This tool only works on wol.jw.org");document.write(`\n\t\t\t<iframe id="iframe" src="${window.location.href}">\n\t\t\t</iframe>\n\t\t`),r(h.style,window.document.body);const t=window.document.querySelector("#iframe");t.onload=(()=>{new u(t.contentDocument),window.history.pushState(null,void 0,t.contentWindow.location.href)})}}}]);