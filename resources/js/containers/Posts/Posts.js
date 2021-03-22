import React , { useState , useEffect} from 'react';

import { Button , Alert  , Card  } from 'react-bootstrap'

import axios from 'axios';

import Spinner from './../../components/UI/Spinner/Spinner'

import usePosts from './../../hooks/Posts/usePosts';



import Pagination from './../../components/UI/Pagination/Pagination';


const Posts = () => {
 
  const { loading , posts , handlePostDelete , handlePostPagination} = usePosts();

    let render = <Spinner />;


  
    if(!loading && posts.posts.length > 0 ) {

      
        render = 
        <>
       { posts.posts.map((post , index) =>  {
         console.log('posts.pageNumber:', posts.pageNumber)

         return    index <= posts.pageNumber +2  && ( <Card onClick={()=>handlePostDelete(post.id)} key={post.id} style={{ width: '18rem'   , cursor:'pointer' , margin:'2rem auto' ,  }}>
  
         <Card.Body >
           <Card.Title>{post.title}</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the bulk of
             the card's content.
           </Card.Text>
            <Button variant="danger">Delete</Button>
       
         </Card.Body>
       </Card>);
       }
       
       
   ) }

<Pagination posts={posts} click={handlePostPagination} />
    
      </>
       ;
    }
  
    return (
      <>
      { render}
     
    
      </>
    );
  }
;

export default Posts;


