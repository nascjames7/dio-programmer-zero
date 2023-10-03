//Desafio Criando Classe e Objetos em um Jogo

//@uthor: James Anderson
//Data: 02 de outubro de 2023

/*

//--------------------------------Instruções------------------------------//

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja)

Além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

Ao final deve se exibir uma mensagem:

"O {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia 
      guerreiro atacou usando espada
*/

//-----------------------Código do Programa--------------------------------//

//Criação da classe jogador.
class jogador{
    //Construtor da classe jogador.
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo        
    
    }

    //Imprime que o jogador de determinado tipo realizou um ataque de acordo com sua especialidade.
    atacar(){

        //Declaração da variável.
        let tipoDeAtaque = ""
            
        //Implementação da estrutura condicional para verificar o tipo de jogador.
        if(this.tipo == "mago"){
            tipoDeAtaque = "magia"        
        }
        if(this.tipo == "guerreiro"){                
            tipoDeAtaque = "espada"
        }
        if(this.tipo == "monge"){                
            tipoDeAtaque = "artes marciais"
        }
        if(this.tipo == "ninja"){               
            tipoDeAtaque = "shuriken"
        }
            
        console.log(`O ${this.tipo} atacou usando ${tipoDeAtaque}.`) 
    }        
    
}

//Instanciação dos objetos.

//jogador tipo: mago
let magoDeGelo = new jogador("Alexander", 20, "mago")
let magoDeFogo = new jogador("Juan", 27, "mago")
let magoEletrico = new jogador("Christian", 23, "mago")

//jogador tipo: guerreiro
let cavaleiroNegro = new jogador("John", 29, "guerreiro")
let valquiria = new jogador("Tina", 32, "guerreiro")
let principeDourado = new jogador("Walter", 35, "guerreiro")

//jogador tipo: monge
let rambo = new jogador("Jonnathan", 42, "monge")
let vanDame = new jogador("Helian", 70, "monge")
let jetLee = new jogador("Clark", 55, "monge")

//jogador tipo: ninja
let jiraia = new jogador("Anderson", 42, "ninja")
let naruto = new jogador("Kaio", 35, "ninja")
let boruto = new jogador("Kleber", 15, "ninja")

//Usando a função para impressão.
console.log("Uso da função atacar() para impressão: ")
console.log("---------------------------------------")

naruto.atacar()
valquiria.atacar()
magoDeFogo.atacar()
jetLee.atacar()

console.log("---------------------------------------")

/*console.log("Você gostaria da cadastrar mais algum jogador?")
let resposta = input("Se sim, digite (s). Se não, digite (n).")*/








