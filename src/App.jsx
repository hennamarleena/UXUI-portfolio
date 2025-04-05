import './App.css'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
 
  return (
    <>
       <Header />
       <main role="main">
        <About />
        <Skills />
        <Projects />
        <Contact />
       </main>
       <Footer />
    </>
  )
}

export default App
