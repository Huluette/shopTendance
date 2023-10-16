import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, getProducts } from "../actions/product.action";

const ArticleSupp = () => {
    const form = useRef();
    const dispatch = useDispatch();
    const product = useSelector(state => state.productReducer);

    
    
    const handleForm = async (e) => {
        e.preventDefault();
        
        const articleSuppData = {
            title: form.current["Titre"].value,
            description: form.current["Description de l'article"].value,
            categories: form.current["categories"].value,
            basePrice: form.current["Prix"].value,
            salePrice: form.current["Prix"].value,
            imageUrl: form.current["image"].value
            
        };
        
        await dispatch(addProduct(articleSuppData));
        dispatch(getProducts());
        form.current.reset();
        
    }
   

    return (
        <div className="form-container">
            <form ref={form} onSubmit={e => handleForm(e)}>
                <input className="title" type="text" placeholder="Titre de l'article..." name="Titre" />
                <textarea className="description" type="text" placeholder="Description..." name="Description de l'article"></textarea>
                <label htmlFor="categories">Catégories : </label>
                <select className="categories" id="categories">
                    <option value="">{"Choisissez une catégorie"}</option>
                    <option value="accessories">Accessoires</option>
                    <option value="shoes">Chaussures</option>
                    <option value="clothes">Vêtements</option>
                    <option value="sport">Sport</option>
                    <option value="man">Homme</option>
                    <option value="woman">Femme</option>"
                </select>
                <input value="{product.basePrice}" className="price" type="number" placeholder="Prix..." name="Prix" min="10" max="400" />
                <input value="{product.salePrice}" className="price" type="number" placeholder="Vente..." name="Prix" min="10" max="400" />
                <input className="image" type="text" placeholder="URL de l'image..." name="image"/>
                <button type="submit" value="Envoyer" />
            </form>

        </div>
    )
}

export default ArticleSupp;