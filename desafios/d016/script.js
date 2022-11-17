/*Métodos: 
    Some: verifica se tem ALGUM, pelo menos 
    um desse cara que a gente ta passando.

    Every: verifica se existe TODOS, ou seja,
    todos precisam passar nessa funcao, senao retorna
    falso.*/

// let Nomes = ['Matheus', 'Lucas', 'Henrique', 'Maria'];
// console.log(nomes.some(nome => nome === 'Maria'));

let nomes = [
  { nome: "Ana", idade: 20 },
  { nome: "Henrique", idade: 18 },
  { nome: "Guilherme", idade: 15 },
];

console.log(nomes.every((nome) => nome.idade >= 18));

if (nomes.every((nome) => nome.idade >= 28)) {
  console.log("TODOS SAO MAIORES DE 18");
} else {
  console.log("OPS! ALGUEM E DE MENOR");
}
