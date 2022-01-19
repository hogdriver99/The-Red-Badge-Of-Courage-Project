
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
    // color:black;
    // background-color: darkcyan;
    // border: 5px;
    // border-radius: 10%;
    // font-family:'Times New Roman', Times, serif;
    // font-size: 20px;
    // text-transform: uppercase;
    // cursor: pointer;
    // font-weight: 300;
    color: 'black',
    backgroundColor: 'darkcyan',
    borderWidth: '2px',
    borderColor: 'black',
    borderRadius: '10%',
    margin: '10px',
    fontFamily: "'Times New Roman', Times, serif",
    fontSize: '20px',
}

export default Button
