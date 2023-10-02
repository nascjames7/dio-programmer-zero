//Desafio Classificador de Nível de Héroi

//@uthor: James Anderson
//Data: 29 de setembro de 2023

/*

//--------------------------------Instruções------------------------------//

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói.
Depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/

//-----------------------Código do Programa--------------------------------//

//Declaração da variáveis e solicitação da quantidade de experiência do héroi..
let expertise = parseInt(prompt("Digite a quantidade de experiência do nosso héroi: "))

//Implementação do laço para verificar se o dado de entrada são válido.
while(expertise <= 0){
    alert('Esse dado de entrada não é válido. Digite um valor maior que zero!')
    expertise = parseInt(prompt("Digite a quantidade de experiência do nosso héroi: "))
}

let nameHero = prompt("Digite o nome do nosso héroi: ") 

//Implementação da estrututa condicional.
if(expertise <= 1000){
    //Impressão da resposta para este caso específico.
    alert("O Herói de nome " + nameHero + " está no nível de ferro.")
}
if(expertise > 1000 && expertise <= 2000){
    //Impressão da resposta para este caso específico.
    alert("O Herói de nome " + nameHero + " está no nível de bronze.")
}
if(expertise > 2000 && expertise <= 5000){
    //Impressão da resposta para este caso específico.
    alert("O Herói de nome " + nameHero + " está no nível de prata.")
}
if(expertise > 5000 && expertise <= 7000){
    //Impressão da resposta para este caso específico.
    alert("O Herói de nome " + nameHero + " está no nível de ouro.")
}
if(expertise > 7000 && expertise <= 8000){
    //Impressão da resposta para este caso específico.
    alert("O Herói de nome " + nameHero + " está no nível de platina.")
}
if(expertise > 8000 && expertise <= 9000){
    //Impressão da resposta para este caso específico.
    alert("O Herói de nome " + nameHero + " está no nível de ascendente.")
}
if(expertise > 9000 && expertise <= 10000){
    //Impressão da resposta para este caso específico.
    alert("O Herói de nome " + nameHero + " está no nível de imortal.")
}
if(expertise > 10000){
    //Impressão da resposta para este caso específico.
    alert("O Herói de nome " + nameHero + " está no nível de radiante.")
}


