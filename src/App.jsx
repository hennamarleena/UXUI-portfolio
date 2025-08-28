import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ProjectPage from './components/ProjectPage'
import MainContent from './components/MainContent'
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Header />
      <main role="main">
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/project/:id" element={<ProjectPage />} />
          </Routes>
        </ScrollToTop>
      </main>
      <Footer />
    </Router>
  )
}

export default App
