import './Products.css'

const Products = (props) => {
    return (
        <div className="row">
            <img src={props.src}/>
            <h5>{props.title}</h5>
            <p>{props.text}</p>
        </div>
    )
}

export default Products