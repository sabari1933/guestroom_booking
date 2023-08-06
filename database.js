const database = require("mysql");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let connection=database.createConnection({
    host:"localhost",
    user:"root",
    password:"Sarun@123",
    database:"guestroom"
});

connection.connect(function(error){
    if(error){
        console.log(error);
    } else {
        console.log("db is connected")
        }
});
module.exports = connection;