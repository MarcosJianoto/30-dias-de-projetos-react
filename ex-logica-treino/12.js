const numbers = [1, 2, 3, 4, 5];

const users = [
  { nome: "Pedro", ativo: true },
  { nome: "João", ativo: false },
  { nome: "Leticia", ativo: true },
];

const imprimirNumeros = numbers.map((number) => {
  return number;
});

console.log(imprimirNumeros);

const newArrayDouble = numbers.map((number) => {
  return number * 2;
});

console.log(newArrayDouble);

const newArrayDivisivelPorTres = numbers.map((number) => {
  if (number % 3 === 0) {
    return number;
  }
});

console.log(newArrayDivisivelPorTres);

const newArrayIf3 = numbers.filter((number) => {
  if (number % 3 === 0) {
    console.log(number);
  }
});
