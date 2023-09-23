import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { viewCart } from "./slices/cartSlice";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Cart = () => {

    const cartItems = useSelector((state) => state.additionToCart.cartItems)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const total = cartItems.reduce((accumulator, currentProduct) => {
        return accumulator + currentProduct.totalPrice
    }, 0)

    const viewCartItems = () => {
        let viewCart = false
        if (cartItems.length) {
            viewCart = true
        }
        return viewCart
    }

    const isCardShown = () => {
        dispatch(viewCart())
    }

    const logout = async () => {
        try {
            signOut(auth)
            navigate('/')
        } catch (err) {
            console.error(err)
        }
    }

    return (
    <div className="cartIcon">
        <section>
            { viewCartItems() && <h3 className="viewCart" onClick={() => isCardShown()}>View Cart</h3> }
            <h3>Cart: {cartItems.length ? `${cartItems.length} items` : 'Empty'}</h3>
            <h3>Total $ {total}</h3>
        </section>
        <section>
            <button className="orderBtn">Place Order</button>
            <button onClick={logout}>Log out</button>
        </section>
    </div>
    );
};

export default Cart;