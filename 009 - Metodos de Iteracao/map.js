let pedidos = [
  { id: 420, nome: 'Gustavo', alimento: 'MX Burger', bebida: 'Compal de Maçã' },
  { id: 152, nome: 'Orlando', alimento: 'OLL Burger', bebida: 'Monster' },
  { id: 29, nome: 'Maia', alimento: 'King Burger', bebida: 'Fanta' },
  { id: 33, nome: 'Friend1', alimento: 'OLX Burger', bebida: 'Monster' },
  { id: 55, nome: 'Friend2', alimento: 'OMG Burger', bebida: 'Cola Zero' },
];

pedidos.map(pedido => {
  if (pedido.alimento == "OLX Burger") {
    return (pedido.alimento = 'Não temos no momento');
  }
});

console.log(pedidos)