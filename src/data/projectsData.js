export const projectsData = {
  'droneDatabase': {
    en: {
      title: ['Drone Mail'],
      subtitle: 'Database MySQL',
      buttons: [
        {
          type: 'github', 
          text: 'Github',
          url: 'https://github.com/Pluhec/DatabazovySystemDronuJakubPluhacek'
        }
      ],
      description: 'My final project for the MySQL class. I built a relational database that simulates a “postal service of the future” where drones deliver packages. The system tracks warehouses, stations, drones, users, deliveries, and operators, and it watches drone availability, delivery times, and battery levels. When a delivery is created, a drone is reserved, completes the drop-off, and returns to charge. The goal is to show how data could coordinate the whole operation clearly and reliably.',
      category: 'SCHOOL'
    },
    cz: {
      title: ['Dronová Pošta'],
      subtitle: 'Databáze MySQL',
      buttons: [
        {
          type: 'github', 
          text: 'Github',
          url: 'https://github.com/Pluhec/DatabazovySystemDronuJakubPluhacek'
        }
      ],
      description: 'Moje závěrečná práce do předmětu MySQL. Vytvořil jsem relační databázi, která simuluje „poštu budoucnosti“, kde zásilky doručují drony. Systém eviduje sklady, stanice, drony, uživatele, zásilky i operátory a hlídá dostupnost dronů, termíny doručení a stav baterií. Když někdo objedná doručení, dron je rezervovaný, doručí balíček a vrátí se na nabíjení. Cílem je ukázat, jak by šlo takový provoz řídit daty přehledně a spolehlivě.',
      category: 'ŠKOLA'
    },
    image: 'https://images.unsplash.com/photo-1521405924368-64c5b84bec60?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://images.unsplash.com/photo-1521405924368-64c5b84bec60?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      '/Assets/Photos/Work/DroneDatabaseGraphs.png'
    ],
    icon: 'Assets/Icons/Work/database.png'
  },

  'planPal': {
    en: {
      title: ['PlanPal'],
      subtitle: 'Fullstack - React + Node.js',
      buttons: [
        {
          type: 'github', 
          text: 'Github',
          url: 'https://github.com/Pluhec/PlanPalApp'
        }
      ],
      description: 'PlanPal is a final exam project focused on building a JavaScript application: a web app for planning trips. Frontend in React, backend in Node.js/Express (REST API). Registration and sign-in with hashed passwords (bcrypt) persisted in a database; trip creation and management (CRUD), user list and filtering, and a responsive UI. Through this project I gained hands-on experience with REST API design and versioning, client/server separation, asynchronous requests, input validation, error handling, and authentication.',
      category: 'SCHOOL'
    },
    cz: {
      title: ['PlanPal'],
      subtitle: 'Fullstack - React + Node.js',
      buttons: [
        {
          type: 'github', 
          text: 'Github',
          url: 'https://github.com/Pluhec/PlanPalApp'
        }
      ],
      description: 'PlanPal je klauzurní práce na téma aplikace v JavaScriptu: webová appka pro plánování výletů. Frontend v Reactu, backend v Node.js/Express (REST API). Registrace a přihlášení s hashovanými hesly (bcrypt) a ukládáním do databáze; tvorba a správa výletů (CRUD), seznam a filtrování uživatelů, responzivní UI. Na projektu jsem si osvojil návrh a verzování REST API, oddělení klient/server, asynchronní požadavky, validaci vstupů, obsluhu chyb a autentizaci.',
      category: 'ŠKOLA'
    },
    image: 'https://images.unsplash.com/photo-1692895591954-451050db22fd?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: 'planpal-logo'
  },
  
  'TheMartian': {
    en: {
      title: ['The Martian'],
      subtitle: 'Unity + C#',
      buttons: [
        {
          type: 'github', 
          text: 'Github',
          url: 'https://github.com/Pluhec/The-Martian'
        },
        {
          type: 'youtube',
          text: 'Gameplay (YouTube)',
          url: 'https://www.youtube.com/watch?v=vYybulpysFw&t=508s'
        },
        {
          type: 'youtube',
          text: 'Film Comparison (YouTube)',
          url: 'https://www.youtube.com/watch?v=eXUsnsTkT-I'
        }
      ],
      // EN
    description: 'Final project for the 2D Game Programming course. A 2D game inspired by the film The Martian, built in Unity with C#. The player completes film-inspired quests (bringing the habitat online and maintaining it, repairing equipment, progressing through missions). Focused on quests, UI, animations, and a smooth game loop. Collaboration with <a href="https://www.patrikmana.cz" target="_blank" rel="noopener noreferrer">Patrik</a> — great team synergy, and we plan to continue building projects together.',
      category: 'Unity + C#'
    },
    cz: {
      title: ['The Martian'],
      subtitle: 'Unity + C#',
      buttons: [
        {
          type: 'github',  
          text: 'Github',
          url: 'https://github.com/Pluhec/The-Martian'
        },
        {
          type: 'youtube',
          text: 'Gameplay hry (YouTube)',
          url: 'https://www.youtube.com/watch?v=vYybulpysFw&t=508s'
        },
        {
          type: 'youtube',
          text: 'Porovnání s filmem (YouTube)',
          url: 'https://www.youtube.com/watch?v=eXUsnsTkT-I'
        }
      ],
      // CZ
    description: 'Klauzurní práce z předmětu Programování 2D her. 2D hra inspirovaná filmem Marťan (The Martian), postavená v Unity s C#. Hráč plní úkoly po vzoru filmu (zprovoznění a údržba základny, opravy vybavení, postup přes jednotlivé mise). Důraz na questy, UI, animace a plynulý herní loop. Spolupráce s <a href="https://www.patrikmana.cz" target="_blank" rel="noopener noreferrer">Patrikem</a> — skvělá týmová souhra, chceme na podobných projektech pokračovat.',
      category: 'ŠKOLA'
    },
    image: '/Assets/Photos/Work/Martian/TheMartian.png',
    images: [
      '/Assets/Photos/Work/Martian/TheMartian.png',
      '/Assets/Photos/Work/Martian/ascii.png',
      '/Assets/Photos/Work/Martian/fertilizer.png', 
      '/Assets/Photos/Work/Martian/rocket.png',
      '/Assets/Photos/Work/Martian/startRocket.png',
      '/Assets/Photos/Work/Martian/terminal.png',
      '/Assets/Photos/Work/Martian/waterGame.png'
    ],
    icon: '/Assets/Icons/Work/TheMartinaBlack.png'
  },

  'tcz': {
    en: {
      title: ['Tiger', 'Club Zlin'],
      subtitle: 'Webflow',
      buttons: [
        {
          type: 'link',
          text: 'View Site', 
          url: 'https://www.tigerclubzlin.cz'
        }
      ],
      description: 'I created a website for Tigers Club Zlín, showcasing their kickboxing and self-defense programs. Built using Webflow, the site includes details about training sessions, the coach, and the class schedule. I specialize in custom web design, focusing on functionality and aesthetics to meet clients\' needs.',
      category: 'COMMISSION'
    },
    cz: {
      title: ['Tiger', 'Club Zlín'],
      subtitle: 'Webflow',
      buttons: [
        {
          type: 'link',
          text: 'Zobrazit web', 
          url: 'https://www.tigerclubzlin.cz'
        }
      ],
      description: 'Vytvořil jsem webové stránky pro Tigers Club Zlín, které prezentují jejich kickboxové a sebeobrané programy. Vytvořené pomocí Webflow, stránky obsahují detaily o tréninkových sezeních, trenérovi a rozvrhu hodin. Specializuji se na vlastní webový design, zaměřený na funkcionalitu a estetiku pro splnění potřeb klientů.',
      category: 'ZAKÁZKA'
    },
    image: '/Assets/Photos/Work/TGZ-bck.webp',
    icon: '/Assets/Icons/Work/TGZ.png'
  },

  'SQliteNode': {
    en: {
      title: ['SQlite Node CRUD'],
      subtitle: 'SQlite Node.js',
      buttons: [
        {
          type: 'github', 
          text: 'Github',
          url: 'https://github.com/Pluhec/Node-SQLite-CRUD-app'
        }
      ],
      // EN
    description: 'Final project for the JavaScript course: a simple CRUD web application using Node.js and an SQLite database. The Node.js/Express backend provides a REST API (create/read/update/delete) and stores data in SQLite; the frontend has a simple UI for working with forms and lists.',
      category: 'SCHOOL'
    },
    cz: {
      title: ['SQlite Node CRUD'],
      subtitle: 'SQlite Node.js',
      buttons: [
        {
          type: 'github', 
          text: 'Github',
          url: 'https://github.com/Pluhec/Node-SQLite-CRUD-app'
        }
      ],
      // CZ
    description: 'Závěrečná práce do předmětu JavaScript: jednoduchá CRUD webová aplikace s Node.js a databází SQLite. Backend v Node.js/Express poskytuje REST API (create/read/update/delete) a ukládá data do SQLite; frontend má jednoduché UI pro práci s formuláři a seznamy.',
      category: 'ŠKOLA'
    },
    image: 'https://images.unsplash.com/photo-1596312227389-44ec814d5c1c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: '/Assets/Icons/Work/delete.png'
  },

  'SpaceInvaders': {
    en: {
      title: ['Space Invaders'],
      subtitle: 'Unity + C#',
      buttons: [
        {
          type: 'github', 
          text: 'Github',
          url: 'https://github.com/Pluhec/Space-Invaders'
        }
      ],
      // EN
    description: 'Course project for 2D Game Programming: a straight Space Invaders clone. I learned Unity fundamentals — animation, UI, and working in the editor — together with C# scripting (player movement and shooting, enemy behaviour, collisions, score and lives). Focused on clear game logic and easy extensibility (extra waves, power-ups).',
      category: 'SCHOOL'
    },
    cz: {
      title: ['Space Invaders'],
      subtitle: 'Unity + C#',
      buttons: [
        {
          type: 'github', 
          text: 'Github',
          url: 'https://github.com/Pluhec/Space-Invaders'
        }
      ],
      description: 'Školní projekt v rámci předmětu Programování 2D her: čistý klon Space Invaders. Učil jsem se základy Unity — animace, UI a práce v editoru — společně s C# skriptováním (pohyb a střelba hráče, chování nepřátel, kolize, skóre a životy). Důraz na přehlednou logiku a jednoduché rozšíření (další vlny, power-upy).',
      category: 'ŠKOLA'
    },
    image: '/Assets/Photos/Work/image.png',
    icon: 'space-invaders'
  },

  'javaTenis': {
    en: {
      title: ['Tenis Score Counter'],
      subtitle: 'Java',
      buttons: [
        {
          type: 'github', 
          text: 'Github',
          url: 'https://github.com/Pluhec/objektovy-tenis'
        }
      ],
      description: 'Classroom assignment for Object-Oriented Programming in Java: a simple tennis score counter. Implements 15–30–40, deuce/advantage, and game resolution. Focused on clean OOP and a clear game logic that can be easily extended (sets, tie-break).',
      category: 'SCHOOL'
    },
    cz: {
      title: ['Tenisové počítadlo'],
      subtitle: 'Java',
      buttons: [
        {
          type: 'github', 
          text: 'Github',
          url: 'https://github.com/Pluhec/objektovy-tenis'
        }
      ],
      description: 'Práce z hodiny objektově orientovaného programování v Javě: jednoduchá aplikace pro počítání tenisového skóre. Umí 15–30–40, deuce/výhoda a vyhodnocení gamu. Důraz na čisté OOP a přehlednou herní logiku s možností snadného rozšíření (sety, tie-break).',
      category: 'ŠKOLA'
    },
    image: 'https://images.unsplash.com/photo-1541744573515-478c959628a0?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: 'Assets/Icons/Work/counter.png'
  },

  'dodWeb': {
    en: {
      title: ['DOD Web'],
      subtitle: 'React + MySQL',
      buttons: [
        {
          type: 'github', 
          text: 'Github',
          url: 'https://github.com/Pluhec/DOD-Web'
        }
      ],
      description: 'School team project for the Open Day: three connected parts — a web app (my team), a database, and a game — that communicate with each other (e.g., the game leaderboard is displayed on the website and the website serves as the game’s client). My main role was frontend and database design; I also closely collaborated on the backend with <a href="https://github.com/PatrikMana" target="_blank" rel="noopener noreferrer">Patrik</a>. It was our first time working together on a school project, and we plan to continue collaborating on future projects.',
      category: 'SCHOOL'
    },
    cz: {
      title: ['DOD Web'],
      subtitle: 'React + MySQL',
      buttons: [
        {
          type: 'github', 
          text: 'Github',
          url: 'https://github.com/Pluhec/DOD-Web'
        }
      ],
      description: 'Školní týmový projekt k Dni otevřených dveří: tři propojené části — webová aplikace (můj tým), databáze a hra — které spolu komunikují (např. leaderboard ze hry se zobrazuje na webu a web slouží jako klient hry). Moje hlavní role byla frontend a návrh databáze; zároveň jsem úzce spolupracoval na backendu s <a href="https://github.com/PatrikMana" target="_blank" rel="noopener noreferrer">Patrikem</a>. Byla to naše první společná práce na školním projektu a plánujeme spolu pokračovat na dalších projektech.',
      category: 'ŠKOLA'
    },
    image: 'https://creativehill.cz/imager/data/galleries/vyvoj-multimedialnich-aplikaci/gallery/43936/Sn%C3%ADmek-obrazovky-2024-04-16-v-12.58.32_be3c7b2f2ae30360d86a5c64fb3e27d0.png',
    icon: '/Assets/Icons/Work/opened-door-aperture.png'
  },

