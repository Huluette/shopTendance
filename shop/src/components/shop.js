import React, { useState } from "react";
import { deleteProduct, editProduct } from "../actions/product.action";
import { useDispatch } from "react-redux";
import { isEmpty } from "../components/card"



function Shop(props) {

  const product = props.product;
  const dispatch = useDispatch();
  const [editToggle, setEditToggle] = useState(false);
  const [editContent, setEditContent] = useState(product);

  const handleEditToggle = (e) => {
    e.preventDefault();

    const postData = {
      id: product.id,
      title: product.title,
      description: product.description,
      categories: product.categories,
      basePrice: product.basePrice,
      salePrice: product.salePrice,
      imageUrl: product.imageUrl,
      content: editContent,
    };

    dispatch(editProduct(product));
    setEditToggle(false);

  }

  return (

    <div className="produit">
      {!isEmpty(product) && (
        <div className="contain-edit-delete">
          <div className="edit" alt="edit" onClick={() => setEditToggle(!editToggle)} />
          <div className="delete" alt="delete" onClick={() => dispatch(deleteProduct(product.id))} />
        </div>
      )}

      <div className="image">
        <img alt="URL" src={product.imageUrl} />
      </div>
      <div className="description">
        <p>{product.title}</p>
        <p>Description: {product.description}</p>
        <p>Catégorie: {product.categories}</p>
        <p>Prix: {product.basePrice} €</p>
        <p>En solde: {product.salePrice} €</p>
      </div>

      {editToggle && (
        <div className="produit" onSubmit={handleEditToggle} autoFocus="true" defaultValue={product} onChange={(e) => setEditContent(e.target.value)}>
          <div className="image">
            <img alt="URL" src={product.imageUrl} />
          </div>
          <div className="description">
            <p>{product.title}</p>
            <p>Description: {product.description}</p>
            <p>Catégorie: {product.categories}</p>
            <p>Prix: {product.basePrice} €</p>
            <p>En solde: {product.salePrice} €</p>
          </div>
        </div>
      )};
    </div>
)};


export default Shop;