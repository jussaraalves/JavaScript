const a = ["55", "44", "33"];
const b = ["22", "11", "00"];
const c = a.concat(b);

c.sort();
c.reverse();
// c = c.filter((x) => x > 10 && x < 30);

console.log(c.join(" : "));
