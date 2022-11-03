function consultarCEP(){
    var cep = document.getElementById("cep").value

    var xmlHttpRequest = new XMLHttpRequest();

    var url = "http://cep.la/"+cep;

    xmlHttpRequest.open("GET", url, true);
    xmlHttpRequest.setRequestHeader("Accept", "application/json");

    xmlHttpRequest.onreadystatechange = function(){
        if(xmlHttpRequest.readyState == 3){
            console.log('Carregando o conteúdo');
        }
        if(xmlHttpRequest.readyState == 4){
            console.log('CEP: ' + xmlHttpRequest.responseText);

            var jsonResponse = JSON.parse(xmlHttpRequest.responseText)

            document.getElementById("resultado").innerHTML = 'CEP: ' + jsonResponse.cep + '<br/>'
             + 'UF: ' + jsonResponse.uf + '<br/>' + 'Cidade: ' + jsonResponse.cidade + '<br/>' + 'Bairro: ' 
             + jsonResponse.bairro + '<br/>' + 'Logradouro : ' + jsonResponse.logradouro;
            console.log(jsonResponse)
        }
    }
}