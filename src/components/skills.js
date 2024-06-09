import { Container, CardGroup, Card } from 'react-bootstrap';
import html from '../img/icons/html.png';
import css from '../img/icons/css.png';
import js from '../img/icons/js.png';
import ts from '../img/icons/ts.png';
import react from '../img/icons/react.png';
import php from '../img/icons/php.png';
import git from '../img/icons/git.png';
import bem from '../img/icons/bem.png';
function Skills() {
    return (
        <section id="Skills">
            <Container className="mb-5">
                <h2 className="emp-title"> <i className="fas fa-chevron-right"></i> <span>Skills</span></h2>
                <div className="skills__content">
                    <CardGroup>
                        <Card className="card card--skills">
                            <Card.Img className="card__picture" src={html} alt="HTML 5" title="HTML 5" />
                            <Card.Title className="card__title">HTML 5</Card.Title>
                        </Card>
                        <Card className="card card--skills">
                            <Card.Img className="card__picture" src={css} alt="CSS 3" title="CSS 3" />
                            <Card.Title className="card__title">CSS 3</Card.Title>
                        </Card>
                        <Card className="card card--skills">
                            <Card.Img className="card__picture" src={js} alt="JavaScript" title="JavaScript" />
                            <Card.Title className="card__title">JavaScript</Card.Title>
                        </Card>
                        <Card className="card card--skills">
                            <Card.Img className="card__picture" src={php} alt="PHP" title="PHP" />
                            <Card.Title className="card__title">PHP</Card.Title>
                        </Card>
                        <Card className="card card--skills">
                            <Card.Img className="card__picture" src={react} alt="React" title="React" />
                            <Card.Title className="card__title">React</Card.Title>
                        </Card>
                        <Card className="card card--skills">
                            <Card.Img className="card__picture" src={ts} alt="TypeScript" title="TypeScript" />
                            <Card.Title className="card__title">TypeScript</Card.Title>
                        </Card>
                        <Card className="card card--skills">
                            <Card.Img className="card__picture" src={git} alt="Git" title="Git" />
                            <Card.Title className="card__title">GIT</Card.Title>
                        </Card>
                        <Card className="card card--skills">
                            <Card.Img className="card__picture" src={bem} alt="BEM (Block, Element, Modifier)" title="BEM (Block, Element, Modifier)" />
                            <Card.Title className="card__title">BEM</Card.Title>
                        </Card>
                    </CardGroup>
                </div>
            </Container>
        </section>
    );
}
export default Skills;