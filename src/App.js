import React from 'react';
import './App.css';
import DressingRoom from './DressingRoom/DressingRoom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './test/Header';
import {BrowserRouter, Routes, Route,} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
    </BrowserRouter>
    </div>
  );
}

export default App;
