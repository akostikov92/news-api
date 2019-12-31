/** @format */

class NewsArticle extends HTMLElement {
  set article(article) {
    this.innerHTML = `
        <a href="${article.url}">
        <h2>${article.title}</h2>
        <img id="image" src="${article.urlToImage || ''}">
      </a>
      <span>
        <p>${article.description || ''}</p><br>
        <a href="${article.url}">Read More...</a>
      </span>
      `;
  }
}

customElements.define('news-article', NewsArticle);
