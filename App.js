import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  { AuthProvider } from './Components/Authcontext';
import Registration from './Components/Registration';
import Login from './Components/Login';
import Landingpage from './Components/Landingpage';
import Dashbord from './Components/Ownerdashboard';
import RoomForm from './Components/Roomform';
import RoomUpdate from './Components/Roomupdate';
import RoomListing from './Components/Roomlisting';
import RoomCard from './Components/Roomcard';
import BookingForm from './Components/Bookingform';
import AvailabilityCalendar from './Components/Availabilitydate';
function App() {
  return (
   <>

   <AuthProvider>
<BrowserRouter>
<Routes>
<Route exact path="/" element={<Landingpage/>} />
<Route exact path="/register" element={<Registration/>} />
<Route exact path="/login" element={<Login/>} />
<Route exact path='/dashbord' element={<Dashbord/>}/>
<Route exact path='/create' element={<RoomForm/>}/>
<Route path='/update/:id' element={<RoomUpdate/>}/>
<Route path='/roomlist' element={<RoomListing/>}/>
<Route path='/roomcard' element={<RoomCard/>}/>
<Route path='/bookingform' element={<BookingForm/>}/>
<Route path='/availability' element={<AvailabilityCalendar/>}/>
</Routes>
</BrowserRouter>



      {/* <Router>
        <Switch>
          <Route exact path="/register" component={Registration} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/owner/dashboard" component={OwnerDashboard} />
          <Route exact path="/owner/room-form" component={RoomForm} />
          <Route exact path="/owner/availability" component={AvailabilityCalendar} />
          <Route exact path="/rooms" component={RoomListing} />
        </Switch>
      </Router> */}
    </AuthProvider>
   </>
  );
}

export default App;
