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
				//alert(JSON.stringify(data));
				sessionStorage.setItem("token", data.token); //Armazenando o token na seção
				window.location.href="dados.html"; //Redirecionando para a página dados.html
			},
			error: function(data){
				alert(data.responseJSON.detail);
				//alert(JSON.stringify(data));
			}
		});

	});

	$("#botao-sair").click(function(e){
		sessionStorage.removeItem("token");
		window.location.href="login.html";
	});

});
