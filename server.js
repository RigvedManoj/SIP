var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
    res.sendFile(__dirname + '/dashboard.html');
});
app.get('/intern', function(req, res){
    res.sendFile(__dirname + '/startups.html');
});
app.get('/register', function(req, res){
    res.sendFile(__dirname + '/register.html');
});

/*//Gets username everytime a user logs in.
//Emits chat message to all connected users.
io.on('connection', function(socket){
    socket.on("join", function(name){
        console.log(name);
    });
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});*/

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.post("/startups", function(req, res) {

    var data= {
        Company: req.body.company,
        Position: req.body.position,
        Place: req.body.place,
        Stipend: req.body.stipend,
        Vacancies: req.body.vacancies,
    };
    console.log(data);
    //mysql connection setup
    var connection = mysql.createConnection({
        host : "localhost",
        user : "root",
        password : "AthlonY2",
        database : "SIP",
        multipleStatements: true
    });

    var query = connection.query('INSERT INTO Interns SET ?', data, function(err, res) {
        if (err) {
            console.log(err);
        } else {
           console.log('success');    
       }
   });
});

app.post("/submit", function(req, res) {

    var data= {
        Name: req.body.name,
        Phone: req.body.phone,
        Email: req.body.email,
        Date: req.body.date,
        Company: req.body.company,
        Position: req.body.position,
        SOP: req.body.sop,
        Resume: req.body.resume,
    };
    console.log(data);
    //mysql connection setup
    var connection = mysql.createConnection({
        host : "localhost",
        user : "root",
        password : "AthlonY2",
        database : "SIP",
        multipleStatements: true
    });

    var query = connection.query('INSERT INTO Registrations SET ?', data, function(err, res) {
        if (err) {
            console.log(err);
        } else {
           console.log('success');    
       }
   });
});

app.post("/dashboard", function(req, res) {

    var mysql = require('mysql');

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "AthlonY2",
      database: "SIP"
  });

    con.connect(function(err) {
      if (err) throw err;
  //Select all customers and return the result object:
  con.query("SELECT * FROM Interns", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
      res.send(result);
});
});

});

//console.log(res); 
app.listen(3000, function () {
    console.log('listening');
    'use strict';
})
