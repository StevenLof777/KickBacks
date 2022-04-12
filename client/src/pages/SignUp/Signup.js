import { useState } from 'react';
import {Form, Button, Alert, Container} from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import AuthService from '../../actions/auth';
import {signup} from '../../api/index'
import styles from './styles.css';

const initialState = { firstName: '', lastName: '', email: '', password: '' };

const Signup = () => {
    const [formData, setFormData] = useState(initialState);
    const [showAlert, setShowAlert] = useState(false);

    const handleChangeFN = (e) => {
      e.preventDefault();
      const { value } = e.target;
      setFormData({
        ...formData,
        firstName: value,
      });
    };
  
    const handleChangeLN = (e) => {
      e.preventDefault();
      const { value } = e.target;
      setFormData({
        ...formData,
        lastName: value,
      });
    };
  
    const handleChangeEmail = (e) => {
      e.preventDefault();
      const { value } = e.target;
      setFormData({
        ...formData,
        email: value,
      });
    };
  
    const handleChangePw = (e) => {
      e.preventDefault();
      const { value } = e.target;
      setFormData({
        ...formData,
        password: value,
      });
    };
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      console.log(formData)
      try {
        const { data } = await signup({
          variables: { ...formData },
        });

        AuthService.login(data.signup.token);
      } catch (e) {
        console.error(e);
      }
    };
    

    return(
      <Container className='small-container'>
        <Form>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your signup!
        </Alert>

        <Form.Group className="mb-3" controlId="formBasicFirstName">
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
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="Enter email" 
            onChange={handleChangeEmail}
            // value={formData.email}
            required
            />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Password" 
            onChange={handleChangePw}
            // value={formData.password}
            required
            />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleFormSubmit}>
            Submit
        </Button>
        </Form>
      </Container>
    )
}

export default Signup