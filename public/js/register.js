
window.onload = function() {
	var url = window.location.href;
	var params = url.split('?')[1].split('&');
	console.log(params);
	var temp = params[0].split('%20');
	params[0]="";
	for(var i=0;i<temp.length;i++)
	params[0]+=temp[i];
	temp=params[1].split('%20');
	params[1]="";
	for(var i=0;i<temp.length;i++)
	params[1]+=temp[i]+" ";
 document.getElementById("Company").value = params[0];
 document.getElementById("Position").value =params[1];
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