import React from 'react'
import {competences} from './data'
import './Services.css'

//Le composant
const Services = () => {
 return (
     <div>
         <div className="serviceTitle">
            <h2>Mes compétences</h2>
            <div className='underlineService'></div>
         </div>
        <section  className="main-content-benefits">
        <div className="container">
            <ul className="clearfix">
                {competences.map((competence) => {
                    const {image, title, description, classe, id} = competence;
                    return (
                        <li key={id} className="item">
                            <div className="item-image">
                                {image}
                                <h4 className={classe}>{title}</h4>
                                <p>{description}</p>
                            </div>   
                        </li>  
                        );
                })}
            </ul>
        </div>
        </section>
     </div>
 )
}
export default Services