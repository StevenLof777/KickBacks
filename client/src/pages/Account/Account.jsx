import { useContext, useReducer, useState } from 'react';
import { UPDATE_FAIL, UPDATE_REQUEST, UPDATE_SUCCESS, LOGIN, FETCH_FAIL } from '../../constants/actionTypes';
import { Helmet } from 'react-helmet-async';
import {Container, Form, Button} from 'react-bootstrap';
import { Store } from '../../Store';
import { toast } from 'react-toastify';
import { getError } from '../../utils';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_REQUEST:
      return { ...state, loadingUpdate: true };
    case UPDATE_SUCCESS:
      return { ...state, loadingUpdate: false };
    case UPDATE_FAIL:
      return { ...state, loadingUpdate: false };

    default:
      return state;
  }
};

export default function Account() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const [firstName, setFirstName] = useState(userInfo.firstName);
  const [lastName, setLastName] = useState(userInfo.lastName);
  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [{ loadingUpdate }, dispatch] = useReducer(reducer, {
    loadingUpdate: false,
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        '/api/users/account',
        {
          firstName,
          lastName,
          email,
          password,
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: UPDATE_SUCCESS,
      });
      ctxDispatch({ type: LOGIN, payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      toast.success('User updated successfully');
    } catch (err) {
      dispatch({
        type: FETCH_FAIL,
      });
      toast.error(getError(err));
    }
  };

  // const deleteAccount = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await axios.delete(
  //       '/api/users/account',
  //       {
  //         firstName,
  //         lastName,
  //         email,
  //         password,
  //       },
  //       {
  //         headers: { Authorization: `Bearer ${userInfo.token}` },
  //       }
  //     );
  //     dispatch({
  //       type: DELETE,
  //     });
  //     ctxDispatch({ type: LOGIN, payload: data });
  //     localStorage.setItem('userInfo', JSON.stringify(data));
  //     toast.success('User updated successfully');
  //   } catch (err) {
  //     dispatch({
  //       type: FETCH_FAIL,
  //     });
  //     toast.error(getError(err));
  //   }
  // };

  return (
    <Container className='small-container'>
      <Helmet>
        <title>Account</title>
      </Helmet>
      <h1 className="my-3">Account</h1>
      <form onSubmit={submitHandler}>
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
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Update</Button>
        </div>
        <div className="mb-3">
          {/* <a onClick={}>Delete Account</a> */}
        </div>
      </form>
    </Container>
  );
}