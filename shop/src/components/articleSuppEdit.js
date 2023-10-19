import React, { useState } from "react";
import Shop from "../components/shop";
import { isEmpty } from './components/card';
import { useDispatch } from "react-redux";
import ArticleSupp from "./articleSupp";
import { editProduct } from "../actions/product.action";

import Shop from "./shop";

const ArticleEdit = ({ product }) => {
    const [editTogle, setEditTogle] = useState(false);
    const [editContent, setEditContent] = useState();
    const dispatch = useDispatch();

    const handleEdit = (e) => {
        e.preventDefault();

        const articleSuppData = {
            title: product.title,
            description: product.description,
            categories: product.categories,
            basePrice: product.basePrice,
            salePrice: product.salePrice,
            imageUrl: product.imageUrl,
            id: product.id,
            content: editContent,
        };

        this.props.dispatch(editProduct(articleSuppData));
        setEditTogle(false);
    }

    return (
        <div className="article-edit">
            {!isEmpty(ArticleSupp) && (
                <div className="edit-delete">
                    <img src="./img/edit.png" alt="edit" onClick={() => setEditTogle(!editTogle)} />
                    <img src="./img/delete.png" alt="delete" />

                    <Shop />

                    {editTogle ? (
                        <form ref={editContent} onSubmit={e => handleEdit(e)}>
                            <input autoFocus={true} defaultValue={product.title} onChange={e => setEditContent(e.target.value)}></input>
                            <textarea autoFocus={true} defaultValue={product.description} onChange={e => setEditContent(e.target.value)}></textarea>
                            <select autoFocus={true} defaultValue={product.categories} onChange={e => setEditContent(e.target.value)}></select>
                            <input autoFocus={true} defaultValue={product.basePrice} onChange={e => setEditContent(e.target.value)}></input>
                            <input autoFocus={true} defaultValue={product.salePrice} onChange={e => setEditContent(e.target.value)}></input>
                            <input autoFocus={true} defaultValue={product.imageUrl} onChange={e => setEditContent(e.target.value)}></input>
                            <input type="submit" value="Valider modification" />
                        </form>
                    ) : (
                        <p>{product.content}</p>
                    )}
                </div>
            )}
        </div>
    )
}



export default ArticleEdit;