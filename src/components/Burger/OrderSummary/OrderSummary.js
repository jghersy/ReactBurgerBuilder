import React from 'react';

import Assist from '../../../hoc/Assist';

const orderSummary =(props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return <li key = {igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}:</span> {props.ingredients[igKey]}
            </li>
    });
    return (
        <Assist>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Assist>
    );

};

export default orderSummary;