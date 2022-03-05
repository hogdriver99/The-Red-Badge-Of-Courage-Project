import nav from '../images/nav.png'
import home from '../images/home.png'
import Icon from './Icon'
import Button from './Button'

const Menu = () => {
    return (
        <div className='menuMobile' style={menuStyle}>
            <Icon image={nav} name='nav'/>
            <h1 id='h1small'>The Red Badge of Courage</h1>
            {/* <div className='menuMobileRow'>
                <div>
                    <Icon image={nav} name='nav'/>
                    <Icon image={home} name='home'/>
                </div>
                <Button text='Log In'/>
            </div> */}
        </div>
    )
}

export default Menu

const menuStyle = {
    height: '70px',
}
