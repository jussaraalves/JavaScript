function contar() {
  let pegarNumeroInicial = document.getElementById("txtinicio")
  let pegarNumeroFinal = document.getElementById("txtfinal")
  let pegarPasso = document.getElementById("txtpasso")
  let resultado = document.getElementById("txtmsg")
  

  if (pegarNumeroInicial.value.length == 0 || pegarNumeroFinal.value.length == 0 || pegarPasso.value.length == 0) {
    resultado.innerHTML = "Impossivel contar!"
  } else {
    resultado.innerHTML = "Contando: <br>";
    let i = Number(pegarNumeroInicial.value);
    let f = Number(pegarNumeroFinal.value);
    let p = Number(pegarPasso.value);

    if(p <= 0){
        window.alert("[ERRO] Passo inavalido considerando PASSO 1"); 
        p = 1
    }

    if( i < f){
        //Contagem crescente
        for (let c = i; c <= f; c += p) {
          resultado.innerHTML += `${c} \u{1F449} `;
        }
    }else{
        //Contagem decrescente
        for(let c = i; c >= f; c -= p){
            resultado.innerHTML += `${c} \u{1F449} `;
        }
    }
    resultado.innerHTML += `\u{1F3C1}`
  }
}
