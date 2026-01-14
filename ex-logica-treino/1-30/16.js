console.log("teste");

setTimeout(() => {
  console.log("Marcos");
}, 1000);

const intervalSetadoTest = setInterval(() => {
  console.log("marcos é isso");
}, 1000);

setInterval(() => {
  clearInterval(intervalSetadoTest);
}, 5000);
