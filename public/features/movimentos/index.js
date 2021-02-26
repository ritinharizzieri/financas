function MovimentosFeature() {
  this.root = document.createElement("div");

  this.movimentosItems = [
    {
      id: 1,
      type: "Despesa",
      value: 30.0,
      description: "lorem ipsum dolor 1",
    },
    {
      id: 2,
      type: "Despesa",
      value: 20.0,
      description: "lorem ipsum dolor 2",
    },
    {
      id: 3,
      type: "Receita",
      value: 10.0,
      description: "lorem ipsum dolor 3",
    },
  ];

  this.movimentosItemsList = this.movimentosItems.map((item) => {
    return new MovimentosItemComponent(
      item.id,
      item.type,
      item.value,
      item.description
    ).render();
  });

  this.movimentosButtonsItens = [{ type: "Débito" }, { type: "Crédito" }];

  this.movimentosButtonsForm = this.movimentosButtonsItens.map((item) => {
    return new MovimentosFormButtonsComponent(item.type).render();
  });

  this.render = () => {
    this.itemsList = this.movimentosItemsList;
    this.buttonsForm = this.movimentosButtonsForm;

    this.root.innerHTML = `
    <div class="movimento-form">
      <div class="form-field">
        <label class="form-field__label">Valor</label>
        <input type="text" class="form-field__input" />
        ${this.buttonsForm.map((item) => item)}
      </div> 
    </div>     
    <div class="movimentos-list">
      ${this.itemsList.map((item) => item)}
    </div>
    `;

    return this.root.innerHTML;
  };
}
