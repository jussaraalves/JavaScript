let num = document.querySelector("input#fnum");
let lista = document.querySelector("select#flista");
let res = document.querySelector("div#res");
let valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `O valor ${num.value} foi adicionado.`;
    lista.appendChild(item);
    res.innerHTML = "";
  } else {
    alert("Valor invalido ou já encontrado na linha.");
  }
  num.value = "";
  num.focus();
}

function finalizar() {
  if (valores.length == 0) {
    window.alert("Adicione valores antes de finalizar.");
  } else {
    let totalDeElementos = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;

    for (let i in valores) {
      soma += valores[i];

      if (valores[i] > maior) {
        maior = valores[i];
      }
      if (valores[i] < menor) {
        menor = valores[i];
      }
    }
    media = soma / totalDeElementos;
    res.innerHTML = "";
    res.innerHTML += `<p> Ao todo, temos ${totalDeElementos} numeros cadastrados. </p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
    res.innerHTML += `<p>A média dos valores é ${media}.</p>`;
  }
}
