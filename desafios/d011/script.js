function cadastroPessoa(info){
    let novosDados = {
        ...info,
        cargo: 'Desenvolvedora',
        status: 1,
        codigo: '0253974972'
    }
    return novosDados;
}

console.log(cadastroPessoa({nome: "Jussara", idade: 21, anoInicial: 2023}));

