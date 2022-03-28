import React from 'react';
import { FaGithubSquare } from 'react-icons/fa'
import {FiExternalLink} from 'react-icons/fi'


const projetBTS2 = [
    {
      id: 1,
      title: 'GSB1 - Gestion des fiches de frais',
      img: './imagesProjet/projet_gsb1_1.png',
      desc: `Septembre 2019 - Octobre 2019 Projet
      Cette réalisation avait pour but de mettre en pratique la nouvelle méthode MVC vue en cours dans une application PHP, HTML, CSS, SQL de gestion de suivi et paiement des fiches de frais des visiteurs médicaux de GSB.
      L'application devait gérer une interface pour deux types d'utilisateurs : visiteurs et comptables.
      Cette application a été réalisée dans les temps sans difficulté majeure mais avec un binôme avec deux rythmes très différents et une implication dans le projet déséquilibrée. `,
      link:'https://github.com/JustDevF/GSB3_Gestion_Conferences',
      icons : {
        icon1:<FaGithubSquare />,
        icon2: <FiExternalLink />
      },
      links: {
        link1:'https://www.twitter.com',
        link2: 'https://www.twitter.com'
      },
      langage:{
        langage1: "JAVASCRIP", 
        langage2: "HTML",
        langage3: "CSS"
      },
    },
    {
      id: 2,
      title: 'GSB2 - Gestion des locations de matériels',
      img: './imagesProjet/projet_gsb2_1.PNG',
      desc: `Décembre 2019
      Projet réalisé en binôme.
      Cette réalisation avait pour but de mettre en pratique la méthode MVC appliquée dans le dernier projet mais cette fois-ci dans le langage JAVA + SQL, dans une application de gestion des locations de matériels pour les visiteurs médicaux de GSB.
      L'application devait gérer une interface pour trois types d'utilisateurs : responsables, visiteurs et directeur.
      Cette application a été réalisée dans les temps sans difficulté majeure mais avec une charge de travail légèrement déséquilibrée et des résulats de qualité différente (dysfonctionnements). `,
      link:'https://github.com/JustDevF/GSB-3_gestion_materiel_medical',
      icons : {
        icon1:<FaGithubSquare />,
        icon2: <FiExternalLink />
      },
      links: {
        link1:'https://www.twitter.com',
        link2: 'https://www.twitter.com'
      },
      langage:{
        langage1: "JAVASCRIP", 
        langage2: "HTML",
        langage3: "CSS"
      },
    },
    {
      id: 3,
      title: 'GSB3 - Gestion des conférences',
      img: './imagesProjet/projet_gsb3_1.PNG',
      desc: `Février 2020
      Projet réalisé durant la deuxième année de BTS, en début d'année 2020. Il a été réalisé seule.
      Cette réalisation avait pour but de se familiariser avec le FrameWork CodeIgniter vu en cours dans une application PHP, HTML, CSS, SQL de gestion des conférences de GSB.
      L'application devait gérer une interface pour deux types d'utilisateurs : visiteurs et responsables.
      Cette application a été réalisée largement en avance sans difficulté majeure hormis une prise en main de l'outil progressive.`,
      icons : {
        icon1:<FaGithubSquare />,
        icon2: <FiExternalLink />
      },
      links: {
        link1:'https://www.twitter.com',
        link2: 'https://www.twitter.com'
      },
      langage:{
        langage1: "JAVASCRIP", 
        langage2: "HTML",
        langage3: "CSS"
      },
    }
    
  ];


  export default projetBTS2;