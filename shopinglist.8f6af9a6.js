!function(){function e(e,t,i,o){Object.defineProperty(e,t,{get:i,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function i(e){return e&&e.__esModule?e.default:e}var o={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a),a.register("iE7OH",function(t,i){"use strict";e(t.exports,"register",function(){return o},function(e){return o=e}),e(t.exports,"resolve",function(){return n},function(e){return n=e});var o,n,a={};o=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)a[t[i]]=e[t[i]]},n=function(e){var t=a[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),a.register("i8Q71",function(t,i){e(t.exports,"shopListMobEl",function(){return A});var o=a("h6c0i"),n=a("34hUh"),r=document.querySelector(".sing-up-btn"),s=document.querySelector(".sing-up-btn-mob"),l=document.querySelector(".backdrop-login"),c=document.querySelector(".login"),d=document.querySelector(".modal-login-close"),u=document.querySelector(".login-form"),m=document.querySelector(".sing-up-js"),f=document.querySelector(".sing-in-js"),p=document.querySelector(".sub-btn-js"),y=document.querySelector(".name-js"),g=document.querySelector(".user-btn"),x=document.querySelector(".user"),v=document.querySelector(".user-mob"),h=document.querySelector(".name-user"),b=document.querySelector(".name-user-mob"),w=document.querySelector(".log-out-decs"),k=document.querySelector(".log-out-mob"),N=document.querySelector(".hamburger-menu"),L=document.querySelector(".mobile-menu"),S=document.querySelector(".mobile-close"),I=document.querySelector("body"),C=document.querySelector(".span-sing-up"),_=document.querySelector(".span-sing-in"),E=document.querySelector(".shop-list-desc-js"),A=document.querySelector(".shop-list-mob-js"),O=document.querySelector(".home-mob-js"),z=document.querySelector(".home-desc-js");function H(){l.classList.add("active"),l.style.zIndex="2",c.classList.add("active")}function j(){l.classList.remove("active"),c.classList.remove("active")}function q(){N.classList.contains("visually-hidden")?I.style.overflow="hidden":I.style.overflow="visible"}function W(){N.classList.remove("visually-hidden"),L.style.left="100%",S.classList.add("visually-hidden"),q()}window.innerWidth<768?(0,n.isActivePage).call(O):(0,n.isActivePage).call(z),r.addEventListener("click",H),s.addEventListener("click",H),d.addEventListener("click",j),N.addEventListener("click",function(){N.classList.add("visually-hidden"),L.style.left="0",S.classList.remove("visually-hidden"),q()}),S.addEventListener("click",W),document.querySelector(".switch");var B=document.querySelector(".checkbox-theme");function T(){m.classList.add("disabled-btn"),f.classList.remove("disabled-btn"),_.classList.add("active-btn"),C.classList.remove("active-btn"),y.classList.add("visually-hidden"),p.textContent="Sing in"}function R(){w.classList.add("visually-hidden"),k.classList.add("visually-hidden"),x.classList.add("visually-hidden"),v.classList.add("visually-hidden"),s.classList.remove("visually-hidden"),r.classList.remove("visually-hidden"),E.classList.add("visually-hidden"),A.classList.add("visually-hidden"),O.classList.add("visually-hidden"),localStorage.removeItem("userLogin"),localStorage.removeItem("userInSite"),W()}localStorage.getItem("theme")&&(B.checked=!0),p.textContent="Sing up","Sing up"===p.textContent?p.textContent="Sing up":p.textContent="Sing in",m.addEventListener("click",function(){f.classList.add("disabled-btn"),m.classList.remove("disabled-btn"),_.classList.remove("active-btn"),C.classList.add("active-btn"),p.textContent="Sing up",y.classList.remove("visually-hidden")}),f.addEventListener("click",T),u.addEventListener("submit",function(e){if(e.preventDefault(),"Sing in"!==p.textContent){if("Sing up"===p.textContent&&(!e.target.username.value||!e.target.useremail.value||!e.target.userpass.value)){(0,o.Notify).warning("Please, fill in all fields");return}if("Sing up"===p.textContent&&e.target.username.value&&e.target.useremail.value&&e.target.userpass.value){try{if(JSON.parse(localStorage.getItem("users")).users.find(function(t){return t.email===e.target.useremail.value})){(0,o.Notify).warning("This email is already registered on website"),e.target.useremail.value="",e.target.userpass.value="";return}}catch(e){}if(localStorage.getItem("users")){var t=JSON.parse(localStorage.getItem("users"));t.users.push({name:e.target.username.value,email:e.target.useremail.value,password:e.target.userpass.value}),localStorage.removeItem("users"),localStorage.setItem("users",JSON.stringify(t))}else{var i={users:[{name:e.target.username.value,email:e.target.useremail.value,password:e.target.userpass.value}]};localStorage.setItem("users",JSON.stringify(i))}if(p.textContent="Sing in","Sing in"===p.textContent&&e.target.useremail.value&&e.target.userpass.value){var n=JSON.parse(localStorage.getItem("users")).users.find(function(t){return t.email===e.target.useremail.value&&t.password===e.target.userpass.value});localStorage.setItem("userLogin",!0),localStorage.setItem("userInSite",JSON.stringify(n)),j(),b.textContent=n.name,h.textContent=n.name,s.classList.add("visually-hidden"),r.classList.add("visually-hidden"),x.classList.remove("visually-hidden"),v.classList.remove("visually-hidden"),k.classList.remove("visually-hidden"),E.classList.remove("visually-hidden"),A.classList.remove("visually-hidden"),O.classList.remove("visually-hidden")}e.target.username.value="",e.target.useremail.value="",e.target.userpass.value="",T()}}}),u.addEventListener("submit",function(e){if(e.preventDefault(),!localStorage.getItem("userLogin"))try{if("Sing in"===p.textContent&&(!e.target.useremail.value||!e.target.userpass.value)){(0,o.Notify).warning("Please, enter your login and password");return}if("Sing in"===p.textContent&&e.target.useremail.value&&e.target.userpass.value){var t=JSON.parse(localStorage.getItem("users")).users.find(function(t){return t.email===e.target.useremail.value&&t.password===e.target.userpass.value});e.target.useremail.value="",e.target.userpass.value="",j(),b.textContent=t.name,h.textContent=t.name,s.classList.add("visually-hidden"),r.classList.add("visually-hidden"),x.classList.remove("visually-hidden"),v.classList.remove("visually-hidden"),k.classList.remove("visually-hidden"),E.classList.remove("visually-hidden"),A.classList.remove("visually-hidden"),O.classList.remove("visually-hidden"),localStorage.setItem("userLogin",!0),localStorage.setItem("userInSite",JSON.stringify(t))}}catch(e){(0,o.Notify).warning("The login or password is incorrect. Please, try again."),H()}}),function(){if(localStorage.getItem("userLogin")){var e=JSON.parse(localStorage.getItem("userInSite"));b.textContent=e.name,h.textContent=e.name,s.classList.add("visually-hidden"),r.classList.add("visually-hidden"),x.classList.remove("visually-hidden"),v.classList.remove("visually-hidden"),k.classList.remove("visually-hidden"),E.classList.remove("visually-hidden"),A.classList.remove("visually-hidden"),O.classList.remove("visually-hidden")}}(),w.addEventListener("click",R),k.addEventListener("click",R),g.addEventListener("click",function(){w.classList.contains("visually-hidden")?w.classList.remove("visually-hidden"):w.classList.add("visually-hidden")})}),a.register("h6c0i",function(e,i){var o,n;o=void 0!==t?t:"undefined"!=typeof window?window:e.exports,n=function(e){"use strict";if(void 0===e&&void 0===e.document)return!1;var t,i={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},o={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},n=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},a=function(t){return t||(t="head"),null!==e.document[t]||(n('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},r=function(t,i){if(!a("head"))return!1;if(null!==t()&&!e.document.getElementById(i)){var o=e.document.createElement("style");o.id=i,o.innerHTML=t(),e.document.head.appendChild(o)}},s=function(){var e={},t=!1,i=0;for("[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],i++);i<arguments.length;i++)!function(i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t&&"[object Object]"===Object.prototype.toString.call(i[o])?e[o]=s(e[o],i[o]):e[o]=i[o])}(arguments[i]);return e},l=function(t){var i=e.document.createElement("div");return i.innerHTML=t,i.textContent||i.innerText||""},c=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},d=0,u=function(n,r,c,u){if(!a("body"))return!1;t||m.Notify.init({});var f=s(!0,t,{});if("object"==typeof c&&!Array.isArray(c)||"object"==typeof u&&!Array.isArray(u)){var p={};"object"==typeof c?p=c:"object"==typeof u&&(p=u),t=s(!0,t,p)}var y=t[n.toLocaleLowerCase("en")];d++,"string"!=typeof r&&(r="Notiflix "+n),t.plainText&&(r=l(r)),!t.plainText&&r.length>t.messageMaxLength&&(t=s(!0,t,{closeButton:!0,messageMaxLength:150}),r='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),r.length>t.messageMaxLength&&(r=r.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(y.fontAwesomeIconColor=y.background),t.cssAnimation||(t.cssAnimationDuration=0);var g=e.document.getElementById(o.wrapID)||e.document.createElement("div");if(g.id=o.wrapID,g.style.width=t.width,g.style.zIndex=t.zindex,g.style.opacity=t.opacity,"center-center"===t.position?(g.style.left=t.distance,g.style.top=t.distance,g.style.right=t.distance,g.style.bottom=t.distance,g.style.margin="auto",g.classList.add("nx-flex-center-center"),g.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",g.style.display="flex",g.style.flexWrap="wrap",g.style.flexDirection="column",g.style.justifyContent="center",g.style.alignItems="center",g.style.pointerEvents="none"):"center-top"===t.position?(g.style.left=t.distance,g.style.right=t.distance,g.style.top=t.distance,g.style.bottom="auto",g.style.margin="auto"):"center-bottom"===t.position?(g.style.left=t.distance,g.style.right=t.distance,g.style.bottom=t.distance,g.style.top="auto",g.style.margin="auto"):"right-bottom"===t.position?(g.style.right=t.distance,g.style.bottom=t.distance,g.style.top="auto",g.style.left="auto"):"left-top"===t.position?(g.style.left=t.distance,g.style.top=t.distance,g.style.right="auto",g.style.bottom="auto"):"left-bottom"===t.position?(g.style.left=t.distance,g.style.bottom=t.distance,g.style.top="auto",g.style.right="auto"):(g.style.right=t.distance,g.style.top=t.distance,g.style.left="auto",g.style.bottom="auto"),t.backOverlay){var x=e.document.getElementById(o.overlayID)||e.document.createElement("div");x.id=o.overlayID,x.style.width="100%",x.style.height="100%",x.style.position="fixed",x.style.zIndex=t.zindex-1,x.style.left=0,x.style.top=0,x.style.right=0,x.style.bottom=0,x.style.background=y.backOverlayColor||t.backOverlayColor,x.className=t.cssAnimation?"nx-with-animation":"",x.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(o.overlayID)||e.document.body.appendChild(x)}e.document.getElementById(o.wrapID)||e.document.body.appendChild(g);var v=e.document.createElement("div");v.id=t.ID+"-"+d,v.className=t.className+" "+y.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof c?"nx-with-close-button":"")+" "+("function"==typeof c?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),v.style.fontSize=t.fontSize,v.style.color=y.textColor,v.style.background=y.background,v.style.borderRadius=t.borderRadius,v.style.pointerEvents="all",t.rtl&&(v.setAttribute("dir","rtl"),v.classList.add("nx-rtl-on")),v.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',t.cssAnimation&&(v.style.animationDuration=t.cssAnimationDuration+"ms");var h="";if(t.closeButton&&"function"!=typeof c&&(h='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+y.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon){if(t.useFontAwesome)v.innerHTML='<i style="color:'+y.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+y.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+r+"</span>"+(t.closeButton?h:"");else{var b="";n===i.Success?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+y.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===i.Failure?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+y.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===i.Warning?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+y.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===i.Info&&(b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+y.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),v.innerHTML=b+'<span class="nx-message nx-with-icon">'+r+"</span>"+(t.closeButton?h:"")}}else v.innerHTML='<span class="nx-message">'+r+"</span>"+(t.closeButton?h:"");if("left-bottom"===t.position||"right-bottom"===t.position){var w=e.document.getElementById(o.wrapID);w.insertBefore(v,w.firstChild)}else e.document.getElementById(o.wrapID).appendChild(v);var k=e.document.getElementById(v.id);if(k){var N,L,S=function(){k.classList.add("nx-remove");var t=e.document.getElementById(o.overlayID);t&&g.childElementCount<=0&&t.classList.add("nx-remove"),clearTimeout(N)},I=function(){if(k&&null!==k.parentNode&&k.parentNode.removeChild(k),g.childElementCount<=0&&null!==g.parentNode){g.parentNode.removeChild(g);var t=e.document.getElementById(o.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(L)};if(t.closeButton&&"function"!=typeof c&&e.document.getElementById(v.id).querySelector("span.nx-close-button").addEventListener("click",function(){S();var e=setTimeout(function(){I(),clearTimeout(e)},t.cssAnimationDuration)}),("function"==typeof c||t.clickToClose)&&k.addEventListener("click",function(){"function"==typeof c&&c(),S();var e=setTimeout(function(){I(),clearTimeout(e)},t.cssAnimationDuration)}),!t.closeButton&&"function"!=typeof c){var C=function(){N=setTimeout(function(){S()},t.timeout),L=setTimeout(function(){I()},t.timeout+t.cssAnimationDuration)};C(),t.pauseOnHover&&(k.addEventListener("mouseenter",function(){k.classList.add("nx-paused"),clearTimeout(N),clearTimeout(L)}),k.addEventListener("mouseleave",function(){k.classList.remove("nx-paused"),C()}))}}if(t.showOnlyTheLastOne&&d>0)for(var _=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+d+"])"),E=0;E<_.length;E++){var A=_[E];null!==A.parentNode&&A.parentNode.removeChild(A)}t=s(!0,t,f)},m={Notify:{init:function(e){t=s(!0,o,e),r(c,"NotiflixNotifyInternalCSS")},merge:function(e){if(!t)return n("You have to initialize the Notify module before call Merge function."),!1;t=s(!0,t,e)},success:function(e,t,o){u(i.Success,e,t,o)},failure:function(e,t,o){u(i.Failure,e,t,o)},warning:function(e,t,o){u(i.Warning,e,t,o)},info:function(e,t,o){u(i.Info,e,t,o)}}};return"object"==typeof e.Notiflix?s(!0,e.Notiflix,{Notify:m.Notify}):{Notify:m.Notify}},"function"==typeof define&&define.amd?define([],function(){return n(o)}):"object"==typeof e.exports?e.exports=n(o):o.Notiflix=n(o)}),a.register("34hUh",function(t,i){e(t.exports,"isActivePage",function(){return n});var o=a("aYXpI");function n(){var e=document.querySelectorAll(".home");e.length||this.classList.add("home"),e.length&&(0,o._)(e).forEach(function(e){return e.classList.remove("home")}),this.classList.add("home")}}),a.register("aYXpI",function(t,i){e(t.exports,"_",function(){return l});var o=a("8FgSx"),n=a("jSYmc"),r=a("6TTBR"),s=a("avvGs");function l(e){return(0,o._array_without_holes)(e)||(0,n._iterable_to_array)(e)||(0,s._unsupported_iterable_to_array)(e)||(0,r._non_iterable_spread)()}}),a.register("8FgSx",function(t,i){e(t.exports,"_array_without_holes",function(){return n});var o=a("gLGHe");function n(e){if(Array.isArray(e))return(0,o._array_like_to_array)(e)}}),a.register("gLGHe",function(t,i){e(t.exports,"_array_like_to_array",function(){return o});function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,o=Array(t);i<t;i++)o[i]=e[i];return o}}),a.register("jSYmc",function(t,i){e(t.exports,"_iterable_to_array",function(){return o});function o(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}}),a.register("6TTBR",function(t,i){e(t.exports,"_non_iterable_spread",function(){return o});function o(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}),a.register("avvGs",function(t,i){e(t.exports,"_unsupported_iterable_to_array",function(){return n});var o=a("gLGHe");function n(e,t){if(e){if("string"==typeof e)return(0,o._array_like_to_array)(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return(0,o._array_like_to_array)(e,t)}}}),a.register("32ZrB",function(e,t){function i(){try{"dark"===localStorage.getItem("theme")?document.body.setAttribute("dark",""):document.body.removeAttribute("dark")}catch(e){}}document.querySelector('input[type = "checkbox"]').addEventListener("change",function(e){e.preventDefault(),"dark"===localStorage.getItem("theme")?localStorage.removeItem("theme"):localStorage.setItem("theme","dark"),i(),setTimeout(o,700)}),i();var o=function(){var e=document.querySelectorAll(".darkFilter");"dark"===localStorage.getItem("theme")?e.forEach(function(e){e.classList.add("filter-img")}):e.forEach(function(e){e.classList.remove("filter-img")})}}),a.register("xpKCW",function(e,t){var o=a("9dZrU"),n=a("7OwZC"),r=a("20e5G"),s=a("9DwFd"),l=a("iOPQd"),c=a("bhRDc"),d=a("6ggRq"),u=a("19lbM"),m=a("amEz7"),f=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:i(o)},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:i(n)},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:i(r)},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:i(s)},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:i(l)},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:i(c)},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:i(d)},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:i(u)},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:i(m)}],p=document.querySelector(".support-list"),y=f.map(function(e){return'<li class="support-item" aria-label="'.concat(e.title,'">\n  <div class="fund-container"> <img src="').concat(e.img,'" alt="').concat(e.title,'" class="support-logo" data-url="').concat(e.url,'" width="auto" height="32px"></div>\n \n  </li>')});p.innerHTML=y.join(""),document.querySelectorAll(".support-logo").forEach(function(e){e.addEventListener("click",function(){var e=this.getAttribute("data-url");window.open(e,"_blank")})});var g=document.querySelector(".support"),x=document.querySelector(".support-container"),v=document.querySelector(".see-more-funds");function h(){x.scrollTo({top:0,behavior:"smooth"})}window.matchMedia("(max-width: 767px)").matches?v.addEventListener("click",function(){g.classList.toggle("expanded"),g.classList.contains("expanded")?(v.classList.remove("fade-in"),v.classList.add("fade-out"),x.style.overflowY="scroll",x.style.overflowX="auto",x.style.height="220px",x.style.marginRight="10px"):(v.classList.remove("fade-out"),v.classList.add("fade-in"),x.style.overflowY="hidden",x.style.overflowX="hidden",x.style.height="auto",x.style.marginRight="0"),h()}):v.addEventListener("click",function(){g.classList.toggle("expanded"),g.classList.contains("expanded")?(v.classList.remove("fade-in"),v.classList.add("fade-out"),x.style.overflowY="scroll",x.style.overflowX="auto",x.style.height="340px",x.style.marginRight="10px"):(v.classList.remove("fade-out"),v.classList.add("fade-in"),x.style.overflowY="hidden",x.style.overflowX="hidden",x.style.height="auto",x.style.marginRight="0"),h()}),document.addEventListener("click",function(e){e.target.closest(".support")||(g.classList.remove("expanded"),v.classList.remove("fade-out"),v.classList.add("fade-in"),x.style.overflowY="hidden",x.style.overflowX="hidden",x.style.height="auto",x.style.marginRight="0",h())})}),a.register("9dZrU",function(e,t){e.exports=a("aNJCr").getBundleURL("kdj3m")+a("iE7OH").resolve("Mj81Y")}),a.register("aNJCr",function(t,i){e(t.exports,"getBundleURL",function(){return o},function(e){return o=e});"use strict";var o,n={};o=function(e){var t=n[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),n[e]=t),t}}),a.register("7OwZC",function(e,t){e.exports=a("aNJCr").getBundleURL("kdj3m")+a("iE7OH").resolve("anOJt")}),a.register("20e5G",function(e,t){e.exports=a("aNJCr").getBundleURL("kdj3m")+a("iE7OH").resolve("k7TaH")}),a.register("9DwFd",function(e,t){e.exports=a("aNJCr").getBundleURL("kdj3m")+a("iE7OH").resolve("cAlyB")}),a.register("iOPQd",function(e,t){e.exports=a("aNJCr").getBundleURL("kdj3m")+a("iE7OH").resolve("2O3ia")}),a.register("bhRDc",function(e,t){e.exports=a("aNJCr").getBundleURL("kdj3m")+a("iE7OH").resolve("hwhBy")}),a.register("6ggRq",function(e,t){e.exports=a("aNJCr").getBundleURL("kdj3m")+a("iE7OH").resolve("4ugcr")}),a.register("19lbM",function(e,t){e.exports=a("aNJCr").getBundleURL("kdj3m")+a("iE7OH").resolve("cPyKe")}),a.register("amEz7",function(e,t){e.exports=a("aNJCr").getBundleURL("kdj3m")+a("iE7OH").resolve("7t5Ix")}),a.register("kvC6y",function(e,t){var i=document.querySelector(".mask");window.addEventListener("load",function(){i.classList.add("hiden"),setTimeout(function(){i.remove()},800)})}),a.register("8VrgS",function(e,t){var i=document.querySelector(".scroll-btn");document.querySelector(".modal-shopping-close");var o=document.querySelector(".modal");i.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>100&&!o.hasAttribute("data-open")?i.classList.add("show-scroll-btn"):i.classList.remove("show-scroll-btn")})}),a("iE7OH").register(JSON.parse('{"kdj3m":"shopinglist.8f6af9a6.js","Mj81Y":"save_the_children.0b35cb26.png","anOJt":"project_hope.dbab6297.png","k7TaH":"united24.da406324.png","cAlyB":"international_medical_corps.3f7d7bef.png","2O3ia":"medicins_sans_frontieres.3b84184e.png","hwhBy":"razom.19da45fc.png","4ugcr":"action_against_hunger.20bbda31.png","cPyKe":"world_vision.7f9efe0a.png","7t5Ix":"serhiy_prytula_charity_foundation.99318e0b.png"}'))}();
//# sourceMappingURL=shopinglist.8f6af9a6.js.map
