function MovimentosFormComponent(rootEl) {
  this.rootEl = rootEl;
  this.el = null;

  this.title = "";
  this.value = "";

  this.onDebitClick = () => {};
  this.onCreditClick = () => {};

  this.setTitle = (newTitle) => {
    this.title = newTitle;
    this.update();
  };

  this.setValue = (value) => {
    this.value = value;
    this.update();
  };

  /*
   * bindListeners()
   * Cria eventListener para elementos internos
   */
  this.bindListeners = () => {
    this.el.querySelector(".js-button-debit").addEventListener("click", () => {
      this.onDebitClick(this.value);
      this.setValue("");
    });

    this.el.querySelector(".js-button-credit").addEventListener("click", () => {
      this.onCreditClick(this.value);
      this.setValue("");
    });
    this.el.querySelector(".js-input").addEventListener("input", (event) => {
      this.value = +event.target.value;
    });
  };

  /*
   * render()
   * Atualiza o html do component
   */
  this.render = () => {
    this.el.innerHTML = `
      <div class="movimento-form">
        <h3 class="movimento-form__title">${this.title}</h3>
        <div class="form-field">
          <label class="form-field__label">Valor</label>
          <input type="text" value="${this.value}" class="form-field__input js-input">
        </div>
        <div class="movimento-form__buttons">
          <button type="button" class="movimento-form__button movimento-form__button--debit js-button-debit">Débito</button>
          <button type="button" class="movimento-form__button movimento-form__button--credit js-button-credit">Crédito</button>
        </div>
      </div>
    `;
    this.rootEl.innerHTML = "";
    this.rootEl.appendChild(this.el);
  };

  /*
   * update()
   * Executa o render() e o bindListeners()
   */
  this.update = () => {
    this.render();
    this.bindListeners();
  };

  /*
   * init()
   * Executa o update() pela primeira vez
   */
  this.init = () => {
    this.el = document.createElement("div");
    this.update();
  };
}
