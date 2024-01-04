import Button from "../ui/button";
import Link from "next/link";
import { NavProperties } from "@/constants";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex-between m-3 max-h-[50px] max-w-[1440px] overflow-hidden 2xl:m-3 2xl:mx-auto">
      <Link href={"/"}>
        <Image
          className="ml-[-12px]"
          src={"/assets/images/parvez-logo.png"}
          alt="logo"
          height={29}
          width={100}
        />
      </Link>
      <div className="md:flex-between gap-7">
        <div className="hidden md:block">
          <ul className="flex-between gap-7 font-sans">
            {NavProperties.map((data) => (
              <Link key={data.key} href={data.href}>
                <li>{data.label}</li>
              </Link>
            ))}
          </ul>
        </div>
        <Link href={"#contact"}>
          <Button label="Let's Talk" variant={"btn"} type={"button"} />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
