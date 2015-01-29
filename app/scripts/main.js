/* jshint devel:true */
$(document).ready(function(){
$('#submit').on('click', onSubmitButtonClick);

function onSubmitButtonClick(){
	console.log("Search: " + $('#messagebox').val());
	// var now=timeStamp();

	$.post(
		'https://nameless-dusk-3865.herokuapp.com/users.json',
		{
			message: $('#messagebox').val(),
			user_name: 'chuck',
		}, 
			function(message){
				console.log(message);
				render(message);
			},
			'json'
		);
	$('#messagebox').html('');



}



})
