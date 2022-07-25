import React from 'react';
import NavTab from './NavTab';
import ProductList from './ProductList';
import { Container,Row,Col,Button,Alert,Card, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Product() {
  return (
    <Row className="justify-content-md-center">
      <div className="col-nav d-flex justify-content-center align-items-center" style={{ padding: '10px' }}>
        <NavTab />
      </div>
    </Row>
  );
}
