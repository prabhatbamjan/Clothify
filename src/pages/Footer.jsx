import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h1>Clothify<span className="logo"></span></h1>
                    </div>
                    <nav className="footer-nav">
                        <ul>
                            <li className="footer-li"><Link to="/" className="footer-link">Home</Link></li>
                            <li className="footer-li"><Link to="/products" className="footer-link">Products</Link></li>
                            <li className="footer-li"><Link to="/about" className="footer-link">About Us</Link></li>
                            <li className="footer-li"><Link to="/contact" className="footer-link">Contact</Link></li>
                        </ul>
                    </nav>
                    <div className="footer-social">
                        <ul>
                            <li><a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#" className="social-link"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#" className="social-link"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="#" className="social-link"><i className="fab fa-pinterest"></i></a></li>
                        </ul>
                    </div>
                    <div className="newsletter">
                        <h3>Leave message here!!!!!!!!!!!</h3>
                        <form className="newsletter-form">
                            <input type="message " placeholder="Leave message" />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
}
