const numbers = [1, 2, 3, 4, 5];

const users = [
  { nome: "Pedro", ativo: true },
  { nome: "João", ativo: false },
  { nome: "Leticia", ativo: true },
];

const arrayName = users.map((u) => u.nome);
console.log(arrayName);

const arrayFilterAtivo = users
  .filter((u) => u.ativo)
  .map((u) => ({
    ...u,
    nome: u.nome.toUpperCase(),
  }));
console.log(arrayFilterAtivo);

const arrayFilterAtivoAndUpperCase = users
  .filter((u) => u.ativo)
  .map((u) => u.nome.toUpperCase());
console.log(arrayFilterAtivoAndUpperCase);

const arrayTeste = users
  .filter((u) => u.ativo)
  .map((u) => ({
    ...u,
    nome: u.nome.toUpperCase(),
  }));

console.log(arrayTeste);
