import { Container, Row, Col } from 'react-bootstrap';
import { useLanguage } from '../i18n/LanguageContext.js';

function Footer() {
    const { t } = useLanguage();
    return (
        <section id="Footer">
            <Container fluid>
                <Row>
                    <Col xl={12}>
                        <p className="text-bg-dark p-3 text-center mb-0">© {new Date().getFullYear()} {t.footer.rights}: <b>Cindy Santos</b></p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Footer;
