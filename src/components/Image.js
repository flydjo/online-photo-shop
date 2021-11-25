import React, {useState, useContext} from "react"
import {Context} from "../contexts/PictureContext"
import PropTypes from "prop-types"

function Image({className, img}) {
    const {toggleFavorite, addImageToCart, cartItems, removeImageFromCart} = useContext(Context);

    const [hovered, setHovered] = useState(false);

    function handleHover() {
        setHovered(prevState => !prevState)
    }

    function heartIcon() {
        if(img.isFavorite) {
            return <i onClick={() => toggleFavorite(img.id)} className="ri-heart-fill favorite"></i>
        } else if (hovered) {
            return <i onClick={() => toggleFavorite(img.id)} className="ri-heart-line favorite"></i>
        }
    }

    function cartIcon() {
        if(cartItems.includes(img)) {
            return <i onClick={() => removeImageFromCart(img)} className="ri-shopping-cart-fill cart"></i>
        } else if (hovered) {
            return <i onClick={() => addImageToCart(img)} className="ri-add-circle-line cart"></i>
        }
    }

    return(
        <div onMouseEnter={handleHover} onMouseLeave={handleHover} className={`${className} image-container`}>
            {heartIcon()}
            {cartIcon()}
            <img alt={`item-${img.id}`} src={img.url} className="image-grid" />
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image