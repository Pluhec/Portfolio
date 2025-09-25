export const translations = {
  en: {
    // Navigation
    nav: {
      work: 'WORK',
      about: 'ABOUT', 
      stack: 'STACK',
      contact: 'CONTACT',
      close: 'CLOSE',
      menu: 'MENU'
    },
    
    // Home page
    home: {
      title: ['JAKUB', 'PLUHACEK'],
      subtitle: 'DEVELOPER - PROGRAMMER'
    },

    // About page  
    about: {
      title: ['JAKUB', 'PLUHACEK'],
      quote1: 'IF AT FIRST YOU DON\'T SUCCEED, CALL IT VERSION 1.0.',
      quote2: 'CODE IS LIKE HUMOR. WHEN YOU HAVE TO EXPLAIN IT, IT\'S BAD.',
      description: 'My name is Jakub Pluhacek. I was born in Zlín and I am currently studying at Creative Hill College, specifically the field of computer game development and multimedia applications. So far, I am most interested in creating websites or web applications and also home automation.',
      servicesTitle: 'SERVICES',
      services: {
        print3d: '3D PRINTING',
        photography: 'PHOTOGRAPHY', 
        webdev: 'WEB DEVELOPMENT',
        hardware: 'HARDWARE'
      },
      colophonTitle: 'Colophon',
      colophon: {
        content: 'CONTENT',
        unsplash: 'Images from Unsplash',
        pexels: 'Videos from Pexels',
        icons: 'ICONS',
        flaticon: 'Icons from Flaticon',
        design: 'DESIGN',
        paul: 'Design inspired by Paul'
      },
      contactTitle: 'CONTACT',
      contactHeadline: 'GOT A COOL IDEA?',
      contactButton: 'Let\'s chat!'
    },

    // Contact page
    contact: {
      title: 'Contact',
      description: 'I\'m currently open to new projects, collaborations, or commissions. You can contact me below, I\'ll respond as soon as possible.',
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
      subtitle: 'DAILY NECESSITY TOOLS',
      title: ['KNOWLEDGE', 'TECHNOLOGY'],
      categories: {
        hardware: 'HARDWARE',
        websiteBuilder: 'WEBSITE BUILDER',
        storage: 'STORAGE',
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
      title: ['JAKUB', 'PLUHÁČEK'],
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
        content: 'OBSAH',
        unsplash: 'Obrázky od Unsplash',
        pexels: 'Videa od Pexels',
        icons: 'IKONY',
        flaticon: 'Ikony od Flaticon',
        design: 'DESIGN',
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
        submit: 'ODESLAT'
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
      builtBy: 'NAVRŽENO A VYTVOŘENO JAKUBEM PLUHÁČKEM',
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