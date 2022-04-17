import React from 'react';
import Button from './Button';
import Icon from './Icon';
import home from '../images/home.png'

const NavSideBar = ({mobile}) => {
    mobile = false
    return (
        <div className='navSideBar'>
            <div className='navContainer'>
                {mobile && <Icon image={home} name='home' onClick={null}/>}
                {mobile && <Button text='Log In'/>}
                {/* <h1>Item</h1> */}
                <Button text="Quiz Results" onClick={quizResults()}/>
                {/* Option to hide lower buttons? */}
            </div>
        </div>
        )
};

function quizResults() {
    window.confirm(localStorage.getItem("data"))
    // alert()
}
export default NavSideBar;