// Temporizacao
function acao(){
    document.write("Executando...<br/>")
}

//Executa de tempo em tempo!
//esse setInterval receberá dois parametros: 
// o primeiro sera uma funcao e o segundo é o tempo que ira executar


var timer = setInterval(acao, 1000);

// clearInterval(timer)
// setTimeout(acao, 3000)
