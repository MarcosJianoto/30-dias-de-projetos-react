const arr = [
  { id: 1, nome: "Pedro", ativo: true },
  { id: 2, nome: "João", ativo: true },
  { id: 3, nome: "Leticia", ativo: false },
];

const arrFilter = arr.filter((u) => u.ativo == true).map((u) => u.id);

console.log(arrFilter);

const arrResume = arr.reduce(
  (acc, user) => {
    acc.total += 1;

    if (user.ativo) {
      acc.ativos += 1;
    } else {
      acc.inativos += 1;
    }

    acc.nomes.push(user.nome);

    return acc;
  },
  {
    total: 0,
    ativos: 0,
    inativos: 0,
    nomes: [],
  }
);

console.log(arrResume);
