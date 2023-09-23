import { useEffect } from "react"
import { useSelector } from "react-redux"

const cart = useSelector((state) => state.additionToCart)

const sendCartData = (cartItems) => {
    const sendRequest = async () => {
        await fetch('https://cart-database-e297e-default-rtdb.firebaseio.com/cartItems.json', {
            method: 'PUT',
            body: JSON.stringify(cartItems)
        })
    }
    try {
        sendRequest()
    } catch (err) {
        console.error(err)
    }
}

useEffect(() => {
    sendCartData(cart)
}, [cart])