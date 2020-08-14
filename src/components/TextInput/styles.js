import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 70px;
  margin: 10px 0;
`;

export const Input = styled.TextInput`
  flex: 1%;
  color: #000;
  font-size: 16px;

  border-width: 2px;
  border-color: #eee;
  border-radius: 10px;
  padding: 2px 10px;
  margin-top: 6px;

  ${({isFocused}) =>
    isFocused &&
    css`
      border-color: #ccc;
    `}
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;
