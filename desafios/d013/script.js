/*Operação em Array

map : serve para percorrer todos os itens do array
e retornar algo que a gente quer fazer

reduce : soma todos os itens da lista 
pegando o total e somando com o proximo, 
total comeca com 0 e o proximo seria o 1

find : acha algum item dentro da lista de uma forma muito
facil, so passando qual o item por exemplo*/

const lista = [1, 2, 3, 4, 5, 6];

const novaLista = lista.map(function (item, index) {
  return item + index;
});

console.log(novaLista);

const soma = lista.reduce(function (total, proximo) {
  return total + proximo;
});

console.log("SOMA = ", soma);

const find = lista.find(function(item){
    return item === 6
});

console.log("EXISTE ESSE ITEM NA LISTA! ", find);