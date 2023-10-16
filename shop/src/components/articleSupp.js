import React, { useRef } from "react";
import { useSelector } from "react-redux";

const ArticleSupp = () => {
    const form = useRef(); 
    const articleSupp = useSelector (state => state.productReducer);

    const handlForm = async (e) => {
        e.preventDefault();

        const articleSuppData = {
            id: articleSupp.length + 1,
            title: form.current[0].value,
            description: form.current[1].value
        }
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