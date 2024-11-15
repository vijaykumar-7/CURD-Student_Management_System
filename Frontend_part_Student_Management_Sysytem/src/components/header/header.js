import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Student Management App</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" className="nav-link">DashBoard</Nav.Link>
                        <Nav.Link as={Link} to="/stu" className="nav-link">ADD Student</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;