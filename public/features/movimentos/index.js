function ComponentMenu() {
  this.menuItems = [
    { href: "/movimentos", text: "Movimentos", active: false },
    { href: "/categorias", text: "categorias", active: false },
    { href: "/contas", text: "contas", active: false },
  ];

  this.menuItemsList = this.menuItems.map((item) => {
    return new MenuItemComponent(item.href, item.text, item.active).render();
  });

  this.render = () => {
    this.items = this.menuItemsList;
    return `<div class="menu"> ${this.items.map((item) => item)} </div>`;
  };
}

function ComponentAccount() {
  this.accountItems = [
    { name: "Nubank", balance: 100.0 },
    { name: "Itau", balance: 80.0 },
    { name: "Carteira", balance: 30.0 },
    { name: "Santander", balance: 50.0 },
  ];

  this.accountListItems = this.accountItems.map((item) => {
    return new AccountListItemComponent(item.name, item.balance).render();
  });

  this.render = () => {
    this.items = this.accountListItems;
    return `<div class="account-list"> ${this.items.map(
      (item) => item
    )} </div>`;
  };
}

function MovimentosFeature() {
  this.root = document.createElement("div");

  this.render = () => {
    this.root.innerHTML = `
    ${new ComponentMenu().render()}
    ${new ComponentAccount().render()}
    `;

    return this.root.innerHTML;
  };
}
