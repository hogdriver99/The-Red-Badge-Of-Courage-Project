import nav from '../images/nav.png'
import home from '../images/home.png'
import Icon from './Icon'
import Button from './Button'
import NavSideBar from './NavSideBar'
import { useEffect, useState } from 'react'
import crane from "../civilWarImages/crane.jpg"

// Get introPageOnClick function to call it when intro page icon is pressed
const Menu = ({introPageOnClick}) => {
    // Showing Mobile Version
    var initMobile = (window.innerWidth > 800? false: true)
    const [showMobileMenu, setShowMobileMenu] = useState(initMobile)

    // Detecting resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 800) {
                // if (showMobileMenu) {
                    setShowMobileMenu(false)
                //     console.log("Change")
                // }
            } else {
                // if (!showMobileMenu) {
                    setShowMobileMenu(true)
                //     console.log("Change")
                // }
            }
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Showing the navigation side bar state variable
    const [showNavBar, setShowNavBar] = useState(false)
    const navOnClick = () => {
        setShowNavBar(!showNavBar)
    }

    return (
        <>
            <div className='menu' style={menuStyle}>
                <div>
                    <Icon image={nav} name='nav' onClick={navOnClick}/>
                    <Icon image={home} name='home'/>
                    {/* Intro Page button */}
                    <Icon image={crane} name='crane' onClick={() => introPageOnClick()}/>
                </div>

                {/* Show only on big screen */}
                {!showMobileMenu && <h1>The Red Badge of Courage</h1>}

                <Button text='Log In'/>
            </div>

            {/* Show navigation side bar */}
            {showNavBar && <NavSideBar mobile={showMobileMenu}/>}
        </>
        
    )
}

export default Menu

const menuStyle = {
    height: '70px',
}
