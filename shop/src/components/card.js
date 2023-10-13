import React from "react";
import Shop from '../components/shop';

const cardContainer = document.getElementById('content-card');
// const filteredProducts = document.getElementById('filtered-products');

let productsJSON;

fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => {
        productsJSON = data;
        container(productsJSON.products);
    })
    .catch(error => {
        console.error('Erreur de chargement :', error);
    })

function container() {

    return (

        // cardContainer.innerHTML = "";
        cardContainer.forEach(function (card) {
            let newCard = document.createElement('div');

            newCard.classList.add('.card');
            
                <div className="container-card">
                    <h2 className="sous-titre">Articles</h2>
                    <div className="content-card">
                        <Shop />
                        {cardContainer.appendChild(card)}
                    </div>
                </div>
            

        }
        )

    )
}


export default container;