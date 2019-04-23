$(document).ready(function(){
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
		
		
	$("#botao-sair").click(function(e){
		sessionStorage.removeItem("token");
		window.location.href="login.html";
	});

		
});

