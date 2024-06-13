import About from "./Components/about/About"
import Contact from "./Components/contact/Contact"
import Footer from "./Components/footer/Footer"
import Gallery from "./Components/gallery/Gallery"
import Header from "./Components/header/Header"
import "./App.css"

const App = () => {
  return (
    <div className="container">
      <Header />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App