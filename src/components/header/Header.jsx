import './header.css'
import Cart from '../Cart'

const Header = () => {
    return(
        <nav className="header-nav">
            <ul className="header-ul">
                <li>
                    <h2
                    className="header-h2"
                    style={{ fontFamily: "monospace", fontSize: "30px" }}
                    >
                    Redux Shopping App
                    </h2>
                </li>
                <li>
                    <Cart />
                </li>
            </ul>
        </nav>
    )
}

export default Header