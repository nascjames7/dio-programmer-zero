//Desafio Calculadora de Partidas Rankeadas

//@uthor: James Anderson
//Data: 29 de setembro de 2023

/*

//--------------------------------Instruções------------------------------//

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas).

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal


Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/

//-----------------------Código do Programa--------------------------------//

//Declaração da variáveis e solicitação da quantidade de experiência do héroi..
let numeroDeVitorias = parseInt(prompt("Digite a quantidade de vitórias do nosso héroi: "))
let numeroDeDerrotas = parseInt(prompt("Digite a quantidade de derrotas do nosso héroi: "))
let saldoDePartidasRankeadas = (numeroDeVitorias - numeroDeDerrotas)

//Implementação da estrututa condicional.
if(saldoDePartidasRankeadas <= 10){
    //Impressão da resposta para este caso específico.
    alert("O Herói tem saldo de " + saldoDePartidasRankeadas + " está no nível de Ferro.")
}
                if(saldoDePartidasRankeadas > 10 && saldoDePartidasRankeadas <= 20){
                    //Impressão da resposta para este caso específico.
                    alert("O Herói tem saldo de " + saldoDePartidasRankeadas + " e está no nível de Bronze.")
                }
                if(saldoDePartidasRankeadas > 20 && saldoDePartidasRankeadas <= 50){
                    //Impressão da resposta para este caso específico.
                    alert("O Herói tem saldo de " + saldoDePartidasRankeadas + " e está no nível de Prata.")
                }
                if(saldoDePartidasRankeadas > 50 && saldoDePartidasRankeadas <= 80){
                    //Impressão da resposta para este caso específico.
                    alert("O Herói tem saldo de " + saldoDePartidasRankeadas + " e está no nível de Ouro.")
                }
                if(saldoDePartidasRankeadas > 80 && saldoDePartidasRankeadas <= 90){
                    //Impressão da resposta para este caso específico.
                    alert("O Herói tem saldo de " + saldoDePartidasRankeadas + " e está no nível de Diamante.")
                }
                if(saldoDePartidasRankeadas > 90 && saldoDePartidasRankeadas <= 100){
                    //Impressão da resposta para este caso específico.
                    alert("O Herói tem saldo de " + saldoDePartidasRankeadas + " e está no nível de Lendário.")
                }            
                if(saldoDePartidasRankeadas > 100){
                    //Impressão da resposta para este caso específico.
                    alert("O Herói tem saldo de " + saldoDePartidasRankeadas + " e está no nível de Imortal.")
                }

