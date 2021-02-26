function MovimentosItemComponent(
  id = number,
  type = "",
  value = float,
  description = ""
) {
  (this.id = id), (this.type = type);
  this.value = value;
  this.description = description;

  this.render = () => {
    return `
      <div class="movimentos-list__item">
        <div class="movimento">
          <div class="movimento__type movimento__type--${
            this.type == "Despesa" ? "debit" : "credit"
          }">${this.type}</div>
          <div class="movimento__value">R$ ${this.value}</div>
          <div class="movimento__description">${this.description}</div>
        </div>
      </div>
    `;
  };
}

function MovimentosListComponent(items) {
  this.items = items;
  this.render = () => {
    `<div class="movimentos-list">
      ${this.items.map((item) => item.render())}
    </div>`;
  };
}
