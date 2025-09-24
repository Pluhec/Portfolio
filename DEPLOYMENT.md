# GitHub Pages Deployment - Návod

## První nastavení

### 1. Push kódu na GitHub
```bash
git add .
git commit -m "Add GitHub Pages deployment configuration"
git push origin main
```

### 2. Aktivace GitHub Pages v repozitáři
1. Jdi na GitHub.com → tvůj Portfolio repozitář
2. Settings → Pages (v levém menu)
3. Source: vybrat **"GitHub Actions"**

### 3. Automatický deployment
- Po push na `main` branch se automaticky spustí GitHub Actions
- Build a deployment proběhne automaticky
- Stránka bude dostupná na `pluhacekjakub.cz`

## Ruční deployment (záložní možnost)
```bash
npm run deploy
```

## Ověření
- Zkontroluj v GitHub → Actions tab zda build proběhl úspěšně
- Stránka by měla být dostupná na `pluhacekjakub.cz` 
- GitHub Pages URL: `https://pluhec.github.io/Portfolio`

## Troubleshooting
- Pokud custom domain nefunguje, zkontroluj Cloudflare tunnel nastavení
- CNAME soubor musí obsahovat pouze: `pluhacekjakub.cz`
- GitHub Pages může trvat až 10 minut než se changes projeví

## Automatické aktualizace
Po každém push na main branch:
1. GitHub Actions spustí build
2. Vytvoří production verzi v `dist/`
3. Automaticky deployuje na GitHub Pages
4. Aktualizuje stránku na `pluhacekjakub.cz`