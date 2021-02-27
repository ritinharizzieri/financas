// componente movimentos-form
const rootEl = document.querySelector("#root");
const movimentosForm = new MovimentosFormComponent(rootEl);

movimentosForm.init();
movimentosForm.setTitle("Novo movimento");
console.log(movimentosForm);

// componente movimentos-list
const rootList = document.querySelector("#root-list");
const movimentosList = new MovimentosListComponent(rootList);

movimentosForm.onCreditClick = (valorCredito) => {
  console.log(`adicionou um credito de R$ ${valorCredito}`);
  movimentosList.setItem("credito", valorCredito);
  movimentosList.init();
  console.log(movimentosList);
};

movimentosForm.onDebitClick = (valorDebito) => {
  console.log(`adicionou um debito de R$ ${valorDebito}`);
};
