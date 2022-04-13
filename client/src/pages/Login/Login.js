import React, { useState } from 'react';
// import axios from 'axios';
import { Container, Form, Alert, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useLocation, Link } from 'react-router-dom';
 
const Login = () => {
    const {search} = useLocation;
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/'
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [msg, setMsg] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    // const navigate = useNavigate();
 
    // const Auth = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await axios.post('http://localhost:5000/login', {
    //             email: email,
    //             password: password
    //         });
    //         navigate("/dashboard");
    //     } catch (error) {
    //         if (error.response) {
    //             setMsg(error.response.data.msg);
    //         }
    //     }
    // }
 
    return (
        <Container className='small-container'>
            <Helmet><title>Login</title></Helmet>
        <Form>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your signup!
        </Alert>

        {/* <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control 
            type="firstName" 
            placeholder="Enter first name" 
            onChange={handleChangeFN}
            required
            />
            <Form.Control.Feedback type='invalid'>Required</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last name</Form.Label >
            <Form.Control 
            type="lastName" 
            placeholder="Enter last name" 
            onChange={handleChangeLN}
            required
            />
        </Form.Group> */}

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="Enter email" 
            // onChange={handleChangeEmail}
            // value={formData.email}
            required
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Password" 
            // onChange={handleChangePw}
            // value={formData.password}
            required
            />
        </Form.Group>

        <Button variant="primary" type="submit" 
        // onClick={handleFormSubmit}
        >
            Submit
        </Button>
        <>New Customer?{' '}
        <Link to={`/signup?redirect=${redirect}`}></Link></>
        </Form>
      </Container>
    )
}
 
export default Login