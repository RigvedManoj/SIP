
$.ajax({
	type: 'POST',
	contentType: 'application/json',
        url: 'http://localhost:3000/dashboard',						
        success: function(res) {
        var div1=document.createElement("div");
        div1.className="row";
        for(var i=0;i<res.length;i++)
        {
                var div2=document.createElement("div");
        	var div=document.createElement("div");
        	div2.className="col s4";
        	div.className="card-panel hoverable";
        	div.id="Co"+i;
        	div.onclick=move;
        	var h=document.createElement("h5");
        	var p1=document.createElement("p");
        	var p2=document.createElement("p");
        	var p3=document.createElement("p");
        	var p4=document.createElement("p");
        	var body=document.getElementById('body');
        	h.innerHTML=res[i].Company;
                h.id="Hi"+i;
        	p1.innerHTML=res[i].Position;
                p1.id="p1"+i;
        	p2.innerHTML=res[i].Place;
                p2.id="p2"+i;
        	p3.innerHTML=res[i].Stipend;
                p3.id="p3"+i;
        	p4.innerHTML=res[i].Vacancies;
                p4.id="p4"+i;
        	div.appendChild(h);
        	div.appendChild(p1);
        	div.appendChild(p2);
        	div.appendChild(p3);
        	div.appendChild(p4);
        	div2.appendChild(div);
        	div1.appendChild(div2);
        	body.appendChild(div1);
        }
    }
});

function move(e)
{
        id="Hi"+e.target.id[2];
        id2="p1"+e.target.id[2];
        var company=document.getElementById(''+id).innerHTML;
        var position=document.getElementById(''+id2).innerHTML;
        localStorage["Company"] = company;
        localStorage["Position"] = position;
        window.location.href = "http://localhost:3000/register";
}