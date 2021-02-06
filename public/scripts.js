const menuItems = [
  { href: "/movimentos", text: "Movimentos", active: false },
  { href: "/categorias", text: "categorias", active: false },
  { href: "/contas", text: "contas", active: false },
];

const menuItemsList = menuItems.map((item) => {
  return new MenuItemComponent(item.href, item.text, item.active);
});

/*
const movimentoLinkComponent = new MenuItemComponent(
  "movimentos",
  "Movimentos",
  false
);
*/
console.log(menuItemsList);
