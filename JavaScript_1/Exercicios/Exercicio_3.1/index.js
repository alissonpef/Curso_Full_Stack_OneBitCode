let measure = parseInt(
    prompt("Digite a quantidade que você gostaria de converter: ")
);
const choice = parseInt(
    prompt(
        "Digite para qual unidade voce gostaria de converter: \n1) milímetro (mm \n2) centímetro (cm) \n3) decímetro (dm) \n4) decâmetro (dam) \n5) hectômetro (hm) \n6) quilômetro (km)\n"
    )
);

switch (choice) {
    case 1:
        alert(measure + " metros = " + measure / 1000 + " milímetros");
        break;
    case 2:
        alert(measure + " metros = " + measure / 100 + " centímetros");
        break;
    case 3:
        alert(measure + " metros = " + measure / 10 + " decímetros");
        break;
    case 4:
        alert(measure + " metros = " + measure * 10 + " decâmetros");
        break;
    case 5:
        alert(measure + " metros = " + measure * 100 + " hectômetros");
        break;
    case 6:
        alert(measure + " metros = " + measure * 1000 + " quilômetros");
        break;
    default:
        alert("Opção inválida!");
}
