import nav from '../images/nav.png'
import home from '../images/home.png'
import Icon from './Icon'
import Button from './Button'
import NavSideBar from './NavSideBar'
import IntroPage from './IntroPage'
import { useEffect, useState } from 'react'
import crane from "../civilWarImages/crane.jpg"

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

    // Showing the navigation side bar
    const [showNavBar, setShowNavBar] = useState(false)
    const navOnClick = () => {
        setShowNavBar(!showNavBar)
    }

    // Showing intro page
    // const [showInroPage, setIntroPage] = useState(false)
    // const introPageOnClick = () => {
    //     setIntroPage(!showInroPage)
    // }
    // let showIntroPageNow = false
    // let getShowIntroPage = () => {
    //     console.log(showIntroPageNow)
    //     showIntroPageNow = !showIntroPageNow
    //     console.log(showIntroPageNow)
    //     return showIntroPageNow
    // }

    return (
        <>
            <div className='menu' style={menuStyle}>
                {/* {showMobileMenu && <Icon image={nav} name='nav' onClick={navOnClick}/>} */}
                {/* {!showMobileMenu &&  */}
                <div>
                    <Icon image={nav} name='nav' onClick={navOnClick}/>
                    <Icon image={home} name='home'/>
                    {/* Intro Page button */}
                    <Icon image={crane} name='home' onClick={() => introPageOnClick()}/>
                </div>

                {/* {showMobileMenu && <Icon image={nav} name='nav' onClick={navOnClick}/>} */}
                {/* {showMobileMenu && <Icon image={home} name='home'/>} */}
                {/* Intro Page button */}
                {/* {showMobileMenu && <Icon image={crane} name='home' onClick={() => introPageOnClick()}/>} */}

                {!showMobileMenu && <h1>The Red Badge of Courage</h1>}
                {/* {showMobileMenu && <h1 id='h1small'>The Red Badge of Courage</h1>} */}
                <Button text='Log In'/>
            </div>
            {showNavBar && <NavSideBar mobile={showMobileMenu}/>}
            {/* <NavSideBar mobile={showMobileMenu}/> */}
            {/* <IntroPage /> */}

        </>
        
    )
}

export default Menu

const menuStyle = {
    height: '70px',
}
