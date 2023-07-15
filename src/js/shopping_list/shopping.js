import { isPagination } from './pagination';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { marcupListBooks } from './marcupListBooks';
import { isActivePage } from '../is-active-page';
import { isEmpty } from './isEmpty';
import { onRemoveCard } from './remuve-card';
import { shopListMobEl, shopListDescEl } from '../header';

const listBooksEl = document.querySelector('.js-list-books');
let books = null;

// оформлення активної сторінки

if (window.innerWidth < 768) {
  isActivePage.call(shopListMobEl);
} else {
  isActivePage.call(shopListDescEl);
}

try {
  books = JSON.parse(localStorage.getItem('savedBooks'));
  if (!books || !books.length) {
    isEmpty();
  } else {
    listBooksEl.innerHTML = marcupListBooks(books);
    isPagination();
    listBooksEl.addEventListener('click', onRemoveCard);
  }
} catch (err) {
  Notify.warning('Sorry, failed to load information');
}

export { listBooksEl, books };
