import React from 'react';
import Shop from '../components/shop';
import { isEmpty } from '../components/card';
import ArticleSupp from '../components/articleSupp';
import { useSelector } from 'react-redux';

function Articles() {

    const article = useSelector((state) => state.productReducer);

    return (
        <>
            <section className="App-section">
                {!isEmpty(article) && article.map((product, i) => (
                    <Shop key={i} product={product} />
                ))}
            </section>
            <section className='App-articleSupp'>
                <ArticleSupp />
            </section>
        </>
    )
}

export default Articles;