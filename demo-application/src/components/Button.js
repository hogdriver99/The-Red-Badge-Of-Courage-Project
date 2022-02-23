
const Button = ({text}) => {
    return (
        <>
            <button style={buttonStyle} onclick="btnHandler(this.text)">{text}</button>
        </>
    )
}

Button.defaultProps = {
    text: 'btn',
}

const buttonStyle = {
    color: 'black',
    backgroundColor: 'darkcyan',
    borderWidth: '0px',
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
