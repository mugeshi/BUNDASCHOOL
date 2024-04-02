import React from 'react';
import './Menu.css'; 
import menuData from './MenuApi'; 

const MenuComponent = () => {
  return (
    <div className="menu-container">
      <h2>Menu</h2>
      <div className="menu-cards">
        {menuData.map(item => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.name} className="menu-img" />
            <div className="menu-details">
              <h3 className="menu-name">{item.name}</h3>
              <p className="menu-category">{item.category}</p>
              <p className="menu-price">{item.price}</p>
              <p className="menu-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuComponent;
