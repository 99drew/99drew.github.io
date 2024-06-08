import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import illustration from '../img/illustrations/coffee-person.svg';
function AboutMe() {
    return (
        <section id="AboutMe">
            <Container className="mt-5">
                <Row>
                    <Col md={8}>
                        <h2 class="emp-title"> <i class="fas fa-chevron-right"></i> <span>Sobre Mim</span></h2>
                        <p class="text-light">Desde muito jovem, sou uma sonhadora, almejando alcançar lugares aparentemente inalcançáveis. Minha inspiração vem de observar aqueles que já atingiram o nível que desejo, vivendo a realidade que tanto aspiro. Desde minha juventude, sempre admirei pessoas talentosas no universo tecnológico e me dediquei a estudar para um dia fazer parte desse campo promissor. Hoje, aos 25 anos, atuo como desenvolvedora Front-End e lidero uma equipe há quatro anos, apaixonada pelo que faço e sempre empenhada em entregar o melhor resultado! Além do mundo dos códigos, minhas paixões incluem assistir animes (sou uma grande fã de Naruto!) e explorar lugares que me proporcionem experiências incríveis e inesquecíveis. Para complementar esta introdução, gostaria de destacar uma das frases do meu livro favorito, "O Monge e o Executivo":</p>
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
                        <p class="text-light">Esta citação reflete a essência do que acredito e pratico em minha vida profissional e pessoal.</p>
                    </Col>
                    <Col md={4}>
                        <Image width="500" src={illustration} />
                        {/* <p class="fw-bold text-light text-end">Bônus: Sou apaixonada por Café!</p> */}
                    </Col>
                </Row>
            </Container>

        </section >
    );
}
export default AboutMe;