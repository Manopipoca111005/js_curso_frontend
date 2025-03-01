let pedidos = [
  { id: 420, nome: 'Gustavo', alimento: 'MX Burger', bebida: 'Compal de Maçã' },
  { id: 152, nome: 'Orlando', alimento: 'OLL Burger', bebida: 'Monster' },
  { id: 29, nome: 'Maia', alimento: 'King Burger', bebida: 'Fanta' },
  { id: 33, nome: 'Friend1', alimento: 'OLX Burger', bebida: 'Monster' },
  { id: 55, nome: 'Friend2', alimento: 'OMG Burger', bebida: 'Cola Zero' },
];

pedidos.forEach((pedido, index) => {
  let { nome, alimento, bebida } = pedido;
  console.log(`${index} - O Cliente: ${nome} fez o pedido do alimento: ${alimento} e a bebida: ${bebida}`);
});