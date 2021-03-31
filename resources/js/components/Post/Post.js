import React, { useEffect, useState } from "react";

import { Card, Button } from "react-bootstrap";

import axios from "axios";

import { useHistory } from "react-router-dom";

import Spinner from "./../UI/Spinner/Spinner";

const Post = ({ id }) => {
    const [fetchedPost, setFetchedPost] = useState(null);

    const [deleteLoading, setDeleteLoading] = useState(false);

    useEffect(() => {
        const fetchPost = async id => {
            const {
                data: { data }
            } = await axios.get(`http://localhost:8000/api/posts/${id}`, {
                headers: {
                    "X-Authorization":
                        "mCCpGMLjUKF11hPuwDsLIPgdyVxWVwF7PZ5nq8aM67KZi1yPOGwnsGkoYkoS8GBG"
                }
            });

            setFetchedPost(data);
        };

        if (!fetchedPost) {
            fetchPost(id);
        }
    }, []);

    const history = useHistory();

    const handlePostDelete = async id => {
        setDeleteLoading(true);

        try {
            await axios.delete(`http://localhost:8000/api/posts/${id}`, {
                headers: {
                    "X-Authorization":
                        "mCCpGMLjUKF11hPuwDsLIPgdyVxWVwF7PZ5nq8aM67KZi1yPOGwnsGkoYkoS8GBG"
                }
            });
        } catch ({ message }) {
            console.log(message);
        } finally {
            setDeleteLoading(false);
        }

        history.replace("/posts/all");
    };

    return (
        <div>
            {fetchedPost ? (
                <Card
                    style={{
                        width: "18rem",
                        cursor: "pointer",
                        margin: "2rem auto"
                    }}
                >
                    <Card.Body>
                        <Card.Title>{fetchedPost?.title}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>

                    {deleteLoading ? (
                        <Spinner fontSize={5} />
                    ) : (
                        <Button
                            variant="danger"
                            onClick={() => handlePostDelete(id)}
                        >
                            Delete
                        </Button>
                    )}
                </Card>
            ) : (
                <Spinner />
            )}
        </div>
    );
};

export default Post;
