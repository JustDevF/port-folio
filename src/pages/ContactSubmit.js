import React  from 'react'
import './Contact.css'
import { VscVerified } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

//La page ContactSubmit

//Le composant de la page
const ContactSubmit = () => {


  return (
    <main>
      <div  className="containerContact">
            <div className="ContainerHeader">
                <h3 className="textTittleContact">100% Satisfaction</h3>
                <h3 className="textTittleContact">Garantie</h3>
                <ul className="textDescContact">
                    <li><VscVerified/> Une proposition</li>
                    <li><VscVerified/> Une discution ensemble</li>
                    <li><VscVerified/> Le lancement du projet</li>
                </ul>
            </div> 
            <div className="containerForm">
                <section>
                    <br/>
                    <br/>
                    <br/>
                    <h2 className="contactSubmitTitile">Merci de m'avoir contacté</h2>
                    <div className="containerForm-form" >
                    <Link to="/" className="btn btn-pramary">Retour à la page d'accueil</Link>
                    </div>
            </section>
            </div>             
      </div>
    </main>
    )
  }

export default ContactSubmit