import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "react-slick";
import "./App.css";

// import moiImage from "./assets/moi.jpg";
// import htmlLogo from "./assets/logo/Html.png";
// import cssLogo from "./assets/logo/CSS.png";
// import jsLogo from "./assets/logo/JS.png";
// import reactLogo from "./assets/logo/REACT.png";
// import nodejsLogo from "./assets/logo/NODE-JS.png";
// import sqlLogo from "./assets/logo/SQL.png";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [count, setCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    firstname: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://formspree.io/f/mrbzbkqr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        firstname: formData.firstname,
        email: formData.email,
        message: formData.message,
      }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Message envoyé avec succès !");
        } else {
          alert("Une erreur s'est produite. Veuillez réessayer.");
        }
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi du formulaire :", error);
        alert("Une erreur s'est produite. Veuillez réessayer.");
      });
  };

  const presentationRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 1000 },
      {
        opacity: 1,
        y: -100,
        scrollTrigger: {
          trigger: presentationRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <header>
        <nav>
          <button
            className="burger-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776;
          </button>
          <ul className={menuOpen ? "menu-open" : ""}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#aboutMe">About Me</a>
            </li>
            <li>
              <a href="#competences">Mes competences</a>
            </li>
            <li>
              <a href="#projet">Mes projets</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="who">
        <article className="content">
          <h1>Nicolas BIENES</h1>
          <p>Developpeur Fullstack JavaScript</p>
        </article>
      </section>
      <section
        className="presentation white"
        id="aboutMe"
        ref={presentationRef}
      >
        <h2>A propos de moi</h2>
        <img src="/moi.jpg" alt="Photo de moi" />
        <p ref={textRef}>
          Développeur Web Junior JavaScript avec une riche expérience dans le
          domaine de la vente et de la gestion, je suis passionné par la
          création de solutions web innovantes et efficaces. Après une carrière
          réussie en tant que responsable de magasin spécialisé, où j’ai
          développé des compétences solides en gestion d’équipe, en stratégie
          commerciale et en marketing digital, j’ai décidé de me reconvertir
          dans le développement web pour suivre ma passion pour la technologie.
          <br />
          <br />
          Diplômé en développement web full stack en 2024, je maîtrise les
          technologies JavaScript, tant pour le front-end que pour le back-end.
          Mon expérience pratique inclut la gestion de projets web et la
          création d’applications interactives. Doté d’un excellent sens
          relationnel et d’un souci du détail, je suis toujours à l’affût des
          nouvelles tendances et technologies pour améliorer mes compétences et
          offrir le meilleur à mes clients. Mon parcours unique m’a permis
          d’acquérir une compréhension approfondie des besoins des utilisateurs
          et des techniques de résolution de problèmes efficaces, faisant de moi
          un atout précieux pour toute équipe de développement.
          <br />
          <br /> Je suis prêt à relever de nouveaux défis dans le domaine du
          développement web et à contribuer à la réussite de projets ambitieux
          et innovants.
        </p>
      </section>
      <section className="competences" id="competences">
        <article>
          <h2>Mes compétences</h2>
          <div>
            <div className="logoComp">
              <img src="/logo/Html.png" alt="logo HTML" />
              <h3>HTML</h3>
            </div>
            <div className="logoComp">
              <img src="/logo/CSS.png" alt="logo CSS" />
              <h3>CSS</h3>
            </div>
            <div className="logoComp">
              <img src="/logo/JS.png" alt="logo JavaScript" />
              <h3>JavaScript</h3>
            </div>
            <div className="logoComp">
              <img src="/logo/REACT.png" alt="logo React" />
              <h3>React</h3>
            </div>
            <div className="logoComp">
              <img src="/logo/NODE-JS.png" alt="logo NodeJS" />
              <h3>NodeJS</h3>
            </div>
            <div className="logoComp">
              <img src="/logo/SQL.png" alt="logo SQL" />
              <h3>SQL</h3>
            </div>
          </div>
        </article>
      </section>
      <section className="projet white" id="projet">
        <h2>Mes projets</h2>

        <div className="projetBox">
          <Slider {...settings}>
            <article>
              <h3>
                <a href="/">Mon PortFolio</a>
              </h3>
              <img src="/logo/SQL.png" />
              <p>Blabla sur les techno utilisee </p>
            </article>
            <article>
              <h3>Titre du projet 2</h3>
              <img src="/logo/SQL.png" />
            </article>
            <article>
              <h3>Titre du projet 3</h3>
              <img src="/logo/SQL.png" />
            </article>
          </Slider>
        </div>
      </section>
      <footer className="contact white" id="contact">
        <h2>Contact</h2>
        <p>
          Prenons contact ensemble, je vous répondrais dans les plus brefs
          délais.{" "}
        </p>
        <form onSubmit={handleSubmit}>
          <label>
            Nom:
            <input
              type="text"
              name="name"
              placeholder="Votre Nom"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Prénom:
            <input
              type="text"
              name="firstname"
              placeholder="Votre Prénom"
              value={formData.firstname}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="Votre Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              placeholder="Votre Message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </label>
          <button type="submit">Envoyer</button>
        </form>
      </footer>
    </>
  );
}

export default App;
