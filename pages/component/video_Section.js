import React from 'react'
import Image from 'next/image'

export const Video_Section = () => {
    return (
        <div>
            <section className="happy bg-[#293356] pt-96 relative">

                <div className="container mx-auto max-w-screen-xl">

                    <div className="vid col-span-12 mt-[-57%]">
                        <Image src={"/images/vid.png"} height={950} width={1280} alt="" />
                    </div>

                    <div className="grid grid-cols-2 items-center pt-20">
                        <h2 class="text-7xl font-bold text-white leading-normal">Happy Deantal Static</h2>
                        <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A nemo commodi odio veniam nisi? Cupiditate nobis doloremque unde in ut, consequatur reprehenderit saepe iure perspiciatis, veniam facilis asperiores deleniti at?</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
