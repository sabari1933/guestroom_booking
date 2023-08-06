import React from "react";
import './Landingpage.css';
import { Link } from 'react-router-dom';
function Landingpage(){
    return(
        <>
          <nav class="navbar navbar-light shadow sticky-top">
                <a class="navbar-brand">
                    <img className="img1" src="https://static.vecteezy.com/system/resources/previews/000/559/761/non_2x/vector-cricket-sport-logo-badge-team-championship-template.jpg" />
                </a>

                <h1 className="font-weight-bold ml-5">Guest room booking application</h1>
                <form className="form-inline">
                    <Link to="/register"><button class="btn btn-primary my-2 my-sm-0 " type="submit">Register</button></Link>
                    <Link to="/login"><button class="btn btn-success my-2 my-sm-0" type="submit">LogIn</button></Link>
                </form>
            </nav>

            <div className="text-center align-items-center mt-5">
               <Link to="/roomlist"> <button>View Room List</button></Link>
            </div>
        </>
    );
}
export default Landingpage;