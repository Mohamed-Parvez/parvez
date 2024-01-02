import ButtonComponent from "./components/ButtonComponent";
import { ListOfNav } from "@/constants/utilities";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex-between m-3 max-w-[1440px] 2xl:m-3 2xl:mx-auto">
      <div className="md:flex-between gap-7 text-[16px]">
        <div className="hidden md:block">
          <ul className="flex-between gap-7 font-sans">
            {ListOfNav.map((data) => (
              <Link key={data.key} href={data.href}>
                <li>{data.label}</li>
              </Link>
            ))}
          </ul>
        </div>
        <Link href={""}>
          <ButtonComponent label="Let's Talk" classname="btn" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
