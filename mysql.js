var mysql = require('mysql');
var connection  = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'5246',
    database:'test' 
});
connection.connect();


function query(sql,callback){
    connection.query(sql,function(err, rows, fields) {
        if (err) throw err;
        callback(rows);
    });
    
}
function adduser(sql,callback){
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        callback(rows);
    });
}
function modifyuser(sql,callback){
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        callback(rows);
    });
    
}
exports.query = query;
exports.adduser = adduser;
exports.modifyuser = modifyuser;