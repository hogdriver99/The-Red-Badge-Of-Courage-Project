
const Icon = ({image}) => {
    return (
        <>
            <input type="image" src={image} style={iconStyle}/>
            {/* add alt text */}
        </>
    )
}

const iconStyle = {
    height: '40px',
    width: '40px',
    margin: '10px',
}

export default Icon
