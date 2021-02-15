function ComponentMenu() {
  this.menuItems = [
    { href: "/movimentos", text: "Movimentos", active: false },
    { href: "/categorias", text: "categorias", active: false },
    { href: "/contas", text: "contas", active: false },
  ];

  this.menuItemsList = menuItems.map((item) => {
    return new MenuItemComponent(item.href, item.text, item.active).render();
  });

  this.render = () => {
    this.items = this.menuItemsList;
    return `<div class="menu"> ${this.items.map((item) => item)} </div>`;
  };
}

function MovimentosFeature() {
  this.root = document.createElement("div");

  this.render = () => {
    this.root.innerHTML = `
    ${new ComponentMenu().render()}`;

    return this.root.innerHTML;
  };
}
