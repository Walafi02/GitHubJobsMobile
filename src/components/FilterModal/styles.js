import styled, {css} from 'styled-components/native';
import {
  Modal as ModalRN,
  TouchableOpacity,
  CheckBox as CheckBoxInput,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

export const Container = styled(ModalRN).attrs({
  transparent: true,
  animationType: 'fade',
})``;

export const ModalBackground = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.6);
  justify-content: center;
  position: relative;
`;

export const Modal = styled.ScrollView`
  background: #fff;
  margin: 20px 15px;
  padding: 10px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Button = styled(TouchableOpacity)``;

export const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  background: #2b7fc3;
  border-radius: 16px;
  min-width: 100px;
  text-align: center;
  padding: 8px 16px;
`;

export const Icon = styled(Icons).attrs({
  color: '#fff',
  size: 40,
})``;

export const IconButtonClose = styled.TouchableOpacity`
  justify-content: center;
  background: transparent;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  margin: 10px;
`;

export const TextHotSearche = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-top: 8px;
`;

export const HotSearches = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px 0;
`;

export const HotSearchesButton = styled.TouchableOpacity`
  padding: 4px 8px;
  border-width: 2px;
  border-color: #ccc;
  border-radius: 20px;
  margin: 0 4px 4px 0;
`;

export const HotSearchesButtonText = styled.Text``;

export const CheckBoxButton = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const CheckBoxText = styled.Text``;

export const CheckBox = styled(CheckBoxInput).attrs({
  tintColors: {true: '#2b7fc3', false: 'black'},
})``;
