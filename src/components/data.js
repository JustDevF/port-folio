import React from 'react';

import {FaLinkedin, FaYoutube, FaGithubSquare, FaLaptop, FaRegUser, FaClipboardCheck, FaRegStickyNote, FaRegSun, FaFirefoxBrowser} from 'react-icons/fa';

export const links = [
  {
    id: 1,
    url: '/',
    text: 'Accueil',
  },
  {
    id: 2,
    url: '/projets',
    text: 'Projects',
  },
];



export const social = [
  {
    id: 1,
    url: 'https://github.com/JustDevF/',
    icon: <FaGithubSquare />,
  },
  {
    id: 2,
    url: 'https://www.linkedin.com/in/justin-katasi-7284bb221/',
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: 'https://www.youtube.com/channel/UC5L5nZbzbIorA3ZiRL4tBWg',
    icon: <FaYoutube />,
  },

  
  
];

export const social2 = [
  {
    id: 1,
    url: 'https://github.com/JustDevF/',
    icon: <FaGithubSquare />,
  },
  {
    id: 2,
    url: 'https://www.linkedin.com/in/justin-katasi-7284bb221/',
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: 'https://www.youtube.com/channel/UC5L5nZbzbIorA3ZiRL4tBWg',
    icon: <FaYoutube />,
  },
];

export const competences = [
  {
    id : 1,
    image : <FaRegUser className="FacodeService"/>,
    title : "Mettre à disposition des utilisateurs un service informatique",
    description : 
          <ul> 
            <li>Accompagner les utilisateurs dans la mise en place d’un service.</li>
            <li>Conceptualisation d’une solution digitale sur la base des besoins exprimés par un client, dans le respect du droit en vigueur.</li>
            <li>Définition des options techniques principales de la solution digitale en fonction des attentes du client</li>
            <li>Intégrer les contraintes de coût, de qualité et de délai.</li>
          </ul>,
    classe: "ServiceTitleCap"
  },
  {
    id : 2,
    image : <FaClipboardCheck className="FacodeService"/>,
    title : "Développer une solution digitale",
    description : 
          <ul> 
            <li> Conception d’une stratégie de développement pour une interface web ou mobile propice au travail collaboratif d’une équipe de développeurs et respectant les éventuelles contraintes multiplateformes.</li>
            <li>Rédaction des lignes de code dans le langage informatique le plus adapté.</li>
            <li>Réalisation des tests d’usage et de fonctionnement d’une solution digitale afin de pouvoir apporter les corrections nécessaires à son fonctionnement optimal.</li>
          </ul>,
    classe: "ServiceTitleCap"
  },
  {
    id : 3,
    image :  <FaLaptop className="FacodeService"/>,
    title : "Gérer le patrimoine informatique",
    description : 
          <ul> 
            <li>Recenser et identifier les ressources numériques.</li>
            <li>Exploiter des référentiels, normes et standards adoptés par le prestataire informatique</li>
            <li>Mettre en place et vérifier les niveaux d’habilitation associés à un service.</li>
            <li>Vérifier les conditions de la continuité d’un service informatique.</li>
            <li>Gérer des sauvegardes.</li>
            <li>Vérifier le respect des règles d’utilisation des ressources numériques</li>
          </ul>,
    classe: "ServiceTitleCap"
  },
  //a compléter
  {
    id : 4,
    image : <FaRegStickyNote className="FacodeService"/>,
    title : "Travailler en mode projet",
    description : 
          <ul> 
            <li>Analyser les objectifs et les modalités d’organisation d’un projet.</li>
            <li>Planifier les activités</li>
            <li>Évaluer les indicateurs de suivi d’un projet et analyser les écarts.</li>
          </ul>,
    classe : "ServiceTitleCap"
  },
  {
    id : 5,
    image : <FaRegSun className="FacodeService"/>,
    title : "Répondre aux incidents et aux demandes d’assistance et d’évolution",
    description : 
          <ul> 
            <li>Collecter, suivre et orienter des demandes .</li>
            <li>Traiter des demandes concernant les services réseau et système, applicatifs</li>
            <li>Traiter des demandes concernant les applications.</li>
          </ul>,
    classe: "ServiceTitleCap"
  },
  {
    id :6,
    image :  <FaFirefoxBrowser className="FacodeService"/>,
    title : "Développer la présence en ligne de l’organisation",
    description : 
          <ul> 
            <li>Participer à la valorisation de l’image de l’organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques.</li>
            <li>Référencer les services en ligne de l’organisation et mesurer leur visibilité.</li>
            <li>Participer à l’évolution d’un site Web exploitant les données de l’organisation.</li>
          </ul>,
    classe: "ServiceTitleCap"
  },
    
];

export const services = [
  {
    id: 1,
    image: './Images/img_fullstack.png',
    name: 'Developpeur Web Full Stack',
    title: 'Développeur polyvalent',
    quote:
      'Développer des applications Web à pile complète qui traitent, analysent et rendent les données visuellement. Assurer la liaison avec les développeurs back-end, les développeurs front-end, les testeurs d"assurance qualité et le CTO selon les besoins.',
  },
  {
    id: 2,
    image:'./Images/img_frontend_reactjs.png',
    name: 'Développeur Front-end',
    title: 'Développement coté utilisateur',
    quote: 'Le développement web frontal correspond aux productions HTML, CSS et JavaScript d’une page internet ou d’une application qu’un utilisateur peut voir et avec lesquelles il peut interagir directement.',
  },
  {
    id: 3,
    image:'./Images/img_backend.png',
    name: 'Développeur Back-end',
    title: 'Développement coté serveur',
    quote:'Nous assurons l"Entretien, l"installation et les dépannages des vos installations, meubles et votre maison tout en vous assurant un service de qualité dans le respect des règles de sécurité et à la règlementation qui s"y rapport',
  },
  {
    id: 4,
    image:'./Images/img_code.png',
    name: 'Développer mobile',
    title: 'Développment des applications natives pour mobile',
    quote: 'La conception, la réalisation technique et le développement d"applications pour mobiles, L"utilisation de Javascript, Java, Python ave le framework React Native, Flutter pour développer des applications mobiles hybrides et multiplateforme.',
  },
  {
    id: 5,
    image:'./Images/img_ux_ui.png',
    name: 'Concepteur UI/UX',
    title: 'Design Web',
    quote:'La création des interfaces utilisateur modernes et progressives. Faire une traduction artistique globale, et de mettre en page les contenus à destination d’écrans (web, mobiles, tablettes) en lien avec le contenu du site. ainsi la conception de l’identité visuelle d’un site.',
  }
  
];
