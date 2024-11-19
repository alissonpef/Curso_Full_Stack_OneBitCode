const result = prompt("Digite a alternativa correta: \na) \nb) \nc)\n")

switch (result) {
    case "a":
        alert("A alternativa escolhida foi a letra A!")
        break
    case "b":
        alert("A alternativa escolhida foi a letra B!")
        break
    case "c":
        alert("A alternativa escolhida foi a letra C!")
        break
    default:
        alert("A alternativa escolhida não existe.")
        break
}