import React, { useState } from "react";
import "./UpComingProduct.css"; // Updated CSS file for styling

const UpcomingProducts = () => {
  const allProducts = [
    {
      id: 1,
      imgSrc: require("../../Assets/PageCovers/product example.jpg"),
      altText: "Product 1",
    },
    {
      id: 2,
      imgSrc: require("../../Assets/PageCovers/product example.jpg"),
      altText: "Product 2",
    },
    {
      id: 3,
      imgSrc: require("../../Assets/PageCovers/product example.jpg"),
      altText: "Product 3",
    },
    {
      id: 4,
      imgSrc: require("../../Assets/PageCovers/product example.jpg"),
      altText: "Product 4",
    },
    {
      id: 5,
      imgSrc: require("../../Assets/PageCovers/product example.jpg"),
      altText: "Product 5",
    },
    {
      id: 6,
      imgSrc: require("../../Assets/PageCovers/product example.jpg"),
      altText: "Product 6",
    },
    {
      id: 7,
      imgSrc: require("../../Assets/PageCovers/product example.jpg"),
      altText: "Product 7",
    },
    {
      id: 8,
      imgSrc: require("../../Assets/PageCovers/product example.jpg"),
      altText: "Product 8",
    },
  ];

  // Initially display the first 6 products
  const [visibleProducts, setVisibleProducts] = useState(
    allProducts.slice(0, 6)
  );

  // Load more products when the "More" button is clicked
  const loadMoreProducts = () => {
    const currentProductCount = visibleProducts.length;
    const nextProducts = allProducts.slice(
      currentProductCount,
      currentProductCount + 3
    ); // Load 3 more products at a time
    setVisibleProducts([...visibleProducts, ...nextProducts]);
  };

  return (
    <div className="upcoming-products-section">
      <h2>Upcoming Products</h2>
      <div className="products-grid">
        {visibleProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.imgSrc}
              alt={product.altText}
              className="product-image"
            />
          </div>
        ))}
      </div>
      <div className="more-btn-container">
        {visibleProducts.length < allProducts.length && (
          <button className="more-btn" onClick={loadMoreProducts}>
            More
          </button>
        )}
      </div>
    </div>
  );
};

export default UpcomingProducts;
