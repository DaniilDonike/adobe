var a = setInterval(function(){
		$('button').click(function() {
		$('#turn').removeClass('contener').addClass('turnwin');
		// $('button').remove();
		$('button').addClass('b');
		$('.alert').removeClass('alert').addClass('alert2');
	});

	$('.button').click(function() {
		$('#turn').removeClass('turnwin').addClass('contener');
		$('button').removeClass('b');
		$('.alert2').removeClass('alert2').addClass('alert');
});
})


