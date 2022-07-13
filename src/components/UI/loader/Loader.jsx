import React from "react";
import cl from './Loader.module.css'

const Loader = () => {

    return (
        <div className={cl.wrapper + ' ' + 'title'}>
            <div className={cl.ldsRoller}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    );
};

export default Loader;