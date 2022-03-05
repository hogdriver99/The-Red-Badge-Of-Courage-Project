import React from 'react';
import Button from './Button';
import Icon from './Icon';
import home from '../images/home.png'

const NavSideBar = ({mobile}) => {
    return (
        <div className='navSideBar'>
            <div className='navContainer'>
                {mobile && <Icon image={home} name='home'/>}
                {mobile && <Button text='Log In'/>}
                <h1>Item</h1>
            </div>
        </div>
        )
};


export default NavSideBar;