$(document).ready(function(){
	$('ul.tabs li a:first').addClass('active');
	$('.secciones article').hide();
	$('.secciones article:first').show();

	$('ul.tabs li a').click(function(){
		$('ul.tabs li a').removeClass('active');
		$(this).addClass('active');
		$('.secciones article').hide();//se oculta cada vez que hay click

		var activeTab=$(this).attr('href');//neuva variable cuyo valor es el atributo
		$(activeTab).show();
		return false;
	});
});	