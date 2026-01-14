const functionSetTimeOut = () => {
  let dataAtual = new Date();
  let hora = dataAtual.toLocaleDateString();
  console.log(hora);
};

setInterval(() => {
  functionSetTimeOut();
}, 1000);
