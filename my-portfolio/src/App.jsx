import Home from "./Components/Home";
 import About from "./Components/About";
 import Portfolio from "./Components/Portfolio";
import NavBar from "./Components/NavBar";
 import SocialLinks from "./Components/SocialLinks";
 import Experience from "./Components/Experience";
  import Contact from "./Components/Contact";
 import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <NavBar/>
       <Home/>
       <About/>
       <Portfolio/>
       <Experience/>
      <Contact/>
      <Footer/>
      <SocialLinks/> 

    </div>
  );
}

export default App;
