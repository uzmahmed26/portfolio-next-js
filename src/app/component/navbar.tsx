import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0">
      <header className="text-blue-900 body-font font-bold">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-bold items-center text-blue-900 mb-4 md:mb-0" href="https://www.youtube.com/@StormBrain26">
            <Image 
              src={require("../../../public/assets/picture/channels4_profile.jpg")}
              alt="Storm Brain"
              width={100}
              height={100}
              className="w-[80px] rounded-xl"
            />
            <span className="ml-3 text-xl ">Storm Brain</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-pink-600">
              Home
            </Link>
            <Link href={"#about"} className="mr-5 hover:text-pink-600">
              About
            </Link>
            <Link href={"#skills"} className="mr-5 hover:text-pink-600">
              Skills
            </Link>
            <Link href={"#project"} className="mr-5 hover:text-pink-600">
              Projects
            </Link>
            <Link href={"#Contact"} className="mr-5 hover:text-pink-600">
              Contact
            </Link>
          </nav>
          <a href="/assets/cv/uzma-ahmed.pdf">
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Download CV
              <AiOutlineCloudDownload className="text-xl ml-2" />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

      