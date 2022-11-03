// FETCH API requisicoes

function alterar() {
  getText("http://localhost:4200/assets/teste.txt");
}
async function getText(endereco) {
 //aguarde chegar o conteudo do endereco na variavel x
  let x = await fetch(endereco);
 //aguarde e pegue o texto quando tiver completo
  let y = await x.text();
  console.log(y);
}
