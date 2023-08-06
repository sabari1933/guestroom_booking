import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
// import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

const AvailabilityCalendar = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [availabilityData, setAvailabilityData] = useState([]);

  // Function to handle date selection
  const handleDateChange = (date) => {
  
    if (selectedStartDate && selectedEndDate) {
      
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    } else if (selectedStartDate && date < selectedStartDate) {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    } else {
      
      setSelectedStartDate(date);
    }
  };

  // Function to fetch room availability from the API
  const fetchAvailabilityData =  () => {
    axios.post("http://localhost:33/dateinsert", {  startDate: selectedStartDate,
    endDate: selectedEndDate,})
    .then(res => {
        console.log(res);
        // navigate('/update/:id')
    })
    .catch(err => {
      alert("error")
     
       console.log(err)
    })
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className="w-70 bg-white rounded p-3">
    <div>
      <h2>Select Dates</h2>
      <DatePicker selected={selectedStartDate} onChange={handleDateChange} selectsStart startDate={selectedStartDate} endDate={selectedEndDate} />
      <DatePicker selected={selectedEndDate} onChange={(date) => setSelectedEndDate(date)} selectsEnd startDate={selectedStartDate} endDate={selectedEndDate} />

      <button onClick={fetchAvailabilityData}>Fetch Availability</button>

      {/* Display the fetched availability data */}
      <div>
        {availabilityData.map((availability) => (
          <div key={availability.id}>
            {/* Display the availability data */}
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default AvailabilityCalendar;
