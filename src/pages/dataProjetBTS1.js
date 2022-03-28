import React from 'react';
import { FaGithubSquare } from 'react-icons/fa'
import {FiExternalLink} from 'react-icons/fi'


const projetBTS1 = [
    {
      id: 1,
      title: 'Site web marchand',
      img: './imagesProjet/projet_site_marchand_1.PNG',
      desc: `Février 2019 - Septembre 2019
      Projet réalisé durant la première année de BTS, durant le deuxième semestre. Il a été initié en groupe de 3 puis le groupe s'est dissocié pour la partie dynamique du site afin de travailler seule.
      Cette réalisation avait pour but de mettre en pratique les notions de dynamisme apprises en PHP dans la conception d'un site marchand dynamique, à rajouter avec toutes les notions vues précédemment en HTML, CSS, SQL et JavaScript avec la classe PDO dans uns second temps.`,
      icons : {
        icon1:<FaGithubSquare />,
        icon2: <FiExternalLink />
      },
      links: {
        link1:'https://github.com/JustDevF/Mobile_shop',
        link2: 'https://github.com/JustDevF/Mobile_shop'
      },
      langage:{
        langage1: "PHP", 
        langage2: "MySQL",
        langage3: "CSS"
      },
    },
    {
      id: 2,
      title: 'Veille_technologique',
      img: './imagesProjet/projet_veille_1.PNG',
      desc: `Mars 2019
      Cette réalisation avait pour but de mettre en pratique les notions de Java avec l'héritage et l'IHM (Interface Homme/Machine) vues en cours dans une application de gestion.
Cette application a été réalisée dans les temps sans difficulté majeure. La partie avec héritage a été réalisée dans un second temps.`,
      icons : {
        icon1:<FaGithubSquare />,
        icon2: <FiExternalLink />
      },
      links: {
        link1:'https://github.com/JustDevF/Veille_technologique',
        link2:'https://veilletechnologique.netlify.app/'
      },
      langage:{
        langage1: "JAVASCRIP", 
        langage2: "HTML",
        langage3: "CSS"
      },
    }
    
  ];


  export default projetBTS1;