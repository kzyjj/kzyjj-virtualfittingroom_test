import {React, useState} from 'react';
import {Card, Container, Navbar, Nav, NavDropdown, Row, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import firebase from '../util/firebase';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

export default function ProjectIntroduction() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [prog, setProg] = useState(0);

  const formHandler = (e) =>{
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  }

  const uploadFiles = (file) => {
    //
    if (!file) return;
    const sotrageRef = firebase.storage().ref('Upload-Clothes/' + file.name);
    const documentRef = firebase.firestore().collection('UploadClothes').doc();
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => console.log(error),
      ()=>sotrageRef.put(file).then(() => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          documentRef
          .set({
            downloadURL,
          })
          .then(() => {
            navigate('/');
          });
          console.log("File available at", downloadURL);
        });
      }
    ));
  };

  const formHandler2 = (e) =>{
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles2(file);
  }

  const uploadFiles2 = (file) => {
    //
    if (!file) return;
    const sotrageRef = firebase.storage().ref('Upload-Others/' + file.name);
    const documentRef = firebase.firestore().collection('UploadOthers').doc();
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProg(prog);
      },
      (error) => console.log(error),
      ()=>sotrageRef.put(file).then(() => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          documentRef
          .set({
            downloadURL,
          })
          .then(() => {
            navigate('/DressingRoom');
          });
          console.log("File available at", downloadURL);
        });
      }
    ));
  };
  

  return (

    <Card className="text-center" style={{ color:"#000" }}>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Virtual DressingRoom</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://kzyjj.github.io/backgroundrm_test/" target="_blank">去背相片</Nav.Link>
            <NavDropdown title="上傳你的衣服" autoClose="outside">
              <NavDropdown.Item href="#1" id="dropdown-autoclose-outside">上傳上、下身 : 
                <form onSubmit={formHandler}>
                  <input type="file" accept=".jpg, .png" className=" input" />
                  <Button type="submit" size="sm">上傳</Button>
                  <br></br>
                  <progress value={progress} max="100" />
                </form>
              </NavDropdown.Item>
              <NavDropdown.Item href="#2" id="dropdown-autoclose-outside">上傳鞋子、包包 : 
                <form onSubmit={formHandler2}>
                  <input type="file" accept=".jpg, .png" className=" input" />
                  <Button type="submit" size="sm">上傳</Button>
                  <br></br>
                  <progress value={prog} max="100" />
                </form>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="DressingRoom">清空</Nav.Link>
          </Nav>
            <Nav.Link  onClick={() => firebase.auth().signOut().then(() => {navigate('/');})}>登出</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </Card>
  )
}

