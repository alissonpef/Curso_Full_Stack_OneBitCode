// Se não explicitarmos qual deve ser a saída da função, sua saída será undefined
function calcularMedia(a, b) {
  const media = (a + b) / 2;
}
const resultado = calcularMedia(5, 9);
console.log(resultado);

function criarProduto(nome, preco) {
  const produto = { nome, preco, estoque: 1 };
  return produto;
}
const notebook = criarProduto("Notebook Intel Core i3 8GB", 3000);
console.log(notebook);
console.log(criarProduto("Smartphone Samsung Galaxy", 1000));

function areaRetangular(base, altura) {
  return base * altura;
}
console.log(areaRetangular(3, 5));

function areaQuadrada(lado) {
  return areaRetangular(lado, lado);
}
console.log(areaQuadrada(8));

// Uma função só pode ter uma saída, depois do return nada é executado
function olaMundo() {
  let texto = "...";
  return texto;
  texto = "Olá, mundo!";
  console.log(texto);
}
console.log(olaMundo());

// Dessa maneira funcionaria
function maioridade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}
console.log(maioridade(20));
console.log(maioridade(13));
