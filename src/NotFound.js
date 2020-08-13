import React from 'react'
import styled from 'styled-components'
import logo from './Scarecrow.png';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const DivContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  flex-direction: column;
  margin: 40px;
  height: 100%;

  @media (min-width: 768px) {
    width: 50%;
    min-height: 50%;
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: 50%
    min-height: 50%;
    height: 100%;
  }
`;

export const TextError = styled.div`
    font-family: 'Inconsolata', monospace;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 25px;
    letter-spacing: -0.08em;
    text-transform: uppercase;
    color: #333333;
`;

export const Image = styled.img`
    width: 100%;  
    height: 100%;
    margin-top: 100px;
    @media (min-width: 768px) {
        margin-top: 50px;
      }
    
      @media (min-width: 1024px) {
        margin-top: 50px;
      }
    `;


export const DivTitle = styled.div`
    font-family: 'Space Mono', monospace;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 95px;
    letter-spacing: -0.035em;
    color: #333333;
    @media (min-width: 768px) {
        margin-top: 50px;
      }
    
      @media (min-width: 1024px) {
        margin-top: 50px;
      }
    `;

export const DivText = styled.div`
    font-family: 'Space Mono', monospace;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.035em;
    color: #4F4F4F;
    margin-top: 36px;
`;

export const Button = styled.button`
    width: 216px;
    height: 68px;
    top: 663px;background: #333333;
    font-family: 'Space Mono', monospace;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.035em;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-top: 64px;
`;

export const Footer = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #333333;
    text-align: center;
`;



const NotFound = () => {
  return (
    <>
        <Container>
            <DivContainer>
                <TextError>404 not found</TextError>
                <Image src={logo} alt="logo" />
            </DivContainer>
            <DivContainer>
                <DivTitle>
                    I have bad news for you
                </DivTitle>
                <DivText>
                    The page you are looking for might be removed or is temporarily unavailable
                </DivText>
                <Button>Back to homepage</Button>
            </DivContainer>
            
        </Container>
        <Footer>Lorraine @ DevChallenges.io</Footer>
    </>
        )
}

export default NotFound