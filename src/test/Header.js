import React from 'react';
import { useDispatch } from 'react-redux';
import { chooseClothesAction } from '../Redux/actions/actions';
import { Button,Alert,Card, Col, Container, Navbar, Nav, NavDropdown, Row} from 'react-bootstrap';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import DressingRoom from '../DressingRoom/DressingRoom';
import Covertest from './Covertest';
import Signin from './Signin';
import firebase from '../util/firebase';

export default function Header() {
    return (
        <div>
          <Routes>
            <Route path="/" element={<Covertest/>}/>
          </Routes>
          <Routes>
            <Route path="/DressingRoom" element={<DressingRoom/>}/>
            <Route path="/Signin" element={<Signin/>}/>
          </Routes>
      </div>
    );
}