import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import resortIcon from '../../assets/resortIcon.png';

export default function NavbarComponent() {

    return (
        <Navbar variant="dark" expand="lg" className="navbar-customizada" >
            <Navbar.Brand href="/" style={{marginLeft: "2%", marginRight: "1%"}}>
                <img src={resortIcon}/>
                <b style={{marginLeft: "10%"}}>Atlantis</b>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/* <Nav.Link href="#link">Link</Nav.Link> */}
                    <NavDropdown menuVariant='dark' title="Cliente" id="basic-nav-dropdown" className="dropdown-customizado">
                        <NavDropdown.Item href="#action/3.1">Listar</NavDropdown.Item>
                        <NavDropdown.Item href="/cadastrarCliente">Cadastrar</NavDropdown.Item>
                        {/* <NavDropdown.Item href="#action/3.3"></NavDropdown.Item> */}
                        {/* <NavDropdown.Divider /> */}
                        {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                    <NavDropdown menuVariant='dark' title="Reservas" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
    </Navbar>   
    )

}