const projects = [
  {
    id: 1,
    title: "Jada Mod Manager",
    url: "Jada-Mod-Manager",
    tags: "Software",
    metaTags: {
      title: "Jada Mod Manager",
      description: "Easily manage, install, and uninstall mods for your games with Jada. Simplify your modding experience.",
      keywords: "Jada Mod Manager, Jada, Mod Manager, Mods for games, Mods"
    },
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
    url: "Self-car-wash-system",
    tags: "Web App, Freelance",
    metaTags: {
      title: "Self car wash system",
      description: "",
      keywords: ""
    },
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
    url: "Listinha",
    tags: "Mobile, Android",
    metaTags: {
      title: "Listinha",
      description: "",
      keywords: ""
    },
    image: "/cards/listinha.png",
    features: ["List management", "Support for 3 languages"],
    techs: [
      {name: "React Native", icon: "fa-react", color: "#58C4DC", link: "https://reactnative.dev"},
      {name: "SQLite", icon: "fa-database", color: "#218CD2", link: "https://www.sqlite.org"},
    ],
    github: "https://github.com/GuilhermeSchuch/Listinha"
  },
]

const projectsBR = [
  {
    id: 1,
    title: "Jada Mod Manager",
    url: "Jada-Mod-Manager",
    tags: "Software",
    metaTags: {
      title: "Jada Mod Manager",
      description: "Gerencie, instale e desinstale mods para seus jogos com facilidade usando o Jada. Simplifique sua experiência com mods.",
      keywords: "Jada Mod Manager, Jada, Gerenciador de Mods, Mods para jogos, Mods"
    },
    image: "/cards/jada.png",
    features: ["Gerenciamento de mods", "Painel de controle", "Predefinições de jogos", "Gerenciamento de jogos"],
    techs: [
      {name: "React", icon: "fa-react", color: "#58C4DC", link: "https://react.dev"},
      {name: "Node.js", icon: "fa-node-js", color: "#417E38", link: "https://nodejs.org"},
      {name: "Electron", icon: "fa-square-js", color: "#9FEAF9", link: "https://www.electronjs.org"},
    ],
    github: null
  },
  {
    id: 2,
    title: "Sistema para Auto Lavagem de carros",
    url: "Self-car-wash-system",
    tags: "Web App, Freelancer",
    metaTags: {
      title: "Sistema para Auto Lavagem de carros",
      description: "Sistema completo para gestão de lava-rápido com clientes, funcionários e financeiro.",
      keywords: "Lava-rápido, sistema de gestão, autoatendimento, freelancer"
    },
    image: "/cards/selfcarwash.webp",
    features: [
      "Gerenciamento de clientes",
      "Gerenciamento de funcionários",
      "Gerenciamento de carros",
      "Gerenciamento de serviços",
      "Sistema financeiro",
      "Gerenciamento de planilhas"
    ],
    techs: [
      {name: "React", icon: "fa-react", color: "#58C4DC", link: "https://react.dev"},
      {name: "Node.js", icon: "fa-node-js", color: "#417E38", link: "https://nodejs.org"},
      {name: "MongoDB", icon: "fa-database", color: "#00ED64", link: "https://www.mongodb.com"},
    ],
    github: "https://github.com/GuilhermeSchuch/AutoLavagem-APP"
  },
  {
    id: 3,
    title: "Listinha",
    url: "Listinha",
    tags: "Mobile, Android",
    metaTags: {
      title: "Listinha",
      description: "Aplicativo simples para criar e organizar listas com suporte multilíngue.",
      keywords: "listas, mobile, android, react native"
    },
    image: "/cards/listinha.png",
    features: ["Gerenciamento de listas", "Suporte a 3 idiomas"],
    techs: [
      {name: "React Native", icon: "fa-react", color: "#58C4DC", link: "https://reactnative.dev"},
      {name: "SQLite", icon: "fa-database", color: "#218CD2", link: "https://www.sqlite.org"},
    ],
    github: "https://github.com/GuilhermeSchuch/Listinha"
  },
];

