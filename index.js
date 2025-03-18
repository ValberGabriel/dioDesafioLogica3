class PersonagemNordestino {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  atacar() {
    let ataque;
    if (this.tipo === "Lampião") {
      ataque = "disparou com o rifle";
    } else if (this.tipo === "cangaceiro") {
      ataque = "atacou com um facão";
    } else if (this.tipo === "policial") {
      ataque = "usou uma espingarda";
    } else if (this.tipo === "agiota") {
      ataque = "ameaçou com dívidas";
    } else {
      ataque = "não realizou nenhum ataque conhecido";
    }
    console.log(`O ${this.tipo} (${this.nome}) atacou e ${ataque}`);
  }
}

let personagem1 = new PersonagemNordestino("Lampião", 40, "Lampião");
let personagem2 = new PersonagemNordestino("Zé do Facão", 25, "cangaceiro");
let personagem3 = new PersonagemNordestino("Cabo Almeida", 35, "policial");
let personagem4 = new PersonagemNordestino("Seu Lunga", 50, "agiota");

personagem1.atacar();
personagem2.atacar();
personagem3.atacar();
personagem4.atacar();
