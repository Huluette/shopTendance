import React from "react";

function Shop(props) {
  const { product } = props;
  return (
      <div className="produit">
        <div className="image">
          <img src={product.imageUrl}></img>
        </div>
        <div className="description">
          <p>{product.title}</p>
          <p>Description: {product.description}</p>
          <p>Catégorie: {product.categories[0]}, {product.categories[1]}</p>
          <p>Prix: {product.basePrice} €</p>
          <p>En solde: {product.salePrice} €</p>
        </div>

      </div>

  );

};

export default Shop;