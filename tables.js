var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "AthlonY2",
  database: "SIP"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "DROP TABLE Interns";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table Dropped");
  });
  var sql = "CREATE TABLE Interns (Company VARCHAR(255), Position VARCHAR(255), Place VARCHAR(255), Stipend VARCHAR(255), Vacancies VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
  var sql="DROP TABLE Registrations";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table Dropped");
  });
  var sql = "CREATE TABLE Registrations (Name VARCHAR(255), Phone VARCHAR(255), Email VARCHAR(255), Date VARCHAR(255), Company VARCHAR(255), Position VARCHAR(255), SOP VARCHAR(1000), Resume VARCHAR(2000))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
