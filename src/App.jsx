import Test from "./Test";
import "./app.scss" //if file is in the same folder, use one dot to import file
import Navbar from "./components/navbar/navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Parallax from "./components/parallax/parallax.jsx";
import Services from "./components/services/Services.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
      </section>
    <section id="Services">
      <Parallax type="services"/>
      </section>
    <section>
      <Services/>  
      </section>
    <section id="Portfolio">
      <Parallax type="portfolio"/>
      </section>
      <Portfolio/>
    {/* <section>Portfolio1  </section>
    <section>Portfolio2  </section>
    <section>Portfolio3  </section> */}
    <section id="Contact"> <Contact/> </section>
    {/* <Test/>
    <Test/> */}
  </div>;
};

export default App;
