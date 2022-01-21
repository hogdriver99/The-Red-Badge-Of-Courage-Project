import React from 'react';
import Button from './Button';

const ControlPanel = () => {
  return (
    <div className='controlPanel'>
        <div>
          <Button text='<<'/>
          <Button text='<'/>
        </div>
        <h3 className='page-number'>Page</h3>
        <div>
          <Button text='>'/>
          <Button text='>>'/>
        </div>
    </div>
  )
};

export default ControlPanel;
