import { Link } from "react-router-dom";
import './navbar.css'
function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-brand">
                <Link to="/">Movie App</Link>
            </div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/favorites">Favorites</Link> 
            </div>
        </div>
    );
}

export default Navbar;
