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
        <section role="region" class="main-content-benefits">
        <div class="container">
            <ul class="clearfix">
            <li class="item">
                <div class="item-image">
                    <FaCode className="FacodeService"/>
                    <h4>Developpement Web </h4>
                    <div className='underlineServiceItem'></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at nunc id ligula sollicitudin finibus eget id leo.</p>
                </div>
            </li>
            <li class="item">
                <div class="item-image">
                    <FaMobileAlt className="FacodeService"/>
                    <h4>Developpement Mobile </h4>
                    <div className='underlineServiceItem'></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at nunc id ligula sollicitudin finibus eget id leo.</p>
                </div>
            </li>
            <li class="item">
                <div class="item-image">
                     <FaLaptop className="FacodeService"/>
                     <h4>Developpement Logiciel</h4>
                     <div className='underlineServiceItem'></div>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at nunc id ligula sollicitudin finibus eget id leo.</p>
                </div>
            </li>
            </ul>
        </div>
        </section>
     </div>
 )
}
export default Services