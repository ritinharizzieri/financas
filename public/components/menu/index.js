// funcao construtora

function MenuItemComponent(href = "", text = "", active = false) {
  this.href = href;
  this.text = text;
  this.active = active;

  this.render = () => {
    return `
      <a href="${this.href}" 
      class="menu__item ${this.active ? "menu__item--active" : ""}">
      ${this.text}</a>      
    `;
  };
}

function MenuComponent(items) {
  this.items = items;
  this.render = () =>
    `<div class="menu">
      ${this.items.map((item) => item.render())}
    </div>`;
}
