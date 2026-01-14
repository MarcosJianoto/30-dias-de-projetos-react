const arr = [
  { id: 1, nome: "Pedro", ativo: true },
  { id: 2, nome: "João", ativo: true },
  { id: 3, nome: "Leticia", ativo: false },
];

const newArr = arr.map((u) => u.nome.toUpperCase());

console.log(newArr);
