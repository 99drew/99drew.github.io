import { useState } from 'react';
import { Container, ButtonGroup, Button, Collapse } from 'react-bootstrap';
function ProfessionalExperience() {

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section id="ProfessionalExperience">
      <Container className="my-5">
        <h2 className="emp-title">
          <i className="fas fa-chevron-right"></i> <span>Experiência Profissional</span>
        </h2>
        <ButtonGroup>
          <Button
            variant="outline-light"
            onClick={() => toggleSection('frontendjr')}
            aria-controls="frontendjr"
            aria-expanded={openSection === 'frontendjr'}
          >
            Front-End Júnior
          </Button>
          <Button
            variant="outline-light"
            onClick={() => toggleSection('frontendpl')}
            aria-controls="frontendpl"
            aria-expanded={openSection === 'frontendpl'}
          >
            Front-End Pleno
          </Button>
          <Button
            variant="outline-light"
            onClick={() => toggleSection('frontendsr')}
            aria-controls="frontendsr"
            aria-expanded={openSection === 'frontendsr'}
          >
            Front-End Sênior | Líder Tecnico
          </Button>
        </ButtonGroup>
        <Collapse in={openSection === 'frontendjr'}>
          <div id="frontendjr" className="text-light mt-3">
            <p className='text-light'>Na minha primeira experiência profissional como desenvolvedora front-end, eu tinha pouco conhecimento em HTML e CSS. Inicialmente, trabalhei fazendo alterações em sites já publicados, conforme os desejos dos clientes. Isso me ajudou a desenvolver uma grande habilidade em resolução de problemas, pois muitas vezes precisava ir além do HTML e CSS para explorar soluções com JavaScript ou até mesmo PHP. Além disso, aprimorei meu olhar crítico em relação a layouts, enfrentando diversos desafios onde tive que replicar mockups ou criar telas com novos designs que melhorassem a experiência do usuário no site.</p>
            <p className='text-light'>Em resumo, esta etapa foi crucial para que eu pudesse de fato imegir no mundo front-end, sempre com muita curiosidade e vontade de aprender, acabei sendo promovida a front-end pleno, nessa etapa, já tinha mais conhecimento para resolver as tarefas.</p>
          </div>
        </Collapse>
        <Collapse in={openSection === 'frontendpl'}>
          <div id="frontendpl" className="text-light mt-3">
            <p className='text-light'>Como Pleno, meu novo desafio foi atuar produzindo os sites totalmente do zero ao invés de somente fazer alterações em sites já finalizados. Além disso, tentei repassar todo conhecimento para os júniors e apoia-los sempre que necessário, acabei desenvolvendo uma parte de liderança em mim e de certa forma, um senso de dono e preocupação com o projeto. Nessa etapa, imergi bem no que tange as práticas de SEO, pois nosso trabalho tem foco em posicionar nossos clientes nas primeiras páginas dos mecanismos de busca. Então buscamos criar os sites seguindo boas práticas de código e estrutura.</p>
            <p className='text-light'>Me responsábilizei por diversas inovações em nosso ambiente de produção, fazendo com que o processo ficasse mais simples. Trouxe inovações como um portfólio de componentes de layouts responsívos já prontos para serem replicados nos projetos. Apliquei treinamentos e em seguida fui promovida a front-end sênior.</p>
          </div>
        </Collapse>
        <Collapse in={openSection === 'frontendsr'}>
          <div id="frontendsr" className="text-light mt-3">
            Na minha função como Sênior, acabo executanto o papel de Líder Técnico, onde assumo diversas outras responsabilidades essenciais para o sucesso da equipe e da empresa. Minhas principais atividades incluem:
            <ul className='mt-3'>
              <li>Guiar e Desenvolver dos colaboradores da equipe</li>
              <li>Definição de metas</li>
              <li>Gestão da área</li>
              <li>Análise e otimização de fluxos de trabalho</li>
              <li>Feedback contínuo aos desenvolvedores</li>
              <li>Implementação de melhorias</li>
              <li>Relatórios a superiores</li>
            </ul>
            <p className='text-light'>Além disso, ponho a mão na massa dos códigos, mas dessa vez, não tanto quando antes.</p>
            <p className='text-light'><b>Por fim, tenho muito a desenvolver, tanto como front-end, quanto como líder. Minha jornada está apenas começando!</b></p>
          </div>
        </Collapse>
      </Container>
    </section>
  );
}
export default ProfessionalExperience;