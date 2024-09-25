import Image from "next/image";
import React from "react";


const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto w-[400px] h-[400px]"
              alt="hero"
              src={("/assets/picture/dp1.jpeg")}
              width={300}
              height={500}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-5 leading-relaxed">
            I am a passionate Graphic Designer and Frontend Developer with a keen eye for detail and a love for creating visually engaging and user-friendly digital experiences. Currently, I am enhancing my skills as a student of W.3 Metaverse, where I am exploring the future of web technologies. 
            </p>
            <p className="mb-5 leading-relaxed">
            My expertise lies in Next.js, where I build modern, performant web applications that are both dynamic and responsive. Balancing creativity and functionality, I aim to bridge the gap between design and code, constantly pushing the boundaries of web development.
            </p>
            <div className="flex justify-center">
              <a href="/assets/cv/uzma-ahmed.pdf">
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  View CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

      