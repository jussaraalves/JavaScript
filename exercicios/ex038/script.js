//Json

function alterar() {
  let pessoas = [
    { idade: 25, nome: "Ana" },
    { idade: 22, nome: "Luana" },
  ];

  let texto = "";

  for (let i of pessoas) {
    console.log(i);
    texto += `${i["nome"]} tem ${i["idade"]} anos`;
  }
  console.log(texto);
}
alterar();
