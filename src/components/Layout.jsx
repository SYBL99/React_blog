import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/">Главная</NavLink>
                    <NavLink to="/posts">Посты</NavLink>
                    <NavLink to="/infinite">Бесконечная лента</NavLink>
                    <NavLink to="/about">О нас</NavLink>
                    <NavLink to="/test">Test</NavLink>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>2021</footer>
        </>
    )
}

export default Layout;