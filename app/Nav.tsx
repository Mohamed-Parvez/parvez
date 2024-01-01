import ImageComponent from "./components/ImageComponent";
import ButtonComponent from "./components/ButtonComponent";

const Nav = () => {
  return (
    <nav className="flex-between m-3 max-w-[1440px] 2xl:m-3 2xl:mx-auto">
      <ImageComponent src="/" alt="logo" height={30} width={30} />
      <ButtonComponent label="Let's Talk" classname="btn" />
    </nav>
  );
};

export default Nav;
