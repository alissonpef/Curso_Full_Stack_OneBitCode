let array = []
let choice = ""
let totalProperties = 0

do {
    let teste = 0
    choice = prompt(
        "Total de imóveis cadastrados: " + totalProperties + "\n" +
        "Escolha umas das seguintes opções:\n" +
        "1. Salvar um imóvel.\n" +
        "2. Mostrar todos imóveis disp0níveis.\n" +
        "0. Sair!\n"
    )

    switch (choice) {
        case "1":
            const object = {}

            object.name = prompt("\nDigite o nome do proprietário: ")
            object.room = parseInt(prompt("\nDigite a quantidade de quartos: "))
            object.bathroom = parseInt(prompt("\nDigite quantidade de banheiros: "))
            object.garage = prompt("\nPossui garagem? (Sim/Não)")

            array.push(object)
            totalProperties++
            break
        case "2":
            for (let i = 0; i < array.length; i++) {
                alert("\Imóvel " + (i + 1) + "!" +
                    "\nNome do proprietário: " + array[i].name +
                    "\nQuantidade de quartos: " + array[i].room +
                    "\nQuantidade de banheiros: " + array[i].bathroom +
                    "\nSe possui garagem:: " + array[i].garage)
            }
            break
        case "0":
            alert("Encerrando o programa!")
            break
        default:
            alert("Opção inválida!")
            break
    }

} while (choice !== "0")