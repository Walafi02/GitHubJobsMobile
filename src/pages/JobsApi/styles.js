import styled, {css} from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 10px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  margin: 15px 0 10px 0;
  padding-bottom: 15px;
  font-size: 22px;
  color: #294455;
  text-align: center;
  font-weight: bold;

  ${({hasSubTitle}) =>
    hasSubTitle &&
    css`
      font-size: 18px;
      padding-bottom: 10px;
    `};

  ${({hasSubSubTitle}) =>
    hasSubSubTitle &&
    css`
      font-size: 16px;
      padding-bottom: 0px;
    `};
`;

export const Paragraph = styled.Text`
  margin: 4px 0;
  font-size: 16px;

  ${({hasLink}) =>
    hasLink &&
    css`
      color: #1d80be;
    `}

  ${({hasLabel}) =>
    hasLabel &&
    css`
      color: #1d9a00;
    `}
`;
