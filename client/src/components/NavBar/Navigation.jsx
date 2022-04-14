import { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Badge, Container, NavDropdown } from "react-bootstrap"
import {ToastContainer} from 'react-toastify';
import { Store } from "../../Store";
import {LOGOUT} from '../../constants/actionTypes';
import './styles.css';

const Navigation = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

    const logOutHandler = () => {
      ctxDispatch({ type: LOGOUT });
      localStorage.removeItem('userInfo');
      localStorage.removeItem('shippingAddress');
      localStorage.removeItem('shippingAddress');
    }

    return(
      <>
        <header>
          <ToastContainer position="bottom-center" limit={1}/>
        </header>
        <Navbar expand="lg" bg="light" className="navContainer">
        <Container>
        <Navbar.Brand href="#home">KickBacks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
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
              </Nav>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
    );
}
export default Navigation