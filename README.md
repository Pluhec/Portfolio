# Pluhacek React Vite Portfolio

Tvé portfolio bylo úspěšně převedeno z HTML/CSS na Vite + React!

## Jak spustit projekt

1. **Instalace závislostí:**
   ```bash
   npm install
   ```

2. **Spuštění vývojového serveru:**
   ```bash
   npm run dev
   ```
   Server poběží na `http://localhost:5173/`

3. **Build pro produkci:**
   ```bash
   npm run build
   ```

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