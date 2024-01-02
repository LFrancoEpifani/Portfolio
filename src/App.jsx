import AboutMe from "./components/AboutMe/AboutMe"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"



function App() {
  
  return (
    <div>
      <div>
          <Header/>
          <Hero/>
          <AboutMe/>
        </div>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App
