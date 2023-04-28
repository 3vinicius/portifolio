import './style.css'
import svg from "../../Images/Sigla_COR.svg";
import svgEstacio from "../../Images/estacio-vector-logo.svg";
import svgUdemy from "../../Images/Udemy_logo.svg";

export const About = () => {
  

  return (
    <>
      <div className='container'>
        <section>
          <h1>Sobre mim</h1>
          <p>
            Minha formação em Física pela UFAL proporcionou uma sólida base acadêmica, envolvendo pesquisas e desenvolvimento de habilidades analíticas. Após me formar, decidi compartilhar meus conhecimentos como professor de matemática e física no ensino médio, inspirando meus alunos a explorar o mundo das ciências exatas. 
          </p>

          <p>
          No entanto, em busca de novos desafios, optei por uma transição de carreira para o desenvolvimento web. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas, com foco em tecnologias front-end, mas almejo me tornar um desenvolvedor Full Stack. Estou entusiasmado com as possibilidades do campo de desenvolvimento web e confiante em contribuir de forma significativa, combinando minha formação em Física, experiência como professor e determinação em adquirir novas habilidades.
          </p>
        </section>

        <aside>
          <div className='card-line'>
            <div>
              <p>Graduação em Física Licenciatura</p>
              <span>Universidade Federal de Alagoas</span>
              <br/>
              <span>2018 - 2023</span>
            </div>
            <img className='iconUFAL' src={svg} alt="" />
            
          </div>
          <div className='card-line before-line'>
            <div>
            <p>Graduação em Analise e Desenvolvimento de sistemas</p>
            <span>Estácio</span>
            <span>2023 - 2025</span>
            </div>
            <img className='iconUFAL' src={svgEstacio} alt=""/>
          </div>
          <div className='card-line before-line'>
            <div>
            <p>Curso de React.js e Next.JS</p>
            <span>Udemy - 2023</span>
            </div>
            <img className='iconUFAL' src={svgUdemy} alt="" />
          </div>
        </aside>
      </div>
    </>
  )
}


