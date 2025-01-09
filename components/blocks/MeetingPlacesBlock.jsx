import Image from "next/image";

export default function MeetingPlacesBlock({ block, mediaHandler }) {
  return (
    <div className="relative">
      <div className="grid grid-cols-3 h-[802px]">
        <div className="w-full h-full bg-black">
          <Image
            src={
              mediaHandler?.["main.images.0.image"][0]?.conversions
                ?.thumbnail ||
              mediaHandler?.["main.images.0.image"][0]?.original
            }
            width={630}
            height={802}
            alt="Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-full flex items-center justify-center relative bg-black">
          <div className="relative w-full h-full">
            <span className="bg-black w-full h-full absolute bg-opacity-60"></span>
            <div className="text-white absolute inset-0 flex flex-col justify-center items-center gap-y-12">
              <h1 className="uppercase text-[90px] leading-[85px] text-center bonky">
                {block?.main?.title}
              </h1>
              <button className="uppercase text-[23px] leading-[28px] text-center montserrat border-2 p-4">
                learn more
              </button>
            </div>
            <Image
              src={
                mediaHandler?.["main.images.1.image"][0]?.conversions
                  ?.thumbnail ||
                mediaHandler?.["main.images.1.image"][0]?.original
              }
              width={630}
              height={802}
              alt="Image"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="w-full h-full bg-black">
          <Image
            src={
              mediaHandler?.["main.images.2.image"][0]?.conversions
                ?.thumbnail ||
              mediaHandler?.["main.images.2.image"][0]?.original
            }
            width={630}
            height={802}
            alt="Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
