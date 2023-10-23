import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addProduct, getProducts } from "../actions/product.action";

const ArticleSupp = () => {
    const form = useRef();
    const dispatch = useDispatch();

    const handleForm = async (e) => {
        e.preventDefault();;

        const articleSuppData = {
            title: form.current[0].value,
            description: form.current[1].value,
            categories: form.current[2].value,
            basePrice: form.current[3].value,
            salePrice: form.current[4].value,
            imageUrl: form.current[5].value,
        };

        await dispatch(addProduct(articleSuppData));
        dispatch(getProducts());
        form.current.reset();

    };


    return (
        <div className="form-container">
            <h2>Ajoutez un article</h2>
            <form ref={form} onSubmit={e => handleForm(e)}>
                <label htmlFor="title">Titre : </label>
                <input type="text" placeholder="Titre de l'article..." id="title" minLength="6" maxLength="40" required />
                <label htmlFor="description">Description : </label>
                <textarea rows="5" cols="50" type="text" placeholder="Description..." id="description" minLength="0" maxLength="100"></textarea>
                <label htmlFor="categories">Catégories : </label>
                <select id="categories" required>
                    <option value="">Choisissez une catégorie</option>
                    <option value={ArticleSupp.categories}>Accessoires</option>
                    <option value={ArticleSupp.categories}>Chaussures</option>
                    <option value={ArticleSupp.categories}>Vêtements</option>
                    <option value={ArticleSupp.categories}>Sport</option>
                    <option value={ArticleSupp.categories}>Homme</option>
                    <option value={ArticleSupp.categories}>Femme</option>
                </select>
                <label htmlFor="price">Prix : </label>
                <input id="price" type="number" placeholder="Prix de base..." min="0" required />
                <input id="price2" type="number" placeholder="Prix de vente..." min="0" required />
                <label htmlFor="imageUrl">Insérez une URL de l'image : </label>
                <input type="url" placeholder="URL de l'image..." id="imageUrl" required />
                <button type="submit" value="Ajouter">Ajouter</button>
            </form>
        </div>
    )
}

export default ArticleSupp;