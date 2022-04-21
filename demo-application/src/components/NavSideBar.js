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
                <Button text="Quiz Results" onClick={function (e) {quizResults()}}/>
            </div>
        </div>
        )
};

function quizResults() {
    window.confirm("Total Words Quizzed: " + localStorage.getItem("dataCount") + "\n" + localStorage.getItem("data"))
}
export default NavSideBar;