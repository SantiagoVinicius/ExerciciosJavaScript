let listaDeFrutas = [ "Uva", "Banana", "Manga", "Cajá", "Pinha"];
let busca = "Maça";

for(var i = 0; i < listaDeFrutas.length; i++){
    if(listaDeFrutas[i] == busca){
    console.log("Sim, temos a fruta " + busca + " disponível!");
    }else{
        console.log("No momento não temos a fruta " + busca + " disponível");
    }
}
    