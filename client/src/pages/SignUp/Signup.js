import React, { useState } from 'react';
// import {Form, Button, Alert} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
// import AuthService from '../../actions/auth';
// import {signup} from '../../api/index'


const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate()

    axios.defaults.withCredentials = true;

    const Register = async (e) => {
      e.preventDefault();
      try {
          await axios.post('http://localhost:5000/users', {
              name: name,
              email: email,
              password: password,
              confPassword: confPassword
          });
          navigate(`/`);
      } catch (error) {
          if (error.response) {
              setMsg(error.response.data.msg);
          }
      }
  }
    
    //   const login = () => {
    //     axios.post("http://localhost:3001/login", {
    //         email: email,
    //         password: pw,
    //     }).then((response) => {
    //       if (response.data.message) {
    //         setLoginStatus(response.data.message);
    //       } else {
    //         setLoginStatus(response.data[0].username);
    //       }
    //     });
    //   };
    
      // useEffect(() => {
      //   axios.get("http://localhost:3001/signup").then((response) => {
      //     if (response.data.loggedIn === true) {
      //       setLoginStatus('Signup successfull');
      //     }
      //   });
      // }, []);
    
    
    return(

        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
        <div className="hero-body">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-4-desktop">
                        <form onSubmit={Register} className="box">
                            <p className="has-text-centered">{msg}</p>
                            <div className="field mt-5">
                                <label className="label">Name</label>
                                <div className="controls">
                                    <input type="text" className="input" placeholder="Name"
                                        value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                            </div>
                            <div className="field mt-5">
                                <label className="label">Email</label>
                                <div className="controls">
                                    <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                            <div className="field mt-5">
                                <label className="label">Password</label>
                                <div className="controls">
                                    <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                            </div>
                            <div className="field mt-5">
                                <label className="label">Confirm Password</label>
                                <div className="controls">
                                    <input type="password" className="input" placeholder="******" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                                </div>
                            </div>
                            <div className="field mt-5">
                                <button className="button is-success is-fullwidth">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Signup

      
        // <Form>
        // <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
        //   Something went wrong with your signup!
        // </Alert>

        // <Form.Group className="mb-3" controlId="formBasicFirstName">
        //     <Form.Label>First name</Form.Label>
        //     <Form.Control 
        //     type="firstName" 
        //     placeholder="Enter first name" 
        //     onChange={(e)=>{setFN(e.targetValue)}}
        //     required
        //     />
        //     <Form.Control.Feedback type='invalid'>Required</Form.Control.Feedback>
        // </Form.Group>

        // <Form.Group className="mb-3" controlId="formBasicLastName">
        //     <Form.Label>Last name</Form.Label >
        //     <Form.Control 
        //     type="lastName" 
        //     placeholder="Enter last name" 
        //     onChange={(e)=>{setLN(e.targetValue)}}
        //     required
        //     />
        // </Form.Group>

        // <Form.Group className="mb-3" controlId="formBasicEmail">
        //     <Form.Label>Email address</Form.Label>
        //     <Form.Control 
        //     type="email" 
        //     placeholder="Enter email" 
        //     onChange={(e)=>{setEmail(e.targetValue)}}
        //     // value={formData.email}
        //     required
        //     />
        //     <Form.Text className="text-muted">
        //     We'll never share your email with anyone else.
        //     </Form.Text>
        // </Form.Group>

        // <Form.Group className="mb-3" controlId="formBasicPassword">
        //     <Form.Label>Password</Form.Label>
        //     <Form.Control 
        //     type="password" 
        //     placeholder="Password" 
        //     onChange={(e)=>{setPW(e.targetValue)}}
        //     // value={formData.password}
        //     required
        //     />
        // </Form.Group>

        // <Button variant="primary" type="submit">
        //     Submit
        // </Button>
        // </Form>