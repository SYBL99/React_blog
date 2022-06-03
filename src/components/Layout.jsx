import { NavLink, Outlet } from "react-router-dom";
import HamburgerButton from "./UI/hamburger/HamburgerButton";

const Layout = () => {
    const navigation = [{ name: 'Главная', path: "/" }, { name: 'Посты', path: "/posts" },
        { name: 'Бесконечная лента', path: "/infinite" }]
    return (
        <>
            <header>
                <nav className="menu">
                    <HamburgerButton children={navigation}/>
                    <NavLink className={"menu__nav"} to="/">Главная</NavLink>
                    <NavLink className={"menu__nav"} to="/posts">Посты</NavLink>
                    <NavLink className={"menu__nav"} to="/infinite">Бесконечная лента</NavLink>
                </nav>
            </header>
            <main className="main__content">
                <Outlet/>
            </main>
            <footer>2022</footer>
        </>
    )
}

export default Layout;