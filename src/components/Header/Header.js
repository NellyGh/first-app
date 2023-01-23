import './Header.css'
import MenuItem from '../MenuItem/MenuItem'

const Header = () => {
    let dataMenu = [
        {
            id: '1',
            text: 'products',
            link: '#'
        },
        {
            id: '2',
            text: 'explore',
            link: '#'
        },
        {
            id: '3',
            text: 'shop',
            link: '#'
        },
    ]

    return (
        <header>
            <div className="logo"></div>
            <ul className="menu">
            {
                dataMenu
                .map((el) => (
                    <MenuItem key={el.id} link={el.link} text={el.text} />
                ))
            }
            </ul>
            
        </header>
    )
}

export default Header