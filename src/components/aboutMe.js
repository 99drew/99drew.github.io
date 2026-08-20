import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import illustration from '../img/illustrations/coffee-person.svg';
import SectionTitle from './sectionTitle.js';
function AboutMe() {
    return (
        <section id="AboutMe" className="section-spacing">
            <Container>
                <Row className="align-items-center g-4">
                    <Col md={8}>
                        <SectionTitle>Sobre Mim</SectionTitle>
                        <p className="text-light">Desde muito jovem, sou uma sonhadora, almejando alcançar lugares aparentemente inalcançáveis. Sempre admirei pessoas talentosas no universo tecnológico e me dediquei a estudar para um dia fazer parte desse campo promissor. Comecei como desenvolvedora Front-End e, com o tempo, fui evoluindo do operacional ao estratégico: hoje atuo de forma híbrida entre SEO técnico, front-end orientado a performance e automação de processos, liderando pessoas e padronizando fluxos de trabalho. Além do mundo dos códigos e das buscas, minhas paixões incluem assistir animes (sou uma grande fã de Naruto!) e explorar lugares que me proporcionem experiências incríveis e inesquecíveis. Para complementar esta introdução, gostaria de destacar uma frase do meu livro favorito, "O Monge e o Executivo":</p>
                        <Card className="card__quote">
                            <Card.Body>
                                <blockquote className="blockquote">
                                    <p>
                                        {' '}
                                        “Pensamentos tornam-se ações, ações tornam-se hábitos tornam-se caráter, e nosso caráter torna-se nosso destino.”{' '}
                                    </p>
                                    <footer className="blockquote-footer">
                                        <cite title="O Monge e o Executivo">O Monge e o Executivo</cite>
                                    </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                        <p className="text-light">Esta citação reflete a essência do que acredito e pratico em minha vida profissional e pessoal.</p>
                    </Col>
                    <Col md={4} className="d-none d-md-block text-center">
                        <Image fluid src={illustration} className="aboutme__illustration" />
                    </Col>
                </Row>
            </Container>

        </section>
    );
}
export default AboutMe;