const posts = [
  {
    id: 1,
    image: "/posts/d3d-device-being-lost.webp",
    imageHash: "L34_tit7xuRj%MxuRjt7~qM{t7ay",
    date: "Nov 03, 2023",
    author: "Guilherme Schuch",
    title: "D3D Device being lost",
    url: "D3D-Device-being-lost",
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
              type: "break",
              content: "",
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
              type: "break",
              content: "",
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
              type: "break",
              content: "",
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
              type: "break",
              content: "",
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
    imageHash: "LLFsWEkC01bIRiaea#j[DiWC~VoL",
    date: "Oct 05, 2024",
    author: "Guilherme Schuch",
    title: "Error Code 0001 Realtek",
    url: "Error-Code-0001-Realtek",
    subtitle: "A not very common error that occurs on computers that have conflicts between drivers or that have been recently formatted. This error, luckily, has a simple solution.",
    tags: ["Tech", '-', "Error", '-', "Driver"],
    metaTags: {
      title: "Fix Error Code 0001 Realtek",
      description: "Learn how to fix Error Code 0001 Realtek. Troubleshooting tips and solutions for drivers in your computer.",
      keywords: "Error Code 0001 Realtek, Realtek, driver issues"
    },
    content: {
      topics: ["Driver removal", "Driver Update"],
      block: [
        {
          title: "Driver removal",
          paragraph: [
            {
              type: "text",
              content: "For this first step, "
            },
            {
              type: "bold",
              content: "go to device manager ",
            },
            {
              type: "text",
              content: "the quickest way to access is by clicking respectively, ",
            },
            {
              type: "code",
              content: "WIN + X",
            },
            {
              type: "text",
              content: ", after the menu opens, click on Device Manager.",
            },
            {
              type: "break",
              content: "",
            },
            {
              type: "image",
              content: "/posts/device-manager.webp",
            },
            {
              type: "break",
              content: "",
            },
            {
              type: "text",
              content: "After clicking, your computer's drivers menu will open, select all your audio drivers (except the Realtek one) and click uninstall.",
            },
            {
              type: "break",
              content: "",
            },
            {
              type: "image",
              content: "/posts/audio-drivers.webp",
            },
            {
              type: "break",
              content: "",
            },
            {
              type: "text",
              content: "After uninstalling all your audio drivers, restart your computer and proceed to the next step.",
            },
          ]
        },
        {
          title: "Driver Update",
          paragraph: [
            {
              type: "text",
              content: "For this step, right-click on the realtek driver, and click update."
            },
            {
              type: "break",
              content: "",
            },
            {
              type: "image",
              content: "/posts/update-driver.webp",
            },
            {
              type: "break",
              content: "",
            },
            {
              type: "text",
              content: "After clicking on update, two options will appear, one to install the driver via the internet and another to ",
            },
            {
              type: "bold",
              content: "install the driver locally",
            },
            {
              type: "text",
              content: ", from your computer, you must click on local installation.",
            },
            {
              type: "break",
              content: "",
            },
            {
              type: "text",
              content: "When you do this, a field will appear for you to choose ",
            },
            {
              type: "bold",
              content: "where it is located.",
            },
            {
              type: "text",
              content: " your version of realtek, which can be downloaded ",
            },
            {
              type: "link",
              content: "here",
              link: "https://drive.google.com/uc?export=download&id=1pNme7vi0KW47uqhGWuyyMBKnNtTGjLPP"
            },
            {
              type: "text",
              content: " you will need a program to unzip the file, such as ",
            },
            {
              type: "link",
              content: "Winrar",
              link: "https://www.win-rar.com/start.html?&L=9"
            },
            {
              type: "break",
              content: "",
            },
            {
              type: "image",
              content: "/posts/location-driver.webp",
            },
            {
              type: "break",
              content: "",
            },
            {
              type: "text",
              content: "In the end, the path must be something ",
            },
            {
              type: "bold",
              content: "similar",
            },
            {
              type: "text",
              content: " to this image. After selecting the path, you can proceed with the installation/upgrade.",
            },
            {
              type: "break",
              content: "",
            },
            {
              type: "text",
              content: "By doing these simple steps, you should ",
            },
            {
              type: "bold",
              content: "restart your computer",
            },
            {
              type: "text",
              content: " and everything will be back to normal.",
            },
          ]
        },
      ]
    }
  },
  {
    id: 3,
    image: "/posts/kf2/kf2.webp",
    imageHash: "LBEK*{110#Mz}=EObbIp0$=ts:Nx",
    date: "May 08, 2025",
    author: "Guilherme Schuch",
    title: "How to install mods in Killing Floor 2",
    url: "How-to-install-mods-in-Killing-Floor-2",
    subtitle: "Learn where to find mods and how you can install them in Killing Floor 2.",
    tags: ["Games", '-', "Mods"],
    metaTags: {
      title: "How to install mods in Killing Floor 2",
      description: "Learn where to find mods and how you can install them in Killing Floor 2.",
      keywords: "Killing Floor 2, KF2, Mods, How to install Mods"
    },
    content: {
      topics: ["Where to find mods", "Installation via Steam", "Default installation"],
      block: [
        {
          title: "Where to find mods",
          paragraph: [
            {
              type: "text",
              content: "There are plenty of websites where you can find mods, "
            },
            {
              type: "link",
              content: "GameBanana",
              link: "https://gamebanana.com/games/5306"
            },
            {
              type: "text",
              content: ", ",
            },
            {
              type: "link",
              content: "Nexus Mods",
              link: "https://www.nexusmods.com/games/killingfloor"
            },
            {
              type: "text",
              content: " or ",
            },
            {
              type: "link",
              content: "ModDB",
              link: "https://www.moddb.com/games/killing-floor-2/addons"
            },
            {
              type: "text",
              content: " but the best and easiest way to get your mods is through ",
            },
            {
              type: "link",
              content: "Steam Workshop",
              link: "https://steamcommunity.com/workshop/browse/?appid=232090"
            },
            {
              type: "text",
              content: ", there are A LOT more mods there and the installation is pretty simple.",
            },
          ]
        },
        {
          title: "Installation via Steam",
          paragraph: [
            {
              type: "text",
              content: "To install the mods through "
            },
            {
              type: "bold",
              content: "Steam Workshop",
            },
            {
              type: "text",
              content: " you just click on the mod you want and hit the "
            },
            {
              type: "bold",
              content: "Subscribe",
            },
            {
              type: "text",
              content: " button. This will create a folder inside ",
            },
            {
              type: "code",
              content: "C:\\Users\\%USER%\\Documents\\My Games\\KillingFloor2\\KFGame\\Cache",
            },
            {
              type: "text",
              content: ", (sometimes you need to run the game to show the folder)",
            },
            {
              type: "text",
              content: ". Here are the mods i have installed:",
            },
            {
              type: "image",
              content: "/posts/kf2/mods-folder.webp",
            },
            {
              type: "break",
              content: "",
            },
            {
              type: "text",
              content: "Now, you access the folder of your mod, and copy the ",
            },
            {
              type: "bold",
              content: "Published",
            },
            {
              type: "text",
              content: " folder and paste it in ",
            },
            {
              type: "code",
              content: "C:\\Users\\%USER%\\Documents\\My Games\\KillingFloor2\\KFGame",
            },
            {
              type: "text",
              content: ". You need to copy the Published folder to the main game directory for all the mods you want to install. The final result should look like this:",
            },
            {
              type: "image",
              content: "/posts/kf2/game-folder.webp",
            },
            {
              type: "break",
              content: "",
            },
            {
              type: "text",
              content: "If the mod should have extra steps to follow, the creator of the mod will add these steps on the description.",
            },
            {
              type: "break",
              content: "",
            },
            {
              type: "text",
              content: "Next time you launch your game, the mods will be installed.",
            },
          ]
        },
        {
          title: "Default installation",
          paragraph: [
            {
              type: "text",
              content: "If you want to install from another website (which i do not recommend), you can download the files of the mod you chose and copy them inside the game's folder.",
            },
            {
              type: "break",
              content: "",
            },
            {
              type: "text",
              content: "Usually, the website shows to you where you need to copy the mod's file, but if you don't know how to get there, here is a basic tutorial: ",
            },
            {
              type: "code",
              content: "Right click",
            },
            {
              type: "text",
              content: " on your game on Steam, then go to ",
            },
            {
              type: "code",
              content: "Manage -> Browse local files",
            },
            {
              type: "text",
              content: ", this folder will open:",
            },
            {
              type: "image",
              content: "/posts/kf2/steam-folder.webp"
            },
            {
              type: "break",
              content: "",
            },
            {
              type: "text",
              content: "After opening this folder, go to ",
            },
            {
              type: "code",
              content: "KFGame -> BrewedPC",
            },
            {
              type: "text",
              content: ". That's it, you are in the main game's folder, all the mods should be installed here.",
            },
          ]
        },
      ]
    }
  },
]

