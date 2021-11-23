import React, {useContext, useState} from "react"
import {Context} from "../contexts/PictureContext"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems, setCartItems} = useContext(Context);
    const [loading, setLoading] = useState(false);
    const checkoutItems = cartItems.map(item => {
        return <CartItem key={item.id} item={item} />
    });
    const emptyCheckout = <h2>Nothing in the cart for the moment</h2>;
    const total = (cartItems.length * 5.99).toLocaleString("en-US", {style: "currency", currency: "USD"});

    function checkout() {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setCartItems([]);
            console.log("Order placed");
        }, 3000);
    }

    return (
        <div className="cart-page">
            <h1>Checkout page</h1>
            {cartItems.length > 0 ? checkoutItems : emptyCheckout}
            {cartItems.length > 0 && <p className="total-cost">Total: {total}</p>}
            {cartItems.length > 0 &&
                <div className="order-button">
                    <button disabled={loading} onClick={() => checkout()}>
                        {loading ? "Ordering..." : "Place order"}
                    </button>
                </div>
            }
        </div>
    );
}

export default Cart