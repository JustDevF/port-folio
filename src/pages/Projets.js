import React from 'react'
import './Projets.css'
import projet from './dataProjet'
//La page projet

//Le composant de la page
const Projet = () => {
  return (
      <main>
        <div className="serviceTitle">
          <h2>Mes Projets</h2>
          <div className='underlineService'></div>
        </div>
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
                      <a href={link1}>{icon1}</a>
                      <a href={link2}>{icon2}</a>
                    </div>
                  </div>             
              </div>
              )
        })}
      </main>
  )
}

export default Projet