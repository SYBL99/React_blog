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
                    {navigation.map((element, id) => <NavLink key={id} className={"menu__nav"} to={element.path}>{element.name}</NavLink>)}
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