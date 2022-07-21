window.onload = function(e){
    //alert("aloan")
    let keyMarvel
    e.preventDefault()
    keyMarvel = apiAut()
    //nãoesquecer do "?"
    let url = "https://gateway.marvel.com/v1/public/characters"
    //para teste usaremos o ID a Scarlet Witch - 1009562
    let test = 1011136

    let fullUrl = url + "?limit=51&" + keyMarvel

    let responseIMG = document.getElementById('img-content')
    let responseName = document.getElementById('name-content')
    let responseDescription = document.getElementById('description-content')
    let aux = ''

    fetch(fullUrl)
        .then(resposta => resposta.json())
        .then(function(dadosAPI){
            console.log(dadosAPI)
            //console.log(dadosAPI.data.results[0].name)
            Math
             
            aux = dadosAPI.data.results[Math.floor(Math.random() * 50)]
            console.log(aux)
            
            
            
            console.log(aux.thumbnail.path)
            responseIMG.innerHTML = `<img class='img-control' src='${aux.thumbnail.path}.${aux.thumbnail.extension}' >`    
            responseName.innerHTML = aux.name
            if(aux.description != null){
                responseDescription.innerHTML = aux.description    
            } else{
                responseDescription.innerHTML = "Nothing to show!"
            }

            
            
        })
        .catch(function(error){
            console.log(error)
        })

}

function apiAut(){
    let ts = 1655511747473
    let apikey = "982aa73aea2266c39c2cf93cea695e34"
    let hash = "723a0b0ec0c4050c7d836d82f6019788"

    let fullExpression = `ts=${ts}&apikey=${apikey}&hash=${hash}`
    return fullExpression
}

