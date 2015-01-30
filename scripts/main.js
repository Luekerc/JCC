$(document).ready(function()	{
$('#submit').on('click', onSubmitButtonClick);

function onSubmitButtonClick()	{
	console.log($('#usernamebox').val());
	console.log($('#messagebox').val());
	// var now=timeStamp();

	$.post(
		'https://nameless-dusk-3865.herokuapp.com/users.json',
		{
			user: {
				message: $('#messagebox').val(),
				user_name: $('#usernamebox').val(),
				}
		}, 
			function(message){
				console.log(message);
				render(message);
			},
			'json'
		);
	$('#messagebox').val('');
	$('#usernamebox').val('');




}
	var getMessages = function() {
		$.get(
			'https://nameless-dusk-3865.herokuapp.com/users.json',
			function(messages) {
				render(messages);
			},
			'json'
		);
	};

	var render = function(messages) {
		var messageRow = _.template('<br><div class="row"><div><strong><%= user_name %></strong></div><div><%= message %></div></div>');
		console.log(messages);
			for(var i=0; i<messages.length; i++) {
			if(messages[i].message && messages[i].user_name) {
				$('#chatbox').append(messageRow(messages[i]) );
			}
		}
	};

	setInterval( getMessages, 1000);
	
});

