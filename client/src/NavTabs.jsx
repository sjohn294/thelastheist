import { Link, useLocation } from 'react-router-dom';
import NavTabsCSS from './style/navtabs.module.css'



function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <div className={NavTabsCSS.container}>
            <div className={NavTabsCSS.logo}>
                <Link
                    to="/"
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                    <p className={NavTabsCSS.logo}>Home</p>
                </Link>
            </div>
            <ul className={NavTabsCSS.nav} >


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
            </ul>
        </div>
    );
}

export default NavTabs;
