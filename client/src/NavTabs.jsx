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
                    <p className={NavTabsCSS.logo}>Will Speakman</p>
                </Link>
            </div>
            <ul className={NavTabsCSS.nav} >


                <li className={NavTabsCSS.logo}>
                    <Link
                        to="/About"
                        className={currentPage === '/About' ? 'nav-link  active' : 'nav-link'}
                    >
                        About
                    </Link>
                </li>

                <li className={NavTabsCSS.logo}>
                    <Link
                        to="/Portfolio"
                        className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                        Portfolio
                    </Link>
                </li>

                <li className={NavTabsCSS.logo}>
                    <Link
                        to="/Contact"
                        className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </Link>
                </li>


                <li className={NavTabsCSS.logo} type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Resume
                </li>


            </ul>
        </div>
    );
}

export default NavTabs;
