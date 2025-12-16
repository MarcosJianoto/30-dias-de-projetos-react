const numbers = [1, 2, 3, 4, 5];

const users = [
  { nome: "Pedro", ativo: true },
  { nome: "João", ativo: false },
  { nome: "Leticia", ativo: true },
];

const usersInactive = users.reduce((total, user) => {
  return !user.ativo ? total + 1 : total;
}, 0);

console.log(usersInactive);

const usersSumActiveAndInactive = users.reduce(
  (acc, user) => {
    if (user.ativo) {
      acc.ativos += 1;
    } else {
      acc.inativos += 1;
    }
    return acc;
  },
  {
    ativos: 0,
    inativos: 0,
  }
);

console.log(usersSumActiveAndInactive);
