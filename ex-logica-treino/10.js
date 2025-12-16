const numbers = [1, 2, 3, 4, 5];

const users = [
  { nome: "Pedro", ativo: true },
  { nome: "João", ativo: false },
  { nome: "Leticia", ativo: true },
];

const somaNumbers = numbers.reduce((acumulador, numeroAtual) => {
  return acumulador + numeroAtual;
}, 5);

console.log(somaNumbers);

const countUsersAtivos = users.reduce((total, user) => {
  return user.ativo ? total + 1 : total;
}, 0);

console.log(countUsersAtivos);
