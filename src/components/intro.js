import { Container, Row, Col, Image } from 'react-bootstrap';
import avatar from '../img/avatar.png';
function Intro() {
    return (
        <section id="intro">
            <Container>
                <Row>
                    <Col md={6}>
                        <Image src={avatar} className="intro__image" />
                    </Col>
                    <Col md={6} className='row flex-column align-items-center justify-content-center'>
                        <h1 className="h1 text-light fs-1">Bem-vindo(a)! Meu nome é Cindy.</h1>
                        <p className="lead text-light fs-6">Agradeço por visitar meu portfólio, um projeto que desenvolvi com a linguagem React com o intuito de aprimorar minhas habilidades, compartilhar meus conhecimentos e apresentar meus trabalhos e gostos. Espero que encontre aqui uma amostra do que sou capaz e das paixões que me impulsionam como desenvolvedora. Sinta-se à vontade!</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Intro;