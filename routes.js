const express = require('express');
const router = express.Router();
const authController = require('./authController');
const roomController = require('./roomController');
const bookingController = require('./bookingController');
const dateController = require('./dateController');
const roomlistController = require('./roomlistController');
// Authentication Routes
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);

// Room Routes
router.get('/dashbord', roomController.getAllRooms);
router.post('/insert', roomController.createRoom);
router.put('/update/:id', roomController.editRoom);
router.delete('/delete/:id', roomController.deleteRoom);
router.delete('/read/:id', roomController.ReadeRoom);

// Booking Routes
router.post('/bookings', bookingController.createBooking);

//Date check Routes
router.post('/datecheck', dateController.dateCheck);
router.get('/dateget', dateController.dateGetAll);
router.post('/dateinsert', dateController.dateInsert);

//Room Listing Routes
router.get('/roomcard', roomlistController.roomCard);
router.get('/roomlist', roomlistController.roomCard);
module.exports = router;
