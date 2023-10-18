import React from "react";


function Shop(props) {
  
  const product = props.product;

    return (
      
      <div className="produit">
        <div className="image">
          <img alt="URL" src={product.imageUrl}/>
        </div>
        <div className="description">
          <p>{product.title}</p>
          <p>Description: {product.description}</p>
          <p>Catégorie: {product.categories}</p>
          <p>Prix: {product.basePrice} €</p>
          <p>En solde: {product.salePrice} €</p>
        
        </div>

      </div>

    );
  };


export default Shop;