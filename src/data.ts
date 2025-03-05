const projects = [
  {
    id: 1,
    title: "Jada Mod Manager",
    tags: "Software",
    image: "/cards/jada.png",
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
    image: "/cards/selfcarwash.webp",
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
    image: "/cards/listinha.png",
    features: ["List management", "Support for 3 languages"],
    techs: [
      {name: "React Native", icon: "fa-react", color: "#58C4DC", link: "https://reactnative.dev"},
      {name: "SQLite", icon: "fa-database", color: "#218CD2", link: "https://www.sqlite.org"},
    ],
    github: "https://github.com/GuilhermeSchuch/Listinha"
  },
]

const posts = [
  {
    id: 1,
    image: "/posts/d3d-device-being-lost.webp",
    date: "Nov 03, 2023",
    author: "Guilherme Schuch",
    title: "D3D Device being lost",
    subtitle: "An unpleasant and uncommon error that can occur in games, mainly created with the Unreal Engine. I'm not a professional, but if you're here, you're going through the same problem I went through.",
    tags: ["Tech", '-', "Error"],
    metaTags: {
      title: "D3D Device Being Lost - Fixing Unreal Engine Errors",
      description: "Learn how to fix the D3D Device Being Lost error in Unreal Engine. Troubleshooting tips and solutions for gamers and developers.",
      keywords: "D3D Device being lost, Unreal Engine error, gaming issues, DirectX error, game crashes"
    },
    content: {
      topics: [
        "Update Drivers",
        "NVIDIA Geforce Experience Battery Boost",
        "Verify files integrity",
        "Clean Driver installation",
        "DirectX",
        "Game in Full Screen",
        "TdrDelay",
      ],
      block: [
        {
          title: "Update Drivers",
          paragraph: [
            {
              type: "text",
              content: "Keeping your computer's drivers out of date can influence gaming performance and even cause problems, use "
            },
            {
              type: "link",
              content: "Driver Booster",
              link: "https://www.iobit.com/pt/driver-booster.php"
            },
            {
              type: "text",
              content: " or "
            },
            {
              type: "link",
              content: "Driver Easy",
              link: "https://www.drivereasy.com/"
            },
            {
              type: "text",
              content: " to install all the necessary drivers for your computer."
            },
            {
              type: "break",
              content: ''
            },
            {
              type: "text",
              content: "You can manually update the video card driver by respectively clicking the WIN + R keys on your keyboard and typing "
            },
            {
              type: "code",
              content: "devmgmt.msc"
            },
            {
              type: "text",
              content: ", press enter after typing."
            },
            {
              type: "image",
              content: "/posts/driver.webp"
            },
            {
              type: "break",
              content: ""
            },
            {
              type: "text",
              content: "Search for your video driver and click update."
            },
          ]
        },
        {
          title: "NVIDIA Geforce Experience Battery Boost",
          paragraph: [
            {
              type: "text",
              content: 'If you are trying to run the game on a Notebook, it is important to disable all "boosts" that NVIDIA applies.'
            },
            {
              type: "break",
              content: ""
            },
            {
              type: "text",
              content: "Make sure Geforce Experience Battery Boost is turned off. You can check it through NVIDIA's own software: Geforce Experience."
            },
          ]
        },
        {
          title: "Verify files integrity",
          paragraph: [
            {
              type: "text",
              content: "If this error is occurring in a Steam game, try checking the integrity of the game files."
            },
            {
              type: "break",
              content: ""
            },
            {
              type: "text",
              content: "Right click on the game -> Properties -> Installed Files -> Verify game file integrity. If the problem is not resolved, try reinstalling the game."
            },
            {
              type: "image",
              content: "/posts/integrity.webp"
            },
          ]
        },
        {
          title: "Clean Driver installation",
          paragraph: [
            {
              type: "text",
              content: "If you have an NVIDIA graphics card, be aware that many unnecessary drivers are installed on your PC, it is recommended, for these drivers, to use the "
            },
            {
              type: "link",
              content: "DDU",
              link: "https://www.guru3d.com/download/display-driver-uninstaller-download/"
            },
            {
              type: "text",
              content: " to remove the drivers, and after removal, use the "
            },
            {
              type: "link",
              content: "NVCleanstall",
              link: "https://www.techpowerup.com/download/techpowerup-nvcleanstall"
            },
            {
              type: "text",
              content: " to install only the necessary drivers."
            }
          ]
        },
        {
          title: "DirectX",
          paragraph: [
            {
              type: "text",
              content: "It is extremely important, to run the most current games, that you have the latest version of DirectX installed on your computer. If not, you can download it "
            },
            {
              type: "link",
              content: "here",
              link: "https://www.microsoft.com/pt-br/download/details.aspx?id=35"
            },
            {
              type: "text",
              content: "."
            },
          ]
        },
        {
          title: "Game in Full Screen",
          paragraph: [
            {
              type: "text",
              content: "As incredible as it may seem, the solution to your problem may be to simply switch your game from full screen to windowed mode, and the error will not appear again."
            },
          ]
        },
        {
          title: "TdrDelay",
          paragraph: [
            {
              type: "text",
              content: "This setting will basically specify the number of seconds that the GPU can delay the preemption request from the GPU scheduler."
            },
            {
              type: "break",
              content: ''
            },
            {
              type: "text",
              content: "Firstly, you must, respectively, press the WIN + R keys on your keyboard, and type: "
            },
            {
              type: "code",
              content: "regedit"
            },
            {
              type: "text",
              content: ", press enter."
            },
            {
              type: "break",
              content: ''
            },
            {
              type: "text",
              content: "Now, you must paste: "
            },
            {
              type: "code",
              content: "HKEY_LOCAL_MACHINE\\System\\CurrentControlSet\\Control\\GraphicsDrivers"
            },
            {
              type: "text",
              content: " in the field as shown in the image below and press enter."
            },
            {
              type: "image",
              content: "/posts/tdr.webp"
            },
            {
              type: "break",
              content: ''
            },
            {
              type: "text",
              content: "Create a new DWORD by right clicking, you must name it as "
            },
            {
              type: "code",
              content: "TdrDelay"
            },
            {
              type: "text",
              content: ". After naming it, double-click on it, assign the value 10 and classify it as Decimal."
            },
            {
              type: "image",
              content: "/posts/tdr2.webp"
            },
          ]
        },
        {
          title: "Conclusion",
          paragraph: [
            {
              type: "text",
              content: "As I mentioned at the beginning of the post, this error occurs because your graphics card is not supporting the game, if none of the solutions presented work for you, I'm sorry, you faced the same fate as me. (Buy a new video card)"
            },
          ]
        },
      ]
    }
  },
  {
    id: 2,
    image: "/posts/realtek.webp",
    date: "Oct 05, 2024",
    author: "Guilherme Schuch",
    title: "Error Code 0001 Realtek",
    subtitle: "A not very common error that occurs on computers that have conflicts between drivers or that have been recently formatted. This error, luckily, has a simple solution.",
    tags: ["Tech", '-', "Error", '-', "Driver"],
    metaTags: {
      title: "D3D Device Being Lost - Fixing Unreal Engine Errors",
      description: "Learn how to fix the D3D Device Being Lost error in Unreal Engine. Troubleshooting tips and solutions for gamers and developers.",
      keywords: "D3D Device being lost, Unreal Engine error, gaming issues, DirectX error, game crashes"
    },
    content: {
      topics: ["Update Drivers"],
      block: [
        {
          title: "Update Drivers",
          paragraph: [
            {
              type: "text",
              content: "Keeping your computer's drivers out of date can influence gaming performance and even cause problems, use"
            },
            {
              type: "link",
              content: "Driver Booster",
              link: "https://www.iobit.com/pt/driver-booster.php"
            },
          ]
        }
      ]
    }
  },
]

export { projects, posts };