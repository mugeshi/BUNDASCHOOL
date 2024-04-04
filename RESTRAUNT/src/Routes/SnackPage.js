import menuData from './MenuApi';

const SnacksPage = () => {
  // Filter menu items for snacks category
  const snacks = menuData.filter(item => item.category === 'snacks');

  return (
    <div>
      <h2>Snacks</h2>
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
  );
};

export default SnacksPage;
