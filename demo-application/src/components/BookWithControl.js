import React from 'react';
import Book from './Book';
import ControlPanel from './ControlPanel';

const BookWithControl = () => {
  return (
    <div className='bookWithControl'>
        <Book />
        <ControlPanel />
    </div>
  )
};

export default BookWithControl;
