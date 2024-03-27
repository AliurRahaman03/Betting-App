import styled from 'styled-components'
import logo from '../assets/logo.png'
import download from "../assets/download.png"
import message from '../assets/message.png'
import { useNavigate } from 'react-router-dom'
import ImageSlider from '../Components/ImageSlider'

export default function Home() {

    const navigate=useNavigate();

    const images=[
        'https://ossimg.forpicstore777.top/rajalottery/banner/Banner_20240116235304i1qh.png',
        'https://ossimg.forpicstore777.top/rajalottery/banner/Banner_20240124162710y8tl.png',
        'https://ossimg.forpicstore777.top/rajalottery/banner/Banner_20240124193235rswj.png',
        'https://ossimg.forpicstore777.top/rajalottery/banner/Banner_20240116235416fjws.png',
        'https://ossimg.forpicstore777.top/rajalottery/banner/Banner_202401162351264667.png'

    ];

    // const slideImages = [
    //     {
    //       url: ,
    //       caption: 'Slide 1'
    //     },
    //     {
    //       url:"https://ossimg.forpicstore777.top/rajalottery/banner/Banner_20240116235416fjws.png",
    //       caption: 'Slide 2'
    //     },
    //     {
    //       url: 'https://ossimg.forpicstore777.top/rajalottery/banner/Banner_20240124162710y8tl.png',
    //       caption: 'Slide 3'
    //     },
    //     {
    //         url:"https://ossimg.forpicstore777.top/rajalottery/banner/Banner_20240124193235rswj.png",
    //         caption:"Slider 4"
    //     },
    //     {
    //         url:"https://ossimg.forpicstore777.top/rajalottery/banner/Banner_202401162351264667.png",
    //         caption:"Slider 5"
    //     }
    //   ];
      
      
    function logoClick(){
        navigate("/")
    }
  return (
    <Container>
        <div className="nav">
            <div className="logo">
                <img onClick={logoClick} src={logo}/>
            </div>
            <div className="left-item">
                <img src={download} alt="#" />
                <img src={message} alt="#" />

            </div>
        </div>
        <ImageSlider images={images}/>
    </Container>
  )
}

const  Container = styled.div`
display:flex;
flex-direction:column;
background-color:green;
width:100% ;
height:100vh;
.nav{
    display: flex;
    justify-contents:space-between;
    align-items:center;
    gap:11rem;
    position:relative;
    width:100%;
    height:12vw;
    background-color:gray;
    .left-item{
        gap:2rem;
        display:flex;
        justify-contents:flex-end;
        align-items:center;
        img{
            height:7vw;
        }
    }
    img{
        height:9vw;
    }
}
`