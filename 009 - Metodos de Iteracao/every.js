let pedidos = [
  { id: 152, nome: 'Orlando', alimento: 'OLL Burger', bebida: 'Monster' },
  { id: 33, nome: 'Friend1', alimento: 'OLX Burger', bebida: 'Monster' },
];

let pedido = pedidos.every(pedido => {
  let { bebida } = pedido;
  return bebida == "Monster";
});

console.log(pedido);