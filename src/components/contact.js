import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { Download } from 'lucide-react';
import { WhatsappIcon, LinkedinIcon, MailIcon, GithubIcon } from './brandIcons.js';
import SectionTitle from './sectionTitle.js';
import { useLanguage } from '../i18n/LanguageContext.js';

const Contact = () => {
  const { t } = useLanguage();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    // honeypot: campo escondido que só um bot preencheria
    if (form.elements.company_website && form.elements.company_website.value) {
      event.preventDefault();
      return;
    }
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();

      emailjs.sendForm('default_service', 'template_z7b9qgw', event.target, 'u-B7bYGw1JGl4AHrI')
        .then((result) => {
          console.log(result.text);
          alert(t.contact.sentSuccess);
        }, (error) => {
          console.log(error.text);
          alert(t.contact.sentError);
        });
    }
    setValidated(true);
  };

  return (
    <section id="Contact" className="section-spacing">
      <Container>
        <SectionTitle>{t.contact.title}</SectionTitle>
        <Row className="g-4">
          <Col md={4}>
            <p className="text-light mb-4">{t.contact.location}</p>
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
              <a className="contact-links__item" target="_blank" rel="noopener noreferrer" href="https://github.com/99drew">
                <GithubIcon size={20} /> <span>{t.contact.github}</span>
              </a>
              <a className="contact-links__item" href="/CV-Cindy-Santos.pdf" target="_blank" rel="noopener noreferrer">
                <Download size={20} /> <span>{t.contact.downloadCV}</span>
              </a>
            </div>
          </Col>
          <Col md={8}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group controlId="from_name">
                <Form.Label className="text-light">{t.contact.formName}</Form.Label>
                <Form.Control className="mb-3" type="text" placeholder="Jane Doe" name="from_name" required />
              </Form.Group>
              <Form.Group controlId="message">
                <Form.Label className="text-light">{t.contact.formMessage}</Form.Label>
                <Form.Control className="mb-3" as="textarea" rows={3} name="message" required />
              </Form.Group>
              {/* honeypot — escondido de humanos via CSS, mas visível pra bots que preenchem tudo */}
              <Form.Group controlId="company_website" className="contact-honeypot" aria-hidden="true">
                <Form.Label>Company website</Form.Label>
                <Form.Control type="text" name="company_website" tabIndex="-1" autoComplete="off" />
              </Form.Group>
              <Button variant="light" type="submit">{t.contact.send}</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
