var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
    res.sendFile(__dirname + '/startups.html');
});

//Gets username everytime a user logs in.
//Emits chat message to all connected users.
io.on('connection', function(socket){
    socket.on("join", function(name){
        console.log(name);
    });
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});

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
        password : "",
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

//console.log(res); 
app.listen(3000, function () {
    console.log('listening');
    'use strict';
})
