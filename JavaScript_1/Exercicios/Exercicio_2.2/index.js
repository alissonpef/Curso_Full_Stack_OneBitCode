const character1 = prompt("Digite o nome do Personagem: ");
const damagePower = parseFloat(prompt("Digite o dano desse Personagem: "));

const character2 = prompt("Digite o nome do outro Personagem: ");
let life = parseFloat(prompt("Digite a vida desse Personagem: "));
const defensePower = parseFloat(
    prompt("Digite o poder de defesa desse Personagem: ")
);
const shield = parseInt(
    prompt("Digite se esse Personagem possui escudo 0- No, 1- Yes: ")
);

let damage = 0;

if (damagePower > defensePower && shield == 0) {
    damage = damagePower - defensePower;
} else if (damagePower > defensePower && shield == 1) {
    damage = (damagePower - defensePower) / 2;
} else {
    damage = 0;
    life -= damage;
}

life -= damage;

alert(character1 + " causou " + damage + " pontos de dano em " + character2);
alert(
    character1 + "\nPoder de ataque: " + damagePower + "\n\n" +
    character2 + "\nPontos de vida: " + life +
    "\nPoder de defesa: " + defensePower + "\nPossui escudo: " + shield
);
