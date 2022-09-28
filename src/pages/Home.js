import React, { Component } from 'react'
import CarouselBox from '../Components/CarouselBox'
import { Card, CardImg, Container, Button, CardGroup } from 'react-bootstrap'

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className='text-center m-4'>Our team</h2>
        <CardGroup className='mb-4'>
        <Card>
            <CardImg
              variant="top"
              src='https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            />
            <Card.Body>
              <Card.Title>Developers</Card.Title>
              <Card.Text> Labraries Labraries Labraries Labraries Labraries Labraries Labraries Labraries Labraries </Card.Text>
              <Button variant='primary'>About team</Button>
            </Card.Body>
          </Card >
          <Card className="ml-3">
            <CardImg
              variant="top"
              src='https://images.pexels.com/photos/1679618/pexels-photo-1679618.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            />
            <Card.Body >
              <Card.Title>Developers</Card.Title>
              <Card.Text> Labraries Labraries Labraries Labraries Labraries Labraries Labraries Labraries Labraries </Card.Text>
              <Button variant='primary'>About team</Button>
            </Card.Body>
          </Card>
          <Card className="ml-3">
            <CardImg
              variant="top"
              src='https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            />
            <Card.Body>
              <Card.Title>Developers</Card.Title>
              <Card.Text> Labraries Labraries Labraries Labraries Labraries Labraries Labraries Labraries Labraries </Card.Text>
              <Button variant='primary'>About team</Button>
            </Card.Body>
          </Card>
        </CardGroup>
        </Container>
      </>
    )
  }
}
