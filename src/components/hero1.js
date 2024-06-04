import React from "react";
import download1 from "../assets/images/download1.jpg";
import OIP from "../assets/images/OIP.jpg";
import OIP1 from "../assets/images/Futuristic-Software-Developments-scaled.jpg";

const Hero1 = () => {
  return (
    <div className="hero-container">
      <div className="hero-text1">
        Laissez-moi réaliser vos rêves en créant votre application web!
      </div>
      <div className="hero-text2">
        Mes compétences web peuvent vous aider à créer une application web
        adaptée aux besoins de votre entreprise. Je peux concevoir des
        applications web et des sites web attrayants et conviviaux qui
        optimisent l'expérience utilisateur. Je fournis des solutions de haute
        qualité pour des résultats commerciaux optimaux.
      </div>
      <div className="items-container">
        <div className="item">
          <img
            src={OIP1}
            alt="Développement d'Applications Web Personnalisées"
            className="item-image"
          />
          <h3>Développement d'Applications Web Personnalisées.</h3>
          <p>
            Je possède une vaste expérience dans le développement de diverses
            applications web, allant des applications web simples aux solutions
            d'entreprise complexes. Je peux personnaliser vos applications
            existantes pour la planification des ressources d'entreprise (ERP),
            le commerce électronique, les jeux interactifs, la formation en
            ligne et les cours, la gestion de la relation client (CRM) et bien
            plus encore.
          </p>
        </div>
        <div className="item">
          <img
            src={OIP}
            alt="Systèmes de Gestion de Contenu"
            className="item-image"
          />
          <h3>Systèmes de Gestion de Contenu.</h3>
          <p>
            Je peux vous aider à intégrer des capacités de CMS dans votre site
            web ou application existant, ou développer un système de gestion de
            contenu (CMS) personnalisé qui facilite la gestion du contenu de
            votre site web. Mes solutions CMS sont conviviales, fiables et
            flexibles, vous permettant d'ajouter et de modifier votre contenu
            web sans avoir besoin de réécrire ou de mettre à jour votre code.
          </p>
        </div>
        <div className="item">
          <img
            src={download1}
            alt="Pas de Solutions Prêtes à l'Emploi"
            className="item-image"
          />
          <h3>Une solution adaptée à vos besoins.</h3>
          <p>
            Je suis un expert en développement de sites web qui construit,
            utilise, intègre et personnalise les outils, technologies et cadres
            appropriés pour atteindre les objectifs que vous aurez définis.
          </p>
        </div>
      </div>
      <a href="/contact" className="cta-button">
        Obtenez une solution web adapté!
      </a>
    </div>
  );
};

export default Hero1;
