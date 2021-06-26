import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './ImageWebDev.svg'
import './Navbar.css'

const Navbar = () => {
     //Etat init
     const [showLinks, setShowLinks] = useState(false);

     //useRef pour hight dynamique 
     const linksContainerRef = useRef(null);
     const linksRef = useRef(null);

     //Height dynamique
     //permet d'ajouter dynamiquement le link 
     useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        }
        else {
            linksContainerRef.current.style.height = '0px';
        }
     },[showLinks]);

  return (
      <nav className="navbar">
          <div className="nav-center">
          {/*Nav Header */}
          <div className="nav-header">
            <img src={logo}  className="logo" alt="logo"/>
             {/*Gest d'event onClick toggle state */}
            <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
                <FaBars />
            </button>
          </div>
          
          {/*Les nav dynamique*/}
          <div className={`${showLinks? 'show-container' :"links-container" }`} ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
                {links.map((link) => {
                const {id, url, text} = link;
                return (
                    <li key={id}>
                        <a href={url}>
                            {text}
                        </a>

                    </li>  
                    );
                })}
            </ul>
          </div>
        
          
          {/*Social media dynamique icons */}
          <ul className="social-icons">
              {social.map((socialIcon) => {
                  const {id, url, icon} = socialIcon;
                  return (
                      <li key={id}>
                          <a href={url}>{icon}</a>
                      </li>
                  );
              })}
          </ul>
          <div className="NavbarContact">
              
          </div>
      </div>
      </nav>
      
  );
};

export default Navbar