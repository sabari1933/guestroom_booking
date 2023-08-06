// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const { response } = require('express');
const connection = require('./database');

exports.registerUser = async (request, response) => {
  try {
    const sql = "insert into users (email,mobile,password) values (?,?,?)";
    const {email,mobile,password}=request.body;
    connection.query(sql,[email,mobile,password],(err,result)=>{
        if(err){
            return response.json(err);
        } else{
            return response.json(result);
        }
    })
  } catch (error) {
    console.error('Error registering user:', error);
    response.status(500).json({ message: 'Error registering user' });
  }
};

exports.loginUser = async (request, response) => {
  try {
    const { email, password } = request.body;
    const sql = "SELECT * FROM users WHERE email = ? ";
    connection.query(sql, [email], (error, results) => {
        if (error) {
            console.log(error);
            const a = { status: "error" };
            response.send(a);
        } else {
            if (results.length < 0) {
                const users = results[0];
                if (users.password === password) {
                    // Login successful
                    const a = { status: "success", userId: users.id };
                    response.send(a);
                    console.log(a);
                    console.log("Login successful!");
                } else {
                    // Incorrect password
                    const a = { status: "error", message: "Incorrect password" };
                    response.send(a);
                }
            } else {
                // User not found
                const a = { status: "error", message: "User not found" };
                response.send(a);
            }
        }
    });
  } catch (error) {
    console.error('Error logging in user:', error);
    response.status(500).json({ message: 'Error logging in user' });
  }
};
