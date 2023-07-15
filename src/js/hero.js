import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
const container = document.querySelector('.container-books');

if (!container.firstChild) {
  getQuery()
    .then(resp => container.insertAdjacentHTML('beforeend', markup(resp)))
    .catch(err => console.log(err));
}

async function getQuery() {
  try {
    console.log('before');
    const resp = await axios(
      `https://books-backend.p.goit.global/books/top-books`
    );
    console.log('11', resp.data);
    return resp.data;
  } catch (err) {
    Notify.warning('Sorry, failed to load information');
  }
}

function markup(data) {
  let html = '';
  data.forEach(el => {
    let catName = el.list_name;
    let list = el.books
      .map(
        ({ book_image, author, title, _id }) =>
          `<li class="bs-list-item" hidden>
        <div class="book-card" data-id="${_id}">
        <div class="image-overlay" data-id="${_id}">
            <img class="book-img js-ct" src="${book_image}" alt="${title}" loading="lazy" />
            <div class="image-description" data-id="${_id}">
      <p class="image-overlay-description js-ct">quick view</p>
     </div>
      </div>
            <h3 class="book-title js-ct">${title}</h3>
            <h4 class="book-author js-ct">${author}</h4>
        </div>
        </li>`
      )
      .join('');
    html += `<div class="category-block">
        <h2 class="cat-title">${el.list_name}</h2>
        <ul class="book-list">${list}</ul>
        <button type="button" class="btn-more" data-catname="${catName}">SEE MORE</button>
    </div>`;
  });

  html = `<h1 class="main-title">Best Sellers <span>Books</span></h1>` + html;
  return html;
}
export { getQuery, container };
