import React , { useState , useEffect} from 'react';

import { Button , Alert  , Card  } from 'react-bootstrap'

import axios from 'axios';

import Spinner from './../../components/UI/Spinner/Spinner'

import usePosts from './../../hooks/Posts/usePosts';

// import ReactPaginate from 're';
-


const Posts = () => {
 
  const { loading , posts , handlePostDelete} = usePosts();

    let render = <Spinner />;


    if(!loading && posts.length > 0 ) {
        render =  posts.map((post ) => ( <Card onClick={()=>handlePostDelete(post.id)} key={post.id} style={{ width: '18rem'   , cursor:'pointer' , margin:'2rem auto' ,  }}>
  
        <Card.Body >
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
           <Button variant="danger">Delete</Button>
      
        </Card.Body>
      </Card>)) ;
    }
  
    return (
      <>
      { render}
     
    
      </>
    );
  }
;

export default Posts;


