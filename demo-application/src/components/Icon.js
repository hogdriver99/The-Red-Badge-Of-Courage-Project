
const Icon = ({image, name, id}) => {
    return (
        <>
            <input className={getIconName(name)} id={name} type="image" src={image} style={iconStyle}/>
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
