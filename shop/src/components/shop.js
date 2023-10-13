 import React from "react";
 import { useSelector } from "react-redux";

 function Shop(props) {

  const product = useSelector((state) => state.productReducer);

   return (
    <div className="container-card">
    <h2 className="sous-titre">Articles</h2>
    <ul className="content-card">
      {product.map((product, i) => (
        <li key={i}>
          <shop product={product} /> 
          <p>{product.title}</p>
          <p>{product.description}</p>
          <p>{product.categories[0]}, {product.categories[1]}</p>
          <p>{product.basePrice} €</p>
          <p>{product.salePrice} €</p>
          <img src={product.imageUrl}></img>

        </li>
      ))}
    </ul>
  </div>
   );

 }

 export default Shop;