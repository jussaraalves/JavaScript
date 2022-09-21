function carregar() {
  var mensagem = document.getElementById("mensagem");
  var imagem = document.getElementById("imagem");
  var dataAtual = new Date();
  var horaAtual = dataAtual.getHours();


  mensagem.innerHTML = `Agora são ${horaAtual} horas`;

  if (horaAtual >= 0 && horaAtual < 12) {
    imagem.src = 'manha.jpg';
    document.body.style.background = "#C2D1D4";
  } else if (horaAtual >= 12 && horaAtual <= 18) {
    imagem.src = 'tarde.jpg';
    document.body.style.background = "#FA963D";
  } else {
    imagem.src = 'noite.jpg' ;
    document.body.style.background = "#0C080D";
  }
}
