import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();

      emailjs.sendForm('default_service', 'template_z7b9qgw', event.target, 'u-B7bYGw1JGl4AHrI')
        .then((result) => {
          console.log(result.text);
          alert('Mensagem enviada com sucesso!');
        }, (error) => {
          console.log(error.text);
          alert('Erro ao enviar a mensagem, tente novamente.');
        });
    }
    setValidated(true);
  };

  return (
    <section id="Contact">
      <Container className="my-5">
        <Row>
          <Col md={4} className="d-flex flex-column align-items-center justify-content-center">
            <ListGroup horizontal className="justify-content-center">
              <ListGroup.Item as="a" target="_blank" href="https://web.whatsapp.com/send?phone=5511948521510&text=%5BACESSO%20PORTIF%C3%93LIO%5D">
                <i className="fa-brands fa-6x fa-whatsapp"></i>
              </ListGroup.Item>
              <ListGroup.Item as="a" target="_blank" href="https://br.linkedin.com/in/cindy-santos-a717581b1">
                <i className="fa-brands fa-6x fa-linkedin-in"></i>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={8}>
            <h2 className="emp-title">
              <i className="fas fa-chevron-right"></i> <span>Contato</span>
            </h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label className="text-light">Nome</Form.Label>
                <Form.Control className="mb-3" type="text" placeholder="Jane Doe" name="from_name" id="from_name" required />
              </Form.Group>
              <Form.Group>
                <Form.Label className="text-light">Mensagem</Form.Label>
                <Form.Control className="mb-3" as="textarea" rows={3} name="message" required />
              </Form.Group>
              <Button variant="light" type="submit">Enviar</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
