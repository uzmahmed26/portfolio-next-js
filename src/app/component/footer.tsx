import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsYoutube } from "react-icons/bs";         // YouTube icon
import { FaLinkedin, FaGithub, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";  // All from Font Awesome (fa)



const Footer = () => {
  return (
    <div className="bg-blue-50">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col justify-between">
          <div className="flex items-center">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href="https://www.youtube.com/@StormBrain26">
            <Image
              src={require("../../../public/assets/picture/channels4_profile.jpg")}
              alt="Storm Brain"
              width={100}
              height={100}
              className="w-[50px]"
            />
            <span className="ml-3 text-xl">Storm Brain</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © UzmaAhmed2024 Storm Brain
          </p>
          </div>
          <div className=" flex ml-auto space-x-16">
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href={"https://www.youtube.com/@StormBrain26"}
              className="text-red-500"
            >
              <BsYoutube className="text-3xl hover:text-[#ff0000]" />
            </Link>
          </span>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/uzma-ahmed-3557402ba/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BNI6rJB5gThW6fYewis86%2BA%3D%3D"}
              className="text-blue-500"
            >
              <FaLinkedin className="text-3xl hover:text-[#4f92ef]" />
            </Link>
          </span>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href={"https://github.com/uzmahmed26"}
              className="text-black-900"
            >
              <FaGithub className="text-3xl hover:text-[#3a3838]" />
            </Link>
          </span>
        
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href={"https://www.facebook.com/uzmahmed"}
              className="text-blue-500"
            >
              <FaFacebookSquare className="text-3xl hover:text-[#4f92ef]" />
            </Link>
          </span>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href={"https://www.instagram.com/uzmas_collection_/"}
              className="text-pink-700"
            >
              <FaInstagramSquare className="text-3xl hover:text-[#d35b91]" />
            </Link>
          </span>
          </div>
          </div>
         
      </footer>
    </div>
  );
};

export default Footer;

      