import './Product.css'
import { toCart } from './slices/cartSlice'
import { useDispatch } from 'react-redux'

const Product = ({id, name, imgURL, price }) => {

    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(toCart({id, name, imgURL, price}))
    }

    return(
        <div className="card">
                <>
                    <img src={imgURL} alt={name} />
                    <h2>{name}</h2>
                    <p>$ {price}</p>
                    <button id={id} onClick={addToCart}>Add to cart</button>
                </>
    </div>
    )
}

export default Product