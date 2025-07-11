import './App.css';
import { Link } from "react-router-dom";
import {Button, Row, Col } from 'react-bootstrap';
function Header() {
  return (
    <div className="App">
      <div> 
        <Row>
        <Col><Link to="/home"> <Button variant='primary'>Home</Button></Link></Col>
        <Col> <Link to="/transport"><Button variant='primary'>Transport</Button></Link></Col>
        <Col><Link to="/login" ><Button variant='primary'>Admin</Button></Link></Col>
        <Col> <Link to="/register"> <Button variant="primary">Sign-Up</Button></Link></Col>
        </Row>
      </div>
    </div>
  )
}
export default Header;