import React from 'react'
import './Projets.css'
import projet, {projetBTS2, projetBTS1} from './dataProjet'

//La page projet

//Le composant de la page
const Projet = () => {
  return (
      <main>
        <div className="serviceTitle">
          <h2>Projets</h2>
          <p>Projets réalisée durant la première et la deuxième année de BTS SIO SLAM</p>
          <div className='underlineService'></div>
          <header className='major'>
                <h3 id="formation">Deuxième année</h3>
          </header>
          <p>L'entreprise GSB est un laboratoire pharmaceutique issu d'une fusion entre Américain Galaxy (Spécialisé dans le secteur des maladies virales et les hépatites) et le conglomérat européen Swiss Bourdin(Travaillant sur des médicaments plus conventionnels) ayant eut lieu en 2009. Son siège administratif est à Paris et son siège social se situe à Philadelphie en Pennsylvanie aux Etats-Unis. Cette fusion a pour but principal d’optimiser l’activité du groupe dans le domaine médical.</p>
        </div>
        {/*Projet BTS SIO2 */}
        {/*Récup de données */}
        {projetBTS2.map((projetItem) => {
              const {id, title, img, desc, icons, links,  langage} = projetItem;
              const {icon1, icon2} = icons
              const {link1, link2} = links
              const {langage1, langage2, langage3} = langage
              console.log(langage1)
              return (
                <div  key={id} className="containerProjet">
                {/*ImageProjet */}
                  <div className="containerImageProjet">
                    <img src={img} alt={title}/>
                  </div> 
                  {/*Desc Projet */}
                  <div className="containerDescProjet">
                    <h4 className="headDescProjet">{title}</h4>
                    <div className="descProjet">
                      <p>{desc}</p>
                    </div>
                    <div className="LangageProjet">
                      <button className="btnProjet">{langage1}</button>
                      <button className="btnProjet">{langage2}</button>
                      <button className="btnProjet">{langage3}</button>
                    </div>
                    <div className="iconesProjet">
                      <a href={link1} target="_blank" rel="noreferrer">{icon1} Lien du projet</a>
                      <a href={link2} target="_blank" rel="noreferrer">{icon2}</a>
                    </div>
                  </div>             
              </div>
              )
        })}
        {/***********/}
        <header className='major'>
                <h3 id="formation">Première année</h3>
          </header>
        {/*Projet BTS SIO1 */}

        {projetBTS1.map((projetItem) => {
              const {id, title, img, desc, icons, links,  langage} = projetItem;
              const {icon1, icon2} = icons
              const {link1, link2} = links
              const {langage1, langage2, langage3} = langage
              console.log(langage1)
              return (
                <div  key={id} className="containerProjet">
                {/*ImageProjet */}
                  <div className="containerImageProjet">
                    <img src={img} alt={title}/>
                  </div> 
                  {/*Desc Projet */}
                  <div className="containerDescProjet">
                    <h4 className="headDescProjet">{title}</h4>
                    <div className="descProjet">
                      <p>{desc}</p>
                    </div>
                    <div className="LangageProjet">
                      <button className="btnProjet">{langage1}</button>
                      <button className="btnProjet">{langage2}</button>
                      <button className="btnProjet">{langage3}</button>
                    </div>
                    <div className="iconesProjet">
                      <a href={link1} target="_blank" rel="noreferrer">{icon1} Lien du projet</a>
                      <a href={link2} target="_blank" rel="noreferrer">{icon2}</a>
                    </div>
                  </div>             
              </div>
              )
        })}
        
        {/***********/}
        <header className='major'>
                <h3 id="formation">Projets personnels</h3>
          </header>
        {/*Projet BTS SIO1 */}

        {/*Récup de données */}
        {projet.map((projetItem) => {
              const {id, title, img, desc, icons, links,  langage} = projetItem;
              const {icon1, icon2} = icons
              const {link1, link2} = links
              const {langage1, langage2, langage3} = langage
              console.log(langage1)
              return (
                <div  key={id} className="containerProjet">
                {/*ImageProjet */}
                  <div className="containerImageProjet">
                    <img src={img} alt={title}/>
                  </div> 
                  {/*Desc Projet */}
                  <div className="containerDescProjet">
                    <h4 className="headDescProjet">{title}</h4>
                    <div className="descProjet">
                      <p>{desc}</p>
                    </div>
                    <div className="LangageProjet">
                      <button className="btnProjet">{langage1}</button>
                      <button className="btnProjet">{langage2}</button>
                      <button className="btnProjet">{langage3}</button>
                    </div>
                    <div className="iconesProjet">
                      <a href={link1} target="_blank" rel="noreferrer">{icon1} Lien du projet</a>
                      <a href={link2} target="_blank" rel="noreferrer">{icon2}</a>
                    </div>
                  </div>             
              </div>
              )
        })}
      </main>
  )
}

export default Projet