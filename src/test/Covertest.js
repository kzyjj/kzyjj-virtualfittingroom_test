import React from 'react';
import { useDispatch } from 'react-redux';
import { chooseClothesAction } from '../Redux/actions/actions';
import { Button,Alert,Card, Col, Container, Navbar, Nav, NavDropdown, Row} from 'react-bootstrap';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import DressingRoom from '../DressingRoom/DressingRoom';
export default function Cover() {

    return (
      <Container>
        <Navbar bg="light" expand="lg">
          <Container>
          {/* <img src="./images/navtab.png" width="35%" height="50px" alt=""></img> */}
            <Navbar.Brand href="#home">Virtual DressingRoom</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/DressingRoom">進入試衣間</Nav.Link> 
              </Nav>
              </Navbar.Collapse>
          </Container>
        </Navbar>
        <Row>
          <div class="frame">
            <img src="images/firstpage.gif" alt="123"/>
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