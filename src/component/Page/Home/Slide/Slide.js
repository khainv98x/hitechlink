import React from 'react';
import { Carousel } from 'react-bootstrap';
import pic01 from "../../../../assets/pic01.jpg"
import pic02 from "../../../../assets/pic02.jpg"
import pic03 from "../../../../assets/pic03.jpg"



const Slide = () => {
    const arrPic=[
        {
            id:1,
            image: pic01,
        },
        {
            id:2,
            image: pic02,
        },
        {
            id:3,
            image: pic03,
        },
    ]
    return (
        <Carousel className=' text-white'>
          {arrPic.map((item)=>(
            <Carousel.Item>
            <img src={item.image} alt="" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          ))}
          
        </Carousel>
    );
};

export default Slide;