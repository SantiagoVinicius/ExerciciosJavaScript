let dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]

for(let i = 0; i < dias.length; i++){
    if(dias[i] == "Domingo"){
        console.log(dias[i] + " Bom dia! ")
        continue
    }else{
        console.log(dias[i] + " Bom dia!")
    }
}

//segunda forma

for  ( var  contador  =  0 ;  contador  <  7 ;  contador ++ )  {
    console . log ( "Bom dia, grupo!" ) ;
}

