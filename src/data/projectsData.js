export const projectsData = {
  'password': {
    title: ['PASSWORD', 'GENERATOR'],
    subtitle: 'Stay safe',
    image: '/Assets/Photos/Work/password-bck.webp',
    icon: '/Assets/Icons/Work/password-generator.png',
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

  'tcz': {
    title: ['TIGER', 'CLUB ZLIN'],
    subtitle: 'Kickbox',
    image: '/Assets/Photos/Work/TGZ-bck.webp',
    icon: '/Assets/Icons/Work/TGZ.png',
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

  'dark-mode': {
    title: ['DARK', 'MODE'],
    subtitle: 'Used on this portfolio',
    image: '/Assets/Photos/Work/dark-bck.webp',
    icon: '/Assets/Icons/Work/dark-mode.png',
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

  'autofine': {
    title: ['AUTOFINE', ''],
    subtitle: 'Car dealer',
    image: '/Assets/Photos/Work/autofine.webp',
    icon: '/Assets/Icons/Work/autofine.png',
    buttons: [
      {
        type: 'github',
        text: 'Github',
        url: 'https://github.com/Pluhec/AUTOFINE'
      }
    ],
    description: 'Autofine pages are focused on calculations and providing information about cars. I created this project because I was fascinated by creating web applications using technologies like HTML, CSS, and JavaScript. Working on this project helped me improve my programming skills and gain a deeper understanding of web development.',
    category: 'SCHOOL / COMMISSION'
  }
}

// Pomocná funkce pro získání dat projektu
export const getProjectData = (slug) => {
  return projectsData[slug] || null
}

// Získání všech projektů pro home page
export const getAllProjects = () => {
  return Object.entries(projectsData).map(([slug, data]) => ({
    slug,
    ...data
  }))
}