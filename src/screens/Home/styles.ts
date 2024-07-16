import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primary};
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 40px;
    color: #fefefe;
    font-weight: bold;
    text-align: center;
    flex-wrap: wrap;
    width: 50%;
    margin: 35px;
  `;

export const Logo = styled.Image`
    margin-top: 101px;
    width: 78px;
    height: 105px;
`;

export const Input = styled.TextInput`
    width: 70%;
    height: 50px;
    background-color: #fefefe;
    border-radius: 5px;
    padding: 10px 10px 10px 20px;
    margin-bottom: 20px;
    font-size: 15px;
`;

export const Button = styled.TouchableOpacity`
    width: 70%;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.gray};
    justify-content: center;
    align-items: center;
`;

export const TextButton = styled.Text`
    color: #fefefe;
    font-size: 20px;
    font-weight: 400;
`;