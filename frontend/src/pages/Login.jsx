import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';
import '../styles/Login.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email:'',
    password:''
  });
  const handleOnChange = (e) => {
    setCredentials(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }
  const handleOnSubmit = (e) => {
    e.preventDefault();

  }
  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>
                <Form onSubmit={handleOnSubmit}>
                  <FormGroup>
                    <input type="email" placeholder="Enter email" required id="email" onChange={handleOnChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder="Enter password" required id="password" onChange={handleOnChange} />
                  </FormGroup>
                  <Button className='btn secondary__btn auth__btn' style={{borderRadius: '50px'}} type='submit'>Login</Button>
                </Form>
                <p>Don't have an account? <Link to='/register'>Create</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login;