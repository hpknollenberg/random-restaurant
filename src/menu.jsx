import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';

const styles = {
  header: {
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'rgb(252, 249, 238)'
  },
  background: {
    backgroundColor: 'rgb(150, 197, 247'
  }
}

function Menu() {
  return (
    <Navbar expand="lg" className="p-3" style={{...styles.background}}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Dropdown as={NavItem}>
              <Dropdown.Toggle className={`border-0 p-0 ps-2 pt-1 pb-1 pe-1`}
                style={{...styles.header, ...styles.background}}>Menu</Dropdown.Toggle>
              <Dropdown.Menu className="border-0" style={{...styles.background}}>
                <Dropdown.Item className={`ps-4`}
                  href="/random-restaurant/" style={{...styles.header}}>Full Menu<br></br></Dropdown.Item>
                <Dropdown.Item className={`ps-4`}
                  href="/random-restaurant/appetizers" style={{...styles.header}}>Appetizers<br></br></Dropdown.Item>
                <Dropdown.Item className={`ps-4`}
                  href="/random-restaurant/dinner" style={{...styles.header}}>Dinner<br></br></Dropdown.Item>
                <Dropdown.Item className={`ps-4`}
                  href="/random-restaurant/lunch" style={{...styles.header}}>Lunch<br></br></Dropdown.Item>
                <Dropdown.Item className={`ps-4`}
                  href="/random-restaurant/breakfast" style={{...styles.header}}>Breakfast<br></br></Dropdown.Item>
                <Dropdown.Item className={`ps-4`}
                  href="/random-restaurant/drinks" style={{...styles.header}}>Drinks<br></br></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <NavLink className={`ps-2 pt-1 pb-1`}
                  to="/contact" style={{...styles.header}}>Contact<br></br></NavLink>      
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;