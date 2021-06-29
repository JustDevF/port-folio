import React from 'react'
import './Footer.css'
import {FiPhoneCall, FiMapPin} from 'react-icons/fi'
import {IoMailOpenOutline} from 'react-icons/io5'
import { social2 } from './data'

//Le composant 
const Footer = () => {
    
    return (
        <section className="footer">
            {/*Contatc*/}
            <div className="containerFooter">
                <section className="main-content-footer">
                    <ul>
                        <li className="itemFooter">
                            <div className="item-imageFooter">
                                <FiPhoneCall className="react-iconsFooter"/>
                                <h3 className="FooterContact">0751349885 </h3>
                            </div>
                        </li>
                        <li className="itemFooter">
                            <div className="item-imageFooter">
                                <IoMailOpenOutline className="react-iconsFooter"/>
                                <h3 className="FooterContact">justinkatasi.jk@gmail.com </h3>

                            </div>
                        </li>
                        <li className="itemFooter">
                            <div className="item-imageFooter">
                                <FiMapPin className="react-iconsFooter"/>
                                <h3 className="FooterContact">Paris France</h3>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
            {/*Reseaux sociaux */}
            <div  className="containerRs">
                   <div className="RsTexte">Restons connecter sur les réseaux sociaux</div>
                   <div className="RsIcones">
                         {/*Social media dynamique icons */}
                        <ul className="social-iconsFooter">
                            {social2.map((socialIcon) => {
                                const {id, url, icon} = socialIcon;
                                return (
                                    <li key={id}>
                                        <a href={url}>{icon}</a>
                                    </li>
                                );
                            })}
                        </ul>
                   </div> 
            </div>
            <div>
            {/*Footer main */}
            <div  className="containerFooterMain">
                   <div className="footerMainTexte">
                        Full-Stack Dev
                       <div className='underlineItemMain'></div>
                       <p>L'efficacité et l'expérience </p>
                    </div>
                   
                   <div className="footerProd">
                         {/*Social media dynamique icons */}
                        <ul className="footerMainList">
                             <li>
                                <p className="footerMainListTitle">Produits</p>
                                <div className='underlineItemMainPro'></div>
                                <ul className="FooterMainProItem">
                                    <li>
                                        <p>Site Web Full-Stack</p>
                                    </li>
                                    <li>
                                        <p>Site Web Front-End</p>
                                    </li>
                                    <li>
                                        <p>Site Web E-commerce</p>
                                    </li>
                                </ul>                              
                            </li>
                            <li>
                                <p className="footerMainListTitle">Projets</p>
                                <div className='underlineItemMainPro'></div>
                                <ul className="FooterMainProItem">
                                    <li>
                                        <p>Full-Stack</p>
                                    </li>
                                    <li>
                                        <p>Front-End</p>
                                    </li>
                                    <li>
                                        <p>E-Commerce</p>
                                    </li>
                                </ul>  
                            </li>
                            <li>
                                <p className="footerMainListTitle">Langages</p>
                                <div className='underlineItemMainPro'></div>
                                <ul className="FooterMainProItem">
                                    <li>
                                        <p>Javascrip/PHP</p>
                                    </li>
                                    <li>
                                        <p>Javascrip/React</p>
                                    </li>
                                    <li>
                                        <p>PHP/E-Commercejs</p>
                                    </li>
                                </ul>  
                            </li>
                        </ul>
                   </div> 
            </div>             
            </div>
            {/*CopyRight*/}
            <div  className="containerCopyRight">
                   <div className="textCopyRight">©Copyright 2021 Multi-purpose Service | Crée par Justin Katasi</div>
            </div>
        </section>
      )
}
export default Footer