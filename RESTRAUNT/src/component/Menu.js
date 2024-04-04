import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Menu.css'; 
import menuData from './MenuApi'; 

const MenuComponent = () => {
  const breakfastImageLink = 'https://c.ndtvimg.com/2020-10/bc5nbv6o_breakfast_650x400_01_October_20.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350';
   const snacksImageLink = 'https://i.pinimg.com/736x/33/08/18/330818b85e23e2281b2013cd2d22134e.jpg';

   return (
    <div className="menu-container">
      <h2>Menu</h2>

      {/* Snacks */}
      <div className="category-container">
        <h3>Snacks</h3>
        <Link to="/snacks">View All Snacks</Link>
        <div className="menu-cards">
          <img src={snacksImageLink} alt="Snacks" className="menu-img" />
          <p className="menu-description">
            Indulge in our tantalizing array of snacks, meticulously crafted to satisfy every craving.
          </p>
          <div className="view-more-box">
            <Link to="/snacks" className="view-more-button">View More</Link>
          </div>
        </div>
      </div>

      {/* Breakfast */}
      <div className="category-container">
        <h3>Breakfast</h3>
        <Link to="/breakfast">View All Breakfast</Link>
        <div className="menu-cards">
          {/* Replace the image link below */}
          <img src={breakfastImageLink} alt="Breakfast" className="menu-img" />
          <p className="menu-description">
            Description for breakfast category.
          </p>
          <div className="view-more-box">
            <Link to="/breakfast" className="view-more-button">View More</Link>
          </div>
        </div>
      </div>

      {/* Dinner */}
      <div className="category-container">
        <h3>Dinner</h3>
        <Link to="/dinner">View All Dinner</Link> {/* Link to dinner page */}
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

     

      {/* Lunch */}
      <div className="category-container">
        <h3>Lunch</h3>
        <Link to="/lunch">View All Lunch</Link> {/* Link to lunch page */}
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
        <Link to="/appetizer">View All Appetizer</Link> {/* Link to appetizer page */}
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
