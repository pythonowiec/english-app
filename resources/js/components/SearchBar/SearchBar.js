import React from "react";

import { Form } from "react-bootstrap";

const SearchBar = ({ change, searchInputValue }) => {
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Search</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter title"
                    value={searchInputValue}
                    onChange={change}
                />
            </Form.Group>
        </Form>
    );
};

export default SearchBar;
