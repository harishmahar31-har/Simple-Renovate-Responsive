import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown, } from 'react-bootstrap';
import logo from '../../assets/img/Navlogo.svg'
import { ChevronDown } from 'lucide-react';

const Navbar1 = () => {
    return (
        <Navbar expand="lg" fixed='top' bg='white' className=" Navbar1">
            <Container >
                <Navbar.Brand href="#home">
                    <img  src={logo} alt="Logo" id='navlogo'/>
                </Navbar.Brand>
                <div className='navoptions'>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0 nav1 "
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <NavDropdown title={<span>Professionals <ChevronDown size={16} /></span>} id="navbarScrollingDropdown" className="custom-dropdown">
                            <NavDropdown.Item href="#action/3.1">Bid on Jobs</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">FAQs</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={<span>Clients <ChevronDown size={16} /></span>} id="navbarScrollingDropdown2" className="custom-dropdown">
                            <NavDropdown.Item href="#action/3.1">Get Bids</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">FAQs</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={<span>How it Works <ChevronDown size={16} /></span>} id="navbarScrollingDropdown3" className="custom-dropdown">
                            <NavDropdown.Item href="#action/3.1">How SimpleRenovate Works</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">How we Vet Professionals</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Pricing</Nav.Link>
                        <NavDropdown title={<span>Services <ChevronDown size={16} /></span>} id="navbarScrollingDropdown4" className="custom-dropdown">
                            <NavDropdown.Item href="#action/3.1">All Services</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Floor Coverings</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Artificial Grass</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Garage door</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Bath</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Kitchen</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Interior paints</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Doors and Windows</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={<span>Resources <ChevronDown size={16} /></span>} id="navbarScrollingDropdown5" className="custom-dropdown">
                            <NavDropdown.Item href="#action/3.1">About us</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Contact us</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>


                </Navbar.Collapse>
                <div className='btncontainer'>
                    <Button id='login' variant="outline-none">Log in</Button>
                <Button id='signup' variant="danger">Sign up</Button>
                </div>
                </div>
            </Container>
        </Navbar>
    );
}

export default Navbar1; 
