import Navbar from "./Components/Navbar";
import Start from "./Components/Start";
import About from "./Components/About";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import Partners from "./Components/Partners";
import Explore from "./Components/Explore & Learn";
import Community from "./Components/Community";
import Help from "./Components/Help";
import Contact from "./Components/Contact";
import Conclusion from "./Components/Conclusion";


function App(){
  return(
    <div>
      <Navbar/>
      <Start/>
      <About/>
      <Services/>
      <Testimonials/>
      <Partners/>
      <Explore/>
      <Community/>
      <Help/>
      <Contact/>
      <Conclusion/>
    </div>
  );
};

export default App;