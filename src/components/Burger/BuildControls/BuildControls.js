import React from 'react';
import classes from "../BuildControls/BuildControls.css"
import BuildControl from "../BuildControls/BuildControl/BuildControl"

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},

]
const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Total price: $<strong>{props.price.toFixed(2)}</strong></p>
            {
                controls.map(ingredient => {
                    return <BuildControl
                        label={ingredient.label}
                        key={ingredient.label}
                        addClick={() => {
                            props.addIngredient(ingredient.type)
                        }}
                        removeClick={() => {
                            props.removeIngredient(ingredient.type)
                        }}
                        disabledInfo={props.disabledInfo[ingredient.type]}
                    ></BuildControl>;
                })
            }
            <button className={classes.OrderButton}
                    disabled={!props.isPurchasable}
                    onClick={props.click}
            >Order
            </button>
        </div>
    )
}

export default buildControls;
