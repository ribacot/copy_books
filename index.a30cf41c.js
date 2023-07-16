let e;function t(e,t,o,i){Object.defineProperty(e,t,{get:o,set:i,enumerable:!0,configurable:!0})}function o(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},s={},n=i.parcelRequired7c6;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in s){var t=s[e];delete s[e];var o={id:e,exports:{}};return a[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){s[e]=t},i.parcelRequired7c6=n),n.register("kyEFX",function(e,o){"use strict";t(e.exports,"register",function(){return i},function(e){return i=e}),t(e.exports,"resolve",function(){return a},function(e){return a=e});var i,a,s={};i=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)s[t[o]]=e[t[o]]},a=function(e){var t=s[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),n("kyEFX").register(JSON.parse('{"5ZPII":"index.a30cf41c.js","1yVwl":"amazon.40ba9165.png","fIBw5":"book.89e7d427.png","fSsri":"book-block.950d06ef.png","koEk5":"shopinglist.fd3ec694.js","4gxZA":"shopinglist.65a92f2d.js"}')),n("bUb57"),n("ghT7p");var l=n("2shzp"),r=n("iQIUW"),l=n("2shzp"),r=n("iQIUW");const c=document.querySelector(".container-books");async function d(){try{var e;let t;console.log("before");let o=await (0,l.default).get("https://books-backend.p.goit.global/books/top-books ");console.log("after"),c.insertAdjacentHTML("beforeend",(e=o.data,t="",e.forEach(e=>{t+=`<div class="category-block">
        <h2 class="cat-title">${e.list_name}</h2>
        <ul class="book-list">${e.books.map(({book_image:e,author:t,title:o,_id:i})=>`<li class="bs-list-item" hidden>
        <div class="book-card" data-id="${i}">
        <div class="image-overlay" data-id="${i}">
            <img class="book-img js-ct" src="${e}" alt="${o}" loading="lazy" />
            <div class="image-description" data-id="${i}">
      <p class="image-overlay-description js-ct">quick view</p>
     </div>
      </div>
            <h3 class="book-title js-ct">${o}</h3>
            <h4 class="book-author js-ct">${t}</h4>
        </div>
        </li>`).join("")}</ul>
        <button type="button" class="btn-more" data-catname="${e.list_name}">SEE MORE</button>
    </div>`}),t='<h1 class="main-title">Best Sellers <span>Books</span></h1>'+t))}catch(e){(0,r.Notify).warning("Sorry, failed to load information")}}c.firstChild||d();const u=document.querySelector(".category-list"),g=document.querySelector(".container-books");async function m(e){await (0,l.default).get(`https://books-backend.p.goit.global/books/category?category=${e}`).then(({data:e})=>(function(e){let t=`
    <h2 class ="main-title">${e[0].list_name}</h2>
    <ul class="book-list">${e.map(({author:e,book_image:t,title:o,_id:i})=>`<li class="bs-list-item">
          <div class="book-card " data-id="${i}">
    <div class="image-overlay" data-id="${i}">
    <img class="book-img js-ct" src="${t}" alt="${o} loading="lazy" >
    <div class="image-description" data-id="${i}">
      <p class="image-overlay-description js-ct"> quick view  </p>
     </div>
      </div>
    <h3 class="book-title js-ct">${o}</h3>
    <p class="book-author js-ct"> ${e}</p>
    </div>
    </li>`).join("")}
    </ul>
     `;bookCard.innerHTML=t;let o=document.querySelector(".main-title"),i=o.textContent,a=i.split(" "),s=a[a.length-1];o.innerHTML=i.replace(s,`<span class="brendcolor">${s}</span>`)})(e))}g.addEventListener("click",function(e){let t=e.target.dataset.catname,o=Array.from(u.querySelectorAll("li")),i=o.find(e=>e.innerText===t),a=o.find(e=>"all categories"===e.innerText.toLowerCase());i&&(a.classList.remove("categories__title-active"),i.classList.add("categories__title-active"))}),u.addEventListener("click",function(e){let t=e.target,o=document.querySelector(".categories__title-active");if("LI"===t.tagName){if(o&&o.classList.remove("categories__title-active"),e.target.classList.add("categories__title-active"),"All Categories"===t.textContent.trim())return bookCard.innerHTML="",d();m(t.textContent.trim())}}),n("dTazW");var b={};b=new URL(n("kyEFX").resolve("1yVwl"),import.meta.url).toString();var f={};f=new URL(n("kyEFX").resolve("fIBw5"),import.meta.url).toString();var p={};p=new URL(n("kyEFX").resolve("fSsri"),import.meta.url).toString();var r=n("iQIUW");const v=document.querySelector(".backdrop"),k=document.querySelector(".modal"),y=document.querySelector(".modal-shopping-close"),h=document.querySelector(".render-modal"),S=document.querySelector(".scroll-btn");function _(){v.classList.remove("active"),k.classList.remove("active"),S.classList.remove("visually-hidden"),document.body.style.overflow="auto"}async function L(e){try{let t=`https://books-backend.p.goit.global/books/${e}`,o=await fetch(t);if(!o.ok)throw Error(`Error: ${o.status} ${o.statusText}`);let i=await o.json();return[i]}catch(e){(0,r.Notify).warning("Sorry, failed to load information")}}const E=()=>{let e=document.querySelector(".darkFilterModal");"dark"===localStorage.getItem("theme")?e.classList.add("filter-img"):e.classList.remove("filter-img")};async function w(t){try{S.classList.add("visually-hidden"),h.innerHTML="";let i=await L(t);e=i[0]._id,function(e){let t=e.map(e=>`
        <div class="card-modal" id="${e._id}">
        <img
          class="modal-img"
          alt="${e.title}"
          src="${e.book_image}"
        />
  
        <div class="thumb-modal">
          <h2 class="book-title-in-modal">${e.title}</h2>
          <p class="subtitle-book">${e.author}</p>
          <p class="text book">
          ${e.description?e.description:"Sorry, but this book does not have an accessible description. Try reading it on the website of one of the shops"}
          </p>
          <ul class="shop-list">
            <li>
              <a href="${e.buy_links[0].url}" target="_blank">
                <img src="${o(b)}" alt="Amazon" class="darkFilterModal"/>
              </a>
            </li>
            <li>
              <a href="${e.buy_links[1].url}" target="_blank">
                <img src="${o(f)}" alt="Apple Books" />
              </a>
            </li>
            <li>
              <a href="${e.buy_links[4].url}" target="_blank">
                <img src="${o(p)}" alt="Bookshop" />
              </a>
            </li>
          </ul>
        </div>
      </div>
        `).join("");h.insertAdjacentHTML("beforeend",t)}(i),E(),function(e){let t=JSON.parse(localStorage.getItem("savedBooks"));if(t.some(t=>t._id===e)){let e=`
      <button type="submit" class="button book" aria-label="Remove from shopping">
        Remove from the shopping list
      </button>
      <p class="congratulation">
        Сongratulations! You have added the book to the shopping list. To delete,
        press the button “Remove from the shopping list”.
      </p>
    `;h.insertAdjacentHTML("beforeend",e);let t=document.querySelector(".button.book");JSON.parse(localStorage.getItem("userLogin"))||(t.disabled=!0,t.textContent="Login please"),t.addEventListener("click",H)}else{let e=`
      <button type="submit" class="button book" aria-label="Add to shopping">
        Add to shopping list
      </button>
    `;h.insertAdjacentHTML("beforeend",e);let t=document.querySelector(".button.book");JSON.parse(localStorage.getItem("userLogin"))||(t.disabled=!0,t.textContent="Login please"),t.addEventListener("click",j)}}(e)}catch(e){(0,r.Notify).warning("Sorry, failed to load information")}}async function $(e){try{let t=await L(e),{_id:o,book_image:i,title:a,list_name:s,description:n,author:l,buy_links:r}=t[0],c=JSON.parse(localStorage.getItem("savedBooks"))||[];c.push({_id:o,book_image:i,title:a,list_name:s,description:n,author:l,buy_links:r}),localStorage.setItem("savedBooks",JSON.stringify(c))}catch(e){(0,r.Notify).warning("Sorry, failed to load information")}}function j(t){$(e),_(),T()}function H(t){!function(e){let t=JSON.parse(localStorage.getItem("savedBooks")),o=t.findIndex(t=>t._id===e);-1!==o&&t.splice(o,1),localStorage.setItem("savedBooks",JSON.stringify(t))}(e),_(),T()}function T(){let e=document.querySelector(".button.book");e.removeEventListener("click",H),e.removeEventListener("click",j)}function q(e){e.target===v&&(_(),N())}function x(e){_(),N()}function I(e){"Escape"===e.key&&(_(),N())}function N(){v.removeEventListener("click",q),document.removeEventListener("keydown",I),y.removeEventListener("click",x)}function A(e){let t;"BUTTON"===e.target.tagName&&m(e.target.dataset.catname),e.target.classList.value.includes("js-ct")&&(t=e.target.parentElement.dataset.id),t&&(w(t),v.classList.add("active"),k.classList.add("active"),document.body.style.overflow="hidden",v.addEventListener("click",q),document.addEventListener("keydown",I),y.addEventListener("click",x))}!function(){let e=JSON.parse(localStorage.getItem("savedBooks"));e||localStorage.setItem("savedBooks",JSON.stringify([]))}(),window.addEventListener("load",function(){c.addEventListener("click",A)}),n("gjiCh"),n("h8wPa");
//# sourceMappingURL=index.a30cf41c.js.map
