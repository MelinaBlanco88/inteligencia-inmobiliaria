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
          <h3>Si beneficia a tu comunidad, ¡te beneficia a ti!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.lugaresturisticosenmexico.com/wp-content/uploads/2022/04/Santiago-de-queretaro-1536x862.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Servicio de asesoria legal</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://inmobiliare.com/himalaya/wp-content/webp-express/webp-images/uploads/2019/08/queretaro-turismo-Inmobiliare_1.jpg.webp"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Servicio de administración condominal</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

