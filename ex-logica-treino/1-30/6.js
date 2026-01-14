const users = [
  { id: 1, nome: "Pedro", ativo: true },
  { id: 2, nome: "João", ativo: false },
  { id: 3, nome: "Leticia", ativo: true },
];

const ativos = users.filter((u) => u.ativo === true);

console.log(ativos);

const nomesAtivos = ativos.map((u) => u.nome.toUpperCase());
console.log(nomesAtivos);

const ativosENomes = ativos
  .filter((u) => u.ativo)
  .map((u) => u.nome.toUpperCase());
console.log(ativosENomes);
