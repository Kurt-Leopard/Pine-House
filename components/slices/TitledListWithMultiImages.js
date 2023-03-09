import Image from "next/image";
import { useState } from "react";
import laptop from "@/public/images/laptop.png";
export default function TitledListWithMultiImages({ slice }) {
  const [active, setActive] = useState("");
  const stages = slice?.main?.stages || [];
  const stage = stages.find((stage) => stage?.name === active) || stages[0];

  return (
    <div
      style={{ backgroundColor: `${slice?.main?.bg_color || "transparent"}` }}
      id={slice?.id}
    >
      <div className="lg:min-h-[75vh] min-h-0 w-full max-w-screen-xl mx-auto md:pt-20 md:pb-20 pt-12 pb-20 px-8 xxl:px-0 flex flex-col sm:flex-row items-center gap-24 sm:gap-8 border-t-2 border-black/10">
        <div className="w-full sm:w-auto">
          {slice?.main?.title && <h2 className="mb-4">{slice?.main?.title}</h2>}
          {stages && stages.length > 0 && (
            <div
              className="grid grid-flow-col sm:flex flex-col gap-8 h-full w-full sm:w-1/3"
              style={{
                gridTemplateRows: `repeat(${Math.ceil(
                  stages.length / 2
                )}, 1fr)`,
              }}
            >
              {stages.map((item, i) => (
                <button
                  key={item?.name}
                  aria-label={item?.name}
                  className={`text-left transition-all flex flex-col sm:flex-row sm:items-center gap-x-4 sm:text-2xl text-2xl font-bold`}
                  onClick={() => setActive(item?.name)}
                >
                  <span className="text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`underline-animation ${
                      stage?.name === item?.name && "underline-animation-active"
                    }`}
                  >
                    {item?.name}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-8 w-full">
          <div className="w-full space-y-20">
            {stage?.title && (
              <h3 className="text-2xl md:text-3xl font-bold text-center max-w-2xl mx-auto">
                {stage?.title}
              </h3>
            )}
            {/* DESKTOP IMAGE */}
            {stage?.desktop_image && (
              <div className="relative">
                <Image
                  alt=""
                  src={laptop}
                  blurDataURL={laptop}
                  width="400"
                  height="200"
                  className="h-full w-full z-10"
                />
                <div className="absolute top-[6.3%] w-full max-w-[78%] max-h-[85%] h-full left-1/2 -translate-x-1/2">
                  <Image
                    alt=""
                    src={stage?.desktop_image}
                    blurDataURL={stage?.desktop_image}
                    fill
                    className="h-full w-full object-cover bg-white"
                  />
                </div>
              </div>
            )}
          </div>
          {stage?.mobile_images && stage?.mobile_images.length > 0 && (
            <div className="flex justify-around gap-4 sm:block relative min-w-[35%] min-h-[50vh] sm:min-h-full">
              {stage?.mobile_images.map((image) => {
                if (!image) return <></>
                return (
                  <Image
                    key={image}
                    alt={image}
                    src={image}
                    blurDataURL={image}
                    width="400"
                    height="200"
                    // className="aspect-[9/16] w-full max-w-[55%] object-cover object-top sm:h-[60%] lg:h-[75%] rounded-xxl shadow-lg last:mt-auto first:relative first:left-4 last:z-10"
                    // className="aspect-[9/16] w-full max-w-[55%] sm:max-h-[40vh] rounded-xxl shadow-lg last:-ml-[10%] last:z-10 first:relative first:sm:-top-[50%]"
                    className="aspect-[9/16] sm:aspect-[6/20] md:aspect-[6/16] lg:aspect-[8/16] w-1/2 sm:w-full sm:max-w-[55%] rounded-xxl sm:absolute last:bottom-0 last:right-0 object-cover object-top sm:max-h-[55%] mobile:max-h-[52%]"
                  />
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
