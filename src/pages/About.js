import React, { Component } from 'react'
import { Col, Container, Row, Tab, Nav } from 'react-bootstrap'

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id='left-tabs-example' defaultActiveKey="first">
           <Row>
             <Col sm={3}>
                <Nav variant='pills' className='flex-column mt-2'>
                  <Nav.Item>
                      <Nav.Link eventKey='first'>Design</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey='second'>Team</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey='third'>Programing</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey='fourth'>Freamworks</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey='fifth'>Labraries</Nav.Link>
                  </Nav.Item>
                </Nav>
             </Col>
             <Col sm={9}>
                <Tab.Content className='mt-3'>
                  <Tab.Pane eventKey='first'>
                    <img src='https://images.pexels.com/photos/1188751/pexels-photo-1188751.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=600' alt='do' />
                    <p>React Bootstrap display is a property which applies to many elements and specifies the type of rendering box used for an element.
                    Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.
                    </p>
                  </Tab.Pane>

                  <Tab.Pane eventKey='second'>
                    <img src='https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=600'  alt='do'/>
                    <p>React Bootstrap display is a property which applies to many elements and specifies the type of rendering box used for an element.
                    Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.
                    </p>
                  </Tab.Pane>

                  <Tab.Pane eventKey='third'>
                    <img src='https://images.pexels.com/photos/574080/pexels-photo-574080.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=600'  alt='do'/>
                    <p>React Bootstrap display is a property which applies to many elements and specifies the type of rendering box used for an element.
                    Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.
                    </p>
                  </Tab.Pane>

                  <Tab.Pane eventKey='fourth'>
                    <img src='https://images.pexels.com/photos/1188751/pexels-photo-1188751.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=600' alt='do' />
                    <p>React Bootstrap display is a property which applies to many elements and specifies the type of rendering box used for an element.
                    Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.
                    </p>
                  </Tab.Pane>

                  <Tab.Pane eventKey='fifth'>
                    <img src='https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=600'  alt='do' />
                    <p>React Bootstrap display is a property which applies to many elements and specifies the type of rendering box used for an element.
                    Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.
                    </p>
                  </Tab.Pane>
                </Tab.Content>
             </Col>
           </Row>
        </Tab.Container>
      </Container>
    )
  }
}
