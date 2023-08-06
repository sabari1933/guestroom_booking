import React, { useState ,useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function RoomUpdate(){

    const {id}=useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:33/read/" + id)
            .then(res => {
                console.log(res);
                setValues({...values,ownerId: res.data[0].ownerId,name:res.data[0].name,floorSize:res.data[0].floorSize,beds:res.data[0].beds,amenities:res.data[0].amenities,rentAmount:res.data[0].rentAmount});
            })
            .catch(err => console.log(err))

    }, [])
    const [values, setValues] = useState({
        ownerId: '',
        name: '',
        floorSize: '',
        beds: '',
        amenities: '',
        rentAmount:''
    },[])
    //update operations
    const handleUpdate=(event)=>{
        event.preventDefault();
        axios.put("http://localhost:33/update/"+id,values)
        .then(res =>{
            console.log(res);
            navigate('/dashbord')
        })
        .catch(err =>console.log(err));
    }
    return(
        <>
   <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className="w-70 bg-white rounded p-3">
    <form onSubmit={handleUpdate}>
    <label>Owner ID:</label>
      <input type="text" value={values.ownerId} onChange={e => setValues({ ...values, ownerId: e.target.value })} required /><br/><br/>
      <label>Room Name:</label>
      <input type="text" value={values.name} onChange={e => setValues({ ...values, name: e.target.value })} required /><br/><br/>

      <label>Floor Size (sqft):</label>
      <input type="number" value={values.floorSize} onChange={e => setValues({ ...values, floorSize: e.target.value })} required /><br/><br/>

      <label>Number of Beds:</label>
      <input type="number" value={values.beds} onChange={e => setValues({ ...values, beds: e.target.value })} required /><br/><br/>

      <label>Amenities:</label>
      <input type='text' value={values.amenities} onChange={e => setValues({ ...values, amenities: e.target.value })} /><br/><br/>

      <label>Rent Amount (per day):</label>
      <input type="number" step="0.01" value={values.rentAmount} onChange={e => setValues({ ...values, rentAmount: e.target.value })} required /><br/><br/>

      {/* <label>Photos:</label>
      <input type="text" value={photos} onChange={(e) => setPhotos(e.target.value)} /><br/><br/> */}

      <button type="submit">Update Room</button>
      
    </form>
    </div>
    </div>
        </>
    );
}
export default RoomUpdate;