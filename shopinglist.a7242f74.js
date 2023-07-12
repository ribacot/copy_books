function e(e,t,i,s){Object.defineProperty(e,t,{get:i,set:s,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},o={},r=i.parcelRequired7c6;null==r&&((r=function(e){if(e in s)return s[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return s[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},i.parcelRequired7c6=r),r.register("kyEFX",function(t,i){"use strict";e(t.exports,"register",function(){return s},function(e){return s=e}),e(t.exports,"resolve",function(){return o},function(e){return o=e});var s,o,r={};s=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)r[t[i]]=e[t[i]]},o=function(e){var t=r[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),r("kyEFX").register(JSON.parse('{"cJ7wh":"shopinglist.a7242f74.js","1yVwl":"amazon.40ba9165.png","fIBw5":"book.89e7d427.png","fSsri":"book-block.950d06ef.png","lp5u4":"sprite.ee5e019c.svg","axSJb":"IMG_9606 1.8e56c68d.png","9g3C6":"shopinglist.37824bb5.js","9mUMn":"shopinglist.bdeaf84f.js"}')),r("bUb57"),r("ghT7p"),r("dTazW"),r("2shzp");var n={};n=new URL(r("kyEFX").resolve("1yVwl"),import.meta.url).toString();var l={};l=new URL(r("kyEFX").resolve("fIBw5"),import.meta.url).toString();var a={};a=new URL(r("kyEFX").resolve("fSsri"),import.meta.url).toString();var c={};function p(e){return e.map(({_id:e,title:i,book_image:s="./images/book_default/book_default.jpg",author:o,description:r,list_name:p,buy_links:d})=>(r||(r="Sorry, but this book does not have an accessible description. Try reading it on the website of one of the shops"),window.innerWidth<768&&r.length>=25&&(r=r.slice(0,50)+"<span> ...</span>"),`<li class="shopping-list-card"><img class="shopping-list-img" src="${s}" alt="${i}" />
          
            <div class="shopping-list-description-thumb">
              <div >
                <h2 class="title-book shopping-title-book">${i}</h2>
                <h3 class="shopping-list__subtitle ">${p}</h3>
                <p class="description">${r}</p>
              </div>
              <div class="shopping-list-thumb">
                <span class="author">${o.split(",")[0]}</span>
                <ul class="shopping-list-store">
                <li > 
                 <a href="${d.filter(({name:e})=>"Amazon"===e)[0].url}"><img style="height:16px " src="${t(n)}" id="dark-theme-filter" alt="Amazon"/>

</a>
</li>
<li> 
  <a href="${d.filter(({name:e})=>"Apple Books"===e)[0].url}"><img style="height:16px " src="${t(l)}" alt="Apple Books" />
</a>
</li>
<li> 
<a href="${d.filter(({name:e})=>"Bookshop"===e)[0].url}"><img style="height:16px "  src="${t(a)}" alt="logo Book-block" /></a>
</li></ul>
                </div>
              </div>
            </div>
            <button type="button" data-id="${e}" class="shopping-list-btn-del js-trash js-trash-id "><svg class="trash js-trash">
  <use class="js-trash" href="${t(c)}#trash"></use>
</svg> 
</button> 
          </li>
`)).join("")}c=new URL(r("kyEFX").resolve("lp5u4"),import.meta.url).toString();var d=r("bMROy"),u={};function h(e){var t;let{target:i}=e;if(!i.classList.contains("js-trash"))return;let s=null!==(t=i.dataset.id)&&void 0!==t?t:i.closest(".js-trash-id").dataset.id,o=v.findIndex(({_id:e})=>e===s);if(-1!==o){if(v.splice(o,1),localStorage.setItem("savedBooks",JSON.stringify(v)),!v.length)return g();b.innerHTML=p(v)}}function g(){b.innerHTML=`<div class="is-empty">
  <p class="text-empty">This page is empty, add some books and proceed to order.</p>
  <img src="${t(u)}" alt=""/></div>
`,b.removeEventListener("click",h)}u=new URL(r("kyEFX").resolve("axSJb"),import.meta.url).toString();var f=r("bUb57");const b=document.querySelector(".js-list-books");document.querySelector(".home");const m=document.querySelector(".shopping-list");let v=null;window.innerWidth<768?(0,d.isActivePage).call(f.shopListMobEl):(0,d.isActivePage).call(m);try{(v=JSON.parse(localStorage.getItem("savedBooks")))&&v.length?(b.innerHTML=p(v),b.addEventListener("click",h)):g()}catch(e){console.log(e)}r("1MnFF"),r("gjiCh"),r("h8wPa");
//# sourceMappingURL=shopinglist.a7242f74.js.map
