import { useState , useEffect} from 'react';


const usePosts = () => {

    const [posts, setPosts] = useState({ posts: [] , pageNumber: 0});

    const [loading , setLoading] = useState(false);

    useEffect(() => {

        
        const fetchPosts = async () => {
            const posts = await axios.get('http://localhost:8000/api/posts', {headers:{'X-Authorization': 'hV2yJCCwMz0gWckgfS3c7OeIsBvQL4Sg92qA7R44qI0XkwgnEijSrR2CZStIzS4R'}});
      
            console.log('posts:', posts.data.data);
    
            setPosts(prevState => ({ ...prevState , posts: posts.data.data}));
    
          }

        setLoading(true);
        try {
           
            fetchPosts();
        } catch (error) {
            console.log(error.message)
        }
        finally {
            setLoading(false);
        }
     

      
    } , [])

    const handlePostDelete = async (id) => {
    console.log('id:', id)

        

        const newPosts  = posts.posts.filter( post => post.id.toString() !== id.toString());

         await axios.delete(`http://localhost:8000/api/posts/${id}`, {headers:{'X-Authorization': 'hV2yJCCwMz0gWckgfS3c7OeIsBvQL4Sg92qA7R44qI0XkwgnEijSrR2CZStIzS4R'}});

        setPosts(prevState => ({...prevState , posts:newPosts}));
    };

    const handlePostPagination = async () => {
        console.log('I am here')

        setPosts(prevState =>({posts:prevState.posts.map((post, index) => index < (prevState.pageNumber +1 )/ prevState.posts.length ? null : post ), pageNumber:prevState.pageNumber + 1 }))

    }

    return { loading , posts , handlePostDelete , handlePostPagination};
};

export default usePosts;