import React from "react";

export function ProductImage(props) {
    return (
        <div>
            <img src={props.src} alt="" />
            <div> {props.saleText}</div>
        </div>
    )


}

export function ProductInfo(props) {
    return (
        <div>
            <div >{props.type}</div>
            <div >{props.name} </div>
            <span >{props.finalPrice} </span>
            <span >{props.price} </span>
        </div>

    );
}
