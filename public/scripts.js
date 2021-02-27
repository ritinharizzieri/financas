const rootEl = document.querySelector("#root");

// criar instancia
const movimentosForm = new MovimentosFormComponent(rootEl);

movimentosForm.init();
movimentosForm.setTitle("Novo movimento");
console.log(movimentosForm);

movimentosForm.onCreditClick = (valorCredito) => {
  console.log(`adicionou um credito de R$ ${valorCredito}`);
};

movimentosForm.onDebitClick = (valorDebito) => {
  console.log(`adicionou um debito de R$ ${valorDebito}`);
};
