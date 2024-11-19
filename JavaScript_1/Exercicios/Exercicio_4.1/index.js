const name = prompt("Digite o nome do turista: ")
let citys = ""
let cont = 0

let choice = prompt("O " + name + " já visitou alguma cidade? (sim/não)")

while (choice === "sim") {
    let city = prompt("Digite o nome da cidade: ")
    citys += " - " + city + "\n"
    cont++
    choice = prompt("O " + name + " já visitou alguma cidade? (sim/não)")
}

alert("O " + name + " visitou " + cont + " cidades, que são elas: \n" + citys)