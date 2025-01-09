import Image from "next/image";
import Link from "next/link";
export default function OffersBlock({ block, mediaHandler }) {
  console.log(block);
  return (
    <>
      <div className="relative">
        <div className="bg-black w-full h-[630px] text-white grid grid-cols-2">
          <Image
            src={
              mediaHandler["main.image"][0]?.conversions?.desktop ||
              mediaHandler["main.image"][0]?.original
            }
            width={1137}
            height={630}
            className="w-full h-[630px] object-cover absolute"
            alt="home"
          />
          <div className="z-10 flex w-full items-center col-start-2 px-24">
            <div className="flex flex-col w-full text-right justify-end gap-y-4">
              <span className="font-[350px] text-[31px] leading-[29px] uppercase">
                {block?.main?.title}
              </span>
              <span className="bonky text-[109px] leading-[100px]">
                {block?.main?.header}
              </span>
              <span className="montserrat text-[23px] leading-[28px]">
                {block?.main?.description}
              </span>
              <span>
                <Link href={block?.main?.url}>
                  <button className="px-8 py-2 text-[#224946] text-lg bg-[#BEB7B3] uppercase font-bold">
                    know more
                  </button>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
