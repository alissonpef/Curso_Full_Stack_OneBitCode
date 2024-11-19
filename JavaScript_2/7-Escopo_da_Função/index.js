// Variáveis no escopo mais externo podem ser usadas dentro de escopos mais internos
let pokemon = "Charmander";
function evoluir() {
  pokemon = "Charmeleon";
}
console.log(pokemon);
evoluir();
console.log(pokemon);

// Variáveis no escopo mais interno não podem ser usadas fora dele em escopos mais internos
function criarAnimal() {
  let animal = "Gato";
}
criarAnimal();
console.log(animal); // Erro

// Apenas variáveis declaradas com var ficam disponíveis em um escopo mais externo
function avaliarNota(nota) {
  if (nota > 60) {
    var aprovado = true;
    let situacao = "Aprovado";
  } else {
    var aprovado = false;
    let situacao = "Reprovado";
  }

  console.log(nota);
  console.log(aprovado); // Não era para printar, mas da por conta do Var no If/else
  console.log(situacao); // Erro
}
avaliarNota(83);
avaliarNota(49);

// Mesmo o var não consegue "sair" para fora do escopo da função
function ola() {
  var texto = "Olá, mundo!";
}
console.log(texto); // Erro

// Apenas variáveis declaradas com var são carregadas sempre no começo do código, acima de todo o resto
console.log(nome); // Var sempre inicia no começo do código, porém com undefined
console.log(sobrenome); // Erro
var nome = "Alisson";
let sobrenome = "Pereira";
console.log(nome);
console.log(sobrenome);
