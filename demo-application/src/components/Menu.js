import nav from '../images/nav.png'
import home from '../images/home.png'
import Icon from './Icon'
import Button from './Button'
import NavSideBar from './NavSideBar'
import { useState } from 'react'

const Menu = () => {
    const [showNavBar, setShowNavBar] = useState(true)

    const navOnClick = () => {
        setShowNavBar(!showNavBar)
        console.log("CLICK", showNavBar)
    }

    return (
        <>
            <div className='menu' style={menuStyle}>
                <div>
                    <Icon image={nav} name='nav' onClick={navOnClick}/>
                    <Icon image={home} name='home'/>
                </div>
                <h1>The Red Badge of Courage</h1>
                <Button text='Log In'/>
            </div>
            {showNavBar && <NavSideBar show={true}/>}
        </>
        
    )
}

export default Menu

const menuStyle = {
    height: '70px',
}
