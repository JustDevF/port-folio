import React from 'react'
import './Contact.css'
import { VscVerified } from 'react-icons/vsc'
//La page Contact 

//Le composant de la page
const Contact = () => {
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
                    <h2>Contact</h2>
                    <form className="containerForm-form">
                      <input className="form-control" type="name" placeholder="Nom complet" />
                      <input className="form-control" type="email" placeholder="Adresse Email" />
                      <input className="form-control" type="phone" placeholder="Numéro de Téléphone" />
                      <input className="form-control" type="text" placeholder="Le service souhaité" />
                      <textarea placeholder="Votre message"></textarea>
                      <button type="submit" className="button-submit">Envoyer le message</button>   
                    </form>
            </section>
            </div>             
      </div>
    </main>
  )
}

export default Contact