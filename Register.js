import './App.css';
import './registration.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import Header from './Header.js'


function Register() {
  const [rollno, setRollno] = useState('');
  const [name, setName] = useState('');
  const [dept, setDept] = useState('');
  const [location, setLocation] = useState('');
  const[password,setPassword]=useState('');
  function Rollno(event) {
    setRollno(event.target.value);
  }
  function username (event) {
    setName(event.target.value);
  }
  function Department(event) {
    setDept(event.target.value);
  }
  function Location(event) {
    setLocation(event.target.value);
  }
  function Password(event) {
    setPassword(event.target.value);
  }
  function output() {
    console.log(rollno);
    console.log(name);
    console.log(dept);
    console.log(location);
    alert("Registration Successful")
  }
  return (
    <div className="App" >
      <h2>Registration Page</h2>
      <Header/>
    <div className="registration">
      <Form>
      <Row>
        <Col>
          <Form.Label htmlFor="registration"><b>Registration Numbe</b>r</Form.Label>
          <Form.Control
            onChange={Rollno}
             placeholder='registration number'
            type="text"
            id="registration"
          />
        </Col>
      </Row>
      <Row>
        <Col >
          <Form.Label htmlFor="name"><b>Name</b></Form.Label>
          <Form.Control
            onChange={username}
            placeholder='name as per SSC'
            type="text"
            id="name"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label htmlFor="Department"><b>Department</b></Form.Label>
          <Form.Control
            onChange={Department}
             placeholder='department name'
            type="text"
            id="Department"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label htmlFor="Location"><b>From Location</b></Form.Label>
          <Form.Control
            onChange={Location}
            placeholder='location'
            type="text"
            id="Location"
          />
        </Col></Row>
        <Row>
        <Col>
          <Form.Label htmlFor="inputPassword"><b>Password</b></Form.Label>
          <Form.Control
            onChange={Password}
             placeholder=' create password'
            type="password"
            id="Password"
          />
        </Col>
      </Row>
     <Row><Button variant="secondary" onClick={output}><b>Register</b></Button></Row></Form></div>
    </div>
  );
}

export default Register;
