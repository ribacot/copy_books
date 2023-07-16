!function(){function e(e,t,o,a){Object.defineProperty(e,t,{get:o,set:a,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequired7c6=i),i.register("iE7OH",function(t,o){"use strict";e(t.exports,"register",function(){return a},function(e){return a=e}),e(t.exports,"resolve",function(){return i},function(e){return i=e});var a,i,r={};a=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)r[t[o]]=e[t[o]]},i=function(e){var t=r[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),i.register("aNJCr",function(t,o){e(t.exports,"getBundleURL",function(){return a},function(e){return a=e});"use strict";var a,i={};a=function(e){var t=i[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),i[e]=t),t}}),i("iE7OH").register(JSON.parse('{"EVgbq":"index.648a4dbd.js","aaLHb":"amazon.40ba9165.png","cL3Jl":"book.89e7d427.png","jr1cR":"book-block.950d06ef.png","3Q9Tf":"shopinglist.193055f2.js","cQXZ9":"shopinglist.225a7cdf.js"}')),i("i8Q71"),i("32ZrB");var r=i("dIxxU"),n=i("h6c0i");let s=document.querySelector(".container-books");async function l(){try{var e;let t;let o=await (0,r.default).get("https://books-backend.p.goit.global/books/top-books ");s.insertAdjacentHTML("beforeend",(e=o.data,t="",e.forEach(e=>{t+=`<div class="category-block">
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
    </div>`}),t='<h1 class="main-title">Best Sellers <span>Books</span></h1>'+t))}catch(e){console.log(e),(0,n.Notify).warning("Sorry, failed to load information")}}s.firstChild||l();var n=i("h6c0i"),r=i("dIxxU");let c=document.querySelector(".category-list"),d=document.querySelector(".container-books");async function u(){try{let e;let t=await (0,r.default).get("https://books-backend.p.goit.global/books/category-list");e=t.data.map(({list_name:e})=>`<li class = "category-list-item"> ${e} </li>`).join(""),e='<li class = "category-list-item"> All Categories </li>'+e,c.innerHTML=e}catch(e){console.log(e),(0,n.Notify).warning("Sorry, failed to load information")}}async function g(e){await (0,r.default).get(`https://books-backend.p.goit.global/books/category?category=${e}`).then(({data:e})=>(function(e){let t=`
    <h2 class ="main-title">${e[0].list_name}</h2>
    <ul class="book-list">${e.map(({author:e,book_image:t,title:o,_id:a})=>`<li class="bs-list-item">
          <div class="book-card " data-id="${a}">
    <div class="image-overlay" data-id="${a}">
    <img class="book-img js-ct" src="${t}" alt="${o} loading="lazy" >
    <div class="image-description" data-id="${a}">
      <p class="image-overlay-description js-ct"> quick view  </p>
     </div>
      </div>
    <h3 class="book-title js-ct">${o}</h3>
    <p class="book-author js-ct"> ${e}</p>
    </div>
    </li>`).join("")}
    </ul>
     `;s.innerHTML=t;let o=document.querySelector(".main-title"),a=o.textContent,i=a.split(" "),r=i[i.length-1];o.innerHTML=a.replace(r,`<span class="brendcolor">${r}</span>`)})(e))}d.addEventListener("click",function(e){let t=e.target.dataset.catname,o=Array.from(c.querySelectorAll("li")),a=o.find(e=>e.innerText===t),i=o.find(e=>"all categories"===e.innerText.toLowerCase());a&&(i.classList.remove("categories__title-active"),a.classList.add("categories__title-active"))}),c.addEventListener("click",function(e){let t=e.target,o=document.querySelector(".categories__title-active");if("LI"===t.tagName){if(o&&o.classList.remove("categories__title-active"),e.target.classList.add("categories__title-active"),"All Categories"===t.textContent.trim())return s.innerHTML="",l();g(t.textContent.trim())}}),u(),i("xpKCW"),i("aNJCr").getBundleURL("EVgbq"),i("iE7OH").resolve("aaLHb"),i("aNJCr").getBundleURL("EVgbq"),i("iE7OH").resolve("cL3Jl"),i("aNJCr").getBundleURL("EVgbq"),i("iE7OH").resolve("jr1cR");var n=i("h6c0i");function f(e){"BUTTON"===e.target.tagName&&g(e.target.dataset.catname),e.target.classList.value.includes("js-ct")&&e.target.parentElement.dataset.id}document.querySelector(".backdrop"),document.querySelector(".modal"),document.querySelector(".modal-shopping-close"),document.querySelector(".render-modal"),document.querySelector(".scroll-btn"),function(){let e=JSON.parse(localStorage.getItem("savedBooks"));e||localStorage.setItem("savedBooks",JSON.stringify([]))}(),window.addEventListener("load",function(){s.addEventListener("click",f)}),i("kvC6y"),i("8VrgS")}();
//# sourceMappingURL=index.648a4dbd.js.map
