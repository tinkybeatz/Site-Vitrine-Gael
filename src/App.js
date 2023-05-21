import { useState } from "react";
import MainPagePic from "../public/images/MainPage.jpg";
import { MainSpace } from "./components/organisms/MainSpace";
import { Navbar } from "./components/molecules/navbar/Navbar";

function App() {
  // constantes (état, données)
  const nbMainSpace = [
    {
      key: 1,
      name: "About Me",
      deploy: {
        image:
          "https://t4.ftcdn.net/jpg/01/36/70/67/360_F_136706734_KWhNBhLvY5XTlZVocpxFQK1FfKNOYbMj.jpg",
        text: "",
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
          "here i did this",
          "here that",
          "there this",
          "now that",
          "this again ! damn it !",
        ],
      },
    },
    {
      key: 3,
      name: "IT Hard Skills",
      deploy: {
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo debitis, iste quod asperiores culpa ipsa quidem odit a dolores repudiandae accusamus, fuga totam rem modi nostrum quaerat tempore! Laudantium, tempore. Nostrum fugiat aspernatur explicabo magni, sunt vitae quis vel voluptatum, dolores tenetur incidunt numquam minima eius fuga unde sed quae ipsa iste adipisci velit maxime! Modi suscipit aut repudiandae pariatur. Repudiandae sed enim, totam accusamus quidem adipisci hic deleniti exercitationem impedit ad labore nam id et veniam necessitatibus dolorum? Harum eveniet in reprehenderit blanditiis omnis! Blanditiis quidem dicta quos adipisci. Nemo incidunt expedita a non dolores blanditiis alias quibusdam iusto esse excepturi dolorum quas vel, commodi iure itaque maxime illum praesentium recusandae iste, dignissimos aliquam laborum? Eum inventore accusamus omnis. Illo praesentium, numquam explicabo vero quam suscipit tempora ad sunt excepturi iste dolores repellendus cupiditate, alias accusantium natus dicta sint autem. Sed, facere neque? Quod animi culpa veniam nam rerum.",
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
          "here i did this",
          "here that",
          "there this",
          "now that",
          "this again ! damn it !",
        ],
        timelineInfo: [
          {
            key: 1,
            title: "Brevet National des Collèges",
            location: "Collège Monjous",
            location2: "Gradignan, France",
            dates: "2013-2017",
          },
          {
            key: 2,
            title: "General Scientific Baccalaureate",
            location: "Lycée des Graves",
            location2: "Gradignan, France",
            dates: "2017-2020",
          },
          {
            key: 3,
            title: "Integrated Preparatory Class",
            location: "CESI Bordeaux",
            location2: "Bordeaux, France",
            dates: "2020-2022",
          },
          {
            key: 4,
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
      text: "",
    },
  ];

  // affichage (render)
  return (
    <div className="justify-items-center w-{90%} grid font-primary" key="1">
      <Navbar />
      <div className="flex-row dark:text-white transition-all duration-500 w-{90%} h-[100vh] pb-5">
        <div className="flex h-1/4 justify-center items-center font-bold py-2 mb-5">
          <h1 className="text-8xl">Welcome to my portfolio!</h1>
        </div>
        <div className="grid grid-cols-3 h-3/4 pb-10 px-10">
          <div class="col-span-1 h-full grid mr-10">
            <img
              src={MainPagePic}
              alt="image"
              class="h-full col-span-1 object-cover rounded rounded-md drop-shadow-md"
            />
          </div>
          <div class="col-span-2 rounded rounded-md bg-gray-200 dark:bg-zinc-500 dark:text-white text-black transition duration-500 drop-shadow-md flex-row">
            <div class="h-1/3 flex items-center place-content-center font-bold text-center text-6xl px-5">
              First of all, thank you for coming on my website!
            </div>
            <div class="h-2/3 flex place-content-center text-center px-5">
              On this website, you are going to learn a bit more about me. I am
              going to share my Professional Experience.
            </div>
          </div>
        </div>
      </div>
      <div class="z-10 w-full grid justify-items-center">
        {nbMainSpace.map((nb) => (
          <MainSpace nb={nb} />
        ))}
      </div>
      <div className="h-28 w-full grid grid-cols-2 items-center justify-items-center">
        <div className="text-sm text-gray-400">Gaël DELOUIS</div>
        <div className="text-sm text-gray-400">gael.delouis@viacesi.fr</div>
      </div>
    </div>
  );
}

export default App;
