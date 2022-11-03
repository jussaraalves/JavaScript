let numero1 = Number(prompt("Digite o primeiro numero: "));
let numero2 = Number(prompt("Digite o segundo numero: "));
let operacao = prompt("Qual operacao deseja fazer? Digite( + ou - ou * ou / )");

let resultadoOperacao = calcular(numero1, numero2, operacao);

alert(`O resultado da operacao é igual a ${resultadoOperacao.toFixed(2)}`);

function calcular(numero1, numero2, operacao) {
  let resultado = 0;
  if (operacao == "+") {
    resultado = Number(numero1 + numero2);
    return resultado;
  } else if (operacao == "-") {
    resultado = numero1 - numero2;
    return resultado;
  } else if (operacao == "*") {
    resultado = numero1 * numero2;
    return resultado;
  } else {
    resultado = numero1 / numero2;
    return resultado;
  }
}
