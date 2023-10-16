import React from "react";
import { useSelector } from "react-redux";

function Shop(props) {

  const product = props.product;
  
  console.log(product);

    return (
      
      <div className="produit">
        <div className="image">
          <img src={product.imageUrl}/>
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