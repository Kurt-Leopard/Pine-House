import Image from "next/image";

export default function LocationBlock({ block, mediaHandler }) {
  return (
    <>
      <div className="relative">
        <div className="w-full h-[798px]">
          <div className="absolute w-full flex justify-center py-4 text-[50px] font-[350px] text-[#224946] gotham">
            LOCATION
          </div>
          <Image
            src={
              mediaHandler["main.image"]?.[0]?.conversions?.desktop ||
              mediaHandler["main.image"]?.[0]?.original
            }
            width={1920}
            height={798}
            alt="map"
            className="w-full h-[798px] object-cover"
          />
        </div>
      </div>
    </>
  );
}
