import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import crypto from "crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const caminhoJSON = join(__dirname, "../json/2-movimentaca-de-estoque.json");
const dados = JSON.parse(readFileSync(caminhoJSON, "utf-8"));

function movimentarEstoque(codigoProduto, quantidade, descricao) {
  const produto = dados.estoque.find((p) => p.codigoProduto === codigoProduto);
  if (!produto) return console.log("Produto não encontrado.");

  const idMovimentacao = crypto.randomUUID();

  produto.estoque += quantidade;

  writeFileSync(caminhoJSON, JSON.stringify(dados, null, 2));

  console.log("Movimentação registrada:");
  console.log("ID:", idMovimentacao);
  console.log("Descrição:", descricao);
  console.log("Produto:", produto.descricaoProduto);
  console.log("Estoque Final:", produto.estoque);
}

movimentarEstoque(101, +20, "Entrada de novas canetas");
movimentarEstoque(102, -10, "Saída para venda");
