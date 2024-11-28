import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import resortIcon from '../../assets/resortIcon.png';

export default function NavbarComponent() {

    return (
        <Navbar variant="dark" expand="lg" className="navbar-customizada" >
            <Navbar.Brand as={Link} to="/" style={{ marginLeft: "2%", marginRight: "1vw" }}>
                <img src={resortIcon}/>
                <b style={{marginLeft: "10%"}}>Atlantis</b>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/* <Nav.Link href="#link">Link</Nav.Link> */}
                    <NavDropdown menuVariant='dark' title="Cliente" id="basic-nav-dropdown" className="dropdown-customizado">
                        <NavDropdown.Item as={Link} to="/listarCliente">Listar</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/cadastrarCliente">Cadastrar</NavDropdown.Item>
                        {/* <NavDropdown.Item href="#action/3.3"></NavDropdown.Item> */}
                        {/* <NavDropdown.Divider /> */}
                        {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                    <NavDropdown menuVariant='dark' title="Reservas" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/listarReservas">Listar</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/cadastrarReserva">Cadastrar</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
    </Navbar>   
    )

}