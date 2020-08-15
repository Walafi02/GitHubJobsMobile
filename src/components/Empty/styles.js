import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Dimensions} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;

export const Container = styled.View`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  height: ${SCREEN_HEIGHT - 110}px;
`;

export const EmptyIcon = styled(Icon)`
  color: rgba(43, 127, 195, 0.3);
  font-size: 150px;
`;

export const EmptyMessage = styled.Text`
  color: rgba(43, 127, 195, 0.3);
  font-size: 25px;
  text-align: center;
`;
