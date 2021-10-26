import React from 'react';
import { FaGithubSquare } from 'react-icons/fa'
import {FiExternalLink} from 'react-icons/fi'

const projet = [
    {
      id: 1,
      title: 'REACT-REDUX-JSON',
      img: './imagesProjet/react-redux.jpg',
      desc: `Application react redux connectée à une api de cocktails. Illustraction de l'utilisation de format redux et de json `,
      icons : {
        icon1:<FaGithubSquare />,
        icon2: <FiExternalLink />
      },
      links: {
        link1:'https://github.com/JustDevF/recettes',
        link2: 'https://application-recettes-react-redux.netlify.app'
      },
      langage:{
        langage1: "JAVASCRIP", 
        langage2: "HTML",
        langage3: "CSS"
      },
    },
    {
      id: 2,
      title: 'REACT - AJX - JSON API RESTAURANT',
      img: './imagesProjet/image_api_cocktail.png',
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
      icons : {
        icon1:<FaGithubSquare />,
        icon2: <FiExternalLink />
      },
      links: {
        link1:'https://github.com/JustDevF/react_api_restaurant.git',
        link2: 'https://react-api-restaurant.netlify.app'
      },
      langage:{
        langage1: "JAVASCRIP", 
        langage2: "HTML",
        langage3: "CSS"
      },
    },
    {
      id: 3,
      title: 'SITE E-COMMERCE PHP',
      img: './imagesProjet/site_e-commerce.png',
      desc: `Le site e-commerce ou commerce électronique correspond à la vente en ligne de biens ou de services au travers de sites web marchands.`,
      icons : {
        icon1:<FaGithubSquare />,
        icon2: <FiExternalLink />
      },
      links: {
        link1:'https://github.com/JustDevF/Mobile_shop',
        link2: './images/site_e-commerce-php.pdf'
      },
      langage:{
        langage1: "PHP", 
        langage2: "HTML - JAVASCRIP",
        langage3: "CSS"
      },
    },
    {
      id: 4,
      title: 'SITE STATIQUE HTML BOOSTRAP',
      img: './imagesProjet/bootstrap.jpg',
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
      icons : {
        icon1:<FaGithubSquare />,
        icon2: <FiExternalLink />
      },
      links: {
        link1:'https://github.com/JustDevF/site-hubs',
        link2: 'https://site-statique-hubs.netlify.app/'
      },
      langage:{
        langage1: "JAVASCRIP", 
        langage2: "HTML",
        langage3: ""
      },
    },
    {
      id: 5,
      title: 'VEILLE TECHNOLOGIQUE',
      img: './imagesProjet/photo-surveillance-température.jpg',
      desc: `La veille technologique ou veille scientifique et technique consiste à s'informer de façon systématique sur les techniques les plus récentes`,
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
    },
    {
      id: 6,
      title: 'REACT-NATIVE',
      img: './imagesProjet/react-native.jpg',
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
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
    
    
    
  ];

  export default projet;