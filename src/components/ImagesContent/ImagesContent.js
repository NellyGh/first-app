import './ImagesContent.css'

const ImagesContent = (props) => {
    return (
        <div className="images">
            <img src={props.src}/>
            <p className="img_text">{props.text}</p>
        </div>
    )
}

export default ImagesContent