let vagas = [];

function executar() {
    let choice = "";

    do {
        choice = menu();
        switch (choice) {
            case "1":
                listarVagas();
                break;
            case "2":
                criarVagas();
                break;
            case "3":
                exibirVaga();
                break;
            case "4":
                inscreverCandidato();
                break;
            case "5":
                excluirVaga();
                break;
            case "0":
                alert("Encerrando o sistema!");
                break;
            default:
                alert("Opção inválida!");
                break;
        }
    } while (choice !== "0");
}

function menu() {
    return prompt(
        "1- Listar vagas disponíveis" +
        "\n2- Criar uma nova vaga" +
        "\n3- Visualizar uma vaga" +
        "\n4- Inscrever um candidato em uma vaga" +
        "\n5- Excluir uma vaga" +
        "\n0 - Sair!"
    );
}

function listarVagas() {
    if (vagas.length === 0) {
        alert("Não há vagas cadastradas!");
        return
    }
    const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
        textoFinal += indice + ". " + vaga.nome + " (" + vaga.candidatos.length + " candidatos)\n";
        return textoFinal;
    }, "");
    alert(vagasEmTexto);
}

function criarVagas() {
    const nome = prompt("Digite o nome da vaga:");
    const descricao = prompt("Digite a descrição da vaga:");
    const dataLimite = prompt("Digite a data (dd/mm/aaaa) limite da vaga:");
    const confirmacao = confirm(
        "As informações estão corretas? (Sim/Não)" +
        "\nNome: " + nome +
        "\nDescrição: " + descricao +
        "\nData limite: " + dataLimite
    );
    if (confirmacao) {
        const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
        vagas.push(novaVaga);
        alert("Vaga criada com sucesso!");
    } else {
        alert("Criação cancelada.");
    }
}

function exibirVaga() {
    const indice = parseInt(prompt("Informe o índice da vaga que deseja exibir:"));
    const vaga = vagas[indice];
    const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => textoFinal + "\n - " + candidato, "")

    alert(
        "Vaga nº " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos:" + candidatosEmTexto
    );
}

function inscreverCandidato() {
    const candidato = prompt("Informe o nome do(a) candidato(a):");
    const indice = parseInt(prompt("Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:"), 10);
    const vaga = vagas[indice];

    const confirmacao = confirm(
        "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    );
    if (confirmacao) {
        vaga.candidatos.push(candidato);
        alert("Inscrição realizada com sucesso!");
    }
}

function excluirVaga() {
    const indice = parseInt(prompt("Informe o índice da vaga que deseja excluir:"));
    const vaga = vagas[indice];
    const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    );
    if (confirmacao) {
        vagas.splice(indice, 1);
        alert("Vaga excluída com sucesso!");
    }
}

executar();
