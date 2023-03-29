import React from 'react'
  import Carousel from 'react-bootstrap/Carousel';
const Carausel = () => {
  return (
    <>
   


    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/one.jpg"
          alt="First slide" width={100} height={500}
        />
        <Carousel.Caption>
          {/* <h5>First slide label</h5> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/two.jpg"
          alt="Second slide" width={100} height={500}
        />
        <Carousel.Caption>
          {/* <h5>Second slide label</h5> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/three.jpg"
          alt="Third slide" width={100} height={500}
        />
        <Carousel.Caption>
          {/* <h5>Third slide label</h5> */}
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </>
  )
}

export default Carausel
