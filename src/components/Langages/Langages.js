import React, { useState, useEffect } from 'react';
import data from './data';
import SingleLangage from './Langage';
import'./Langages.css'

//Composant 
const Langages = () =>{
  const [langage, setLangage] = useState(data);
  
  useEffect(() => {
    setLangage(data)
  }, []);

  return (
    <div>
        <h2 className="langageTitle">Langages</h2>
        <div className="underlineLangages"></div>
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