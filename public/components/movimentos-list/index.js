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
      this.el
        .querySelector(".js-remove-item")
        .parentElement.parentElement.remove();
    });
  };

  this.render = () => {
    this.el.innerHTML = `
    <div class="movimentos-list">
      <div class="movimentos-list__item js-movimento-list">
        <div class="movimento movimento__type--${this.type}">
          <div class="movimento__type">
          ${this.type == "debito" ? "Débito" : "Crédito"}
          </div>
          <div class="movimento__value"><strong>R$ ${this.value}</strong></div>
          <div class="movimento__description">lorem ipsum dolor</div>          
        </div>
        <div class="movimento__remove js-remove-item">Remover</div>
      </div>
    </div>
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
