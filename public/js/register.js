
window.onload = function() {
 document.getElementById("Company").value = localStorage["Company"];
 document.getElementById("Position").value = localStorage["Position"];
};
function run()
{
	var data = {};
	data.name=document.getElementById('Name').value;
	data.phone=document.getElementById('Phone').value;
	data.email=document.getElementById('Email').value;
	data.date=document.getElementById('Date').value;
	data.company=document.getElementById('Company').value;
	data.position=document.getElementById('Position').value;
	data.sop=document.getElementById('SOP').value;
	data.resume=document.getElementById('Resume').value;
	$.ajax({
			type: 'POST',
			data: JSON.stringify(data),
			contentType: 'application/json',
            url: 'http://localhost:3000/submit',						
            success: function(data) {
            console.log('success');
            console.log(JSON.stringify(data));
            }
    });

}