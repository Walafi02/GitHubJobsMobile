import styled from 'styled-components/native';
import {ActivityIndicator, Modal} from 'react-native';

export const Container = styled(Modal).attrs({
  animationType: 'fade',
  transparent: true,
})``;

export const LoadingView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
`;

export const LoadingIcon = styled(ActivityIndicator).attrs({
  size: 'large',
  color: '#fff',
})``;