'Geoguesser': {
    en: {
      title: ['Geoguesser'],
      subtitle: 'React',
      buttons: [
        {
          type: 'github', 
          text: 'Github',
          url: 'https://github.com/Pluhec/SimpleGeoguesser'
        }
      ],
      // EN
    description: 'A “low-budget GeoGuessr” mini-game: the app shows metrics for a random point on the map (temperature, wind, climatic min/max, etc.) and your task is to guess where it is. Built purely in React (front-end).',
      category: 'FOR FUN'
    },
    cz: {
      title: ['Geoguesser'],
      subtitle: 'React',
      buttons: [
        {
          type: 'github', 
          text: 'Github',
          url: 'https://github.com/Pluhec/SimpleGeoguesser'
        }
      ],
      // CZ
    description: 'Mini hra „low-budget GeoGuessr“: aplikace zobrazí hodnoty pro náhodný bod na mapě (teplota, vítr, klimatické minimum/maximum apod.) a tvým úkolem je podle nich odhadnout, kde se místo nachází. Napsané čistě v Reactu (front-end).',
      category: 'PRO ZÁBAVU'
    },
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: '/Assets/Icons/Work/placeholder.png'
  },

  'password': {
    en: {
      title: ['Password', 'Generator'],
      subtitle: 'Javascript',
      buttons: [
        {
          type: 'link',
          text: 'View Site',
          url: 'https://pluhec.github.io/Random-password-generator/'
        },
        {
          type: 'github', 
          text: 'Github',
          url: 'https://github.com/Pluhec/Random-password-generator?tab=readme-ov-file'
        }
      ],
      description: 'Since I decided to start learning javascript this year (2024), I needed some simple project to learn some basic principles of javascript.',
      category: 'FOR FUN'
    },
    cz: {
      title: ['Generátor', 'Hesel'],
      subtitle: 'Javascript',
      buttons: [
        {
          type: 'link',
          text: 'Zobrazit web',
          url: 'https://pluhec.github.io/Random-password-generator/'
        },
        {
          type: 'github', 
          text: 'Github',
          url: 'https://github.com/Pluhec/Random-password-generator?tab=readme-ov-file'
        }
      ],
      description: 'Jelikož jsem se letos (2024) rozhodl začít učit javascript, potřeboval jsem nějaký jednoduchý projekt, abych se naučil základní principy javascriptu.',
      category: 'PRO ZÁBAVU'
    },
    image: '/Assets/Photos/Work/password-bck.webp',
    icon: '/Assets/Icons/Work/password-generator.png'
  },

  'dark-mode': {
    en: {
      title: ['Dark', 'Mode'],
      subtitle: 'Javascript - used on this portfolio',
      buttons: [
        {
          type: 'github',
          text: 'Github',
          url: 'https://github.com/Pluhec/Dark-theme'
        }
      ],
      description: 'This project focuses on the implementation of a dark theme on web pages. As the author, I decided to undertake this project out of curiosity about how to create such an effect using JavaScript and CSS. The project served as a practical exercise to improve my JavaScript skills and understand the dynamics of theme switching in web development.',
      category: 'FOR FUN'
    },
    cz: {
      title: ['Tmavý', 'Režim'],
      subtitle: 'Použito na tomto portfoliu',
      buttons: [
        {
          type: 'github',
          text: 'Github',
          url: 'https://github.com/Pluhec/Dark-theme'
        }
      ],
      description: 'Tento projekt se zaměřuje na implementaci tmavého tématu na webových stránkách. Jako autor jsem se rozhodl podniknout tento projekt ze zvědavosti, jak vytvořit takový efekt pomocí JavaScriptu a CSS. Projekt sloužil jako praktické cvičení pro zlepšení mých dovedností v JavaScriptu a pochopení dynamiky přepínání tématu ve webovém vývoji.',
      category: 'PRO ZÁBAVU'
    },
    image: '/Assets/Photos/Work/dark-bck.webp',
    icon: '/Assets/Icons/Work/dark-mode.png'
  },

  'autofine': {
    en: {
      title: ['Autofine'],
      subtitle: 'HTML + CSS',
      buttons: [
        {
          type: 'github',
          text: 'Github',
          url: 'https://github.com/Pluhec/AUTOFINE'
        }
      ],
      description: 'Autofine pages are focused on calculations and providing information about cars. I created this project because I was fascinated by creating web applications using technologies like HTML, CSS, and JavaScript. Working on this project helped me improve my programming skills and gain a deeper understanding of web development.',
      category: 'SCHOOL / COMMISSION'
    },
    cz: {
      title: ['Autofine'],
      subtitle: 'HTML + CSS',
      buttons: [
        {
          type: 'github',
          text: 'Github',
          url: 'https://github.com/Pluhec/AUTOFINE'
        }
      ],
      description: 'Stránky Autofine jsou zaměřené na kalkulace a poskytování informací o autech. Vytvořil jsem tento projekt, protože mě fascinovalo vytváření webových aplikací pomocí technologií jako HTML, CSS a JavaScript. Práce na tomto projektu mi pomohla zlepšit mé programátorské dovednosti a získat hlubší porozumění webovému vývoji.',
      category: 'ŠKOLA / ZAKÁZKA'
    },
    image: '/Assets/Photos/Work/autofine.webp',
    icon: '/Assets/Icons/Work/autofine.png'
  },
}

// Pomocná funkce pro validaci URL adresy
export const isValidUrl = (string) => {
  try {
    new URL(string)
    return true
  } catch (_) {
    return false
  }
}

// Pomocná funkce pro získání dat projektu
export const getProjectData = (slug, language = 'en') => {
  const project = projectsData[slug]
  if (!project) return null
  
  return {
    ...project[language],
    image: project.image,
    images: project.images,
    icon: project.icon
  }
}

// Získání všech projektů pro home page
export const getAllProjects = (language = 'en') => {
  return Object.entries(projectsData).map(([slug, project]) => ({
    slug,
    ...project[language],
    image: project.image,
    images: project.images,
    icon: project.icon
  }))
}