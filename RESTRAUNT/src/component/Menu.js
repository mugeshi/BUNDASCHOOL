import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const MenuComponent = () => {
  const breakfastImageLink = 'https://c.ndtvimg.com/2020-10/bc5nbv6o_breakfast_650x400_01_October_20.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350';
  const snacksImageLink = 'https://i.pinimg.com/736x/33/08/18/330818b85e23e2281b2013cd2d22134e.jpg';
  const dinnerImageLink = 'https://media.timeout.com/images/106001846/750/562/image.jpg';

  return (
    <div className="menu-container">
      <h2>Menu</h2>

      {/* Snacks */}
      <div className="category-container">
        <h3>Snacks</h3>
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
      
        <div className="menu-cards">
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
        
        <div className="menu-cards">
          <img src={dinnerImageLink} alt="Dinner" className="menu-img" />
          <p className="menu-description">
            Explore our delectable dinner options, carefully curated for an unforgettable dining experience.
          </p>
          <div className="view-more-box">
            <Link to="/dinner" className="view-more-button">View More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;
