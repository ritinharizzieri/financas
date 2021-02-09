// Menu
const menuItems = [
  { href: "/movimentos", text: "Movimentos", active: false },
  { href: "/categorias", text: "categorias", active: false },
  { href: "/contas", text: "contas", active: false },
];
const menuItemsList = menuItems.map((item) => {
  return new MenuItemComponent(item.href, item.text, item.active);
});

// Moviment
const movimentosItems = [
  {
    type: "Despesa",
    typeClass: "debit",
    value: 30.0,
    description: "lorem ipsum dolor 1",
  },
  {
    type: "Despesa",
    typeClass: "debit",
    value: 20.0,
    description: "lorem ipsum dolor 2",
  },
  {
    type: "Receita",
    typeClass: "credit",
    value: 10.0,
    description: "lorem ipsum dolor 3",
  },
];
const movimentosItemsList = movimentosItems.map((item) => {
  return new MovimentosItemComponent(
    item.type,
    item.typeClass,
    item.value,
    item.description
  );
});

// Account
const accountItems = [
  { name: "Nubank", balance: 100.0 },
  { name: "Itau", balance: 80.0 },
  { name: "Carteira", balance: 30.0 },
  { name: "Santander", balance: 50.0 },
];
const accountListItems = accountItems.map((item) => {
  return new AccountListItemComponent(item.name, item.balance);
});

// Category
const categoryItems = [
  { name: "Alimentação" },
  { name: "Mercado" },
  { name: "Transporte" },
  { name: "Faculdade" },
];
const categoryListItems = categoryItems.map((item) => {
  return new CategoryListItemComponent(item.name);
});

console.log(categoryListItems);
