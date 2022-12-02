import React from "react"
import Carousel from 'react-bootstrap/Carousel';

export function Shuffle() {
  return (
    <Carousel id="shuffle">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://queretaro.travel/wp-content/uploads/2022/01/Queretaro-Metropolitano-Arcos.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.lugaresturisticosenmexico.com/wp-content/uploads/2022/04/Santiago-de-queretaro-1536x862.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://inmobiliare.com/himalaya/wp-content/webp-express/webp-images/uploads/2019/08/queretaro-turismo-Inmobiliare_1.jpg.webp"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

