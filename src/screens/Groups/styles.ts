import styled from "styled-components/native";

export const Container = styled.View `
    flex: 1;
    background-color: white;
    //background-color: ${({ theme }) => theme.COLORS.GRAY_600 };
    padding: 24px;

    border: 4px;
    border-color: orangered;
    border-radius: 4px;


`;

export const Title = styled.Text`
    color: black;
    //color: #fff;
    font-size: 32px;
    align-items: center;
    text-align: center;
`;

export const Text = styled.Text`
    color: gray;
    align-items: center;
    text-align: center;
`

export const TextInput = styled.TextInput`
    width: 200px;
    height: 40px;
    border-color: lightgray;
    border-width: 1px;
    border-radius: 8px;
    padding: 10px;
    margin-top: 16px;
    
`



export const ButtonLogin = styled.Text`
    background-color: lightblue;
    color: white;
    border-radius: 10px;
    text-align: center;
    align-content: center;
    align-items: center;
    width: 74px;
    height: 24px;
`

export const ButtonCreateAccount = styled.Text`
    background-color: orange;
    color: white;
    border-radius: 10px;
    text-align: center;
    align-content: center;
    align-items: center;
    width: 74px;
    height: 24px;
`
