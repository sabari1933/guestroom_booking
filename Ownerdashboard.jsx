import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Dashbord() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:33/dashbord")
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    },[])

    //delete operation
    const handleDelete = (id) => {
        axios.delete("http://localhost:33/delete/" + id)
            .then(res => {
                window.location.reload();
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <h1 className="text-center">Guest Room Booking</h1>
            <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">

                <div className="w-90 bg-white rounded p-3">
                    <h1>Owner Dashbord</h1>
                    <div className="d-flex justify-content-end">
                        <Link to='/create' ><button className='btn btn-success'>Create +</button></Link>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>OwnerID</th>
                                <th>Room Name</th>
                                <th>Floor Size</th>
                                <th>Beds</th>
                                <th>Amenities</th>
                                <th>RentAmount</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {data.map((value, index) => {
                                return <tr>
                                    {/* <td>{value.id}</td> */}
                                    <td>{value.ownerId}</td>
                                    <td>{value.name}</td>
                                    <td>{value.floorSize}</td>
                                    <td>{value.beds}</td>
                                    <td>{value.amenities}</td>
                                    <td>{value.rentAmount}</td>
                                    <td className="p-2">
                                        {/* <Link to={`/read/${value.id}`}>  <button className="btn btn-sm btn-info">Read</button></Link> */}
                                        <Link to={`/update/${value.id}`}> <button className="btn btn-sm btn-primary m-2">Update</button></Link>
                                        <button onClick={()=>{handleDelete(value.id)}} className="btn btn-sm btn-danger">Delete</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
export default Dashbord;