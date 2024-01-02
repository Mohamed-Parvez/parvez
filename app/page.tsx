import About from "./About";
import Products from "./Products";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <main>
        <About />
        <Products />
        <Services />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
