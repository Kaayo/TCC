

var nome;

function fecha() {
	$('#show').hide();
}


function abre() {
   $('#show').show();
}

function nova(elemento) {
	if (elemento.value == 'S') {
		$('input').val('SIM');
	}
	if (elemento.value == 'N') {
		$('input').val('NÃO');
	}
	fecha(); 
}