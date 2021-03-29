import React from 'react'

import {  useParams } from 'react-router-dom'

import {} from 'react-bootstrap';



const Post = ( { post}) => {

  

    const params = useParams();

    return (
        <div>
             <Card
                   
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
                         
                        
                     
                         
                      </Card.Body>
                  </Card>
        </div>
    )
}

export default Post
