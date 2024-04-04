import React from 'react';
import './Menu.css'; 
import menuData from './MenuApi'; 

const MenuComponent = () => {
  // Filter menu items by category
  const snacks = menuData.filter(item => item.category === 'snacks');
  const breakfast = menuData.filter(item => item.category === 'breakfast');
  const dinner = menuData.filter(item => item.category === 'dinner');
  const dessert = menuData.filter(item => item.category === 'dessert');
  const lunch = menuData.filter(item => item.category === 'lunch');
  const appetizer = menuData.filter(item => item.category === 'appetizer');

  return (
    <div className="menu-container">
      <h2>Menu</h2>

      {/* Snacks */}
      <div className="category-container">
        <h3>Snacks</h3>
        <div className="menu-cards">
          {snacks.map(item => (
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

      {/* Breakfast */}
      <div className="category-container">
        <h3>Breakfast</h3>
        <div className="menu-cards">
          {breakfast.map(item => (
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

      {/* Dinner */}
      <div className="category-container">
        <h3>Dinner</h3>
        <div className="menu-cards">
          {dinner.map(item => (
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

      {/* Dessert */}
      <div className="category-container">
        <h3>Dessert</h3>
        <div className="menu-cards">
          {dessert.map(item => (
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

      {/* Lunch */}
      <div className="category-container">
        <h3>Lunch</h3>
        <div className="menu-cards">
          {lunch.map(item => (
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

      {/* Appetizer */}
      <div className="category-container">
        <h3>Appetizer</h3>
        <div className="menu-cards">
          {appetizer.map(item => (
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
    </div>
  );
};

export default MenuComponent;
