const car1 = prompt("Digite o nome do carro 1: ")
const velCar1 = parseFloat(prompt("Digite a velocidade do carro 1: "))
const car2 = prompt("Digite o nome do carro 2: ")
const velCar2 = parseFloat(prompt("Digite a velocidade do carro 2: "))

if (velCar1 > velCar2) {
    alert("O " + car1 + " é mais rapido que o " + car2 + ".")
} else if (velCar2 > velCar1){
    alert("O " + car2 + " é mais rapido que o " + car1 + ".")
} else {
    alert("Os dois carros tem a mesma velocidade!")
}
