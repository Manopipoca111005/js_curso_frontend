let pedidos = [
  { id: 420, nome: 'Gustavo', alimento: 'MX Burger', bebida: 'Compal de Maçã', preco: 8.99 },
  { id: 152, nome: 'Orlando', alimento: 'OLL Burger', bebida: 'Monster', preco: 10.05 },
  { id: 29, nome: 'Maia', alimento: 'King Burger', bebida: 'Fanta', preco: 8.79 },
  { id: 33, nome: 'Friend1', alimento: 'OLX Burger', bebida: 'Monster', preco: 10.05 },
  { id: 55, nome: 'Friend2', alimento: 'OMG Burger', bebida: 'Cola Zero', preco: 7.59 },
];

let pedido = pedidos.reduce((total, pedido) => {
  let { preco } = pedido;
  return total + preco;
}, 0);

console.log(pedido);
