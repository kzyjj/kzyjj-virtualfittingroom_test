import React from 'react';
import ProductItems from './ProductItems';
import { useSelector } from 'react-redux';
import { Button,Alert,Card, Col, Container, Navbar, Nav, NavDropdown, Row} from 'react-bootstrap';

export default function ProductList() {
  const { topcloth, botcloth, shoes, handbags} = useSelector(
    (state) => state.ProductListReducer
  );

  //Render top clothes
  const renderTopcloth = () => {
    return topcloth.map((item, index) => {
      return (
        <Col className="col-3" key={index}>
          <ProductItems item={item} />
        </Col>
      );
    });
  };

  //Render bot clothes
  const renderBotcloth = () => {
    return botcloth.map((item, index) => {
      return (
        <Col className="col-3" key={index}>
          <ProductItems item={item} />
        </Col>
      );
    });
  };

  //Render shoes
  const renderShoes = () => {
    return shoes.map((item, index) => {
      return (
        <Col className="col-3" key={index}>
          <ProductItems item={item} />
        </Col>
      );
    });
  };

  //Render handbags
  const renderHandbags = () => {
    return handbags.map((item, index) => {
      return (
        <Col className="col-3" key={index}>
          <ProductItems item={item} />
        </Col>
      );
    });
  };

  return (
    <Col className="well">
      <div className="tab-content">
        <div className="tab-pane container active" id="tabTopClothes">
          <div className="row w-100">{renderTopcloth()}</div>
        </div>
        <div className="tab-pane container fade" id="tabBotClothes">
          <div className="row w-100">{renderBotcloth()}</div>
        </div>
        <div className="tab-pane container fade" id="tabShoes">
          <div className="row w-100">{renderShoes()}</div>
        </div>
        <div className="tab-pane container fade" id="tabHandBags">
          <div className="row w-100">{renderHandbags()}</div>
        </div>
      </div>
    </Col>
  );
}
