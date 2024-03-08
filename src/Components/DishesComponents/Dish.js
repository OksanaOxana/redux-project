import React  from "react";
import  { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";

const Dish =  ({dish}) => {
    const [quantity, setQauntity] = useState(1);

    return (
        <div>
            <img src = {`./${dish.img}.jpg`} alt = 'pic'/>
            <h2>{dish.name}</h2>
            <p>$ {dish.price}</p>
            <ChangeQuantity quantity={quantity} setQauntity={setQauntity}/>
            <button>Add to cart</button>
        </div>

    )
}
export default Dish;