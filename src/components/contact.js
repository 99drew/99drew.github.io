import { Container, Row, Col } from 'react-bootstrap';
import { Download } from 'lucide-react';
import { WhatsappIcon, LinkedinIcon, MailIcon, GithubIcon } from './brandIcons.js';
import SectionTitle from './sectionTitle.js';
import Reveal from './Reveal.js';
import { useLanguage } from '../i18n/LanguageContext.js';

const Contact = () => {
  const { t } = useLanguage();

  const links = [
    { href: 'https://wa.me/5511989067348', icon: <WhatsappIcon />, label: '(11) 98906-7348', blank: true },
    { href: 'mailto:cindytauane@gmail.com', icon: <MailIcon />, label: 'cindytauane@gmail.com', blank: false },
    { href: 'https://br.linkedin.com/in/cindy-santos-a717581b1', icon: <LinkedinIcon />, label: 'LinkedIn', blank: true },
    { href: 'https://github.com/99drew', icon: <GithubIcon size={20} />, label: t.contact.github, blank: true },
    { href: '/CV-Cindy-Santos.pdf', icon: <Download size={20} />, label: t.contact.downloadCV, blank: true },
  ];

  return (
    <section id="Contact" className="section-spacing">
      <Container>
        <SectionTitle>{t.contact.title}</SectionTitle>
        <Reveal as="p" className="text-light mb-4">{t.contact.location}</Reveal>
        <Row xs={1} sm={2} md={3} className="g-3">
          {links.map((item, idx) => (
            <Col key={item.label}>
              <Reveal variant="scale" delay={idx * 60}>
                <a
                  className="contact-links__item"
                  href={item.href}
                  target={item.blank ? '_blank' : undefined}
                  rel={item.blank ? 'noopener noreferrer' : undefined}
                >
                  {item.icon} <span>{item.label}</span>
                </a>
              </Reveal>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
