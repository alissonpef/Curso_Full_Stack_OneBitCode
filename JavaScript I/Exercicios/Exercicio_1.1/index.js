let name = prompt("Digite seu nome: ")
let  lastName = prompt("Digite seu sobrenome: ")
let fieldOfStudy = prompt("Digite seu campo de estudo: ")
let year = prompt("Digite o seu ano de nascimento: ")

alert(
    "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " + name + " " + lastName +
    "\nCampo de estudo: " + fieldOfStudy +
    "\nIdade: " + (2024 - year)
  )

