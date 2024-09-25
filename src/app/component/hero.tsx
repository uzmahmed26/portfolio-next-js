"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";
import  {motion}  from 'framer-motion';

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
      <div className="container mx-auto flex px-11 py-28 md:flex-row flex-col items-center pb-1 pt-1">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "UI/UX Designer",
                  "Graphic Designer",
                  "Teacher",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="w-[100px] h-[2px] bg-blue-700"></div>
          <p className="mb-8 leading-relaxed text-blue-950 text-lg">
          As a frontend developer and graphic designer, I am passionate about creating visually stunning and user-friendly experiences that bring people&lsquo;s ideas to life. With a strong foundation in web development principles and best practice&lsquo;s, I&lsquo;ve honed my skills in HTML, CSS, JavaScript, and other relevant technologies. Throughout my academic journey, I&lsquo;ve consistently sought out opportunities to apply my knowledge and enhance my skills through personal projects and internships.
          </p>
          <div className="flex justify-center">
            <Link href={"#Contact"}>
              <button className="inline-flex text-white bg-blue-950 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>
    
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 p-5">
<motion.div
  className="relative w-full h-auto"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 3 }}
>
  <Image
    className="object-cover object-center rounded mx-auto w-full h-auto"
    alt="hero"
    src={("/assets/picture/dp.png")}
    height={100}
    width={400}
   
  />
</motion.div>
</div>   
        </div>
      {/* </div> */}
    </section>
  );
};

export default Hero;

