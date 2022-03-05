import nav from '../images/nav.png'
import home from '../images/home.png'
import Icon from './Icon'
import Button from './Button'
import NavSideBar from './NavSideBar'
import { useEffect, useState } from 'react'

const Menu = () => {
    // Showing Mobile Version

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            console.log("RESIZE")
            if (window.innerWidth > 800) {
                setShowMobileMenu(false)
                console.log("Web")
            } else {
                setShowMobileMenu(true)
                console.log("Mobile")
            }
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Showing the navigation side bar
    const [showNavBar, setShowNavBar] = useState(true)
    const navOnClick = () => {
        setShowNavBar(!showNavBar)
        console.log(window.innerWidth)
    }

    return (
        <>
            <div className='menu' style={menuStyle}>
                {showMobileMenu && <Icon image={nav} name='nav' onClick={navOnClick}/>}
                <div>
                    {!showMobileMenu && <Icon image={nav} name='nav' onClick={navOnClick}/>}
                    {!showMobileMenu && <Icon image={home} name='home'/>}
                </div>
                {!showMobileMenu && <h1>The Red Badge of Courage</h1>}
                {showMobileMenu && <h1 id='h1small'>The Red Badge of Courage</h1>}
                {!showMobileMenu && <Button text='Log In'/>}
            </div>
            {showNavBar && <NavSideBar mobile={showMobileMenu}/>}
        </>
        
    )
}

export default Menu

const menuStyle = {
    height: '70px',
}
