import React, {Component} from "react";
import Aux from "../../hoc/Aux"
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    meat: 1.3,
    cheese: 0.4
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            meat: 0,
            bacon: 0
        },
        totalPrice: 4,
        isPurchasable: false,
        isPurchasing: false
    }

    addIngredientHandler = (type) => {
        let oldCount = this.state.ingredients[type];
        let updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        let oldPrice = this.state.totalPrice;
        let updatedPrice = oldPrice + INGREDIENT_PRICES[type]
        this.setState((prevState, props) => {
            return {
                ingredients: updatedIngredients,
                totalPrice: updatedPrice
            }
        });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        let oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return
        }
        let updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        let oldPrice = this.state.totalPrice;
        let updatedPrice = oldPrice - INGREDIENT_PRICES[type]
        this.setState((prevState, props) => {
            return {
                ingredients: updatedIngredients,
                totalPrice: updatedPrice
            }
        });
        this.updatePurchaseState(updatedIngredients);
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).map((igKey) => {
            return ingredients[igKey];
        }).reduce((sum, el) => {
            return sum + el
        }, 0);
        this.setState((prevState, props) => {
            return {
                isPurchasable: sum > 0
            }
        })
    }

    updatePurchasingState = () => {
        this.setState(()=> {
            return{
                isPurchasing: true
            }
        })
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Modal show={this.state.isPurchasing}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabledInfo={disabledInfo}
                    price={this.state.totalPrice}
                    isPurchasable={this.state.isPurchasable}
                    click={this.updatePurchasingState}
                ></BuildControls>
            </Aux>
        )
    }
}

export default BurgerBuilder;
