import { Container, Nav, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link className="text-light fw-light" href="#AboutMe">Sobre Mim</Nav.Link>
            <Nav.Link className="text-light fw-light" href="#Skills">Habilidades</Nav.Link>
            <Nav.Link className="text-light fw-light" href="#Works">Trabalhos</Nav.Link>
            <Nav.Link className="text-light fw-light" href="#ProfessionalExperience">Experiência Profissional</Nav.Link>
            <Nav.Link className="text-light fw-light" href="#Contact">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;