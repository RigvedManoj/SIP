function run()
{
	var data = {};
	data.company=document.getElementById('Company').value;
	data.position=document.getElementById('Position').value;
	data.place=document.getElementById('Place').value;
	data.stipend=document.getElementById('Stipend').value;
	data.vacancies=document.getElementById('Vacancies').value;
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