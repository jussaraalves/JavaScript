function verificar() {
  var data = new Date();
  var ano = data.getFullYear(); //pegar o ano com 4 digitos!
  var formularioAno = document.getElementById("txtano");
  var resultado = document.querySelector("div#res");
  var img = document.createElement("img");
  img.setAttribute("id", "foto");

  //Verificando se o ano ta fazio ou se é maior que o ano atual

  if (formularioAno.value.length == 0 || Number(formularioAno.value) > ano) {
    window.alert("[ERROR] verifique os dados e tente novamente!");
  } else {
    var formularioSex = document.getElementsByName("radsex");
    var idade = ano - Number(formularioAno.value);
    var genero = "";
    if (formularioSex[0].checked) {
      genero = "homem";
      if (idade >= 0 && idade <= 10) {
        //Crianca
        img.setAttribute('src', 'homem-bebe.jpg')
      } else if (idade < 21) {
        //Jovem
        img.setAttribute('src', 'homem-jovem.jpg')
      } else if (idade < 50) {
        //adulto
        img.setAttribute('src', 'homem-adulto.jpg')
      } else {
        //idoso
        img.setAttribute('src', 'homem-idoso.jpg')
      }
    } else if (formularioSex[1].checked) {
      genero = "mulher";
      if (idade >= 0 && idade <= 10) {
        //Crianca
        img.setAttribute('src', 'mulher-bebe.jpeg')
      } else if (idade < 21) {
        //Jovem
        img.setAttribute('src', 'mulher-jovem.jpg')
      } else if (idade < 50) {
        //adulto
        img.setAttribute('src', 'mulher-adulta.jpeg')
      } else {
        //idoso
        img.setAttribute('src', 'mulher-velha.jpeg')
      }
    }
    resultado.style.textAlign = "center";
    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    resultado.appendChild(img) //adicionar um elemento
  }
}
