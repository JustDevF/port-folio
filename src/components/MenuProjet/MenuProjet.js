import React, { useState, useEffect } from 'react';
import './MenuProjet.css'
//Importer les composants 
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
//récupète toutes les catégories unique en itération dans un tableau 
const allCategories = ['Tous', ...new Set(items.map((item) => item.category ))];

//Le composant
const MenuProjet = () => {
 //Etat initial
 const [menuItems, setMenuItems] = useState(items);
 const [categories, setCategories] = useState(allCategories);

 useEffect(() => {
  setCategories(allCategories) 
 }, []);
 
 //Filtre les menus par catégorie 
 //Mise à jour de l'état 
 const filterItems = (category) => {
   if (category === 'Tous') {
     setMenuItems(items);
     return;
   }
   const newItems = items.filter((item) => item.category === category)
     setMenuItems(newItems);
 };

 return (
      <main>
        <section className="menu sectionMenuProjet">
          <div className="titleMenu">
             <h2>Projets</h2>
             <div className="underlineMenuProjet"></div>
          </div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={menuItems}/>
        </section>
      </main>
   
 );
}

export default MenuProjet