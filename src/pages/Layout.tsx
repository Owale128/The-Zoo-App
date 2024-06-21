import { NavLink, Outlet, useLocation } from "react-router-dom"
import '../sass/main.scss'

export const Layout = () => {
const location = useLocation()
const isHome = location.pathname === '/';

    return(
        <>
        <header>
            <nav>
                <ul>
                    <li>
                        {!isHome &&(
                            <NavLink to={'/'}>Hem</NavLink>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
        <main>
             <Outlet />
        </main>
        <footer>
            All rights reserved. @2024
        </footer>
        </>
    )
}