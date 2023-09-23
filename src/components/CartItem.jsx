import { useDispatch } from 'react-redux'
import './Cart.css'
import { toCart, removeItem } from './slices/cartSlice'

const CartItem = ({id, name, price, quantity, totalPrice}) => {

    const dispatch = useDispatch()

    const increaseItem = () => {
        dispatch(toCart({ id, price }))
    }

    const decreaseItem = () => {
        dispatch(removeItem({ id, price }))
    }

    return(
        <>
            <div className="cartItem">
                <h2> {name}</h2>
                <p>$ {price} /-</p>
                <p>x {quantity}</p>
                <article>Total ${totalPrice}</article>
                <button className="cart-actions" onClick={decreaseItem}>
                    -
                </button>
                <button className="cart-actions" onClick={increaseItem}>
                    +
                </button>
            </div>
            
        </>
    )

}

export default CartItem