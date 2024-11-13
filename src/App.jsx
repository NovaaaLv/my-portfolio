import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div className="">
      <section className="" id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section className="" id="Services">
        <Parallax type="services" />
      </section>
      <section className="">
        <Services />
      </section>
      <section className="" id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section className="">Portfolio1</section>
      <section className="">Portfolio2</section>
      <section className="">Portfolio3</section>
      <section className="" id="Contact">
        Contact
      </section>
    </div>
  );
};

export default App;
