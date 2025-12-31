import {
  MailOutlined,
  PhoneOutlined,
  GithubOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
  EnvironmentOutlined,
  BulbOutlined,
  OpenAIOutlined,
  SyncOutlined,
  TeamOutlined,
  CheckCircleOutlined,
  CloudServerOutlined,
} from "@ant-design/icons";

import SkillsData from "./SkillsData.js";

// Education pictures imports
import cesiLogo from "../../public/images/logos/cesi.png";
import uniklLogo from "../../public/images/logos/unikl.png";

// Projects pictures imports
import foleon1Project from "../../public/images/projects/foleon-1.webp";
import foleon2Project from "../../public/images/projects/foleon-2.webp";
import spotifyInsights1 from "../../public/images/projects/spotify-insights-1.png";
import spotifyInsights2 from "../../public/images/projects/spotify-insights-2.png";
import foolGuys1 from "../../public/images/projects/fool-guys-1.gif";
import foolGuys2 from "../../public/images/projects/fool-guys-2.png";
import Tiago1 from "../../public/images/projects/tiago-1.gif";
import Tiago2 from "../../public/images/projects/tiago-2.webp";
import Arduino from "../../public/images/projects/arduino.jpg";
import AudioEncryption from "../../public/images/projects/audio-encryption.png";
import ProxmoxVE from "../../public/images/projects/proxmox.jpeg";
import HagerProject from "../../public/images/projects/hager-project.png";
import Orange from "../../public/images/projects/orange.jpeg";
import Announcify from "../../public/images/projects/announcify.png";
import PlasticOdyssey from "../../public/images/projects/plastic-odyssey.png";

// // Icons import
// import mailIcon from "../../public/images/icons/mail.png";
// import phoneIcon from "../../public/images/icons/phone.png";

