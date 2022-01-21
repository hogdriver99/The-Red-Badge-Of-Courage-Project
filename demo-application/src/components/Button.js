
const Button = ({text}) => {
    return (
        <>
            <button style={buttonStyle}>{text}</button>
        </>
    )
}

Button.defaultProps = {
    text: 'btn',
}

const buttonStyle = {
    // fontWeight: '300',
    color: 'black',
    backgroundColor: 'darkcyan',
    borderWidth: '0px',
    // boxShadow: '0px 0px 3px 1px #000000',
    // borderColor: 'black',
    borderRadius: '10%',
    margin: '10px',
    fontFamily: "'Times New Roman', Times, serif",
    fontSize: '20px',
    textTransform: 'uppercase',
    height: '40px',
    padding: '10px',
    cursor: 'pointer',
}

export default Button
