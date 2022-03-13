
const Icon = ({image, name, onClick}) => {
    return (
        <>
            <input className={getIconName(name)} onClick={onClick} id={name} type="image" src={image} style={iconStyle}/>
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
