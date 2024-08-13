import React from 'react';
import { Container, StyledText, StyledButton, ButtonText, Input, StyledPicker, ViewPicker, DateInputText, DateInputWrapper } from './styles';
import { Picker } from '@react-native-picker/picker';
import { TouchableOpacity, Platform, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Link } from 'expo-router'

export default function App() {
  const [selectedValue, setSelectedValue] = React.useState(" ");
  const [date, setDate] = React.useState(new Date());
  const [show, setShow] = React.useState(false);

  const stringDate = (date: Date) => {
    var day = date.getDate()
    var month = date.getUTCMonth() + 1
    var year = date.getFullYear()

    return `${day}/${month}/${year}`
  }

  const onChange = (event: unknown, selectedDate: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };
  return (
    <Container>
      <StyledText>Cadastro de Tarefa</StyledText>
      <Input placeholder="Título" />
      <Input placeholder="Descrição" />
      
      <ViewPicker>
        <StyledPicker
          selectedValue={selectedValue}
          onValueChange={(itemValue: unknown) => setSelectedValue(itemValue as string)}
        >
          <Picker.Item label="Categoria" value="" color="#9EA0A4" />
          <Picker.Item label="categoria1" value="categoria1" />
          <Picker.Item label="categoria2" value="categoria2" />
        </StyledPicker>
      </ViewPicker>
      
      <DateInputWrapper>
        <TouchableOpacity onPress={showDatepicker}>
          <DateInputText>Data: {stringDate(date)}</DateInputText>
        </TouchableOpacity>
      </DateInputWrapper>

      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}

      <StyledButton >
        <ButtonText> <Link href="src/screens/Home/index">Cadastrar</Link></ButtonText>
      </StyledButton>
    </Container>
  );
}