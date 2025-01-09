import Image from "next/image";

export default function OverviewBlock({ block, mediaHandler }) {
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
          <div className="z-10 flex w-full justify-center items-center">
            <div className="flex flex-col gap-4">
              <h1 className="font-normal text-[109px] bonky leading-[100px] flex justify-center w-[669px]">
                {block?.main?.title}
              </h1>
              <p className="w-[774px] montserrat text-[23px] leading-[28.04px]">
                {block?.main?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
