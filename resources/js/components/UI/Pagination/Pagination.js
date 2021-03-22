import React from "react";

import { Pagination } from "react-bootstrap";

const PaginationComponent = ({ pagesNumber, click, currentPage }) => {
    let items = [];

    for (let number = 1; number <= pagesNumber; number++) {
        items.push(
            <Pagination.Item
                key={number}
                active={number === currentPage}
                onClick={() => click(number)}
            >
                {number}
            </Pagination.Item>
        );
    }

    const paginationBasic = (
        <>
            <Pagination size="lg" className="justify-content-center">
                {items}
            </Pagination>
        </>
    );

    return paginationBasic;
};

export default PaginationComponent;
