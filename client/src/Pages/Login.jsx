import styled from "styled-components"
import logo from '../assets/logo.png'

export default function Login() {
  return (
    <Container>
        <div className="nav">
            <button className="btn-back">Back</button>
            <img src={logo} alt="#"/>
            <button className="btn-lang">Lang</button>
        </div>
    </Container>
  )
}

const Container=styled.div`
display:flex;
flex-direction:row;
justify-content:center;
background-color:red;
width:100% ;
height:100vh;
.nav{
    position:relative;
    width:100%;
    height:12vw;
    background-color:gray;
    img{
    height:10vw;
    width:;
    }
}



`