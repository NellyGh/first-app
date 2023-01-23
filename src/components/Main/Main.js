import BigImg from "../BigImg/BigImg"
import ImagesContent from '../ImagesContent/ImagesContent'
import Logos from '../Logos/Logos'
import Products from '../Products/Products'
import ImgContent from '../ImgContent/ImgContent'
import './Main.css'
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));


 const Main = () => {
    let bigImgData = [
        {
            id:"1",
            src:`${images['image-1.png']}`,
           
        },
        {
            id:"2",
            src:`${images['image-24.png']}`,
            
        },
        {
            id:"3",
            src:`${images['image-28.png']}`,
           
        },
        {
            id:"4",
            src:`${images['image-32.png']}`,
            
        }
    ]

    let imagesData = [
        {
            id:"1",
            src:`${images['image-2.png']}`,
            text:"Phone Booth",
        },
        {
            id:"2",
            src:`${images['image-3.png']}`,
            text:"Focus Room",
        },
        {
            id:"3",
            src:`${images['image-4.png']}`,
            text:"Meeting Room",
        },
        {
            id:"4",
            src:`${images['image-5.png']}`,
            text:"Open Meeting Room",
        },
    ]

    let logosData = [
        {
            id:"1",
            src:`${images['image-6.png']}`,
        },
        {
            id:"2",
            src:`${images['image-7.png']}`,
        },
        {
            id:"3",
            src:`${images['image-8.png']}`,
        },
        {
            id:"4",
            src:`${images['image-9.png']}`,
        },
        {
            id:"5",
            src:`${images['image-10.png']}`,
        },
        {
            id:"6",
            src:`${images['image-11.png']}`,
        },
        {
            id:"7",
            src:`${images['image-12.png']}`,
        },
        {
            id:"8",
            src:`${images['image-13.png']}`,
        },
        {
            id:"9",
            src:`${images['image-14.png']}`,
        },
        {
            id:"10",
            src:`${images['image-15.png']}`,
        },
        {
            id:"11",
            src:`${images['image-16.png']}`,
        },
        {
            id:"12",
            src:`${images['image-17.png']}`,
        },
        {
            id:"13",
            src:`${images['image-18.png']}`,
        },
        {
            id:"14",
            src:`${images['image-19.png']}`,
        },
        {
            id:"15",
            src:`${images['image-20.png']}`,
        },
        {
            id:"16",
            src:`${images['image-21.png']}`,
        },
        {
            id:"17",
            src:`${images['image-22.png']}`,
        },
        {
            id:"18",
            src:`${images['image-23.png']}`,
        },
        
    ]

    let productsData = [
        {
            id:"1",
            src:`${images['image-25.png']}`,
            title:'Cost-effective',
            text:'At a fraction of the cost of traditional construction, our pre-fab solutions create additional space for focused work and collaboration without constant noise, debris and distraction.'

        },
        {
            id:"2",
            src:`${images['image-26.png']}`,
            title:'Time-Saving',
            text:"Thoughtful design ensures simple installation in a few hours or less. And, because our products are safety ensured, you'll never have to spend time or money chasing after permits, contractors, and more."
            
        },
        {
            id:"3",
            src:`${images['image-27.png']}`,
            title:'Flexible',
            text:"Unlike traditional construction, our purpose-built products were designed to adapt with your workspace and can easily be positioned in various places throughout your office, or to an entirely new location."
            
        },
    ]

    let imgData = [
        {
            id:"1",
            src:`${images['image-29.png']}`,
            title:'We sell direct',
            text:"We make extra room in the budget without compromising quality by selling direct. No middle man, and no additional construction required.",
            reverse:false
        },
        {
            id:"2",
            src:`${images['image-30.png']}`,
            title:'We build with purpose.',
            text:"We’re not just building another room with four walls, we’re building a more productive workspace. We design with you in mind, looking at every detail as an opportunity to enable a better working environment for everyone.",
            reverse:true
        },
        {
            id:"3",
            src:`${images['image-31.png']}`,
            title:'We design sustainably.',
            text:"From design to delivery, we strive to lessen our impact on the environment. Our products are engineered with recycled materials and replace multiple cycles of construction, minimizing noise and our footprint.",
            reverse:false
        },


    ]

    return (
        <main>
            {
                bigImgData
                .filter((img) => img.id < 2)
                .map((img) => (
                    <BigImg key={img.id} src={img.src} />
                ))
            }
            <div className='text_content'>
                <div className="bold_text">
                    Design that<br/> inspires a better<br/> way to work.
                </div>
                <p>
                    We've developed a series of purpose-built
                    rooms that<br/> offer companies looking
                    for change an affordable,<br/> sustainable,
                    and flexible alternative to fixed<br/> construction
                     and traditional office design.
                </p>
            </div>
            <div className="images_container">
                {
                    imagesData
                    .map((img) => (
                        <ImagesContent key={img.id} src={img.src} text={img.text} />
                    ))
                }	
            </div>
           <h2>The world's leading brands choose ROOM.</h2>
           <div className='logos'>
            {
                logosData
                .map((img) => (
                    <Logos key={img.id} src={img.src} />
                ))
            }
           </div>
           {
                bigImgData
                .filter((img) => img.id > 1 && img.id < 3)
                .map((img) => (
                    <BigImg key={img.id} src={img.src} />
                ))
            }
            <div className="text">
                <p>
                    Our simple and seamless modular products allow<br/>
                    teams to shape and then reshape their work<br/>
                    environment with ease.
                </p>
            </div>
            <div className="products">
            {
                productsData
                .map((img) => (
                    <Products key={img.id} src={img.src} title={img.title} text={img.text} />
                ))
            }
            </div>
            {
                bigImgData
                .filter((img) => img.id > 2 && img.id < 4)
                .map((img) => (
                    <BigImg key={img.id} src={img.src} />
                ))
            }
            <div className="text">
                <p>
                    We take a human approach to a business-to-business<br/>
                     industry, breaking the boundaries between corporate <br/>
                     and personal, and rethinking every step of the user experience along the way.
                </p>
            </div>
            {
                imgData
                .map((img) => (
                    <ImgContent key={img.id} src={img.src} 
                    title={img.title} text={img.text} reverse={img.reverse} />
                ))
            }
            {
                bigImgData
                .filter((img) => img.id > 3)
                .map((img) => (
                    <BigImg key={img.id} src={img.src} />
                ))
            }
        </main>
    )
 }

 export default Main