const nbMainSpace = [
  {
    key: 1,
    name: "👤 About Me",
    deploy: {
      text: "I'm Gaël, also known as 'Tinky'. I'm a full-stack web developer 💻 and I graduated from an IT Engineering school in Bordeaux, France 🎓. I'm passionate about tech, problem solving and mostly coding.",
      text2:
        "Even though i'm passionate about IT, I also have other passions and personality traits.",
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
    name: "🛠️ IT Hard Skills",
    deploy: {
      skills: SkillsData,
    },
  },
  {
    key: 3,
    name: "💼 My Experiences",
    deploy: {
      timelineInfo: [
        {
          key: 1,
          title: "System Administrator, IT Support",
          location: "Omnitech Security",
          location2: "Bordeaux, France",
          dates: "April 2022 - July 2022",
          img: "https://media.glassdoor.com/sqll/5208811/omnitech-security-squarelogo-1646217837429.png",
          imgAlt: "Omnitech Security Logo",
          text: [
            "System administrator, configuration of several servers. 🌐",
            "Helped the collegues and fix their computer problems. 🛠️",
            "First real professionnal experience, great experience to start with 👍.",
          ],
        },
        {
          key: 3,
          title: "Web Developper BAC +3",
          location: "Orange",
          location2: "Pessac, France",
          dates: "January 2023 - April 2023",
          img: "https://freelogopng.com/images/all_img/1683000849orange-telecom-logo.png",
          imgAlt: "Orange Logo",
          text: [
            "First real experience as a web developper. 💻",
            "Worked on an internal platform, designed from scratch, to help handle all telecom subscriptions. 📞",
            "Learned a lot about web developpement and project management : Agile, Scrum, etc... 🏃‍♂️",
          ],
        },
        {
          key: 4,
          title: "Web Developper",
          location: "TB PAYE Conseils",
          location2: "Bordeaux, France",
          dates: "March 2023 - May 2023",
          img: "",
          imgAlt: "",
          text: [
            "First freelance experience as a web developper. 💻",
            "Team of 3 working on a Wordpress website for an accounting company. 💰",
            "Made some custom plugins and themes to fit the client's needs. 🔌",
          ],
        },
        {
          key: 5,
          title: "Engineer Full-Stack Web Developper",
          location: "Foleon",
          location2: "Amsterdam, Netherlands",
          dates: "September 2023 - February 2024",
          img: "https://thewealthmosaic.s3.amazonaws.com/media/Logo_Foleon.png",
          imgAlt: "Foleon Logo",
          text: [
            "First international Professionnal Experience. 🌍",
            "Added a 'Realtime Edition' feature on an existing online content creation platform. ⏱️⚡",
            "Fascinating project, still my favourite experience so far ❤️",
          ],
        },
        {
          key: 6,
          title: "Full Stack Web Developper",
          location: "Kamileon Fitness",
          location2: "Kuala Lumpur, Malaysia",
          dates: "April 2024 - January 2025",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnEHAJ3G4R89WRUbWjn4cqQdtE1X4Eeviwyg&s",
          imgAlt: "Kamileon Fitness Logo",
          text: [
            "Second international Professionnal Experience. 🌍",
            "Revamped a few websites for a fitness company in Malaysia. 🏋️‍♂️",
            "Some of them contain booking systems and online shopping. 🛒",
          ],
        },
        {
          key: 7,
          title: "Product Engineer - Full Stack Web Developper",
          location: "Hager Group",
          location2: "Pessac, France",
          dates: "February 2025 - August 2025",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Hager_Group_Logo.svg/2560px-Hager_Group_Logo.svg.png",
          imgAlt: "Hager Group Logo",
          text: [
            "Worked on the engineering and developpement of a new internal tool for Hager Group. ⚡",
            "Did the CI/CD, DB, Unit tests, automations, etc... 🛠️",
            "Fortified even more my web developpement and agile management skills. 💪",
          ],
        },
      ],
    },
  },
  {
    key: 4,
    name: "💪 Why Hire Me?",
    deploy: {
      text: "I am committed to not only deliver code.",
      text2: "I focus on understanding requirements properly and thinking about future growth, building sustainable and modular solutions that accommodate future improvements.",
      blocks: [
        {
          key: 1,
          icon: <BulbOutlined />,
          iconStyling: "text-yellow-400 bg-yellow-400/25 border-yellow-400 shadow-yellow-400/25",
          title: "Problem Solver",
          text: "I thrive on analyzing complex problems and finding effective solutions. My approach is to break down challenges into manageable parts and address them systematically.",
          shortText: "I thrive on analyzing complex problems and breaking them down into manageable, systematic solutions.",
        },
        {
          key: 2,
          icon: <OpenAIOutlined />,
          iconStyling: "text-blue-500 bg-blue-500/25 border-blue-500 shadow-blue-500/25",
          title: "Using AI",
          text: "I leverage AI and machine learning tools to enhance development workflows and create innovative solutions. I actively stay updated with emerging technologies.",
          shortText: "I leverage AI and machine learning tools to enhance development workflows and stay updated with emerging technologies.",
        },
        {
          key: 3,
          icon: <SyncOutlined />,
          iconStyling: "text-red-500 bg-red-500/25 border-red-500 shadow-red-500/25",
          title: "Adaptability",
          text: "My engineering education taught me how to learn, not just memorize technologies. This allows me to quickly adapt to any tech stack or framework requirement.",
          shortText: "My engineering education taught me how to learn, allowing me to quickly adapt to any tech stack or framework.",
        },
        {
          key: 4,
          icon: <TeamOutlined />,
          iconStyling: "text-green-500 bg-green-500/25 border-green-500 shadow-green-500/25",
          title: "Collaboration",
          text: "I believe that great results come from teamwork. I actively collaborate with colleagues and stakeholders to ensure that all perspectives are considered and that we achieve the best outcomes together.",
          shortText: "I believe in teamwork and actively collaborate with colleagues to achieve the best outcomes together.",
        },
        {
          key: 5,
          icon: <CheckCircleOutlined />,
          iconStyling: "text-purple-500 bg-purple-500/25 border-purple-500 shadow-purple-500/25",
          title: "Various Experiences",
          text: "I've worked in both large corporations and smaller companies, giving me insight into different work cultures and processes. This makes me adaptable to any organizational structure.",
          shortText: "I've worked in both large corporations and smaller companies, making me adaptable to any organizational structure.",
        },
        {
          key: 6,
          icon: <CloudServerOutlined />,
          iconStyling: "text-cyan-400 bg-cyan-400/25 border-cyan-400 shadow-cyan-400/25",
          title: "Cloud & DevOps",
          text: "I have hands-on experience with cloud platforms like Azure or Vercel, containerization technologies as well as setting up CI/CD pipelines for efficient software delivery.",
          shortText: "I have hands-on experience with cloud platforms, containerization, and CI/CD pipelines for efficient software delivery.",
        },
      ]
    }
  },
  {
    key: 5,
    name: "📁 My Work",
    deploy: {
      projects: [
        {
          title: "Card creation website [ongoing]",
          description:
            "I am currently working on a card creation website using Nextjs. The website allows users to create and customize their own cards with various templates and designs. The project is still ongoing.",
          techno: ["NextJS", "PostgreSQL", "TailwindCSS"],
          categories: ["Personal Projects"],
          link: "https://announcify.tinky.cloud",
          images: [
            {
              key: 1,
              img: Announcify,
              imgAlt: "Announcify project",
            },
          ],
        },
        {
          title: "Plastic Odyssey [ongoing]",
          description:
            "I am currently working on a Whatsapp bot automation for Plastic Odyssey, an organization that aims to facilitate recycling in areas where plastic waste is a major issue. The bot will help users to make a request for plastic waste collection, and help admins manage these requests. The project is still ongoing.",
          techno: ["n8n", "JavaScript", "ChatGPT"],
          categories: ["Professional Projects"],
          images: [
            {
              key: 1,
              img: PlasticOdyssey,
              imgAlt: "Plastic Odyssey project",
            },
          ],
        },
        {
          title: "Real-time editing feature",
          description:
            "I had the opportunity to work on a 'Real-Time editing feature' on a complex Digital Content Creation Platform during my last internship. This feature was Full-Stack, I had to create the whole features logic. Project was very important for the company so i'm glad I could have a great impact for their platform.",
          techno: ["React", "NestJS", "CucumberTS", "Kubernetes"],
          categories: ["Professional Projects"],
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
          title: "Playlist Insights Web App",
          description:
            "Web application to analyze and visualize Spotify playlists using the Spotify API. Planning on adding more features : AI-powered analytics (mood, tempo, etc...), user authentification (required by the Spotify API to be able to analyse private playlists), and more... Personal project for fun, to learn more about web development.",
          techno: ["Angular", "Flask"],
          categories: ["Personal Projects"],
          link: "https://spotify-insights-ten.vercel.app",
          images: [
            {
              key: 1,
              img: spotifyInsights1,
              imgAlt: "Spotify insights 1",
            },
            {
              key: 2,
              img: spotifyInsights2,
              imgAlt: "Spotify insights 2",
            },
          ],
        },
        {
          title: "Internal Platform for Domotics Catalog Management",
          description:
            "Worked on a platform to manage the domotics products catalog for Hager Group. The platform allows to create, update and delete products, categories, etc... It also allows to export data in a normalized format. Project was made using Angular for the front-end, Flask for the back-end and C# .NET Core for the DB extraction algorithm. (No picture because confidential project)",
          techno: ["Angular", "Flask", "JasmineTS", "Azure", "Azure DevOps", "MySQL", "C#", "C# .NET Core"],
          categories: ["Professional Projects"],
          images: [
            {
              key: 1,
              img: HagerProject,
              imgAlt: "Hager Project",
            },
          ],
        },
        {
          title: "Internal Platform for Telecom Subscriptions",
          description:
            "Worked on a platform to manage telecom subscriptions for the biggest telecom operator in France. Engineered the platform from scratch, using Symfony for the back-end and Orange's version of Bootstrap for the front-end. (No picture because confidential project)",
          techno: ["Symfony", "PHP", "Bootstrap", "Jira"],
          categories: ["Professional Projects"],
          images: [
            {
              key: 1,
              img: Orange,
              imgAlt: "Orange",
            },
          ],
        },
        {
          title: "VR Online Game + Map Editor",
          description:
            "Created an online platform game (Fall-Guys style) and a VR Map Editor for that same game. Project was made for a school project, we had a lot of fun working on it and learning a lot about Unity.",
          techno: ["Unity C#", "C#", "Photon Unity", "XR Interaction Toolkit"],
          categories: ["School Projects"],
          images: [
            {
              key: 1,
              img: foolGuys1,
              imgAlt: "Fool Guys 1",
            },
            {
              key: 2,
              img: foolGuys2,
              imgAlt: "Fool Guys 2",
            },
          ],
        },
        {
          title: "TiaGO Robot",
          description:
            "Creation of a demo program to make the TiaGO robot move, grab objects and interact with its environment for an open doors day at school. The robot was programmed to give people flyers about the different courses available at school, with an AI voice assistant and automatic decision making.",
          techno: ["Linux", "Python", "ROS 1"],
          categories: ["School Projects"],
          images: [
            {
              key: 1,
              img: Tiago1,
              imgAlt: "TiaGO Robot 1",
            },
            {
              key: 2,
              img: Tiago2,
              imgAlt: "TiaGO Robot 2",
            },
          ],
        },
        {
          title: "Weather Station",
          description:
            "Creation and developement of a weather station using several sensors",
          techno: ["Autodesk TinkerCAD", "C Arduino"],
          categories: ["School Projects"],
          images: [
            {
              key: 1,
              img: Arduino,
              imgAlt: "Arduino Weather Station",
            },
          ],
        },
        {
          title: "Audio encryptor/decryptor",
          description:
            "Creation and developement of an audio signal encryption/decryption system",
          techno: ["Python"],
          categories: ["School Projects"],
          images: [
            {
              key: 1,
              img: AudioEncryption,
              imgAlt: "Audio Encryption/Decryption",
            },
          ],
        },
        {
          title: "VM Server",
          description:
            "Configuration of a VM Server during an internship (also including the server bios update, whole server firmware configuration, RAID configuration, proxy configuration)",
          techno: ["Proxmox VE"],
          categories: ["Professional Projects"],
          images: [
            {
              key: 1,
              img: ProxmoxVE,
              imgAlt: "Proxmox VE",
            },
          ],
        },
        {
          title: "Digital Password Vault",
          description:
            "Coding of a digital password vault using arduino online IDE, simulating the hardware, 4 digits password",
          techno: ["C Arduino"],
          categories: ["School Projects"],
          images: [
            {
              key: 1,
              img: Arduino,
              imgAlt: "Arduino Password Vault",
            },
          ],
        },
      ],
    },
  },
  {
    key: 6,
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
          text: [
            "Scientific Baccalaureate. 🎓",
            "Option 'Computer Science and Digital Science' for 3 years. 💻",
            "Graduated with Honours (Mention Assez Bien). 👍",
          ],
        },
        {
          key: 2,
          title: "Integrated Preparatory Class",
          location: "CESI Bordeaux",
          location2: "Bordeaux, France",
          dates: "2020-2022",
          img: cesiLogo,
          ingAlt: "CESI Logo",
          text: [
            "PBL Method (Problem Based Learning). 🧠",
            "Group projects and diverse Engineering topics in General. 🎯",
            "First time approaching professional IT topics. 💻",
          ],
        },
        {
          key: 3,
          title: "Computer Science Engineering Degree",
          location: "CESI Bordeaux",
          location2: "Bordeaux, France",
          dates: "2022-2025",
          img: cesiLogo,
          ingAlt: "CESI Logo",
          text: [
            "Continuing the PBL Method. 🧠",
            "Last two years focused on Software Engineering, Robotics and mostly Project Management. 🚀",
            "Graduating with an Engineering Degree (Master's equivalent). 🎓",
          ],
        },
        {
          key: 4,
          title: "Abroad IT Master Academic Semester",
          location: "UniKL MIIT",
          location2: "Kuala Lumpur, Malaysia",
          dates: "2024",
          img: uniklLogo,
          ingAlt: "UniKL MIIT Logo",
          text: [
            "Academic Semester abroad in Malaysia for my studies in France. 🇲🇾🇫🇷",
            "University specialized in IT, with a focus on AI and Entrepreneurship. 🤖",
            "Did a thesis on 'Use of AI to help foreigners relocate into a new country'. 📜",
          ],
          // text: "Academic Semester abroad in Malaysia for my studies in France, in a University that is specialized in IT, with a focus on AI and Entrepreneurship. Also did a thesis on 'Use of AI to help foreigners relocate into a new country'.",
        },
      ],
    },
  },
  {
    key: 7,
    name: "📞 Contact Me",
    deploy: {
      contact_informations: [
        {
          title: "Email",
          value: "gael.delouis.pro@gmail.com",
          href: "mailto:gael.delouis.pro@gmail.com",
          img: <MailOutlined />,
        },
        {
          title: "Phone",
          value: "+60 17 749 0717",
          href: "tel:+60177490717",
          img: <PhoneOutlined />,
        },
        {
          title: "Whatsapp",
          value: "Send me a message on Whatsapp",
          href: "https://wa.me/60177490717",
          img: <WhatsAppOutlined />,
        },
        {
          title: "Location",
          value: "Kuala Lumpur, Malaysia",
          href: "",
          img: <EnvironmentOutlined />,
        },
      ],
      connect: [
        {
          title: "GitHub",
          href: "https://github.com/tinkybeatz",
          img: <GithubOutlined />,
        },
        {
          title: "LinkedIn",
          href: "https://www.linkedin.com/in/gaël-delouis-534509212",
          img: <LinkedinOutlined />,
        },
        {
          title: "Mail",
          href: "mailto:gael.delouis.pro@gmail.com",
          img: <MailOutlined />,
        },
      ],
    },
  },
];

export default nbMainSpace;
