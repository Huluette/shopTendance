 import React from "react";
 import { useSelector } from "react-redux";

 function Shop(props) {

  const product = useSelector((state) => state.productReducer);

   return (
    <div className="card">
      {product.map((product, i) => (
        <div key={i}>
          <shop product={product} /> 
          <p>{product.title}</p>
          <p>Description: {product.description}</p>
          <p>Catégorie: {product.categories[0]}, {product.categories[1]}</p>
          <p>Prix: {product.basePrice} €</p>
          <p>En solde: {product.salePrice} €</p>
          <img src={product.imageUrl}></img>
        </div>
      ))}
    </div>
   );

 }

 export default Shop;