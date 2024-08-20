import React from "react";
import { Container, Title, Logo, Input, Button, TextButton } from "./styles";
import ifrn from "../../assets/ifrn.png";
export default function Home() {
  return(
    <Container>
      <Logo source={ifrn} />
      <Title>Agenda IFRN</Title>
      <Input placeholder="Login"/>
      <Input placeholder="Senha"/>
      <Button>
        <TextButton>Entrar</TextButton>
      </Button>
    </Container>
  )
}