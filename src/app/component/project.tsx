import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-5xl text-2x1 font-medium title-font mb-4 text-gray-900 bg-gray-200 p-5">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-5 -mt-[5rem]">  
          <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-containt object-center"
                  src={require("../../../public/assets/picture/Web-Design-.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-gray-200 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Website Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Website
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  "I specialize in creating visually engaging and user-friendly websites, blending creativity with functionality. Each site I design focuses on clean aesthetics, responsive layouts, and seamless navigation, ensuring a smooth user experience across all devices. Whether it's a portfolio, business site, or an interactive platform, my goal is to build websites that not only look great but also meet the specific needs of clients and users alike."
                  </p>
                  <Link
                    target="_blank"
                    href={"https://github.com/uzmahmed26"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assets/picture/atm-insert-card.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-gray-200 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Atm Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    ATM
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  The ATM (Automated Teller Machine) project is designed to simulate basic banking functionalities, enabling users to securely access their bank accounts for transactions. Key features include balance inquiry, cash withdrawal, and deposit. The system ensures user authentication through a PIN-based login, providing a user-friendly interface for seamless banking operations. This project emphasizes security, accuracy, and efficiency, making it an essential tool for managing day-to-day financial activities.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://github.com/uzmahmed26"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center bg-sky-600"
                  src={require("../../../public/assets/picture/cal.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-gray-200 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Calculator Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Calculator
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  The Calculator project is a simple yet powerful tool that allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. Designed with a user-friendly interface, it ensures quick and accurate calculations. This project demonstrates essential programming concepts, including input validation and error handling, making it an efficient utility for everyday mathematical tasks.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://github.com/uzmahmed26"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
             <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assets/picture/quiz.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-gray-200 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                  Quiz Game project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  The Quiz Game 
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  The Quiz Game project is an interactive and educational application designed to test users' knowledge across various topics. It features a series of multiple-choice questions with real-time feedback on answers. The game offers a user-friendly interface and incorporates scoring mechanisms to track performance and enhance engagement. This project highlights key programming skills such as question management, user interaction, and score calculation, providing a fun and informative experience for users of all ages.

                  </p>
                  <Link
                    target="_blank"
                    href={"https://github.com/uzmahmed26"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assets/picture/png-student managment.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-gray-200 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                  Student Management Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  The Student Management
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  The Student Management project is a comprehensive application designed to streamline the administration of student information. It allows for efficient management of student records, including personal details, academic performance, and attendance. The system features a user-friendly interface for both administrators and students, facilitating easy data entry, retrieval, and updates. This project demonstrates essential functionalities such as data organization, user authentication, and reporting, providing a robust solution for educational institutions to manage student-related tasks effectively.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://github.com/uzmahmed26"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assets/picture/oop.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-gray-200 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                  The Shopping List project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                   Shopping List
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  The Shopping List project is a practical application designed to help users efficiently manage their grocery and shopping needs. It allows users to add, edit, and remove items from their list, track quantities, and mark items as purchased. Featuring an intuitive interface, the application ensures a streamlined shopping experience by keeping track of items and providing a clear overview of what needs to be bought. This project demonstrates essential functionalities such as item management, data persistence, and user interaction, making it a valuable tool for everyday shopping tasks.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://github.com/uzmahmed26"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assets/picture/to do.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-gray-200 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                  To-Do List project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  To-Do List 
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  The To-Do List project is a practical and intuitive application designed to help users organize and manage their tasks efficiently. It allows users to add, edit, and remove tasks, set deadlines, and mark items as complete. Featuring a clean and user-friendly interface, the application ensures that users can easily keep track of their daily activities and stay organized. This project emphasizes key functionalities such as task management, data persistence, and user interaction, providing a valuable tool for personal productivity
                  </p>
                  <Link
                    target="_blank"
                    href={"https://github.com/uzmahmed26"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assets/picture/gassing.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-gray-200 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                  Gassing Game Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  The Gassing Game
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  The Gassing Game project is an engaging and interactive application designed to challenge players' logic and deduction skills. The game presents users with a random number or word to guess within a limited number of attempts. Featuring a user-friendly interface, it provides real-time feedback and hints to enhance the gaming experience. This project highlights core programming principles such as random number generation, user input handling, and game logic implementation, offering both entertainment and educational value. </p>

                  <Link
                    target="_blank"
                    href={"https://github.com/uzmahmed26"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
            
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assets/picture/wc.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-gray-200 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                  Word Counter project 
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  The Word Counter 
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  The Word Counter project is a practical tool designed to analyze and count the number of words, characters, and sentences in a given text. With a simple and intuitive interface, users can easily input or paste their text to receive detailed statistics. This application is useful for writers, editors, and students to monitor text length and ensure adherence to content requirements. The project showcases fundamental programming concepts such as text processing, user input handling, and real-time data analysis.?
                  </p>
                  <Link
                    target="_blank"
                    href={"https://github.com/uzmahmed26"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;

      