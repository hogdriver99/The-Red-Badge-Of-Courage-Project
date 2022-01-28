import nav from '../images/nav.png'
import home from '../images/home.png'
import Icon from './Icon'
import Button from './Button'

const Menu = () => {
    return (
        <div className='menu' style={menuStyle}>
            <div>
                <Icon image={nav} name='nav'/>
                <Icon image={home} name='home'/>
            </div>
            <h1>The Red Badge of Courage</h1>
            <Button text='Log In'/>
        </div>
    )
}

export default Menu

const menuStyle = {
    height: '70px',
}
