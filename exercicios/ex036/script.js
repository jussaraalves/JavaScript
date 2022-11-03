let numeros = [];

numeros[0] = solicitaPrimeiroNumero();
numeros[1] = solicitaSegundoNumero();

let resultadoDivisao = divida(numeros);

alert("O resultado da divisao é igual a: " + resultadoDivisao);

function solicitaPrimeiroNumero() {
  let numero1 = prompt("Insira o primeiro número: ");
  if (numero1 < 0) {
    alert("O numero precisa ser inteiro e positivo");
    //Este tipo de retorno, onde a própria funcao é chamada novamente, é conhecida como recursividade
    return solicitaPrimeiroNumero();
  } else {
    return numero1;
  }
}

function solicitaSegundoNumero() {
  let numero2 = prompt("Insira o segundo numero: ");
  if (numero2 < 0) {
    alert("O numero precisa ser inteiro e positivo");
    return solicitaSegundoNumero();
  } else {
    return numero2;
  }
}
//esta funcao recebe como parametro um array - que contem os 2 numeros que desejamos dividir
function divida(numeros) {
  let resultado = 0;

  //os numeros a serem divididos sao acessados através dos indices do array
  resultado = numeros[0] / numeros[1];
  return resultado;
}
