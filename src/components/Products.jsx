import Product from "./Product";
import useAxiosFetch from "../hooks/useAxiosFetch";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addToDummyProducts } from "./slices/cartSlice";


const Products = () => {

    const cartState = useSelector((state) => state.additionToCart.DUMMY_PRODUCTS)
    const dispatch = useDispatch()

    const {data, fetchError, isLoading} = useAxiosFetch('http://localhost:3500/DUMMY_PRODUCTS')

    // useEffect(() => {
    //     dispatch(addToDummyProducts({data}))
    // }, [data, cartState])

    return(
        <div>
            <ul className="products-container">

            {isLoading && <p>Loading...</p> }

            {!isLoading && fetchError && <p style={{color: "red"}}>Error loading Page</p> }

                { !isLoading && !fetchError && data.map((product) => (
                    <li key={product.id}>
                        <Product
                            id={product.id}
                            name={product.name}
                            imgURL={product.imgURL}
                            price={product.price}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Products