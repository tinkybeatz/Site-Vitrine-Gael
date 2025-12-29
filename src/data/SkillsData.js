// Logos imports
import javascriptLogo from "../../public/images/logos/javascript.png";
import typescriptLogo from "../../public/images/logos/typescript.png";
import phpLogo from "../../public/images/logos/php.png";
import angularLogo from "../../public/images/logos/angular.png";
import reactLogo from "../../public/images/logos/react.png";
import symfonyLogo from "../../public/images/logos/symfony.png";
import laravelLogo from "../../public/images/logos/laravel.png";
import tailwindcssLogo from "../../public/images/logos/tailwindcss.png";
import bootstrapLogo from "../../public/images/logos/bootstrap.svg";
import nextjsLogo from "../../public/images/logos/next-js.svg";
import blazorLogo from "../../public/images/logos/blazor.png";
import pythonLogo from "../../public/images/logos/python.webp";
import flaskLogo from "../../public/images/logos/flask.png";
import nestjsLogo from "../../public/images/logos/nest-js.svg";
import nodejsLogo from "../../public/images/logos/node-js.webp";
import cLogo from "../../public/images/logos/C.png";
import cppLogo from "../../public/images/logos/Cpp.png";
import csLogo from "../../public/images/logos/Cs.png";
import gitLogo from "../../public/images/logos/git.png";
import gitlabLogo from "../../public/images/logos/gitlab.png";
import githubLogo from "../../public/images/logos/github.svg";
import jiraLogo from "../../public/images/logos/jira.png";
import azureLogo from "../../public/images/logos/azure.png";
import azureDevopsLogo from "../../public/images/logos/azureDevops.webp";
import kubernetesLogo from "../../public/images/logos/kubernetes.png";
import dockerLogo from "../../public/images/logos/docker.png";
import cArduinoLogo from "../../public/images/logos/cArduino.svg";
import unityLogo from "../../public/images/logos/unity.png";
import dotnetcoreLogo from "../../public/images/logos/dotnetcore.png";
import cursorLogo from "../../public/images/logos/cursor.png";
import githugCopliotLogo from "../../public/images/logos/github-copilot.webp";
import warpAiLogo from "../../public/images/logos/warp-ai.jpg";
import chatgptLogo from "../../public/images/logos/chatgpt.jpg";
import claudeAiLogo from "../../public/images/logos/claude-ai.png";
import MySQLLogo from "../../public/images/logos/mysql.png";
import vercelLogo from "../../public/images/logos/vercel.jpg";
import websocketLogo from "../../public/images/logos/websocket.png";
import cucumberLogo from "../../public/images/logos/cucumber.png";
import jasmineLogo from "../../public/images/logos/jasmine.svg";
import rosLogo from "../../public/images/logos/ros.png";
import proxmoxLogo from "../../public/images/logos/proxmox.png";
import tinkercadLogo from "../../public/images/logos/tinkercad.png";
import fusion360Logo from "../../public/images/logos/fusion360.png";
import n8nLogo from "../../public/images/logos/n8n.png";
import postgresLogo from "../../public/images/logos/postgres.png";

