import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button, Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Store } from '../../Store.js';
import {SAVE_SHIPPING_ADDRESS} from '../../constants/actionTypes.js'

export default function Shipping() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);

  const {
    userInfo,
    cart: { shippingAddress },
  } = state;

  const [firstName, setFirstName] = useState(shippingAddress.firstName || '');
  const [lastName, setLastName] = useState(shippingAddress.lastName || '');
  const [address, setAddress] = useState(shippingAddress.address || '');
  const [city, setCity] = useState(shippingAddress.city || '');
  const [zipCode, setZipCode] = useState(shippingAddress.zipCode || ''); 
  
  useEffect(() => {
    if (!userInfo) {
      navigate('/login?redirect=/shipping');
    }
  }, [userInfo, navigate]);
  const [country, setCountry] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({
      type: SAVE_SHIPPING_ADDRESS,
      payload: {
        firstName,
        lastName,
        address,
        city,
        zipCode,
        country,
      },
    });
    localStorage.setItem(
      'shippingAddress',
      JSON.stringify({
        firstName,
        lastName,
        address,
        city,
        zipCode,
        country,
      })
    );
    navigate('/payment');
  };
  return (
    <div>
      <Helmet>
        <title>Shipping Address</title>
      </Helmet>
      <Container className="small-container">
        <h1 className="my-3">Shipping Address</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="number">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control
              type='number'
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type='name'
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </Form.Group>
          <div className="mb-3">
            <Button variant="primary" type="submit">
              Continue
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}