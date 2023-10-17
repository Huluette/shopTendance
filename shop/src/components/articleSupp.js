import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addProduct, getProducts } from "../actions/product.action";
import { store } from "../index";

const ArticleSupp = () => {
    const form = useRef();
    const dispatch = useDispatch();

    const handleForm = async (e) => {
        e.preventDefault();

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
            <form ref={form} onSubmit={e => handleForm(e)}>
                <input type="text" placeholder="Titre de l'article..." name="title" />
                <textarea type="text" placeholder="Description..." name="description"></textarea>
                <label htmlFor="categories">Catégories : </label>
                <select className="categories">
                    <option value="">Choisissez une catégorie</option>
                    <option value={ArticleSupp.categories}>Accessoires</option>
                    <option value={ArticleSupp.categories}>Chaussures</option>
                    <option value={ArticleSupp.categories}>Vêtements</option>
                    <option value={ArticleSupp.categories}>Sport</option>
                    <option value={ArticleSupp.categories}>Homme</option>
                    <option value={ArticleSupp.categories}>Femme</option>
                </select>
                <input type="number" placeholder="Prix de base..." />
                <input type="number" placeholder="Prix de vente..." />
                <input type="url" placeholder="URL de l'image..." />
                <button type="submit">Soumettre</button>
            </form>
        </div>
    )
}

export default ArticleSupp;