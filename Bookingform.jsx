import React, { useState,useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-date-picker';
// import 'react-datepicker/dist/react-datepicker.css';

const BookingForm = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [room, setRoom] = useState([]);
const [values,setValues] = useState({
roomId:'',
customerId:''
})

  useEffect(() => {
    // Fetch all available rooms from the API
    
        axios.get("http://localhost:33/roomlist")
            .then(res => setRoom(res.data))
            .catch(err => console.log(err));
   
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    var config = { headers: { "enctype": "multipart/form-data" } };
    // Perform API call to book the room with selected dates
   
    if (selectedStartDate && selectedEndDate) {
        try {
            const bookingData = {
              roomId: room.id,
              startDate: selectedStartDate.toISOString(),
              endDate: selectedEndDate.toISOString(),
            };
            axios.post("http://localhost:33/booking", values,config)
            .then(res => {
                console.log(res);
                // navigate('/update/:id')
            })
            .catch(err => {
              alert("error")
             
               console.log(err)
            })
        } catch (error) {
            console.log('Error booking the room:', error.message);
            // Display an error message to the user if an error occurs
          }
        } else {
          alert('Please select both start and end dates.');
        }
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className="w-70 bg-white rounded p-3">
    <form onSubmit={handleSubmit}>
      <h2>Book {room.name}</h2>
      <label>Room ID:</label>
      <input type="number" onChange={e => setValues({ ...values, roomId: e.target.value })} required /><br/><br/>
      <label>customer ID:</label>
      <input type="number" onChange={e => setValues({ ...values, customerId: e.target.value })} required /><br/><br/>
      <div>
        <label>Start Date:</label>
        <DatePicker
          selected={selectedStartDate}
          onChange={(date) => setSelectedStartDate(date)}
          selectsStart
          startDate={selectedStartDate}
          endDate={selectedEndDate}
        //   required
        />
      </div>
      <div>
        <label>End Date:</label>
        <DatePicker
          selected={selectedEndDate}
          onChange={(date) => setSelectedEndDate(date)}
          selectsEnd
          startDate={selectedStartDate}
          endDate={selectedEndDate}
          minDate={selectedStartDate}
        //   required
        />
      </div>
      <button type="submit">Book Room</button>
    </form>
    </div>
    </div>
  );
};

export default BookingForm;
