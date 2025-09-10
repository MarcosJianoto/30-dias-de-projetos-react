const Menu = ({ one, two, three }) => {

    const stringOrImage = (item) => {

        console.log(item)
        if (typeof item === 'string' && (item.endsWith('.png') || item.endsWith('.jpg') || item.endsWith('.jpeg') || item.endsWith('.svg'))) {
            if (item.endsWith('github.png')) {
                return <a href="https://github.com/MarcosJianoto"><img src={item} alt="icon" className="h-10 w-10" /></a>
            } else if (item.endsWith('linkedin.png')) {
                return <a href="https://www.linkedin.com/in/marcosjianoto/"><img src={item} alt="icon" className="h-8 w-8" /></a>
            } else if (item.endsWith('instagram.png')) {
                return <a href="https://www.instagram.com/marcosjianoto/"><img src={item} alt="icon" className="h-9 w-9" /></a>
            }
        } else {
            return <h3>{item}</h3>;
        }
    }

    return (
        <>
            <h2>{stringOrImage(one)}</h2>
            <h2>{stringOrImage(two)}</h2>
            <h2>{stringOrImage(three)}</h2>
        </>
    )
}

export default Menu