let choice = "";

do {
  choice = menu();

  switch (choice) {
    case "1":
      triangle();
      break;
    case "2":
      rectangle();
      break;
    case "3":
      square();
      break;
    case "4":
      trapeze();
      break;
    case "5":
      circle();
      break;
    case "0":
      alert("Finalizando o sistema!");
      break;
    default:
      alert("Opção inválida!");
      break;
  }
} while (choice !== "0");

function menu() {
  return prompt(
    "Faça sua escolha:" +
      "\n1- Área do triângulo" +
      "\n2- Área do retângulo" +
      "\n3- Área do quadrado" +
      "\n4- Área do trapézio" +
      "\n5- Área do círculo" +
      "\n0- Sair"
  );

  return choice;
}
function triangle() {
  const base = parseFloat(prompt("Digite a base do triângulo: "));
  const height = parseFloat(prompt("Digite a altura do triângulo: "));
  alert("A área do triângulo é: " + (base * height) / 2);
}

function rectangle() {
  const base = parseFloat(prompt("Digite a base do retângulo: "));
  const height = parseFloat(prompt("Digite a altura do retângulo: "));
  alert("A área do retângulo é: " + base * height);
}

function square() {
  const side = parseFloat(prompt("Digite o lado do quadrado: "));
  alert("A área do quadrado é: " + side * side);
}

function trapeze() {
  const smallerBase = parseFloat(prompt("Digite a base menor do trapézio: "));
  const largerBase = parseFloat(prompt("gite a base maior do trapézio: "));
  const height = parseFloat(prompt("Digite a altura do trapézio: "));
  alert("A área do trapézio é: " + (largerBase + smallerBase) * (height / 2));
}

function circle() {
  const radius = parseFloat(prompt("Digite o raio do círculo: "));
  const pi = 3.14;
  alert("A área do círculo é: " + pi * (radius * radius));
}
