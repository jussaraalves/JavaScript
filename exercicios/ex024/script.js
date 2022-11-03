let numero1 = prompt("Insira o primeiro numero: ");
let numero2 = prompt("Insira o segundo numero: ");

let resultadoDivisao = divida(numero1, numero2).toFixed(2);

alert(`O resultado da divisao é igual a: ${resultadoDivisao}`);
function divida(numero1, numero2) {
  var resultado = 0;

  resultado = numero1 / numero2;

  return resultado;
}
