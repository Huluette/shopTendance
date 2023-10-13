import React from "react";


let products = new Map();

function Shop(props) {

 const product = useSelector((state) => state.productReducer);

  return (
    <div className="container-card">
      <h2 className="sous-titre">Articles</h2>
      <ul className="content-card">
        {product.map((product, i) => (
          <shop key={i} product={product} />
        ))}
      </ul>
    </div>
  );

}

export default Shop;