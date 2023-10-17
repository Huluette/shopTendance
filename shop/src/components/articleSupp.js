import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addProduct, getProducts } from "../actions/product.action";

const ArticleSupp = () => {
    const form = useRef();
    const dispatch = useDispatch();

    const handleForm = async (e) => {
        e.preventDefault();

        const articleSuppData = {
            title: form.current["Titre"].value,
            description: form.current["Description de l'article"].value,
            categories: form.current.categories.value,
            imageUrl: form.current.imageUrl.value

        };

        await dispatch(addProduct(articleSuppData));
        dispatch(getProducts());
        form.current.reset();

    };


    return (
        <div className="form-container">
            <form ref={form} onSubmit={handleForm}>
                <input className="title" type="text" placeholder="Titre de l'article..." name="Titre" />
                <textarea className="description" type="text" placeholder="Description..." name="Description de l'article"></textarea>
                <label htmlFor="categories">Catégories : </label>
                <select className="categories">
                    <option value="">Choisissez une catégorie</option>
                    <option value="accessories">Accessoires</option>
                    <option value="shoes">Chaussures</option>
                    <option value="clothes">Vêtements</option>
                    <option value="sport">Sport</option>
                    <option value="man">Homme</option>
                    <option value="woman">Femme</option>
                </select>
                <input className="basePrice" type="number" placeholder="Prix de base..." name="Prix de base"/>
                <input className="salePrice" type="number" placeholder="Prix de vente..." name="Prix de vente"/>
                <input className="image" type="text" placeholder="URL de l'image..." name="image" />
                <button className="btn" type="submit">Soumettre</button>
            </form>
        </div>
    )
}

export default ArticleSupp;