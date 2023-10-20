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

    dispatch(editProduct(postData));
    setEditToggle(false);

  }

  return (

    <>

      <div className="">


        {!editToggle && (

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
          </div>
        )}


        {editToggle && (
          <div className="produit">
            <div className="image" onSubmit={handleEditToggle} autoFocus="true" defaultValue={product} onChange={(e) => setEditContent(e.target.value)}>
              <img alt="URL" src={product.imageUrl} />
            </div>
            <div className="description editer">
              <input defaultValue={product.title} placeholder="Titre..." required/>
              <input defaultValue={product.description} placeholder="Description..." required/>
              <select defaultValue={product.categories} placeholder="Choisissez une catégorie" required>
                <option>Accessoires</option>
                <option>Chaussures</option>
                <option>Vêtements</option>
                <option>Sport</option>
                <option>Homme</option>
                <option>Femme</option>
              </select>
              <input type="number" defaultValue={product.basePrice} placeholder="Prix de vente" required/>
              <input type="number" defaultValue={product.salePrice} placeholder="Prix en solde" required/>
              <input className="submitvalidate" type="submit" value="Valider modifiaction" placeholder="Valider modification"/>
            </div>
          </div>

        )}


      </div>
    </>
  )
};


export default Shop;