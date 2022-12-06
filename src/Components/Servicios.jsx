import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import { FaChalkboardTeacher, FaBalanceScaleLeft, FaHandsHelping } from 'react-icons/fa';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { BsFillHouseFill, BsFillJournalBookmarkFill } from 'react-icons/bs';

export const Servicios = () => {
	return (
		<div className="bg-grey">
			<Container id="servicios">
					<Row className='flex-center'>
						<Col sm={12} lg={4}>
							<div className='section-title'>
                                Servicios
                            </div>

                            <div className='item-text text-left'>
                            Para ti que eres desarrollador, asesor inmobiliario independiente, inmobiliaria, condominio residencial, comercial, mixto o industrial, así como para personas físicas o morales interesadas en comprar o rentar un inmueble, ya sea como inversión o patrimonio.
                            </div>
						</Col>
						<Col sm={12} lg={8}>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><FaChalkboardTeacher />Capacitación</Accordion.Header>
                                    <Accordion.Body>
                                        <p>Las herramientas que acercamos a nuestros clientes, como la comunicación efectiva y habilidades comerciales, nos convierten en verdaderos aliados de negocio. No olvidemos que, en la gran mayoría de casos, las áreas comerciales o de ventas, son las que ingresan los recursos económicos a su actividad personal o de empresa, por lo tanto, la comunicación al interior de los clientes de quienes confían en nuestros servicios, debe ser clara y efectiva para apoyar a sus ventas o plantear un escenario de oportunidad de negocio.</p>
                                        <ul>
                                            <li>Habilidades en ventas</li>
                                            <li>Habilidades de comunicación</li>
                                            <li>Gestión y negociación</li>
                                            <li>Selección y retención de talento</li>
                                            <li>Liderazgo y trabajo en equipo</li>
                                            <li>Imagen profesional (Personal y de equipo)</li>
                                            <li>Norma Oficial Mexicana 247 SE -2021.</li>
                                            <li>Armonía condominal</li>
                                        </ul>	
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><FaBalanceScaleLeft />Asesoría legal</Accordion.Header>
                                    <Accordion.Body>
                                        <p>El <span className="bold">conocimiento técnico</span>, reduce enormemente los riesgos en una operación inmobiliaria. Una opinión legal previa y acertada, considerando la diversidad regulatoria. Esto da origen a un negocio inmobiliario exitoso o a la falta de ella, a poner en riesgo el patrimonio de nuestros clientes.</p>

                                        <p className="bold">Inmobiliaria:</p>    
                                        <ul>
                                            <li>Traslado de dominio, escrituración y avalúos.</li>
                                            <li>Uso de suelo y número oficial.</li>
                                            <li>Revisión o elaboración de documentos y contratos relativos a la compraventa o arrendamiento de inmuebles residenciales, comerciales y de servicios.</li>
                                            <li>Cumplimiento de la Norma Oficial Mexicana (NOM 247 SE-2021).</li>
                                            <li>Consultas ante el Registro Público de la Propiedad y del Comercio.</li>
                                        </ul>


                                        <p className="bold">Condominal:</p>    
                                        <ul>
                                            <li>Constitución de Asociaciones Civiles como vehículo para operar conjuntos residenciales, comerciales o industriales, bajo régimen de propiedad en condominio.</li>
                                            <li>Obligaciones a cargo de Asociaciones Civiles y Desarrolladores.</li>
                                            <li>Conocimiento y desempeño de funciones (Mesa Directiva, Comités y Administrador.)</li>
                                            <li>Elaboración y desahogo de convocatorias de Asamblea, minutas y protocolización e inscripción, en su caso.</li>
                                            <li>Opiniones legales (Convocatorias, Actas de Asamblea, Código Urbano, Código Civil y Legislación fiscal).</li>
                                            <li>Revisión y elaboración de Reglamentos internos, manuales o consignas de seguridad. </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><HiOutlineOfficeBuilding />Administración condominial</Accordion.Header>
                                    <Accordion.Body>
                                        <p>Nuestra ámplia experiencia en materia de administración condominal, nos permite orientar a nuestros clientes desde la posición en la que se encuentren (Mesa Directiva, condómino, desarrollador o como sus administradores), para operar de manera efectiva los recursos de su condominio (Residencial, comercial, industrial o mixto), dando importancia por igual a los ámbitos patrimonial y de relaciones interpersonales como condóminos.</p> 

                                        <ul>
                                            <li>Transparencia y rendición de cuentas (Cuotas ordinarias y extraordinarias).</li>
                                            <li>Licitaciones para la contratación de servicios o ejecución de trabajos.</li>
                                            <li>Contratación y supervisión de proveedores (Servicios constantes y específicos.)</li>
                                            <li>Supervisión operativa de proveedores.</li>
                                            <li>Elaboración de planes de trabajo parciales o anuales.</li>
                                            <li>Obtención de e firma, contraseñas SAT y apertura de cuentas bancarias.</li>
                                            <li>Cumplimiento fiscal y contable (Normas de Información Financiera (NIF) y Código Fiscal.</li>
                                            <li>Declaraciones de impuestos.</li>
                                            <li>Auditorías.</li>
                                        </ul>
                                        <i>* Incluye servicios de asesoría legal condominal.</i>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header><BsFillHouseFill />Administración inmobiliaria</Accordion.Header>
                                    <Accordion.Body>
                                        ...
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header><BsFillJournalBookmarkFill />Asesoría comercial inmobiliaria</Accordion.Header>
                                    <Accordion.Body>
                                        <p>Si bien es cierto, por el momento el ser asesor inmobiliario está en proceso de ser una profesión, nuestro servicio es certificado y profesional, para acompañar a nuestros clientes en la intermediación, asesoramiento y gestión de transacciones referentes a la compra venta o arrendamiento de todo tipo de inmuebles.</p>
                                        
                                        <ul>
                                            <li>Representación para la compra, venta y arrendamiento de inmuebles y desarrollos residenciales, comerciales o industriales.) nuevos o usados, incluyendo preventas, ya sea como inversión o patrimonio.</li>
                                            <li>Direccionamiento para la obtención de créditos bancarios o del INFONAVIT.</li>
                                            <li>Direccionamiento para el trámite de avalúos.</li>
                                            <li>Posicionamiento de inmuebles en el mercado inmobiliario.</li>
                                            <li>Asesoría en la determinación y negociación de precios de inmuebles.</li>
                                            <li>Filtrar ofertas no convenientes para nuestros clientes.</li>
                                            <li>Recabar documentación necesaria para un cierre exitoso.</li>
                                            <li>Localizar propiedades que cumplan con las necesidades, presupuesto y gusto del cliente.</li>
                                            <li>Asesoraría para determinar el tipo de inmueble que requiera nuestro cliente, así como para realizar cualquier posible oferta o negociación.</li>
                                            <li>Evaluar propiedad, identificando cualquier posible anomalía.</li>
                                            <li>Asesorar a nuestros clientes en la toma de decisión de compra o arrendamiento.</li>
                                            <li>Representar a nuestros clientes ante cualquier institución involucrada.</li>
                                            <li>Asesorar a nuestros clientes en la firma documentos de una operación inmobiliaria.</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="5">
                                    <Accordion.Header><FaHandsHelping />Mediación privada</Accordion.Header>
                                    <Accordion.Body>
                                        <p>Con la ayuda de diversas herramientas y técnicas de análisis de puntos de vista, comunicación y documentación de acuerdos, incluyendo bases jurídicas aplicables, apoyamos en mediar y conciliar controversias en materia inmobiliaria, ya sea como vendedor o arrendador, así como comprador o arrendatario.</p> 

                                        <p>Como principales beneficios de la mediación o conciliación, nuestros clientes encontrarán: </p>
                                        <ul>
                                            <li>Proceso de corto plazo.</li>
                                            <li>Proceso más económico que un juicio.</li>
                                            <li>Menor desgaste emocional y de relaciones interpersonales.</li>
                                            <li>Intervención objetiva, imparcial y confidencial.</li>
                                            <li>Documentación clara de acuerdos u obligaciones.</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            
                            </Accordion>
						</Col>
					</Row>
			</Container>
		</div>
	);
};