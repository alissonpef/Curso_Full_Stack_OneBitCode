let word = prompt("Digite uma palavra: ")
let newWord = ""

for (let cont = word.length - 1; cont >= 0; cont--) {
newWord += word[cont]
}

if (newWord === word) {
    alert("A palavra é um palíndromo!")
} else {
    alert("A palavra não é um palíndromo!\n\n" + word + " !== " + newWord)
}