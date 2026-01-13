const user = {
  name: "Marc",
  age: 15,
  ativo: true,
};

const cloneUser = { ...user, ativo: false };
console.log(cloneUser);

console.log(user);
