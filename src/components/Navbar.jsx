import { useEffect, useState } from 'react';
import './css/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // const [activebar,setActivebar] = useState('home');

    // useEffect(() => {
    //     const changeColor = () => {
    //         document
    //     }
    // }, [activebar])

    return (
        <>
        <nav className="sidebar">
            <ol className="nav-links">
                <Link to="/" className='nav-link'><li>Home</li></Link>
                <Link to="/skills" className='nav-link'><li>Skills</li></Link>
                <Link to="/experience" className='nav-link'><li>Experience</li></Link>
                <Link to="/projects" className='nav-link'><li>Projects</li></Link>
                <Link to="/contact" className='nav-link'><li>Contact</li></Link>
            </ol>
        </nav>
        </>
    );
}
export default Navbar;