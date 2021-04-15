import React from "react";
import Layout from "../shared/layout/layout";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Theme from "../shared/theme/theme";
import { keyframes } from '@emotion/core'
import Button from "../shared/button/button";


const pulse = keyframes`{
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
`

const scaleIn = keyframes` {
  from {
    
    transform: scale(0.5, 0.5);
    opacity: 0.3;
  }
  to {
    transform: scale(2.5, 2.5);
    opacity: 0;
  }

}`

const StyledImg = styled.img`
object-fit: cover;
height: calc(100vh - 60px);
width: 100vw;
animation: ${pulse} 30s ease infinite;
`
const InfoContainerAnimation = styled.div`
  animation: ${scaleIn} 6s infinite cubic-bezier(.1, .11, .89, .32);
  position: absolute;
  height: 400px;
  width: 400px;
  border-radius: 200px;
  background: black;
  opacity: 0.5;
  top: 50%;
  left: 50%;
`

const InfoContainer = styled.div`
  position: absolute;
  height: 400px;
  width: 400px;
  border-radius: 200px;
  background: black;
  top: 50%;
  left: 50%;
  color: white;
  text-align: center;
  z-index: 10;
  opacity: 0.9;

  h1 {
  margin-top: 100px;

  padding-left: 1rem;
  padding-right: 1rem;
  }
`
const Container = styled.div`
position: relative;
overflow: hidden;
min-width: 800px;
font-family: "Georgia", Times, "Times New Roman", serif;
`


const MainPage: React.FC = () => {
  return (

      <Layout>
        <Container>
         <StyledImg src="https://wallpaperaccess.com/full/480568.jpg" />
         <InfoContainer>
           <h1>Amazing things are about to happen!!</h1>
           <Button variant="MAIN" text="Sign up" onClick={() => {}} />
           </InfoContainer>
           <InfoContainerAnimation />
           <InfoContainerAnimation style={{animationDelay: "1s"}} />
           <InfoContainerAnimation style={{animationDelay: "2s"}} />
           <InfoContainerAnimation style={{animationDelay: "3s"}} />
           <InfoContainerAnimation style={{animationDelay: "4s"}} />
           <InfoContainerAnimation style={{animationDelay: "5s"}} />

           
           </Container>
      </Layout>

  );
};

export default MainPage;
