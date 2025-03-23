import React from 'react'
import Image from "next/image";


export default function About_Section() {
  return (
    <div>
              <section className="abt-sec pt-28 pb-[26%] relative">
                <div className="container mx-auto max-w-screen-xl">
                  <div className="abt-con grid grid-cols-12 items-center">
        
                    <div className="col-span-6">
                      <Image src={"/images/abt-pic.png"} width={460} height={560} alt="abt-pic" />
                    </div>
        
                    <div className="col-span-6">
                      <div className="abt-txt">
                        <h2 className="text-xl italic text-neutral-500 dark:text-neutral-400 mb-3">About Us</h2>
                        <h3 className="text-5xl font-bold mb-4 leading-normal">Your Trusted Pertner For Dental Health</h3>
                        <p className="text-neutral-400">Mauris risus adipiscing cursus consequat. Sit duis lol am non. Mauris risus adipiscing cursus consequat. Sit duis lol am non. </p>
        
                        <div className="abt-box flex flex-1/2 pt-7">
                          <div className="abt-inner ">
                            <Image className="mb-2.5" src={"/images/abt-icon.png"} width={60} height={50} alt="icon" />
                            <h2 className="text-lg font-bold mb-2">Expericses Deantal Heatlh</h2>
                            <p className="text-neutral-400">risus adipiscing cursus consequat. Sit duis lol am non. Mauris risus adipiscing</p>
                          </div>
        
                          <div className="abt-inner">
                            <Image className="mb-2.5" src={"/images/abt-icon.png"} width={60} height={60} alt="icon" />
                            <h2 className="text-lg font-bold mb-2">Expericses Deantal Heatlh</h2>
                            <p className="text-neutral-400">risus adipiscing cursus consequat. Sit duis lol am non. Mauris risus adipiscing</p>
                          </div>
        
                        </div>
        
                      </div>
                    </div>
        
        
        
                  </div>
                </div>
              </section>
    </div>
  )
}
