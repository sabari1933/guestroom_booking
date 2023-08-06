const connection = require('./database');

exports.createBooking = async (request, response) => {
  try {
    const sql = "insert into bookings(roomId, customerId,startDate,endDate) values (?,?,?,?)";
    const {roomId, customerId,startDate,endDate } = request.body;
    connection.query(sql,[roomId, customerId,startDate,endDate],(err,result)=>{
        if(err){
            return response.json(err);
        } else{
            return response.json(result);
        }
    })
  } catch (error) {
    console.error('Error creating booking:', error);
    response.status(500).json({ message: 'Error creating booking' });
  }
};
