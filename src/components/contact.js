import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { WhatsappIcon, LinkedinIcon, MailIcon } from './brandIcons.js';
import SectionTitle from './sectionTitle.js';

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
    <section id="Contact" className="section-spacing">
      <Container>
        <SectionTitle>Contato</SectionTitle>
        <Row className="g-4">
          <Col md={4}>
            <p className="text-light mb-4">São Paulo, Brasil — aberta a modelos híbrido, remoto ou presencial.</p>
            <div className="contact-links">
              <a className="contact-links__item" target="_blank" rel="noopener noreferrer" href="https://wa.me/5511989067348">
                <WhatsappIcon /> <span>(11) 98906-7348</span>
              </a>
              <a className="contact-links__item" href="mailto:cindytauane@gmail.com">
                <MailIcon /> <span>cindytauane@gmail.com</span>
              </a>
              <a className="contact-links__item" target="_blank" rel="noopener noreferrer" href="https://br.linkedin.com/in/cindy-santos-a717581b1">
                <LinkedinIcon /> <span>LinkedIn</span>
              </a>
            </div>
          </Col>
          <Col md={8}>
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
