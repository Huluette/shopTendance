import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, getProducts } from "../actions/product.action";

const ArticleSupp = () => {
    const form = useRef(); 
    const articleSupp = useSelector (state => state.productReducer);
    const dispatch = useDispatch();

    const handlForm = async (e) => {
        e.preventDefault();

        const articleSuppData = {
            title: articleSupp.title,
            description: articleSupp.description
        }

        await dispatch(addProduct(articleSuppData));
        dispatch(getProducts());
        form.current.reset();
    }

    return (
        <div className="form-container">
            <form ref={form} onSubmit={e => handlForm(e)}>
                <input className="title" type="text" placeholder="Titre de l'article..." name="Titre"/>
                <textarea className="description" type="text" placeholder="Description..." name="Description de l'article"></textarea>
                <button type="submit" value="Envoyer"/>
            </form>

        </div>
    )
}

export default ArticleSupp;