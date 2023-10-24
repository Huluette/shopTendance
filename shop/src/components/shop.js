import React, { useState } from "react";
import { deleteProduct, editProduct } from "../actions/product.action";
import { useDispatch } from "react-redux";
import { isEmpty } from "../components/card"



function Shop(props) {

  const product = props.product;
  const dispatch = useDispatch();
  const [editToggle, setEditToggle] = useState(false);
  const [editContent, setEditContent] = useState(product);

  const handleEditToggle = async (e) => {
    e.preventDefault();

    const postData = {
      title: product.current[0].value,
      description: product.current[1].value,
      categories: product.current[2].value,
      basePrice: product.current[3].value,
      salePrice: product.current[4].value,
      id: product.current[6].value,
      content: editContent,
    };

    await dispatch(editProduct(postData));
    setEditToggle(false);

  }

  return (

    <div>


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
          <div className="image" onSubmit={handleEditToggle} autoFocus={true} defaultValue={product} onChange={(e) => setEditContent(e.target.value)}>
            <img alt="URL" src={product.imageUrl} />
          </div>
          <div className="description editer">
            <input type="text" defaultValue={product.title} placeholder="Titre..." required />
            <textarea rows="2" cols="40" className="descriptarea" defaultValue={product.description} placeholder="Description..." required />
            <select defaultValue={product.categories} placeholder="Choisissez une catégorie" required>
              <option>Femmes</option>
              <option>Hommes</option>
              <option>Ados</option>
              <option>Enfants</option>
              <option>Bébés</option>
            </select>
            <input type="number" defaultValue={product.basePrice} placeholder="Prix de vente" required />
            <input type="number" defaultValue={product.salePrice} placeholder="Prix en solde" required />
            <button type="submit" className="submitvalidate" value="Valider modifiaction">Valider</button>
          </div>
        </div>
      )
      }
    </div>
  )
};


export default Shop;