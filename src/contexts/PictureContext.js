import React, {createContext, useState, useEffect} from "react"

const Context = createContext()

function ContextProvider(props) {
    const [images, setImages] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
        .then(res => res.json())
        .then(res => setImages(res));
    }, [])

    function toggleFavorite(id) {
        //const image = images.find(img => img.id == id)
        const toggleImg = images.map(img => {
            if(img.id === id) {
                return {
                    ...img,
                    isFavorite: !img.isFavorite
                }
            }
            return img
        })
        setImages(toggleImg);
    }

    function addImageToCart(img) {
        if(!cartItems.includes(img)) {
            setCartItems(prevItems => [
                ...prevItems,
                img
            ])  
        }      
    }

    function removeImageFromCart(img) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== img.id));
    }

    return(
        <Context.Provider 
            value={{
                images, 
                toggleFavorite, 
                addImageToCart, 
                cartItems, 
                removeImageFromCart, 
                setCartItems
            }}
        >
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}