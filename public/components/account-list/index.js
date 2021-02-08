function AccountListItemComponent(name = "", balance = float) {
  this.name = name;
  this.balance = balance;

  this.render = () => {
    return `
      <div class="account-list__item">
        <div class="account">
          <div class="account__name">${this.name}</div>
          <div class="account__balance">R$ ${this.balance}</div>
        </div>
      </div>
    `;
  };
}

function AccountListComponent(items) {
  this.items = items;

  this.render = () => {
    `<div class="account-list">
      ${this.items.map((item) => item.render())}
    </div>`;
  };
}
