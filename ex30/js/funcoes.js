function criarCartao(){
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var telefone = document.getElementById("telefone").value;
    var profissao = document.getElementById("profissao").value;
    var email = document.getElementById("email").value;
   document.getElementById("cartao").innerHTML = "<h3>" + nome + " " + sobrenome + "</h3>" +  profissao + "<br>" +  telefone + "<br>" + email;
}