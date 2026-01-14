const numbers = [1, 2, 3, 4, 5];

const users = [
  { nome: "Pedro", ativo: true },
  { nome: "João", ativo: false },
  { nome: "Leticia", ativo: true },
];

const filter = users.filter((n) => n.ativo == true);
console.log(filter);

const newArray = users.map((n) => n.nome.toUpperCase());
console.log(newArray);

const newArrayDouble = numbers.filter((n) => n % 2 === 0).map((n) => n * 2);
console.log(newArrayDouble);

const reduceTest = numbers.reduce((acc, num) => {
  return acc + num;
});
console.log(reduceTest);
