function MovimentosListComponent(rootEl) {
  this.rootEl = rootEl;
  this.el = null;
  this.type = "";
  this.value = "";

  this.setItem = (type, value) => {
    this.type = type;
    this.value = value;
  };

  this.bindListeners = () => {
    this.el.querySelector(".js-remove-item").addEventListener("click", () => {
      this.el.querySelector(".js-remove-item").parentElement.remove();
    });
  };

  this.render = () => {
    this.el.innerHTML = `
    <div class="movimentos-list">
      <div class="movimentos-list__item js-movimento-list">
        <div class="movimento">
          <div class="movimento__type movimento__type--${this.type}">${this.type}</div>
          <div class="movimento__value">${this.value}</div>
          <div class="movimento__description">lorem ipsum dolor</div>          
        </div>
        <div class="movimento__remove js-remove-item">Remover</div>
      </div>
    </div>
    `;
    this.rootEl.appendChild(this.el);
  };

  this.update = () => {
    this.render();
    this.bindListeners();
  };

  this.init = () => {
    this.el = document.createElement("div");
    this.update();
  };
}

/*
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
*/
