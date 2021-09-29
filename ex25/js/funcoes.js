let listaDeCarros = [ "Fox", "Uno", "Gol", "Astra", "Fiesta"]

for(let i = ; i < listaDeCarros.length; i++){
    if(listaDeCarros[i] == "Fox"){
        console.log( "Nome do carro: " + listaDeCarros[i])
        continue
    }else{
        console.log( "Nome do carro: " + listaDeCarros[i] )
    }
}