let listaDeGanhos = [10, 30, -10, -5, -1, 40]
let totalNegativos = 0

//seu loop aqui:
for(let i = 0; i< listaDeGanhos.length; i++){
    if(listaDeGanhos[i] < 0){
        totalNegativos++;
        console.log(totalNegativos)
    }
}