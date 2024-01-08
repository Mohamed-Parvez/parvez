import Contact from "@/components/forms/Contact";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
