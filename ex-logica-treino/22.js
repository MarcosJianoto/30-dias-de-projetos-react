const saudacao = () => {
  console.log("Olá, seja bem vindo!");
};

saudacao();

const apresentarPessoa = (nome = "Marcos", idade = 15) => {
  console.log("Ola, meu nome é ", nome, "e tenho", idade, "anos");
};

apresentarPessoa();
