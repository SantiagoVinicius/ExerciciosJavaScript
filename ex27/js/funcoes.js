function calcularValores(){
    var quantidadeDeCombustivel = document.getElementById("quantidadeDeCombustivel").value;
    var rendimento = document.getElementById("rendimento").value;
    var resultado = quantidadeDeCombustivel * rendimento;
    document.querySelector("#resultado").innerHTML = "<h2>A autonomia do automóvel é de " + resultado + "</h3>";
}