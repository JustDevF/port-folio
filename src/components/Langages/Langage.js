import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

//Composant 
const Langage = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='langage'>
      <header>
        <h4>{title}</h4>
        <button className='btnLangage' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Langage;