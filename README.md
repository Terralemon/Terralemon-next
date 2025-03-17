# Terralemon Website - Next.js Versie

Dit is een React/Next.js versie van de Terralemon website. De website is opgebouwd met moderne front-end technieken en is voorbereid om te werken met een headless CMS zoals Expression Engine met de Bones add-on.

## Technologieën

- **Next.js** - React framework voor server-side rendering en statische site generatie
- **React** - JavaScript library voor het bouwen van user interfaces
- **Bootstrap 5** - CSS framework voor responsive design
- **Swiper** - Touch slider voor mobiele en desktop websites

## Project structuur

```
/public         - Statische bestanden zoals afbeeldingen, fonts, etc.
  /img          - Afbeeldingen
  /fonts        - Lettertypen
/src            - Broncode
  /components   - React componenten
  /css          - CSS bestanden
  /pages        - Next.js pagina's
```

## Aan de slag

### Installatie

```bash
# Installeer dependencies
npm install
```

### Ontwikkeling

```bash
# Start ontwikkelserver
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser om de website te bekijken.

### Productiebuild

```bash
# Bouw een productieversie
npm run build

# Start de productieserver
npm start
```

## CMS integratie

Deze website is voorbereid om te integreren met Expression Engine als headless CMS met de Bones add-on. De data kan dynamisch worden opgehaald via API calls.

## Contact

Voor vragen of opmerkingen, neem contact op met:

**Terralemon B.V.**  
Oudezijds Achterburgwal 141B  
1012 DG Amsterdam  
+31 20 62 48 300  
fresh@terralemon.nl 