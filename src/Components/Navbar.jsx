import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Import NavLink from React Router
import 'bootstrap/dist/css/bootstrap.min.css';

function MyNavbar() {
  return (
    <Navbar
      expand='lg'
      className='custom-navbar border-bottom border-2 border-secondary-subtle p-4 mb-4'
    >
      <Container>
        <Navbar.Brand as={NavLink} to='/' className='brand'>
          CA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto fs-5'>
            <Nav.Item>
              <Nav.Link as={NavLink} to='/' className='nav-link' activeClassName='active'>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to='/about' className='nav-link' activeClassName='active'>
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to='/updates' className='nav-link' activeClassName='active'>
                Updates
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to='/contact' className='nav-link' activeClassName='active'>
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
