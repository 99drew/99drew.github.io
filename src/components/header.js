import { Container, Nav, Navbar } from 'react-bootstrap';
import { Globe } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext.js';

function Header() {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <Navbar expand="lg" fixed="top" className="site-navbar">
      <Container>
        <Navbar.Brand href="#intro" className="text-light fw-semibold">Cindy Santos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-lg-center">
            <Nav.Link className="text-light fw-light" href="#AboutMe">{t.nav.about}</Nav.Link>
            <Nav.Link className="text-light fw-light" href="#Skills">{t.nav.skills}</Nav.Link>
            <Nav.Link className="text-light fw-light" href="#ProfessionalExperience">{t.nav.experience}</Nav.Link>
            <Nav.Link className="text-light fw-light" href="#Works">{t.nav.projects}</Nav.Link>
            <Nav.Link className="text-light fw-light" href="#Contact">{t.nav.contact}</Nav.Link>
            <button
              type="button"
              className="lang-toggle"
              onClick={toggleLang}
              aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
            >
              <Globe size={14} />
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
