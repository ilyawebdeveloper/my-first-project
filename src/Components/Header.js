import React, { Component } from 'react'
import { Container, Form, FormControl, Nav, Navbar, Button} from 'react-bootstrap'
import logo from './logo192.png'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import About from '../pages/About'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import Contacts from '../pages/Contacts'

export default class Header extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
              <Container>
                  <Navbar.Brand href='/'>
                        <img
                            src={logo}
                            height="30"
                            width="30"
                            className='d-inline-block align-top'
                            alt='Logo'
                        />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                  <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='mr-auto'>
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/about'>About us</Nav.Link>
                            <Nav.Link as={Link} to='/contacts'>Contacts</Nav.Link>
                            <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                        </Nav>
                        <Form className='d-flex'>
                            <FormControl
                                type='text'
                                placeholder='Search'
                                className='mr-sm-2'
                            /> 
                            <Button variant='outline-info'>Search</Button>
                        </Form>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
              <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/contacts" element={<Contacts/>}/>
                <Route path="/blog" element={<Blog/>}/>
              </Routes>
        </Router>
      </>
    )
  }
}
