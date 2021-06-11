import React from "react";
import {
  Container,
  Header,
  ImageMain,
  Main,
  Footer,
  TextError,
  Image,
  Grid,
  Title,
  Description,
  Button,
} from "./ErrorPage.styles";
import logo from "../../images/scare-crow.png";

const ErrorPage = () => {
  return (
    <Container>
      <Grid>
        <Header>
          <TextError>404 not found</TextError>
        </Header>
        <ImageMain>
          <Image src={logo} alt="logo" />
        </ImageMain>
        <Main>
          <Title>I have bad news for you</Title>
          <Description>
            The page you are looking for might be removed or is temporarily
            unavailable
          </Description>
          <Button>Back to homepage</Button>
        </Main>
        <Footer>
          <p> created by username Lorraine</p>
        </Footer>
      </Grid>
    </Container>
  );
};

export { ErrorPage };
