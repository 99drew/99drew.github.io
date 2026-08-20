import Intro from './intro.js';
import AboutMe from './aboutMe.js';
import Skills from './skills.js';
import ProfessionalExperience from './professionalExperience.js';
import Works from './works.js';
import ObjectiveEducation from './objectiveEducation.js';
import Contact from './contact.js';

function Body() {
    return (
        <main>
            <Intro />
            <AboutMe />
            <Skills />
            <ProfessionalExperience />
            <Works />
            <ObjectiveEducation />
            <Contact />
        </main>
    );
}

export default Body;
