const numbers = [1, 2, 3, 4, 5];

const users = [
  { nome: "Pedro", ativo: true },
  { nome: "João", ativo: false },
  { nome: "Leticia", ativo: true },
];

const numbersPar = numbers.filter((num) => num % 2 === 0);
console.log(numbersPar);

const numbers2 = [1, 2, 4, 5, 6];

//percorrer numeros => forEach
//Criar novo array => map
//filtrar => filter
// fazer tudo ao mesmo tempo => reducer
//find procura 1
//some => ve se tem algum

const forEach = numbers2.forEach((number) => {
  console.log(number);
});

const numberDouble = numbers2.map((n) => n * 2);
console.log(numberDouble);

const numberMaiorQue3 = numbers2.filter((n) => {
  if (n > 3) {
    return n;
  }
});

console.log(numberMaiorQue3);

const mapAndFilterCombination = numbers2
  .filter((u) => u >= 2)
  .map((u) => u * 2);
console.log(mapAndFilterCombination);
