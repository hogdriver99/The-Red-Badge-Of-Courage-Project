import nav from '../images/nav.png'
import home from '../images/home.png'
import Icon from './Icon'
import Button from './Button'

const Menu = () => {
    return (
        <div className='menu'>
            <div>
                <Icon image={nav}/>
                <Icon image={home}/>
            </div>
            <h1>The Red Badge of Courage</h1>
            <Button text='Log In'/>
            {/* <button className='btn'>Log In</button> */}
        </div>
    )
}

export default Menu

