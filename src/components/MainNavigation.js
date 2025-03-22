import { Link } from 'react-router-dom';
import favicon from '../assets/favicon.png'

import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
            <nav className={classes.nav}>
                <div>
                    <img src={favicon} alt="favicon" />
                    <h2>GYMFIT</h2>
                </div>
                <ul className={classes.list}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/classes">Classes</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
    )
}

export default MainNavigation;