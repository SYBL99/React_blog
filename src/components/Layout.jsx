import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header>
                <nav>
                    <Link to="/">Главная</Link>
                    <Link to="/posts">Посты</Link>
                    <Link to="/about">О нас</Link>
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