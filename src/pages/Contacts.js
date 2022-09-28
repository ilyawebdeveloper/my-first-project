import React, { Component } from 'react'
import { Container, Form, FormCheck, FormControl, FormGroup, FormLabel, FormText, Button } from 'react-bootstrap'

export default class Contacts extends Component {
  render() {
    return (
      <Container style={{width: '500px'}}>
        <h1 className='text-center'> Contacts us </h1>
        <Form>
          <Form.Group controlId='formBasicEmail'>
            <FormLabel>Email address</FormLabel>
            <FormControl  type='email' placeholder='Enter email'/>
            <FormText>
              We'll never share your email with anyone else
            </FormText>
          </Form.Group>

          <FormGroup controlId='formBasicPassword' className='mt-3'>
            <FormLabel>Example textarea</FormLabel>
            <FormControl as='textarea' rows={3}/>
          </FormGroup>

          <FormGroup controlId='formBasicCheckbox'>
            <FormCheck type='checkbox' label='Check me out'/>
          </FormGroup>
          <Button variant='primary' type='submit'>Submit</Button>
        </Form>
      </Container>
    )
  }
}
