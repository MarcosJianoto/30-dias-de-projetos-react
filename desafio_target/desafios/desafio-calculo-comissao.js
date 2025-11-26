import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const caminhoJSON = join(__dirname, "../json/1-calculo-de-comissao.json");
const vendas = JSON.parse(readFileSync(caminhoJSON, "utf-8"));

const totalPorVendedor = {};

for (const { vendedor, valor } of vendas.vendas) {
  if (valor >= 100) {
    totalPorVendedor[vendedor] = (totalPorVendedor[vendedor] || 0) + valor;
  }
}

for (const vendedor in totalPorVendedor) {
  const total = totalPorVendedor[vendedor];
  const comissao = total * 0.05;
  console.log(`${vendedor}: R$ ${comissao.toFixed(2)}`);
}
