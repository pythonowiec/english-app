import { useState , useEffect} from 'react';


const usePosts = () => {

    const [posts, setPosts] = useState([]);

    const [loading , setLoading] = useState(false);

    useEffect(() => {

        
        const fetchPosts = async () => {
            const posts = await axios.get('http://localhost:8000/api/posts', {headers:{'X-Authorization': 'hV2yJCCwMz0gWckgfS3c7OeIsBvQL4Sg92qA7R44qI0XkwgnEijSrR2CZStIzS4R'}});
      
            console.log('posts:', posts.data.data);
    
            setPosts(posts.data.data);
    
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

        

        const newPosts  = posts.filter( post => post.id.toString() !== id.toString());

         await axios.delete(`http://localhost:8000/api/posts/${id}`, {headers:{'X-Authorization': 'hV2yJCCwMz0gWckgfS3c7OeIsBvQL4Sg92qA7R44qI0XkwgnEijSrR2CZStIzS4R'}});

        setPosts(newPosts);
    };

    return { loading , posts , handlePostDelete};
};

export default usePosts;