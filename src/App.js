import React from 'react';
import './App.css';
import DressingRoom from './DressingRoom/DressingRoom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Covertest from './test/Covertest';
import {BrowserRouter, Routes, Route,} from "react-router-dom";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
        <switch>
            <Routes>
              <Route exact path="/" element={<Covertest/>}/>
            </Routes>
            <Routes>
              <Route path="/DressingRoom" element={<DressingRoom/>}/>
            </Routes>
          </switch>
          </BrowserRouter>
      </div>
  );
}

export default App;
