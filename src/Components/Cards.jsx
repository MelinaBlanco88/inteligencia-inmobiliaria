import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { FaChalkboardTeacher, FaBalanceScaleLeft, FaHandsHelping } from 'react-icons/fa';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { BsFillHouseFill, BsFillJournalBookmarkFill } from 'react-icons/bs';

export const Cards = () => {
	return (
		<div className="bg-primary">
			<Container>
				<section id="cards">
					<Row>
						<div className='section-title'>
							Nuestros servicios
						</div>
					</Row>
					<Row className='row-cards'>
						<Col>
							<div className='item-inner'>
								<FaChalkboardTeacher />
                                Capacitación
                            </div>
						</Col>
                        <Col>
							<div className='item-inner'>
								<FaBalanceScaleLeft />
                                Asesoría legal
                            </div>
						</Col>
						<Col>
							<div className='item-inner'>
								<HiOutlineOfficeBuilding />
                                Administración condominial
                            </div>
						</Col>

						<Col>
							<div className='item-inner'>
								<BsFillHouseFill />
                                Administración inmobiliaria
                            </div>
						</Col>
                        <Col>
							<div className='item-inner'>
								<BsFillJournalBookmarkFill />
                                Asesoría comercial inmobiliaria
                            </div>
						</Col>

						<Col>
							<div className='item-inner'>
								<FaHandsHelping />
                                Mediación privada
                            </div>
						</Col>
					</Row>
					<Row>
						<p className="item-text">
							Quienes ofrecemos nuestra vida profesional al servicio del sector inmobiliario, debemos contar con una actitud de servicio y empatía por el cliente. “Ponernos en sus zapatos”. Nuestros clientes deben encontrar en nosotros a un facilitador y generador de negocios. A un asesor integral que ponga en la mesa, posibilidades de negocio o ahorro, y ser buenos asesores patrimoniales. ¡También se contribuye con la utilidad ahorrando!
						</p>
					</Row>
				</section>
			</Container>
		</div>
	);
};