function MovimentosItemComponent(rootEl, item) {
  this.rootEl = rootEl;
  this.el = null;

  this.item = item;

  this.bindListeners = () => {}

  this.render = () => {
    this.el.innerHTML = `
      <!-- um item -->
      <div class="movimentos-list__item js-movimento-list">
        <div class="movimento movimento__type--${this.item.type}">
          <div class="movimento__type">
          ${this.item.type == "debito" ? "Débito" : "Crédito"}
          </div>
          <div class="movimento__value"><strong>R$ ${
            this.item.value
          }</strong></div>
          <div class="movimento__description">lorem ipsum dolor</div>          
        </div>
        <div class="movimento__remove js-remove-item" data-id="${
          this.item.id
        }">Remover</div>
      </div>
      <!-- um item fim -->
      `;
    this.rootEl.appendChild(this.el);
  };

  this.update = () => {
    this.render();
    this.bindListeners();
  }

  this.init = () => {
    this.el = document.createElement('div');
    this.update();
  }
}
