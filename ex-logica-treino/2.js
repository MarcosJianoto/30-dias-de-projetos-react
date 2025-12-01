const users = [
  {
    id: 1,
    nome: "PEdro",
    ativo: true,
  },
  {
    id: 2,
    nome: "João",
    ativo: false,
  },
  {
    id: 3,
    nome: "Leticia",
    ativo: true,
  },
];

const usarMap = users.map((user) => {
  if (user.id === 1) {
    return { ...user, ativo: true };
  }
  return user;
});

console.log(usarMap);
