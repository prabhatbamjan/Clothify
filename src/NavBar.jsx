import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.css";

export default function NavBar({ updateCartNumber }) {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <nav>
                <Link to="/" className="link">
                <img className="logo2" src="./images/logo2.png" alt="Logo" />
                    <h1 className=" title">
                        Clothify
                        
                    </h1>
                </Link>
                <ul className={toggle ? "nav-ul-show" : "nav-ul-hide"}>
                    <li className="nav-li"><NavLink to="/" className="link"> Home</NavLink> </li>
                    <li className="nav-li"><NavLink to="/products" className="link">  Products</NavLink> </li>
                    <li className="nav-li"><NavLink to="/Footer" className="link">Contact</NavLink></li>
                </ul>
                <div className="icons">
                    <NavLink to="/cart" className="link"> <i className="fa-solid fa-cart-shopping"></i></NavLink>
                    <div className="circle">{updateCartNumber}</div>
                    <i className="fa-solid fa-bars" onClick={() => setToggle(!toggle)}></i>
                </div>
            </nav>
        </>
    );
}
