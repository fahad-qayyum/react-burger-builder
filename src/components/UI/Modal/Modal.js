import React from 'react';
import classes from '../Modal/Modal.css'
import Backdrop from "../Backdrop/Backdrop"
import Aux from "../../../hoc/Aux"

const modal = (props) => {
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.dismissBackdrop}/>
            <div className={classes.Modal}
                 style={{
                     transform: props.show ? 'translateY(0)' : 'translateY(-100vh)'
                 }}
            >
                {props.children}
            </div>
        </Aux>

    )
}

export default modal;
