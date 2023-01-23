import './Logos.css'

const Logos = (props) =>{
    return(
        <div className="logo_item">
             <img src={props.src}/>
        </div>    
    )
}

export default Logos