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
        <div className='pages'><h3 className='inline-block-child'>Pages </h3>{'\u00A0'}<h3 contentEditable='true' className='page-number' id='currpage'>1-2</h3></div>
        <div>
          <Icon image={sBtnRight} name='nextpage'/>
          <Icon image={dBtnRight} name='nextChapter'/>
        </div>
    </div>
  )
};

export default ControlPanel;
