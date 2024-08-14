import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import 'react-native-screens';
// import ifrn from "./ifrn.png";
import { Link } from 'expo-router'
import { Container, Title, Logo, Input, Button, TextButton } from "./styles";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  return (
    <Container>
      {/* <Logo source={ifrn} /> */}
      <Title>Agenda IFRN</Title>
      <Input placeholder="Login"/>
      <Input placeholder="Senha"/>
      <Link href="./screens/" asChild>
      <Button>  
        <TextButton>Entrar</TextButton>
      </Button>
      </Link>
    </Container>
  );
}
