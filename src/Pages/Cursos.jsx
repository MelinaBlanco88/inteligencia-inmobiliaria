import { Col, Row, Card, Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { BsWhatsapp } from 'react-icons/bs';

export const Cursos = () => {
	return (
		<div>
			<Container>
				<Row>
					<div className='section-title'>
						Nuestros cursos
					</div>
				</Row>
				<Row id="cursos">
					<Card>
						<Col md={2}><Card.Img src="./rodrigo.png" /></Col>

						<Col md={7}>
							<Card.Title>Título del curso</Card.Title>
							<p>Dictado por: <b>Rodrigo Favela</b></p>
						</Col>

						<Col md={3}>
							<Button variant="primary" target="_blank" href="https://api.whatsapp.com/send?phone=+524461461006&text=%C2%A1Hola%20Rodrigo!"><BsWhatsapp /> Recibe más información </Button>{' '}
						</Col>
					</Card>

					<Card>
						<Col md={2}><Card.Img src="./liz.png" /></Col>

						<Col md={7}>
							<Card.Title>Título del curso</Card.Title>
							<p>Dictado por: <b>Liz Medélez</b></p>
						</Col>

						<Col md={3}>
							<Button variant="primary" target="_blank" href="https://api.whatsapp.com/send?phone=+524421384813&text=%C2%A1Hola%20Liz!"><BsWhatsapp /> Recibe más información </Button>{' '}
						</Col>
					</Card>
				</Row>
			</Container>

		</div>
	);
};