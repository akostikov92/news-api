/** @format */

class NewsArticle extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
  }

  set article(article) {
    this.root.innerHTML = `
      <style>
     h2 {
      font-family: 'Montserrat';
      font-weight: 400;
      color: rgb(50 150 255);
      font-size: 1rem;
    }

     a,
     a:visited {
      text-decoration: none;
      color: rgb(255 153 255);
      font-size: 0.8rem;
      font-weight: 300;
    }

     img {
      width: 100%;
    }

    p {
      color: rgb(150 150 150);
      font-size: 0.8rem;
    }
  </style>
        <a href="${article.url}">
        <h2>${article.title}</h2>
        <img id="image" src="${article.urlToImage || ''}">
      </a>
      <span>
        <p>${article.description || ''}</p>
        <a href="${article.url}">Read More...</a>
      </span><br>
      <hr>
      `;
  }
}

customElements.define('news-article', NewsArticle);
