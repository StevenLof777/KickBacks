import { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Badge } from "react-bootstrap"
import { CART_ADD_ITEM } from "../../constants/actionTypes";
import { Store } from "../../Store";
import './styles.css';

const Navigation = () => {
    const {state} = useContext(Store);
    const {cart} = state;
    return(

      <Navbar expand="lg" bg="light" className="navContainer">
        <Navbar.Brand href="#home">KickBacks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            {/* <Nav.Link href="/">SignUp</Nav.Link> */}
            <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
              </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


    );
}
export default Navigation