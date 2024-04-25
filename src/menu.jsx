import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'

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
            <NavLink className={`${({ isActive }) => isActive ? "text-dark" : ""} pe-2`} 
              to="/" style={{...styles.header}}>Menu</NavLink>
            <NavLink className={`${({ isActive }) => isActive ? "text-dark" : ""} pe-2`}
              to="/appetizers" style={{...styles.header}}>Appetizers</NavLink>
            <NavLink className={`${({ isActive }) => isActive ? "text-dark" : ""} pe-2`}
              to="/dinner" style={{...styles.header}}>Dinner</NavLink>
            <NavLink className={`${({ isActive }) => isActive ? "text-dark" : ""} pe-2`}
              to="/lunch" style={{...styles.header}}>Lunch</NavLink>
            <NavLink className={`${({ isActive }) => isActive ? "text-dark" : ""} pe-2`}
              to="/breakfast" style={{...styles.header}}>Breakfast</NavLink>
            <NavLink className={`${({ isActive }) => isActive ? "text-dark" : ""}`}
              to="/drinks" style={{...styles.header}}>Drinks</NavLink>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;