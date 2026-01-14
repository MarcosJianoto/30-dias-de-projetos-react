const saudacao = () => {
  console.log("Olá, seja bem vindo!");
};

saudacao();

const apresentarPessoa = (nome = "Marcos", idade = 15) => {
  console.log("Ola, meu nome é ", nome, "e tenho", idade, "anos");
};

apresentarPessoa();

//calculo de IMC
const calcularIMC = (peso, altura) => {
  return peso / (altura * altura);
};

console.log(calcularIMC(78, 1.78));

//verificar aprovação
const verificarAprovacao = (nota) => {
  if (nota >= 7) {
    console.log("passou");
  } else {
    console.log("reprovado");
  }
};

verificarAprovacao(8);

const ehPar = (n) => {
  if (n % 2 == 0) {
    console.log("numero", n, "é Par");
  } else {
    console.log("numero", n, "n é Par");
  }
};

ehPar(5);
//callback simples

const executarAcao = () => {
  return saudacao();
};

executarAcao();

//fazer pergunta
const respostaParaSerCorreta = "sim";
const fazerPergunta = (pergunta, respostaCorreta) => {
  if (respostaCorreta === respostaParaSerCorreta) {
    console.log(pergunta);
  }
};
fazerPergunta("precisa?", "sim");
