//Objetos no JavaScript
//Json:
let pessoas = [
  {idade: 25, nome: "Jussara" },
  {idade: 35, nome: "Eduardo" },
];
console.log(pessoas);

//Classe:

class Hospital {
  /*O método constructor é um tipo especial de 
    método para criar e iniciar um objeto criado pela classe.*/
  constructor(nome, idade, cpf) {
    this.nomePaciente = nome;
    this.idadePaciente = idade;
    this.cpfPaciente = cpf;
  }
}

const paciente = new Hospital("Carlas", 35, 09876543210);
console.log(paciente);
