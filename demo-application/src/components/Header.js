import PropTypes from 'prop-types'
//EXAMPLE
//rafce

const Header = (props /*{title}*/) => {

    const onClick = (e) => {
        console.log(e) //will show the position of the object clicked
    }
    return (
        <header>
            <h1 style={headingStyle}>{props.title /*title*/}</h1>
            <button className='btn' onClick={onClick}>btn</button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Traker',
}

const headingStyle = {
    color: 'red',
    backgroundColor: 'blue'

}
// Header.PropTypes = {
//     title: PropTypes.string,
// }

export default Header
