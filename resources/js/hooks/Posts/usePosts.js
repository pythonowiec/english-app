import { useState, useEffect } from "react";

const usePosts = () => {
    const [posts, setPosts] = useState({
        data: [],
        searched: [],
        error: false
    });

    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);

    const [postsPerPage, setPostsPerPage] = useState(3);

    const [postDeletionLoading, setPostDeletionLoading] = useState(-1);

    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        const fetchPosts = async () => {
            const {
                data: { data }
            } = await axios.get("http://localhost:8000/api/posts", {
                headers: {
                    "X-Authorization":
                        "hV2yJCCwMz0gWckgfS3c7OeIsBvQL4Sg92qA7R44qI0XkwgnEijSrR2CZStIzS4R"
                }
            });

            console.log(" data :", data);

            setPosts(prevState => ({ ...prevState, data, error: false }));
        };

        try {
            fetchPosts();
        } catch ({ message }) {
            console.log(message);

            setPosts(prevState => ({ ...prevState, error: message }));
        } finally {
            setLoading(false);
        }
    }, []);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;

    const currentPosts = posts.data.slice(firstPostIndex, lastPostIndex);

    const pagesNumber = Math.ceil(posts.data.length / postsPerPage);

    const handlePostDelete = async id => {
        const newPosts = posts.data.filter(
            post => post.id.toString() !== id.toString()
        );

        setPostDeletionLoading(id);

        try {
            await axios.delete(`http://localhost:8000/api/posts/${id}`, {
                headers: {
                    "X-Authorization":
                        "hV2yJCCwMz0gWckgfS3c7OeIsBvQL4Sg92qA7R44qI0XkwgnEijSrR2CZStIzS4R"
                }
            });
        } catch ({ message }) {
            console.log(message);
        } finally {
            setPostDeletionLoading(-1);
        }

        setPosts(prevState => ({ ...prevState, data: newPosts }));
    };

    const handlePostPagination = async number => {
        setCurrentPage(number);
    };

    const handleSearchInputChange = e => {
        setSearchInput(e.target.value);

        const searchedPosts = [];

        posts.data.forEach(
            post =>
                post.title.toString() === e.target.value.toString() &&
                searchedPosts.push(post)
        );

        setPosts(prevState => ({ ...prevState, searched: searchedPosts }));
    };

    return {
        loading,
        posts,
        currentPage,
        currentPosts,
        pagesNumber,
        searchInput,
        postDeletionLoading,
        handleSearchInputChange,
        handlePostDelete,
        handlePostPagination
    };
};

export default usePosts;
