const connection = require('./database');

exports.getAllRooms = async (request, response) => {
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
    console.error('Error fetching rooms:', error);
    response.status(500).json({ message: 'Error fetching rooms' });
  }
};

exports.createRoom = async (request, response) => {
  try {
    const sql = "insert into rooms(ownerId, name, floorSize, beds, amenities, rentAmount, photos) values (?,?,?,?,?,?,?)";
    const { ownerId, name, floorSize, beds, amenities, rentAmount, photos } = request.body;
    connection.query(sql,[ownerId, name, floorSize, beds, amenities, rentAmount, photos],(err,result)=>{
        if(err){
            return response.json(err);
        } else{
            return response.json(result);
        }
    })
  } catch (error) {
    console.error('Error creating room:', error);
    response.status(500).json({ message: 'Error creating room' });
  }
};

exports.editRoom = async (request, response) => {
  try {
    const sql='UPDATE rooms SET name=?, floorSize=?, beds=?, amenities=?, rentAmount=?,photos=? WHERE id=?';
    const id=request.params.id;
    const{name, floorSize, beds, amenities, rentAmount, photos}=request.body;
    connection.query(sql,[name, floorSize, beds, amenities, rentAmount, photos,id],(err,result)=>{
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
};

exports.deleteRoom = async (request, response) => {
  try {
  const sql = "delete from rooms where id=?";
  const id=request.params.id;
  connection.query(sql,[id],(err,result)=>{
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
};

exports.ReadeRoom = async (request, response) => {
  try {
    const sql = "select * from rooms where id=?";
    const id = request.params.id;
    connection.query(sql,[id],(err,result)=>{
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
};
