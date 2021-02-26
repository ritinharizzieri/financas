function MovimentosFormButtonsComponent(type = "") {
  this.type = type;

  this.render = () => {
    return `    
      <button type="button" class="movimento-form__button movimento-form__button--${
        this.type == "Débito" ? "debit" : "credit"
      }">
        ${this.type}
      </button>      
    `;
  };
}

function MovimentosFormComponent(items) {
  this.items = items;
  this.render = () => {
    `<div class="movimento-form__buttons">
        ${this.items.map((item) => item.render())}
      </div>`;
  };
}
