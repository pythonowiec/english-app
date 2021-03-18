import React , { useState , useEffect} from 'react';

import { Button , Alert  , Card  } from 'react-bootstrap'

import axios from 'axios';



const Example = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {

      
      const fetchPosts = async () => {
        const posts = await axios.get('http://localhost:8000/api/posts', {headers:{'X-Authorization': 'hV2yJCCwMz0gWckgfS3c7OeIsBvQL4Sg92qA7R44qI0XkwgnEijSrR2CZStIzS4R'}});
        // const posts = axios({
        //   method: 'get',
        //   url: 'http://localhost:8000/api/posts',
        //   headers:{
        //     'X-Authorization': 'hV2yJCCwMz0gWckgfS3c7OeIsBvQL4Sg92qA7R44qI0XkwgnEijSrR2CZStIzF1C'
        //   }
        // });
        console.log('posts:', posts.data);

        setPosts(posts.data);

      }

      fetchPosts();
    } , [])

  
    return (
      <>
      {posts.map((post ) => ( <Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>{post.title}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>))}
     
    
      </>
    );
  }
;

export default Example;


