import React, {useContext} from "react"
import {Context} from "../contexts/PictureContext"

function CartItem({item}) {
    const {removeImageFromCart} = useContext(Context);

    return (
        <div className="cart-item">
            <i onClick={() => removeImageFromCart(item)} className="ri-delete-bin-line"></i>
            <img alt={`cart-item-${item.id}`} src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem