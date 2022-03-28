import React from 'react';
import { FaGithubSquare } from 'react-icons/fa'
import {FiExternalLink} from 'react-icons/fi'

const projet = [
    {
      id: 1,
      title: 'buttermilk pancakes',
      img: './images/item-1.jpeg',
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
      link:'https://www.twitter.com',
      icon : <FaGithubSquare />,
      langage: "JAVASCRIP"
    },
    {
      id: 2,
      title: 'diner double',
      img: './images/item-2.jpeg',
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
      link:'https://www.twitter.com',
      icon : <FiExternalLink />,
      langage: "JAVASCRIP"
    },
    {
      id: 3,
      title: 'godzilla milkshake',
      img: './images/item-3.jpeg',
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
      link:'https://www.twitter.com',
      icon : <FaGithubSquare />,
      langage: "JAVASCRIP"
    },
    {
      id: 4,
      title: 'country delight',
      img: './images/item-4.jpeg',
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
      link:'https://www.twitter.com',
      icon : <FaGithubSquare />,
      langage: "JAVASCRIP"
    },
    {
      id: 5,
      title: 'egg attack',
      img: './images/item-5.jpeg',
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
      link:'https://www.twitter.com',
      icon: <FaGithubSquare />,
      langage: "JAVASCRIP"
    },
    
  ];

  export const projetBTS2 = [
    {
      id: 1,
      title: 'GSB1 - Gestion des fiches de frais',
      img: './imagesProjet\projet_gsb1_1.png',
      desc: `Septembre 2019 - Octobre 2019 Projet
      Cette réalisation avait pour but de mettre en pratique la nouvelle méthode MVC vue en cours dans une application PHP, HTML, CSS, SQL de gestion de suivi et paiement des fiches de frais des visiteurs médicaux de GSB.
      L'application devait gérer une interface pour deux types d'utilisateurs : visiteurs et comptables.
      Cette application a été réalisée dans les temps sans difficulté majeure mais avec un binôme avec deux rythmes très différents et une implication dans le projet déséquilibrée. `,
      link:'https://github.com/JustDevF/GSB3_Gestion_Conferences',
      icon : <FaGithubSquare />,
      langage: "PHP"
    },
    {
      id: 2,
      title: 'GSB2 - Gestion des locations de matériels',
      img: './imagesProjet\projet_gsb2_1.PNG',
      desc: `Décembre 2019
      Projet réalisé en binôme.
      Cette réalisation avait pour but de mettre en pratique la méthode MVC appliquée dans le dernier projet mais cette fois-ci dans le langage JAVA + SQL, dans une application de gestion des locations de matériels pour les visiteurs médicaux de GSB.
      L'application devait gérer une interface pour trois types d'utilisateurs : responsables, visiteurs et directeur.
      Cette application a été réalisée dans les temps sans difficulté majeure mais avec une charge de travail légèrement déséquilibrée et des résulats de qualité différente (dysfonctionnements). `,
      link:'https://github.com/JustDevF/GSB-3_gestion_materiel_medical',
      icon : <FiExternalLink />,
      langage: "JAVA"
    },
    {
      id: 3,
      title: 'GSB3 - Gestion des conférences',
      img: './imagesProjet\projet_gsb3_1.PNG',
      desc: `Février 2020
      Projet réalisé durant la deuxième année de BTS, en début d'année 2020. Il a été réalisé seule.
      Cette réalisation avait pour but de se familiariser avec le FrameWork CodeIgniter vu en cours dans une application PHP, HTML, CSS, SQL de gestion des conférences de GSB.
      L'application devait gérer une interface pour deux types d'utilisateurs : visiteurs et responsables.
      Cette application a été réalisée largement en avance sans difficulté majeure hormis une prise en main de l'outil progressive.`,
      link:'https://github.com/JustDevF/GSB3_Gestion_Conferences',
      icon : <FaGithubSquare />,
      langage: "PHP CodeIgniter"
    }
    
  ];

export const projetBTS1 = [
    {
      id: 1,
      title: 'Site web marchand',
      img: './imagesProjet\projet_site_marchand_1.PNG',
      desc: `Février 2019 - Septembre 2019
      Projet réalisé durant la première année de BTS, durant le deuxième semestre. Il a été initié en groupe de 3 puis le groupe s'est dissocié pour la partie dynamique du site afin de travailler seule.
      Cette réalisation avait pour but de mettre en pratique les notions de dynamisme apprises en PHP dans la conception d'un site marchand dynamique, à rajouter avec toutes les notions vues précédemment en HTML, CSS, SQL et JavaScript avec la classe PDO dans uns second temps.
      Ce site a été réalisé dans les temps cependant les différences de méthodes de travail et de rapidité ainsi que les différences de niveau ont fait que le travail n'a pas été réparti équitablement du tout pour la première partie du projet.
      J'ai préféré la partie du projet où je travaillais seule car je pouvais avancer à mon rythme.`,
      link:'https://github.com/JustDevF/Mobile_shop',
      icon : <FaGithubSquare />,
      langage: "PHP"
    },
    {
      id: 2,
      title: 'Veille_technologique',
      img: './imagesProjet\projet_veille_1.PNG',
      desc: `Mars 2019
      Cette réalisation avait pour but de mettre en pratique les notions de Java avec l'héritage et l'IHM (Interface Homme/Machine) vues en cours dans une application de gestion.
Cette application a été réalisée dans les temps sans difficulté majeure. La partie avec héritage a été réalisée dans un second temps.`,
      link:'https://github.com/JustDevF/Veille_technologique',
      icon : <FiExternalLink />,
      langage: "HTML"
    }
    
  ];

  export default projet;