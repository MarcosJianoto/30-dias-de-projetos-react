const dados = {
  valorInicial: 1000,
  taxaMensal: 2, // 2% ao mês
  dataInicio: "2024-01-10",
  dataFim: "2024-04-25",
};

const { valorInicial, taxaMensal, dataInicio, dataFim } = dados;

const inicio = new Date(dataInicio);
const fim = new Date(dataFim);

const diferencaDias = Math.floor((fim - inicio) / (1000 * 60 * 60 * 24));

const meses = diferencaDias / 30;

const juros = valorInicial * (taxaMensal / 100) * meses;

const total = valorInicial + juros;

console.log("Valor Inicial:", valorInicial);
console.log("Taxa Mensal:", taxaMensal + "%");
console.log("Dias entre as datas:", diferencaDias);
console.log("Meses aproximados:", meses.toFixed(2));
console.log("Juros Calculado:", juros.toFixed(2));
console.log("Valor Final:", total.toFixed(2));
