import React from 'react';

const Categories = ({categories, filterItems }) => {
  return (
      <div className="btn-containerCategory">
        {
            categories.map((category, index) => {
            return (
                <button 
                type="button"
                className="btnHero" 
                key={index} 
                onClick={() => filterItems(category)}>
                    {category}
            </button>   
            );
            
            })}
      </div>
  );
};

export default Categories;