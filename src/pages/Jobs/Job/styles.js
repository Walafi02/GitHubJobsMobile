import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 10px;
  margin-bottom: 4px;
  background: #fff;
  border-width: 2px;
  border-color: #eee;
  border-radius: 10px;
`;

export const Title = styled.Text`
  color: #1d80be;
  font-size: 16px;
`;

export const Type = styled.Text`
  color: #1d9a00;
  font-size: 14px;
`;

export const Company = styled.Text`
  color: #999;
`;

export const Location = styled.Text`
  color: #666;
`;

export const Date = styled.Text`
  color: #999;
`;

export const Card = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
