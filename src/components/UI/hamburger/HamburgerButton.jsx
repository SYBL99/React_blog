import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import cl from './HamburgerButton.module.css'
const HamburgerButton = ({children}) =>
{
    const [menuActive, setMenuActive] = useState(false)
    return (
        <div className={cl.brMenu} >
            <div className={cl.brNav} onClick={()=>setMenuActive(!menuActive)}>
                <div className={cl.burger}>
                    <span/>
                </div>
            </div>
            <nav className={menuActive ? `${cl.brMain}`+ ' ' + `${cl.active}` : `${cl.brMain}`}>
                {children.map(child => <NavLink className={cl.child} key={child.path} to={child.path} onClick={() => setMenuActive(!menuActive)}>{child.name} </NavLink>)}
            </nav>
        </div>
    )
}

export default HamburgerButton;