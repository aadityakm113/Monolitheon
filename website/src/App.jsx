import About from "./Components/about/About"
import Contact from "./Components/contact/Contact"
import Footer from "./Components/footer/Footer"
import Header from "./Components/header/Header"

const App = () => {
  return (
    <div className="container">
      <Header />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App