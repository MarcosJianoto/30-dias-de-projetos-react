const arr = [
  {
    nome: "Pedro",
    email: "pedro@teste.com",
    ativo: true,
  },
  {
    nome: "Marcos",
    email: "marcos@teste.com",
    ativo: false,
  },
  {
    nome: "Ana",
    email: "ana@teste.com",
    ativo: true,
  },
  {
    nome: "Carla",
    email: "carla@teste.com",
    ativo: false,
  },
  {
    nome: "João",
    email: "joao@teste.com",
    ativo: true,
  },
];

const ativos = arr.filter((user) => user.ativo == true);
console.log(ativos);
