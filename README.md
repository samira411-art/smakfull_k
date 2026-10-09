
# Smakfull - Min Receptapp

Det här är mitt projekt i JavaScript 2 där jag har byggt en app för att hitta recept.

## Vad projektet gör

Det är en webbapp där man kan söka efter recept, se bilder på mat och spara sina favoriter. Allt hämtas från ett gratis API som heter TheMealDB.

Man kan:
- Se olika recept på startsidan
- Söka efter recept man vill laga
- Spara favoriter genom att klicka på en knapp
- Gå mellan olika sidor utan att allt laddas om

Jag valde att göra en receptapp för att jag tycker mat är intressant och bilderna ser bra ut.

## Hur man startar projektet

**Installera:**
```bash
npm install
```
**Starta:**
```bash
npm run dev
```

**Öppna i webbläsaren:**
```
http://localhost:5173
```

## Krav jag har uppfyllt

### SPA och Routing
Jag har gjort en Single Page Application med React Router. Det betyder att sidan inte laddas om hela tiden när man klickar runt.

- Fyra stycken sidor: startsida, söksida, favoriter och om-sida
- Man använder Link från React Router för att gå mellan sidorna
- Koden finns i App.jsx och Navbar.jsx

### Komponenter och Props
Jag har delat upp koden i flera filer så det inte blir rörigt.

- RecipeCard är en komponent som visar ett recept
- Den tar emot props: recipe (receptdata), isFavorite (om det är sparat) och onToggleFavorite (funktionen för att spara/ta bort)
- Samma komponent används på alla tre sidorna

### State och Interaktivitet
Jag använder useState för att hålla koll på data som ändras.

- I Search.jsx finns ett sökfält där man kan skriva. Texten sparas i en state som heter searchTerm
- I App.jsx sparar jag alla favoriter i en array
- När man klickar på hjärtat läggs receptet till eller tas bort från favoriter

### API och useEffect
Jag hämtar all data från TheMealDB API.

- useEffect används för att hämta recept när sidan öppnas
- fetch hämtar själva datan från internet
- Medans data hämtas visas "Laddar recept..."
- Om något går fel visas ett felmeddelande
- API:et är gratis och man behöver ingen nyckel

Koden finns i Home.jsx och Search.jsx.

## Tekniker

- React för att bygga appen
- React Router för att navigera mellan sidor
- Vite för att köra projektet
- TheMealDB API för receptdata
- CSS för styling


## Funktioner

Startsidan visar 9 random recept. På söksidan kan man skriva vad man vill laga och få upp resultat. Favoritsidan visar alla recept man har sparat. Om-sidan berättar lite om projektet.

## Problem jag löste

Ett problem jag hade var att få favoriter att fungera mellan olika sidor. Först hade jag favorites i varje komponent men då kunde de inte se varandras data.

Lösningen var att flytta favorites till App.jsx istället. Då kan alla sidor använda samma favorites eftersom App.jsx är "föräldern" till alla andra komponenter. Jag skickar ner favorites som props till alla sidor.



