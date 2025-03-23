import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import Image from "next/image";





export default function Header(){
  return (
    <div>
              <div className="main-topbar py-4 bg-[#5dae45]">
                <div className="container mx-auto max-w-screen-xl">
                  <div className="topbar flex flex-1/2 justify-between items-center">
        
                    <div className="addrs">
                      <span className="address text-lg text-white flex items-center gap-2"><IoLocationOutline />
                        4141 streer 10 usa</span>
                    </div>
        
                    <div className="contact flex gap-2 items-center">
                      <a href="tel:84848484848484" className="mr-2.5 text-lg text-white flex items-center gap-2"><FiPhone />
                        84848 48484 48484</a>
                      <a href="mailto:company@domain.com" className="text-lg text-white flex items-center gap-2" ><MdOutlineMailOutline />company@domain.com </a>
                    </div>
        
                  </div>
                </div>
              </div>
        
              <header className="header bg-white py-4">
                <div className="container mx-auto max-w-screen-xl ">
        
        
                  <div className="grid-cols-12 flex justify-between">
                    <div className="gird-span-8 flex gap-2.5 items-center">
                      <div className="logo">
                        <a href="/">
                          <Image src={"/images/logo.png"} height={50} width={200} alt="logo" />
                        </a>
                      </div>
        
                      <ul className="flex space-x-3">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact Us</a></li>
                      </ul>
                    </div>
        
                    <div className="gird-span-4">
                      <button className="bg-[#304690] text-xl font-medium text-white px-12 py-2.5 flex items-center gap-2">
                        Get Start<FaArrowRight /></button>
                    </div>
                  </div>
        
                </div>
              </header>
    </div>
  )
}
