const connection = require('./database');

exports.roomCard = async (request, response) => {
    try {
        const sql = "select * from rooms";
        connection.query(sql,(err,result)=>{
            if(err){
                return response.json({Message:"inside server error"})
             } else {
                return response.json(result);
             }
        })
  } catch (error) {
    console.error('Error editing room:', error);
    response.status(500).json({ message: 'Error editing room' });
  }
  }


  exports.roomList = async (request, response) => {
    try {
        const sql = "select * from rooms";
        connection.query(sql,(err,result)=>{
            if(err){
                return response.json({Message:"inside server error"})
             } else {
                return response.json(result);
             }
        })
  } catch (error) {
    console.error('Error editing room:', error);
    response.status(500).json({ message: 'Error editing room' });
  }
  }

 