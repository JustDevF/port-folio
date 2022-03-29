import React from 'react';


const Menu = ({items}) => {

  return (
      <div className="section-centerMenu">
          {items.map((menuItem) => {
              const {id, title, img,} = menuItem;
              return <article key={id} className="menu-itemMenu">
                  <div className="underlineMenu"></div>
                  <img src={img} alt={title} className="photoMenu"/>
              </article>
          })}
      </div>
  );
};

export default Menu;