import React from 'react';
import classes from "../BuildControls/BuildControls.css"
import BuildControl from "../BuildControls/BuildControl/BuildControl"
const buildControls = () => {
    return (
        <div className={classes.BuildControls}>
            <BuildControl label="Cheese"></BuildControl>
        </div>
    )
}

export default buildControls;
