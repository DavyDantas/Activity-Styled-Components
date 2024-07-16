import React from 'react';
import { Container, StyledText, StyledButton, ButtonText, Input, StyledPicker, ViewPicker, DateInput } from './styles';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-datepicker';

export default function App() {
  const [selectedValue, setSelectedValue] = React.useState("");
  const [date, setDate] = React.useState(new Date());

  return (
    <Container>
      <StyledText>Cadastro de Tarefa</StyledText>
      <Input placeholder="Título" />
      <Input placeholder="Descrição" />
      
      <ViewPicker>
        <StyledPicker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Categoria" value="" color="#9EA0A4" />
          <Picker.Item label="categoria1" value="categoria1" />
          <Picker.Item label="categoria2" value="categoria2" />
        </StyledPicker>
      </ViewPicker>
      
      <DateInput
        date={date}
        mode="date"
        placeholder="Selecione a data"
        format="DD/MM/YYYY"
        confirmBtnText="Confirmar"
        cancelBtnText="Cancelar"
        onDateChange={(selectedDate) => setDate(selectedDate)}
      />  
      <StyledButton onPress={() => alert('Botão pressionado!')}>
        <ButtonText>Cadastrar</ButtonText>
      </StyledButton>
    </Container>
  );
}