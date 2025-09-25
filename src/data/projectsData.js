export const projectsData = {
  'password': {
    en: {
      title: ['PASSWORD', 'GENERATOR'],
      subtitle: 'Stay safe',
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
      title: ['GENERÁTOR', 'HESEL'],
      subtitle: 'Buď v bezpečí',
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

  'tcz': {
    en: {
      title: ['TIGER', 'CLUB ZLIN'],
      subtitle: 'Kickbox',
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
      title: ['TIGER', 'CLUB ZLÍN'],
      subtitle: 'Kickbox',
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

  'dark-mode': {
    en: {
      title: ['DARK', 'MODE'],
      subtitle: 'Used on this portfolio',
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
      title: ['TMAVÝ', 'REŽIM'],
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
      title: ['AUTOFINE', ''],
      subtitle: 'Car dealer',
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
      title: ['AUTOFINE', ''],
      subtitle: 'Prodejce aut',
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
  }
}

// Pomocná funkce pro získání dat projektu
export const getProjectData = (slug, language = 'en') => {
  const project = projectsData[slug]
  if (!project) return null
  
  return {
    ...project[language],
    image: project.image,
    icon: project.icon
  }
}

// Získání všech projektů pro home page
export const getAllProjects = (language = 'en') => {
  return Object.entries(projectsData).map(([slug, project]) => ({
    slug,
    ...project[language],
    image: project.image,
    icon: project.icon
  }))
}