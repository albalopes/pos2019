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
					//alert("Dados!");
					$("#matricula").val(data.matricula);
				},
				error: function(data){
					alert("Impossível recuperar dados. Você deve fazer login!");
					window.location.href = "login.html";
				}
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
					//alert(data.vinculo.setor_suap);
					$("#usuario-nome_usual").html(data.vinculo.nome);
					$("#usuario-tipo_vinculo").html(data.tipo_vinculo);
					$("#usuario-email").html(data.vinculo.jornada_trabalho);
					$("#id_sua_foto").attr("src", "http://suap.ifrn.edu.br/"+data.url_foto_75x100);
					$("#matricula").val(data.matricula);
				},
				error: function(data){
					alert("Impossível recuperar dados. Você deve fazer login!");
					window.location.href = "login.html";
				}
		});
	});
	
	
	/* COLOQUE AS NOVAS FUNCIONALIDADES AQUI ABAIXO, AINDA DENTRO DO $(document).ready */
		
	$("#botao-disciplinas").click(function(e){
		$.ajax({
				headers: { 
					"Authorization" : "JWT "+sessionStorage.getItem("token")
				},
				url: "https://suap.ifrn.edu.br/api/v2/edu/alunos/carometro/ZN/2019/",
				contentType: 'application/json',
				dataType: 'json',
				type: 'GET',
				success: function (data) {
						$(data).each(function(index, valor){
							console.log(valor.matricula);
						});
				},
				error: function(data){
					alert("Impossível recuperar dados. Você deve fazer login!");
					window.location.href = "login.html";
				}
		});
	});




	$("#botao-diarios").click(function(e){
		$.ajax({
				headers: { 
					"Authorization" : "JWT "+sessionStorage.getItem("token")
				},
				url: "https://suap.ifrn.edu.br/api/v2/minhas-informacoes/meus-diarios/2019/1/",
				contentType: 'application/json',
				dataType: 'json',
				type: 'GET',
				success: function (data) {
					$(data).each(function(indice, diario){
						$("#diarios").append(diario.componente_curricular+"<br/>");
					});				
				},
				error: function(data){
					alert("Impossível recuperar dados. Você deve fazer login!");
					window.location.href = "login.html";
				}
		});
	});
	
	

});

