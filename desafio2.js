
/* 

# Desafio Classificador de nível de Heróis

## Objetivo:

Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída:3

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"  

*/

//Criando uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador

function calculadoraRanqueada (qtdVitorias, qtdDerrotas ) {

    //depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
        
        let saldoRanqueada = qtdVitorias - qtdDerrotas;
    
        //Declarando a variável nivelHeroi fora do bloco if
        let nivelHeroi;
    
            //Se vitórias for menor do que 10 = Ferro
            if (saldoRanqueada < 10) {
                nivelHeroi = "Ferro";
            } 
            //Se vitórias for entre 11 e 20 = Bronze
            else if (saldoRanqueada >= 11 && saldoRanqueada <= 20) {
                nivelHeroi = "Bronze";
            } 
            //Se vitórias for entre 21 e 50 = Prata
            else if (saldoRanqueada >= 21 && saldoRanqueada <= 50) {
                nivelHeroi = "Prata";
            } 
            //Se vitórias for entre 51 e 80 = Ouro
            else if (saldoRanqueada >= 51 && saldoRanqueada <= 80) {
                nivelHeroi = "Ouro";
            } 
            //Se vitórias for entre 81 e 90 = Diamante
            else if (saldoRanqueada >= 81 && saldoRanqueada <= 90) {
                nivelHeroi = "Diamante";
            } 
            //Se vitórias for entre 91 e 100= Lendário
            else if (saldoRanqueada >= 91 && saldoRanqueada <= 100) {
                nivelHeroi = "Lendário";
            } 
            //Se vitórias for maior ou igual a 101 = Imortal
            else {
                nivelHeroi = "Imortal";
            } 
    
        //Retornando o resultado da função como um objeto
        return {saldoRanqueada: saldoRanqueada, nivelHeroi: nivelHeroi};
    }
    
    // Ao final deve se exibir uma mensagem:
    
    //Usando console.log para mostrar a mensagem na tela, acessando os valores do objeto retornado pela função
    console.log(`O Herói tem de saldo de **${calculadoraRanqueada(10 , 5).saldoRanqueada}** está no nível de **${calculadoraRanqueada(10 , 5).nivelHeroi}**`);