const postsBR = [
  {
    id: 1,
    image: "/posts/d3d-device-being-lost.webp",
    imageHash: "L34_tit7xuRj%MxuRjt7~qM{t7ay",
    date: "03 de Nov, 2023",
    author: "Guilherme Schuch",
    title: "Dispositivo D3D perdido",
    url: "D3D-Device-being-lost",
    subtitle: "Um erro desagradável e incomum que pode ocorrer em jogos, principalmente criados com a Unreal Engine. Não sou profissional, mas se você está aqui, está passando pelo mesmo problema que eu passei.",
    tags: ["Tecnologia", '-', "Erro"],
    metaTags: {
      title: "Dispositivo D3D Perdido - Corrigindo erros da Unreal Engine",
      description: "Aprenda a corrigir o erro Dispositivo D3D Perdido na Unreal Engine. Dicas e soluções de solução de problemas para jogadores e desenvolvedores.",
      keywords: "Dispositivo D3D perdido, erro Unreal Engine, problemas em jogos, erro DirectX, travamentos em jogos"
    },
    content: {
      topics: [
        "Atualizar Drivers",
        "Battery Boost do NVIDIA Geforce Experience",
        "Verificar integridade dos arquivos",
        "Instalação limpa dos Drivers",
        "DirectX",
        "Jogo em Tela Cheia",
        "TdrDelay",
      ],
      block: [
        {
          title: "Atualizar Drivers",
          paragraph: [
            {
              type: "text",
              content: "Manter os drivers do seu computador desatualizados pode influenciar no desempenho dos jogos e até causar problemas, use "
            },
            {
              type: "link",
              content: "Driver Booster",
              link: "https://www.iobit.com/pt/driver-booster.php"
            },
            {
              type: "text",
              content: " ou "
            },
            {
              type: "link",
              content: "Driver Easy",
              link: "https://www.drivereasy.com/"
            },
            {
              type: "text",
              content: " para instalar todos os drivers necessários para o seu computador."
            },
            {
              type: "break",
              content: ""
            },
            {
              type: "text",
              content: "Você pode atualizar manualmente o driver da placa de vídeo pressionando respectivamente as teclas WIN + R do seu teclado e digitando "
            },
            {
              type: "code",
              content: "devmgmt.msc"
            },
            {
              type: "text",
              content: ", pressione enter após digitar."
            },
            {
              type: "break",
              content: ""
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
              content: "Procure pelo seu driver de vídeo e clique em atualizar."
            }
          ]
        },
        {
          title: "Battery Boost do NVIDIA Geforce Experience",
          paragraph: [
            {
              type: "text",
              content: 'Se você está tentando rodar o jogo em um Notebook, é importante desabilitar todos os "boosts" que a NVIDIA aplica.'
            },
            {
              type: "break",
              content: ""
            },
            {
              type: "text",
              content: "Certifique-se de que o Battery Boost do Geforce Experience esteja desativado. Você pode verificar isso através do próprio software da NVIDIA: Geforce Experience."
            }
          ]
        },
        {
          title: "Verificar integridade dos arquivos",
          paragraph: [
            {
              type: "text",
              content: "Se esse erro estiver ocorrendo em um jogo da Steam, tente verificar a integridade dos arquivos do jogo."
            },
            {
              type: "break",
              content: ""
            },
            {
              type: "text",
              content: "Clique com o botão direito no jogo -> Propriedades -> Arquivos Instalados -> Verificar integridade dos arquivos do jogo. Se o problema não for resolvido, tente reinstalar o jogo."
            },
            {
              type: "break",
              content: ""
            },
            {
              type: "image",
              content: "/posts/integrity.webp"
            }
          ]
        },
        {
          title: "Instalação limpa dos Drivers",
          paragraph: [
            {
              type: "text",
              content: "Se você possui uma placa de vídeo NVIDIA, saiba que muitos drivers desnecessários são instalados no seu PC. Para esses drivers, é recomendável usar o "
            },
            {
              type: "link",
              content: "DDU",
              link: "https://www.guru3d.com/download/display-driver-uninstaller-download/"
            },
            {
              type: "text",
              content: " para removê-los e, após a remoção, usar o "
            },
            {
              type: "link",
              content: "NVCleanstall",
              link: "https://www.techpowerup.com/download/techpowerup-nvcleanstall"
            },
            {
              type: "text",
              content: " para instalar apenas os drivers necessários."
            }
          ]
        },
        {
          title: "DirectX",
          paragraph: [
            {
              type: "text",
              content: "É extremamente importante, para rodar os jogos mais atuais, que você tenha a versão mais recente do DirectX instalada no seu computador. Caso não tenha, você pode baixá-la "
            },
            {
              type: "link",
              content: "aqui",
              link: "https://www.microsoft.com/pt-br/download/details.aspx?id=35"
            },
            {
              type: "text",
              content: "."
            }
          ]
        },
        {
          title: "Jogo em Tela Cheia",
          paragraph: [
            {
              type: "text",
              content: "Por mais incrível que pareça, a solução para o seu problema pode ser simplesmente alterar o jogo de tela cheia para modo janela, e o erro não voltará a aparecer."
            }
          ]
        },
        {
          title: "TdrDelay",
          paragraph: [
            {
              type: "text",
              content: "Essa configuração basicamente especifica o número de segundos que a GPU pode atrasar o pedido de preempção do agendador da GPU."
            },
            {
              type: "break",
              content: ""
            },
            {
              type: "text",
              content: "Primeiramente, você deve, respectivamente, pressionar as teclas WIN + R no seu teclado e digitar: "
            },
            {
              type: "code",
              content: "regedit"
            },
            {
              type: "text",
              content: ", pressione enter."
            },
            {
              type: "break",
              content: ""
            },
            {
              type: "text",
              content: "Agora, você deve colar: "
            },
            {
              type: "code",
              content: "HKEY_LOCAL_MACHINE\\System\\CurrentControlSet\\Control\\GraphicsDrivers"
            },
            {
              type: "text",
              content: " no campo, como mostrado na imagem abaixo, e pressionar enter."
            },
            {
              type: "break",
              content: ""
            },
            {
              type: "image",
              content: "/posts/tdr.webp"
            },
            {
              type: "break",
              content: ""
            },
            {
              type: "text",
              content: "Crie um novo DWORD clicando com o botão direito, você deve nomeá-lo como "
            },
            {
              type: "code",
              content: "TdrDelay"
            },
            {
              type: "text",
              content: ". Após nomeá-lo, clique duas vezes sobre ele, atribua o valor 10 e classifique como Decimal."
            },
            {
              type: "break",
              content: ""
            },
            {
              type: "image",
              content: "/posts/tdr2.webp"
            }
          ]
        },
        {
          title: "Conclusão",
          paragraph: [
            {
              type: "text",
              content: "Como mencionei no início do post, esse erro ocorre porque sua placa de vídeo não está suportando o jogo. Se nenhuma das soluções apresentadas funcionar para você, sinto muito, você enfrentou o mesmo destino que eu. (Compre uma nova placa de vídeo)"
            }
          ]
        }
      ]
    }
  },
  {
    id: 2,
    image: "/posts/realtek.webp",
    imageHash: "LLFsWEkC01bIRiaea#j[DiWC~VoL",
    date: "05 de Out, 2024",
    author: "Guilherme Schuch",
    title: "Código de Erro 0001 Realtek",
    url: "Error-Code-0001-Realtek",
    subtitle: "Um erro não muito comum que ocorre em computadores que têm conflitos entre drivers ou que foram formatados recentemente. Esse erro, felizmente, tem uma solução simples.",
    tags: ["Tecnologia", "-", "Erro", "-", "Driver"],
    metaTags: {
      title: "Corrigir Código de Erro 0001 Realtek",
      description: "Aprenda como corrigir o Código de Erro 0001 Realtek. Dicas e soluções de solução de problemas para drivers no seu computador.",
      keywords: "Código de Erro 0001 Realtek, Realtek, problemas de driver"
    },
    content: {
      topics: ["Remoção do driver", "Atualização do driver"],
      block: [
        {
          title: "Remoção do driver",
          paragraph: [
            {
              type: "text",
              content: "Para este primeiro passo, "
            },
            {
              type: "bold",
              content: "vá ao gerenciador de dispositivos ",
            },
            {
              type: "text",
              content: "a maneira mais rápida de acessar é clicando respectivamente, "
            },
            {
              type: "code",
              content: "WIN + X"
            },
            {
              type: "text",
              content: ", após o menu abrir, clique em Gerenciador de Dispositivos."
            },
            {
              type: "break",
              content: ""
            },
            {
              type: "image",
              content: "/posts/device-manager.webp"
            },
            {
              type: "break",
              content: ""
            },
            {
              type: "text",
              content: "Após clicar, o menu de drivers do seu computador será aberto, selecione todos os seus drivers de áudio (exceto o da Realtek) e clique em desinstalar."
            },
            {
              type: "break",
              content: ""
            },
            {
              type: "image",
              content: "/posts/audio-drivers.webp"
            },
            {
              type: "break",
              content: ""
            },
            {
              type: "text",
              content: "Após desinstalar todos os seus drivers de áudio, reinicie o computador e siga para o próximo passo."
            }
          ]
        },
        {
          title: "Atualização do driver",
          paragraph: [
            {
              type: "text",
              content: "Para este passo, clique com o botão direito no driver da Realtek e clique em atualizar."
            },
            {
              type: "break",
              content: ""
            },
            {
              type: "image",
              content: "/posts/update-driver.webp"
            },
            {
              type: "break",
              content: ""
            },
            {
              type: "text",
              content: "Após clicar em atualizar, duas opções aparecerão, uma para instalar o driver pela internet e outra para "
            },
            {
              type: "bold",
              content: "instalar o driver localmente"
            },
            {
              type: "text",
              content: ", do seu computador. Você deve clicar em instalação local."
            },
            {
              type: "break",
              content: ""
            },
            {
              type: "text",
              content: "Ao fazer isso, um campo aparecerá para você escolher "
            },
            {
              type: "bold",
              content: "onde está localizada"
            },
            {
              type: "text",
              content: " sua versão do Realtek, que pode ser baixada "
            },
            {
              type: "link",
              content: "aqui",
              link: "https://drive.google.com/uc?export=download&id=1pNme7vi0KW47uqhGWuyyMBKnNtTGjLPP"
            },
            {
              type: "text",
              content: ". Você precisará de um programa para descompactar o arquivo, como o "
            },
            {
              type: "link",
              content: "Winrar",
              link: "https://www.win-rar.com/start.html?&L=9"
            },
            {
              type: "break",
              content: ""
            },
            {
              type: "image",
              content: "/posts/location-driver.webp"
            },
            {
              type: "break",
              content: ""
            },
            {
              type: "text",
              content: "Ao final, o caminho deve ser algo "
            },
            {
              type: "bold",
              content: "semelhante"
            },
            {
              type: "text",
              content: " ao da imagem. Após selecionar o caminho, você pode prosseguir com a instalação/atualização."
            },
            {
              type: "break",
              content: ""
            },
            {
              type: "text",
              content: "Ao realizar esses passos simples, você deve "
            },
            {
              type: "bold",
              content: "reiniciar seu computador"
            },
            {
              type: "text",
              content: " e tudo deverá voltar ao normal."
            }
          ]
        }
      ]
    }
  },
  {
    id: 3,
    image: "/posts/kf2/kf2.webp",
    imageHash: "LBEK*{110#Mz}=EObbIp0$=ts:Nx",
    date: "08 de Mai, 2025",    
    author: "Guilherme Schuch",
    title: "Como instalar mods no Killing Floor 2",
    url: "How-to-install-mods-in-Killing-Floor-2",
    subtitle: "Aprenda onde encontrar e como instalar mods no Killing Floor 2.",
    tags: ["Jogos", "-", "Mods"],
    metaTags: {
      title: "Como instalar mods no Killing Floor 2",
      description: "Aprenda onde encontrar e como instalar mods no Killing Floor 2.",
      keywords: "Killing Floor 2, KF2, Mods, Como instalar Mods"
    },
    content: {
      topics: ["Onde encontrar mods", "Instalação via Steam", "Instalação manual"],
      block: [
        {
          title: "Onde encontrar mods",
          paragraph: [
            {
              type: "text",
              content: "Existem vários sites onde você pode encontrar mods, "
            },
            {
              type: "link",
              content: "GameBanana",
              link: "https://gamebanana.com/games/5306"
            },
            {
              type: "text",
              content: ", "
            },
            {
              type: "link",
              content: "Nexus Mods",
              link: "https://www.nexusmods.com/games/killingfloor"
            },
            {
              type: "text",
              content: " ou "
            },
            {
              type: "link",
              content: "ModDB",
              link: "https://www.moddb.com/games/killing-floor-2/addons"
            },
            {
              type: "text",
              content: ", mas a maneira mais fácil e prática de obter seus mods é pelo "
            },
            {
              type: "link",
              content: "Steam Workshop",
              link: "https://steamcommunity.com/workshop/browse/?appid=232090"
            },
            {
              type: "text",
              content: ", onde há MUITO mais mods disponíveis e a instalação é bem simples."
            }
          ]
        },
        {
          title: "Instalação via Steam",
          paragraph: [
            {
              type: "text",
              content: "Para instalar os mods através do "
            },
            {
              type: "bold",
              content: "Steam Workshop"
            },
            {
              type: "text",
              content: ", basta clicar no mod desejado e depois em "
            },
            {
              type: "bold",
              content: "Inscrever-se"
            },
            {
              type: "text",
              content: ". Isso irá criar uma pasta em "
            },
            {
              type: "code",
              content: "C:\\Users\\%USER%\\Documents\\My Games\\KillingFloor2\\KFGame\\Cache"
            },
            {
              type: "text",
              content: " (às vezes é necessário abrir o jogo para essa pasta aparecer)."
            },
            {
              type: "text",
              content: " Aqui estão os mods que tenho instalados:"
            },
            {
              type: "image",
              content: "/posts/kf2/mods-folder.webp"
            },
            {
              type: "break",
              content: ""
            },
            {
              type: "text",
              content: "Agora, acesse a pasta do seu mod e copie a pasta "
            },
            {
              type: "bold",
              content: "Published"
            },
            {
              type: "text",
              content: " e cole em "
            },
            {
              type: "code",
              content: "C:\\Users\\%USER%\\Documents\\My Games\\KillingFloor2\\KFGame"
            },
            {
              type: "text",
              content: ". Você deve copiar a pasta Published para o diretório principal do jogo para todos os mods que deseja instalar. O resultado final esperado deve ser algo assim:"
            },
            {
              type: "image",
              content: "/posts/kf2/game-folder.webp"
            },
            {
              type: "break",
              content: ""
            },
            {
              type: "text",
              content: "Se o mod exigir etapas adicionais, o criador geralmente deixa as instruções na descrição."
            },
            {
              type: "break",
              content: ""
            },
            {
              type: "text",
              content: "Da próxima vez que abrir o jogo, os mods já estarão instalados."
            }
          ]
        },
        {
          title: "Instalação manual",
          paragraph: [
            {
              type: "text",
              content: "Se quiser instalar por outros sites (o que não recomendo), você pode baixar os arquivos do mod escolhido e copiá-los para a pasta do jogo."
            },
            {
              type: "break",
              content: ""
            },
            {
              type: "text",
              content: "Geralmente, o site informa onde colocar os arquivos, mas se não souber como chegar até lá, aqui está um tutorial básico: "
            },
            {
              type: "code",
              content: "Clique com o botão direito"
            },
            {
              type: "text",
              content: " no seu jogo na Steam, depois vá em "
            },
            {
              type: "code",
              content: "Gerenciar -> Procurar arquivos locais"
            },
            {
              type: "text",
              content: ", essa pasta será aberta:"
            },
            {
              type: "image",
              content: "/posts/kf2/steam-folder.webp"
            },
            {
              type: "break",
              content: ""
            },
            {
              type: "text",
              content: "Após abrir essa pasta, vá até "
            },
            {
              type: "code",
              content: "KFGame -> BrewedPC"
            },
            {
              type: "text",
              content: ". Pronto, você está na pasta principal do jogo, todos os mods devem ser instalados aqui."
            }
          ]
        }
      ]
    }
  },
]

export { projects, projectsBR, posts, postsBR };