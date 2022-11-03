const numeros = ["5", "6", "8", "10"];

const mult = numeros.map((x) => x * 5);
const soma = numeros.reduce((x, y) => x + y);

console.log(mult);
console.log(soma);
