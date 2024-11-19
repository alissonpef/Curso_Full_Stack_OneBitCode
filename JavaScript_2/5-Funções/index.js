function ola() {
  console.log("Olá, mundo!");
}
ola();

function dobro() {
  console.log("O dobro de " + x + " é " + x * 2);
}
dobro(2);

function hello(name = "mundo!") {
  console.log("Olá, " + name);
}
hello("Alisson");
hello(); // Como está vazia, ela preenche com o padrão de name

function som(a = 0, b = 0) {
  console.log("A soma é " + (a + b));
}
som(1, 2);
som();

// Ao usar vários parâmetros, é recomendado deixar aqueles com valor padrão por último
function criarUsuario(nome, email, senha, tipo = "user") {
  const usuario = {
    nome, // Objeto nome = Parametro nome
    email,
    senha,
    tipo,
  };
  console.log(usuario);
}
criarUsuario("Alisson", "alisson@email.com", "1234");

// Ao criarmos uma função com muitos parâmetros, uma boa prática é substituí-los por um objeto
function parametrosDoJeitoErrado(
  nome,
  telefone,
  endereco,
  aniversario,
  email,
  senha
) {
  // ...
}
parametrosDoJeitoErrado(
  "nome",
  "telefone",
  "endereco",
  "aniversario",
  "email",
  "senha"
);

function parametrosDoJeitoCerto(usuario) {
  // ...
}
// Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
const dadosDoUsuario = {
  nome: "",
  telefone: "",
  email: "",
  senha: "",
  aniversario: "",
  endereco: "",
};
parametrosDoJeitoCerto(dadosDoUsuario);
