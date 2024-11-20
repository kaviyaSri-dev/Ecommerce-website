import React from 'react';
import { useParams } from 'react-router-dom';
import categories from '../data/category';
import './RelatedProductsPage.css'; 
const RelatedProductsPage = () => {
  const { categorytitle } = useParams();
  const formattedTitle = categorytitle.replace(/-/g, " ");
  console.log("Category Title from Params:", categorytitle);
  console.log("Formatted Title:", formattedTitle);
  const foundCategory = categories.find(
    category => category.title.toLowerCase() === formattedTitle.toLowerCase()
);
  if (!foundCategory) {
    return <div>Category not found</div>;
  }
  return (
    <div className="related-products">
      <h1>{foundCategory.title}</h1>
      <div className="product-grid">
        {foundCategory.products.map((products, index) => (
          <div key={index} className="related-product-card">
            <img 
              src={products.image} />
              <h3>{products.name}</h3>
              <p>{products.discount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RelatedProductsPage;