$(document).ready(function(){
	$("#botao-login").click(function(e){
    e.preventDefault();
    
	//Aqui são buscados os dados dos campos de login e senha informados pelo usuário no arquivo login.html
    var username = $("#login").val();
    var password = $("#senha").val();
    
	//Os dados de login e senha são transformados em formato JSON
    var dadosjson = JSON.stringify({"username": username, "password":password});
    
	
	//Usando AJAX para acessar a API do SUAP
    $.ajax({
		//Endereço do serviço para obter a autenticação do usuário
        url: "https://suap.ifrn.edu.br/api/v2/autenticacao/token/", 
        dataType: 'json',
        data: dadosjson,
        type: 'POST',
        contentType: 'application/json',
        success: function (data) { 
            sessionStorage.setItem("token", data.token); //Armazenando o token na seção
			window.location.href="dados.html"; //Redirecionando para a página dados.html
        },
        error: function(data){
            alert("Impossível recuperar dados");
        }
    });

});


$("#botao-meusdados").click(function(e){
	$.ajax({
		headers: { 
			"Authorization" : "JWT "+sessionStorage.getItem("token")
		},
        url: "https://suap.ifrn.edu.br/api/v2/minhas-informacoes/meus-dados/",
        contentType: 'application/json',
		dataType: 'json',
        type: 'GET',
        success: function (data) {
            $("#usuario-nome_usual").html(data.vinculo.nome);
            $("#usuario-tipo_vinculo").html(data.tipo_vinculo);
            $("#usuario-email").html(data.email);
        },
        error: function(data){
            alert("Impossível recuperar dados. Você deve fazer login!");
			window.location.href = "login.html";
        }
    });
});

$("#botao-sair").click(function(e){
	sessionStorage.removeItem("token");
	window.location.href="login.html";
});
});
