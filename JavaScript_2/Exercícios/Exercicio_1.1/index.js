let array = []
let choice = ""

do {
  let pacientes = ""
  for (let i = 0; i < array.length; i++) {
    pacientes += (i + 1) + "º - " + array[i] + "\n"
  }

  choice = prompt(
    "Pacientes:\n" + pacientes +
    "Escolha o que deseja fazer:\n" +
      "1- Novo paciente\n" +
      "2- Consultar paciente\n" +
      "0- Sair\n"
  );

  switch (choice) {
    case "1":
      const name = prompt("Digite o nome do Paciente: ");
      array.push(name);
      break;
    case "2":
      const first = array.shift();
      if (!first) {
        alert("Não há pacientes na fila!")
      } else {
        alert("Paciente removido da fila: " + first);
      }
      break;
    case "0":
      alert("Finalizando o sistema...");
      break
    default:
      alert("Opção inválida!");
      break;
  }
} while (choice !== "0")
