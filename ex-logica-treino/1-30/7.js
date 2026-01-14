const users = [
  { id: 1, nome: "Pedro", ativo: true },
  { id: 2, nome: "João", ativo: false },
  { id: 3, nome: "Leticia", ativo: true },
];

const userFilterAtivoFalse = users.filter((u) => !u.ativo).map((u) => u.nome);
console.log(userFilterAtivoFalse);
