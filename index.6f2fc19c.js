!function(){function t(t,e,n,o){Object.defineProperty(t,e,{get:n,set:o,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},r={},i=o.parcelRequired7c6;null==i&&((i=function(t){if(t in a)return a[t].exports;if(t in r){var e=r[t];delete r[t];var n={id:t,exports:{}};return a[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){r[t]=e},o.parcelRequired7c6=i),i.register("iE7OH",function(e,n){"use strict";t(e.exports,"register",function(){return o},function(t){return o=t}),t(e.exports,"resolve",function(){return a},function(t){return a=t});var o,a,r={};o=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)r[e[n]]=t[e[n]]},a=function(t){var e=r[t];if(null==e)throw Error("Could not resolve bundle with id "+t);return e}}),i.register("aNJCr",function(e,n){t(e.exports,"getBundleURL",function(){return o},function(t){return o=t});"use strict";var o,a={};o=function(t){var e=a[t];return e||(e=function(){try{throw Error()}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)return(""+t[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),a[t]=e),e}}),i("iE7OH").register(JSON.parse('{"EVgbq":"index.6f2fc19c.js","aaLHb":"amazon.40ba9165.png","cL3Jl":"book.89e7d427.png","jr1cR":"book-block.950d06ef.png","3Yc4i":"shopinglist.c427b4e2.js","26fiA":"shopinglist.1df064f8.js"}')),i("i8Q71"),i("32ZrB");var c=i("i7mVp"),s=i("4tSb9"),l=i("dIxxU"),u=i("h6c0i"),c=i("i7mVp"),s=i("4tSb9"),u=i("h6c0i"),l=i("dIxxU"),d=document.querySelector(".container-books");function f(){return g.apply(this,arguments)}function g(){return(g=(0,c._)(function(){var t;return(0,s.__generator)(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),console.log("before"),[4,(0,l.default).get("https://books-backend.p.goit.global/books/top-books")];case 1:return console.log("11",(t=e.sent()).data),[2,t.data];case 2:return e.sent(),(0,u.Notify).warning("Sorry, failed to load information"),[3,3];case 3:return[2]}})})).apply(this,arguments)}d.firstChild||f().then(function(t){var e;return d.insertAdjacentHTML("beforeend",(e="",t.forEach(function(t){var n=t.list_name,o=t.books.map(function(t){var e=t.book_image,n=t.author,o=t.title,a=t._id;return'<li class="bs-list-item" hidden>\n        <div class="book-card" data-id="'.concat(a,'">\n        <div class="image-overlay" data-id="').concat(a,'">\n            <img class="book-img js-ct" src="').concat(e,'" alt="').concat(o,'" loading="lazy" />\n            <div class="image-description" data-id="').concat(a,'">\n      <p class="image-overlay-description js-ct">quick view</p>\n     </div>\n      </div>\n            <h3 class="book-title js-ct">').concat(o,'</h3>\n            <h4 class="book-author js-ct">').concat(n,"</h4>\n        </div>\n        </li>")}).join("");e+='<div class="category-block">\n        <h2 class="cat-title">'.concat(t.list_name,'</h2>\n        <ul class="book-list">').concat(o,'</ul>\n        <button type="button" class="btn-more" data-catname="').concat(n,'">SEE MORE</button>\n    </div>')}),e='<h1 class="main-title">Best Sellers <span>Books</span></h1>'+e))}).catch(function(t){return console.log(t)});var p=document.querySelector(".category-list");function b(t){return m.apply(this,arguments)}function m(){return(m=(0,c._)(function(t){return(0,s.__generator)(this,function(e){switch(e.label){case 0:return[4,(0,l.default).get("https://books-backend.p.goit.global/books/category?category=".concat(t)).then(function(t){var e,n,o,a,r,i;return e=t.data,n='\n    <h2 class ="main-title">'.concat(e[0].list_name,'</h2>\n    <ul class="book-list">').concat(e.map(function(t){var e=t.author,n=t.book_image,o=t.title,a=t._id;return'<li class="bs-list-item">\n          <div class="book-card " data-id="'.concat(a,'">\n    <div class="image-overlay" data-id="').concat(a,'">\n    <img class="book-img js-ct" src="').concat(n,'" alt="').concat(o,' loading="lazy" >\n    <div class="image-description" data-id="').concat(a,'">\n      <p class="image-overlay-description js-ct"> quick view  </p>\n     </div>\n      </div>\n    <h3 class="book-title js-ct">').concat(o,'</h3>\n    <p class="book-author js-ct"> ').concat(e,"</p>\n    </div>\n    </li>")}).join(""),"\n    </ul>\n     "),bookCard.innerHTML=n,i=(r=(a=(o=document.querySelector(".main-title")).textContent).split(" "))[r.length-1],void(o.innerHTML=a.replace(i,'<span class="brendcolor">'.concat(i,"</span>")))})];case 1:return e.sent(),[2]}})})).apply(this,arguments)}document.querySelector(".container-books").addEventListener("click",function(t){var e=t.target.dataset.catname,n=Array.from(p.querySelectorAll("li")),o=n.find(function(t){return t.innerText===e}),a=n.find(function(t){return"all categories"===t.innerText.toLowerCase()});o&&(a.classList.remove("categories__title-active"),o.classList.add("categories__title-active"))}),p.addEventListener("click",function(t){var e=t.target,n=document.querySelector(".categories__title-active");if("LI"===e.tagName){if(n&&n.classList.remove("categories__title-active"),t.target.classList.add("categories__title-active"),"All Categories"===e.textContent.trim())return bookCard.innerHTML="",f();b(e.textContent.trim())}}),i("xpKCW");var c=i("i7mVp"),s=i("4tSb9"),v={};v=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("aaLHb");var h={};h=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("cL3Jl");var k={};k=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("jr1cR");var u=i("h6c0i"),y=document.querySelector(".backdrop"),_=document.querySelector(".modal"),S=document.querySelector(".modal-shopping-close"),L=document.querySelector(".render-modal"),E=document.querySelector(".scroll-btn");function w(){y.classList.remove("active"),_.classList.remove("active"),E.classList.remove("visually-hidden"),document.body.style.overflow="auto"}function H(t){return x.apply(this,arguments)}function x(){return(x=(0,c._)(function(t){var e,n;return(0,s.__generator)(this,function(o){switch(o.label){case 0:return o.trys.push([0,3,,4]),e="https://books-backend.p.goit.global/books/".concat(t),[4,fetch(e)];case 1:if(!(n=o.sent()).ok)throw Error("Error: ".concat(n.status," ").concat(n.statusText));return[4,n.json()];case 2:return[2,[o.sent()]];case 3:return o.sent(),(0,u.Notify).warning("Sorry, failed to load information"),[3,4];case 4:return[2]}})})).apply(this,arguments)}var j=function(){var t=document.querySelector(".darkFilterModal");"dark"===localStorage.getItem("theme")?t.classList.add("filter-img"):t.classList.remove("filter-img")};function q(){return(q=(0,c._)(function(t){var o;return(0,s.__generator)(this,function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),E.classList.add("visually-hidden"),L.innerHTML="",[4,H(t)];case 1:var r;return n=(o=a.sent())[0]._id,r=o.map(function(t){return'\n        <div class="card-modal" id="'.concat(t._id,'">\n        <img\n          class="modal-img"\n          alt="').concat(t.title,'"\n          src="').concat(t.book_image,'"\n        />\n  \n        <div class="thumb-modal">\n          <h2 class="book-title-in-modal">').concat(t.title,'</h2>\n          <p class="subtitle-book">').concat(t.author,'</p>\n          <p class="text book">\n          ').concat(t.description?t.description:"Sorry, but this book does not have an accessible description. Try reading it on the website of one of the shops",'\n          </p>\n          <ul class="shop-list">\n            <li>\n              <a href="').concat(t.buy_links[0].url,'" target="_blank">\n                <img src="').concat(e(v),'" alt="Amazon" class="darkFilterModal"/>\n              </a>\n            </li>\n            <li>\n              <a href="').concat(t.buy_links[1].url,'" target="_blank">\n                <img src="').concat(e(h),'" alt="Apple Books" />\n              </a>\n            </li>\n            <li>\n              <a href="').concat(t.buy_links[4].url,'" target="_blank">\n                <img src="').concat(e(k),'" alt="Bookshop" />\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n        ')}).join(""),L.insertAdjacentHTML("beforeend",r),j(),function(t){if(JSON.parse(localStorage.getItem("savedBooks")).some(function(e){return e._id===t})){L.insertAdjacentHTML("beforeend",'\n      <button type="submit" class="button book" aria-label="Remove from shopping">\n        Remove from the shopping list\n      </button>\n      <p class="congratulation">\n        Сongratulations! You have added the book to the shopping list. To delete,\n        press the button “Remove from the shopping list”.\n      </p>\n    ');var e=document.querySelector(".button.book");JSON.parse(localStorage.getItem("userLogin"))||(e.disabled=!0,e.textContent="Login please"),e.addEventListener("click",A)}else{L.insertAdjacentHTML("beforeend",'\n      <button type="submit" class="button book" aria-label="Add to shopping">\n        Add to shopping list\n      </button>\n    ');var n=document.querySelector(".button.book");JSON.parse(localStorage.getItem("userLogin"))||(n.disabled=!0,n.textContent="Login please"),n.addEventListener("click",O)}}(n),[3,3];case 2:return a.sent(),(0,u.Notify).warning("Sorry, failed to load information"),[3,3];case 3:return[2]}})})).apply(this,arguments)}function N(){return(N=(0,c._)(function(t){var e,n,o,a,r,i,c;return(0,s.__generator)(this,function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),[4,H(t)];case 1:return n=(e=s.sent()[0])._id,o=e.book_image,a=e.title,r=e.list_name,i={_id:n,book_image:o,title:a,list_name:r,description:e.description,author:e.author,buy_links:e.buy_links},(c=JSON.parse(localStorage.getItem("savedBooks"))||[]).push(i),localStorage.setItem("savedBooks",JSON.stringify(c)),[3,3];case 2:return s.sent(),(0,u.Notify).warning("Sorry, failed to load information"),[3,3];case 3:return[2]}})})).apply(this,arguments)}function O(t){!function(t){N.apply(this,arguments)}(n),w(),C()}function A(t){var e,o,a;e=n,-1!==(a=(o=JSON.parse(localStorage.getItem("savedBooks"))).findIndex(function(t){return t._id===e}))&&o.splice(a,1),localStorage.setItem("savedBooks",JSON.stringify(o)),w(),C()}function C(){var t=document.querySelector(".button.book");t.removeEventListener("click",A),t.removeEventListener("click",O)}function R(t){t.target===y&&(w(),J())}function T(t){w(),J()}function B(t){"Escape"===t.key&&(w(),J())}function J(){y.removeEventListener("click",R),document.removeEventListener("keydown",B),S.removeEventListener("click",T)}function I(t){var e;"BUTTON"===t.target.tagName&&b(t.target.dataset.catname),t.target.classList.value.includes("js-ct")&&(e=t.target.parentElement.dataset.id),e&&(function(t){q.apply(this,arguments)}(e),y.classList.add("active"),_.classList.add("active"),document.body.style.overflow="hidden",y.addEventListener("click",R),document.addEventListener("keydown",B),S.addEventListener("click",T))}JSON.parse(localStorage.getItem("savedBooks"))||localStorage.setItem("savedBooks",JSON.stringify([])),window.addEventListener("load",function(){d.addEventListener("click",I)}),i("kvC6y"),i("8VrgS")}();
//# sourceMappingURL=index.6f2fc19c.js.map
