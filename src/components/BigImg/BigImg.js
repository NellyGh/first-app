import './BigImg.css'


const BigImg = (props) =>{
    return (
        <div className="big_img">
              <img src={props.src}/>
        </div>
    )
}

export default BigImg