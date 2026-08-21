import { Container } from 'react-bootstrap';
import SectionTitle from './sectionTitle.js';
import Reveal from './Reveal.js';
import { useLanguage } from '../i18n/LanguageContext.js';

function AboutMe() {
    const { t } = useLanguage();
    return (
        <section id="AboutMe" className="section-spacing">
            <Container>
                <SectionTitle>{t.aboutMe.title}</SectionTitle>
                <Reveal as="p" className="text-light fw-medium">{t.aboutMe.positioning}</Reveal>
                <Reveal as="p" delay={80} className="text-light">{t.aboutMe.body}</Reveal>
            </Container>
        </section>
    );
}
export default AboutMe;
