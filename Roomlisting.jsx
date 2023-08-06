import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RoomListing = () => {
  const [rooms, setRooms] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Fetch all available rooms from the API
    
        axios.get("http://localhost:33/roomlist")
            .then(res => setRooms(res.data))
            .catch(err => console.log(err));
   
  }, []);

  // Implement filtering logic based on the filter state
  const filteredRooms = rooms.filter((room) =>
    room.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className="w-70 bg-white rounded p-3">
    <div>
      <h2>Room Listing</h2>
      {/* Input field for filtering */}
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter rooms by name"
      />

      {/* Display the list of rooms */}
      <div>
        {filteredRooms.map((room) => (
          <div key={room.id}>
            <h3>{room.name}</h3>
            <p>Floor Size: {room.floorSize}</p>
            <p>Beds: {room.beds}</p>
            <p>Amenities: {room.amenities}</p>
            <p>Rent Amount: {room.rentAmount}</p>
            {/* <img src={room.photos} alt={room.name} /> */}
            <Link to="/roomcard"><button>View Room Card</button></Link>
            <Link to="/bookingform"><button>Room Booking</button></Link>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default RoomListing;
