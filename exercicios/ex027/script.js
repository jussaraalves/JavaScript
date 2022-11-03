let animes = ["chainsaw man", "blue lock", "naruto", "one piece"]
let text = ""

for(let i = 0; i < animes.length; i++){
    text += animes[i] + "<br>" 
}
document.getElementById("res").innerHTML = `${text}`