import { NavLink, useLoaderData } from "react-router-dom";
import { isEmpty } from "../components/card";


function Categories() {
    
    const product = useLoaderData();

    return (
        <div>
            <h2>Article {product.categories}</h2>
            <ul>
                {!isEmpty(product) && product.map((product) => (
                    <li key={product.id}>
                        <NavLink to={`/articles/${product.id}`}>{product.content}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories;