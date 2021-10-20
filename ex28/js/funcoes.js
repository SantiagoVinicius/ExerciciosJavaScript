const quilos = 5.0;

function calcular(){
    var peso = document.getElementById("pesoRoupa").value;
    var resultado = quilos * peso;
    document.getElementById("resultado").innerHTML ="<h2> O valor da sua lavagem é de R$" + resultado + "</h2>";

}