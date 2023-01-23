import './ImgContent.css'

const ImgContent = (props) => {
    return (
        <div className={props.reverse ? "img_content reverse" : "img_content"}>
            <img src={props.src} />
            <div>
            <h5>{props.title}</h5>
            <p>{props.text}</p>
            </div>  
        </div>
    )
}

export default ImgContent