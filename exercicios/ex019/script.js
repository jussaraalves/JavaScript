// Problema "terreno"
// Fazer um programa para ler as medidas da largura e comprimento de um terreno retangular com uma
// casa decimal, bem como o valor do metro quadrado do terreno com duas casas decimais. Em seguida,
// o programa deve mostrar o valor da área do terreno, bem como o valor do preço do terreno, ambos com
// duas casas decimais, conforme exemplo.

function calcular() {
  let largura = document.getElementById("txt-largura").value;
  let comprimento = document.getElementById("txt-comprimento").value;
  let metro = document.getElementById("txt-metro").value;
  let res = document.getElementById("res");
  let area;

  if (largura == 0 || comprimento == 0 || metro == 0) {
    alert("Falta preencher dados!");
  } else {
    area = largura * comprimento;
    metro *= area

    
    res.innerHTML = `Area do terreno = ${area.toFixed(2)} </br>`;
    res.innerHTML += `Preco do terreno = ${metro.toFixed(2)}`;
  }
}
