import React from 'react';
import Icon from './Icon';
import sBtnRight from '../images/btn-single-right.png'
import dBtnRight from '../images/btn-double-right.png'
import sBtnLeft from '../images/btn-single-left.png'
import dBtnLeft from '../images/btn-double-left.png'

const ControlPanel = () => {
  return (
    <div className='controlPanel'>
        <div>
          <Icon image={dBtnLeft} name='backChapter'/>
          <Icon image={sBtnLeft} name='backpage'/>
        </div>
        <h3 className='page-number'>Page</h3>
        <div>
          <Icon image={sBtnRight} name='nextpage'/>
          <Icon image={dBtnRight} name='nextChapter'/>
        </div>
    </div>
  )
};

export default ControlPanel;
