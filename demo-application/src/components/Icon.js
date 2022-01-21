
const Icon = ({image, name}) => {
    return (
        <>
            <input className={getIconName(name)} type="image" src={image} style={iconStyle}/>
            {/* add alt text */}
        </>
    )
}

const iconStyle = {
    height: '40px',
    width: '40px',
    margin: '10px',
}

function getIconName(name) {
    return 'icon-'.concat(name);
}

export default Icon
