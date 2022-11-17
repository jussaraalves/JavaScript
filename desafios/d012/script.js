
/* Rest operator*/
function cadastrar(usuarios, ...novosUsuarios){
    let totalUsuarios = [
        ...usuarios,
        ...novosUsuarios
    ];

    return console.log(totalUsuarios);
}

let usuarios = ["Mathues", "Joao"];

let novosUsuarios = cadastrar(usuarios, "Henrique", "Lucas");