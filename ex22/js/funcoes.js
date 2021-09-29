let familia = ["Joana", "Felipe", "Gabriela", "Carlos", "Pedro", "Bruno"]

for(let i = 0; i < familia.length; i++){
    if(familia[i] == "Pedro"){
        console.log(familia[i] + " Sousa")
        continue
    }else{
        console.log(familia[i] + " Macedo")
    }
}