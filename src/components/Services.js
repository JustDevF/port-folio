import React from 'react'
import { FaCode, FaMobileAlt, FaLaptop} from 'react-icons/fa'
import './Services.css'

//Le composant
const Services = () => {
 return (
     <div>
         <div className="serviceTitle">
            <h2>Services</h2>
            <div className='underlineService'></div>
         </div>
        <section  className="main-content-benefits">
        <div className="container">
            <ul className="clearfix">
            <li className="item">
                <div className="item-image">
                    <FaCode className="FacodeService"/>
                    <h4 className="ServiceTitleCap">Développement Web </h4>
                    <p>Création des applications web du back-End au front-End en choisissant les technologies les plus adaptées en association avec React pour la partie front et Node.js pour le back-End. Ce qui me permet d'offrir une solution full stack basée sur un seul et même langage : javascript </p>
                </div>
            </li>
            <li className="item">
                <div className="item-image">
                    <FaMobileAlt className="FacodeService"/>
                    <h4 className="ServiceTitleCap">Développement Mobile </h4>
                    <p>Création des applications mobiles grâce à React Native de javascript, afin de développer des applications mobiles multiplateformes IOS et Android. ce qui permet de construire une architecture solide et une experiénce utilisateur de haute qualitée </p>
                </div>
            </li>
            <li className="item">
                <div className="item-image">
                     <FaLaptop className="FacodeService"/>
                     <h4 className="ServiceTitleCap">Design UX/UI</h4>
                     <p>Conception des interfaces utilisateur agréables par le biais duquel l'utilisateur entre en contact avec le produit. Objectif est de diminuer au maximum les interrogations que peut avoir un utilisateur lors de sa navigation sur un site web.</p>
                </div>
            </li>
            </ul>
        </div>
        </section>
     </div>
 )
}
export default Services