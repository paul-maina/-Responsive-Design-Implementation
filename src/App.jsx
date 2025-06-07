import Navbar from "./Components/Navbar";
import Start from "./Components/Start";
import About from "./Components/About";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import Partners from "./Components/Partners";
import Explore from "./Components/Explore";
import Community from "./Components/Community";
import Help from "./Components/Help";
import Contact from "./Components/Contact";
import Conclusion from "./Components/Conclusion";

function App() {
  return (
    <div>
      <Navbar />
     
      <section id="start"><Start /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
     
       <section id="testimonials"><Testimonials /></section>
      <Partners />
      <Explore  />
      <Community />
      <section id="help"><Help /></section>
      <section id="contact"><Contact /></section>
      <Conclusion />
    </div>
  );
}

export default App;