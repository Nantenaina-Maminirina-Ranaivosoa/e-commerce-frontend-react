# Elegance — Boutique UI (React + Vite)

Projet frontend minimal pour une landing page e-commerce créée avec React, Vite et Framer Motion. Interface responsive composée de sections : navigation, hero, produits, about, contact et footer.

## Démarrage rapide
1. Installer les dépendances :
   npm install
2. Lancer en développement :
   npm run dev
3. Build de production :
   npm run build

## Structure principale
- Point d'entrée : [src/main.jsx](src/main.jsx)  
- Composant racine : [`App`](src/App.jsx)

Sections (composants) :
- Navigation — [`Navigation`](src/components/Navigation/Navigation.jsx)  
- Hero — [`Hero`](src/components/Hero/Hero.jsx)  
- Products — [`Products`](src/components/Products/Products.jsx) et [`ProductCard`](src/components/Products/ProductCard.jsx)  
- About — [`About`](src/components/About/About.jsx)  
- Contact — [`Contact`](src/components/Contact/Contact.jsx)  
- Footer — [`Footer`](src/components/Footer/Footer.jsx)

Fichiers utiles :
- Configuration Vite : [vite.config.js](vite.config.js)  
- Dépendances / scripts : [package.json](package.json)  
- Page HTML : [index.html](index.html)

## Notes
- Animations : Framer Motion (déjà importé dans les composants).  
- Styles : CSS par composant (ex. [src/components/Hero/Hero.css](src/components/Hero/Hero.css)).  
- Accessible : navigation par ancres et scroll smooth.

Licence & contact : adapter selon vos besoins.
  
