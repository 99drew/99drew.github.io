import { Container, Row, Col, Card } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
function Works() {
return (
<section id="Works">
    <Container className="my-5">
    <h2 class="emp-title"> <i class="fas fa-chevron-right"></i> <span>Trabalhos Realizados</span></h2>
    <Row xs={1} md={2} className="g-4">
    {Array.from({ length: 4 }).map((_, idx) => (
    <Col key={idx}>
    <Card className="d-flex flex-column align-items-center justify-content-center p-5">
    <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
    </Spinner>
    <Card.Body>
    <Card.Title className="text-center">Card title</Card.Title>
    <Card.Text className="text-center">
    This is a longer card with supporting text below as a natural
    lead-in to additional content. This content is a little bit
    longer.
    </Card.Text>
    </Card.Body>
    </Card>
    </Col>
    ))}
    </Row>
    </Container>
</section>
);
}
export default Works;