import React from 'react'
import './Footer.css'
import {FiMapPin} from 'react-icons/fi'
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
                                <IoMailOpenOutline className="react-iconsFooter"/>
                                <h3 className="FooterContact">justinkatasi.jk@gmail.com </h3>

                            </div>
                        </li>
                        <li className="itemFooter">
                            <div className="item-imageFooter">
                                <h3 className="FooterContact"> </h3>

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
                       <div className='underlineItemMain'></div>
                       <p>L'efficacité et l'expérience </p>
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