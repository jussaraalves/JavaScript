/* Spread operator - juntar as infos*/
const pessoa = {
    nome: "Jussara",
    sobrenome: "Alves",
    idade: 21,
    cargo: "Desenvolvedor",
};

const novaPessoa = {
    ...pessoa,
    anoAtual: 2022,
    cidade: "Belo Jardim",
    estado: "PE"
}

console.log(novaPessoa)