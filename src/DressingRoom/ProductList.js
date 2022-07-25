import React from 'react';
import ProductItems from './ProductItems';
import { useSelector } from 'react-redux';
import { Button,Alert,Card, Col, Container, Navbar, Nav, NavDropdown, Row} from 'react-bootstrap';

export default function ProductList() {
  const { topcloth, botcloth, shoes, handbags, uploadclothes, uploadothers} = useSelector(
    (state) => state.ProductListReducer
  );

  //Render top clothes
  const renderTopcloth = () => {
    return topcloth.map((item, index) => {
      return (
        <Col className="col-4" key={index}>
          <ProductItems item={item} />
        </Col>
      );
    });
  };

  //Render bot clothes
  const renderBotcloth = () => {
    return botcloth.map((item, index) => {
      return (
        <Col className="col-4" key={index}>
          <ProductItems item={item} />
        </Col>
      );
    });
  };

  //Render shoes
  const renderShoes = () => {
    return shoes.map((item, index) => {
      return (
        <Col className="col-4" key={index}>
          <ProductItems item={item} />
        </Col>
      );
    });
  };

  //Render handbags
  const renderHandbags = () => {
    return handbags.map((item, index) => {
      return (
        <Col className="col-4" key={index}>
          <ProductItems item={item} />
        </Col>
      );
    });
  };

  const renderUploadClothes = () => {
    return uploadclothes.map((item, index) => {
      return (
        <Col className="col-4" key={index}>
          <ProductItems item={item} />
        </Col>
      );
    });
  };

  return (
      <Col className="well">
        <div className="tab-content">
          <div className="tab-pane container active" id="tabTopClothes">
            <div className="row">{renderTopcloth()}</div>
          </div>
          <div className="tab-pane container fade" id="tabBotClothes">
            <div className="row">{renderBotcloth()}</div>
          </div>
          <div className="tab-pane container fade" id="tabShoes">
            <div className="row">{renderShoes()}</div>
          </div>
          <div className="tab-pane container fade" id="tabHandBags">
            <div className="row">{renderHandbags()}</div>
          </div>
          <div className="tab-pane container fade" id="tabUploadClothes">
            <div className="row">{renderUploadClothes()}</div>
          </div>
        </div>
      </Col>
 
  );
}
