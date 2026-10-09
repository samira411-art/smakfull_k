import { GiCookingPot } from 'react-icons/gi';
import '../App.css';

function About() {
  return (
    <section className="container">
      <header className="page-header">
        <h1>
          <GiCookingPot className="page-icon" aria-hidden="true" />
          Om Smakfull
        </h1>
      </header>
      
      <article className="about-content">
        <section className="about-section">
          <h2>Vad är Smakfull?</h2>
          <p>
            Smakfull är en receptapp där du kan söka efter recept från hela världen. 
            Appen hämtar alla recept från TheMealDB, ett gratis API med tusentals recept.
          </p>
        </section>

        <section className="about-section">
          <h2>Hur fungerar det?</h2>
          <p>
            På startsidan får du se 9 random recept varje gång du besöker sidan. 
            Om du vill hitta något specifikt kan du använda sökfunktionen. 
            Gillar du ett recept? Klicka på hjärtat för att spara det som favorit!
          </p>
        </section>

        <section className="about-section">
          <h2>Om projektet</h2>
          <p>
            Det här är mitt examinationsprojekt i kursen JavaScript 2. 
            Jag har byggt appen med React och React Router för att skapa en Single Page Application 
            som inte behöver ladda om sidan när man navigerar.
          </p>
          <p>
            Jag valde att göra en receptapp för att jag tycker mat är intressant 
            och det är kul att jobba med snygga matbilder.
          </p>
        </section>

        <section className="about-section">
          <h2>Tekniker</h2>
          <ul className="tech-list">
            <li>React - för användargränssnittet</li>
            <li>React Router - för navigation</li>
            <li>Vite - som byggverktyg</li>
            <li>TheMealDB API - för receptdata</li>
            <li>React Icons - för ikoner</li>
          </ul>
        </section>
      </article>
    </section>
  );
}

export default About;
