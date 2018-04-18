function run()
{
	var socket = io();
	var data = {};
	data.Company=document.getElementById('Company').value;
	data.Position=document.getElementById('Position').value;
	data.Place=document.getElementById('Place').value;
	data.Stipend=document.getElementById('Stipend').value;
	data.Vacancies=document.getElementById('Vacancies').value;
	socket.emit('message',data);
	$.ajax({
			type: 'POST',
			data: JSON.stringify(data),
			contentType: 'application/json',
            url: 'http://localhost:3000/startups',						
            success: function(data) {
            console.log('success');
            console.log(JSON.stringify(data));
            }
    });

}