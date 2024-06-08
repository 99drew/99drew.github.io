import Intro from './intro.js';
import AboutMe from './aboutMe.js';
import Skills from './skills.js';
import Works from './works.js';
import ProfessionalExperience from './professionalExperience.js';
import Contact from './contact.js';

function Body() {
    return (
        <body>
            <Intro /><Skills /><AboutMe /><Works /><ProfessionalExperience /><Contact />
        </body>
    );
}

export default Body;
