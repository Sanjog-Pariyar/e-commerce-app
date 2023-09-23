import './layout.css'
import Header from '../header/Header'
import Products from '../Products';
import CartItems from '../cartItems';
import { useSelector } from 'react-redux';

const Layout = () => {

    const isCardView = useSelector((state) => state.additionToCart.seeCart)

    return(
          <div className="layout">
            <Header />
            <Products />
            { isCardView && <CartItems />}
          </div> 
    )
}

export default Layout