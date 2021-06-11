import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
`;

const Grid = styled.div`
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: auto 1fr 2rem;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "header header"
    "imageMain main"
    "footer footer";

  @media (max-width: 480px) {
    grid-gap: 4rem;
    grid-template-rows: auto 400px 1fr 2rem;
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "imageMain"
      "main"
      "footer ";
  }
`;

const Header = styled.div`
  grid-area: header;
`;

const ImageMain = styled.div`
  grid-area: imageMain;
`;

const Main = styled.div`
  grid-area: main;
`;

const Footer = styled.div`
  grid-area: footer;

  p {
    margin: 0;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #333333;
    text-align: center;
  }
`;

const TextError = styled.div`
  font-family: "Inconsolata", monospace;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  letter-spacing: -0.08em;
  text-transform: uppercase;
  color: #333333;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  font-family: "Space Mono", monospace;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  letter-spacing: -0.035em;
  color: #333333;
  @media (min-width: 768px) {
    margin-top: 50px;
  }

  @media (min-width: 1024px) {
    margin-top: 50px;
  }
`;

const Description = styled.div`
  font-family: "Space Mono", monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  letter-spacing: -0.035em;
  color: #4f4f4f;
  margin-top: 36px;
`;

const Button = styled.button`
  width: 216px;
  height: 68px;
  top: 663px;
  background: #333333;
  font-family: "Space Mono", monospace;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: -0.035em;
  text-transform: uppercase;
  color: #ffffff;
  margin-top: 64px;
`;

export {
  Container,
  Grid,
  Header,
  ImageMain,
  Main,
  Footer,
  TextError,
  Image,
  Title,
  Description,
  Button,
};
