import { Container } from 'react-bootstrap';
import { useLanguage } from '../i18n/LanguageContext.js';

function Footer() {
    const { t } = useLanguage();
    return (
        <section id="Footer" className="site-footer">
            <Container>
                <p className="site-footer__text">© {new Date().getFullYear()} {t.footer.rights}: <b>Cindy Santos</b></p>
            </Container>
        </section>
    );
}
export default Footer;
