import React from 'react'

//Importer des composants
import Presentation from '../components/Presentation'
import Services from '../components/Services'
import Experiences from '../components/Experiences'
import Langages from '../components/Langages/Langages'
import Technologies from '../components/Technologies'
import MenuProjet from '../components/MenuProjet/MenuProjet'

//Page d'accueil 

//Le composant de la page
const Home = () => {
  return (
    <main>
      <Presentation />
      <Services />
      <Experiences />
      <MenuProjet />
      <Langages />
      <Technologies />
    </main>
  );
}

export default Home