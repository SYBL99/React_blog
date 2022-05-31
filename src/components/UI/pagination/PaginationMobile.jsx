import React from "react";
import { getPagesArray } from "../../../utils/pages";

const PaginationMobile = ({ totalPages, page, changePage }) => {
    const pagesArray = getPagesArray(totalPages);
    const checkAndChangePage = (page) => {
        if (pagesArray.indexOf(page) >= 0) {
            changePage(page)
        }
    }
    return (
        <div className="btn__wrapper pagination__mobile">
            <button className={"nav__btn"}
                onClick={() => checkAndChangePage(page - 1)}> &#8592;</button>
            <label>{page}</label>
            <button className={"nav__btn"}
                onClick={() => checkAndChangePage(page + 1)}> &#8594;</button>
        </div>
    );
};

export default PaginationMobile;