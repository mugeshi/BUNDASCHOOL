import React from 'react';
import './Menu.css';
import menuData from './MenuApi';

const LunchPage = () => {
  const lunchItems = menuData.filter(item => item.category === 'lunch');

  return (
    <div className="menu-container">
      <h2>Lunch</h2>
      <div className="menu-cards">
        {lunchItems.map(item => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.name} className="menu-img" />
            <div className="menu-details">
              <h3 className="menu-name">{item.name}</h3>
              <p className="menu-price">{item.price}</p>
              <p className="menu-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LunchPage;
