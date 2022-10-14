let num = [5, 7, 9, 0, 2];
num.push(1);
num.sort();
console.log(num);
console.log(`O vetor tem ${num.length} pisições!`);
console.log(`Primeiro valor do vertor ${num[0]}`);
let pos = num.indexOf(7);
if (pos == -1) {
  console.log("O valor nao encontrado!");
} else {
  console.log(`O valor está na posiçao ${pos}`);
}
