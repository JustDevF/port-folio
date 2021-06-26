import React, { useState } from 'react';
import data from './data';
import SingleLangage from './Langage';
import'./Langages.css'

//Composant 
const Langages = () =>{
  const [langage, setLangage] = useState(data);

  return (
    <div>
        <h2 className="langageTitle">Langages Informatique</h2>
        <div class="underlineMenuProjet"></div>
        <div className="mainLangage">
          <div className='containerLangage'>
            <section className='info'>
              {langage.map((langage) => {
                return (
                  <SingleLangage key={langage.id} {...langage}></SingleLangage>
                );
              })}
            </section>
          </div>
        </div>
    </div>
  );
}

export default Langages;