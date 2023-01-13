import React from "react";

import './Card.css'

const Card = (props) => {
    // this classes not work so, i use probs class
    // const classes1 = 'card' + props.className;

    return <div className={props.className}>{props.children}</div>
}

export default Card;