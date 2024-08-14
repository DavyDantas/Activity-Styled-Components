import React from 'react';
import { Container, StyledText, StyledButton, ButtonText, Input, StyledPicker } from './styleForm';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  return (
    <Container>
      <StyledText>Cadastro de Tarefa</StyledText>
      <Input placeholder="Título" />
      <Input placeholder="Descrição" />
      <StyledPicker>
        <Picker.Item label="Opção 1" value="option1" />
        <Picker.Item label="Opção 2" value="option2" />
        <Picker.Item label="Opção 3" value="option3" />
      </StyledPicker>
      <Input placeholder="Data" />  
      <StyledButton onPress={() => alert('Botão pressionado!')}>
        <ButtonText>Cadastrar</ButtonText>
      </StyledButton>
    </Container>
  );
}
