let nome = "prop"
console.log(nome)

let objeto = { }
objeto.prop = "Olá, mundo!"
console.log(objeto)
console.log(objeto.prop)
console.log(objeto[nome])

let val = objeto.prop === objeto["prop"]
console.log(true)
val = objeto.prop === objeto[nome]
console.log(true)
val = objeto.prop === objeto["pro" + "p"]
console.log(true)

let funcao = "log"
console[funcao]("Teste!")
console[funcao]("Olá, mundo!")
console.log(funcao)

const pessoa = {}
pessoa.nome = "Isaac"
pessoa.idade = 26
console.log(pessoa)

pessoa.colegas = ["Lucas", "Juliana", "Rafael"]
pessoa.endereco = {
rua: "Logo ali",
numero: 42,
barrio: "centro"
}
console.log(pessoa)
