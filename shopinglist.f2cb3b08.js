!function(){function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},n.parcelRequired7c6=o),o.register("iE7OH",function(t,n){"use strict";e(t.exports,"register",function(){return i},function(e){return i=e}),e(t.exports,"resolve",function(){return r},function(e){return r=e});var i,r,o={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},r=function(e){var t=o[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),o.register("aNJCr",function(t,n){e(t.exports,"getBundleURL",function(){return i},function(e){return i=e});"use strict";var i,r={};i=function(e){var t=r[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),r[e]=t),t}}),o("iE7OH").register(JSON.parse('{"2AtKG":"shopinglist.f2cb3b08.js","aaLHb":"amazon.40ba9165.png","cL3Jl":"book.89e7d427.png","jr1cR":"book-block.950d06ef.png","ee16w":"sprite.ee5e019c.svg","3PIDE":"IMG_9606 1.8e56c68d.png","1mbnD":"shopinglist.ca53c52d.js","gyNeT":"shopinglist.56b998c9.js"}')),o("i8Q71"),o("32ZrB"),o("xpKCW"),o("i7mVp"),o("4tSb9"),o("dIxxU");var s={};s=o("aNJCr").getBundleURL("2AtKG")+o("iE7OH").resolve("aaLHb");var a={};a=o("aNJCr").getBundleURL("2AtKG")+o("iE7OH").resolve("cL3Jl");var c={};c=o("aNJCr").getBundleURL("2AtKG")+o("iE7OH").resolve("jr1cR");var l={};function u(e){return e.map(function(e){var n=e._id,i=e.title,r=e.book_image,o=e.author,u=e.description,d=e.list_name,p=e.buy_links;return u||(u="Sorry, but this book does not have an accessible description. Try reading it on the website of one of the shops"),window.innerWidth<768&&u.length>=25&&(u=u.slice(0,50)+"<span> ...</span>"),'<li class="shopping-list-card"><img class="shopping-list-img" src="'.concat(void 0===r?"./images/book_default/book_default.jpg":r,'" alt="').concat(i,'" />\n          \n            <div class="shopping-list-description-thumb">\n              <div >\n                <h2 class="title-book shopping-title-book">').concat(i,'</h2>\n                <h3 class="shopping-list__subtitle ">').concat(d,'</h3>\n                <p class="description">').concat(u,'</p>\n              </div>\n              <div class="shopping-list-thumb">\n                <span class="author">').concat(o.split(",")[0],'</span>\n                <ul class="shopping-list-store">\n                <li > \n                 <a href="').concat(p.filter(function(e){return"Amazon"===e.name})[0].url,'"><img style="height:16px " src="').concat(t(s),'" id="dark-theme-filter" alt="Amazon"/>\n\n</a>\n</li>\n<li> \n  <a href="').concat(p.filter(function(e){return"Apple Books"===e.name})[0].url,'"><img style="height:16px " src="').concat(t(a),'" alt="Apple Books" />\n</a>\n</li>\n<li> \n<a href="').concat(p.filter(function(e){return"Bookshop"===e.name})[0].url,'"><img style="height:16px "  src="').concat(t(c),'" alt="logo Book-block" /></a>\n</li></ul>\n                </div>\n              </div>\n            </div>\n            <button type="button" data-id="').concat(n,'" class="shopping-list-btn-del js-trash js-trash-id "><svg class="trash js-trash">\n  <use class="js-trash" href="').concat(t(l),'#trash"></use>\n</svg> \n</button> \n          </li>\n')}).join("")}l=o("aNJCr").getBundleURL("2AtKG")+o("iE7OH").resolve("ee16w");var d=o("34hUh"),p={};function f(e){var t,n=e.target;if(n.classList.contains("js-trash")){var i=null!==(t=n.dataset.id)&&void 0!==t?t:n.closest(".js-trash-id").dataset.id,r=m.findIndex(function(e){return e._id===i});if(-1!==r){if(m.splice(r,1),localStorage.setItem("savedBooks",JSON.stringify(m)),!m.length)return h();v.innerHTML=u(m)}}}function h(){v.innerHTML='<div class="is-empty">\n  <p class="text-empty">This page is empty, add some books and proceed to order.</p>\n  <img src="'.concat(t(p),'" alt=""/></div>\n'),v.removeEventListener("click",f)}p=o("aNJCr").getBundleURL("2AtKG")+o("iE7OH").resolve("3PIDE");var g=o("i8Q71"),v=document.querySelector(".js-list-books");document.querySelector(".home");var b=document.querySelector(".shopping-list"),m=null;window.innerWidth<768?(0,d.isActivePage).call(g.shopListMobEl):(0,d.isActivePage).call(b);try{(m=JSON.parse(localStorage.getItem("savedBooks")))&&m.length?(v.innerHTML=u(m),v.addEventListener("click",f)):h()}catch(e){console.log(e)}o("fNvbN"),o("kvC6y"),o("8VrgS")}();
//# sourceMappingURL=shopinglist.f2cb3b08.js.map
