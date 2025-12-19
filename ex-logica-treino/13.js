const numbers = [1, 2, 3, 4, 5];

const users = [
  { nome: "Pedro", ativo: true },
  { nome: "João", ativo: false },
  { nome: "Leticia", ativo: true },
];

const numbersPar = numbers.filter((num) => num % 2 === 0);
console.log(numbersPar);
