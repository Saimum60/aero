import React from 'react'
import './manu.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Logo from '../../assets/logo.png'
import { FaCloudDownloadAlt } from "react-icons/fa";



const Manu = () => {
  return (
    <Navbar >
      <Container className='nav'>
        <Navbar.Brand href="#home"><img src={Logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto bar">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Service">Servicet</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
            
          </Nav>
          <div className="bit">
            <button> <span><FaCloudDownloadAlt className='fd' /></span>Contact</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Manu