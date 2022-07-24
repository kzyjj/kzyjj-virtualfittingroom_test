import React from 'react';
import { Menu, Form, Container, Message } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import { Button,Alert,Card,Navbar, Nav, NavDropdown, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'firebase/compat/auth';
import firebase from '../util/firebase';

function Signin() {
    const navigate = useNavigate();
    const [activeItem, setActiveItem] = React.useState('register');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    function onSubmit() {
        setIsLoading(true);
        if (activeItem === 'register') {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
              navigate('/');
              setIsLoading(false);
            })
            .catch((error) => {
              switch (error.code) {
                case 'auth/email-already-in-use':
                  setErrorMessage('信箱已存在');
                  break;
                case 'auth/invalid-email':
                  setErrorMessage('信箱格式不正確');
                  break;
                default:
              }
              setIsLoading(false);
            });
        } else if (activeItem === 'signin') {
          firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
              navigate('/');
              setIsLoading(false);
            })
            .catch((error) => {
              switch (error.code) {
                case 'auth/invalid-email':
                  setErrorMessage('信箱格式不正確');
                  break;
                case 'auth/user-not-found':
                  setErrorMessage('信箱不存在');
                  break;
                case 'auth/wrong-password':
                  setErrorMessage('密碼錯誤');
                  break;
                default:
              }
              setIsLoading(false);
            });
        }
      }

    return(
        <Container>
            <Card className="text-center" style={{ color:"#000" }}>
                <Card.Img variant="top" src="images/D2.gif"/>
                    <Card.Text></Card.Text>
                    <Card.Title>Virtual DressingRoom</Card.Title>
            </Card>
            <Card>
                <Menu pointing color={'brown'} size={'big'} widths="2">
                    <Menu.Item
                    active={activeItem === 'register'}
                    onClick={() => {
                        setErrorMessage('');
                        setActiveItem('register');
                    }}
                    >
                    註冊
                    </Menu.Item>
                    <Menu.Item
                    active={activeItem === 'signin'}
                    onClick={() => {
                        setErrorMessage('');
                        setActiveItem('signin');
                    }}
                    >
                    登入
                    </Menu.Item>
                </Menu>
                <Form onSubmit={onSubmit} size={'large'}>
                    <Form.Input
                    label="信箱"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="請輸入信箱"
                    />
                    <Form.Input
                    label="密碼"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="請輸入密碼"
                    type="password"
                    />
                    {errorMessage && <Message negative>{errorMessage}</Message>}
                    <Form.Button loading={isLoading} size='medium'>
                    {activeItem === 'register' && '註冊'}
                    {activeItem === 'signin' && '登入'}
                    </Form.Button>
                </Form>
            </Card>
            <Card className="text-center" style={{ color:"#000" }}>
                <Card.Img src="images/signin.jpg" />
            </Card>
        </Container>
    );
}
export default Signin;