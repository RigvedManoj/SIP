var socket = io();
var count=0;
var div1=document.createElement("div");
div1.id="rows";
div1.className="row";
socket.on('message', function(msg){
    append(msg);
});
$.ajax({
	type: 'POST',
	contentType: 'application/json',
        url: 'http://localhost:3000/dashboard',						
        success: function(res) {
        for(var i=0;i<res.length;i++)
        {
            append(res[i]);
        }
    }
});
function append(data)
{
    var div2=document.createElement("div");
    var div=document.createElement("div");
    div2.className="col s4";
    div.className="card-panel hoverable";
    div.id="Co"+count;
    div.onclick=move;
    var h=document.createElement("h5");
    var p1=document.createElement("p");
    var p2=document.createElement("p");
    var p3=document.createElement("p");
    var p4=document.createElement("p");
    var body=document.getElementById('body');
    h.innerHTML=data.Company;
    h.id="Hi"+count;
    p1.innerHTML=data.Position;
    p1.id="p1"+count;
    p2.innerHTML=data.Place;
    p2.id="p2"+count;
    p3.innerHTML=data.Stipend;
    p3.id="p3"+count;
    p4.innerHTML=data.Vacancies;
    p4.id="p4"+count;
    div.appendChild(h);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);
    div2.appendChild(div);
    div1.appendChild(div2);
    body.appendChild(div1);
    count++;
}

function move(e)
{
        id="Hi"+e.target.id.substring(2);
        id2="p1"+e.target.id.substring(2);
        var company=document.getElementById(''+id).innerHTML;
        var position=document.getElementById(''+id2).innerHTML;
        window.location.href = "http://localhost:3000/register?"+company+"&"+position;
}