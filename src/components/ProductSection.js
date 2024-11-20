import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductSection.css';

const ProductSection = () => {
  const navigate = useNavigate();
  
  const categories = [
    {
      title: "Fruits & Vegetables",
      products: [
        { name: "Organic Fruits & vegetables", image: "/images/onion2.png", discount: "30%" },
        { name: "Fresh Fruits", image: "/images/Watermelon.png", discount: "40%" },
        { name: "Fresh Vegetables", image: "/images/ladiesfinger.png", discount: "30%" },
        { name: "Cuts & sprouts", image: "/images/grapes.png", discount: "30%" },
        { name: "Exotic Vegetables", image: "/images/mush1.png", discount: "30%" },
        { name: "Herbs & Seasonings", image: "/images/herbs.png", discount: "30%" },
      ]
    },
    {
      title: "Beverages",
      products: [
        { name: "Health drinks & Supplements", image: "/images/pediasure.png", discount: "30%" },
        { name: "Tea & Coffee", image: "/images/bru1.png", discount: "40%" },
        { name: "Flavoured & Soya Milk", image: "/images/milk.png", discount: "30%" },
        { name: "Power Boosters", image: "/images/pow1.png", discount: "30%" },
        { name: "Fruity Indulgence", image: "/images/ind.png", discount: "30%" },
        { name: "crick it drink it", image: "/images/drink.png", discount: "30%" },
      ]
    },
    {
      title: "Snack Store",
      products: [
        { name: "Chai Time Snack", image: "/images/snack.png", discount: "30%" },
        { name: "Morning Straters", image: "/images/bru1.png", discount: "40%" },
        { name: "Flavoured & Soya Milk", image: "/images/oats.png", discount: "30%" },
        { name: "Sweet Cravings", image: "/images/choco.png", discount: "30%" },
      ]
    },
  ];
  
const handleCategoryClick = (categoryTitle) => {
  console.log("Clicked category:", categoryTitle);
  const formattedTitle = categoryTitle.toLowerCase().replace(/ /g, "-");
  navigate(`/category/${formattedTitle}`);
};

  return (
    <div className="product-section">
      {categories.map((categories, index) => (
        <div key={index} className="category">
          <h2>{categories.title}</h2>
          <div className="product-cardss">
            {categories.products.map((products, index) => (
              <div
                key={index}
                className="product-card2"
                onClick={() => handleCategoryClick(categories.title)}// Navigate when clicked
              >
                <img src={products.image} alt={products.name} />
                <p>{products.name}</p>
                <span>UP TO {products.discount} OFF</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSection;
 
