import React from "react";
import { useSelector } from "react-redux";

import { allCartItems } from "./cartSlice";

export const Cart = () => {    
    const cartArray = useSelector(allCartItems);
    console.log(cartArray)

    // const renderCartItems = productsArray.map(product => 
    //     (
    //     <div style={{backgroundColor: 'orange'}}>
    //     <p>{product.title}</p>
    //     <p>{product.price}</p>    
    //     </div>
    //     )
    // )

    return (
        <div>
            {/* {renderProducts} */}
        </div>
    )
}
