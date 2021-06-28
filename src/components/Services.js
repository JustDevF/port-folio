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
                    <div className='underlineServiceItem'></div>
                    <p>Je créer des applications web du back-End au front-End en choisissant la technologie la plus adaptée.En association avec React pour la partie front, Node.js pour le back-End ce qui nous permet d'offrir une solution full stack basée sur un seul et même langage : javascript. </p>
                </div>
            </li>
            <li className="item">
                <div className="item-image">
                    <FaMobileAlt className="FacodeService"/>
                    <h4 className="ServiceTitleCap">Développement Mobile </h4>
                    <div className='underlineServiceItem'></div>
                    <p>Grâce à React Native, je développe des applications mobiles multiplateforme iOS et Android. ce qui permet de construire une architecture solide et une experiénce utilisateur de haute qualités </p>
                </div>
            </li>
            <li className="item">
                <div className="item-image">
                     <FaLaptop className="FacodeService"/>
                     <h4 className="ServiceTitleCap">Design UX/UI</h4>
                     <div className='underlineServiceItem'></div>
                     <p>Conception des interfaces utilisateur agréable par le biais duquel l'utilisateur entre en contact avec le produit. Objectif de diminuer au maximum les interrogations que peut avoir un utilisateurs lors de sa navigation sur un site web.  </p>
                </div>
            </li>
            </ul>
        </div>
        </section>
     </div>
 )
}
export default Services