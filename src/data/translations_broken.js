export const translations = {
  en: {
    // Navig      form: {
        name: 'NAME',
      // Common
    common: {
      footer: 'BUILT AND DESIGNED BY JAKUB PLUHACEK',
      backToTop: 'BACK TO TOP',
      github: 'Github',
      slack: 'Slack',
      discord: 'Discord'
    }ail: 'EMAIL', 
        message: 'MESSAGE',
        send: 'Send'
      },    nav: {
      work: 'WORK',
      about: 'ABOUT', 
      stack: 'STACK',
      contact: 'CONTACT',
      close: 'CLOSE',
      menu: 'MENU'
    },
    
    // Home page
    home: {
      title: ['SOFTWARE', 'DEVELOPER'],
      subtitle: 'DEVELOPER - PROGRAMMER'
    },

    // About page  
    about: {
      title: ['JAKUB', 'PLUHACEK'],
      quote1: 'IF AT FIRST YOU DON\'T SUCCEED; CALL IT VERSION 1.0',
      quote2: 'CODE IS LIKE HUMOR. YOU HAVE TO EXPLAIN IT, IT\'S BAD',
      description: 'My name is Jakub Pluháček. I was born in Zlín and I\'m studying game development and multimedia applications at Creative Hill College in Zlín. Currently I\'m most interested in web development and home automation.',
      servicesTitle: 'SERVICES',
      services: {
        print3d: '3D PRINTING',
        photography: 'PHOTOGRAPHY', 
        webdev: 'WEB DEVELOPMENT',
        hardware: 'HARDWARE'
      },
      colophonTitle: 'Colophon',
      colophon: {
        stockCategory: 'STOCK',
        unsplash: 'Images by Unsplash',
        pexels: 'Videos by Pexels',
        iconsCategory: 'ICONS',
        flaticon: 'Icons by Flaticon',
        designCategory: 'DESIGN',
        paul: 'Design inspired by Paul'
      },
      contactTitle: 'CONTACT',
      contactHeadline: 'HAVE A COOL PROJECT?',
      contactButton: 'Let\'s Talk'
    },

    // Contact page
    contact: {
      title: 'Contact',
      description: 'Right now im open to new projects, cooperations or contracts. You can contact me down there, I\'ll respond as soon as possible.',
      form: {
        name: 'NAME',
        email: 'EMAIL', 
        message: 'MESSAGE',
        submit: 'SEND'
      },
      localTime: 'LOCAL TIME',
      location: '[ ZLIN, CZ ]',
      timeLoading: 'Loading...'
    },

    // Tech Stack page
    techStack: {
      subtitle: 'TOOLS I USE EVERYDAY',
      title: ['TECH', 'STACK'],
      categories: {
        hardware: 'HARDWARE',
        websiteBuilder: 'WEBSITE BUILDER',
        storage: 'FILE STORAGE',
        uiDesign: 'UI DESIGN',
        communication: 'COMMUNICATION',
        documents: 'DOCUMENTS',
        editor: 'EDITOR',
        music: 'MUSIC'
      }
    },

    // Project categories
    categories: {
      forFun: 'FOR FUN',
      commission: 'COMMISSION',
      schoolCommission: 'SCHOOL / COMMISSION'
    },

    // Common
    common: {
      builtBy: 'DESIGNED AND BUILT BY JAKUB PLUHACEK',
      backToTop: 'BACK TO TOP',
      github: 'Github',
      slack: 'Slack',
      discord: 'Discord'
    }
  },

  cz: {
    // Navigation
    nav: {
      work: 'PRÁCE',
      about: 'O MNĚ',
      stack: 'ZNALOST',
      contact: 'KONTAKT',
      close: 'ZAVŘÍT',
      menu: 'MENU'
    },
    
    // Home page
    home: {
      title: ['VÝVOJÁŘ', 'PROGRAMÁTOR'],
      subtitle: 'VÝVOJÁŘ - PROGRAMÁTOR'
    },

    // About page
    about: {
      title: ['JAKUB', 'PLUHÁČEK'],
      quote1: 'POKUD SE TI NEDAŘÍ NAPOPRVÉ, NAZVI TO VERZI 1.0.',
      quote2: 'KÓD JE JAKO HUMOR. MUSÍŠ HO VYSVĚTLIT, JE-LI ŠPATNÝ.',
      description: 'Jmenuji se Jakub Pluháček. Narodil jsem se ve Zlíně a tady momentálně studuji střední odbornou školu Creative Hill College, přesněji studuji obor vývoj počítačových her a multimediálních aplikací. Zatím se nejvíce zajímám o tvoření webových stránek nebo webových aplikací a dále pak o automatizaci domácnosti.',
      servicesTitle: 'SLUŽBY',
      services: {
        print3d: '3D TISK',
        photography: 'FOTOGRAFIE',
        webdev: 'VÝVOJ WEBOVÝCH STRÁNEK', 
        hardware: 'HARDWARE'
      },
      colophonTitle: 'Titráž',
      colophon: {
        stockCategory: 'OBSAH',
        unsplash: 'Obrázky od Unsplash',
        pexels: 'Videa od Pexels',
        iconsCategory: 'IKONY',
        flaticon: 'Ikony od Flaticon',
        designCategory: 'DESIGN',
        paul: 'Design inspirován Paulem'
      },
      contactTitle: 'KONTAKT',
      contactHeadline: 'MÁŠ FAJN NÁPAD?',
      contactButton: 'Pokecejme!'
    },

    // Contact page
    contact: {
      title: 'Kontakt',
      description: 'Momentálně jsem otevřený novým projektům, spolupracím nebo zakázkám. Můžete mě kontaktovat níže, odpovím co nejdříve to půjde.',
      form: {
        name: 'JMÉNO',
        email: 'EMAIL',
        message: 'ZPRÁVA', 
        send: 'ODESLAT'
      },
      localTime: 'LOKÁLNÍ ČAS',
      location: '[ ZLÍN, CZ ]',
      timeLoading: 'Načítání...'
    },

    // Tech Stack page
    techStack: {
      subtitle: 'NÁSTROJE KAŽDODENNÍ POTŘEBY',
      title: ['ZNALOST', 'TECHNOLOGIE'],
      categories: {
        hardware: 'HARDWARE',
        websiteBuilder: 'WEBSITE BUILDER',
        storage: 'ULOŽIŠTĚ',
        uiDesign: 'UI DESIGN',
        communication: 'KOMUNIKACE',
        documents: 'DOKUMENTY',
        editor: 'EDITOR',
        music: 'HUDBA'
      }
    },

    // Project categories
    categories: {
      forFun: 'JEN TAK',
      commission: 'ZAKÁZKA',
      schoolCommission: 'ŠKOLA / ZAKÁZKA'
    },

    // Common
    common: {
      footer: 'NAVRŽENO A VYTVOŘENO JAKUBEM PLUHÁČKEM',
      backToTop: 'ZPÁTKY NAHORU',
      github: 'Github',
      slack: 'Slack', 
      discord: 'Discord'
    }
  }
}

// Helper function to get translation
export const getTranslation = (language, key) => {
  const keys = key.split('.')
  let result = translations[language]
  
  for (const k of keys) {
    if (result && typeof result === 'object') {
      result = result[k]
    } else {
      return key // Return key if translation not found
    }
  }
  
  return result || key
}

// Hook for easy translations
export const useTranslation = (language) => {
  return (key) => getTranslation(language, key)
}