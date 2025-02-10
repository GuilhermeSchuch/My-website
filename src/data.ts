const projects = [
  {
    id: 1,
    title: "Jada Mod Manager",
    tags: "Software",
    image: "src/assets/projects/jada.png",
    features: ["Mod management", "Dashboard", "Games presets", "Game management"],
    techs: [
      {name: "React", icon: "fa-react", color: "#58C4DC", link: "https://react.dev"},
      {name: "Node.js", icon: "fa-node-js", color: "#417E38", link: "https://nodejs.org"},
      {name: "Electron", icon: "fa-square-js", color: "#9FEAF9", link: "https://www.electronjs.org"},
    ],
    github: null
  },
  {
    id: 2,
    title: "Self car wash system",
    tags: "Web App, Freelance",
    image: "src/assets/projects/selfcarwash.webp",
    features: [
      "Customer management",
      "Employee management",
      "Car management",
      "Service management",
      "Financial system",
      "Sheet management"
    ],
    techs: [
      {name: "React", icon: "fa-react", color: "#58C4DC", link: "https://react.dev"},
      {name: "Node.js", icon: "fa-node-js", color: "#417E38", link: "nodejs.org"},
      {name: "MongoDB", icon: "fa-database", color: "#00ED64", link: "https://www.mongodb.com"},
    ],
    github: "https://github.com/GuilhermeSchuch/AutoLavagem-APP"
  },
  {
    id: 3,
    title: "Listinha",
    tags: "Mobile, Android",
    image: "src/assets/projects/listinha.png",
    features: ["List management", "Support for 3 languages"],
    techs: [
      {name: "React Native", icon: "fa-react", color: "#58C4DC", link: "https://reactnative.dev"},
      {name: "SQLite", icon: "fa-database", color: "#218CD2", link: "https://www.sqlite.org"},
    ],
    github: "https://github.com/GuilhermeSchuch/Listinha"
  },
]

export default projects;