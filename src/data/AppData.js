import {
  MailOutlined,
  PhoneOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

import SkillsData from "./SkillsData.js";

// Education pictures imports
import cesiLogo from "../../public/images/logos/cesi.png";
import uniklLogo from "../../public/images/logos/unikl.png";

// Projects pictures imports
import foleon1Project from "../../public/images/projects/foleon-1.webp";
import foleon2Project from "../../public/images/projects/foleon-2.webp";

export default nbMainSpace = [
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
          img: "https://media.glassdoor.com/sqll/5208811/omnitech-security-squarelogo-1646217837429.png",
          imgAlt: "Omnitech Security Logo",
          text: "During this internship, i was a system administrator and had to configure serveral servers, help the collegues and fix their computer problems 🛠️. This was my first real professionnal experience, and even if it doesnt reallt match my current ambitions, it was a great experience to start with 👍.",
        },
        // {
        //   key: 2,
        //   title: "Self-Service Employee - Not IT related",
        //   location: "Carrefour Bordeaux",
        //   location2: "Bordeaux, France",
        //   dates: "September 2022 - January 2023",
        //   img: "https://recrute.carrefour.fr/wp-content/uploads/2023/10/carrefour-city-horizontal.png",
        //   imgAlt: "Carrefour City Logo",
        //   text: "Fun experience, met a lot of great people and learned a lot about customer service and how to work in a team 🤝. This was a student job so I don't have much more to tell you about it 😁.",
        // },
        {
          key: 3,
          title: "Web Developper BAC +3 - Intern",
          location: "Orange",
          location2: "Pessac, France",
          dates: "January 2023 - April 2023",
          img: "https://freelogopng.com/images/all_img/1683000849orange-telecom-logo.png",
          imgAlt: "Orange Logo",
          text: "First real experience as a web developper. Worked on an internal platform, designed from scratch, to help handle all telecom subscriptions 📞. Learned a lot about web developpement and project management methodologies.",
        },
        {
          key: 4,
          title: "Web Developper - Freelance",
          location: "TB PAYE Conseils",
          location2: "Bordeaux, France",
          dates: "March 2023 - May 2023",
          img: "",
          imgAlt: "",
          text: "This was my first freelance job. Team of 3 working on a Wordpress website for an accounting company. Made some custom plugins and themes to fit the client's needs 🔌.",
        },
        {
          key: 5,
          title: "Engineer Full-Stack Web Developper - Intern",
          location: "Foleon",
          location2: "Amsterdam, Netherlands",
          dates: "September 2023 - February 2024",
          img: "https://thewealthmosaic.s3.amazonaws.com/media/Logo_Foleon.png",
          imgAlt: "Foleon Logo",
          text: "First international Professionnal Experience. Added a 'Realtime Edition' feature on an existing online content creation platform ⏱️⚡. Fascinating project (still my favourite experience so far ❤️), worked on the whole stack (ReactTS, NestTS, CucumberTS, Kubernetes).",
        },
        {
          key: 6,
          title: "Full Stack Web Developper - Freelance",
          location: "Kamileon Fitness",
          location2: "Kuala Lumpur, Malaysia",
          dates: "April 2024 - January 2025",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnEHAJ3G4R89WRUbWjn4cqQdtE1X4Eeviwyg&s",
          imgAlt: "Kamileon Fitness Logo",
          text: "Revamped a few websites for a fitness company in Malaysia 🏋️‍♂️. Some of them contain booking systems and online shoping.",
        },
        {
          key: 7,
          title: "Product Engineer - Full Stack Web Developper",
          location: "Hager Group",
          location2: "Pessac, France",
          dates: "February 2025 - August 2025",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Hager_Group_Logo.svg/2560px-Hager_Group_Logo.svg.png",
          imgAlt: "Hager Group Logo",
          text: "Worked on the engineering and developpement of a new internal tool for Hager Group. Worked on CI/CD, DB, Unit tests, automations, etc... Fortified even more my web developpement (Angular, Python Flask, Azure DevOps and Azure, Jasmine, CI/CD automations, SQL) and agile management skills.",
        },
      ],
    },
  },
  {
    key: 3,
    name: "🛠️ IT Hard Skills",
    deploy: {
      skills: SkillsData,
      // list: [
      //   "HTML, CSS (and TailwindCSS, Bootstrap)",
      //   "JS / TS (and ReactJS, NestJS, CucumberJS)",
      //   "PHP (and Laravel, Symfony)",
      //   "C++ / C# (and .NET) / C Arduino",
      //   "WordPress / Wix",
      // ],
      // progress: [
      //   {
      //     nline:
      //       "Programing (C, Python, SQL, C++, Arduino, JavaScript, C#, PHP, Windows, PowerShell)",
      //     progress: 75,
      //   },
      //   {
      //     nline:
      //       "System and Networks (Acitve Directory, Creating and Setting up Servers (Windows/Linux))",
      //     progress: 60,
      //   },
      // ],
    },
  },
  {
    key: 4,
    name: "📁 My Work",
    deploy: {
      projects: [
        {
          id: 1,
          title: "Real-time editing feature",
          description:
            "I had the opportunity to work on a 'Real-Time editing feature' on a complex Digital Content Creation Platform during my last internship. This feature was Full-Stack, I had to create the whole features logic. Project was very important for the company so i'm glad I could have a great impact for their platform.",
          techno: ["React", "NestJS", "CucumberTS", "Kubernetes"],
          categories: ["Professionnal Project"],
          images: [
            {
              key: 1,
              img: foleon1Project,
              imgAlt: "Foleon 1 project",
            },
            {
              key: 2,
              img: foleon2Project,
              imgAlt: "Foleon 2 project",
            },
          ],
        },
        {
          id: 2,
          title: "VR Online Game + Map Editor",
          description:
            "Created an online platform game (Fall-Guys style) and a VR Map Editor for that same game. Project was made for a school project, we had a lot of fun working on it and learning a lot about Unity.",
          techno: "Unity, C#, Photon Unity, XR Interaction Toolkit",
          categories: ["School Project"],
          images: [
            {
              key: 1,
              img: "",
              imgAlt: "",
            },
          ],
        },
        // {
        //   id: 3,
        //   title: "This Website !",
        //   description:
        //     "This website is my personnal favourite. It's the one I've learned how to use ReactJS, the one I spent the most time on to make it look like nice (I've always focused more on the back-end, working on the front-end is very interesting as well !)",
        //   techno: "ReactJS, Parcel, Vercel",
        //   categories: ["School Project"]
        // },
        {
          id: 3,
          title: "Websites (Full Stack)",
          description:
            "I've developped many websites for many reasons during my life, some were for school projects, others were training projects, some others were professionnal projects...",
          techno: "HTML, CSS, PHP, JS, Laravel, Symfony, Wordpress",
          categories: ["School Project"],
          images: [
            {
              key: 1,
              img: "",
              imgAlt: "",
            },
          ],
        },
        {
          id: 4,
          title: "Weather Station",
          description:
            "Creation and developement of a weather station using several sensors",
          techno: "C/Arduino",
          categories: ["School Project"],
          images: [
            {
              key: 1,
              img: "",
              imgAlt: "",
            },
          ],
        },
        {
          id: 5,
          title: "Audio encryptor/decryptor",
          description:
            "Creation and developement of an audio signal encryption/decryption system",
          techno: "Python",
          categories: ["School Project"],
          images: [
            {
              key: 1,
              img: "",
              imgAlt: "",
            },
          ],
        },
        {
          id: 6,
          title: "CRUD Softwares",
          description:
            "Creation and developement of a database management application (and many more CRUDs)",
          techno: "C++, C#",
          categories: ["School Project"],
          images: [
            {
              key: 1,
              img: "",
              imgAlt: "",
            },
          ],
        },
        {
          id: 7,
          title: "VM Server",
          description:
            "Configuration of a VM Server during an internship (also including the server bios update, whole server firmware configuration, RAID configuration, proxy configuration)",
          techno: "Proxmox VE",
          categories: ["School Project"],
          images: [
            {
              key: 1,
              img: "",
              imgAlt: "",
            },
          ],
        },
        {
          id: 8,
          title: "Digital Password Vault",
          description:
            "Coding of a digital password vault using arduino online IDE, simulating the hardware, 4 digits password",
          techno: "Autodesk TinkerCAD, C/Arduino",
          categories: ["School Project"],
          images: [
            {
              key: 1,
              img: "",
              imgAlt: "",
            },
          ],
        },
        {
          id: 9,
          title: "TiaGO Robot",
          description:
            "Creation of a demo program to make the TiaGO robot move, grab objects and interact with its environment for an open doors day at school",
          techno: "Linux, Python, ROS1",
          categories: ["School Project"],
          images: [
            {
              key: 1,
              img: "",
              imgAlt: "",
            },
          ],
        },
      ],
    },
  },
  {
    key: 5,
    name: "🎓 Education",
    deploy: {
      // texts: [
      //   "Option 'Computer Science and Digital Science' for 3 years.",
      //   "PBL Method (Problem Based Learning), with group projects and diverse Engineering topics in General.",
      //   "Continuing the PBL Method, only working on IT projects and project management. The last two years are going to be more focused on a specialty that we're supposed to pick in the beginning of the 4th year.",
      //   "Academic Semester abroad in Malaysia, in a University that is specialized in IT, with a focus on AI and Entrepreneurship. Also did a thesis on 'Use of AI to help foreigners relocate into a new country'.",
      // ],
      timelineInfo: [
        {
          key: 1,
          title: "General Scientific Baccalaureate",
          location: "Lycée des Graves",
          location2: "Gradignan, France",
          dates: "2017-2020",
          img: "",
          ingAlt: "Lycée des Graves Logo",
          text: "Scientific Baccalaureate with Option 'Computer Science and Digital Science' for 3 years.",
        },
        {
          key: 2,
          title: "Integrated Preparatory Class",
          location: "CESI Bordeaux",
          location2: "Bordeaux, France",
          dates: "2020-2022",
          img: cesiLogo,
          ingAlt: "CESI Logo",
          text: "PBL Method (Problem Based Learning), with group projects and diverse Engineering topics in General.",
        },
        {
          key: 3,
          title: "Computer Science Engineering Degree",
          location: "CESI Bordeaux",
          location2: "Bordeaux, France",
          dates: "2022-2025",
          img: cesiLogo,
          ingAlt: "CESI Logo",
          text: "Continuing the PBL Method, only working on IT projects and project management. The last two years were more focused on a specialty picked in the beginning of the 4th year. (Software Engineering, Robotics)",
        },
        {
          key: 4,
          title: "Abroad IT Master Academic Semester",
          location: "UniKL MIIT",
          location2: "Kuala Lumpur, Malaysia",
          dates: "2024",
          img: uniklLogo,
          ingAlt: "UniKL MIIT Logo",
          text: "Academic Semester abroad in Malaysia for my studies in France, in a University that is specialized in IT, with a focus on AI and Entrepreneurship. Also did a thesis on 'Use of AI to help foreigners relocate into a new country'.",
        },
      ],
    },
  },
  {
    key: 6,
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
        img: <PhoneOutlined style={{ fontSize: "xl:24px lg:20px sm:12px" }} />,
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
        img: <GithubOutlined style={{ fontSize: "xl:24px lg:20px sm:12px" }} />,
      },
    ],
  },
];
