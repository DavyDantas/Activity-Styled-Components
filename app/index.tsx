import React from "react";
import { Container, Title, Logo, Input, Button, TextButton } from "./styles";
import ifrn from "../assets/images/ifrn.png";
import { useRouter } from "expo-router";

export default function Home() {
    const router = useRouter();

    const handlePress = () => {
      router.push("/screens"); // Navegação para a tela desejada
    };


  return(
    <Container>
      <Logo source={ifrn} />
      <Title>Agenda IFRN</Title>
      <Input placeholder="Login"/>
      <Input placeholder="Senha"/>
      <Button onPress={handlePress}>
        <TextButton> 
          Entrar
        </TextButton>
      </Button>
    </Container>
  )
}