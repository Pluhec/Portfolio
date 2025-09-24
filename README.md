# Pluhacek React Vite Portfolio

Tvé portfolio bylo úspěšně převedeno z HTML/CSS na Vite + React!

## Portfolio Website

Modern personal portfolio website built with Vite and React, featuring a dynamic project system and responsive design.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx       # Smart header component (switches between full/simple)
│   ├── SimpleHeader.jsx # Simple header with only CLOSE button
│   └── Nav.jsx          # Full-screen overlay navigation
├── pages/
│   ├── Home.jsx         # Homepage with project cards
│   ├── About.jsx        # About page
│   ├── Contact.jsx      # Contact page
│   ├── TechStack.jsx    # Technology stack page
│   └── ProjectPage.jsx  # Dynamic project detail page
├── state/
│   ├── DarkModeContext.jsx     # Dark mode state management
│   ├── NavigationContext.jsx  # Navigation overlay state
│   └── HeaderContext.jsx      # Header display mode state
├── data/
│   └── projectsData.js  # Central project data storage
└── style.css           # Original CSS styles (preserved)
```

## Adding New Projects

### Quick Steps:

1. **Add project data** to `/src/data/projectsData.js`
2. **Add assets** to appropriate folders
3. **Test** the new project page

### Detailed Guide:

#### 1. Add Project Data

Edit `/src/data/projectsData.js` and add your new project to the `projects` object:

```javascript
const projects = {
  // Existing projects...
  
  'your-project-slug': {
    title: ['First', 'Second'],  // Two-word title
    subtitle: 'Brief project description',
    image: '/Assets/Photos/Work/your-project.webp',
    buttons: [
      { text: 'Live Demo', url: 'https://your-demo-url.com' },
      { text: 'GitHub', url: 'https://github.com/your-repo' }
    ],
    description: 'Detailed project description explaining what it does, technologies used, and key features.',
    category: 'FOR FUN' // or 'COMMISSION', 'SCHOOL / COMMISSION'
  }
}
```

#### 2. Add Project Assets

Add the following files to your assets folders:

- **Background image**: `/Assets/Photos/Work/your-project-bck.webp` (for homepage card)
- **Detail image**: `/Assets/Photos/Work/your-project.webp` (for project detail page)  
- **Icon**: `/Assets/Icons/Work/your-project.png` (for homepage card)

#### 3. Add Homepage Card

Edit `/src/pages/Home.jsx` and add your project card to the `work-flex` div:

```jsx
<Link to="/project/your-project-slug" className="card" data-aos="zoom-in">
  <img className="zoom" src="/Assets/Photos/Work/your-project-bck.webp" alt="Your Project Name"/>
  <div className="card-content works">
    <div>
      <p>FOR FUN</p> {/* Match category from projectsData.js */}
    </div>
    <img className="card-icon" src="/Assets/Icons/Work/your-project.png" alt=""/>
    <h1 className="card-h1">Your Project Name</h1>
  </div>
</Link>
```

#### 4. Test Your Project

1. Start the development server: `npm run dev`
2. Navigate to your homepage and click the new project card
3. Verify the project detail page loads correctly
4. Test all buttons and links

### Project Data Structure

Each project in `projectsData.js` should follow this structure:

```javascript
'project-slug': {
  title: ['Word1', 'Word2'],           // Array of 2 strings for animated title
  subtitle: 'String',                  // Short description under title
  image: '/path/to/image.webp',        // Main project image
  buttons: [                           // Array of action buttons
    { text: 'Button Text', url: 'https://...' }
  ],
  description: 'String',               // Detailed project description
  category: 'String'                   // Category for homepage card
}
```

### Available Categories:
- `'FOR FUN'` - Personal projects
- `'COMMISSION'` - Client work  
- `'SCHOOL / COMMISSION'` - Academic or mixed projects

## Features

- **Responsive Design**: Works on all device sizes
- **Dark Mode**: Automatic theme switching with user preference
- **Navigation**: Full-screen overlay navigation with animations
- **Smart Header System**: 
  - Full header with logo, language toggle, dark mode, and menu when navigating via navbar
  - Simple header with only CLOSE button when navigating via internal links (e.g., About → Contact, Home → Project details)
- **Project System**: Dynamic project pages with routing
- **Animations**: Scroll-triggered animations using AOS library
- **Performance**: Built with Vite for fast development and production builds

## Technology Stack

- **React 18.2.0** - UI framework
- **Vite 4.5.14** - Build tool and dev server
- **React Router 6.26.0** - Client-side routing
- **AOS 2.3.4** - Scroll animations
- **Custom CSS** - Original styling preserved

## Deployment

The site is configured for automatic GitHub Pages deployment:

### Automatic Deployment (Recommended)
- Push changes to `main` or `master` branch
- GitHub Actions automatically builds and deploys
- Site will be available at `pluhacekjakub.cz`

### Manual Deployment
1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

### Configuration
- **Custom Domain**: `pluhacekjakub.cz` (configured via CNAME)
- **Cloudflare Tunnel**: Configured for custom domain routing
- **Build Output**: `dist/` folder
- **GitHub Actions**: Automatic deployment on push to main/master

## Contributing

When adding new features:

1. Maintain the existing CSS structure
2. Use the established context patterns for state management
3. Follow the component-based architecture
4. Test responsive behavior on all screen sizes
5. Ensure dark mode compatibility

4. **Preview build:**
   ```bash
   npm run preview
   ```

5. **Spuštění testů:**
   ```bash
   npm test
   ```

## Struktura projektu

```
├── src/
│   ├── main.jsx              # Entry point
│   ├── App.jsx               # Hlavní komponenta s routingem
│   ├── style.css             # Tvé původní CSS (beze změny!)
│   ├── components/
│   │   └── Nav.jsx           # Navigační komponenta
│   ├── state/
│   │   └── DarkModeContext.jsx # Context pro dark mode
│   ├── pages/
│   │   ├── Home.jsx          # Domovská stránka
│   │   ├── About.jsx         # O mně
│   │   ├── Contact.jsx       # Kontakt
│   │   └── TechStack.jsx     # Tech stack
│   ├── three/
│   │   └── ShaderCard.jsx    # 3D shader komponenta
│   └── __tests__/
│       ├── app-render.test.jsx
│       └── darkmode-context.test.jsx
└── public/
    └── Assets/               # Tvé původní assety (fonty, obrázky, videa)
```

## Co se změnilo

✅ **Zachované:**
- Tvé původní CSS (1:1 kopie v `src/style.css`)
- Všechny assety (fonty, obrázky, videa)
- Vzhled a funkčnost dark mode
- Layout a design

✅ **Nové:**
- React komponenty namísto HTML souborů
- React Router pro navigaci
- Context API pro dark mode
- Vite pro rychlý development
- TypeScript podpora (volitelná)
- Unit testy
- Hot reload
- Modern build system

## Další kroky

1. **Work odkazy:** Aktualizuj odkazy na projekt stránky v `src/pages/Home.jsx`
2. **CZ/EN switcher:** Implementuj funkčnost v `src/components/Nav.jsx`
3. **Tech stack:** Přidej více karet v `src/pages/TechStack.jsx`
4. **SEO:** Přidej meta tagy do `index.html`
5. **PWA:** Můžeš přidat service worker pro offline funcionalitu

## Pokud máš problém

1. Smaž `node_modules` a `package-lock.json`
2. Spusť `npm install` znovu
3. Ujisti se, že máš Node.js verzi 16+

Úspěšná migrace na moderní React + Vite stack! 🎉