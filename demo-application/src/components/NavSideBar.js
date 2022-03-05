import React from 'react';
import Button from './Button';
import Icon from './Icon';
import home from '../images/home.png'

const NavSideBar = (show) => {
    // if (show === true) {
        console.log("works", show)
        return (
            <div className='navSideBar'>
                <div className='navContainer'>
                    <Icon image={home} name='home'/>
                    <Button text='Log In'/>
                    <h1>Item</h1>
                </div>
            </div>
          )
    // } 
    // else {
    //     return (
    //         <></>
    //     )
    // }
  
};

// const navStyle = {
//     height: '40px',
//     width: '40px',
//     margin: '10px',
// }

export default NavSideBar;