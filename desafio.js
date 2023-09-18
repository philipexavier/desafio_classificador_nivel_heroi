/* # Desafio Classificador de nível de Heróis

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"*/

//Criando varáveis para armazenar o nome e a quantidade de experiência (XP) de um herói
// require importa um modulo externo, nesse caso importa prompt-sync, um pacote npm que permite obter a entrada do usuário de forma síncrona no Node.js
const prompt = require('prompt-sync')();

const nomeHeroi = prompt("Digite o nome do herói: ");
const nivelXP = parseInt(prompt("Digite a quantidade de XP do herói: "));

// Usa uma estrutura de decisão para determinar o nível do herói
let nivelHeroi = '' ; 

if (nivelXP < 1000) {
    nivelHeroi = "Ferro";
} else if (nivelXP >= 1000 && nivelXP <= 2000) {
    nivelHeroi = "Bronze";
} else if (nivelXP >= 2001 && nivelXP <= 5000) {
    nivelHeroi = "Prata";
} else if (nivelXP >= 6001 && nivelXP <= 7000) {
    nivelHeroi = "Ouro";
} else if (nivelXP >= 7001 && nivelXP <= 8000) {
    nivelHeroi = "Platina";
} else if (nivelXP >= 8001 && nivelXP <= 9000) {
    nivelHeroi = "Ascendente";
} else if (nivelXP >= 9001 && nivelXP <= 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";
}

// Exibe uma mensagem com o nome e o nível do herói
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);










