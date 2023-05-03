import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { getCurrentYear } from "@/lib/services/globalService";
import { GlobalContext } from "@/lib/context/GlobalContext";

export default function FooterHalcyon() {
  const router = useRouter();
  const { tenantDetails, menus } = useContext(GlobalContext);
  const global = tenantDetails?.data?.main;
  const menuHandler = menus?.parentNodes;

  return (
    <>
      <div
        className={`md:py-4 py-0 z-50 w-full transition duration-600 ease-in-out px-4`}
      >
        <div className="flex flex-col justify-center items-center text-gray-500">
          <div className="xxl:max-w-[1345px] xl:max-w-[1260px] w-full flex md:mx-0 mx-4 py-4 justify-between">
            <div className="sm:grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 block">
              {!menuHandler?.length > 0 && (
                <div className="border-b-4 border-transparent ">Loading</div>
              )}

              {menuHandler?.length > 0 &&
                menuHandler.map((nav, i) => (
                  <Link href={nav.url || router.pathname} key={i}>
                    <div
                      className={`
                              md:text-base text-sm mt-1 sm:mt-0 mr-6 sm:mr-16 md:px-0 border-b-2 border-transparent slide-line-hover tracking-normal
                              ${
                                router.pathname.includes(nav.url) &&
                                router.pathname !== "/"
                                  ? "underline underline-offset-4"
                                  : ""
                              }
                            `}
                    >
                      {nav.label}
                    </div>
                  </Link>
                ))}
            </div>
            <div className="sm:grid lg:grid-cols-2 sm:grid-cols-1 block">
              <div className="">
                <p
                  className={`md:text-base font-semibold text-sm md:px-0 border-b-2 border-transparent slide-line-hover tracking-normal`}
                >
                  {global?.email}
                </p>
              </div>
              <div className="">
                <p
                  className={`mt-4 sm:mt-0 font-semibold md:text-base text-sm md:px-0 border-b-2 border-transparent slide-line-hover tracking-normal`}
                >
                  L3-02B, SOHO Retail Podium 748 <br /> Shaw Blvd, Greenfield
                  District, <br /> Mandaluyong City, 1552
                </p>
              </div>
            </div>
          </div>
          <div className="xxl:max-w-[1345px] xl:max-w-[1260px] w-full items-center mx-auto overflow-x-hidden overflow-y-hidden border-t border-gray-400">
            <div className="flex mobile:flex-row flex-col justify-between justify-center items-center">
              <div className="flex text-sm xxl:mx-0 pt-6 pb-2 cursor-pointer">
                <Image
                  src={global?.logo}
                  alt="Halcyon Logo"
                  className="mx-1"
                  width={150}
                  height={24}
                />
              </div>
              <div className="flex-row mobile:mx-0 mx-6 py-6 ">
                <div className="flex flex-col mobile:items-end items-center">
                  <div className="cursor-pointer text-[10px] sm:text-base">
                    Privacy | Terms & Conditions
                  </div>
                  <div className="flex items-center cursor-pointer">
                    <Image
                      src="/svg/copyright.svg"
                      alt="Copyright Logo"
                      className="mx-1"
                      width={15}
                      height={15}
                    />
                    <p className="text-[9px] sm:text-base">
                      Copyright {getCurrentYear()} {global.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}