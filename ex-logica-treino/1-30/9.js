const arr = [
  { id: 1, nome: "Pedro", ativo: false },
  { id: 2, nome: "João", ativo: false },
  { id: 3, nome: "Leticia", ativo: false },
];

const everyTest = arr.every((u) => u.ativo === false);
console.log(everyTest);

const numbers = [2, 4, 5];
const everyTest2 = numbers.every((n) => n === 2);
console.log(everyTest2);

const numberVazio = [];
const everyTestEmpty = numberVazio.every((u) => u === false);
console.log(everyTestEmpty);

const everyNull = arr.every((u) => u.ativo === null);

console.log(everyNull);
