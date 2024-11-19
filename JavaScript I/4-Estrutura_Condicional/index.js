const idade = prompt("Digite a sua idade: ")

if (idade >= 18) {
    alert("Voce é maior de idade!")
} else if (idade <= 8) {
    alert("Voce é criança!")
} else {
    alert("Voce é menor de idade!")
}

// Terniario = const resultado = condicao ? resultado_verdadeiro : resultado_falso