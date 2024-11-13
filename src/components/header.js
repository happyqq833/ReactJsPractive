import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Header = (props) => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                    <Navbar.Brand href="/">
                    <span>  NNQ App</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" activeKey={"/"}>
                        <Nav.Link href="/"  >Home</Nav.Link>
                        <Nav.Link href="/users">Manage Users</Nav.Link>
                        <NavDropdown title="Setting" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                        <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header;