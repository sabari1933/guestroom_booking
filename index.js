//package require
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const database = require("mysql");
const {application,request,response}=require("express");
const routes = require('./routes');

const add=express();
add.use(cors());
add.use(bodyparser.json());
add.use(express.json());
add.use(express.static("public"));
add.use(routes);

// database connection
// let connection=database.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"Sarun@123",
//     database:"guestroom"
// });

// connection.connect(function(error){
//     if(error){
//         console.log(error);
//     } else {
//         console.log("db is connected")
//         }
// });

//room register details insert api
// add.post('/register',(request,response)=>{
//     const sql = "insert into users (email,mobile,password) values (?,?,?)";
//     const {email,mobile,password}=request.body;
//     connection.query(sql,[email,mobile,password],(err,result)=>{
//         if(err){
//             return response.json(err);
//         } else{
//             return response.json(result);
//         }
//     })
// })


// //login check API
// add.post("/login", (request, response) => {

//     const { email, password } = request.body;
//     const sql = "SELECT * FROM users WHERE email = ? ";
//     connection.query(sql, [email], (error, results) => {
//         if (error) {
//             console.log(error);
//             const a = { status: "error" };
//             response.send(a);
//         } else {
//             if (results.length < 0) {
//                 const users = results[0];
//                 if (users.password === password) {
//                     // Login successful
//                     const a = { status: "success", userId: users.id };
//                     response.send(a);
//                     console.log(a);
//                     console.log("Login successful!");
//                 } else {
//                     // Incorrect password
//                     const a = { status: "error", message: "Incorrect password" };
//                     response.send(a);
//                 }
//             } else {
//                 // User not found
//                 const a = { status: "error", message: "User not found" };
//                 response.send(a);
//             }
//         }
//     });
// });


// // Dashbord get api
// add.get('/dashbord',(request,response)=>{
//     const sql = "select * from rooms";
//     connection.query(sql,(err,result)=>{
//         if(err){
//             return response.json({Message:"inside server error"})
//          } else {
//             return response.json(result);
//          }
//     })
// })

// add.post('/insert',(request,response)=>{
//     const sql = "insert into rooms(ownerId, name, floorSize, beds, amenities, rentAmount, photos) values (?,?,?,?,?,?,?)";
//     const { ownerId, name, floorSize, beds, amenities, rentAmount, photos } = request.body;
//     connection.query(sql,[ownerId, name, floorSize, beds, amenities, rentAmount, photos],(err,result)=>{
//         if(err){
//             return response.json(err);
//         } else{
//             return response.json(result);
//         }
//     })
// })

// //room details read api
// add.get('/read/:id',(request,response)=>{
//     const sql = "select * from rooms where id=?";
//     const id = request.params.id;
//     connection.query(sql,[id],(err,result)=>{
//         if(err){
//             return response.json({Message:"inside server error"})
//          } else {
//             return response.json(result);
//          }
//     })
// })


// //room details update api
// add.put('/update/:id',(request,response)=>{
//     const sql='UPDATE rooms SET name=?, floorSize=?, beds=?, amenities=?, rentAmount=?,photos=? WHERE id=?';
//     const id=request.params.id;
//     const{name, floorSize, beds, amenities, rentAmount, photos}=request.body;
//     connection.query(sql,[name, floorSize, beds, amenities, rentAmount, photos,id],(err,result)=>{
//         if(err){
//             return response.json({Message:"inside server error"})
//          } else {
//             return response.json(result);
//          }
//     })
// })

// //room details delete api
// add.delete('/delete/:id',(request,response)=>{
//     const sql = "delete from rooms where id=?";
//     const id=request.params.id;
//     connection.query(sql,[id],(err,result)=>{
//         if(err){
//             return response.json({Message:"inside server error"})
//          } else {
//             return response.json(result);
//          }   
//     })
// })


// //room list details api
// add.get('/roomlist',(request,response)=>{
//     const sql = "select * from rooms";
//     connection.query(sql,(err,result)=>{
//         if(err){
//             return response.json({Message:"inside server error"})
//          } else {
//             return response.json(result);
//          }
//     })
// })

// add.get('/roomcard',(request,response)=>{
//     const sql = "select * from rooms";
//     connection.query(sql,(err,result)=>{
//         if(err){
//             return response.json({Message:"inside server error"})
//          } else {
//             return response.json(result);
//          }
//     })
// })


// //room booking details api
// add.post('/booking',(request,response)=>{
//     const sql = "insert into bookings(roomId, customerId,startDate,endDate) values (?,?,?,?)";
//     const {roomId, customerId,startDate,endDate } = request.body;
//     connection.query(sql,[roomId, customerId,startDate,endDate],(err,result)=>{
//         if(err){
//             return response.json(err);
//         } else{
//             return response.json(result);
//         }
//     })
// })

// //date 
// add.post('/dateinsert',(request,response)=>{
//     const sql = "insert into bookings(startDate,endDate,status) values (?,?,'A')";
//     const {startDate,endDate,status } = request.body;
//     connection.query(sql,[startDate,endDate,status],(err,result)=>{
//         if(err){
//             return response.json(err);
//         } else{
//             return response.json(result);
//         }
//     })
// })


// add.get('/dateget',(request,response)=>{
//     const sql = "select * from bookings where status='A' ";
  
//     connection.query(sql,(err,result)=>{
//         if(err){
//             return response.json(err);
//         } else{
//             return response.json(result);
//         }
//     })
// })


// //date available or not check api
// add.post('/datecheck',(request,response)=>{
//     const sql = "SELECT * FROM rooms WHERE id NOT IN (SELECT roomId FROM bookings WHERE (startDate <= ? AND endDate >= ?) OR (startDate <= ? AND endDate >= ?))";
//     const {startDate, endDate } = request.body;
//     connection.query(sql,[startDate, endDate],(err,result)=>{
//         if(err){
//             return response.json(err);
//         } else{
//             return response.json(result);
//         }
//     })
// })



//port connecting
add.listen(33,()=>{
    console.log('server is running on 33 port');
})