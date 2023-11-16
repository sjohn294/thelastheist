import { Link, useLocation } from 'react-router-dom';
import NavTabsCSS from './style/navtabs.module.css'



function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <div className={NavTabsCSS.container}>
            <ul className={NavTabsCSS.nav} >
                <li className={NavTabsCSS.logo}>
                    <Link
                        to="/"
                        className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                    >
                        Home
                    </Link>
                </li>

                <li className={NavTabsCSS.logo}>
                    <Link
                        to="/Login"
                        className={currentPage === '/Login' ? 'nav-link  active' : 'nav-link'}
                    >
                        Login
                    </Link>
                </li>

                <li className={NavTabsCSS.logo}>
                    <Link
                        to="/Signup"
                        className={currentPage === '/Signup' ? 'nav-link active' : 'nav-link'}
                    >
                        Signup
                    </Link>
                </li>

                <li className={NavTabsCSS.logo}>
                    <Link
                        to="/Vehicles"
                        className={currentPage === '/Vehicles' ? 'nav-link active' : 'nav-link'}
                    >
                        Vehicles
                    </Link>
                </li>

                <li className={NavTabsCSS.logo}>
                    <Link
                        to="/Region"
                        className={currentPage === '/Region' ? 'nav-link active' : 'nav-link'}
                    >
                        Region
                    </Link>
                </li>

            </ul>
        </div>
    );
}

export default NavTabs;
