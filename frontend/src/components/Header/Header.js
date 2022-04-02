import React from 'react'
import {
    Form,
    FormControl,
    Container,
    Nav,
    Navbar,
NavDropdown,} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../actions/userActions';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();  //to give info to the reducer

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand>
      <Link to="/">Note Zipper</Link>
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='m-auto'>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form>
        </Nav>
      <Nav>
        <Nav.Link  href="/mynotes">
          <Link to="/mynotes">My Notes</Link>
          {/* My Notes */}
          </Nav.Link>
        <NavDropdown title="Ekta Mer" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
          
          {/* Logout: localStorage.removeItem("userInfo"); */}
          <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header
