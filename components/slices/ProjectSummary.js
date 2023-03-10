import Image from "next/image";
import vector from "@/public/img/vector.png";

export default function ProjectSummary ({slice}) {
    return (
        <div className="px-4 w-full xl:flex xl:justify-center mb-20">
            <div className="xl:w-[1345px] pt-4">
                <div className="flex flex-wrap justify-center">
                    <div className="xl:flex-col xl:w-1/3">
                        <div className="flex justify-center xl:justify-start items-center mb-2">
                            <p className="font-bold text-sm sm:text-lg xl:text-xl text-[#E11C38] uppercase">
                                <span className='text-[#07336E]'>{slice.title.split(" ")[0]} </span>
                                {slice.title.split(" ").slice(1, slice.title.split(" ").length).join(" ")}
                            </p>
                            <div className="relative w-[80px] h-[24px] sm:w-[100px] md:w-[100px] lg:w-[110px] xl:w-[150px]">
                                <Image
                                    src={vector}
                                    alt="vector"
                                    fill
                                    className="mx-2"
                                    style={{
                                        objectFit: "contain",
                                        objectPosition: "center",
                                    }}
                                />
                            </div>
                        </div>

                        <p className="font-semibold text-3xl xl:text-5xl text-center xl:text-left mb-8">
                            {slice.subtitle}
                        </p>
                    </div>

                    <div className="xl:flex-col xl:w-2/3">
                        <div
                            className="text-sm xl:text-base xl:font-medium text-[#636363] text-center xl:text-left mb-8"
                            dangerouslySetInnerHTML={{ __html: slice.description }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    )
};