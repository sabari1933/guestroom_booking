import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RoomForm = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        ownerId: '',
        name: '',
        floorSize: '',
        beds: '',
        amenities: '',
        rentAmount:''
    })

  const handleSubmit = async (e) => {
    e.preventDefault();
    var config = { headers: { "enctype": "multipart/form-data" } };
   

      // Make an API call to create a new room
      axios.post("http://localhost:33/insert", values,config)
          .then(res => {
              console.log(res);
              navigate('/dashbord')
          })
          .catch(err => {
            alert("error")
           
             console.log(err)
          })

      
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className="w-70 bg-white rounded p-3">
    <form onSubmit={handleSubmit}>
    <label>Owner ID:</label>
      <input type="text"  onChange={e => setValues({ ...values, ownerId: e.target.value })} required /><br/><br/>
      <label>Room Name:</label>
      <input type="text"  onChange={e => setValues({ ...values, name: e.target.value })} required /><br/><br/>

      <label>Floor Size (sqft):</label>
      <input type="number" onChange={e => setValues({ ...values, floorSize: e.target.value })} required /><br/><br/>

      <label>Number of Beds:</label>
      <input type="number" onChange={e => setValues({ ...values, beds: e.target.value })} required /><br/><br/>

      <label>Amenities:</label>
      <input type='text' onChange={e => setValues({ ...values, amenities: e.target.value })} /><br/><br/>

      <label>Rent Amount (per day):</label>
      <input type="number" step="0.01"  onChange={e => setValues({ ...values, rentAmount: e.target.value })} required /><br/><br/>

      {/* <label>Photos:</label>
      <input type="text" value={photos} onChange={(e) => setPhotos(e.target.value)} /><br/><br/> */}

      <button type="submit">Create Room</button>
    </form>
    </div>
    </div>
  );
};

export default RoomForm;
