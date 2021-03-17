function MovimentosListComponent(rootEl) {
  this.rootEl = rootEl;
  this.el = null;

  this.items = [];

  this.type = "";
  this.value = "";

  this.addItem = (type, value) => {
    // cria uma nova instancia de MovimentoItemComponent
    const tmp = new MovimentosItemComponent(this.el, {
      id: this.items.length,
      value: value,
      type: type,
    });
    tmp.init();
    this.items = this.items.concat(tmp);
  };

  this.removeItem = (item) => {
    this.items = this.items.filter((i) => i.id !== item.id);
    this.update();
  };

  this.bindListeners = () => {
    if (this.items.length === 0) {
      return;
    }
    this.el.querySelectorAll(".js-remove-item").forEach((element) => {
      element.addEventListener("click", (e) => {
        const id = +e.target.dataset.id;
        const item = this.items.find((i) => i.id === id);
        this.removeItem(item);
      });
    });
  };

  this.render = () => {
    this.el.innerHTML = '';
    this.items.forEach((item) => item.update());
    this.rootEl.appendChild(this.el);
  };

  this.update = () => {
    this.render();
    this.bindListeners();
  };

  this.init = () => {
    this.el = document.createElement("div");
    this.el.classList.add('movimentos-list');
    this.update();
  };
}
