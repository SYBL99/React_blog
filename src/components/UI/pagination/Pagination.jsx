import React from "react";
import { getPagesArray } from "../../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
    const pagesArray = getPagesArray(totalPages);
    return (
        <div className="btn__wrapper">
            {pagesArray.map(p =>
                <button className={page === p ? 'btn__current' : "nav__btn"}
                    onClick={() => changePage(p)} key={p}>{p}</button>)}
        </div>
    );
};

export default Pagination;