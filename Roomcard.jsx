import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const RoomCard = () => {
    const [rooms, setRooms] = useState([]);
useEffect(() => {
    // Fetch all available rooms from the API
    
        axios.get("http://localhost:33/roomcard")
            .then(res => setRooms(res.data))
            .catch(err => console.log(err));
   
  }, []);

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className="w-70 bg-white rounded p-3">
    <div className="room-card">
      <h3>{rooms.name}</h3>
      <p>Floor Size: {rooms.floorSize} sqft</p>
      <p>Beds: {rooms.beds}</p>
      <p>Amenities: {rooms.amenities}</p>
      <p>Rent Amount: ${rooms.rentAmount}</p>
      {rooms.photos && <img src={rooms.photos} alt={rooms.name} />}
      
      <Link to="/availability"><button>Date Available</button></Link>
    </div>
    </div>
    </div>
  );
};

export default RoomCard;
