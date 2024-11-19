let money = parseFloat(prompt("Informe a quantidade de dinheiro inicial:"));
let choice = "";

do {
    choice = prompt(
        "Seja bem-vindo(a)!\n" +
        "\nVocê tem um total de " + money + " reais!" +
        "\nVocê tem as seguintes opções: " +
        "\n1 - Adicionar dinheiro!" +
        "\n2 - Remover dinheiro!" +
        "\n0 - Encerar" +
        "\nFaça a sua escolha: "
    );

    switch (choice) {
        case "1":
            money += parseFloat(
                prompt("Digite a quantidade que você deseja adicionar de dinheiro: ")
            );
            break;
        case "2":
            money -= parseFloat(
                prompt("Digite a quantidade que você deseja remover de dinheiro: ")
            );
            break;
        case "0":
            alert("Finalizando o programa!");
        default:
            alert("Entrada inválida!");
    }
} while (choice !== 0);
