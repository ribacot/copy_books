!function(){function t(t,e,n,o){Object.defineProperty(t,e,{get:n,set:o,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},i=o.parcelRequired7c6;null==i&&((i=function(t){if(t in r)return r[t].exports;if(t in a){var e=a[t];delete a[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){a[t]=e},o.parcelRequired7c6=i),i.register("iE7OH",function(e,n){"use strict";t(e.exports,"register",function(){return o},function(t){return o=t}),t(e.exports,"resolve",function(){return r},function(t){return r=t});var o,r,a={};o=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)a[e[n]]=t[e[n]]},r=function(t){var e=a[t];if(null==e)throw Error("Could not resolve bundle with id "+t);return e}}),i.register("aNJCr",function(e,n){t(e.exports,"getBundleURL",function(){return o},function(t){return o=t});"use strict";var o,r={};o=function(t){var e=r[t];return e||(e=function(){try{throw Error()}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)return(""+t[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),r[t]=e),e}}),i("iE7OH").register(JSON.parse('{"EVgbq":"index.9aa5deb1.js","aaLHb":"amazon.40ba9165.png","cL3Jl":"book.89e7d427.png","jr1cR":"book-block.950d06ef.png","j0qfd":"shopinglist.1d46b6ac.js","h3Dfd":"shopinglist.ab4612db.js"}')),i("i8Q71"),i("32ZrB");var s=i("i7mVp"),c=i("4tSb9"),s=i("i7mVp"),c=i("4tSb9"),l=i("dIxxU"),u=document.querySelector(".container-books");function d(){return p.apply(this,arguments)}function p(){return(p=(0,s._)(function(){var t;return(0,c.__generator)(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,(0,l.default).get("https://books-backend.p.goit.global/books/top-books ")];case 1:var n,o;return t=e.sent(),u.insertAdjacentHTML("beforeend",(n=t.data,o="",n.forEach(function(t){var e=t.list_name,n=t.books.map(function(t){var e=t.book_image,n=t.author,o=t.title,r=t._id;return'<li class="bs-list-item" hidden>\n        <div class="book-card" data-id="'.concat(r,'">\n        <div class="image-overlay" data-id="').concat(r,'">\n            <img class="book-img js-ct" src="').concat(e,'" alt="').concat(o,'" loading="lazy" />\n            <div class="image-description js-ct" data-id="').concat(r,'>\n      <p class="image-overlay-description js-ct"> quick view  </p>\n     </div>\n      </div>\n            <h3 class="book-title js-ct">').concat(o,'</h3>\n            <h4 class="book-author js-ct">').concat(n,"</h4>\n        </div>\n        </li>")}).join("");o+='<div class="category-block">\n        <h2 class="cat-title">'.concat(t.list_name,'</h2>\n        <ul class="book-list">').concat(n,'</ul>\n        <button type="button" class="btn-more" data-catname="').concat(e,'">SEE MORE</button>\n    </div>')}),o='<h1 class="main-title">Best Sellers <span>Books</span></h1>'+o)),[3,3];case 2:return console.log(e.sent()),[3,3];case 3:return[2]}})})).apply(this,arguments)}u.firstChild||d();var g=document.querySelector(".category-list"),l=i("dIxxU"),f=l.default;function b(){return(b=(0,s._)(function(){return(0,c.__generator)(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,f.get("https://books-backend.p.goit.global/books/category-list")];case 1:var e;return e='<li class = "category-list-item"> All Categories </li>'+(e=t.sent().data.map(function(t){var e=t.list_name;return'<li class = "category-list-item"> '.concat(e," </li>")}).join("")),g.innerHTML=e,[3,3];case 2:return console.log("error",t.sent()),[3,3];case 3:return[2]}})})).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,s._)(function(t){return(0,c.__generator)(this,function(e){switch(e.label){case 0:return[4,f.get("https://books-backend.p.goit.global/books/category?category=".concat(t)).then(function(t){var e,n,o,r,a,i;return e=t.data,n='\n    <h2 class ="main-title">'.concat(e[0].list_name,'</h2>\n    <ul class="book-list">').concat(e.map(function(t){var e=t.author,n=t.book_image,o=(t.description,t.title),r=t._id;return'<li class="bs-list-item">\n          <div class="book-card " data-id="'.concat(r,'">\n    <div class="image-overlay" data-id="').concat(r,'">\n    <img class="book-img js-ct" src="').concat(n,'" alt="').concat(o,' loading="lazy" >\n    <div class="image-description">\n      <p class="image-overlay-description"> quick view  </p>\n     </div>\n      </div>\n    <h3 class="book-title js-ct">').concat(o,'</h3>\n    <p class="book-author js-ct"> ').concat(e,"</p>\n    </div>\n    </li>")}).join(""),"\n    </ul>\n     "),u.innerHTML=n,i=(a=(r=(o=document.querySelector(".main-title")).textContent).split(" "))[a.length-1],void(o.innerHTML=r.replace(i,'<span class="brendcolor">'.concat(i,"</span>")))})];case 1:return e.sent(),[2]}})})).apply(this,arguments)}document.querySelector(".container-books").addEventListener("click",function(t){var e=t.target.dataset.catname,n=Array.from(g.querySelectorAll("li")),o=n.find(function(t){return t.innerText===e}),r=n.find(function(t){return"all categories"===t.innerText.toLowerCase()});o&&(r.classList.remove("categories__title-active"),o.classList.add("categories__title-active"))}),g.addEventListener("click",function(t){var e=t.target,n=document.querySelector(".categories__title-active");if("LI"===e.tagName){if(n&&n.classList.remove("categories__title-active"),t.target.classList.add("categories__title-active"),"All Categories"===e.textContent.trim())return u.innerHTML="",d();v(e.textContent.trim())}}),function(){b.apply(this,arguments)}(),i("xpKCW");var s=i("i7mVp"),c=i("4tSb9"),h={};h=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("aaLHb");var k={};k=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("cL3Jl");var y={};y=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("jr1cR");var _=document.querySelector(".backdrop"),L=document.querySelector(".modal"),S=document.querySelector(".modal-shopping-close"),E=document.querySelector(".render-modal"),H=document.querySelector(".scroll-btn");function w(){_.classList.remove("active"),L.classList.remove("active"),H.classList.remove("visually-hidden"),document.body.style.overflow="auto"}function j(t){return x.apply(this,arguments)}function x(){return(x=(0,s._)(function(t){var e,n;return(0,c.__generator)(this,function(o){switch(o.label){case 0:return o.trys.push([0,3,,4]),e="https://books-backend.p.goit.global/books/".concat(t),[4,fetch(e)];case 1:if(!(n=o.sent()).ok)throw Error("Error: ".concat(n.status," ").concat(n.statusText));return[4,n.json()];case 2:return[2,[o.sent()]];case 3:return console.error(o.sent()),[3,4];case 4:return[2]}})})).apply(this,arguments)}var q=function(){var t=document.querySelector(".darkFilterModal");"dark"===localStorage.getItem("theme")?t.classList.add("filter-img"):t.classList.remove("filter-img")};function O(){return(O=(0,s._)(function(t){var o;return(0,c.__generator)(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),H.classList.add("visually-hidden"),E.innerHTML="",[4,j(t)];case 1:var a;return n=(o=r.sent())[0]._id,a=o.map(function(t){return'\n        <div class="card-modal" id="'.concat(t._id,'">\n        <img\n          class="modal-img"\n          alt="').concat(t.title,'"\n          src="').concat(t.book_image,'"\n        />\n  \n        <div class="thumb-modal">\n          <h2 class="book-title-in-modal">').concat(t.title,'</h2>\n          <p class="subtitle-book">').concat(t.author,'</p>\n          <p class="text book">\n          ').concat(t.description?t.description:"Sorry, but this book does not have an accessible description. Try reading it on the website of one of the shops",'\n          </p>\n          <ul class="shop-list">\n            <li>\n              <a href="').concat(t.buy_links[0].url,'" target="_blank">\n                <img src="').concat(e(h),'" alt="Amazon" class="darkFilterModal"/>\n              </a>\n            </li>\n            <li>\n              <a href="').concat(t.buy_links[1].url,'" target="_blank">\n                <img src="').concat(e(k),'" alt="Apple Books" />\n              </a>\n            </li>\n            <li>\n              <a href="').concat(t.buy_links[4].url,'" target="_blank">\n                <img src="').concat(e(y),'" alt="Bookshop" />\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n        ')}).join(""),E.insertAdjacentHTML("beforeend",a),q(),function(t){if(JSON.parse(localStorage.getItem("savedBooks")).some(function(e){return e._id===t})){E.insertAdjacentHTML("beforeend",'\n      <button type="submit" class="button book" aria-label="Remove from shopping">\n        Remove from the shopping list\n      </button>\n      <p class="congratulation">\n        Сongratulations! You have added the book to the shopping list. To delete,\n        press the button “Remove from the shopping list”.\n      </p>\n    ');var e=document.querySelector(".button.book");JSON.parse(localStorage.getItem("userLogin"))||(e.disabled=!0,e.textContent="Login please"),e.addEventListener("click",A)}else{E.insertAdjacentHTML("beforeend",'\n      <button type="submit" class="button book" aria-label="Add to shopping">\n        Add to shopping list\n      </button>\n    ');var n=document.querySelector(".button.book");JSON.parse(localStorage.getItem("userLogin"))||(n.disabled=!0,n.textContent="Login please"),n.addEventListener("click",T)}}(n),[3,3];case 2:return console.error(r.sent()),[3,3];case 3:return[2]}})})).apply(this,arguments)}function N(){return(N=(0,s._)(function(t){var e,n,o,r,a,i,s;return(0,c.__generator)(this,function(c){switch(c.label){case 0:return c.trys.push([0,2,,3]),[4,j(t)];case 1:return n=(e=c.sent()[0])._id,o=e.book_image,r=e.title,a=e.list_name,i={_id:n,book_image:o,title:r,list_name:a,description:e.description,author:e.author,buy_links:e.buy_links},(s=JSON.parse(localStorage.getItem("savedBooks"))||[]).push(i),localStorage.setItem("savedBooks",JSON.stringify(s)),[3,3];case 2:return console.error(c.sent()),[3,3];case 3:return[2]}})})).apply(this,arguments)}function T(t){!function(t){N.apply(this,arguments)}(n),w(),R()}function A(t){var e,o,r;e=n,-1!==(r=(o=JSON.parse(localStorage.getItem("savedBooks"))).findIndex(function(t){return t._id===e}))&&o.splice(r,1),localStorage.setItem("savedBooks",JSON.stringify(o)),w(),R()}function R(){var t=document.querySelector(".button.book");t.removeEventListener("click",A),t.removeEventListener("click",T)}function B(t){t.target===_&&(w(),I())}function C(t){w(),I()}function J(t){"Escape"===t.key&&(w(),I())}function I(){_.removeEventListener("click",B),document.removeEventListener("keydown",J),S.removeEventListener("click",C)}function M(t){var e;"BUTTON"===t.target.tagName&&v(t.target.dataset.catname),t.target.classList.value.includes("js-ct")&&(e=t.target.parentElement.dataset.id),e&&(function(t){O.apply(this,arguments)}(e),_.classList.add("active"),L.classList.add("active"),document.body.style.overflow="hidden",_.addEventListener("click",B),document.addEventListener("keydown",J),S.addEventListener("click",C))}JSON.parse(localStorage.getItem("savedBooks"))||localStorage.setItem("savedBooks",JSON.stringify([])),window.addEventListener("load",function(){u.addEventListener("click",M)}),i("fNvbN"),i("kvC6y"),i("8VrgS")}();
//# sourceMappingURL=index.9aa5deb1.js.map
