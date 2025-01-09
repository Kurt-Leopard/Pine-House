import Link from "next/link";
import globalState from "@/lib/store/globalState";
import { LogoIcon, SignInIcon, SearchIcon } from "@/public/svg/svg";
import pineHouseMenu from "@/lib/preBuildScripts/static/pineHouseMenu.json";

export default function Menu() {
  const ready = globalState((state) => state.ready);

  const dynamicMenuItems = pineHouseMenu?.nodes;
  return (
    <header className="py-[30px] z-[1000] sticky top-0 bg-white shadow-md text-[#7F7F7F] font-montserrat ">
      <div className="px-32">
        <div className="flex flex-wrap justify-between items-center">
          <div className="logo">
            <Link href="/">
              <div className="w-[200px] rounded-sm h-[70px] flex items-center justify-center p-[15px]">
                <LogoIcon />
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-between uppercase">
            <nav className="flex items-center gap-[100px] ">
              {ready &&
                dynamicMenuItems.map((node, i) => {
                  return (
                    <Link href={node.url} key={i} target={node.target}>
                      {node.label}
                    </Link>
                  );
                })}
            </nav>
          </div>
          <div className="flex items-center gap-[60px]">
            <div className="flex items-center gap-[0px]">
              <SignInIcon />
              <ul className="uppercase flex items-center justify-between w-[200px] list-none">
                <li className="flex-1">
                  <Link
                    href="/"
                    className="border-r-2  w-full flex items-center justify-center py-2"
                  >
                    Sign In
                  </Link>
                </li>
                <li className="flex-1">
                  <Link
                    href="/"
                    className="w-full flex items-center justify-center  py-2"
                  >
                    Join Now
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
