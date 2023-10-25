import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Shop from "../components/shop";
import { isEmpty } from "../components/card";
import ArticleSupp from "../components/articleSupp";


function Single() {

    const product = useSelector((state) => state.productReducer);
    const { categories } = useParams();

    const filteredProducts = categories
        ? product.filter((product) => product.categories === categories)
        : product;

    return (
        <>
            <section className="App-section">
                {!isEmpty(product) && filteredProducts.map((product) => (
                    <Shop key={product.categories} product={product} />
                ))}            
            </section>
           
        </>
    )
}

export default Single;