import styled, {css} from 'styled-components/native';

export const Container = styled.ScrollView`
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #294455;

  ${({hasSubTitle}) =>
    hasSubTitle &&
    css`
      color: #888;
      font-weight: normal;
      font-size: 14px;
    `}
`;

export const Line = styled.View`
  border-width: 2px;
  border-color: #ddd;
  margin: 10px 0;
`;

export const H2 = styled.Text`
  margin: 10px 0 6px 0;
  font-size: 16px;
  color: #000;
  font-weight: bold;
`;

export const P = styled.Text`
  margin-bottom: 10px;
`;

export const Strong = styled.Text`
  font-weight: bold;
  color: #444;
`;

export const ImageLogo = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  height: 110px;
  width: 100%;
`;
