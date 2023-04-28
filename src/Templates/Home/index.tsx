import { About } from '../../Components/About'
import { Contact } from '../../Components/Contact'
import { Nav } from '../../Components/Nav'
import { Projects } from '../../Components/Projects'
import { Skills } from '../../Components/Skills'
import './style.css'

function App() {
  

  return (
    <>
      <Nav/>
        <div className='container-img'>
          <h1>Olá, eu sou Vinícius Amorim </h1>
        </div>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </>
  )
}

export default App