const SkillsData = [
  {
    name: "n8n",
    img: n8nLogo,
    imgAlt: "n8n Logo",
    description: "Workflow automation tool",
    linkTo: "https://n8n.io/",
    categories: ["AI Tools", "CI/CD", "Back-end", "Other"],
  },
  {
    name: "PostgreSQL",
    img: postgresLogo,
    imgAlt: "PostgreSQL Logo",
    description: "Powerful open source relational database",
    linkTo: "https://www.postgresql.org/",
    categories: ["Other"],
  },
  {
    name: "JavaScript",
    img: javascriptLogo,
    imgAlt: "JavaScript Logo",
    description: "Classic web scripting language",
    linkTo: "",
    categories: ["Programming Language"],
  },
  {
    name: "TypeScript",
    img: typescriptLogo,
    imgAlt: "TypeScript Logo",
    description: "Modern typed JS superset",
    linkTo: "https://www.typescriptlang.org",
    categories: ["Programming Language"],
  },
  {
    name: "Angular",
    img: angularLogo,
    imgAlt: "Angular Logo",
    description: "Famous JS Framework (personnal favourite)",
    linkTo: "https://angular.dev",
    categories: ["Front-end"],
  },
  {
    name: "React",
    img: reactLogo,
    imgAlt: "React Logo",
    description: "Another Famous JS Framework",
    linkTo: "https://react.dev",
    categories: ["Front-end"],
  },
  {
    name: "NextJS",
    img: nextjsLogo,
    imgAlt: "NextJS Logo",
    description: "Full-Stack React framework",
    linkTo: "https://nextjs.org",
    categories: ["Front-end", "Back-end"],
  },
  {
    name: "PHP",
    img: phpLogo,
    imgAlt: "PHP Logo",
    description: "Web server scripting language",
    linkTo: "https://www.php.net",
    categories: ["Programming Language"],
  },
  {
    name: "Symfony",
    img: symfonyLogo,
    imgAlt: "Symfony Logo",
    description: "Famous PHP Framework",
    linkTo: "https://symfony.com",
    categories: ["Front-end"],
  },
  {
    name: "Laravel",
    img: laravelLogo,
    imgAlt: "Laravel Logo",
    description: "Another Famous PHP Framework",
    linkTo: "https://laravel.com",
    categories: ["Front-end"],
  },
  {
    name: "TailwindCSS",
    img: tailwindcssLogo,
    imgAlt: "TailwindCSS Logo",
    description: "Utility-first CSS Framework",
    linkTo: "https://tailwindcss.com",
    categories: ["Front-end"],
  },
  {
    name: "Cursor",
    img: cursorLogo,
    imgAlt: "Cursor Logo",
    description: "AI-powered coding assistant",
    linkTo: "https://www.cursor.so/",
    categories: ["AI Tools"],
  },
  {
    name: "Github Copilot",
    img: githugCopliotLogo,
    imgAlt: "Microsoft Copilot Logo",
    description: "AI-powered coding assistant",
    linkTo: "https://copilot.microsoft.com/",
    categories: ["AI Tools"],
  },
  {
    name: "Warp AI",
    img: warpAiLogo,
    imgAlt: "Warp AI Logo",
    description: "AI-powered terminal",
    linkTo: "https://warp.dev/",
    categories: ["AI Tools"],
  },
  {
    name: "ChatGPT",
    img: chatgptLogo,
    imgAlt: "ChatGPT Logo",
    description: "AI-powered conversational agent",
    linkTo: "https://chat.openai.com/",
    categories: ["AI Tools"],
  },
  {
    name: "Claude AI",
    img: claudeAiLogo,
    imgAlt: "Claude AI Logo",
    description: "AI-powered conversational agent",
    linkTo: "https://claude.ai/",
    categories: ["AI Tools"],
  },
  {
    name: "Bootstrap",
    img: bootstrapLogo,
    imgAlt: "Bootstrap Logo",
    description: "Popular CSS Framework",
    linkTo: "https://getbootstrap.com",
    categories: ["Front-end"],
  },
  {
    name: "C",
    img: cLogo,
    imgAlt: "C Logo",
    description: "Language for low-level programming",
    linkTo: "https://www.c-language.org",
    categories: ["Programming Language"],
  },
  {
    name: "C++",
    img: cppLogo,
    imgAlt: "C++ Logo",
    description: "Object-oriented extension of the C language",
    linkTo: "https://isocpp.org",
    categories: ["Programming Language"],
  },
  {
    name: "C#",
    img: csLogo,
    imgAlt: "C# Logo",
    description: "Modern, object-oriented language by Microsoft",
    linkTo: "https://dotnet.microsoft.com/en-us/languages/csharp",
    categories: ["Programming Language"],
  },
  {
    name: "C# .NET Core",
    img: dotnetcoreLogo,
    imgAlt: ".NET Logo",
    description: "Cross-platform framework for C# applications",
    linkTo: "https://dotnet.microsoft.com/en-us/",
    categories: ["Programming Language", "Back-end", "Front-end"],
  },
  {
    name: "Blazor",
    img: blazorLogo,
    imgAlt: "Blazor Logo",
    description: "Popular C# front framework",
    linkTo: "https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor",
    categories: ["Front-end"],
  },
  {
    name: "C Arduino",
    img: cArduinoLogo,
    imgAlt: "Arduino Logo",
    description: "C-based language for embedded devices",
    linkTo: "https://www.arduino.cc",
    categories: ["Programming Language"],
  },
  {
    name: "Unity C#",
    img: unityLogo,
    imgAlt: "Unity Logo",
    description: "Game development platform using C#",
    linkTo: "https://unity.com",
    categories: ["Programming Language"],
  },
  {
    name: "Python",
    img: pythonLogo,
    imgAlt: "Python Logo",
    description: "High-level language for general programming",
    linkTo: "https://www.python.org",
    categories: ["Programming Language"],
  },
  {
    name: "Flask",
    img: flaskLogo,
    imgAlt: "Flask Logo",
    description: "Lightweight Python framework for web apps",
    linkTo: "https://flask.palletsprojects.com/en/stable",
    categories: ["Back-end"],
  },
  {
    name: "NestJS",
    img: nestjsLogo,
    imgAlt: "NestJS Logo",
    description: "Back-end framework for JS",
    linkTo: "https://nestjs.com",
    categories: ["Back-end"],
  },
  {
    name: "NodeJS",
    img: nodejsLogo,
    imgAlt: "NodeJS Logo",
    description: "Another Back-end framework for JS",
    linkTo: "https://nodejs.org",
    categories: ["Back-end"],
  },
  {
    name: "Git",
    img: gitLogo,
    imgAlt: "Git Logo",
    description: "Distributed version control system",
    linkTo: "https://git-scm.com",
    categories: ["Project Management", "CI/CD"],
  },
  {
    name: "GitLab",
    img: gitlabLogo,
    imgAlt: "GitLab Logo",
    description: "DevOps platform for CI/CD pipelines",
    linkTo: "https://about.gitlab.com",
    categories: ["CI/CD", "Project Management"],
  },
  {
    name: "GitHub",
    img: githubLogo,
    imgAlt: "GitHub Logo",
    description: "Collaboration and version control platform",
    linkTo: "https://github.com/tinkybeatz",
    categories: ["Project Management", "CI/CD"],
  },
  {
    name: "Jira",
    img: jiraLogo,
    imgAlt: "Jira Logo",
    description: "Agile project and issue management",
    linkTo: "https://www.atlassian.com/software/jira",
    categories: ["Project Management"],
  },
  {
    name: "Azure",
    img: azureLogo,
    imgAlt: "Microsoft Azure Logo",
    description: "Microsoft cloud computing platform",
    linkTo: "https://azure.microsoft.com",
    categories: ["Project Management"],
  },
  {
    name: "Azure DevOps",
    img: azureDevopsLogo,
    imgAlt: "Azure DevOps Logo",
    description: "Integrated tools for CI/CD pipelines",
    linkTo: "https://azure.microsoft.com/products/devops",
    categories: ["Project Management", "CI/CD"],
  },
  {
    name: "Kubernetes",
    img: kubernetesLogo,
    imgAlt: "Kubernetes Logo",
    description: "Container orchestration for scalable deployments",
    linkTo: "https://kubernetes.io",
    categories: ["CI/CD"],
  },
  {
    name: "Docker",
    img: dockerLogo,
    imgAlt: "Docker Logo",
    description: "Containerization for portable applications",
    linkTo: "https://www.docker.com",
    categories: ["CI/CD"],
  },
  {
    name: "MySQL",
    img: MySQLLogo,
    imgAlt: "MySQL Logo",
    description: "Relational database for structured data",
    linkTo: "https://www.mysql.com",
    categories: ["Other"],
  },
  {
    name: "Vercel",
    img: vercelLogo,
    imgAlt: "Vercel Logo",
    description: "Cloud platform for frontend deployments",
    linkTo: "https://vercel.com",
    categories: ["CI/CD"],
  },
  {
    name: "WebSocket",
    img: websocketLogo,
    imgAlt: "WebSocket Logo",
    description: "Protocol for real-time web communication",
    linkTo: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
    categories: ["Back-end", "Other"],
  },
  {
    name: "CucumberTS",
    img: cucumberLogo,
    imgAlt: "CucumberTS Logo",
    description: "Testing framework for TypeScript",
    linkTo: "https://cucumber.io/docs/installation/javascript/",
    categories: ["Other"],
  },
  {
    name: "JasmineTS",
    img: jasmineLogo,
    imgAlt: "JasmineTS Logo",
    description: "Testing framework for TypeScript",
    linkTo: "https://jasmine.github.io/",
    categories: ["Other"],
  },
  {
    name: "ROS 1",
    img: rosLogo,
    imgAlt: "ROS 1 Logo",
    description: "Robot Operating System 1",
    linkTo: "https://www.ros.org/",
    categories: ["Other"],
  },
  {
    name: "Proxmox VE",
    img: proxmoxLogo,
    imgAlt: "Proxmox VE Logo",
    description: "Open-source virtualization management platform",
    linkTo: "https://www.proxmox.com/en/proxmox-ve",
    categories: ["Other"],
  },
  {
    name: "Autodesk TinkerCAD",
    img: tinkercadLogo,
    imgAlt: "Autodesk TinkerCAD Logo",
    description: "Online 3D design and modeling tool",
    linkTo: "https://www.tinkercad.com/",
    categories: ["Other"],
  },
  {
    name: "Autodesk Fusion 360",
    img: fusion360Logo,
    imgAlt: "Autodesk Fusion 360 Logo",
    description: "Powerful CAD and 3D modeling software",
    linkTo: "https://www.autodesk.com/products/fusion-360/overview",
    categories: ["Other"],
  },
];

export default SkillsData;
