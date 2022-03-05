import React from 'react';
import Page from './Page';

const Book = () => {
  return (
    <div className='bookContainer'>
        <div className='book'>
            <Page pageSide='right'/>
            <Page pageSide='left'/>
        </div>
        {/* For mobile version */}
        {/* <div className='bookOnePage'>
            <Page pageSide='one'/>
        </div> */}
    </div>
  )
};

export default Book;
