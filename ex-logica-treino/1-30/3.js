const users = [
  { id: 1, nome: "Pedro", ativo: true },
  { id: 2, nome: "João", ativo: false },
  { id: 3, nome: "Leticia", ativo: true },
];

const newUsers = users.map((u) => {
  return { ...u, nome: u.nome.toUpperCase() };
});

console.log(newUsers);

// só tristeza, pqp...

users.forEach((item) => console.log(item.ativo));
