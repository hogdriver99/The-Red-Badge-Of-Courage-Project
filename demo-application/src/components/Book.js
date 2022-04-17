import React from 'react';
import Page from './Page';

const Book = () => {
  return (
    <div className='bookContainer'>
        <div className='book'>
            <Page pageSide='right'/>
            <Page pageSide='left'/>
        </div>
        <span class="popup-tag"></span>
    </div>
  )
};

export default Book;
