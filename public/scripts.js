// componente movimentos-form
const rootEl = document.querySelector("#root__movimentos-form");
const movimentosForm = new MovimentosFormComponent(rootEl);

movimentosForm.init();
movimentosForm.setTitle("Novo movimento");

// componente movimentos-list
const rootList = document.querySelector("#root__movimentos-list");
const movimentosList = new MovimentosListComponent(rootList);
movimentosList.init();

movimentosForm.onCreditClick = (valorCredito) => {
  console.log(`adicionou um credito de R$ ${valorCredito}`);
  movimentosList.addItem("credito", valorCredito);
};

movimentosForm.onDebitClick = (valorDebito) => {
  console.log(`adicionou um debito de R$ ${valorDebito}`);
  movimentosList.addItem("debito", valorDebito);
};
