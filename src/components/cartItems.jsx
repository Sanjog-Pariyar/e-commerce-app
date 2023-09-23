import { useSelector } from 'react-redux';
import './Cart.css'
import CartItem from './CartItem';


const CartItems = () => {

    const cartItems = useSelector((state) => state.additionToCart.cartItems)

    return (
    <div className="cart-container">
        <h2>Your Cart</h2>
        <ul>
            {cartItems.map((item) => (
                <li key={item.id}>
                    <CartItem 
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        totalPrice={item.totalPrice}/>
                </li>
            ))}
            
        </ul>
        </div>
    );
};

export default CartItems;