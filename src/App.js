import { useState, useRef } from "react";
import { inject } from '@vercel/analytics';
import React from "react";
import MainPagePic from "../public/images/imageGael.jpg";
import { MainSpace } from "./components/organisms/MainSpace";
import { Navbar } from "./components/molecules/navbar/Navbar";
import { vertFadeInPres, vertFadeInScroll } from "../gsap/verticalFadeIn";
import { horFadeInPres } from "../gsap/horizontalFadeIn";
import {
  MailOutlined,
  PhoneOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

function App() {
  inject();
  // constantes (état, données)
  let verRef = React.useRef(null);
  let horRef = React.useRef(null);

  React.useEffect(() => {
    vertFadeInPres(verRef, 2, 0);
    horFadeInPres(horRef, 2, 0);
  }, []);

  const nbMainSpace = [
    {
      key: 1,
      name: "About Me",
      deploy: {
        text: "Hello and welcome to my portfolio !! Thanks for coming here and taking the time to know me better ! while strolling between the menus you can learn a little more about me, my ambitions and my passions!",
        passions: [
          {
            key: 1,
            image: "",
            text: "Computer Science & IT",
          },
          {
            key: 2,
            image: "",
            text: "Mechanics & Automobile Preparation",
          },
          {
            key: 3,
            image: "",
            text: "Fashion & Haute Couture",
          },
          {
            key: 4,
            image: "",
            text: "Music",
          },
          {
            key: 5,
            image: "",
            text: "Sports & Video Games",
          },
          {
            key: 6,
            image: "",
            text: "Travelling",
          },
        ],
        softSkills: [
          {
            key: 1,
            image: "",
            text: "Creative",
          },
          {
            key: 2,
            image: "",
            text: "Public Speaker",
          },
          {
            key: 3,
            image: "",
            text: "Autonomous",
          },
          {
            key: 4,
            image: "",
            text: "Applied",
          },
          {
            key: 5,
            image: "",
            text: "Active Listener",
          },
          {
            key: 6,
            image: "",
            text: "Open Minded",
          },
        ],
      },
    },
    {
      key: 2,
      name: "My Professional Experience",
      deploy: {
        timelineInfo: [
          {
            key: 1,
            title: "Butcher at the outdoor market",
            location: "Boucherie Marques",
            location2: "Gradignan, France",
            dates: "2020-2021",
          },
          {
            key: 2,
            title: "System Administrator and Internal IT Support - Intern",
            location: "Omnitech Security",
            location2: "Bordeaux, France",
            dates: "April 2022 - July 2022",
          },
          {
            key: 3,
            title: "Self-Service Employee",
            location: "Carrefour Bordeaux",
            location2: "Bordeaux, France",
            dates: "September 2022 - January 2023",
          },
          {
            key: 4,
            title: "Web Developper BAC +3 - Intern",
            location: "Orange SA",
            location2: "Pessac, France",
            dates: "January 2023 - April 2023",
          },
          {
            key: 5,
            title: "Web Developper Free-Lance",
            location: "TB PAYE Conseils",
            location2: "Bordeaux, France",
            dates: "March 2023 - May 2023",
          },
        ],
        texts: [
          "First Profesionnal Experience",
          "During this internship, i was a system administrator and had to configure serveral servers, help the collegues and fix their computer problems.",
          "I got this job because i needed experience and money to pay my appartement to be fair, though i can say this experience ended-up being very fun.",
          "This was my favourite profesionnal experience so-far ! the mission was very interesting and the team I worked with was very nice to me",
          "I did my first Free-Lance mission to see how it would fit with my schedule, my team and i ended-up finishing the mission in only a week.",
        ],
      },
    },
    {
      key: 3,
      name: "IT Hard Skills",
      deploy: {
        text: "During my studies at CESI and throughout my personnal projects, i've gained quite a few Hard Skills which are displayed on the right. I absolutely love coding and trying to make things work, thinking about algorithm stimulates my brain and i'm starting to get used to certain languages which allows me to go a bit deeper",
        list: [
          "HTML",
          "CSS (and TailwindCSS)",
          "JS (and ReactJS)",
          "PHP (and Laravel, Symfony)",
          "WordPress",
        ],
        progress: [
          {
            nline:
              "Programing (C, Python, SQL, C++, Arduino, JavaScript, C#, PHP, Windows, PowerShell)",
            progress: 70,
          },
          {
            nline:
              "System and Networks (Acitve Directory, Creating and Setting up Servers (Windows/Linux))",
            progress: 60,
          },
        ],
      },
    },
    {
      key: 4,
      name: "My Best Projects",
      deploy: [
        {
          id: 1,
          title: "This Website !",
          desc: "This website is my personnal favourite. It's the one I've learned how to use ReactJS, the one I spent the most time on to make it look like nice (I've always focused more on the back-end, working on the front-end is very interesting as well !)",
          techno: "ReactJS, Parcel, Vercel",
        },
        {
          id: 2,
          title: "Websites (Full Stack)",
          desc: "I've developped many websites for many reasons during my life, some were for school projects, others were training projects, some others were professionnal projects...",
          techno: "HTML, CSS, PHP, JS, Laravel, Symfony, Wordpress",
        },
        {
          id: 3,
          title: "Weather Station",
          desc: "Creation and developement of a weather station using several sensors",
          techno: "C/Arduino",
        },
        {
          id: 4,
          title: "Audio encryptor/decryptor",
          desc: "Creation and developement of an audio signal encryption/decryption system",
          techno: "Python",
        },
        {
          id: 5,
          title: "CRUD Softwares",
          desc: "Creation and developement of a database management application (and many more CRUDs)",
          techno: "C++, C#",
        },
        {
          id: 6,
          title: "VM Server",
          desc: "Configuration of a VM Server during an internship (also including the server bios update, whole server firmware configuration, RAID configuration, proxy configuration)",
          techno: "Proxmox VE",
        },
        {
          id: 7,
          title: "Digital Password Vault",
          desc: "Coding of a digital password vault using arduino online IDE, simulating the hardware, 4 digits password",
          techno: "Autodesk TinkerCAD, C/Arduino",
        },
      ],
    },
    {
      key: 5,
      name: "My Future Career Goals",
      deploy: [
        {
          key: 1,
          job: "Full Stack Web Developper",
          stack: "JS (Any Framework), PHP (Symfony)",
          more: "I'm not very good at front-end developping but I like trying and learning",
        },
        {
          key: 2,
          job: "Software Developper",
          stack: "C#, C++",
          more: "I've always wanted to developp softwares in a tech company, in the car industry mainly",
        },
        {
          key: 3,
          job: "On-Board Electronics Engineer",
          stack: "Electronics, C",
          more: "On-board electronics is incredible in my opinion, having skills and working in this industry would allow me to work on any personnal projects",
        },
      ],
    },
    {
      key: 6,
      name: "Education",
      deploy: {
        texts: [
          "Option 'Computer Science and Digital Science' for 3 years.",
          "PBL Method (Problem Based Learning), with group projects and diverse Engineering topics in General",
          "Continuing the PBL Method, only working on IT projects. The last two years are going to be more focused on a specialty that we're supposed to pick in the beginning of the 4th year",
        ],
        timelineInfo: [
          {
            key: 1,
            title: "General Scientific Baccalaureate",
            location: "Lycée des Graves",
            location2: "Gradignan, France",
            dates: "2017-2020",
          },
          {
            key: 2,
            title: "Integrated Preparatory Class",
            location: "CESI Bordeaux",
            location2: "Bordeaux, France",
            dates: "2020-2022",
          },
          {
            key: 3,
            title: "Computer Science Engineering Degree",
            location: "CESI Bordeaux",
            location2: "Bordeaux, France",
            dates: "2022-2025",
          },
        ],
      },
    },
    {
      key: 7,
      name: "Contact Me",
      deploy: [
        {
          key: 1,
          title: "Mail Pro",
          value: "gaedelouis@gmail.com",
          href: "",
          img: <MailOutlined style={{ fontSize: "xl:24px lg:20px sm:12px" }} />,
        },
        {
          key: 2,
          title: "Phone Number",
          value: "0762358100",
          href: "",
          img: <PhoneOutlined style={{ fontSize: "xl:24px lg:20px sm:12px" }} />,
        },
        {
          key: 3,
          title: "LinkedIn",
          value: "",
          href: "https://www.linkedin.com/in/ga%C3%ABl-delouis-534509212/",
          img: <LinkedinOutlined style={{ fontSize: "xl:24px lg:20px sm:12px" }} />,
        },
        {
          key: 4,
          title: "GitHub",
          value: "",
          href: "https://github.com/tinkybeatz",
          img: <GithubOutlined style={{ fontSize: "xl:24px lg:20px sm:12px" }} />,
        },
      ],
    },
  ];

  // affichage (render)
  return (
    <div className="justify-items-center xl:w-{80%} lg:w-{85%}  grid font-primary" key="1">
      <Navbar />
      <div className="flex-row dark:text-white transition-all duration-200 xl:w-{70%} lg:w-{80%} sm:w-{70%} h-[100vh] pb-5">
        <div className="flex xl:h-1/4 lg:h-1/5 sm:h-1/6 justify-center items-center font-bold xl:py-2 lg:py-4 sm:py-2 xl:mb-5 text-center lg:mb-5 sm:mb-0">
          <h1 ref={horRef} className="xl:text-8xl lg:text-6xl sm:text-4xl">
            Welcome to Gaël's portfolio!
          </h1>
        </div>
        <div className="xl:grid lg:grid xl:grid-cols-3 lg:grid-cols-3 sm:flex-row xl:h-3/4 lg:h-4/5 sm:h-5/6 pb-10 px-10">
          <div class="col-span-1 xl:h-full lg:h-full sm:h-52 grid xl:mr-10 lg:mr-10 sm:mb-4 rounded-md">
            <img
              src={MainPagePic}
              alt="image"
              class="xl:h-full xl:w-full xl:object-cover obj col-span-1 rounded-md drop-shadow-md
                    lg:h-full lg:w-full lg:object-cover
                    sm:h-52 sm:w-full sm:object-contain"
            />
          </div>
          <div class="xl:col-span-2 lg:col-span-2 sm:col-span-1 rounded-md bg-gray-200 dark:bg-zinc-500 dark:text-white text-black transition duration-200 drop-shadow-md flex-row sm:mt-10 sm:h-[400px]">
            <div class="xl:h-1/3 lg:h-1/4 sm:h-1/4 flex items-center place-content-center font-bold text-center xl:text-6xl lg:text-4xl sm:text-2xl xl:px-4 lg:px-2 sm:px-2 sm:py-4">
              First of all, thank you for coming on my website!
            </div>
            <div class="xl:h-2/3 lg:h-3/4 sm:h-3/4 xl:text-xl lg:text-[13px] sm:text-[10px] flex place-content-center text-center xl:px-28 lg:px-20 sm:px-10">
              <p>
                My name is Gaël DELOUIS and I am an Student in an IT Engineering School. 
                I am currently comming to the end of my 3rd year out of the whole 5 years of the formation. 
                I love coding and made this website in order to learn how to use ReactJS !
                <br></br>
                <br></br>
                On this website, you are going to learn a bit more about me and
                I am going to share my Professional Experience. This is kind of
                an extension of my resume (that you can download in the navbar
                downhere). This website is divided in 7 blocks that you can open
                in order to see the informations contained in it.
                <br></br>
                <br></br>
                You can also toggle the dark mode if you eyes struggle to read
                properly the informations, using the button also located in the
                navbar. I will continue to update this site in the future to add
                few more features.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="z-10 w-full grid justify-items-center">
        {nbMainSpace.map((nb) => (
          <MainSpace nb={nb} />
        ))}
      </div>
      <div className="xl:h-28 lg:h-28 sm:h-28 w-full grid grid-cols-2 items-center mb-10 justify-items-center">
        <div className="text-sm text-gray-400">Gaël DELOUIS</div>
        <div className="text-sm text-gray-400">gael.delouis@viacesi.fr</div>
      </div>
    </div>
  );
}

export default App;
