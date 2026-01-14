const users = [
  { id: 1, nome: "Pedro", ativo: null },
  { id: 2, nome: "João", ativo: null },
  { id: 3, nome: "Leticia", ativo: null },
];

const userFind = users.find((u) => u.id === 2);
console.log(userFind);

const temAtivo = users.some((u) => u.ativo === null);
console.log(temAtivo);

const temInativo = users.some((u) => !u.ativo);
console.log(temInativo);

const userFind2 = users.find((u) => u.nome === "Leticia");
console.log(userFind2);

const userExiste = users.find((u) => u.nome === "João");
console.log(userExiste);

if (!userExiste) {
  console.log("nao encontrado");
} else {
  console.log("encontrado");
}
