function MovimentosItemComponent(movimento) {
  this.movimento = movimento;

  this.render = () => {
    console.log("render ITEM >", this.movimento);
    return `
      <!-- um item -->
      <div class="movimentos-list__item js-movimento-list">
        <div class="movimento movimento__type--${this.movimento.type}">
          <div class="movimento__type">
          ${this.movimento.type == "debito" ? "Débito" : "Crédito"}
          </div>
          <div class="movimento__value"><strong>R$ ${
            this.movimento.value
          }</strong></div>
          <div class="movimento__description">lorem ipsum dolor</div>          
        </div>
        <div class="movimento__remove js-remove-item" data-id="${
          this.movimento.id
        }">Remover</div>
      </div>
      <!-- um item fim -->
      `;
  };
}
