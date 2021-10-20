const quilos = 3.0;
const valorFixo = 10.00;

function valorNovo(){
    var peso = document.getElementById("pesoRoupa").value;
    var resultado = quilos * peso + valorFixo;
    document.getElementById("resultado").innerHTML ="<h2>O valor da sua lavagem é de R$" + resultado + "</h2>";

}