import React from 'react'
import './Technologies.css'

//Le composant
const Technologies = () => {
 return (
    <main>
        <h2 className="langageTitle">Technologies</h2>
        <div className="underlineMenuProjet"></div>
        {/*Première tech */}
        <div  className="containerTechnologie">
            <div className="TextTechnologie">
                <h3 className="TextTittleTechnologie">Framwork React</h3>
                <ul className="textDescTechnologie">
                    <li>React est une bibliothèque Javascript.</li>
                    <li>Elle facilite la création d'interface utilisateur modernes,</li>
                    <li>favorise l'élaboration d'un code lisible</li>
                    <li>accélére le développement et réduire le délai de mise sur le marché,</li>
                    <li>et permet surtout de créer des interfaces et des composants réutilisables.</li>
                </ul>
            </div> 
            <div className="containerImageTechnologie">
                <img className="ImageTechnologie" src="./TechImages/react-native.png" alt="imageReact"/>
            </div>             
        </div>
        {/*Deuxième tech */}
        <div  className="containerTechnologie">
            <div className="TextTechnologie">
                <h3 className="TextTittleTechnologie">Framwork Redux</h3>
                <ul className="textDescTechnologie">
                    <li>Redux est une bibliothèque open-source JavaScript</li>
                    <li>de gestion d'état pour applications web.</li>
                    <li>Elle facilite la gestion d'état de l'application,</li>
                    <li>elle est plus couramment utilisée avec des bibliothèques</li>
                    <li>comme React ou Angular pour la construction d'interfaces utilisateur. </li>
                    <li>Semblable à l'architecture Flux</li>
                </ul>
            </div>
            <div className="containerImageTechnologie">
                <img className="ImageTechnologie" src="./TechImages/redux_illustrator.png" alt="imageReact"/>
            </div>              
        </div>
        {/*Troixième tech */}
        <div  className="containerTechnologie">
            <div className="TextTechnologie">
                <h3 className="TextTittleTechnologie">NodeJs</h3>
                <ul className="textDescTechnologie">
                    <li>Node.js est une plateforme logicielle libre en JavaScript,</li>
                    <li>orientée vers les applications réseau.</li>
                    <br />
                    <li>L'utilisation de Node. js en tant que serveur web </li>
                    <li>permet de traiter un gros volume de requêtes simultanément,</li>
                    <li>de manière efficace.</li>
                    <br/>
                    <li>Cette performance élevée s'explique par une conception asynchrone</li>
                    <li>permettant d'éviter les attentes.</li>
                </ul>
            </div> 
            <div className="containerImageTechnologie">
                <img className="ImageTechnologie" src="./TechImages/node_illustrator.png" alt="imageReact"/>
            </div>             
        </div>

    </main>
 )
}

export default Technologies