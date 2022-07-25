import React from "react";
import './product.css';
export const Product = (props)=>{
    
    return(
        <div>
            <div className="container">
                <div className="product_name">
                    {props.name}
                </div>
                <div className="product_image">
                    <img src={props.image} alt="product img"/>
                </div>
                <div className = "product_price">
                    {props.price}
                </div>
                <div className="buy">
                    <button className="buy_now">BUY NOW</button>
                </div>
            </div>
        </div>
    )
}