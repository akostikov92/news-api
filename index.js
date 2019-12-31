/** @format */
import './news-article.js';
import './title-bar.js';
import { topHeadlinesUrl } from './newsApi.js';

window.addEventListener('load', () => {
  fetchNews();
});

async function titleBar() {
  const header = document.querySelector('header');
  const el = document.createElement('title-bar');
  header.appendChild(el);
}

async function fetchNews() {
  const res = await fetch(topHeadlinesUrl);
  const json = await res.json();
  console.log(json);

  const main = document.querySelector('main');

  json.articles.forEach(article => {
    const el = document.createElement('news-article');
    el.article = article;
    main.appendChild(el);
  });
}
