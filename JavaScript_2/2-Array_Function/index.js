const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)
console.log("----------------------------------------\n")

// push: Adiciona um elemento no final do array e devolve o novo tamanho do array
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)
console.log("----------------------------------------\n")

// unshift: Adiciona um elemento no começo do array e devolve o novo tamanho do array
tamanho = arr.unshift("Morgoth")
console.log(arr)
console.log(tamanho)
console.log("----------------------------------------\n")

// pop: Remove um elemento no final do array e devolve o elemento removido
let elementoRemovido = arr.pop()
console.log(arr)
console.log(elementoRemovido)
console.log("----------------------------------------\n")

// shift: Remove um elemento no começo do array e devolve o elemento removido
elementoRemovido = arr.shift()
console.log(arr)
console.log(elementoRemovido)
console.log("----------------------------------------\n")

// includes: Verifica se um certo elemento está presente no array 
let inclui = arr.includes("Gandalf")
console.log(inclui)
inclui = arr.includes("gandalf")
console.log(inclui)
console.log("----------------------------------------\n")

// indexOf: Encontra o índice que possui o elemento indicado, ou -1 caso ele não exista no array
const indice = arr.indexOf("Gandalf")
console.log(indice)
console.log("----------------------------------------\n")

// slice: Copia uma parte do array e devolve a parte copiada sem alterar o array original
const hobbits = arr.slice(0, 4)
// Também pode ser usado com números negativos referenciar o final do array, ou seja, a partir do valor 4
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)
console.log("----------------------------------------\n")

// concat: Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)
console.log(hobbits)
console.log(outros)
console.log("----------------------------------------\n")

// splice: Permite remover elementos em qualquer posição do array e substituir por novos
// Indice, quantos elementos remover, quais adicionar
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento")
console.log(elementosRemovidos)
console.log(sociedade)
console.log("----------------------------------------\n")

// Usando o for para percorrer cada elemento do array
for (let i = 0; i < sociedade.length; i++) {
    const elemento = sociedade[i]
    console.log(elemento + " se encontra na posição " + i)
  }