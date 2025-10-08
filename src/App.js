import { useState, useRef } from "react";
import { inject } from "@vercel/analytics";
import React from "react";
import MainPagePic from "../public/images/imageGael.jpg";
import { MainSpace } from "./components/organisms/MainSpace";
import { Navbar } from "./components/molecules/navbar/Navbar";
import { SideNavbar } from "./components/molecules/navbar/SideNavbar";
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
      name: "👤 About Me",
      deploy: {
        text: "I'm Gaël, also known as 'Tinky'. I'm a full-stack web developer 💻 and i just graduated from an IT Engineering school in Bordeaux, France 🎓. I'm passionate about tech, problem solving and mostly coding.",
        text2:
          "Even though i'm passionate about IT, I also have other passions and personality traits that make me who I am today.",
        passions: [
          {
            key: 1,
            image: "",
            text: "Crossfit",
          },
          {
            key: 2,
            image: "",
            text: "Sports in general",
          },
          {
            key: 3,
            image: "",
            text: "Motorsports",
          },
          {
            key: 4,
            image: "",
            text: "Music production",
          },
          {
            key: 5,
            image: "",
            text: "Haute couture",
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
            text: "Communicative",
          },
          {
            key: 2,
            image: "",
            text: "Autonomous",
          },
          {
            key: 3,
            image: "",
            text: "Diligent",
          },
          {
            key: 4,
            image: "",
            text: "Active Listener",
          },
          {
            key: 5,
            image: "",
            text: "Open Minded",
          },
        ],
      },
    },
    {
      key: 2,
      name: "💼 My Professional Experiences",
      deploy: {
        timelineInfo: [
          {
            key: 1,
            title: "System Administrator, IT Support - Intern",
            location: "Omnitech Security",
            location2: "Bordeaux, France",
            dates: "April 2022 - July 2022",
          },
          {
            key: 2,
            title: "Self-Service Employee",
            location: "Carrefour Bordeaux",
            location2: "Bordeaux, France",
            dates: "September 2022 - January 2023",
          },
          {
            key: 3,
            title: "Web Developper BAC +3 - Intern",
            location: "Orange SA",
            location2: "Pessac, France",
            dates: "January 2023 - April 2023",
          },
          {
            key: 4,
            title: "Web Developper - Freelance",
            location: "TB PAYE Conseils",
            location2: "Bordeaux, France",
            dates: "March 2023 - May 2023",
          },
          {
            key: 5,
            title: "Engineer Full-Stack Web Developper - Intern",
            location: "Foleon",
            location2: "Amsterdam, Netherlands",
            dates: "September 2023 - February 2024",
          },
          {
            key: 6,
            title: "Full Stack Web Developper - Freelance",
            location: "Kamileon Fitness",
            location2: "Kuala Lumpur, Malaysia",
            dates: "April 2024 - January 2025",
          },
          {
            key: 7,
            title: "Product Engineer - Full Stack Web Developper",
            location: "Hager Group",
            location2: "Pessac, France",
            dates: "February 2025 - August 2025",
          },
        ],
        texts: [
          "During this internship, i was a system administrator and had to configure serveral servers, help the collegues and fix their computer problems.",
          "I got this job because i needed experience and money to pay my appartement to be fair, though i can say this experience ended-up being very fun.",
          "This was my favourite profesionnal experience so-far ! the mission was very interesting and the team I worked with was very nice to me.",
          "I did my first Free-Lance mission to see how it would fit with my schedule, my team and i ended-up finishing the mission in only a week.",
          "First internation Professionnal Experience. Added a Realtime Edition feature on an existing online content creation platform.",
          "Revamped a few websites for a fitness company in Malaysia. Some of them contain booking systems and online shoping.",
          "Worked on the engineering and developpement of a new internal tool for Hager Group. Worked on CI/CD, DB, Unit tests, automations, etc... So far this was the most complete experience i've had.",
        ],
      },
    },
    {
      key: 3,
      name: "🛠️ IT Hard Skills",
      deploy: {
        text: "During my studies at CESI and throughout my personnal projects, i've gained quite a few Hard Skills which are displayed on the right. I absolutely love coding and trying to make things work, thinking about algorithm stimulates my brain and i'm starting to get used to certain languages which allows me to go a bit deeper",
        list: [
          "HTML, CSS (and TailwindCSS, Bootstrap)",
          "JS / TS (and ReactJS, NestJS, CucumberJS)",
          "PHP (and Laravel, Symfony)",
          "C++ / C# (and .NET) / C Arduino",
          "WordPress / Wix",
        ],
        progress: [
          {
            nline:
              "Programing (C, Python, SQL, C++, Arduino, JavaScript, C#, PHP, Windows, PowerShell)",
            progress: 75,
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
      name: "📁 My Best Projects",
      deploy: [
        {
          id: 1,
          title: "Real-Time editing feature on Content Creation Platform",
          desc: "I had the opportunity to work on a 'Real-Time editing feature' on a complex Digital Content Creation Platform during my last internship. This feature was Full-Stack, I had to create the whole features logic. Project was very important for the company so i'm glad I could have a great impact for their platform.",
          techno: "ReactTS, NestTS, CucumberTS, Kubernetes",
        },
        {
          id: 2,
          title: "Online Platform Game (Fall-Guys style) and VR Map Editor",
          desc: "Created an online platform game (Fall-Guys style) and a VR Map Editor for that same game. Project was made for a school project, we had a lot of fun working on it and learning a lot about Unity.",
          techno: "Unity, C#, Photon Unity, XR Interaction Toolkit",
        },
        {
          id: 3,
          title: "This Website !",
          desc: "This website is my personnal favourite. It's the one I've learned how to use ReactJS, the one I spent the most time on to make it look like nice (I've always focused more on the back-end, working on the front-end is very interesting as well !)",
          techno: "ReactJS, Parcel, Vercel",
        },
        {
          id: 4,
          title: "Websites (Full Stack)",
          desc: "I've developped many websites for many reasons during my life, some were for school projects, others were training projects, some others were professionnal projects...",
          techno: "HTML, CSS, PHP, JS, Laravel, Symfony, Wordpress",
        },
        {
          id: 5,
          title: "Weather Station",
          desc: "Creation and developement of a weather station using several sensors",
          techno: "C/Arduino",
        },
        {
          id: 6,
          title: "Audio encryptor/decryptor",
          desc: "Creation and developement of an audio signal encryption/decryption system",
          techno: "Python",
        },
        {
          id: 7,
          title: "CRUD Softwares",
          desc: "Creation and developement of a database management application (and many more CRUDs)",
          techno: "C++, C#",
        },
        {
          id: 8,
          title: "VM Server",
          desc: "Configuration of a VM Server during an internship (also including the server bios update, whole server firmware configuration, RAID configuration, proxy configuration)",
          techno: "Proxmox VE",
        },
        {
          id: 9,
          title: "Digital Password Vault",
          desc: "Coding of a digital password vault using arduino online IDE, simulating the hardware, 4 digits password",
          techno: "Autodesk TinkerCAD, C/Arduino",
        },
      ],
    },
    {
      key: 5,
      name: "🎓 Education",
      deploy: {
        texts: [
          "Option 'Computer Science and Digital Science' for 3 years.",
          "PBL Method (Problem Based Learning), with group projects and diverse Engineering topics in General.",
          "Continuing the PBL Method, only working on IT projects and project management. The last two years are going to be more focused on a specialty that we're supposed to pick in the beginning of the 4th year.",
          "Academic Semester abroad in Malaysia, in a University that is specialized in IT, with a focus on AI and Entrepreneurship. Also did a thesis on 'Use of AI to help foreigners relocate into a new country'.",
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
          {
            key: 4,
            title: "Abroad IT Master Academic Semester",
            location: "UniKL MIIT",
            location2: "Kuala Lumpur, Malaysia",
            dates: "2024",
          },
        ],
      },
    },
    {
      key: 7,
      name: "📞 Contact Me",
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
          value: "+33 7 62 35 81 00",
          href: "",
          img: (
            <PhoneOutlined style={{ fontSize: "xl:24px lg:20px sm:12px" }} />
          ),
        },
        {
          key: 3,
          title: "LinkedIn",
          value: "",
          href: "https://www.linkedin.com/in/ga%C3%ABl-delouis-534509212/",
          img: (
            <LinkedinOutlined style={{ fontSize: "xl:24px lg:20px sm:12px" }} />
          ),
        },
        {
          key: 4,
          title: "GitHub",
          value: "",
          href: "https://github.com/tinkybeatz",
          img: (
            <GithubOutlined style={{ fontSize: "xl:24px lg:20px sm:12px" }} />
          ),
        },
      ],
    },
  ];

  // affichage (render)
  return (
    <div
      className="justify-items-center xl:w-{80%} lg:w-{85%} grid font-primary scroll-smooth snap-y snap-mandatory"
      key="1"
    >
      {/* <Navbar /> */}
      <SideNavbar nbMainSpace={nbMainSpace} />
      <div className="flex-row dark:text-white transition-all duration-200 xl:w-{70%} lg:w-{80%} sm:w-{70%} h-[100vh]">
        <div className="flex xl:h-[40%] lg:h-1/5 sm:h-1/6 items-end xl:py-2 lg:py-4 sm:py-2 text-center">
          <h1
            ref={horRef}
            className="font-scrib tracking-extra-tight xl:text-8xl font-light w-full lg:text-6xl sm:text-4xl"
          >
            GAËL DELOUIS
          </h1>
        </div>
        <div className="text-xl font-light flex xl:h-[15%] justify-center">
          Full-Stack Web Developper | Product Engineer | Your next best hire
        </div>
        <div className="items-center text-xl font-light flex flex-col xl:h-[45%]">
          <p class="text-center text-lg">Learn more about me :</p>
          <div className="flex flex-wrap w-[60%] justify-center gap-3 mt-2">
            {nbMainSpace.map((section) => (
              <a
                key={section.key}
                href={`#section-${section.key}`}
                className="px-4 py-2 border border-gray-100 shadow-sm text-black rounded-full hover:bg-gray-100 hover:shadow-none transition-colors duration-200 text-base"
              >
                {section.name}
              </a>
            ))}
          </div>
        </div>
        {/* <div className="xl:grid lg:grid xl:grid-cols-3 lg:grid-cols-3 sm:flex-row xl:h-3/4 lg:h-4/5 sm:h-5/6 xl:pb-10 lg:pb-10 px-10">
          <div class="col-span-1 xl:h-full lg:h-full sm:h-36 grid xl:mr-10 lg:mr-10 rounded-lg">
            <img
              src={MainPagePic}
              alt="image"
              class="xl:h-[69vh] xl:w-full xl:object-cover obj col-span-1 rounded-lg shadow-xl
                    lg:h-96 lg:w-full lg:object-cover
                    sm:h-36 sm:w-full sm:object-contain"
            />
          </div>
          <div class="xl:col-span-2 lg:col-span-2 sm:col-span-1 rounded-lg bg-white dark:bg-zinc-500 dark:text-white text-black transition duration-200 shadow-xl flex-row sm:mt-4 sm:pb-10 sm:h-[400px] border border-gray-100">
            <div class="xl:h-1/3 lg:h-1/4 sm:h-1/5 flex items-center place-content-center font-bold text-center xl:text-6xl lg:text-4xl sm:text-lg xl:px-4 lg:px-2 sm:px-2 sm:py-4">
              <p>
                Welcome here ! <br /> Glad to see you !
              </p>
            </div>
            <div class="xl:h-2/3 lg:h-3/4 sm:h-4/5 xl:text-2xl lg:text-[13px] sm:text-[11px] flex flex-col place-content-center text-center xl:px-28 lg:px-20 sm:px-5">
              <p>
                My name is Gaël DELOUIS, I just graduated from CESI Engineering
                school, and specialized in Web Developing.
                <br></br>
                <br></br>
                This website is here to help you learn about me a little more,
                you can find all my professional experiences, my skills, my
                ambitions and my projects.
                <br></br>
                <br></br>
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                {nbMainSpace.map((section) => (
                  <a
                    key={section.key}
                    href={`#section-${section.key}`}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 xl:text-lg lg:text-sm sm:text-xs"
                  >
                    {section.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div class="w-full">
        {nbMainSpace.map((nb) => (
          <div
            id={`section-${nb.key}`}
            class="flex flex-col items-center justify-center w-full h-screen snap-start"
          >
            <div class="w-full max-w-[90rem] h-full max-h-full py-10 flex flex-col">
              <div class="text-2xl tracking-extra-tight font-scrib mb-4 transition-colors dark:text-white text-black">
                {nb.key}. {nb.name.toUpperCase()}
              </div>
              <div class="flex w-full h-full">
                <MainSpace nb={nb} />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div class="xl:h-28 lg:h-28 sm:h-28 w-full grid grid-cols-2 items-center sm:mb-10 justify-items-center">
        <div class="text-sm text-gray-400">Gaël DELOUIS</div>
        <div class="text-sm text-gray-400">gael.delouis@viacesi.fr</div>
      </div> */}
    </div>
  );
}

export default App;
