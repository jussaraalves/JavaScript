
function getApiGitHub(){
    let url = `https://api.github.com/users/jussaraalves`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let dadosConvertidos = data
            console.log(dadosConvertidos)
            document.getElementById("login").innerText = `Login: ${dadosConvertidos.login}`
            document.getElementById("id").innerText = `Id: ${dadosConvertidos.id}`
            document.getElementById("followers").innerText = `Followers: ${dadosConvertidos.followers}`
            document.getElementById("location").innerText = `Location: ${dadosConvertidos.location}`
            document.getElementById("twitter_username").innerText = `Twitter: ${dadosConvertidos.twitter_username}`
            document.getElementById("location").innerText = `Location: ${dadosConvertidos.location}`
            
        })

}
 getApiGitHub()
