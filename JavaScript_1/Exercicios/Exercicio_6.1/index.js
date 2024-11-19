let number = parseInt(prompt("Digite o número que deseja calcular a tabuada: "))
let result = ""


for (let cont = 1; cont <= 20; cont++) {
    result += " - "
    result +=  number * cont
}

alert("O resultado foi: " + result)