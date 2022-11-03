var frutas = new Array("banana", "laranja", "limao");
frutas.shift();
frutas.splice(1, 1, "Uva");

/*o método splice() altera o conteúdo de uma lista, adicionando 
novos elementos enquanto remove elementos antigos.*/

/*o método shift remove o elemento de índice zero, diminui em 1 os 
indices dos demais valores e retorna o valor removido. */

for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i] + "|");
}
