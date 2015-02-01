$(document).ready(function()	{
$('.submit').on('click', onSubmitButtonClick);

function onSubmitButtonClick()	{
	console.log($('#usernamebox').val());
	console.log($('#messagebox').val());


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
		var messageRow = _.template('<br><div class="row"><div class="onscreenusername"><%= user_name %>: &nbsp;</div><div class="message"><%= message %></div><div class="timestamp"><%= time_stamp %></div></div><br>');
		console.log(messages);
			for(var i=0; i<messages.length; i++) {
			if(messages[i].message && messages[i].user_name && messages[i].time_stamp) {
				$('#chatbox').prepend(messageRow(messages[i]) );
			}
		}
	};

	setInterval( getMessages, 1000);
	
});

