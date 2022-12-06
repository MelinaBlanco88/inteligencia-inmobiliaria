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
						<Col md={3} xl={2} className='text-center'><Card.Img src="./rodrigo.png" /></Col>

						<Col md={6} xl={7} className='content-title'>
							<Card.Title>Armonía Condominal</Card.Title>
							<p>Dictado por: <b>Rodrigo Favela</b></p>
						</Col>

						<Col md={4} xl={3}>
							<Button variant="primary" target="_blank" href="https://api.whatsapp.com/send?phone=+524461461006&text=%C2%A1Hola%20Rodrigo!"><BsWhatsapp /> Recibe más información </Button>{' '}
						</Col>
					</Card>

					<Card>
						<Col md={3} xl={2} className='text-center'><Card.Img src="./rodrigo.png" /></Col>

						<Col md={6} xl={7} className='content-title'>
							<Card.Title>Cumplimiento de la NOM 247 SE - 2021 </Card.Title>
							<p>Para Desarrolladores e intermediarios Inmobiliarios.</p>
							<p>Dictado por: <b>Rodrigo Favela</b></p>
						</Col>

						<Col md={4} xl={3} className='text-center'>
							<Button variant="primary" target="_blank" href="https://api.whatsapp.com/send?phone=+524461461006&text=%C2%A1Hola%20Rodrigo!"><BsWhatsapp /> Recibe más información </Button>{' '}
						</Col>
					</Card>

					<Card>
						<Col md={3} xl={2}><Card.Img src="./liz.png" /></Col>

						<Col md={6} xl={7} className='content-title'>
							<Card.Title>Título del curso</Card.Title>
							<p>Dictado por: <b>Liz Medélez</b></p>
						</Col>

						<Col md={4} xl={3}>
							<Button variant="primary" target="_blank" href="https://api.whatsapp.com/send?phone=+524421384813&text=%C2%A1Hola%20Liz!"><BsWhatsapp /> Recibe más información </Button>{' '}
						</Col>
					</Card>
				</Row>
			</Container>

		</div>
	);
};