import React, { Component } from 'react'
import  Carousel  from 'react-bootstrap/Carousel'
import photo1 from '../assets/pexels-eberhard-grossgasteiger-572897.jpg'
import photo2 from '../assets/pexels-luis-del-río-15286.jpg'
import photo3 from '../assets/pexels-stein-egil-liland-3408744.jpg'

export default class CarouselBox extends Component {
  render() {
    return (
        <Carousel>
            <Carousel.Item>
                <img 
                className='d-block w-100 h-100vh'
                src={photo1}
                alt='forest'
                />
                <Carousel.Caption>
                    <h3>Forest image</h3>
                    <p>LOrem gagjag jgjgj agagh ah aglhalgh</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img 
                className='d-block w-100'
                src={photo2}
                alt='forest'
                />
                <Carousel.Caption>
                    <h3>Forest image</h3>
                    <p>LOrem gagjag jgjgj agagh ah aglhalgh</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img 
                className='d-block w-100'
                src={photo3}
                alt='forest'
                />
                <Carousel.Caption>
                    <h3>Forest image</h3>
                    <p>LOrem gagjag jgjgj agagh ah aglhalgh</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
  }
}
