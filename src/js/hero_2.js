import { markup } from "./hero";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from "axios";
import { container } from "./hero";
export default async function () {
  try {
    console.log('axios_in', axios);

    console.log('befor');
    const resp = await axios.get(
      `https://books-backend.p.goit.global/books/top-books`
    );
    console.log('after');
    container.insertAdjacentHTML('beforeend', markup(resp.data));
  } catch (err) {
    console.log(err);
    Notify.warning('Sorry, failed to load information');
  }
}
