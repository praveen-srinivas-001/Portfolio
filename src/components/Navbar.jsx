import './css/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <nav className="links">
                <h1>PortFolio</h1>
                <ol className="nav-links">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/skills"><li>Skills</li></Link>
                    <Link to="/experience"><li>Experience</li></Link>
                    <Link to="/projects"><li>Projects</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                </ol>
            </nav>
        </header>
    );
}
export default Navbar;