import ImageComponent from "./components/ImageComponent";
import ButtonComponent from "./components/ButtonComponent";
import { ListOfNav } from "@/constants/utilities";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex-between m-3 max-w-[1440px] 2xl:m-3 2xl:mx-auto">
      <ImageComponent src="/" alt="logo" height={30} width={30} />
      <div className="md:flex-between hidden gap-7 text-[16px] md:block">
        <ul className="flex-between gap-7 font-sans">
          {ListOfNav.map((data) => (
            <Link key={data.key} href={data.href}>
              <li>{data.label}</li>
            </Link>
          ))}
        </ul>
        <ButtonComponent label="Let's Talk" classname="btn" />
      </div>
    </nav>
  );
};

export default Nav;
