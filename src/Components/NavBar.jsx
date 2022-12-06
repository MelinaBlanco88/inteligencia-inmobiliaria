import { useState } from "react";
import { Container, Nav, Navbar, Col, Row } from "react-bootstrap";
import { Cross } from "hamburger-react";
import { SocialIcons } from "./SocialIcons";
import { FiPhone } from 'react-icons/fi';

export const NavBar = () => {
	const [isOpen, setOpen] = useState(false);

	return (
		<section id='nav_bar'>
			<Navbar expand='lg' expanded={isOpen}>
				<Container>
					<Col sm={10} md={2}>
						<Navbar.Brand href='/'>
							<img className='ms-0' src='./logo.png' alt='Inteligencia Inmobiliaria Logo' width='168px' />
						</Navbar.Brand>
					</Col>

					<Cross toggled={isOpen} toggle={setOpen} label='Mostrar menu' />

					<Col xs={12} md={10} className='topbar-container'>
						<Row className='justify-end topbar'>
							<Col xs={7} lg={3} className='flex-center justify-end'>
								<span className="tel">	
									<FiPhone />
									<a href="tel:+52 44 2138 4813">+52 44 2138 4813</a>
								</span>
							</Col>
							<Col xs={5} lg={2} className='flex-center justify-end social-icons'>
								<SocialIcons />
							</Col>
						</Row>
						<Row>
							<Navbar.Collapse id='basic-navbar-nav'>
								<Nav className='ms-auto text-center text-md-start'>
									<Nav.Link href='/#about_us'>Quiénes somos</Nav.Link>
									<Nav.Link href='/#cards'>Servicios</Nav.Link>
									<Nav.Link href='Propiedades'>Propiedades</Nav.Link>
									<Nav.Link href='Cursos'>Próximos cursos</Nav.Link>
									<Nav.Link href='Contacto'>Contacto</Nav.Link>
								</Nav>
							</Navbar.Collapse>
						</Row>
					</Col>
				</Container>
			</Navbar>
		</section>
	);
};

