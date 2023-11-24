import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Introduction from "./Introduction/Introduction";
import Navbar from "./NavBar/Navbar";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Introduction/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
