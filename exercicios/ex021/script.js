/*Requisicoes
XML HTTP REQUEST
*/
function alterar(){
    const request = new XMLHttpRequest();
    //configurando
    request.open('GET', 'http:localhost:4200/assets/test.txt');
    request.onload = () => {
        console.log(request.responseText);
    }
    //enviando
    request.send()
}