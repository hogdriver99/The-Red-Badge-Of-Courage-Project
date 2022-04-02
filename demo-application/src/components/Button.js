
const Button = ({id, text, onClick}) => {
    return (
        <>
            <button id={id} onClick={onClick} style={buttonStyle} onclick="btnHandler(this.text)">{text}</button>
        </>
    )
}

Button.defaultProps = {
    id: 'btn',
    text: 'btn',
    onClick: () => {},
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
