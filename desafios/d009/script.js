const pessoa = {
  nome: "Jussara",
  sobrenome: "Alves",
  idade: 21,
  cargo: "Desenvolvedor",
};
/*desconstruindo obj */
let { nome } = pessoa;
let { sobrenome } = pessoa;
let { idade, cargo } =  pessoa;
let { cargo:programdor } = pessoa;
console.log(programdor)

/*desconstruindo array */
let nomes = ['Jussara', 'Alves', 12];
let { 1:segundonome } = nomes;
let { 0:primeironome, 2:idade2 } = nomes;
// let [ nome2, sobrenome2, idade3] = nomes;
console.log(segundonome)