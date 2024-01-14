import Button from "../ui/button";
import Logo from "../ui/logo";
import Navlist from "../ui/navlist";

const Nav = () => {
  return (
    <nav
      className="flex-between fixed top-0 z-50 h-auto
      max-h-[50px] w-full max-w-[1440px] p-3 2xl:mx-auto"
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
    </nav>
  );
};

export default Nav;
