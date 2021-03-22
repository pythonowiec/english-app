import React from 'react'

import { Pagination} from 'react-bootstrap'

import ReactPaginate from 'react-paginate';

const PaginationComponent = ({ posts , click}) => {

    let active = 2;
    let items = [];
    
    for (let number = posts.pageNumber + 2 ; number <= (posts.posts.length /2); number++) {
  items.push(
    <Pagination.Item key={number} active={number === active} onClick={click}>
      {number}
    </Pagination.Item>,
  );
}
console.log('posts.length:', posts.length)

const paginationBasic = (
  <div>
 

    <Pagination size="lg" style={{margin:'0 auto'}}>{items}</Pagination>
 


  </div>
);


    return paginationBasic;
}

export default PaginationComponent;
