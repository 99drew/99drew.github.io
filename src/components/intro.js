import { Container, Row, Col, Image } from 'react-bootstrap';
import avatar from '../img/avatar.png';
function Intro() {
    return (
        <section id="intro" className="section-spacing">
            <Container>
                <Row className="align-items-center">
                    <Col md={5} className="d-flex justify-content-center">
                        <Image src={avatar} className="intro__image" roundedCircle />
                    </Col>
                    <Col md={7}>
                        <p className="intro__eyebrow">Technical SEO • Front-End Developer (SEO-driven)</p>
                        <h1 className="intro__title">Bem-vindo(a)! Meu nome é Cindy.</h1>
                        <p className="lead text-light">Profissional híbrida em SEO técnico, desenvolvimento front-end orientado à performance e automação de processos. Ao longo da carreira, evoluí do operacional ao estratégico, consolidando experiência em gestão de equipes e padronização de processos escaláveis. Aprendo rápido, executo com consistência e tenho alto senso de responsabilidade sobre cada entrega.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Intro;
