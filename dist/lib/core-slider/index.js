!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=19)}([function(t,e){t.exports='<div id="button">\n  <span><slot></slot></span>\n</div>'},function(t,e){t.exports='<div class="modal">\n  <div class="modal-content">\n    <div class="modal-header">\n      <span class="close">&times;</span>\n      <slot name="header"><h1>Default text</h1></slot>\n    </div>\n    <div class="modal-body">\n      <slot></slot>\n    </div>\n  </div>\n</div>'},,function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i);const o={tiny:"tiny",xsmall:"xsmall",small:"small",medium:"medium",large:"large"},s={primary:"primary",secondary:"secondary",dark:"dark"},a=document.createElement("template");a.innerHTML=r.a;const l=document.createElement("style");l.innerHTML='#button {\n  text-align: center;\n  border: 0.3rem solid #a5a5a5; /* default color is light grey */\n  padding: 0 5px;\n  height: 3rem;\n  line-height: 3rem;\n  display: inline-block;\n\n  /* transition-duration:0.4s; */\n  cursor: pointer;\n}\n\n#button:hover {\n  background-color: #a5a5a5; /* default color is light grey */\n  color: white;\n}\n\n.shadow {\n  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24);\n}\n\n.rounded {\n  border-radius: 1rem;\n}\n\n/* rules for default size circle */\n#button.circle {\n  border-radius: 50%;\n  overflow: hidden;\n  width: 4rem;\n  height: 4rem;\n  line-height: 4rem;\n}\n\n/* rules for small size circle */\n#button.small.circle {\n  width: 3rem;\n  height: 3rem;\n  line-height: 3rem;\n}\n\n/* rules for medium size circle */\n#button.medium.circle {\n  width: 5rem;\n  height: 5rem;\n  line-height: 5rem;\n}\n\n/* rules for large size circle */\n#button.large.circle {\n  width: 6rem;\n  height: 6rem;\n  line-height: 6rem;\n}\n\n/* rules for tiny size button */\n#button.tiny {\n  font-size: 10px;\n  height: 1.2rem;\n  line-height: 1.2rem;\n}\n\n/* rules for extra small size button */\n#button.xsmall {\n  font-size: 12px;\n  height: 1.5rem;\n  line-height: 1.5rem;\n}\n\n/* rules for small size button */\n#button.small {\n  font-size: 14px;\n  width: 4rem;\n  height: 2rem;\n  line-height: 2rem;\n}\n\n/* rules for medium size button */\n#button.medium {\n  font-size: 16px;\n  width: 7rem;\n  height: 4rem;\n  line-height: 4rem;\n}\n\n/* rules for large size button */\n#button.large {\n  font-size: 22px;\n  width: 10rem;\n  height: 5rem;\n  line-height: 5rem;\n}\n\n#button.primary {\n  border: 0.3rem solid #4286f4; /* primary color is blue */\n}\n\n#button.primary:hover {\n  background-color: #4386f4; /* primary color is blue */\n  color: white;\n}\n\n#button.secondary {\n  border: 0.3rem solid #f44336; /* secondary color is red */\n}\n\n#button.secondary:hover {\n  background-color: #f44336; /* secondary color is red */\n  color: white;\n}\n\n#button.dark {\n  border: 0.3rem solid #555; /* dark color is dark grey */\n}\n\n#button.dark:hover {\n  background-color: #555; /* dark color is dark grey */\n  color: white;\n}\n\n/* this rule adds the animation of moving the button text\n   to the left smoothly */\n#button.animated span {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  transition: 0.5s;\n}\n\n/* this rule adds the ">>" to the button text */\n#button.animated span::after {\n  content: \'\\00bb\';\n  position: absolute;\n  right: -20px;\n  transition: 0.5s;\n  opacity: 0;\n  top: 0;\n}\n\n/* this rule moves the button text over to make room for ">>" */\n#button.animated:hover span {\n  padding-right: 25px;\n}\n\n/* this rule makes the ">>" visible when button is hovered on */\n#button.animated:hover span::after {\n  opacity: 1;\n  right: 0;\n}';class d extends HTMLElement{static get observedAttributes(){return["rounded","size","shadow","color","animated","circle"]}constructor(){super();const t=this.attachShadow({mode:"open"});t.appendChild(a.content.cloneNode(!0)),t.appendChild(l.cloneNode(!0)),this._button=t.getElementById("button")}get rounded(){return this.hasAttribute("rounded")}get size(){return this.getAttribute("size")}get shadow(){return this.hasAttribute("shadow")}get color(){return this.getAttribute("color")}get animated(){return this.hasAttribute("animated")}get circle(){return this.hasAttribute("circle")}set rounded(t){t?this.setAttribute("rounded",""):this.removeAttribute("rounded")}set size(t){t?this.setAttribute("size",t):this.removeAttribute("size")}set shadow(t){t?this.setAttribute("shadow",t):this.removeAttribute("shadow")}set color(t){t?this.setAttribute("color",t):this.removeAttribute("color")}set animated(t){t?this.setAttribute("animated",t):this.removeAttribute("animated")}set circle(t){t?this.setAttribute("circle",t):this.removeAttribute("circle")}attributeChangedCallback(t,e,n){switch(t){case"rounded":case"shadow":case"animated":case"circle":{const e=""==n;this.addToClassList(t,e);break}case"size":{const t=o[n],e=null!=t;this.addToClassList(t,e);break}case"color":{const t=s[n],e=null!=t;this.addToClassList(t,e);break}}}addToClassList(t,e){e?this._button.classList.add(t):this._button.classList.remove(t)}}customElements.get("core-button")||customElements.define("core-button",d)},function(t,e,n){"use strict";n.r(e);var i=n(1),r=n.n(i);const o=document.createElement("template");o.innerHTML=r.a;const s=document.createElement("style");s.innerHTML="/* The Modal (background) */\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n/* Modal Content */\n.modal-content {\n  position: relative;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  border: 1px solid #888;\n  width: 60%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n}\n\n/* Add Animation */\n@-webkit-keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n\n/* The Close Button */\n.close {\n  color: white;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.modal-header {\n  padding: 2px 16px;\n  background-color: rgb(24, 113, 185);\n  color: white;\n}\n\n.modal-body {\n  padding: 25px;\n}\n";class a extends HTMLElement{static get observedAttributes(){return[]}constructor(){super();const t=this.attachShadow({mode:"open"});t.appendChild(o.content.cloneNode(!0)),t.appendChild(s.cloneNode(!0))}connectedCallback(){this._modal=this.shadowRoot.querySelector(".modal"),this._close=this.shadowRoot.querySelector(".close"),this._button=document.querySelector(`[modal="${this.getAttribute("name")}"]`),this._close.addEventListener("click",this._hideModal.bind(this)),this._button.addEventListener("click",this._showModal.bind(this))}disconnectedCallback(){this._button.removeEventListener("click",this._showModal.bind(this)),this._close.removeEventListener("click",this._hideModal.bind(this))}_showModal(){this._modalVisible=!0,this._modal.style.display="block"}_hideModal(){this._modalVisible=!1,this._modal.style.display="none"}attributeChangedCallback(t,e,n){}}customElements.get("core-modal")||customElements.define("core-modal",a)},,function(t,e,n){var i,r,o=n(10),s=n(11),a=0,l=0;t.exports=function(t,e,n){var d=e&&n||0,h=e||[],c=(t=t||{}).node||i,u=void 0!==t.clockseq?t.clockseq:r;if(null==c||null==u){var m=o();null==c&&(c=i=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==u&&(u=r=16383&(m[6]<<8|m[7]))}var p=void 0!==t.msecs?t.msecs:(new Date).getTime(),b=void 0!==t.nsecs?t.nsecs:l+1,g=p-a+(b-l)/1e4;if(g<0&&void 0===t.clockseq&&(u=u+1&16383),(g<0||p>a)&&void 0===t.nsecs&&(b=0),b>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");a=p,l=b,r=u;var f=(1e4*(268435455&(p+=122192928e5))+b)%4294967296;h[d++]=f>>>24&255,h[d++]=f>>>16&255,h[d++]=f>>>8&255,h[d++]=255&f;var x=p/4294967296*1e4&268435455;h[d++]=x>>>8&255,h[d++]=255&x,h[d++]=x>>>24&15|16,h[d++]=x>>>16&255,h[d++]=u>>>8|128,h[d++]=255&u;for(var v=0;v<6;++v)h[d+v]=c[v];return e||s(h)}},function(t,e){t.exports='<div id="slider">\n  \x3c!-- This allows us to place children into the element --\x3e\n  <slot></slot>\n  <div id="description">\n    <slot name="title"><span>Title</span></slot>\n    <slot name="content"><p>Description of these pictures.</p></slot>\n  </div>\n</div>'},,,function(t,e){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var i=new Uint8Array(16);t.exports=function(){return n(i),i}}else{var r=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),r[e]=t>>>((3&e)<<3)&255;return r}}},function(t,e){for(var n=[],i=0;i<256;++i)n[i]=(i+256).toString(16).substr(1);t.exports=function(t,e){var i=e||0,r=n;return[r[t[i++]],r[t[i++]],r[t[i++]],r[t[i++]],"-",r[t[i++]],r[t[i++]],"-",r[t[i++]],r[t[i++]],"-",r[t[i++]],r[t[i++]],"-",r[t[i++]],r[t[i++]],r[t[i++]],r[t[i++]],r[t[i++]],r[t[i++]]].join("")}},,,,,,,,function(t,e,n){"use strict";n.r(e);var i=n(6),r=n.n(i),o=n(7),s=n.n(o);n(3),n(4);const a=document.createElement("template");a.innerHTML=s.a;const l=document.createElement("style");l.innerHTML=':host {\n  --initial-width: 400px;\n\n  display: inline-block;\n}\n\n:host([size="small"]) {\n  --initial-width: 280px;\n  --title-size: 25px;\n  --description-size: 15px;\n}\n\n:host([size="medium"]) {\n  --initial-width: 400px;\n  --title-size: 32px;\n  --description-size: 17px;\n}\n\n:host([size="large"]) {\n  --initial-width: 600px;\n  --title-size: 38px;\n  --description-size: 20px;\n}\n\np,\n::slotted(p) {\n  margin: 10px;\n}\n\n#description {\n  opacity: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  color: white;\n  z-index: 1;\n  height: 40%;\n  box-sizing: border-box;\n  padding: calc(var(--initial-width) * 0.03) calc(var(--initial-width) * 0.05);\n  transform: translate(0, calc(var(--initial-width) * 0.6));\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n:host([text]) #description {\n  opacity: 1;\n}\n\n:host([theme="circle"]) #description {\n  text-align: center;\n  padding: calc(var(--initial-width) * 0.03) calc(var(--initial-width) * 0.15);\n}\n\n#slider {\n  transition-property: opacity;\n  transition-duration: 1s;\n  overflow: hidden;\n  position: relative;\n  height: var(--initial-width);\n  width: var(--initial-width);\n}\n\n#menu {\n  position: absolute;\n  top: 0;\n  left: 0;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  width: 100%;\n  padding: 30px;\n  box-sizing: border-box;\n}\n\n#menu .menu-item {\n  border-radius: 50%;\n  width: 1em;\n  height: 1em;\n  border: 2px white solid;\n  background-color: transparent;\n  margin: 0 10px;\n  cursor: pointer;\n}\n\n#menu .menu-item[selected] {\n  width: 1.1em;\n  height: 1.1em;\n  background-color: white;\n}\n\n.arrow {\n  border: solid white;\n  border-width: 0 5px 5px 0;\n  display: inline-block;\n  padding: 6px;\n  position: absolute;\n  cursor: pointer;\n}\n\n#left-arrow {\n  left: 2%;\n  top: 50%;\n  transform: rotate(135deg);\n  -webkit-transform: rotate(135deg) translate(-50%, -50%);\n}\n\n#right-arrow {\n  right: 2%;\n  top: 50%;\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg) translate(-50%, -50%);\n}\n\n:host([theme="rounded"]) #slider {\n  border-radius: calc(var(--initial-width) * 1 / 10);\n}\n\n:host([theme="circle"]) #slider {\n  border-radius: calc(var(--initial-width) / 2);\n}\n\n:host([shadow]) #slider {\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.32), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n#description span,\n::slotted([slot="title"]) {\n  font-size: var(--title-size);\n}\n\n#description p,\n::slotted([slot="content"]) {\n  font-size: var(--description-size);\n}\n\n::slotted(img) {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 1;\n  transition: 0.5s ease-in-out;\n  width: 100%;\n  height: 100%;\n}\n\n::slotted(img.hide) {\n  opacity: 0;\n}\n';class d extends HTMLElement{constructor(){super(),this._index=0,this._controlInitialized=!1;const t=this.attachShadow({mode:"open"});t.appendChild(a.content.cloneNode(!0)),t.appendChild(l.cloneNode(!0)),this._slider=this.shadowRoot.getElementById("slider")}_handleLongText(){const t=this._content.innerText,e=this._title.innerText,n=this.getAttribute("size"),i=this.getAttribute("theme"),r="circle"===i?.5:1;let o,s=!1;switch(n){case"small":{const e=80;o="tiny",t.length>e*r&&(this._content.innerHTML=t.substring(0,e*r*.8)+"...",s=!0);break}case"medium":{const e=180;o="circle"===i?"tiny":"xsmall",t.length>e*r&&(this._content.innerHTML=t.substring(0,e*r*.8)+"...",s=!0);break}case"large":{const e=300;o="circle"===i?"xsmall":"small",t.length>e*r&&(this._content.innerHTML=t.substring(0,e*r*.8)+"...",s=!0);break}}s&&this._hideContent(o,i,e,t)}_hideContent(t,e,n,i){const o=r()(),s=document.createElement("core-button");s.setAttribute("rounded",!0),s.setAttribute("size",t),s.setAttribute("color","secondary"),s.setAttribute("modal",o),"circle"!==e?s.setAttribute("style","float: right; margin: 10px 20px;"):(s.setAttribute("style","margin: 20px 20px;"),this._content.style["align-items"]="center"),s.innerHTML="Read more",this._content.appendChild(s);const a=document.createElement("core-modal");a.setAttribute("name",o),a.innerHTML=`\n      <h1 slot="header">${n}</h1>\n      <p>${i}</p>\n    `,document.body.appendChild(a)}static get observedAttributes(){return["time","size","theme","shadow","text","control"]}set size(t){t?this.setAttribute("size",t):this.removeAttribute("size")}set theme(t){t?this.setAttribute("theme",t):this.removeAttribute("theme")}set shadow(t){!0===t?this.setAttribute("shadow",""):this.removeAttribute("shadow")}set text(t){!0===t?this.setAttribute("text",""):this.removeAttribute("text")}set control(t){!0===t?this.setAttribute("control",""):this.removeAttribute("control")}get size(){return this.getAttribute("size")}get theme(){return this.getAttribute("theme")}get shadow(){return""===this.getAttribute("shadow")}get text(){return""===this.getAttribute("text")}get control(){return""===this.getAttribute("control")}connectedCallback(){this._imageChildren=this.getElementsByTagName("img"),this._imageChildCount=this._imageChildren.length,this._start(0)}_initControl(){this._imageChildren=this.getElementsByTagName("img"),this._imageChildCount=this._imageChildren.length,this._initMenu(),this._initArrows()}_initMenu(){let t="";for(let e=0;e<this._imageChildCount;e++)t+=`<div index=${e} class="menu-item"></div>`;const e=document.createElement("div");e.setAttribute("id","menu"),e.innerHTML=t,Array.from(e.children).forEach(t=>{t.addEventListener("click",()=>{this._start(t.getAttribute("index"))})}),this._menuItems=Array.from(e.children),this._menu=e}_initArrows(){const t=document.createElement("div"),e=document.createElement("div");t.setAttribute("id","left-arrow"),t.classList.add("arrow"),e.setAttribute("id","right-arrow"),e.classList.add("arrow"),t.addEventListener("click",()=>{this.index-=1,this._start(this.index)}),e.addEventListener("click",()=>{this.index+=1,this._start(this.index)}),this._leftArrow=t,this._rightArrow=e}attributeChangedCallback(t,e,n){switch(t){case"time":this._slider.style.transitionDuration=n;break;case"control":this._setUpControl(e);case"text":this.text&&void 0===this._title&&void 0===this._content&&(this._title=this.querySelector('[slot="title"]'),this._content=this.querySelector('[slot="content"]'),this.text&&null!==this._title&&null!==this._content&&this._handleLongText())}}get time(){return this.getAttribute("time")||"2s"}set time(t){t?this.setAttribute("time",t):this.setAttribute("time","2s")}get index(){return this._index}set index(t){this._index=t,this._index>=this._imageChildCount&&(this.index=0),this._index<0&&(this.index=Number(this._imageChildCount)-1)}_start(t){void 0!==this._interval&&clearInterval(this._interval),this._reRender(t),this.index=t,this._interval=setInterval(this._tick.bind(this),1e3*parseFloat(this.time))}_tick(){this.index=Number(this.index)+1,this._reRender(this.index)}_reRender(t){Array.from(this._imageChildren).forEach(t=>{t.classList.add("hide")}),this._imageChildren[t].classList.remove("hide"),this.control&&null!==this._menuItems&&(this._menuItems.forEach(t=>{t.removeAttribute("selected","")}),this._menuItems[t].setAttribute("selected",""))}_setUpControl(t){this._controlInitialized||(this._initControl(),this._controlInitialized=!1),this.control?(this._slider.appendChild(this._menu),this._slider.appendChild(this._leftArrow),this._slider.appendChild(this._rightArrow)):""===t&&(this._slider.removeChild(this._slider.querySelector("#menu")),this._slider.removeChild(this._slider.querySelector("#left-arrow")),this._slider.removeChild(this._slider.querySelector("#right-arrow")))}}customElements.get("core-slier")||customElements.define("core-slider",d)}]);