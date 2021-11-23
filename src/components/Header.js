import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../contexts/PictureContext"

function Header() {
    const {cartItems} = useContext(Context);

    function shoppingCartIcon() {
        if(cartItems.length > 0) {
            return <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>
        } else {
            return <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
        }
    }

    return (
        <header>
            <Link to="/photos">
                <h2>Pic Some</h2>
            </Link>
            <Link to="/cart">
                {shoppingCartIcon()}
            </Link>
        </header>
    )
}

export default Header