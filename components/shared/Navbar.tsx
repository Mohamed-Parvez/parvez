import { Button } from "../ui/button";
import Logo from "../ui/logo";
import Navlist from "../ui/navlist";

const Nav = () => {
  return (
    <nav className="flex-center">
      <div
        className="flex-between fixed top-0 z-50 w-full 
      max-w-screen-2xl bg-white p-3 2xl:mx-auto"
      >
        <Logo />
        <div className="md:flex-between gap-7">
          <Navlist />
          <Button
            label="Let's Talk"
            variant={"btn"}
            type={"button"}
            href="#contact"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
