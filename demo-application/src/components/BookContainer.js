import React from 'react';
import Page from './Page';

const BookContainer = () => {
  return (
    <div className='bookContainer'>
        <div className='book'>
            <Page pageSide='right'/>
            <Page pageSide='left'/>
        </div>
    </div>
  )
};

export default BookContainer;

