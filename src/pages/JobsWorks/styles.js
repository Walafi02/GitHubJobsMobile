import styled, {css} from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 15px 10px;
`;

export const TextBignote = styled.Text`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #000;

  ${({hasLink}) =>
    hasLink &&
    css`
      color: #1d80be;
    `}
`;

export const Card = styled.View`
  background: #fff;
  border-width: 2px;
  border-radius: 10px;
  border-color: #ccc;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 6px 4px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: 120px;
  height: 200px;
  margin: 0 auto;
`;

export const Title = styled.Text`
  margin: 20px 0 0 0;
  text-align: center;
  font-size: 16px;
  color: #333;
`;

export const Description = styled.Text`
  margin: 2px 0 0 0;
  text-align: center;
  font-size: 14px;
  color: #666;

  ${({hasLink}) =>
    hasLink &&
    css`
      color: #1d80be;
    `}
`;

export const Price = styled.Text`
  padding-top: 20px;
  color: #088a4b;
  font-size: 52px;
  font-weight: bold;
  text-align: center;
`;

export const Cards = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const CardImage = styled.Image`
  width: 75px;
  height: 40px;
  margin: 10px;
`;

export const ViewBottom = styled.View`
  margin: 20px 0 30px;
`;

export const ArrowIcon = styled(Icon).attrs({
  name: 'arrow-downward',
})`
  color: #ccc;
  font-size: 40px;
  margin: 0 auto;
`;
