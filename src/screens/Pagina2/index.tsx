import React from 'react';
import { Container, StyledText, StyledButton, ButtonText, Input, StyledPicker, ItemPicker, ViewPicker } from './styles';
import { Picker } from '@react-native-picker/picker';
import RNPickerSelect from "react-native-picker-select";

export default function App() {
  return (
    <Container>
      <StyledText>Cadastro de Tarefa</StyledText>
      <Input placeholder="Título" />
      <Input placeholder="Descrição" />
      <ViewPicker>
        <RNPickerSelect 
          onValueChange={(value) => console.log(value)}
          items = {[
            { label: "TypeScript", value: "TypeScript" },
            { label: "Python", value: "Python" },
            { label: "Java", value: "Java" },
            { label: "C++", value: "C++" },
            { label: "C", value: "C" },
          ]}
          placeholder={{label:"Categoria", value: null}}
          />
          
          
        
      </ViewPicker>
      <Input placeholder="Data" />  
      <StyledButton onPress={() => alert('Botão pressionado!')}>
        <ButtonText>Cadastrar</ButtonText>
      </StyledButton>
    </Container>
  );
}
