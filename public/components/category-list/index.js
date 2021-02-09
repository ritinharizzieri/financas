function CategoryListItemComponent(name = "") {
  this.name = name;

  this.render = () => {
    return `
      <div class="category-list__item">
        <div class="category">
          <span class="category__name">${this.name}</span>
        </div>
      </div>
    `;
  };
}

function CategoryListComponent(items) {
  this.items = items;

  this.render = () => {
    `<div class="category-list">
      ${this.items.map((item) => item.render())}
    </div>`;
  };
}
