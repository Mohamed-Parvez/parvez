import { Button } from "../ui/button";
import Logo from "../ui/logo";
import Navlist from "../ui/navlist";

const Nav = () => {
  return (
    <nav className="flex-center">
      <div
        className="flex-between fixed top-0 z-50 w-full max-w-screen-2xl bg-white px-5 
      py-3 md:px-10 xl:px-16 2xl:mx-auto"
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
