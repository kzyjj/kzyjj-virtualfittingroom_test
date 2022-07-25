import React from 'react';
import { useDispatch } from 'react-redux';
import { chooseClothesAction } from '../Redux/actions/actions';
import { Button,Alert,Card, Col, Container, Navbar, Nav, NavDropdown, Row} from 'react-bootstrap';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import DressingRoom from '../DressingRoom/DressingRoom';
import firebase from '../util/firebase';

export default function Cover() {
    const [user, setUser] = React.useState(null);
    React.useEffect(() => {
        firebase.auth().onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        })
    },[]);
    return (
      <Container>
        <Navbar bg="light" expand="lg">
          <Container>
          {/* <img src="./images/navtab.png" width="35%" height="50px" alt=""></img> */}
            <Navbar.Brand href="#home">Virtual DressingRoom</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                {user ? (
                  <>
                    <Nav.Link as={Link} to="/DressingRoom">進入試衣間</Nav.Link> 
                    <Nav.Link onClick={() => firebase.auth().signOut()}>
                      登出
                    </Nav.Link>
                  </>
                ) : (
                  <Nav.Link as={Link} to="/Signin">註冊/登入</Nav.Link> 
                )}
              </Nav>
              </Navbar.Collapse>
          </Container>
        </Navbar>
        <Row>
          <div class="frame">
            <img src="images/cv.gif"/>
          </div>
          <div class="frame">
            <img src="images/222.gif"/>
          </div>
          <div class="frame">
            <img src="images/333.gif"/>
          </div>
          <div class="frame">
            <img src="images/444.gif"/>
          </div>
          <div class="frame">
            <img src="images/555.gif"/>
          </div>
        </Row>
      </Container>
    );
  }