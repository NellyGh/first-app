import './MenuItem.css'

const MenuItem = (props) => {
    return (
        <li className="menu_item">
            <a href={props.link}>{props.text}</a>
        </li>
    )
}

export default MenuItem