function e(e,t,o,a){Object.defineProperty(e,t,{get:o,set:a,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r),r.register("kyEFX",function(t,o){"use strict";e(t.exports,"register",function(){return a},function(e){return a=e}),e(t.exports,"resolve",function(){return r},function(e){return r=e});var a,r,n={};a=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)n[t[o]]=e[t[o]]},r=function(e){var t=n[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),r("kyEFX").register(JSON.parse('{"5ZPII":"index.57bab999.js","1yVwl":"amazon.40ba9165.png","fIBw5":"book.89e7d427.png","fSsri":"book-block.950d06ef.png","dWaF6":"shopinglist.33afdc7a.js","bxVdh":"shopinglist.7a909c27.js"}')),r("bUb57"),r("ghT7p"),r("dTazW");var n=r("2shzp"),i=r("iQIUW");console.log("axios_hero",n.default);const l=document.querySelector(".container-books");async function s(){try{var e;let t;console.log("axios_in",n.default),console.log("befor");let o=await (0,n.default).get("https://books-backend.p.goit.global/books/top-books");console.log("after"),l.insertAdjacentHTML("beforeend",(e=o.data,t="",e.forEach(e=>{t+=`<div class="category-block">
        <h2 class="cat-title">${e.list_name}</h2>
        <ul class="book-list">${e.books.map(({book_image:e,author:t,title:o,_id:a})=>`<li class="bs-list-item" hidden>
        <div class="book-card" data-id="${a}">
        <div class="image-overlay" data-id="${a}">
            <img class="book-img js-ct" src="${e}" alt="${o}" loading="lazy" />
            <div class="image-description" data-id="${a}">
      <p class="image-overlay-description js-ct">quick view</p>
     </div>
      </div>
            <h3 class="book-title js-ct">${o}</h3>
            <h4 class="book-author js-ct">${t}</h4>
        </div>
        </li>`).join("")}</ul>
        <button type="button" class="btn-more" data-catname="${e.list_name}">SEE MORE</button>
    </div>`}),t='<h1 class="main-title">Best Sellers <span>Books</span></h1>'+t))}catch(e){console.log(e),(0,i.Notify).warning("Sorry, failed to load information")}}l.firstChild||s();var c={};new URL(r("kyEFX").resolve("1yVwl"),import.meta.url).toString(),new URL(r("kyEFX").resolve("fIBw5"),import.meta.url).toString(),new URL(r("kyEFX").resolve("fSsri"),import.meta.url).toString();var i=r("iQIUW");function d(e){"BUTTON"===e.target.tagName&&(0,c.getBookByCategory)(e.target.dataset.catname),e.target.classList.value.includes("js-ct")&&e.target.parentElement.dataset.id}document.querySelector(".backdrop"),document.querySelector(".modal"),document.querySelector(".modal-shopping-close"),document.querySelector(".render-modal"),document.querySelector(".scroll-btn"),function(){let e=JSON.parse(localStorage.getItem("savedBooks"));e||localStorage.setItem("savedBooks",JSON.stringify([]))}(),window.addEventListener("load",function(){l.addEventListener("click",d)}),r("gjiCh"),r("h8wPa");
//# sourceMappingURL=index.57bab999.js.map
