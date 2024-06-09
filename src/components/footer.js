import { Container, Row, Col } from 'react-bootstrap';
function Footer() {
    return (
        <section id="Footer">
            <Container fluid>
                <Row>
                    <Col xl={12}>
                        <p className="text-bg-dark p-3 text-center">© 2024 Direitos autorais: <b>Cindy Santos</b></p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Footer;