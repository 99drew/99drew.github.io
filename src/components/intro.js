import { Container, Row, Col, Image } from 'react-bootstrap';
import avatar from '../img/avatar.jpg';
import { useLanguage } from '../i18n/LanguageContext.js';

function Intro() {
    const { t } = useLanguage();
    return (
        <section id="intro" className="section-spacing">
            <Container>
                <Row className="align-items-center">
                    <Col md={5} className="d-flex justify-content-center">
                        <Image src={avatar} alt="Cindy Santos" className="intro__image" roundedCircle />
                    </Col>
                    <Col md={7}>
                        <p className="intro__eyebrow">{t.intro.eyebrow}</p>
                        <h1 className="intro__title">{t.intro.title}</h1>
                        <p className="lead text-light">{t.intro.lead}</p>
                        <p className="intro__availability">
                            <span className="intro__availability-dot" aria-hidden="true" />
                            {t.intro.availability}
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Intro;
