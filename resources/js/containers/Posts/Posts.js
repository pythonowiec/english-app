import React, { useState, useEffect } from "react";

import { Button, Alert, Card } from "react-bootstrap";

import axios from "axios";

import Spinner from "./../../components/UI/Spinner/Spinner";

import usePosts from "./../../hooks/Posts/usePosts";

import Pagination from "./../../components/UI/Pagination/Pagination";

import SearchBar from "./../../components/SearchBar/SearchBar";

const Posts = () => {
    const {
        loading,
        posts,
        currentPosts,
        currentPage,
        pagesNumber,
        searchInput,
        postDeletionLoading,
        handlePostDelete,
        handlePostPagination,
        handleSearchInputChange
    } = usePosts();

    let render = <Spinner />;

    if (!loading && posts.data.length > 0) {
        const postsToRender =
            posts.searched.length > 0 ? posts.searched : currentPosts;

        render = (
            <>
                <SearchBar
                    change={handleSearchInputChange}
                    searchInputValue={searchInput}
                />
                {postsToRender.map(post => (
                    <Card
                        onClick={() => handlePostDelete(post.id)}
                        key={post.id}
                        style={{
                            width: "18rem",
                            cursor: "pointer",
                            margin: "2rem auto"
                        }}
                    >
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </Card.Text>
                            {postDeletionLoading === post.id ? (
                                <Spinner fontSize={5} />
                            ) : (
                                <Button variant="danger">Delete</Button>
                            )}
                        </Card.Body>
                    </Card>
                ))}
            </>
        );
    }

    return (
        <>
            {render}
            <Pagination
                pagesNumber={pagesNumber}
                currentPage={currentPage}
                click={handlePostPagination}
            />
        </>
    );
};
export default Posts;
