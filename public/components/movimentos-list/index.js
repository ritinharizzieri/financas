function MovimentosListComponent(rootEl) {
  this.rootEl = rootEl;
  this.el = null;

  this.items = [];

  this.type = "";
  this.value = "";

  this.addItem = (type, value) => {
    const tmp ={
      id: this.items.length,
      value: value,
      type: type
    };
    this.items = this.items.concat(tmp);
    this.update();
  };

  this.removeItem = (item) => {
    this.items = this.items.filter((i) => i.id !== item.id);
    this.update();
  };

  this.bindListeners = () => {
    if (this.items.length === 0) {
      return;
    }
    this.el
      .querySelectorAll(".js-remove-item")
      .forEach((element) => {
        element.addEventListener("click", (e) => {
          const id = +e.target.dataset.id
          const item = this.items.find((i) => i.id === id);
          this.removeItem(item);
      });
    });
  };

  this.render = () => {
    this.el.innerHTML = `
    <!-- lista de movimentos -->
    <div class="movimentos-list">
      ${
        this.items.map((item) => {
          return `
          <!-- um item -->
          <div class="movimentos-list__item js-movimento-list">
            <div class="movimento movimento__type--${item.type}">
              <div class="movimento__type">
              ${item.type == "debito" ? "Débito" : "Crédito"}
              </div>
              <div class="movimento__value"><strong>R$ ${item.value}</strong></div>
              <div class="movimento__description">lorem ipsum dolor</div>          
            </div>
            <div class="movimento__remove js-remove-item" data-id="${item.id}">Remover</div>
          </div>
          <!-- um item fim -->
          `
        }).join('')
      }
    </div>
    <!-- lista de movimentos fim -->
    `;
    console.log(this.type);
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
