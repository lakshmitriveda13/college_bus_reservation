import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Register from './StudentRegister.js';
import StudentLogin from './StudentLogin.js';
import StudentHome from './StudentHome.js';
import AdminLogin from './AdminLogin.js';
import AdminHome from './AdminHome.js';
import BusDetails from './BusDetails.js';
import BusApplications from './BusApplications.js';

function App() {
  return (
    <div className="App">
      <h1>College Bus Reservation System</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/student/register" element={<Register />} />
          <Route path="/admin/register" element={<StudentHome />} />
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/student/home" element={<StudentHome />} />
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/bus/details" element={<BusDetails />} />
          <Route path="/bus/application" element={<BusApplications />} />
        </Routes>
        <Link to="/student/login"><Button variant='primary'>Student</Button></Link>
        <Link to="/admin/login"><Button variant="primary">Admin</Button></Link>
      </BrowserRouter>

    </div>
  );
}
export default App;
