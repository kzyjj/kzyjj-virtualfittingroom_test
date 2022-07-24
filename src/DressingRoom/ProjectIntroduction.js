import React from 'react';
import { Alert,Card, Container, Navbar, Nav, NavDropdown, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom';
import { Form, Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import firebase from '../util/firebase';

export default function ProjectIntroduction() {
  const navigate = useNavigate();

  return (
    <Card className="text-center" style={{ color:"#000" }}>
      {/* <Card.Img variant="top" src="images/D2.gif"/> */}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Virtual DressingRoom</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://kzyjj.github.io/backgroundrm_test/" target="_blank">去背相片</Nav.Link>
            <NavDropdown title="上傳你的衣服" id="basic-nav-dropdown">
              <NavDropdown.Item href="#1">上傳上、下身 : 
                <div className="input">
                    <input type="file" accept=".jpg, .png"/>
                    <Form.Button variant="secondary" size="sm">上傳</Form.Button>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item href="#2">上傳鞋子、包包 : 
                <div className="input">
                    <input type="file" accept=".jpg, .png"/>
                    <Button variant="secondary" size="sm">上傳</Button>
                </div></NavDropdown.Item>
            </NavDropdown>
          </Nav>
            <Nav.Link  onClick={() => firebase.auth().signOut().then(() => {navigate('/');})}>登出</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </Card>
  )
}

