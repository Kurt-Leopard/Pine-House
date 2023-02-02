import React from 'react'

export const ImageTitleDescription = ({slice, post}) => {
  return (
    <section className={`block py-[50px] w-full overflow-hidden slice slice-type-${slice.sliceType}`}>
        <div className="container mx-auto">
                <div className={`block__image ${slice.alignmentRight === 0 ? 'float-left pr-[100px]' : 'float-right pl-[100px]'}`}>
                    {/* <Image src={slice.image.uri} width={500} height={500} /> */}
                    <img src={slice.image.uri} />
                </div>
                <h2 className="font-bold text-5xl mb-[30px]">
                    {slice.title}
                </h2>
                <div dangerouslySetInnerHTML={{__html: slice.description}} />
        </div>

    </section>
  )
}