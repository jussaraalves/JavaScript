//CLASSES NO JS
function Pessoa(nome, idade){
    this.nome = nome; 
    this.idade = idade;
}

function alterar(){
    let pessoas = [new Pessoa("Ana",25), new Pessoa("Carlos", 45)];
    let texto = ""
    for (let i of pessoas){
        texto += `${i["nome"]} tem ${i["idade"]} anos`
    }
    console.log(texto)
}

alterar()