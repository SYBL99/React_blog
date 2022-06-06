import { NavLink, Outlet } from "react-router-dom";
import HamburgerButton from "./UI/hamburger/HamburgerButton";

const Layout = () => {
    const navigation = [{ name: 'Главная', path: "/blog" }, { name: 'Посты', path: "/blog/posts" },
        { name: 'Бесконечная лента', path: "/blog/infinite" }]
    return (
        <>
            <header>
                <nav className="menu">
                    <HamburgerButton children={navigation}/>
                    <NavLink className={"menu__nav"} to="/blog">Главная</NavLink>
                    <NavLink className={"menu__nav"} to="/blog/posts">Посты</NavLink>
                    <NavLink className={"menu__nav"} to="/blog/infinite">Бесконечная лента</NavLink>
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