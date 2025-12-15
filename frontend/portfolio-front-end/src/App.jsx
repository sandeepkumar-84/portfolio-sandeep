import NavBar from './components/layout/NavBar'
import './App.css'
import Home from './components/sections/home/home'
import About from './components/sections/about/About'
import Contact from './components/sections/contact/Contact'
import AiLab from './components/sections/aiLab/AiLab'
import CaseStudies from './components/sections/caseStudies/CaseStudies'
import Leadership from './components/sections/leadership/Leadership'
import TechStack from './components/sections/techStack/TechStack'

function App() {
  


  return (
    <>
      <NavBar />
      <main>
        <Home/>
      
        <About/>
        
        <Contact/>
        <AiLab/>
        <CaseStudies/>
        <Leadership/>
        <TechStack/>        
      </main>
    </>
  )
}

export default App
