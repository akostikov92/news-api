/** @format */

class TitleBar extends HTMLElement {
  constructor() {
    super();
    this.title = 'Bad News';
    this.innerHTML = `
      <img src="images/menu-24px.svg" />
      <h1>Bad News!</h1>

    `;
  }
}

customElements.define('title-bar', TitleBar);
