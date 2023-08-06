const connection = require('./database');

exports.dateCheck = async (request, response) => {
    try {
        const sql = "SELECT * FROM rooms WHERE id NOT IN (SELECT roomId FROM bookings WHERE (startDate <= ? AND endDate >= ?) OR (startDate <= ? AND endDate >= ?))";
        const {startDate, endDate } = request.body;
        connection.query(sql,[startDate, endDate],(err,result)=>{
            if(err){
                return response.json(err);
            } else{
                return response.json(result);
            }
        })
  } catch (error) {
    console.error('Error editing room:', error);
    response.status(500).json({ message: 'Error editing room' });
  }
  }

  exports.dateGetAll = async (request, response) => {
    try {
        const sql = "select * from bookings where status='A' ";
  
        connection.query(sql,(err,result)=>{
            if(err){
                return response.json(err);
            } else{
                return response.json(result);
            }
        })
  } catch (error) {
    console.error('Error editing room:', error);
    response.status(500).json({ message: 'Error editing room' });
  }
  }

  exports.dateInsert = async (request, response) => {
    try {
        const sql = "insert into bookings(startDate,endDate,status) values (?,?,'A')";
    const {startDate,endDate,status } = request.body;
    connection.query(sql,[startDate,endDate,status],(err,result)=>{
        if(err){
            return response.json(err);
        } else{
            return response.json(result);
        }
    })
  } catch (error) {
    console.error('Error editing room:', error);
    response.status(500).json({ message: 'Error editing room' });
  }
  }