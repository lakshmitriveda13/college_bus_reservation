import logo from './logo.svg';
import './App.css';
import Image from 'react-bootstrap/Image';
import { Container,Row,Col } from 'react-bootstrap';
import Header from './Header.js'

function Transport() {
  return (
    <div className="App" >
      <Header/>
      <div className='transport'>

      <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="./bus.jpg" rounded />
        </Col>
        </Row>
        <Row>
        <Col xs={6} md={4}>
          <Image src="./bus1.jpg" thumbanil />
        </Col>
      </Row>
    </Container>
       
        </div>
        </div>
  )
}

        export default Transport;
