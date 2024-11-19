let array = [];
let choice = "";

do {
  choice = prompt(
    "Lista de cartas: " +
      array +
      "\n" +
      "Escolha o que deseja fazer:\n" +
      "1- Adicionar uma carta\n" +
      "2- Puxar uma carta\n" +
      "0- Sair\n"
  );

  switch (choice) {
    case "1":
      const card = prompt("Digite o nome da carta: ");
      array.push(" " + card);
      break;
    case "2":
      let tam = array.length;
      if (!tam) {
        alert("Não há nenhuma carta no baralho!");
      } else {
        alert("A  carta puxada foi: " + array[tam - 1]);
      }
      array.pop();
      break;
    case "0":
      alert("Finalizando o sistema...");
      break;
    default:
      alert("Opção inválida!");
      break;
  }
} while (choice !== 0);
