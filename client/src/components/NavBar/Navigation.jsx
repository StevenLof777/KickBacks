import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Badge, NavDropdown, Form, FormControl, 
  // button, 
  Row, Col } from "react-bootstrap"
import { FaSearch } from 'react-icons/fa';
import {ToastContainer} from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { Store } from "../../Store.js";
import {LOGOUT} from '../../constants/actionTypes.js';
import brand from './brand.png';
import './styles.css';

const Navigation = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
  const navigate = useNavigate();

    const logOutHandler = () => {
      ctxDispatch({ type: LOGOUT });
      localStorage.removeItem('userInfo');
      localStorage.removeItem('shippingAddress');
      localStorage.removeItem('shippingAddress');
      navigate('/')
    }

    const [query, setQuery] = useState('');
    const submitHandler = (e) => {
      e.preventDefault();
      navigate(query ? `/search/?query=${query}` : '/search');
    };

    return(
      <>
      {/* Desktop */}
        <div > 
          <header>
            <ToastContainer position="bottom-center" limit={1}/>
          </header>
          <Navbar expand="lg" className="navContainer" >
            <Col  className='brand-container'>
            <img src={brand} className='brand' alt='Brand'/>
            <Navbar.Brand href="/" className='brand-title'>KickBacks</Navbar.Brand>
            </Col>
            <Col className='right-column-nav'>
              <Row>
              <Col >
              <Form className="d-flex" onSubmit={submitHandler}>
              <button className="search"><FaSearch /></button>
                <FormControl
                  type="search"
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by gender, style, and size"
                  className="me-2 search-input"
                  aria-label="Search"
                />
              </Form>
              </Col>
              </Row>
              <Row>
                <Col>
                  <Navbar.Toggle aria-controls="basic-navbar-nav "  />
                  <Navbar.Collapse id="basic-navbar-nav " className="nav-text">
                  <Col >
                  <Nav className="me-auto ">
                      <Nav.Link href='/'>Home</Nav.Link>
                      <Nav.Link href='/'>Mens</Nav.Link>
                      <Nav.Link href='/'>Womens</Nav.Link>
                      <Nav.Link href='/'>Kids</Nav.Link>
                    </Nav>
                  </Col>
                  <Col >
                    <Nav className="justify-content-end ">
                      {userInfo ? (
                        <NavDropdown title={userInfo.firstName} id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/account">Account</NavDropdown.Item>
                        <NavDropdown.Item href="/orderhistory">Order History</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={logOutHandler}>
                          Log out |
                        </NavDropdown.Item>
                      </NavDropdown>
                      ):(
                        <Link to='/login' className="nav-link">
                          Login
                        </Link>
                      )}
                      <Link to="/cart" className="nav-link ">
                      Cart {cart.cartItems.length > 0 && (<Badge pill bg="danger" className="cart-badge">{cart.cartItems.reduce((a, c) => a + c.quantity, 0)}</Badge>)}

                      </Link>
                    </Nav>
                  </Col>
                </Navbar.Collapse>
                </Col>
              </Row>
          </Col>
        </Navbar> 

        {/* Mobile */}
        
        <Navbar expand="lg" className="mobileNavContainer" >
        
            <Navbar.Brand href="/" className='brand-title-mobile'>
                  <img src={brand} className='brand' alt='Brand'/>KickBacks
            </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav "  />
                  <Navbar.Collapse id="basic-navbar-nav " className="nav-text">

                  <Nav className="me-auto text-align-center"> 
                      <Nav.Link href='/'>Home</Nav.Link>
                      <Nav.Link href='/'>Mens</Nav.Link>
                      <Nav.Link href='/'>Womens</Nav.Link>
                      <Nav.Link href='/'>Kids</Nav.Link>
                    </Nav>

                    <Nav className="justify-content-end text-align-center">
                      {userInfo ? (
                        <NavDropdown title={userInfo.firstName} id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/account">Account</NavDropdown.Item>
                        <NavDropdown.Item href="/orderhistory">Order History</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={logOutHandler}>
                          Log out
                        </NavDropdown.Item>
                      </NavDropdown>
                      ):(
                        <Link to='/login' className="nav-link">
                          Login
                        </Link>
                      )}
                      <Link to="/cart" className="nav-link ">
                      Cart {cart.cartItems.length > 0 && (<Badge pill bg="danger" className="cart-badge">{cart.cartItems.reduce((a, c) => a + c.quantity, 0)}</Badge>)}

                      </Link>
                    </Nav>
                </Navbar.Collapse>
                <div className="form-container">
                      <Form onSubmit={submitHandler} className="d-flex search-form">
                        <button  className="search my-search"><FaSearch/></button>
                        <FormControl
                          type="search"
                          onChange={(e) => setQuery(e.target.value)}
                          placeholder="Search by gender, style, and size"
                          className="me-2 search-input"
                          aria-label="Search"
                        />
                      </Form>
                    </div>
        </Navbar>


        </div>
      </>
    );
}
export default Navigation

