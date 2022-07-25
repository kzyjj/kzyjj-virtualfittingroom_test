import React from 'react';
import { useDispatch } from 'react-redux';
import { chooseClothesAction } from '../Redux/actions/actions';
import { Button,Alert,Card, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function ProductItems(props) {
  const { item } = props;
  const dispatch = useDispatch();
  return (
    <Card>
      <Button size="sm" variant="Link"
        onClick={() => {
          dispatch(chooseClothesAction(item));
        }}
      ><img src={item.imgSrc_jpg} alt="123" />
      </Button>
    </Card>
  );
}
