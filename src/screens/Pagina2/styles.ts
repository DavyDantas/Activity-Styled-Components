import styled from "styled-components/native";
import { Picker } from '@react-native-picker/picker';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
`;

export const StyledText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin-top: 101px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 5px;
  margin-top: 20px;
  width: 80%;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
`;

export const Input = styled.TextInput`
    width: 80%;
    height: 60px;
    background-color: transparent;
    border-radius: 5px;
    padding: 10px 20px;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: bold;
    border: 1px ${({ theme }) => theme.colors.gray};
    font-style: italic;
    `;

export const ViewPicker = styled.View`
    width: 80%;
    background-color: transparent;
    border-radius: 5px;
    border: 1px ${({ theme }) => theme.colors.gray};
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`

export const StyledPicker = styled(Picker)`
    width: 100%;
    height: 60px;
    padding: 10px 20px;
`;

export const ItemPicker = styled(Picker.Item)`
    
    font-size: 18px;
    font-weight: bold;
    border: 1px ${({ theme }) => theme.colors.gray};
    font-style: italic;

`