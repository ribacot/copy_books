function t(t,e,o,a){Object.defineProperty(t,e,{get:o,set:a,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},i=e.parcelRequired7c6;null==i&&((i=function(t){if(t in o)return o[t].exports;if(t in a){var e=a[t];delete a[t];var i={id:t,exports:{}};return o[t]=i,e.call(i.exports,i,i.exports),i.exports}var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){a[t]=e},e.parcelRequired7c6=i),i.register("kyEFX",function(e,o){"use strict";t(e.exports,"register",function(){return a},function(t){return a=t}),t(e.exports,"resolve",function(){return i},function(t){return i=t});var a,i,s={};a=function(t){for(var e=Object.keys(t),o=0;o<e.length;o++)s[e[o]]=t[e[o]]},i=function(t){var e=s[t];if(null==e)throw Error("Could not resolve bundle with id "+t);return e}}),i("kyEFX").register(JSON.parse('{"5ZPII":"index.06d5276f.js","1yVwl":"amazon.40ba9165.png","fIBw5":"book.89e7d427.png","fSsri":"book-block.950d06ef.png","gR0Wf":"shopinglist.c5bfe204.js","9UbnX":"shopinglist.b6bd88aa.js"}')),i("bUb57"),i("ghT7p");var s=i("2shzp"),l=i("iQIUW");const n=document.querySelector(".container-books");async function r(){try{var t;let e;let o=await (0,s.default).get("https://books-backend.p.goit.global/books/top-books ");n.insertAdjacentHTML("beforeend",(t=o.data,e="",t.forEach(t=>{e+=`<div class="category-block">
        <h2 class="cat-title">${t.list_name}</h2>
        <ul class="book-list">${t.books.map(({book_image:t,author:e,title:o,_id:a})=>`<li class="bs-list-item" hidden>
        <div class="book-card" data-id="${a}">
        <div class="image-overlay" data-id="${a}">
            <img class="book-img js-ct" src="${t}" alt="${o}" loading="lazy" />
            <div class="image-description" data-id="${a}">
      <p class="image-overlay-description js-ct">quick view</p>
     </div>
      </div>
            <h3 class="book-title js-ct">${o}</h3>
            <h4 class="book-author js-ct">${e}</h4>
        </div>
        </li>`).join("")}</ul>
        <button type="button" class="btn-more" data-catname="${t.list_name}">SEE MORE</button>
    </div>`}),e='<h1 class="main-title">Best Sellers <span>Books</span></h1>'+e))}catch(t){console.log(t),(0,l.Notify).warning("Sorry, failed to load information")}}n.firstChild||r();var l=i("iQIUW"),s=i("2shzp");const c=document.querySelector(".category-list"),d=document.querySelector(".container-books");async function u(){try{let t;let e=await (0,s.default).get("https://books-backend.p.goit.global/books/category-list");t=e.data.map(({list_name:t})=>`<li class = "category-list-item"> ${t} </li>`).join(""),t='<li class = "category-list-item"> All Categories </li>'+t,c.innerHTML=t}catch(t){console.log(t),(0,l.Notify).warning("Sorry, failed to load information")}}async function g(t){await (0,s.default).get(`https://books-backend.p.goit.global/books/category?category=${t}`).then(({data:t})=>(function(t){let e=`
    <h2 class ="main-title">${t[0].list_name}</h2>
    <ul class="book-list">${t.map(({author:t,book_image:e,title:o,_id:a})=>`<li class="bs-list-item">
          <div class="book-card " data-id="${a}">
    <div class="image-overlay" data-id="${a}">
    <img class="book-img js-ct" src="${e}" alt="${o} loading="lazy" >
    <div class="image-description" data-id="${a}">
      <p class="image-overlay-description js-ct"> quick view  </p>
     </div>
      </div>
    <h3 class="book-title js-ct">${o}</h3>
    <p class="book-author js-ct"> ${t}</p>
    </div>
    </li>`).join("")}
    </ul>
     `;n.innerHTML=e;let o=document.querySelector(".main-title"),a=o.textContent,i=a.split(" "),s=i[i.length-1];o.innerHTML=a.replace(s,`<span class="brendcolor">${s}</span>`)})(t))}d.addEventListener("click",function(t){let e=t.target.dataset.catname,o=Array.from(c.querySelectorAll("li")),a=o.find(t=>t.innerText===e),i=o.find(t=>"all categories"===t.innerText.toLowerCase());a&&(i.classList.remove("categories__title-active"),a.classList.add("categories__title-active"))}),c.addEventListener("click",function(t){let e=t.target,o=document.querySelector(".categories__title-active");if("LI"===e.tagName){if(o&&o.classList.remove("categories__title-active"),t.target.classList.add("categories__title-active"),"All Categories"===e.textContent.trim())return n.innerHTML="",r();g(e.textContent.trim())}}),u(),i("dTazW"),new URL(i("kyEFX").resolve("1yVwl"),import.meta.url).toString(),new URL(i("kyEFX").resolve("fIBw5"),import.meta.url).toString(),new URL(i("kyEFX").resolve("fSsri"),import.meta.url).toString();var l=i("iQIUW");function f(t){"BUTTON"===t.target.tagName&&g(t.target.dataset.catname),t.target.classList.value.includes("js-ct")&&t.target.parentElement.dataset.id}document.querySelector(".backdrop"),document.querySelector(".modal"),document.querySelector(".modal-shopping-close"),document.querySelector(".render-modal"),document.querySelector(".scroll-btn"),function(){let t=JSON.parse(localStorage.getItem("savedBooks"));t||localStorage.setItem("savedBooks",JSON.stringify([]))}(),window.addEventListener("load",function(){n.addEventListener("click",f)}),i("gjiCh"),i("h8wPa");
//# sourceMappingURL=index.06d5276f.js.map
