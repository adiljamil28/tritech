import React from 'react'
import Image from 'next/image'

export const TeamSection = () => {
    return (
        <div>
            <section className="team py-28 bg-[#293356]">
                <div className="container mx-auto max-w-screen-xl">
                    <div className="team-text grid sm:grid-cols-2">
                        <div>
                            <h2 className="text-xl font-bold leading-normal text-white">Our Team</h2>
                            <h3 className="text-6xl font-bold leading-normal text-white">Build your next idea</h3>
                            <p className="text-neutral-300 py-10">Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.</p>
                        </div>

                    </div>


                    <div className="team-member flex flex-1/3 gap-6">

                        <div className="emp bg-white">
                            <Image src={"/images/m1.png"} height={475} width={460} alt="" />
                            <div className="team-txt py-8 px-10">
                                <h2 className="text-2xl font-bold mb-2 leading-normal">Dr. Caroly</h2>
                                <h3 className="text-[#5dae45] text-lg mb-2 leading-normal">Deantal speacialist</h3>
                            </div>
                        </div>

                        <div className="emp bg-white">
                            <Image src={"/images/m1.png"} height={475} width={460} alt="" />
                            <div className="team-txt py-8 px-10">
                                <h2 className="text-2xl font-bold mb-2 leading-normal">Dr. Caroly</h2>
                                <h3 className="text-[#5dae45] text-lg mb-2 leading-normal">Deantal speacialist</h3>
                            </div>
                        </div>

                        <div className="emp bg-white">
                            <Image src={"/images/m1.png"} height={475} width={460} alt="" />
                            <div className="team-txt py-8 px-10">
                                <h2 className="text-2xl font-bold mb-2 leading-normal">Dr. Caroly</h2>
                                <h3 className="text-[#5dae45] text-lg mb-2 leading-normal">Deantal speacialist</h3>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}
